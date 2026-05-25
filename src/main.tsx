import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import BlurText from "./BlurText";
import PixelTrail from "./PixelTrail";
import "./styles.css";
import toaster from "./assets/toaster.svg";
import signage from "./assets/signage.svg";
import toast from "./assets/toast.svg";
import bake1 from "./assets/bake-1.webp";
import bake2 from "./assets/bake-2.webp";
import bake3 from "./assets/bake-3.webp";
import bakesBubble from "./assets/bakes-bubble.svg";
import emailIcon from "./assets/Email.svg";
import instagramIcon from "./assets/Instagram.svg";
import linkedinIcon from "./assets/Linkedin.svg";
import workWomensHealth from "./assets/work-womens-health.png";
import workRecoveryStrain from "./assets/work-recovery-strain.png";
import workAiCoach from "./assets/work-ai-coach.png";
import workCudisAge from "./assets/work-cudis-age.png";
import workCudisBranding from "./assets/work-cudis-branding.png";
import workAltrudata from "./assets/work-altrudata.png";
import workApiAssets from "./assets/work-api-assets.png";
import workPulseCode from "./assets/work-pulse-code.png";
import womensHealthCalendar from "./assets/works-womens-health/cycle-calendar.png";
import womensHealthCycleSummary from "./assets/works-womens-health/cycle-summary.png";
import womensHealthHero from "./assets/works-womens-health/hero-cycle.png";
import womensHealthContextualLogging from "./assets/works-womens-health/contextual-logging.png";
import womensHealthLoggerDetail from "./assets/works-womens-health/logger-detail.png";
import womensHealthLoggerSummary from "./assets/works-womens-health/logger-summary.png";
import womensHealthPredictionCard from "./assets/works-womens-health/prediction-card.png";
import womensHealthCyclePhaseProgression from "./assets/works-womens-health/cycle-phase-progression.png";
import womensHealthSolution from "./assets/works-womens-health/solution-architecture.png";
import womensHealthSummaryCard from "./assets/works-womens-health/summary-card.png";
import womensHealthSymptomOptions from "./assets/works-womens-health/symptom-options.png";
import womensHealthTemperatureCard from "./assets/works-womens-health/temperature-card.png";
import womensHealthTodayCard from "./assets/works-womens-health/today-card.png";
import womensHealthTodayView from "./assets/works-womens-health/today-view.png";
import womensHealthAppleHealthIcon from "./assets/works-womens-health/apple-health-icon.png";
import womensHealthOuraIcon from "./assets/works-womens-health/oura-icon.png";
import womensHealthWhoopIcon from "./assets/works-womens-health/whoop-icon.png";
import womensHealthOverviewIcon from "./assets/works-womens-health/overview-icon.png";
import womensHealthPainUncertaintyIcon from "./assets/works-womens-health/pain-uncertainty-icon.png";
import womensHealthPainContextIcon from "./assets/works-womens-health/pain-context-icon.png";
import womensHealthPainRecommendationsIcon from "./assets/works-womens-health/pain-recommendations-icon.png";
import womensHealthPainPredictionIcon from "./assets/works-womens-health/pain-prediction-icon.png";
import womensHealthPrinciplePredictIcon from "./assets/works-womens-health/principle-predict-icon.png";
import womensHealthPrincipleInformIcon from "./assets/works-womens-health/principle-inform-icon.png";
import womensHealthPrincipleMeetIcon from "./assets/works-womens-health/principle-meet-icon.png";
import womensHealthPrincipleActionableIcon from "./assets/works-womens-health/principle-actionable-icon.png";
import recoveryHero from "./assets/works-recovery-strain/hero@2x.png";
import recoveryOverviewMetrics from "./assets/works-recovery-strain/overview-metrics.png";
import recoveryPainMetricOverload from "./assets/works-recovery-strain/pain-metric-overload.svg";
import recoveryPainGenericAdvice from "./assets/works-recovery-strain/pain-generic-advice.svg";
import recoveryPainInvisibleFatigue from "./assets/works-recovery-strain/pain-invisible-fatigue.svg";
import recoveryPainUnsustainableRoutines from "./assets/works-recovery-strain/pain-unsustainable-routines.svg";
import recoverySolutionArchitecture from "./assets/works-recovery-strain/solution-architecture.png";
import recoveryTodayView from "./assets/works-recovery-strain/today-view.png";
import recoveryAdaptiveStates from "./assets/works-recovery-strain/adaptive-states.png";
import recoveryTodayRecovery from "./assets/works-recovery-strain/today-recovery.png";
import recoveryTodayStrain from "./assets/works-recovery-strain/today-strain.png";
import recoveryReadiness from "./assets/works-recovery-strain/recovery-readiness.png";
import recoveryGuidance from "./assets/works-recovery-strain/recovery-guidance.png";
import recoveryDrivers from "./assets/works-recovery-strain/recovery-drivers.png";
import recoveryTrends from "./assets/works-recovery-strain/recovery-trends.png";
import recoveryStrainReadiness from "./assets/works-recovery-strain/strain-readiness.png";
import recoveryStrainGuidance from "./assets/works-recovery-strain/strain-guidance.png";
import recoveryStrainDrivers from "./assets/works-recovery-strain/strain-drivers.png";
import recoveryActivityLog from "./assets/works-recovery-strain/activity-log.png";
import recoveryStrainTrend from "./assets/works-recovery-strain/strain-trend.png";
import recoveryFeedbackLoop from "./assets/works-recovery-strain/feedback-loop.png";
import playgroundFrame from "./assets/playground/playground frame.png";
import playgroundArrow from "./assets/playground/arrow.svg";
import playgroundClip from "./assets/playground/clip.svg";
import playgroundAllTheWayUp from "./assets/playground/all the way up.png";
import playgroundArroyoLogo from "./assets/playground/arroyo.png";
import playgroundArtcenterLogo from "./assets/playground/artcenter.png";
import playgroundDigitalBiodome from "./assets/playground/digital biodome.png";
import playgroundEcoVideo from "./assets/playground/ecoconstruct -1.mp4";
import playgroundEcoPoster from "./assets/playground/ecoconstruct2.png";
import playgroundBlossom from "./assets/playground/glassy blossom.png";
import playgroundZEraOne from "./assets/playground/z-era1.png";
import playgroundZEraTwo from "./assets/playground/z-era2.png";
import aboutArrow from "./assets/about/about-arrow.png";
import aboutPortrait from "./assets/about/about-portrait.png";
import aboutToast from "./assets/about/about-toast.svg";

type Language = "en" | "zh";
type NavTarget = "home" | "works" | "playground" | "about" | "contact";
type View = "home" | "about" | "womens-health" | "recovery-strain";

const copy = {
  en: {
    nav: [
      { label: "WORKS", target: "works" },
      { label: "PLAYGROUND", target: "playground" },
      { label: "CONTACT", target: "contact" },
      { label: "ABOUT", target: "about" },
    ] as const,
    menu: "MENU",
    hero: {
      role: "Product Designer",
      bread: "Also: Bread Fermenter",
      bakes: "RECENT BAKES",
      headline: "Designing adaptive experiences across AI, wellness, and future interaction.",
      bio: "Product designer at CUDIS. Researching generative interfaces at Stanford HAI. Background in computer science & interaction design.",
      toasterLabel: "Reveal the toaster animation",
      baking: "currently baking something...",
    },
    worksHeading: "../Works",
    workItems: [
      ["WOMEN’S HEALTH", "Health / Wearable / Personalization / Mobile"],
      ["RECOVERY & STRAIN", "Health / Wearables / Behaviors / Mobile"],
      ["AI COACH", "AI / Health / Wearables / Mobile"],
      ["CUDIS AGE", "Longevity / Health / Wearables / Mobile"],
      ["WELLNESS BRAND ECOSYSTEM", "Marketing / Shopify / Web"],
      ["ALTRUDATA", "BtoB / SAAS / Web"],
      ["API TO ASSESTS", "Stanford HAI / Research / Gamify / Generative UI"],
      ["PULSE CODE", "Biosignals / Future Interaction"],
    ],
    playground: {
      heading: "../Things I Couldn't Stop Thinking About",
      subtitle: "experiments, unfinished ideas, weird things, and occasional obsessions",
      mobileNote: "best explored on desktop",
      ecoQuestion: "What if ecological systems could be touched?",
      ecoDescription:
        "A tangible interaction and data visualization project that simulates urban impact on wildlife, allowing users to explore changes and test restoration strategies.",
      collaborated: "Collaborated with:",
      projects: {
        "digital-biodome": {
          title: "Digital Biodôme",
          question: "What if emotions could grow into ecosystems?",
          description:
            "Digital Biodôme transforms smiles into abstract digital blossoms, allowing people to collectively cultivate an evolving online Biodôme shaped by emotion, participation, and emergence.",
        },
        "z-era": {
          title: "Z-ERA",
          question: "What happens when birth becomes a privilege?",
          description:
            "In a post-collapse future shaped by infertility and environmental disaster, Z-ERA explores a regime where AI fertility deities determine who is worthy of being born, questioning power, reproduction, and the politics of survival.",
          linkLabel: "Watch the video",
        },
        "all-the-way-up": {
          title: "All the Way Up!",
          question: "What if cleaning felt magical?",
          description:
            "Exploring everyday rituals through embodied interaction, All the Way Up! turns cleaning into a playful human-computer communication system where physical scrubbing becomes a way to transform and restore digital space.",
        },
      },
    },
    contact: {
      heading: "../Contact",
      subtitle: "Open to connect and co-create <3",
      label: "Contact links",
      backToTop: "Back to Top",
    },
    footer: "Designed & coded by Zoey Guan © 2026",
    preloader: "proofing ideas...",
    about: {
      heading: "../About",
      caption: "we both overthink",
      portraitAlt: "Luoyi Guan",
      title: "I design adaptive systems that help people better understand themselves.",
      experience: [
        ["Computer Science", "Hangzhou Dianzi University"],
        ["Media Design Practices", "Art Center College of Design"],
        ["UX Designer", "UCLA Trustworthy Lab"],
        ["Research Assistant", "Stanford HAI"],
        ["Product Designer", "CUDIS"],
      ],
    },
  },
  zh: {
    nav: [
      { label: "作品", target: "works" },
      { label: "试验场", target: "playground" },
      { label: "联系", target: "contact" },
      { label: "关于", target: "about" },
    ] as const,
    menu: "菜单",
    hero: {
      role: "产品设计师",
      bread: "也在发酵面包",
      bakes: "最近出炉",
      headline: "设计跨越 AI、健康与未来交互的自适应体验。",
      bio: "CUDIS 产品设计师；在 Stanford HAI 研究生成式界面。拥有计算机科学与交互设计背景。",
      toasterLabel: "显示烤面包机动效",
      baking: "正在烘焙一些新想法...",
    },
    worksHeading: "../作品",
    workItems: [
      ["女性健康", "健康 / 可穿戴 / 个性化 / 移动端"],
      ["恢复与压力", "健康 / 可穿戴 / 行为 / 移动端"],
      ["AI 教练", "AI / 健康 / 可穿戴 / 移动端"],
      ["CUDIS AGE", "长寿 / 健康 / 可穿戴 / 移动端"],
      ["健康品牌生态", "营销 / Shopify / 网页"],
      ["ALTRUDATA", "B2B / SaaS / 网页"],
      ["API TO ASSESTS", "Stanford HAI / 研究 / 游戏化 / 生成式 UI"],
      ["PULSE CODE", "生物信号 / 未来交互"],
    ],
    playground: {
      heading: "../那些一直萦绕在脑海里的事",
      subtitle: "实验、未完成的想法、奇怪的小东西，以及偶尔挥之不去的执念",
      mobileNote: "桌面端体验更完整",
      ecoQuestion: "如果生态系统可以被触摸，会发生什么？",
      ecoDescription:
        "一个结合实体交互与数据可视化的项目，用来模拟城市活动对野生动物的影响，让用户探索变化并测试生态修复策略。",
      collaborated: "合作方：",
      projects: {
        "digital-biodome": {
          title: "Digital Biodôme",
          question: "如果情绪能生长成生态系统呢？",
          description:
            "Digital Biodôme 将笑容转化为抽象的数字花朵，让人们共同培育一个由情绪、参与和涌现塑造的在线 Biodôme。",
        },
        "z-era": {
          title: "Z-ERA",
          question: "当出生成为一种特权，会发生什么？",
          description:
            "在一个由不孕与环境灾难塑造的后崩塌未来中，Z-ERA 描绘了由 AI 生育神明决定谁值得被诞生的制度，追问权力、繁衍与生存政治。",
          linkLabel: "观看视频",
        },
        "all-the-way-up": {
          title: "All the Way Up!",
          question: "如果清洁也可以像魔法一样呢？",
          description:
            "All the Way Up! 以具身交互重新想象日常清洁，把擦拭动作变成一种有趣的人机沟通方式，用来转换并修复数字空间。",
        },
      },
    },
    contact: {
      heading: "../联系",
      subtitle: "欢迎连接，一起创造 <3",
      label: "联系方式",
      backToTop: "回到顶部",
    },
    footer: "由 Zoey Guan 设计与编写 © 2026",
    preloader: "想法发酵中...",
    about: {
      heading: "../关于",
      caption: "我们都想太多",
      portraitAlt: "管珞伊",
      title: "我设计自适应系统，帮助人们更好地理解自己。",
      experience: [
        ["计算机科学", "杭州电子科技大学"],
        ["Media Design Practices", "ArtCenter College of Design"],
        ["UX 设计师", "UCLA Trustworthy Lab"],
        ["研究助理", "Stanford HAI"],
        ["产品设计师", "CUDIS"],
      ],
    },
  },
} satisfies Record<Language, Record<string, unknown>>;

