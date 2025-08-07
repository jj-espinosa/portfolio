import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        whoAmI:
          "I am a full stack developer who blends <span class='text-teal-800 dark:text-teal-200 font-semibold'>creativity</span> with technology to create captivating user <span class='text-teal-800 dark:text-teal-200 font-semibold'>experiences</span>. With <span class='text-teal-800 dark:text-teal-200 font-semibold'>3+ years</span> of experience, I specialize in web development and have a strong interest in UI/UX design.",

        experienceTitle: "Experience",
        technologiesTitle: "Technologies",
        role: "Full Stack Developer",
        downloadResume: "Download resume",
        resumeRoute: "./juanjesusresume.pdf",
        experiences: [
          {
            year: "2024 - Present",
            role: "Full Stack Developer",
            company: "IOON Technologies",
            description: [
              "Proactively redesigned, using <span class='text-teal-800 dark:text-teal-200 font-semibold'>Figma</span>, a marketing campaign (Pop up with <span class='text-teal-800 dark:text-teal-200 font-semibold'>lead generation form</span>) distributed across all <span class='text-teal-800 dark:text-teal-200 font-semibold'>Stellantis</span> brands and countries, improving <span class='text-teal-800 dark:text-teal-200 font-semibold'>responsiveness</span> and <span class='text-teal-800 dark:text-teal-200 font-semibold'>user interface (UI)</span> and adding <span class='text-teal-800 dark:text-teal-200 font-semibold'>micro-interactions</span> and <span class='text-teal-800 dark:text-teal-200 font-semibold'>animations (GSAP)</span>, which led to <span class='text-teal-800 dark:text-teal-200 font-semibold'>a significant increase in conversion</span>.",
              "Developed <span class='text-teal-800 dark:text-teal-200 font-semibold'>use cases ('Abandoned Configuration')</span> in <span class='text-teal-800 dark:text-teal-200 font-semibold'>Dynamic Yield</span> using <span class='text-teal-800 dark:text-teal-200 font-semibold'>cookies</span> with the aim of bringing the user back to the point where they left their vehicle configuration, which <span class='text-teal-800 dark:text-teal-200 font-semibold'>significantly increased conversion</span>.",
              "Proposed and led the development of a <span class='text-teal-800 dark:text-teal-200 font-semibold'>REST API</span> based on <span class='text-teal-800 dark:text-teal-200 font-semibold'>Express.js (Node.js)</span> as a dynamic solution to a problem affecting numerous outdated marketing campaigns, which <span class='text-teal-800 dark:text-teal-200 font-semibold'>increased the revenue from those campaigns</span>.",
              "Led the implementation of <span class='text-teal-800 dark:text-teal-200 font-semibold'>Dynamic Yield (Consent scripts, Page Context, Product Feed...)</span> on the new Stellantis pages in order to use the advanced features of this tool.",
              "Deployed and monitored scripts in <span class='text-teal-800 dark:text-teal-200 font-semibold'>Google Tag Manager</span> to collect emails from users entered in forms and feed the <span class='text-teal-800 dark:text-teal-200 font-semibold'>customer data platform (CDP)</span>.",
            ],
            technologies: [
              "JavaScript",
              "GSAP",
              "Express.js",
              "Node.js",
              "Figma",
              "GTM",
            ],
          },
          {
            year: "2022 - 2024",
            role: "Full Stack Developer",
            company: "SOLUTE",
            description: [
              "Collected the <span class='text-teal-800 dark:text-teal-200 font-semibold'>requirements</span> and led the design of the <span class='text-teal-800 dark:text-teal-200 font-semibold'>REST API</span> of a new internal product, which led to a huge improvement in <span class='text-teal-800 dark:text-teal-200 font-semibold'>developers' productivity</span>.",
              "Joined a team from <span class='text-teal-800 dark:text-teal-200 font-semibold'>GE Vernova</span> that worked with <span class='text-teal-800 dark:text-teal-200 font-semibold'>SCRUM</span> methodology as the reference Back-End developer. Led the technical design of the REST API new features and <span class='text-teal-800 dark:text-teal-200 font-semibold'>highly improved its performance and security</span> by updating its framework to the latest LTS version and introducing new technologies, such as <span class='text-teal-800 dark:text-teal-200 font-semibold'>database migrations</span>.",
              "Led the development of a <span class='text-teal-800 dark:text-teal-200 font-semibold'>React</span>-based extension for another company's platform. In addition to the success of the project, the collaboration between both companies was strengthened for future developments.",
              "Redesigned weather forecasting team's website <span class='text-teal-800 dark:text-teal-200 font-semibold'>User Interface (UI)</span> which had a huge impact on <span class='text-teal-800 dark:text-teal-200 font-semibold'>User Experience (UX)</span>.",
              "Redesigned the weather forecasting team's REST API using the <span class='text-teal-800 dark:text-teal-200 font-semibold'>FastAPI Python</span> framework.",
              "Defined the team's version control strategy and set up the continuous integration and continuous deployment (<span class='text-teal-800 dark:text-teal-200 font-semibold'>CI/CD</span>) flow in <span class='text-teal-800 dark:text-teal-200 font-semibold'>Gitlab</span> for all the team's projects.",
              "Deployed a new centralized download system for numerical weather models (developed in Python and connected to a <span class='text-teal-800 dark:text-teal-200 font-semibold'>SQL</span> database for tracking and control) for the forecasting team.",
            ],
            technologies: [
              "React",
              "Tailwind CSS",
              "Express.js",
              "Node.js",
              "FastAPI",
            ],
          },
        ],
        lightMode: "Light",
        darkMode: "Dark",
        english: "English",
        spanish: "Spanish",
        rights: "All Rights Reserved.",
      },
    },
    es: {
      translation: {
        whoAmI:
          "Combino <span class='text-teal-800 dark:text-teal-200 font-semibold'>creatividad</span> con tecnología para crear <span class='text-teal-800 dark:text-teal-200 font-semibold'> experiencias</span> de usuario cautivadoras. Con <span class='text-teal-800 dark:text-teal-200 font-semibold'>más de 3 años</span> de experiencia, me especializo en desarrollo web y tengo un gran interés en el diseño UI/UX.",

        experienceTitle: "Experiencia",
        technologiesTitle: "Tecnologías",
        role: "Desarrollador Full Stack",
        downloadResume: "Descargar CV",
        resumeRoute: "./juanjesuscv.pdf",
        experiences: [
          {
            year: "2024 - Actualidad",
            role: "Desarrollador Full Stack",
            company: "IOON Technologies",
            description: [
              "Rediseñé de forma proactiva, usando <span class='text-teal-800 dark:text-teal-200 font-semibold'>Figma</span>, una campaña de marketing (Pop up con <span class='text-teal-800 dark:text-teal-200 font-semibold'>formulario de generación de leads</span>) distribuida en todas las marcas y países de <span class='text-teal-800 dark:text-teal-200 font-semibold'>Stellantis</span>, mejorando la <span class='text-teal-800 dark:text-teal-200 font-semibold'>responsividad</span> y la <span class='text-teal-800 dark:text-teal-200 font-semibold'>interfaz de usuario (UI)</span> y agregando <span class='text-teal-800 dark:text-teal-200 font-semibold'>microinteracciones</span> y <span class='text-teal-800 dark:text-teal-200 font-semibold'>animaciones (GSAP)</span>, lo que supuso un <span class='text-teal-800 dark:text-teal-200 font-semibold'>aumento notable en la conversión</span>.",
              "Desarrollé <span class='text-teal-800 dark:text-teal-200 font-semibold'>casos de uso (“Configuración abandonada”)</span> en <span class='text-teal-800 dark:text-teal-200 font-semibold'>Dynamic Yield</span> utilizando <span class='text-teal-800 dark:text-teal-200 font-semibold'>cookies</span> con el objetivo de que el usuario volviese al punto en el que había dejado la configuración de su vehículo, lo que <span class='text-teal-800 dark:text-teal-200 font-semibold'>aumentó considerablemente la conversión</span>.",
              "Propuse y lideré el desarrollo de una <span class='text-teal-800 dark:text-teal-200 font-semibold'>API REST</span> basada en <span class='text-teal-800 dark:text-teal-200 font-semibold'>Express.js (Node.js)</span> como solución dinámica a un problema que afectaba a numerosas campañas de marketing desactualizadas, <span class='text-teal-800 dark:text-teal-200 font-semibold'>lo que aumentó los ingresos de dichas campañas</span>.",
              "Lideré la implementación de <span class='text-teal-800 dark:text-teal-200 font-semibold'>Dynamic Yield (Consent scripts, Page Context, Product Feed…)</span> en las nuevas páginas Stellantis para poder usar las funciones avanzadas de esta herramienta.",
              "Desplegué y monitoreé scripts en <span class='text-teal-800 dark:text-teal-200 font-semibold'>Google Tag Manager</span> para recolectar emails de los usuarios introducidos en formularios y alimentar la <span class='text-teal-800 dark:text-teal-200 font-semibold'>plataforma de datos del cliente (CDP)</span>.",
            ],
            technologies: [
              "JavaScript",
              "GSAP",
              "Express.js",
              "Node.js",
              "Figma",
              "GTM",
            ],
          },
          {
            year: "2022 - 2024",
            role: "Desarrollador Full Stack",
            company: "SOLUTE",
            description: [
              "Recopilé los <span class='text-teal-800 dark:text-teal-200 font-semibold'>requisitos</span> y lideré el diseño de la <span class='text-teal-800 dark:text-teal-200 font-semibold'>API REST</span> de un nuevo producto interno, lo que supuso a una enorme mejora en la <span class='text-teal-800 dark:text-teal-200 font-semibold'>productividad de los desarrolladores</span>.",
              "Me incorporé como desarrollador Back-End de referencia a un equipo de <span class='text-teal-800 dark:text-teal-200 font-semibold'>GE Vernova</span> que trabajaba con metodología <span class='text-teal-800 dark:text-teal-200 font-semibold'>SCRUM</span>. Lideré el diseño técnico de las nuevas funcionalidades de la API REST y <span class='text-teal-800 dark:text-teal-200 font-semibold'>mejoré notablemente su rendimiento y seguridad</span> actualizando su framework a la última versión estable e introduciendo nuevas tecnologías, como <span class='text-teal-800 dark:text-teal-200 font-semibold'>migraciones de base de datos</span>.",
              "Lideré el desarrollo de una extensión basada en <span class='text-teal-800 dark:text-teal-200 font-semibold'>React</span> para la plataforma de otra empresa. Además del éxito del proyecto, se reforzó la colaboración entre ambas empresas para futuros desarrollos.",
              "Rediseñé la <span class='text-teal-800 dark:text-teal-200 font-semibold'>interfaz de usuario (UI)</span> del equipo de predicción, lo que tuvo un gran impacto positivo en la <span class='text-teal-800 dark:text-teal-200 font-semibold'>experiencia de usuario (UX)</span>.",
              "Rediseñé por completo la API REST del equipo de predicción meteorológica utilizando el framework de <span class='text-teal-800 dark:text-teal-200 font-semibold'>Python FastAPI</span>.",
              "Definí la estrategia de control de versiones del equipo y configuré el flujo de integración continua y despliegue continuo (<span class='text-teal-800 dark:text-teal-200 font-semibold'>CI/CD</span>) en <span class='text-teal-800 dark:text-teal-200 font-semibold'>Gitlab</span> para todos los proyectos del equipo.",
              "Desplegué un nuevo sistema de descarga centralizado de modelos numéricos de predicción (desarrollado en Python y conectado a una base de datos <span class='text-teal-800 dark:text-teal-200 font-semibold'>SQL</span> para el seguimiento y control del mismo) para el equipo de predicción meteorológica.",
            ],
            technologies: [
              "React",
              "Tailwind CSS",
              "Express.js",
              "Node.js",
              "FastAPI",
            ],
          },
        ],
        lightMode: "Claro",
        darkMode: "Oscuro",
        english: "Inglés",
        spanish: "Español",
        rights: "Todos los derechos reservados.",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
