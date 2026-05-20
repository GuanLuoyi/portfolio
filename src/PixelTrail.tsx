/* eslint-disable react/no-unknown-property */
import { Canvas, useThree } from "@react-three/fiber";
import { shaderMaterial, useTrailTexture } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import type { ComponentProps } from "react";
import * as THREE from "three";
import "./PixelTrail.css";

type GooeyFilterProps = {
  id?: string;
  strength?: number;
};

type PixelTrailProps = {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  textureSize?: number;
  easingFunction?: (value: number) => number;
  canvasProps?: ComponentProps<typeof Canvas>;
  glProps?: {
    antialias?: boolean;
    powerPreference?: WebGLPowerPreference;
    alpha?: boolean;
  };
  gooeyFilter?: GooeyFilterProps;
  color?: string;
  className?: string;
};

const GooeyFilter = ({ id = "goo-filter", strength = 10 }: GooeyFilterProps) => (
  <svg className="goo-filter-container">
    <defs>
      <filter id={id}>
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={strength} />
        <feColorMatrix in="blur" result="goo" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
);

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color("#ffffff"),
  },
  `
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  `
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;
      float trail = texture2D(mouseTrail, gridUvCenter).r;
      float alpha = smoothstep(0.12, 1.0, trail) * 0.72;

      if (alpha <= 0.001) {
        discard;
      }

      gl_FragColor = vec4(pixelColor, alpha);
    }
  `,
);

function Scene({
  gridSize,
  trailSize,
  maxAge,
  interpolate,
  textureSize,
  easingFunction,
  pixelColor,
}: Required<
  Pick<PixelTrailProps, "gridSize" | "trailSize" | "maxAge" | "interpolate" | "textureSize" | "easingFunction">
> & {
  pixelColor: string;
}) {
  const size = useThree((state) => state.size);
  const viewport = useThree((state) => state.viewport);
  const dotMaterial = useMemo(() => new DotMaterial(), []);

  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor);

  const [trail, onMove] = useTrailTexture({
    size: textureSize,
    radius: trailSize,
    maxAge,
    interpolate,
    ease: easingFunction,
  });

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh onPointerMove={onMove} scale={[scale, scale, 1]}>
      <planeGeometry args={[2, 2]} />
      <primitive
        gridSize={gridSize}
        mouseTrail={trail}
        object={dotMaterial}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  textureSize = 256,
  easingFunction = (value) => value,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: "high-performance",
    alpha: true,
  },
  gooeyFilter,
  color = "#ffffff",
  className = "",
}: PixelTrailProps) {
  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setEventSource(document.body);
  }, []);

  return (
    <>
      {gooeyFilter && <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />}
      <Canvas
        {...canvasProps}
        className={`pixel-canvas ${className}`}
        dpr={[1, 1.25]}
        eventPrefix="client"
        eventSource={eventSource ?? undefined}
        gl={glProps}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          canvasProps.onCreated?.({ gl } as Parameters<NonNullable<typeof canvasProps.onCreated>>[0]);
        }}
        style={{
          background: "transparent",
          pointerEvents: "none",
          ...(gooeyFilter ? { filter: `url(#${gooeyFilter.id})` } : {}),
          ...canvasProps.style,
        }}
      >
        <Scene
          easingFunction={easingFunction}
          gridSize={gridSize}
          interpolate={interpolate}
          maxAge={maxAge}
          pixelColor={color}
          textureSize={textureSize}
          trailSize={trailSize}
        />
      </Canvas>
    </>
  );
}