const workImages = [
  workWomensHealth,
  workRecoveryStrain,
  workAiCoach,
  workCudisAge,
  workCudisBranding,
  workAltrudata,
  workApiAssets,
  workPulseCode,
];

const womensHealthImageAssets = {
  hero: womensHealthHero,
  contextualLogging: womensHealthContextualLogging,
  solution: womensHealthSolution,
  todayView: womensHealthTodayView,
  todayCard: womensHealthTodayCard,
  symptomOptions: womensHealthSymptomOptions,
  predictionCard: womensHealthPredictionCard,
  cyclePhaseProgression: womensHealthCyclePhaseProgression,
  temperatureCard: womensHealthTemperatureCard,
  summaryCard: womensHealthSummaryCard,
  calendar: womensHealthCalendar,
  loggerDetail: womensHealthLoggerDetail,
  loggerSummary: womensHealthLoggerSummary,
  cycleSummary: womensHealthCycleSummary,
  competitorIcons: {
    appleHealth: womensHealthAppleHealthIcon,
    oura: womensHealthOuraIcon,
    whoop: womensHealthWhoopIcon,
  },
  overviewIcon: womensHealthOverviewIcon,
  painIcons: {
    uncertainty: womensHealthPainUncertaintyIcon,
    context: womensHealthPainContextIcon,
    recommendations: womensHealthPainRecommendationsIcon,
    prediction: womensHealthPainPredictionIcon,
  },
  principleIcons: {
    predict: womensHealthPrinciplePredictIcon,
    inform: womensHealthPrincipleInformIcon,
    meet: womensHealthPrincipleMeetIcon,
    actionable: womensHealthPrincipleActionableIcon,
  },
};

const recoveryStrainImageAssets = {
  hero: recoveryHero,
  overviewMetrics: recoveryOverviewMetrics,
  painIcons: [
    recoveryPainMetricOverload,
    recoveryPainGenericAdvice,
    recoveryPainInvisibleFatigue,
    recoveryPainUnsustainableRoutines,
  ],
  solutionArchitecture: recoverySolutionArchitecture,
  todayView: recoveryTodayView,
  adaptiveStates: recoveryAdaptiveStates,
  todayRecovery: recoveryTodayRecovery,
  todayStrain: recoveryTodayStrain,
  recoveryReadiness,
  recoveryGuidance,
  recoveryDrivers,
  recoveryTrends,
  strainReadiness: recoveryStrainReadiness,
  strainGuidance: recoveryStrainGuidance,
  strainDrivers: recoveryStrainDrivers,
  activityLog: recoveryActivityLog,
  strainTrend: recoveryStrainTrend,
  feedbackLoop: recoveryFeedbackLoop,
};
const playgroundAssets = {
  grid: playgroundFrame,
  ecoconstructVideo: playgroundEcoVideo,
  ecoconstructPoster: playgroundEcoPoster,
  digitalBlossom: playgroundBlossom,
  digitalBiodome: playgroundDigitalBiodome,
  allTheWayUp: playgroundAllTheWayUp,
  zEraPrimary: playgroundZEraOne,
  zEraSecondary: playgroundZEraTwo,
  clip: playgroundClip,
  arrowFrame: playgroundArrow,
  artcenterLogo: playgroundArtcenterLogo,
  arroyoLogo: playgroundArroyoLogo,
};

function handleMobileToggle(setActive: React.Dispatch<React.SetStateAction<boolean>>) {
  if (window.matchMedia("(hover: none)").matches) {
    setActive((value) => !value);
  }
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`portfolio-tag section-label${className ? ` ${className}` : ""}`}>{children}</div>;
}

function Chip({
  children,
  className = "",
  disabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <div className={`portfolio-tag chip${disabled ? " is-muted" : ""}${className ? ` ${className}` : ""}`}>
      <p>{children}</p>
    </div>
  );
}

function ContactLink({
  href,
  icon,
  iconClassName = "",
  label,
}: {
  href: string;
  icon: string;
  iconClassName?: string;
  label: string;
}) {
  const isEmail = href.startsWith("mailto:");

  return (
    <a
      className="contact-link"
      href={href}
      rel={isEmail ? undefined : "noreferrer"}
      target={isEmail ? undefined : "_blank"}
      aria-label={label}
    >
      <img className={`contact-icon${iconClassName ? ` ${iconClassName}` : ""}`} src={icon} alt="" loading="lazy" />
      <span>{label.toUpperCase()}</span>
    </a>
  );
}

