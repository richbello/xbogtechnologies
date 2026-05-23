/**
 * Services Configuration
 * Contains all service definitions with metadata, descriptions, and image URLs
 */

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  imageCompressed: string;
  benefits: string[];
  features: string[];
  cta: string;
}

export const services: Service[] = [
  {
    id: "1",
    name: "Gestión Administrativa y Legal",
    slug: "gestion-administrativa-legal",
    shortDescription:
      "Soluciones estratégicas y personalizadas para proteger sus intereses y fortalecer su negocio.",
    fullDescription:
      "Ofrecemos asesoría legal integral y gestión administrativa especializada para empresas y personas. Nuestro equipo de expertos se encarga de optimizar procesos, garantizar cumplimiento normativo y proteger tus derechos en todas las instancias administrativas.",
    icon: "Scale3",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-gestion-administrativa-JhAdXbR6W8JVQ87hM2hnTg.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-gestion-administrativa-Dj7iZihaAF9Kb55UBDCT3N.webp",
    benefits: [
      "Asesoría legal efectiva y oportuna",
      "Optimización de procesos administrativos",
      "Cumplimiento normativo garantizado",
      "Protección de derechos corporativos",
    ],
    features: [
      "Análisis legal exhaustivo",
      "Gestión de trámites administrativos",
      "Defensa de intereses corporativos",
      "Asesoramiento en derecho laboral",
    ],
    cta: "Solicitar Asesoría",
  },
  {
    id: "2",
    name: "Apostillaje de Documentos",
    slug: "apostillaje-documentos",
    shortDescription:
      "Certificación oficial que garantiza la autenticidad de documentos con validez internacional.",
    fullDescription:
      "El apostillaje es una certificación oficial que valida documentos para uso internacional. Nuestro servicio garantiza que tus documentos sean reconocidos en más de 120 países miembros del Convenio de La Haya, con total seguridad y rapidez.",
    icon: "FileCheck2",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-apostillaje-2Z6ehwjZWKbkwfqeRfAw2N.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-apostillaje-2hG7hyBwUZCsvx5wWVeHGV.webp",
    benefits: [
      "Validez internacional garantizada",
      "Reconocimiento en 120+ países",
      "Proceso rápido y confiable",
      "Cumplimiento del Convenio de La Haya",
    ],
    features: [
      "Apostilla de documentos públicos",
      "Certificación notarial",
      "Validación de firmas",
      "Trámite acelerado disponible",
    ],
    cta: "Apostillar Documento",
  },
  {
    id: "3",
    name: "Impugnación de Comparendos",
    slug: "impugnacion-comparendos",
    shortDescription:
      "Protección de tus derechos. Desafiamos injusticias. Justicia para todos.",
    fullDescription:
      "Nos especializamos en la defensa legal contra comparendos injustos. Nuestro equipo de abogados expertos analiza cada caso, identifica vicios procedimentales y presenta argumentos sólidos para proteger tus derechos ante las autoridades.",
    icon: "Gavel",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-impugnacion-76pdzFRSWUxoJhzLN3aY2U.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-impugnacion-3WfudhxF8kfF83djxS9vQx.webp",
    benefits: [
      "Defensa legal especializada",
      "Análisis exhaustivo de casos",
      "Representación en audiencias",
      "Protección de derechos garantizada",
    ],
    features: [
      "Análisis de vicios procedimentales",
      "Presentación de recursos",
      "Representación ante autoridades",
      "Seguimiento integral del caso",
    ],
    cta: "Impugnar Comparendo",
  },
  {
    id: "4",
    name: "Cobros Injustificados - Facturas",
    slug: "cobros-injustificados",
    shortDescription:
      "Recupera lo que es tuyo. Desmantelamos cobros abusivos. Protegemos tu flujo de caja.",
    fullDescription:
      "Identificamos y recuperamos cobros injustificados en tus facturas. Realizamos análisis exhaustivos de documentos financieros, identificamos discrepancias y gestionamos la recuperación de fondos con transparencia y profesionalismo.",
    icon: "DollarSign",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-cobros-SYxFoQ74FYgpcZXS27DUg6.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-cobros-L6jsBGyE7YJGqyMAommjwZ.webp",
    benefits: [
      "Identificación de cobros abusivos",
      "Recuperación de fondos",
      "Análisis financiero detallado",
      "Resolución de disputas",
    ],
    features: [
      "Revisión exhaustiva de facturas",
      "Identificación de cargos indebidos",
      "Negociación con proveedores",
      "Gestión de reembolsos",
    ],
    cta: "Revisar Facturas",
  },
  {
    id: "5",
    name: "Impuestos Mal Liquidados",
    slug: "impuestos-mal-liquidados",
    shortDescription:
      "Resolvemos hoy para que crezcas mañana. Experiencia, conocimiento, resultados.",
    fullDescription:
      "Especializados en identificar y corregir liquidaciones tributarias incorrectas. Nuestros expertos en impuestos analizan tus declaraciones, identifican errores y gestionan la corrección ante las autoridades fiscales para minimizar sanciones.",
    icon: "Calculator",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-impuestos-ioxLrxz7Vu6cf7cW5BiAXj.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-impuestos-AuVC7KhB2467B8NzSr9rJW.webp",
    benefits: [
      "Identificación de errores tributarios",
      "Corrección de declaraciones",
      "Minimización de sanciones",
      "Tranquilidad fiscal",
    ],
    features: [
      "Auditoría tributaria completa",
      "Análisis de liquidaciones",
      "Gestión ante DIAN",
      "Asesoramiento fiscal estratégico",
    ],
    cta: "Revisar Impuestos",
  },
  {
    id: "6",
    name: "Ingeniería de Datos y Software",
    slug: "ingenieria-datos-software",
    shortDescription:
      "Construimos soluciones de datos escalables e inteligentes para transformación digital.",
    fullDescription:
      "Diseñamos e implementamos soluciones de ingeniería de datos y software personalizadas. Desde pipelines de datos hasta aplicaciones empresariales, transformamos tus necesidades en soluciones tecnológicas robustas y escalables.",
    icon: "Database",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-ingenieria-datos-W7e8qAQczqKWvXtcp7LBQq.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-ingenieria-datos-LDxy7Dtf5TJEpZypirHcMB.webp",
    benefits: [
      "Soluciones escalables",
      "Transformación digital",
      "Automatización de procesos",
      "Infraestructura robusta",
    ],
    features: [
      "Diseño de pipelines de datos",
      "Desarrollo de software personalizado",
      "Integración de sistemas",
      "Cloud & DevOps",
    ],
    cta: "Consultar Solución",
  },
  {
    id: "7",
    name: "Análisis de Datos",
    slug: "analisis-datos",
    shortDescription:
      "Convierte datos en insights. Visualización clara. Decisiones inteligentes.",
    fullDescription:
      "Transformamos datos complejos en insights accionables. Nuestros analistas expertos utilizan herramientas avanzadas para extraer patrones, identificar oportunidades y proporcionar recomendaciones basadas en datos para impulsar tu negocio.",
    icon: "BarChart3",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-analisis-datos-Yy9n9gooKubD5yeK9Y9vMw.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-analisis-datos-9WmaCifW8W6QwvYTUbo3WC.webp",
    benefits: [
      "Insights accionables",
      "Decisiones basadas en datos",
      "Identificación de oportunidades",
      "Ventaja competitiva",
    ],
    features: [
      "Análisis exploratorio de datos",
      "Visualización avanzada",
      "Business Intelligence",
      "Reportes personalizados",
    ],
    cta: "Solicitar Análisis",
  },
  {
    id: "8",
    name: "Desarrollo de Software a Medida",
    slug: "desarrollo-software-medida",
    shortDescription:
      "Tu visión. Nuestra experiencia. Éxito compartido.",
    fullDescription:
      "Desarrollamos software personalizado que se adapta perfectamente a tus necesidades. Desde aplicaciones web hasta soluciones empresariales complejas, nuestro equipo de desarrolladores expertos entrega código de calidad, escalable y mantenible.",
    icon: "Code2",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-desarrollo-software-aTGwsKvJqvtrzNHXRVTCyJ.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-desarrollo-software-T54MMEiSs39usgcphpduu7.webp",
    benefits: [
      "Soluciones personalizadas",
      "Código de calidad",
      "Escalabilidad garantizada",
      "Soporte continuo",
    ],
    features: [
      "Desarrollo web y móvil",
      "Arquitectura empresarial",
      "Integración de sistemas",
      "Mantenimiento y soporte",
    ],
    cta: "Iniciar Proyecto",
  },
  {
    id: "9",
    name: "Especial Sector Público: Módulo Presupuesto",
    slug: "sector-publico-presupuesto",
    shortDescription:
      "Transparente. Responsable. Construyendo un futuro mejor para todos.",
    fullDescription:
      "Soluciones especializadas para el sector público enfocadas en planificación presupuestaria, gestión de recursos y transparencia fiscal. Nuestros módulos ayudan a optimizar la asignación de recursos y mejorar la rendición de cuentas.",
    icon: "Building2",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-sector-publico-VP8wmMRizD5pEC6jUu97mp.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-sector-publico-6K3FGfjqQcVGTerCix4e.webp",
    benefits: [
      "Planificación presupuestaria eficiente",
      "Transparencia fiscal",
      "Optimización de recursos",
      "Cumplimiento normativo",
    ],
    features: [
      "Módulo de presupuesto integrado",
      "Reportes de ejecución",
      "Auditoría y control",
      "Gestión de inversiones",
    ],
    cta: "Conocer Solución",
  },
  {
    id: "10",
    name: "Seguridad de la Información",
    slug: "seguridad-informacion",
    shortDescription:
      "Protegiendo lo que más importa. Soluciones avanzadas de seguridad digital.",
    fullDescription:
      "Implementamos estrategias integrales de seguridad de la información para proteger tus datos críticos. Desde evaluaciones de vulnerabilidades hasta implementación de controles, garantizamos la confidencialidad, integridad y disponibilidad de tu información.",
    icon: "Shield",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-seguridad-informacion-7amE9Rb4vKA9hHwdVdp9sP.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-seguridad-informacion-dsPsajN5JhUnqvGYQuU8fG.webp",
    benefits: [
      "Protección de datos críticos",
      "Cumplimiento normativo",
      "Reducción de riesgos",
      "Tranquilidad operacional",
    ],
    features: [
      "Evaluación de vulnerabilidades",
      "Implementación de controles",
      "Gestión de accesos",
      "Monitoreo continuo",
    ],
    cta: "Evaluar Seguridad",
  },
  {
    id: "11",
    name: "Ciberseguridad y Blindaje Digital",
    slug: "ciberseguridad-blindaje",
    shortDescription:
      "Detectar. Proteger. Prevenir. Defensa cibernética 24/7.",
    fullDescription:
      "Protección integral contra amenazas cibernéticas. Nuestras soluciones incluyen detección de amenazas en tiempo real, respuesta a incidentes y blindaje digital para mantener tu infraestructura segura contra ataques sofisticados.",
    icon: "Lock",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-ciberseguridad-EXTpFz34hZNZxazKj8QYY9.png",
    imageCompressed:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-ciberseguridad-NXDh6xbkuNHB4gtTV5pEuD.webp",
    benefits: [
      "Protección 24/7",
      "Detección de amenazas",
      "Respuesta rápida a incidentes",
      "Blindaje digital completo",
    ],
    features: [
      "Monitoreo de amenazas",
      "Análisis de vulnerabilidades",
      "Respuesta a incidentes",
      "Capacitación en seguridad",
    ],
    cta: "Proteger Infraestructura",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}
