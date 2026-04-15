export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const dictionaries = {
  en: {
    meta: {
      title: "Hubi Group — We build your dream team",
      description:
        "Hubi Group identifies, selects and attracts specialized talent in the pharma industry across Latin America. Executive search, staff augmentation, and recruiting services.",
    },
    nav: {
      services: "Services",
      how: "How we work",
      candidates: "Candidates",
      faq: "FAQ",
      cta: "Get Started",
    },
    hero: {
      pill: "Pharma specialists · Latin America",
      titlePre: "We build your ",
      titleGrad: "dream team",
      titleEnd: ".",
      subtitle:
        "We identify, select and attract specialized talent in the pharma industry — all across Latin America and beyond.",
      ctaPrimary: "Get Started",
      ctaSecondary: "How we work",
      stats: [
        { k: "24d", v: "avg. time-to-fill" },
        { k: "6mo", v: "replacement guarantee" },
        { k: "100%", v: "pharma specialized" },
      ],
    },
    team: {
      titlePre: "We ",
      titleGrad: "create",
      titleEnd: " your super team",
      lines: [
        "We identify",
        "select",
        { pre: "and attract ", strong: "specialized talent" },
        "in the pharma industry",
        "all over Latin America.",
      ],
      cta: "Start hiring with Hubi →",
    },
    services: {
      kicker: "Our Services",
      titlePre: "We help scale your ",
      titleGrad: "pharma teams",
      titleEnd: " in Latin America",
      items: [
        {
          title: "Executive",
          tagline: "Top-notch leadership hires",
          bullets: [
            "Success fee calculated over annual gross salary",
            "Specialized headhunting for C-level & director roles",
            "We act as your executive recruiter",
            "Free replacement guarantee — 6 months",
          ],
        },
        {
          title: "Staff Augmentation",
          tagline: "Your recruiting team, on demand",
          bullets: [
            "Monthly retained contract",
            "Outsourced unit designed for massive recruitment",
            "We become an extension of your People team",
            "Free replacement guarantee — 6 months",
          ],
        },
        {
          title: "Recruiter",
          tagline: "Senior hires, success-based",
          bullets: [
            "Success fee calculated over annual gross salary",
            "Recruitment services for senior positions",
            "We help your team with day-to-day recruiting",
            "Free replacement guarantee — 6 months",
          ],
        },
      ],
      learnMore: "Learn more",
    },
    how: {
      kicker: "How we work",
      titlePre: "Find the perfect person ",
      titleGrad: "every time",
      steps: [
        {
          title: "Data with a personal touch",
          lead: "We picture our business as a people business — where each situation and each person matters.",
          body: "This is why we build strong, long-term relationships with our talent network.",
        },
        {
          title: "Quality beats quantity",
          lead: "We focus on bringing the best-fitting solution rather than a short-term fix.",
          body: "We use hiring funnels and review your recruiting pipeline and progress at a glance.",
        },
        {
          title: "Determined to be agile",
          lead: "Multi-post to the most relevant boards and see an increase in qualified candidates immediately.",
          body: "Each assignment is different — we adapt our operation to your business needs using a proven talent-attraction method.",
        },
      ],
    },
    logos: {
      label: "Trusted by teams increasing their hiring success",
    },
    candidates: {
      titlePre: "More top candidates with ",
      titleGrad: "less effort",
      body: "A user-friendly hunting method that delivers immediate results.",
    },
    faq: {
      kicker: "FAQ",
      titlePre: "Questions? ",
      titleGrad: "We have answers.",
      tabs: { general: "General", specific: "Specific" },
      general: [
        {
          q: "How much time does it take to receive qualified candidates from HUBI?",
          a: "We commit to sending candidates every 3 to 4 days until the position is closed.",
        },
        {
          q: "What does a Free Replacement Guarantee mean?",
          a: "At Hubi we commit to sharing the best-fitting talent. That is why we offer a replacement on every hire recommended by us.",
        },
        {
          q: "Do you do massive recruitment?",
          a: "We put at your service a team of specialized consultants for massive recruitment needs at a fixed monthly price, including a minimum number of hires we commit to recommend.",
        },
        {
          q: "What kind of positions do you typically recruit for?",
          a: "From executive / C-level positions to engineering, operations, R&D, sales, production, quality and legal mid-to-senior roles.",
        },
        {
          q: "Do you have experience in niche industries?",
          a: "We are specialized in the pharmaceutical industry across Latin America, and have collaborated with the leading companies in the sector.",
        },
        {
          q: "How long does the recruitment process typically take?",
          a: "On average, the whole process — from briefing to signed contract — takes less than 24 days, depending on role seniority.",
        },
      ],
      specific: [
        {
          q: "What profiles do you typically recruit?",
          a: "From technicians and scientists to high-level managers with experience in international business management.",
        },
        {
          q: "How do you find and attract qualified candidates?",
          a: "Accurate market segmentation backed by a comprehensive database, job-specific competency tests, and advanced technological tools to identify the best talent.",
        },
        {
          q: "Do I pay a commission when I hire a candidate?",
          a: "Yes, we offer various commission schemes tailored to our clients' needs through a specialized consultation.",
        },
        {
          q: "What is your screening process?",
          a: "Rigorous, transparent process: multiple technical and psychometric filters with qualitative and quantitative stages to identify the most promising candidates.",
        },
        {
          q: "How long does the process take?",
          a: "Recruitment processes are usually completed within 2 to 4 weeks, depending on the complexity of the position.",
        },
        {
          q: "Can you help with job descriptions and job postings?",
          a: "Yes — we consult on creating accurate, attractive job descriptions based on organizational and market analysis.",
        },
      ],
    },
    cta: {
      titlePre: "Looking for ",
      titleGrad: "top talent",
      titleEnd: " in Latin America?",
      body: "Tell us about the role. We'll get back within 24 hours with a shortlist strategy.",
      form: {
        firstName: "First name",
        lastName: "Last name",
        email: "Work email",
        phone: "Phone (optional)",
        submit: "Get Started — it's free",
        thanks: "Thanks — we'll be in touch soon.",
        thanksSub: "We received your details.",
      },
    },
    footer: {
      tagline:
        "We build your dream team — specialized pharma recruiting across Latin America.",
      cta: "Get Started FREE →",
      rights: "All rights reserved.",
      credit: "Designed and engineered with care.",
      nav: {
        services: "Services",
        how: "How we work",
        faq: "FAQ",
      },
    },
  },

  es: {
    meta: {
      title: "Hubi Group — Construimos tu equipo ideal",
      description:
        "Hubi Group identifica, selecciona y atrae talento especializado de la industria farmacéutica en toda Latinoamérica. Headhunting ejecutivo, staff augmentation y servicios de reclutamiento.",
    },
    nav: {
      services: "Servicios",
      how: "Cómo trabajamos",
      candidates: "Candidatos",
      faq: "Preguntas",
      cta: "Empieza ahora",
    },
    hero: {
      pill: "Especialistas pharma · Latinoamérica",
      titlePre: "Construimos tu ",
      titleGrad: "equipo ideal",
      titleEnd: ".",
      subtitle:
        "Identificamos, seleccionamos y atraemos talento especializado de la industria farmacéutica en toda Latinoamérica y más allá.",
      ctaPrimary: "Empieza ahora",
      ctaSecondary: "Cómo trabajamos",
      stats: [
        { k: "24d", v: "tiempo medio de cierre" },
        { k: "6m", v: "garantía de reemplazo" },
        { k: "100%", v: "especializados en pharma" },
      ],
    },
    team: {
      titlePre: "",
      titleGrad: "Creamos",
      titleEnd: " tu super equipo",
      lines: [
        "Identificamos",
        "seleccionamos",
        { pre: "y atraemos ", strong: "talento especializado" },
        "de la industria farmacéutica",
        "en toda Latinoamérica.",
      ],
      cta: "Empieza a contratar con Hubi →",
    },
    services: {
      kicker: "Nuestros Servicios",
      titlePre: "Escalamos tus ",
      titleGrad: "equipos pharma",
      titleEnd: " en Latinoamérica",
      items: [
        {
          title: "Executive",
          tagline: "Contrataciones de liderazgo top",
          bullets: [
            "Success fee sobre el salario bruto anual",
            "Headhunting especializado en C-level y direcciones",
            "Actuamos como tu reclutador ejecutivo",
            "Garantía de reemplazo gratuita — 6 meses",
          ],
        },
        {
          title: "Staff Augmentation",
          tagline: "Tu equipo de reclutamiento bajo demanda",
          bullets: [
            "Contrato mensual retenido",
            "Unidad externa diseñada para reclutamiento masivo",
            "Nos convertimos en extensión de tu equipo de People",
            "Garantía de reemplazo gratuita — 6 meses",
          ],
        },
        {
          title: "Recruiter",
          tagline: "Contrataciones senior basadas en éxito",
          bullets: [
            "Success fee sobre el salario bruto anual",
            "Servicios de reclutamiento para posiciones senior",
            "Te acompañamos en el día a día de tu recruiting",
            "Garantía de reemplazo gratuita — 6 meses",
          ],
        },
      ],
      learnMore: "Saber más",
    },
    how: {
      kicker: "Cómo trabajamos",
      titlePre: "Encuentra a la persona perfecta ",
      titleGrad: "siempre",
      steps: [
        {
          title: "Datos con un toque humano",
          lead: "Entendemos nuestro negocio como un negocio de personas: cada situación y cada persona importan.",
          body: "Por eso construimos relaciones sólidas y de largo plazo con nuestra red de talento.",
        },
        {
          title: "Calidad por encima de cantidad",
          lead: "Nos enfocamos en la mejor solución a largo plazo, no en un parche rápido.",
          body: "Usamos funnels de contratación y revisamos tu pipeline y progreso de un vistazo.",
        },
        {
          title: "Determinados a ser ágiles",
          lead: "Multipublicamos en los boards más relevantes y verás un aumento inmediato de candidatos cualificados.",
          body: "Cada proyecto es único: adaptamos nuestra operación a tus necesidades con un método probado de atracción de talento.",
        },
      ],
    },
    logos: {
      label: "Equipos que confían en nosotros para crecer su hiring",
    },
    candidates: {
      titlePre: "Más candidatos top con ",
      titleGrad: "menos esfuerzo",
      body: "Un método de headhunting amigable que entrega resultados inmediatos.",
    },
    faq: {
      kicker: "Preguntas frecuentes",
      titlePre: "¿Dudas? ",
      titleGrad: "Tenemos respuestas.",
      tabs: { general: "General", specific: "Específicas" },
      general: [
        {
          q: "¿Cuánto tarda HUBI en enviar candidatos cualificados?",
          a: "Nos comprometemos a enviar candidatos cada 3 o 4 días hasta cerrar la posición.",
        },
        {
          q: "¿Qué significa la garantía de reemplazo gratuita?",
          a: "En Hubi nos comprometemos con el mejor talento. Por eso ofrecemos reemplazo sobre cada contratación recomendada por nosotros.",
        },
        {
          q: "¿Hacen reclutamiento masivo?",
          a: "Ponemos a tu disposición un equipo de consultores especializados para reclutamiento masivo a un precio mensual fijo, incluyendo un mínimo de contrataciones comprometidas.",
        },
        {
          q: "¿Qué tipo de posiciones suelen cubrir?",
          a: "Desde posiciones ejecutivas y C-level hasta roles mid-senior en ingeniería, operaciones, I+D, ventas, producción, calidad y legal.",
        },
        {
          q: "¿Tienen experiencia en sectores especializados?",
          a: "Estamos especializados en la industria farmacéutica en Latinoamérica y colaboramos con las compañías líderes del sector.",
        },
        {
          q: "¿Cuánto dura un proceso de reclutamiento?",
          a: "En promedio, el proceso completo —desde el briefing hasta el contrato firmado— toma menos de 24 días, según la seniority.",
        },
      ],
      specific: [
        {
          q: "¿Qué perfiles suelen reclutar?",
          a: "Desde técnicos y científicos hasta directivos con experiencia en gestión internacional de negocio.",
        },
        {
          q: "¿Cómo encuentran y atraen candidatos cualificados?",
          a: "Segmentación de mercado precisa respaldada por una base de datos extensa, tests de competencias y herramientas tecnológicas avanzadas.",
        },
        {
          q: "¿Pago comisión al contratar un candidato?",
          a: "Sí, ofrecemos diferentes esquemas de comisión adaptados a las necesidades de cada cliente.",
        },
        {
          q: "¿Cuál es su proceso de selección?",
          a: "Proceso riguroso y transparente: filtros técnicos y psicométricos con etapas cualitativas y cuantitativas para identificar al mejor talento.",
        },
        {
          q: "¿Cuánto dura el proceso?",
          a: "Entre 2 y 4 semanas según la complejidad del rol.",
        },
        {
          q: "¿Nos ayudan con descripciones y publicaciones de los puestos?",
          a: "Sí — te asesoramos en la creación de job descriptions precisas y atractivas a partir de análisis organizacional y de mercado.",
        },
      ],
    },
    cta: {
      titlePre: "¿Buscas ",
      titleGrad: "talento top",
      titleEnd: " en Latinoamérica?",
      body: "Cuéntanos sobre la posición. Respondemos en menos de 24 horas con una estrategia de shortlist.",
      form: {
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Email de trabajo",
        phone: "Teléfono (opcional)",
        submit: "Empieza — es gratis",
        thanks: "¡Gracias! Nos pondremos en contacto pronto.",
        thanksSub: "Hemos recibido tus datos.",
      },
    },
    footer: {
      tagline:
        "Construimos tu equipo ideal — reclutamiento pharma especializado en Latinoamérica.",
      cta: "Empieza GRATIS →",
      rights: "Todos los derechos reservados.",
      credit: "Diseñado y desarrollado con cuidado.",
      nav: {
        services: "Servicios",
        how: "Cómo trabajamos",
        faq: "Preguntas",
      },
    },
  },
} as const;

export type Dict = typeof dictionaries.en;
export function getDict(locale: string): Dict {
  const map = dictionaries as unknown as Record<string, Dict>;
  return map[locale] ?? dictionaries.en;
}