function SiteNav({
  language,
  onNavigate,
  onLanguageChange,
}: {
  language: Language;
  onNavigate: (target: NavTarget) => void;
  onLanguageChange: (language: Language) => void;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const content = copy[language];

  const handleNavClick = (target: NavTarget) => {
    onNavigate(target);
    setIsMobileNavOpen(false);
  };

  return (
    <header className={`site-nav${isMobileNavOpen ? " is-mobile-open" : ""}`}>
      <button
        className="site-brand nav-button"
        onClick={() => {
          onNavigate("home");
          setIsMobileNavOpen(false);
        }}
        type="button"
      >
        LUOYI GUAN
      </button>

      <nav className="site-nav-links" aria-label="Primary navigation">
        <div className={`language-toggle is-${language}`}>
          <span className="language-toggle-thumb" aria-hidden="true" />
          <button
            aria-pressed={language === "en"}
            className={`language-button${language === "en" ? " active-language" : ""}`}
            onClick={() => onLanguageChange("en")}
            type="button"
          >
            EN
          </button>
          <button
            aria-pressed={language === "zh"}
            className={`language-button font-chinese${language === "zh" ? " active-language" : ""}`}
            onClick={() => onLanguageChange("zh")}
            type="button"
          >
            中文
          </button>
        </div>

        <button
          aria-expanded={isMobileNavOpen}
          className="mobile-menu-button nav-button"
          onClick={() => setIsMobileNavOpen((value) => !value)}
          type="button"
        >
          {content.menu}
          <span />
        </button>

        <div className="nav-link-list">
          {content.nav.map((item) => (
            <button
              className="nav-button link-button"
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              type="button"
            >
              {item.label}
              <span />
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

function DesktopContent({ language }: { language: Language }) {
  const content = copy[language].hero;

  return (
    <section className="absolute left-[14.58%] top-[28.06%] z-10 w-[49.17%]">
      <div className="flex items-center gap-[1.25cqw]">
        <Chip>{content.role}</Chip>
        <div className="bread-hover-wrap">
          <div className="bread-popover" aria-hidden="true">
            <img className="bread-popover-bg" src={bakesBubble} alt="" loading="lazy" />
            <div className="bread-popover-content">
              <p>{content.bakes}</p>
              <div>
                <img src={bake1} alt="" loading="lazy" />
                <img src={bake2} alt="" loading="lazy" />
                <img src={bake3} alt="" loading="lazy" />
              </div>
            </div>
          </div>
          <button className="portfolio-tag chip bread-tag is-muted" type="button">
            {content.bread}
          </button>
        </div>
      </div>

      <BlurText
        animateBy="words"
        className="hero-blur-title mt-[2.22cqh] max-w-[43.44cqw] font-montserrat text-[2.71cqw] font-normal leading-[1.6]"
        delay={85}
        direction="bottom"
        stepDuration={0.42}
        text={content.headline}
      />

      <BlurText
        animateBy="words"
        className="hero-blur-title mt-[2.22cqh] max-w-[49.17cqw] font-montserrat text-[1.25cqw] font-normal leading-[1.6]"
        delay={35}
        direction="bottom"
        rootMargin="-8% 0px"
        stepDuration={0.32}
        text={content.bio}
      />
    </section>
  );
}

function MobileContent({ language }: { language: Language }) {
  const content = copy[language].hero;

  return (
    <section className="mobile-hero-copy absolute left-0 top-[20.9%] z-10 w-full px-[6.11cqw]">
      <div className="flex flex-col items-start justify-center gap-[1.05cqh]">
        <Chip className="mobile-home-tag">{content.role}</Chip>
        <Chip className="mobile-home-tag bread-tag" disabled>
          {content.bread}
        </Chip>
      </div>

      <BlurText
        animateBy="words"
        className="hero-blur-title mobile-hero-headline mt-[1.45cqh] max-w-[87.79cqw] font-montserrat text-[7.12cqw] font-normal leading-[1.6]"
        delay={75}
        direction="bottom"
        stepDuration={0.38}
        text={content.headline}
      />

      <BlurText
        animateBy="words"
        className="hero-blur-title mobile-hero-bio mt-[1.45cqh] max-w-[87.79cqw] font-montserrat text-[3.05cqw] font-normal leading-[1.6]"
        delay={32}
        direction="bottom"
        rootMargin="-8% 0px"
        stepDuration={0.3}
        text={content.bio}
      />
    </section>
  );
}

function InteractiveIllustration({ language, mobile = false }: { language: Language; mobile?: boolean }) {
  const [active, setActive] = useState(false);
  const className = `${mobile ? "mobile-illustration" : "desktop-illustration"}${active ? " is-active" : ""}`;
  const content = copy[language].hero;

  return (
    <button
      aria-label={content.toasterLabel}
      aria-pressed={active}
      className={className}
      onClick={() => handleMobileToggle(setActive)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      type="button"
    >
      <img className="toast-pop" src={toast} alt="" loading="lazy" />
      <img className="toaster-body" src={toaster} alt="" />
      <img className="toaster-signage" src={signage} alt="" loading="lazy" />
      <span className="baking-copy">{content.baking}</span>
    </button>
  );
}

function DesktopHomepage({ language }: { language: Language }) {
  return (
    <section
      className="portfolio-artboard desktop-artboard parallax-layer relative aspect-video h-auto max-h-dvh w-screen max-w-[calc(100dvh*16/9)] overflow-hidden bg-portfolio-paper max-[640px]:hidden"
      id="home"
    >
      <DesktopContent language={language} />
      <InteractiveIllustration language={language} />
    </section>
  );
}

function MobileHomepage({ language }: { language: Language }) {
  return (
    <section
      className="portfolio-artboard mobile-artboard relative hidden aspect-[393/852] h-dvh max-h-dvh w-auto max-w-screen overflow-hidden bg-portfolio-paper max-[640px]:block"
      id="home-mobile"
    >
      <MobileContent language={language} />
      <InteractiveIllustration language={language} mobile />
    </section>
  );
}

function WorkCard({
  confidential,
  description,
  href,
  image,
  index,
  onOpen,
  overlayBody,
  overlayTitle,
  title,
  visibleRows,
}: {
  confidential?: boolean;
  description: string;
  href?: string;
  image: string;
  index: number;
  onOpen?: () => void;
  overlayBody?: string;
  overlayTitle?: string;
  title: string;
  visibleRows: Set<number>;
}) {
  const row = Math.floor(index / 2);
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const maxRotate = 5;

    event.currentTarget.style.setProperty("--tilt-x", `${(-y * maxRotate * 2).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(x * maxRotate * 2).toFixed(2)}deg`);
  };

  const resetTilt = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };
  const hasOverlay = Boolean(overlayTitle && overlayBody);

  const content = (
    <>
      <div
        className={`work-card-image-wrap${hasOverlay ? " has-work-overlay" : ""}${confidential ? " is-confidential" : ""}`}
        onPointerLeave={resetTilt}
        onPointerMove={handlePointerMove}
        tabIndex={hasOverlay ? 0 : undefined}
      >
        <img className="work-card-image" src={image} alt={`${title} project preview`} loading="lazy" />
        {hasOverlay && (
          <div className="work-card-overlay" aria-hidden="true">
            <strong>{overlayTitle}</strong>
            <p>{overlayBody}</p>
          </div>
        )}
      </div>
      <div className="work-card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );

  return (
    <article
      className={`work-card${visibleRows.has(row) ? " is-visible" : ""}`}
      data-work-row={row}
      style={{ "--row-delay": `${(index % 2) * 90}ms` } as React.CSSProperties}
    >
      {href && onOpen ? (
        <a
          className="work-card-link"
          href={href}
          onClick={(event) => {
            event.preventDefault();
            onOpen();
          }}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}

function WorksPage({
  language,
  onOpenRecoveryStrain,
  onOpenWomensHealth,
}: {
  language: Language;
  onOpenRecoveryStrain: () => void;
  onOpenWomensHealth: () => void;
}) {
  const [visibleRows, setVisibleRows] = useState<Set<number>>(new Set());
  const worksGridRef = useRef<HTMLDivElement | null>(null);
  const content = copy[language];
  const workItems = content.workItems.map(([title, description], index) => ({
    confidential: index === 6,
    description,
    href: index === 0 ? "#/works/womens-health" : index === 1 ? "#/works/recovery-strain" : undefined,
    image: workImages[index],
    onOpen: index === 0 ? onOpenWomensHealth : index === 1 ? onOpenRecoveryStrain : undefined,
    overlayBody:
      index === 6
        ? "This work is protected by NDA and cannot be shared publicly."
        : index > 1
          ? "Currently documenting the process."
          : undefined,
    overlayTitle: index === 6 ? "Confidential Work" : index > 1 ? "Case Study Coming Soon" : undefined,
    title,
  }));

  useEffect(() => {
    const grid = worksGridRef.current;
    if (!grid) return;

    const rowElements = Array.from(grid.querySelectorAll<HTMLElement>("[data-work-row]"));

    const showRows = (rowsToShow: number[]) => {
      if (rowsToShow.length === 0) return;

      setVisibleRows((current) => {
        const next = new Set(current);
        rowsToShow.forEach((row) => next.add(row));
        return next;
      });
    };

    const revealRowsInViewport = () => {
      const viewportHeight = Math.max(window.innerHeight, 1);
      const visibleTop = viewportHeight * 0.04;
      const visibleBottom = viewportHeight * 0.92;
      const rowsToShow = rowElements
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          return rect.bottom >= visibleTop && rect.top <= visibleBottom;
        })
        .map((element) => Number(element.dataset.workRow));

      showRows(rowsToShow);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const rowsToShow = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => Number((entry.target as HTMLElement).dataset.workRow));

        showRows(rowsToShow);
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.02,
      },
    );

    rowElements.forEach((element) => observer.observe(element));

    const firstFrame = window.requestAnimationFrame(revealRowsInViewport);
    const secondFrame = window.requestAnimationFrame(() => window.requestAnimationFrame(revealRowsInViewport));
    const settleTimer = window.setTimeout(revealRowsInViewport, 260);

    window.addEventListener("scroll", revealRowsInViewport, { passive: true });
    window.addEventListener("resize", revealRowsInViewport);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(settleTimer);
      window.removeEventListener("scroll", revealRowsInViewport);
      window.removeEventListener("resize", revealRowsInViewport);
    };
  }, [language]);

  return (
    <section className="works-page" id="works">
      <div className="works-inner">
        <SectionLabel className="works-heading">{content.worksHeading}</SectionLabel>
        <div className="works-grid" ref={worksGridRef}>
          {workItems.map((item, index) => (
            <WorkCard index={index} key={item.title} visibleRows={visibleRows} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlaygroundPage({ language }: { language: Language }) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isMobileStackVisible, setIsMobileStackVisible] = useState(false);
  const mobileStackRef = useRef<HTMLDivElement | null>(null);
  const hoverDelayRef = useRef<number | null>(null);
  const content = copy[language].playground;
  const isEcoActive = hoveredCard === "ecoconstruct";
  const activeProject =
    hoveredCard === "digital-biodome" || hoveredCard === "z-era" || hoveredCard === "all-the-way-up"
      ? hoveredCard
      : null;
  const activeProjectContent = activeProject
    ? {
        "digital-biodome": {
          ...content.projects["digital-biodome"],
          images: [playgroundAssets.digitalBiodome],
        },
        "z-era": {
          ...content.projects["z-era"],
          images: [playgroundAssets.zEraPrimary, playgroundAssets.zEraSecondary],
          link: {
            href: "https://vimeo.com/1087857457?fl=pl&fe=vl",
            label: content.projects["z-era"].linkLabel,
          },
        },
        "all-the-way-up": {
          ...content.projects["all-the-way-up"],
          images: [playgroundAssets.allTheWayUp],
        },
      }[activeProject]
    : null;

  useEffect(() => {
    const stack = mobileStackRef.current;
    if (!stack) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMobileStackVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(stack);
    return () => observer.disconnect();
  }, []);

  const clearHoverDelay = () => {
    if (hoverDelayRef.current !== null) {
      window.clearTimeout(hoverDelayRef.current);
      hoverDelayRef.current = null;
    }
  };

  const openHoverAfterDelay = (card: string) => {
    clearHoverDelay();
    hoverDelayRef.current = window.setTimeout(() => {
      setHoveredCard(card);
      hoverDelayRef.current = null;
    }, 500);
  };

  const closeHover = () => {
    clearHoverDelay();
    setHoveredCard(null);
  };

  const handleSketchbookKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, card: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setHoveredCard((current) => (current === card ? null : card));
    }

    if (event.key === "Escape") {
      closeHover();
    }
  };

  useEffect(() => clearHoverDelay, []);

  return (
    <section className="playground-page" id="playground">
      <div className="playground-inner">
        <SectionLabel className="works-heading playground-heading">{content.heading}</SectionLabel>
        <p className="playground-subtitle">{content.subtitle}</p>

        <div
          className={`playground-mobile-stack${isMobileStackVisible ? " is-visible" : ""}`}
          ref={mobileStackRef}
        >
          <div className="mobile-scrap-pile" aria-hidden="true">
            <span className="mobile-scrap scrap-eco">
              <img src={playgroundAssets.ecoconstructPoster} alt="Ecoconstruct project preview" loading="lazy" />
            </span>
            <span className="mobile-scrap scrap-biodome">
              <img src={playgroundAssets.digitalBiodome} alt="Digital Biodome project preview" loading="lazy" />
            </span>
            <span className="mobile-scrap scrap-zera-one">
              <img src={playgroundAssets.zEraPrimary} alt="Z-ERA project preview" loading="lazy" />
            </span>
            <span className="mobile-scrap scrap-all-way">
              <img src={playgroundAssets.allTheWayUp} alt="All the Way Up project preview" loading="lazy" />
            </span>
            <span className="mobile-scrap scrap-blossom">
              <img src={playgroundAssets.digitalBlossom} alt="Glass Blossom project preview" loading="lazy" />
            </span>
            <span className="mobile-scrap scrap-zera-two">
              <img src={playgroundAssets.zEraSecondary} alt="Z-ERA secondary project preview" loading="lazy" />
            </span>
            <img className="mobile-stack-clip" src={playgroundAssets.clip} alt="" loading="lazy" />
          </div>
          <p className="mobile-stack-note">{content.mobileNote}</p>
        </div>

        <div
          className={`playground-board${isEcoActive ? " is-eco-active" : ""}${activeProject ? " is-project-active" : ""}`}
          onMouseLeave={closeHover}
        >
          <img className="playground-grid-paper" src={playgroundAssets.grid} alt="" loading="lazy" />
          <div className="playground-divider" />

          <button
            className="playground-eco-card"
            onBlur={closeHover}
            onFocus={() => setHoveredCard("ecoconstruct")}
            onMouseEnter={() => openHoverAfterDelay("ecoconstruct")}
            onMouseLeave={closeHover}
            type="button"
          >
            <span className="playground-label eco-label">ECOCONSTRUCT</span>
            <span className="eco-default-stack">
              <span className="polaroid eco-back">
                <img src={playgroundAssets.ecoconstructPoster} alt="Ecoconstruct project preview" loading="lazy" />
              </span>
              <span className="polaroid eco-front">
                <video autoPlay loop muted playsInline preload="metadata" aria-label="Ecoconstruct interaction preview">
                  <source src={playgroundAssets.ecoconstructVideo} type="video/mp4" />
                </video>
              </span>
              <img className="playground-clip eco-clip" src={playgroundAssets.clip} alt="" loading="lazy" />
              <img className="playground-arrow eco-arrow" src={playgroundAssets.arrowFrame} alt="" loading="lazy" />
            </span>
            <span className="eco-hover-layout">
              <span className="eco-hover-images">
                <span className="polaroid eco-hover-top">
                  <video autoPlay loop muted playsInline preload="metadata" aria-label="Ecoconstruct interaction preview">
                    <source src={playgroundAssets.ecoconstructVideo} type="video/mp4" />
                  </video>
                </span>
                <span className="polaroid eco-hover-bottom">
                  <img src={playgroundAssets.ecoconstructPoster} alt="Ecoconstruct project still" loading="lazy" />
                </span>
                </span>
                <span className="eco-hover-copy">
                  <span className="eco-title">ECOCONSTRUCT</span>
                <span className="eco-question">{content.ecoQuestion}</span>
                <span className="eco-description">{content.ecoDescription}</span>
                <span className="eco-collab-title">{content.collaborated}</span>
                <span className="eco-collab-tags">
                  <span className="eco-collab-logo">
                    <img src={playgroundAssets.artcenterLogo} alt="ArtCenter" loading="lazy" />
                  </span>
                  <span className="eco-collab-logo">
                    <img src={playgroundAssets.arroyoLogo} alt="Arroyo" loading="lazy" />
                  </span>
                </span>
              </span>
            </span>
          </button>

          <div className="playground-card digital-blossom-card">
            <span className="polaroid">
              <img src={playgroundAssets.digitalBlossom} alt="Glass Blossom project preview" loading="lazy" />
            </span>
            <img className="playground-clip blossom-clip" src={playgroundAssets.clip} alt="" loading="lazy" />
            <span>GLASS BLOSSOM</span>
          </div>
          <div
            className="playground-card digital-biodome-card"
            aria-label={`${content.projects["digital-biodome"].title}: ${content.projects["digital-biodome"].question}`}
            onFocus={() => setHoveredCard("digital-biodome")}
            onMouseEnter={() => openHoverAfterDelay("digital-biodome")}
            onKeyDown={(event) => handleSketchbookKeyDown(event, "digital-biodome")}
            onBlur={closeHover}
            role="button"
            tabIndex={0}
          >
            <span className="polaroid">
              <img src={playgroundAssets.digitalBiodome} alt="Digital Biodome project preview" loading="lazy" />
            </span>
            <img className="playground-clip biodome-clip" src={playgroundAssets.clip} alt="" loading="lazy" />
            <img className="playground-arrow biodome-arrow" src={playgroundAssets.arrowFrame} alt="" loading="lazy" />
            <span>DIGITAL BIODOME</span>
          </div>
          <div
            className="playground-card all-way-card"
            aria-label={`${content.projects["all-the-way-up"].title}: ${content.projects["all-the-way-up"].question}`}
            onFocus={() => setHoveredCard("all-the-way-up")}
            onMouseEnter={() => openHoverAfterDelay("all-the-way-up")}
            onKeyDown={(event) => handleSketchbookKeyDown(event, "all-the-way-up")}
            onBlur={closeHover}
            role="button"
            tabIndex={0}
          >
            <span className="polaroid">
              <img src={playgroundAssets.allTheWayUp} alt="All the Way Up project preview" loading="lazy" />
            </span>
            <img className="playground-clip all-way-clip" src={playgroundAssets.clip} alt="" loading="lazy" />
            <span>ALL THE WAY UP!</span>
          </div>
          <div
            className="playground-card z-era-card"
            aria-label={`${content.projects["z-era"].title}: ${content.projects["z-era"].question}`}
            onFocus={() => setHoveredCard("z-era")}
            onMouseEnter={() => openHoverAfterDelay("z-era")}
            onKeyDown={(event) => handleSketchbookKeyDown(event, "z-era")}
            onBlur={closeHover}
            role="button"
            tabIndex={0}
          >
            <span className="polaroid z-era-back">
              <img src={playgroundAssets.zEraPrimary} alt="Z-ERA project preview" loading="lazy" />
            </span>
            <span className="polaroid z-era-front">
              <img src={playgroundAssets.zEraSecondary} alt="Z-ERA secondary project preview" loading="lazy" />
            </span>
            <img className="playground-clip z-era-clip" src={playgroundAssets.clip} alt="" loading="lazy" />
            <img className="playground-arrow z-era-arrow" src={playgroundAssets.arrowFrame} alt="" loading="lazy" />
            <span>Z-ERA</span>
          </div>
          <div className={`playground-info-layout ${activeProject ? `is-${activeProject}` : ""}`}>
            {activeProjectContent && (
              <>
                <div className="playground-info-images">
                  {activeProjectContent.images.map((image, index) => (
                    <span className={`polaroid info-polaroid info-polaroid-${index + 1}`} key={image}>
                      <img src={image} alt={`${activeProjectContent.title} project detail ${index + 1}`} loading="lazy" />
                    </span>
                  ))}
                </div>
                <div className="playground-info-copy">
                  <span className="eco-title">{activeProjectContent.title}</span>
                  <span className="eco-question">{activeProjectContent.question}</span>
                  <span className="eco-description">{activeProjectContent.description}</span>
                  {"link" in activeProjectContent && (
                    <a
                      className="playground-info-link"
                      href={activeProjectContent.link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {activeProjectContent.link.label}
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage({ language, onBackToTop }: { language: Language; onBackToTop: () => void }) {
  const content = copy[language].contact;

  return (
    <section className="contact-page" id="contact">
      <div className="contact-inner">
        <SectionLabel className="contact-heading">{content.heading}</SectionLabel>
        <p className="contact-subtitle">{content.subtitle}</p>
        <div className="contact-links" aria-label={content.label}>
          <ContactLink href="https://www.instagram.com/zoeyiyoul" icon={instagramIcon} label="Instagram" />
          <ContactLink href="https://www.linkedin.com/in/luoyiguan" icon={linkedinIcon} label="LinkedIn" />
          <ContactLink href="mailto:zoey.lguan@gmail.com" icon={emailIcon} iconClassName="contact-icon-email" label="Email" />
        </div>
        <button className="portfolio-tag back-to-top-button" onClick={onBackToTop} type="button">
          <span aria-hidden="true">→</span>
          {content.backToTop}
        </button>
      </div>
    </section>
  );
}

function Footer({ language }: { language: Language }) {
  return <footer className="site-footer">{copy[language].footer}</footer>;
}

function Preloader({ isLeaving, language }: { isLeaving: boolean; language: Language }) {
  return (
    <div className={`preloader${isLeaving ? " is-leaving" : ""}`} role="status" aria-live="polite">
      <div className="preloader-content">
        <img className="preloader-toast" src={aboutToast} alt="" />
        <p className="preloader-copy">{copy[language].preloader}</p>
      </div>
    </div>
  );
}

function AboutPage({ language }: { language: Language }) {
  const content = copy[language].about;

  return (
    <section className="about-page">
      <div className="about-inner">
        <SectionLabel className="about-heading">{content.heading}</SectionLabel>
        <div className="about-main">
          <div className="about-portrait-wrap">
            <img className="about-doodle" src={aboutArrow} alt="" loading="lazy" />
            <img className="about-portrait" src={aboutPortrait} alt={content.portraitAlt} />
            <p className="about-caption">{content.caption}</p>
          </div>
          <div className="about-copy">
            <h1>{content.title}</h1>
            {language === "en" ? (
              <>
                <p>
                  I’m Luoyi “Zoey” Guan, a product and interaction designer working across{" "}
                  <strong>wellness, AI, and emerging interfaces.</strong> My work often starts with invisible signals —
                  health data, behaviors, emotions, physiological states — and turns them into experiences people can
                  understand, trust, and act on.
                </p>
                <p>
                  Currently, I design consumer wellness experiences at <strong>CUDIS</strong>, where I work on 0→1 mobile
                  features across longevity, AI coaching, women’s health, recovery, and social wellness. I also research
                  generative interfaces at <strong>Stanford HAI</strong>, exploring how AI can reshape the way interfaces
                  are composed, personalized, and experienced.
                </p>
                <p>
                  Before design, I studied <strong>computer science and front-end development</strong>, which shaped the
                  way I approach products: not only as screens, but as systems with logic, constraints, feedback loops,
                  and behaviors. I enjoy moving between strategy, interaction design, prototyping, and implementation —
                  especially in ambiguous problem spaces where the interface is still being defined.
                </p>
                <p>
                  Outside of design, I spend an unreasonable amount of time experimenting with{" "}
                  <strong>sourdough, milk bread, and fermentation</strong>. I like slow systems, tiny variables, and the
                  strange satisfaction of watching something gradually become alive.
                </p>
                <p>
                  I’m currently interested in{" "}
                  <strong>
                    AI-native products, health technology, adaptive interaction systems, and teams building thoughtful
                    tools for human behavior.
                  </strong>
                </p>
              </>
            ) : (
              <>
                <p>
                  我是管珞伊 “Zoey” Guan，一名产品与交互设计师，工作横跨{" "}
                  <strong>健康、AI 与新兴界面</strong>。我的项目常常从不可见的信号开始：健康数据、行为、情绪、生理状态，
                  再把它们转化为人们能够理解、信任并采取行动的体验。
                </p>
                <p>
                  目前我在 <strong>CUDIS</strong> 设计面向消费者的健康体验，负责长寿、AI 教练、女性健康、恢复与社交健康等
                  0→1 移动端功能。我也在 <strong>Stanford HAI</strong> 研究生成式界面，探索 AI 如何重塑界面的组成、个性化与体验方式。
                </p>
                <p>
                  在进入设计之前，我学习过 <strong>计算机科学与前端开发</strong>，这影响了我理解产品的方式：它们不只是屏幕，
                  也是由逻辑、约束、反馈回路和行为组成的系统。我喜欢在策略、交互设计、原型和实现之间切换，
                  尤其是在界面形态仍然需要被定义的模糊问题里。
                </p>
                <p>
                  设计之外，我会花很多时间实验 <strong>酸面包、牛奶面包与发酵</strong>。我喜欢缓慢的系统、微小变量，
                  以及看着某样东西逐渐变得鲜活的奇妙满足感。
                </p>
                <p>
                  我目前关注{" "}
                  <strong>AI 原生产品、健康科技、自适应交互系统，以及为人类行为构建温和工具的团队。</strong>
                </p>
              </>
            )}
          </div>
        </div>
        <div className="about-experience">
          <img className="about-toast-mark" src={aboutToast} alt="" loading="lazy" />
          <div className="about-experience-list">
            {content.experience.map(([role, place]) => (
              <div className="about-experience-item" key={`${role}-${place}`}>
                <span />
                <p>
                  {role}
                  <br />
                  {place}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer language={language} />
    </section>
  );
}

function RecoveryStrainPage({ language, onNextProject }: { language: Language; onNextProject: () => void }) {
  const content = recoveryStrainCaseCopy[language];

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".case-reveal"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);

  return (
    <section className="case-page recovery-strain-page">
      <div className="case-inner">
        <SectionLabel className="case-heading">{content.label}</SectionLabel>

        <div className="case-hero case-reveal">
          <img src={recoveryStrainImageAssets.hero} alt="Recovery and Strain interface states preview" />
        </div>

        <section className="case-overview recovery-overview case-reveal">
          <div className="case-meta-grid">
            <div>
              <span>{content.overview.categoryLabel}</span>
              <p>{content.overview.category}</p>
            </div>
            <div>
              <span>{content.overview.yearLabel}</span>
              <p>{content.overview.year}</p>
            </div>
            <div>
              <span>{content.overview.roleLabel}</span>
              <p>{content.overview.role}</p>
            </div>
            <div>
              <span>{content.overview.deliverablesLabel}</span>
              <p>{content.overview.deliverables}</p>
            </div>
            <div>
              <span>{content.overview.creditLabel}</span>
              <p>{content.overview.credit}</p>
            </div>
          </div>
          <div className="case-intro">
            <img
              className="recovery-overview-metrics-image"
              src={recoveryStrainImageAssets.overviewMetrics}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
            <h1>{content.overview.title}</h1>
            <p>{content.overview.body}</p>
          </div>
        </section>

        <section className="case-text-block case-reveal">
          <h2>{content.problemTitle}</h2>
          <h3>{content.problemSubtitle}</h3>
          <div className="recovery-question-row">
            {content.questions.map((question) => (
              <p key={question}>{question}</p>
            ))}
          </div>
        </section>

        <section className="case-pain-grid recovery-pain-grid case-reveal" aria-label={content.painsLabel}>
          {content.pains.map(([title, quote], index) => (
            <div className="case-pain-item" key={title}>
              <img
                className="case-pain-icon recovery-pain-svg"
                src={recoveryStrainImageAssets.painIcons[index]}
                alt=""
                loading="lazy"
              />
              <h3>{title}</h3>
              <p>{quote}</p>
            </div>
          ))}
        </section>

        <div className="case-dark-band recovery-dark-band">
          <div className="case-dark-inner">
            <section className="case-principles recovery-principles case-reveal" aria-label={content.principlesLabel}>
              <h2>{content.principlesTitle}</h2>
              {content.principles.map(([title, description]) => (
                <div className="case-principle" key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </section>

            <section className="case-text-block case-reveal">
              <h2>{content.solutionTitle}</h2>
              <h3>{content.solutionSubtitle}</h3>
              <p>{content.solutionBody}</p>
            </section>
            <CaseImage
              src={recoveryStrainImageAssets.solutionArchitecture}
              alt="Recovery and Strain decision-making system architecture"
            />

            <section className="case-text-block case-reveal is-feature-heading">
              <h2>{content.todayTitle}</h2>
              <p>{content.todayBody}</p>
            </section>
            <CaseImage src={recoveryStrainImageAssets.todayView} alt="Recovery and strain today view screens" />

            <section className="case-text-block case-reveal is-summary">
              <p>{content.todaySummary}</p>
            </section>

            <section className="case-split case-reveal">
              <CaseImage src={recoveryStrainImageAssets.adaptiveStates} alt="Adaptive strain and recovery states" />
              <div>
                <h2>{content.sections.adaptive[0]}</h2>
                <p>{content.sections.adaptive[1]}</p>
              </div>
            </section>

            <section className="case-split case-reveal is-reversed">
              <div>
                <h2>{content.sections.todayRecovery[0]}</h2>
                <p>{content.sections.todayRecovery[1]}</p>
              </div>
              <CaseImage src={recoveryStrainImageAssets.todayRecovery} alt="Recovery state card with AI guidance" />
            </section>

            <section className="case-split case-reveal">
              <CaseImage src={recoveryStrainImageAssets.todayStrain} alt="Activity strain recommendation card" />
              <div>
                <h2>{content.sections.todayStrain[0]}</h2>
                <p>{content.sections.todayStrain[1]}</p>
              </div>
            </section>

            <section className="case-text-block case-reveal is-feature-heading">
              <h2>{content.recoveryTitle}</h2>
              <p>{content.recoveryBody}</p>
            </section>

            <section className="case-split case-reveal">
              <CaseImage src={recoveryStrainImageAssets.recoveryReadiness} alt="Recovery readiness score card" />
              <div>
                <h2>{content.sections.recoveryReadiness[0]}</h2>
                <p>{content.sections.recoveryReadiness[1]}</p>
              </div>
            </section>

            <section className="case-split case-reveal is-reversed">
              <div>
                <h2>{content.sections.recoveryGuidance[0]}</h2>
                <p>{content.sections.recoveryGuidance[1]}</p>
              </div>
              <CaseImage src={recoveryStrainImageAssets.recoveryGuidance} alt="Recovery AI coaching guidance states" />
            </section>

            <section className="case-text-block case-reveal is-feature-heading recovery-stacked-visual">
              <h2>{content.recoveryDriversTitle}</h2>
              <CaseImage
                src={recoveryStrainImageAssets.recoveryDrivers}
                alt="Recovery driver charts for HRV, RHR, and sleep"
              />
              <p>{content.recoveryDriversBody}</p>
            </section>

            <section className="case-text-block case-reveal is-feature-heading recovery-stacked-visual is-narrow">
              <h2>{content.sections.recoveryTrends[0]}</h2>
              <CaseImage src={recoveryStrainImageAssets.recoveryTrends} alt="Recovery drivers and trend visualization" />
              <p>{content.sections.recoveryTrends[1]}</p>
            </section>

            <section className="case-text-block case-reveal is-feature-heading">
              <h2>{content.strainTitle}</h2>
              <p>{content.strainBody}</p>
            </section>

            <section className="case-split case-reveal">
              <CaseImage src={recoveryStrainImageAssets.strainReadiness} alt="Daily strain readiness card" />
              <div>
                <h2>{content.sections.strainReadiness[0]}</h2>
                <p>{content.sections.strainReadiness[1]}</p>
              </div>
            </section>

            <section className="case-split case-reveal is-reversed">
              <div>
                <h2>{content.sections.strainGuidance[0]}</h2>
                <p>{content.sections.strainGuidance[1]}</p>
              </div>
              <CaseImage src={recoveryStrainImageAssets.strainGuidance} alt="Strain AI coaching guidance states" />
            </section>

            <section className="case-text-block case-reveal is-feature-heading recovery-stacked-visual">
              <h2>{content.strainDriversTitle}</h2>
              <CaseImage
                src={recoveryStrainImageAssets.strainDrivers}
                alt="Strain driver cards for zones, movement, and strength"
              />
              <p>{content.strainDriversBody}</p>
            </section>

            <section className="case-split case-reveal">
              <CaseImage src={recoveryStrainImageAssets.activityLog} alt="Today’s activities list" />
              <div>
                <h2>{content.sections.activityLog[0]}</h2>
                <p>{content.sections.activityLog[1]}</p>
              </div>
            </section>

            <section className="case-split case-reveal is-reversed">
              <div>
                <h2>{content.sections.strainTrend[0]}</h2>
                <p>{content.sections.strainTrend[1]}</p>
              </div>
              <CaseImage src={recoveryStrainImageAssets.strainTrend} alt="Weekly strain trend chart" />
            </section>
          </div>
        </div>

        <section className="case-text-block case-reveal">
          <h2>{content.feedbackTitle}</h2>
          <h3>{content.feedbackSubtitle}</h3>
          <p>{content.feedbackBody}</p>
        </section>
        <CaseImage src={recoveryStrainImageAssets.feedbackLoop} alt="Recovery and strain feedback loop diagram" />

        <section className="case-text-block case-reveal case-outcomes recovery-reflection">
          <h2>{content.reflectionTitle}</h2>
          <p>{content.reflectionBody}</p>
          <h3>{content.reflectionEmphasis}</h3>
          <p>{content.reflectionClosing}</p>
        </section>

        <section className="next-project case-reveal">
          <h2>{content.nextProject}</h2>
          <button className="next-project-card" onClick={onNextProject} type="button">
            <img src={workAiCoach} alt="AI Coach project preview" loading="lazy" />
            <span>
              <strong>{content.nextProjectTitle}</strong>
              <small>{content.nextProjectMeta}</small>
            </span>
          </button>
        </section>
      </div>
      <Footer language={language} />
    </section>
  );
}

function WomensHealthPage({ language, onNextProject }: { language: Language; onNextProject: () => void }) {
  const content = womensHealthCaseCopy[language] as typeof womensHealthCaseCopy.en;

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".case-reveal"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);

  return (
    <section className="case-page womens-health-page">
      <div className="case-inner">
        <SectionLabel className="case-heading">{content.label}</SectionLabel>

        <div className="case-hero case-reveal">
          <img src={womensHealthImageAssets.hero} alt="Women’s Health cycle intelligence interface preview" />
        </div>

        <section className="case-overview case-reveal">
          <div className="case-meta-grid">
            <div>
              <span>{content.overview.categoryLabel}</span>
              <p>{content.overview.category}</p>
            </div>
            <div>
              <span>{content.overview.yearLabel}</span>
              <p>{content.overview.year}</p>
            </div>
            <div>
              <span>{content.overview.roleLabel}</span>
              <p>{content.overview.role}</p>
            </div>
            <div>
              <span>{content.overview.deliverablesLabel}</span>
              <p>{content.overview.deliverables}</p>
            </div>
            <div>
              <span>{content.overview.creditLabel}</span>
              <p>{content.overview.credit}</p>
            </div>
          </div>
          <div className="case-intro">
            <img className="case-overview-icon" src={womensHealthImageAssets.overviewIcon} alt="" loading="lazy" />
            <h1>{content.overview.title}</h1>
            <p>{content.overview.body}</p>
          </div>
        </section>

        <section className="case-text-block case-reveal">
          <h2>{content.problemTitle}</h2>
          <p>{content.problemBody}</p>
        </section>

        <section className="case-pain-grid case-reveal" aria-label={content.painsLabel}>
          {[
            {
              title: content.pains[0][0],
              quote: content.pains[0][1],
              icon: womensHealthImageAssets.painIcons.uncertainty,
            },
            {
              title: content.pains[1][0],
              quote: content.pains[1][1],
              icon: womensHealthImageAssets.painIcons.context,
            },
            {
              title: content.pains[2][0],
              quote: content.pains[2][1],
              icon: womensHealthImageAssets.painIcons.recommendations,
            },
            {
              title: content.pains[3][0],
              quote: content.pains[3][1],
              icon: womensHealthImageAssets.painIcons.prediction,
            },
          ].map(({ title, quote, icon }) => (
            <div className="case-pain-item" key={title}>
              <img className="case-pain-icon" src={icon} alt="" loading="lazy" />
              <h3>{title}</h3>
              <p>{quote}</p>
            </div>
          ))}
        </section>

        <section className="case-text-block case-reveal landscape-intro">
          <h2>{content.landscapeTitle}</h2>
          <p>{content.landscapeBody}</p>
        </section>

        <section className="case-competitors case-reveal landscape-competitors" aria-label={content.competitorsLabel}>
          {[
            {
              name: content.competitors[0][0],
              icon: womensHealthImageAssets.competitorIcons.appleHealth,
              pro: content.competitors[0][1],
              con: content.competitors[0][2],
            },
            {
              name: content.competitors[1][0],
              icon: womensHealthImageAssets.competitorIcons.oura,
              pro: content.competitors[1][1],
              con: content.competitors[1][2],
            },
            {
              name: content.competitors[2][0],
              icon: womensHealthImageAssets.competitorIcons.whoop,
              pro: content.competitors[2][1],
              con: content.competitors[2][2],
            },
          ].map((item) => (
            <article className="case-competitor" key={item.name}>
              <img src={item.icon} alt={`${item.name} app icon`} loading="lazy" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.pro}</p>
                <p>{item.con}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="case-text-block case-reveal is-summary landscape-summary">
          <p>{content.landscapeSummary}</p>
        </section>

        <section className="case-principles case-reveal" aria-label={content.principlesLabel}>
          <h2>{content.principlesTitle}</h2>
          {[
            {
              title: content.principles[0][0],
              description: content.principles[0][1],
              icon: womensHealthImageAssets.principleIcons.predict,
            },
            {
              title: content.principles[1][0],
              description: content.principles[1][1],
              icon: womensHealthImageAssets.principleIcons.inform,
            },
            {
              title: content.principles[2][0],
              description: content.principles[2][1],
              icon: womensHealthImageAssets.principleIcons.meet,
            },
            {
              title: content.principles[3][0],
              description: content.principles[3][1],
              icon: womensHealthImageAssets.principleIcons.actionable,
            },
          ].map(({ title, description, icon }) => (
            <div className="case-principle" key={title}>
              <img className="case-principle-icon" src={icon} alt="" loading="lazy" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="case-text-block case-reveal">
          <h2>{content.solutionTitle}</h2>
          <h3>{content.solutionSubtitle}</h3>
          <p>{content.solutionBody}</p>
        </section>
        <CaseImage src={womensHealthImageAssets.solution} alt="Women’s Health onboarding solution architecture" />

        <section className="case-text-block case-reveal is-feature-heading">
          <h2>{content.todayTitle}</h2>
          <p>{content.todayBody}</p>
        </section>
        <CaseImage src={womensHealthImageAssets.todayView} alt="Adaptive today view interface states" />

        <section className="case-split case-reveal">
          <CaseImage src={womensHealthImageAssets.todayCard} alt="Follicular phase daily guidance card" />
          <div>
            <h2>{content.sections.uncertainty[0]}</h2>
            <p>{content.sections.uncertainty[1]}</p>
          </div>
        </section>

        <section className="case-split case-reveal is-reversed">
          <div>
            <h2>{content.sections.symptom[0]}</h2>
            <p>{content.sections.symptom[1]}</p>
          </div>
          <CaseImage src={womensHealthImageAssets.symptomOptions} alt="Symptom logging quick options" />
        </section>

        <section className="case-split case-reveal is-reversed">
          <div>
            <h2>{content.sections.prediction[0]}</h2>
            <p>{content.sections.prediction[1]}</p>
          </div>
          <CaseImage src={womensHealthImageAssets.predictionCard} alt="Estimated next fertile window and period card" />
        </section>

        <section className="case-split case-reveal">
          <CaseImage src={womensHealthImageAssets.temperatureCard} alt="Temperature trend and cycle phase chart" />
          <div>
            <h2>{content.sections.invisible[0]}</h2>
            <p>{content.sections.invisible[1]}</p>
          </div>
        </section>

        <section className="case-split case-reveal is-reversed">
          <div>
            <h2>{content.sections.longTerm[0]}</h2>
            <p>{content.sections.longTerm[1]}</p>
          </div>
          <CaseImage src={womensHealthImageAssets.summaryCard} alt="Cycle summary compact card" />
        </section>

        <div className="case-dark-band">
          <div className="case-dark-inner">
            <section className="case-text-block case-reveal is-feature-heading">
              <h2>{content.calendarTitle}</h2>
              <p>{content.calendarBody}</p>
            </section>
            <section className="case-split case-reveal">
              <CaseImage src={womensHealthImageAssets.calendar} alt="Cycle calendar with predicted phases" />
              <div>
                <h2>{content.sections.fullCycle[0]}</h2>
                <p>{content.sections.fullCycle[1]}</p>
                <figure className="case-inline-image">
                  <img
                    src={womensHealthImageAssets.cyclePhaseProgression}
                    alt="Cycle phase progression cards"
                    loading="lazy"
                  />
                </figure>
              </div>
            </section>

            <section className="case-split case-reveal is-reversed is-wide">
              <div>
                <h2>{content.sections.logging[0]}</h2>
                <p>{content.sections.logging[1]}</p>
              </div>
              <CaseImage src={womensHealthImageAssets.loggerDetail} alt="Daily logging overview" />
            </section>

            <CaseImage
              src={womensHealthImageAssets.contextualLogging}
              alt="Detailed period, sexual activity, and symptom logging panels"
              className="is-compact"
            />

            <section className="case-split case-reveal">
              <CaseImage src={womensHealthImageAssets.loggerSummary} alt="Logged symptom summary with AI note" />
              <div>
                <h2>{content.sections.ai[0]}</h2>
                <p>{content.sections.ai[1]}</p>
              </div>
            </section>
          </div>
        </div>

        <section className="case-split case-reveal">
          <CaseImage src={womensHealthImageAssets.cycleSummary} alt="Long-term cycle summary screen" />
          <div>
            <h2>{content.sections.cycleUnderstanding[0]}</h2>
            <p>{content.sections.cycleUnderstanding[1]}</p>
          </div>
        </section>

        <section className="case-text-block case-reveal case-outcomes">
          <h2>{content.outcomesTitle}</h2>
          <h3>{content.outcomesSubtitle}</h3>
          <p>{content.outcomesBody}</p>
        </section>

        <section className="next-project case-reveal">
          <h2>{content.nextProject}</h2>
          <button className="next-project-card" onClick={onNextProject} type="button">
            <img src={workRecoveryStrain} alt="Recovery and Strain project preview" loading="lazy" />
            <span>
              <strong>{content.nextProjectTitle}</strong>
              <small>{content.nextProjectMeta}</small>
            </span>
          </button>
        </section>
      </div>
      <Footer language={language} />
    </section>
  );
}

function CaseImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`case-image${className ? ` ${className}` : ""}`}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

const recoveryStrainCaseContent = {
  label: "../Recovery & Strain",
  overview: {
    categoryLabel: "CATEGORY",
    category: "Health / Wearables / Behaviors / Mobile",
    yearLabel: "YEAR",
    year: "2026",
    roleLabel: "ROLE",
    role: "Design Lead",
    deliverablesLabel: "DELIVERABLES",
    deliverables: "Strategy / UI / UX",
    creditLabel: "CREDIT",
    credit: "CUDIS",
    metrics: ["75", "50%", "6.7"],
    title: "Know When to Push, Know When to Rest",
    body: "A personalized wellness system that transforms physiological signals into adaptive recovery guidance and sustainable training recommendations.",
  },
  problemTitle: "The Problem",
  problemSubtitle: "Wellness data creates awareness - but not clarity.",
  questions: [
    "I slept badly. Should I still train?",
    "Why is my recovery low today?",
    "Am I actually overtraining?",
  ],
  painsLabel: "Key pains",
  pains: [
    ["Metric overload", "Recovery, HRV, strain, readiness, sleep - signals feel fragmented."],
    ["Generic wellness advice", "Recommendations rarely adapt to physiological condition."],
    ["Invisible fatigue", "Subtle physiological decline often goes unnoticed until burnout."],
    ["Unsustainable routines", "Without contextual guidance, users struggle to balance."],
  ],
  principlesLabel: "Product principles",
  principlesTitle: "Product Principles",
  principles: [
    ["Balance effort with recovery", "Strain and recovery should continuously inform one another."],
    ["Translate signals into decisions", "Biometrics become meaningful only when users understand how to act on them."],
    ["Reduce wellness uncertainty", "Support healthier choices through contextual guidance."],
    ["Encourage sustainable habits", "Avoid optimization obsession and promote long-term consistency."],
  ],
  solutionTitle: "Solution Architecture",
  solutionSubtitle: "Designing a recovery decision-making system",
  solutionBody:
    "The experience combines recovery signals, strain patterns, behavioral context, and AI-generated recommendations into a personalized daily wellness system.",
  todayTitle: "Today’s View",
  todayBody:
    "The interface combines recovery signals and accumulated strain into a single daily readiness model.\n\nRather than treating exertion and recovery separately, the system dynamically balances both to recommend whether users should recover, maintain, or challenge themselves.",
  todaySummary:
    "Recovery and strain work as interconnected signals - helping users understand not only how their body feels today, but also how hard they should push.\n\nRather than surfacing isolated scores, the system combines recovery readiness, accumulated strain, sleep, HRV, and resting heart rate into a unified daily guidance model.\n\nThe goal was to help users answer a simple but emotionally important question: Should I push harder today - or recover?",
  recoveryTitle: "Recovery State",
  recoveryBody:
    "Recovery reflects how prepared the body is to perform today.\n\nBy combining heart rate variability (HRV), resting heart rate (RHR), and sleep quality, the system translates physiological readiness into a clear recovery state - helping users decide whether to challenge, maintain, or prioritize recovery.\n\nRather than relying on intuition alone, users gain objective context into how their body is actually responding.",
  recoveryDriversTitle: "Understanding what drives recovery",
  recoveryDriversBody:
    "Rather than surfacing a single recovery score without explanation, the system highlights the physiological signals contributing to recovery.\n\nEach signal is compared against the user’s 30-day baseline, helping users understand how behavioral patterns affect readiness over time.",
  strainTitle: "Recovery State",
  strainBody:
    "Strain measures how much physiological stress the body absorbs throughout the day - helping users train harder when appropriate and recover before overtraining.",
  strainDriversTitle: "Understanding what drives strain",
  strainDriversBody:
    "Rather than surfacing a single activity score, the system reveals the behaviors contributing to daily strain.\n\nHeart Rate Zones\nTime spent in higher cardiovascular zones contributes more heavily to strain. High-intensity effort produces disproportionately larger physiological load than low-intensity movement.\n\nStrength Training\nStrength sessions contribute muscular load beyond cardiovascular activity.\n\nDaily Movement\nSteps and general movement capture accumulated physical demand throughout the day.\n\nNot all movement is equal - higher intensity carries exponentially greater physiological cost.",
  feedbackTitle: "Designing a Recovery & Strain Feedback Loop",
  feedbackSubtitle: "Recovery determines readiness. Strain reflects effort.",
  feedbackBody:
    "Rather than treating recovery and activity as isolated metrics, the system creates a feedback loop between effort and readiness.",
  reflectionTitle: "Reflection",
  reflectionBody:
    "Designing Recovery & Strain shifted my thinking about wellness products.\n\nI realized that health data alone rarely changes behavior. What users actually need is context - an explanation of",
  reflectionEmphasis: "why something happened, what it means, and what to do next.",
  reflectionClosing:
    "This project also taught me how to design systems instead of isolated features: balancing physiological accuracy, emotional reassurance, and long-term habit formation within one experience.\n\nThe biggest challenge was turning invisible body signals into something people could trust and act on.",
  nextProject: "Next Project",
  nextProjectTitle: "AI COACH",
  nextProjectMeta: "AI / Health / Wearables / Mobile",
  sections: {
    adaptive: [
      "Adaptive States",
      "The interface visually shifts based on recovery and strain readiness, helping users immediately understand whether to challenge, maintain, or prioritize recovery.",
    ],
    todayRecovery: [
      "Recovery State",
      "The recovery state helps users understand physiological readiness at a glance.\n\nInstead of interpreting fragmented signals like HRV or sleep independently, the system translates recovery context into clear readiness feedback - helping users decide whether to challenge, maintain, or prioritize recovery.",
    ],
    todayStrain: [
      "Strain Recommendation",
      "Daily strain recommendations dynamically adapt based on recovery condition and accumulated activity load.\n\nRather than promoting fixed exercise targets, the system adjusts suggested effort levels - helping users balance challenge with sustainable recovery.",
    ],
    recoveryReadiness: [
      "Recovery Readiness",
      "Instead of relying on subjective feelings alone, recovery readiness combines physiological signals into a single daily recovery score.\n\nBy integrating HRV, resting heart rate (RHR), and sleep quality, the system helps users quickly understand whether their body is ready to challenge, maintain, or prioritize recovery.",
    ],
    recoveryGuidance: [
      "Translating recovery into guidance",
      "Raw wellness metrics can feel abstract and emotionally difficult to interpret.\n\nTo reduce uncertainty, AI-generated insights explain why recovery changes and what users should do next - reframing physiological data into understandable, actionable coaching.",
    ],
    recoveryTrends: [
      "Making recovery patterns visible",
      "Recovery is rarely defined by a single day.\n\nTrend visualizations help users identify patterns across recovery, HRV, resting heart rate, and sleep quality - surfacing how lifestyle, training, and recovery behaviors influence physiological readiness over time.",
    ],
    strainReadiness: [
      "Daily Strain Readiness",
      "CUDIS Strain combines heart rate zones, strength training, and movement into a single 0-15 activity strain score.\n\nRecovery and strain work together as a feedback loop.\n\nHigher recovery expands recommended strain capacity, while lower recovery encourages lighter activity and active restoration.",
    ],
    strainGuidance: [
      "Translating effort into coaching",
      "Physical effort can feel difficult to evaluate objectively.\n\nTo reduce ambiguity, AI-generated insights explain where strain came from and how activity affects recovery demand.\n\nInstead of generic fitness advice, recommendations respond to actual physiological load.",
    ],
    activityLog: [
      "Connecting strain to behavior",
      "Activity logs make physiological load easier to interpret by connecting strain changes to real-world behaviors.\n\nRather than seeing abstract numbers alone, users can identify which workouts, movements, or routines contributed to their daily load.",
    ],
    strainTrend: [
      "Building smarter training habits",
      "Trend visualizations help users understand how effort accumulates over time.\n\nBy surfacing strain history and heart rate zone distribution, users can balance endurance, intensity, and recovery - avoiding both undertraining and burnout.",
    ],
  },
};

const recoveryStrainCaseCopy = {
  en: recoveryStrainCaseContent,
  zh: recoveryStrainCaseContent,
} satisfies Record<Language, typeof recoveryStrainCaseContent>;

const womensHealthCaseCopy = {
  en: {
    label: "../Women’s Health",
    overview: {
      categoryLabel: "CATEGORY",
      category: "Health / Wearable / Personalization / Mobile",
      yearLabel: "YEAR",
      year: "2026",
      roleLabel: "ROLE",
      role: "Design Lead",
      deliverablesLabel: "DELIVERABLES",
      deliverables: "Strategy / UI / UX",
      creditLabel: "CREDIT",
      credit: "CUDIS",
      title: "Cycle Intelligence for Everyday Wellness",
      body: "Helping women better understand their cycles through wearable signals, symptom logging, and adaptive wellness guidance.",
    },
    problemTitle: "The Problem",
    problemBody:
      "Most cycle tracking experiences focus on logging periods, but rarely help users understand how their bodies may change throughout a cycle. Energy, mood, recovery, workout performance, and symptoms often feel unpredictable, leaving users uncertain about what to expect and how to respond.",
    painsLabel: "Key pains",
    pains: [
      ["Uncertainty", "“Why do I suddenly feel exhausted?”"],
      ["Lack of context", "symptoms feel disconnected"],
      ["One-size-fits-all recommendations", "workout advice ignores cycle phases"],
      ["Prediction anxiety", "uncertainty around the next cycle"],
    ],
    landscapeTitle: "Understanding the Landscape",
    landscapeBody:
      "I explored existing cycle tracking experiences to understand how women currently manage uncertainty around energy, mood, symptoms, and prediction.",
    competitorsLabel: "Competitive landscape",
    competitors: [
      ["Apple Health", "Pro: passive data integration", "Con: lacks emotional + behavioral guidance"],
      ["OURA", "Pro: strong physiology insights", "Con: cycle awareness feels secondary"],
      ["WHOOP", "Pro: recovery & readiness", "Con: limited reproductive context"],
    ],
    landscapeSummary:
      "Existing products are strong at tracking, but weak at helping users understand what today might feel like, why it happens, and what to do next.",
    principlesLabel: "Product principles",
    principlesTitle: "Product Principles",
    principles: [
      ["Predict, not diagnose", "Use wearable signals to estimate, not overclaim."],
      ["Inform, not alarm", "Keep tone reassuring and grounded."],
      ["Meet users where they are", "Support irregular cycles and uncertainty."],
      ["Make wellness actionable", "Translate cycle awareness into daily guidance."],
    ],
    solutionTitle: "Solution Architecture",
    solutionSubtitle: "Personalization starts with trust",
    solutionBody:
      "Because reproductive health is highly personal, onboarding was designed to feel supportive rather than clinical, explaining why data is requested and how it improves prediction accuracy.",
    todayTitle: "Today’s View",
    todayBody:
      "The interface adapts to each phase, surfacing personalized expectations, recovery guidance, and physiological context.",
    sections: {
      uncertainty: [
        "Designed to reduce uncertainty",
        "The system reframes daily fluctuations through cycle context, helping users anticipate changes in energy, mood, and recovery.",
      ],
      symptom: [
        "Beyond symptom logging",
        "Instead of isolated symptom collection, logs become contextual signals within the cycle, helping users connect changes in mood, bloating, fatigue, or skin with physiological phases.",
      ],
      prediction: [
        "Anticipating what’s next",
        "By combining cycle history, ring vitals, and temperature trends, the system generates estimated predictions for the next cycle, helping users feel more in control.",
      ],
      invisible: [
        "Making invisible signals visible",
        "By integrating basal body temperature and ring vitals, users gain deeper context into recovery, hormonal changes, and cycle regularity.",
      ],
      longTerm: ["Long-term understanding", "A monthly summary helps users recognize recurring patterns and build awareness over time."],
      fullCycle: [
        "Designing for the full hormonal cycle",
        "Instead of centering the experience around menstruation only, I visualized the entire cycle, making hormonal phases, fertile windows, and predicted periods easier to understand at a glance.",
      ],
      logging: [
        "Contextual Logging",
        "Symptoms are designed as lightweight, tappable inputs to reduce friction in daily tracking. Logged symptoms are contextualized within cycle phases and ring vitals, helping users connect experiences with physiological changes.",
      ],
      ai: [
        "AI-generated symptom interpretation",
        "After logging symptoms, the system generates contextual AI insights that explain whether reported experiences are common during the current cycle phase, while providing gentle expectations and self-care suggestions.",
      ],
      cycleUnderstanding: [
        "Long-term Cycle Understanding",
        "The goal was not only to track cycles, but to help users develop a stronger sense of bodily awareness.",
      ],
    },
    calendarTitle: "Cycle Calendar",
    calendarBody: "Making patterns visible over time across the full hormonal cycle.",
    outcomesTitle: "Design Outcomes",
    outcomesSubtitle: "The goal was to replace anxiety with anticipation.",
    outcomesBody:
      "This project shifted women’s health tracking from passive logging to adaptive, contextual guidance, helping users better understand what their bodies may be experiencing today and anticipate what comes next.",
    nextProject: "Next Project",
    nextProjectTitle: "RECOVERY & STRAIN",
    nextProjectMeta: "Health / Wearables / Behaviors / Mobile",
  },
  zh: {
    label: "../女性健康",
    overview: {
      categoryLabel: "类别",
      category: "健康 / 可穿戴 / 个性化 / 移动端",
      yearLabel: "年份",
      year: "2026",
      roleLabel: "角色",
      role: "设计负责人",
      deliverablesLabel: "交付内容",
      deliverables: "策略 / UI / UX",
      creditLabel: "项目",
      credit: "CUDIS",
      title: "面向日常健康的周期智能",
      body: "通过可穿戴信号、症状记录与自适应健康建议，帮助女性更好地理解自己的身体周期。",
    },
    problemTitle: "问题",
    problemBody:
      "多数周期追踪体验关注经期记录，却很少帮助用户理解身体在整个周期中的变化。精力、情绪、恢复、运动表现和症状常常显得不可预测，让用户不知道该期待什么、如何回应。",
    painsLabel: "核心痛点",
    pains: [
      ["不确定感", "“为什么我突然这么累？”"],
      ["缺少上下文", "症状像是彼此断开的"],
      ["一刀切的建议", "运动建议忽略周期阶段"],
      ["预测焦虑", "对下一个周期充满不确定"],
    ],
    landscapeTitle: "理解现有产品格局",
    landscapeBody: "我研究了现有周期追踪体验，理解女性如何管理围绕精力、情绪、症状和预测的不确定性。",
    competitorsLabel: "竞品调研",
    competitors: [
      ["Apple Health", "优点：被动数据整合", "不足：缺少情绪与行为层面的指导"],
      ["OURA", "优点：生理洞察较强", "不足：周期意识处于次要位置"],
      ["WHOOP", "优点：恢复与准备度体验成熟", "不足：生殖健康语境有限"],
    ],
    landscapeSummary: "现有产品擅长追踪，却不擅长帮助用户理解今天可能会有什么感受、为什么会这样，以及接下来可以做什么。",
    principlesLabel: "产品原则",
    principlesTitle: "产品原则",
    principles: [
      ["预测，而非诊断", "用可穿戴信号进行估计，不过度承诺。"],
      ["告知，而非制造焦虑", "保持语气安心、克制、有依据。"],
      ["从用户真实状态出发", "支持不规律周期与不确定性。"],
      ["让健康建议可行动", "把周期意识转化为日常指导。"],
    ],
    solutionTitle: "解决方案架构",
    solutionSubtitle: "个性化始于信任",
    solutionBody: "生殖健康高度私密，因此 onboarding 被设计得更支持而非临床化，解释为什么需要这些数据，以及它们如何提升预测准确度。",
    todayTitle: "今日视图",
    todayBody: "界面会根据不同周期阶段自适应，呈现个性化预期、恢复建议与生理上下文。",
    sections: {
      uncertainty: ["减少不确定感", "系统通过周期上下文重新解释每日波动，帮助用户预期精力、情绪和恢复状态的变化。"],
      symptom: ["不止是症状记录", "症状不再是孤立收集的数据，而是周期中的上下文信号，帮助用户把情绪、腹胀、疲劳或皮肤变化与生理阶段联系起来。"],
      prediction: ["预判下一步", "结合周期历史、戒指体征和体温趋势，系统估算下一周期预测，让用户更有掌控感。"],
      invisible: ["让不可见信号变得可理解", "通过整合基础体温和戒指体征，用户可以获得关于恢复、激素变化和周期规律性的更深层上下文。"],
      longTerm: ["长期理解", "月度总结帮助用户识别反复出现的模式，并逐渐建立身体觉察。"],
      fullCycle: ["为完整激素周期设计", "体验不只围绕月经展开，而是可视化整个周期，让激素阶段、易孕窗口和预测经期一目了然。"],
      logging: ["上下文化记录", "症状被设计为轻量、可点击的输入，降低日常记录阻力。已记录症状会结合周期阶段和戒指体征进行解释，帮助用户理解身体体验与生理变化的关系。"],
      ai: ["AI 生成的症状解读", "记录症状后，系统会生成上下文化 AI 洞察，解释这些体验是否常见于当前周期阶段，并提供温和的预期和自我照护建议。"],
      cycleUnderstanding: ["长期周期理解", "目标不只是追踪周期，而是帮助用户建立更强的身体觉察。"],
    },
    calendarTitle: "周期日历",
    calendarBody: "让完整激素周期中的模式随时间变得可见。",
    outcomesTitle: "设计结果",
    outcomesSubtitle: "目标是用预期感替代焦虑。",
    outcomesBody: "这个项目将女性健康追踪从被动记录转向自适应、上下文化指导，帮助用户理解今天身体可能正在经历什么，并预判接下来会发生什么。",
    nextProject: "下一个项目",
    nextProjectTitle: "恢复与压力",
    nextProjectMeta: "健康 / 可穿戴 / 行为 / 移动端",
  },
} satisfies Record<Language, Record<string, unknown>>;

function App() {
  const [view, setView] = useState<View>("home");
  const [language, setLanguage] = useState<Language>("en");
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [isPreloaderLeaving, setIsPreloaderLeaving] = useState(false);
  const pendingScrollRef = useRef<"works" | "playground" | "contact" | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleNavigate = (target: "home" | "works" | "playground" | "about" | "contact") => {
    if (target === "about") {
      setView("about");
      window.history.replaceState(null, "", "#/about");
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
      return;
    }

    setView("home");

    if (target === "home") {
      pendingScrollRef.current = null;
      window.history.replaceState(null, "", window.location.pathname);
      requestAnimationFrame(scrollToTop);
      return;
    }

    if (view === "home") {
      pendingScrollRef.current = null;
      requestAnimationFrame(() => scrollToId(target));
      return;
    }

    pendingScrollRef.current = target;
  };

  const openWomensHealth = () => {
    setView("womens-health");
    window.history.pushState(null, "", "#/works/womens-health");
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  const openRecoveryStrain = () => {
    setView("recovery-strain");
    window.history.pushState(null, "", "#/works/recovery-strain");
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  useEffect(() => {
    if (view !== "home") {
      document.documentElement.style.setProperty("--scroll-progress", "0");
      return undefined;
    }

    let animationFrame = 0;
    const updateParallax = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        const viewport = Math.max(window.innerHeight, 1);
        const progress = Math.min(window.scrollY / viewport, 1);
        document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
      });
    };

    const updateParallaxNow = () => {
      const viewport = Math.max(window.innerHeight, 1);
      const progress = Math.min(window.scrollY / viewport, 1);
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    updateParallaxNow();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallaxNow);
    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallaxNow);
    };
  }, [view]);

  useEffect(() => {
    if (view !== "home" || !pendingScrollRef.current) return;

    const target = pendingScrollRef.current;
    pendingScrollRef.current = null;
    requestAnimationFrame(() => scrollToId(target));
  }, [view]);

  useEffect(() => {
    const syncViewFromHash = () => {
      if (window.location.hash === "#/works/womens-health") {
        setView("womens-health");
        requestAnimationFrame(() => window.scrollTo({ top: 0 }));
        return;
      }

      if (window.location.hash === "#/works/recovery-strain") {
        setView("recovery-strain");
        requestAnimationFrame(() => window.scrollTo({ top: 0 }));
        return;
      }

      if (window.location.hash === "#/about") {
        setView("about");
        requestAnimationFrame(() => window.scrollTo({ top: 0 }));
        return;
      }

      setView("home");

      if (window.location.hash === "#works") {
        pendingScrollRef.current = "works";
      }
    };

    syncViewFromHash();
    window.addEventListener("popstate", syncViewFromHash);
    return () => window.removeEventListener("popstate", syncViewFromHash);
  }, []);

  useEffect(() => {
    const minimumVisibleMs = 1800;
    const exitMs = 520;
    let hasLoaded = document.readyState === "complete";
    let hasWaited = false;
    let exitTimer: number | null = null;

    const hidePreloader = () => {
      if (!hasLoaded || !hasWaited) return;

      setIsPreloaderLeaving(true);
      exitTimer = window.setTimeout(() => {
        setIsPreloaderVisible(false);
      }, exitMs);
    };

    const minimumTimer = window.setTimeout(() => {
      hasWaited = true;
      hidePreloader();
    }, minimumVisibleMs);

    const handleLoad = () => {
      hasLoaded = true;
      hidePreloader();
    };

    if (hasLoaded) {
      hidePreloader();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      window.clearTimeout(minimumTimer);
      if (exitTimer !== null) {
        window.clearTimeout(exitTimer);
      }
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <main className={`min-h-dvh bg-portfolio-paper text-portfolio-blue lang-${language}`} lang={language === "zh" ? "zh-Hant" : "en"}>
      {isPreloaderVisible && <Preloader isLeaving={isPreloaderLeaving} language={language} />}
      <div className="global-pixel-trail" aria-hidden="true">
        {!prefersReducedMotion && (
          <PixelTrail
            color="#3B60FF"
            glProps={{ alpha: true, antialias: false, powerPreference: "low-power" }}
            gridSize={62}
            interpolate={3}
            maxAge={220}
            textureSize={256}
            trailSize={0.035}
          />
        )}
      </div>
      <SiteNav language={language} onLanguageChange={setLanguage} onNavigate={handleNavigate} />
      {view === "about" ? (
        <AboutPage language={language} />
      ) : view === "womens-health" ? (
        <WomensHealthPage
          language={language}
          onNextProject={openRecoveryStrain}
        />
      ) : view === "recovery-strain" ? (
        <RecoveryStrainPage
          language={language}
          onNextProject={() => {
            setView("home");
            pendingScrollRef.current = "works";
            window.history.pushState(null, "", "#works");
          }}
        />
      ) : (
        <>
          <DesktopHomepage language={language} />
          <MobileHomepage language={language} />
          <WorksPage
            language={language}
            onOpenRecoveryStrain={openRecoveryStrain}
            onOpenWomensHealth={openWomensHealth}
          />
          <PlaygroundPage language={language} />
          <ContactPage language={language} onBackToTop={() => handleNavigate("home")} />
          <Footer language={language} />
        </>
      )}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
