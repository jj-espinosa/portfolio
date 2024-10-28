import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        whoAmI:
          "I am a full stack developer who blends <span class='text-teal-800 dark:text-teal-200 font-semibold'>creativity</span> with technology to create captivating user <span class='text-teal-800 dark:text-teal-200 font-semibold'>experiences</span>. With <span class='text-teal-800 dark:text-teal-200 font-semibold'>2+ years</span> of experience, I specialize in web development and have a strong interest in UI/UX design.",

        experienceTitle: "Experience",
        technologiesTitle: "Technologies",
        role: "Full Stack Developer",
        downloadResume: "Download resume",
        experiences: [
          {
            year: "2022 - Present",
            role: "Full Stack Developer",
            company: "SOLUTE",
            description: [
              "Collected the <span class='text-teal-800 dark:text-teal-200 font-semibold'>requirements</span> and led the design of the <span class='text-teal-800 dark:text-teal-200 font-semibold'>REST API</span> of a new internal product, which led to a huge improvement in <span class='text-teal-800 dark:text-teal-200 font-semibold'>developers’ productivity</span>.",
              "Joined a team from a multinational company that worked with <span class='text-teal-800 dark:text-teal-200 font-semibold'>SCRUM</span> methodology as the reference Back-End developer. Led the technical design of the REST API new features and <span class='text-teal-800 dark:text-teal-200 font-semibold'>highly improved its performance and security</span> by updating its framework to the latest LTS version and introducing new technologies, such as <span class='text-teal-800 dark:text-teal-200 font-semibold'>database migrations</span>.",
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
          "Combino <span class='text-teal-800 dark:text-teal-200 font-semibold'>creatividad</span> con tecnología para crear <span class='text-teal-800 dark:text-teal-200 font-semibold'> experiencias</span> de usuario cautivadoras. Con <span class='text-teal-800 dark:text-teal-200 font-semibold'>más de 2 años</span> de experiencia, me especializo en desarrollo web y tengo un gran interés en el diseño UI/UX.",

        experienceTitle: "Experiencia",
        technologiesTitle: "Tecnologías",
        role: "Desarrollador Full Stack",
        downloadResume: "Descargar CV",
        experiences: [
          {
            year: "2022 - Actualidad",
            role: "Desarrollador Full Stack",
            company: "SOLUTE",
            description: [
              "Recopilé los <span class='text-teal-800 dark:text-teal-200 font-semibold'>requisitos</span> y lideré el diseño de la <span class='text-teal-800 dark:text-teal-200 font-semibold'>API REST</span> de un nuevo producto interno, lo que supuso a una enorme mejora en la <span class='text-teal-800 dark:text-teal-200 font-semibold'>productividad de los desarrolladores</span>.",
              "Me incorporé como desarrollador Back-End de referencia a un equipo de una gran multinacional que trabajaba con metodología <span class='text-teal-800 dark:text-teal-200 font-semibold'>SCRUM</span>. Lideré el diseño técnico de las nuevas funcionalidades de la API REST y <span class='text-teal-800 dark:text-teal-200 font-semibold'>mejoré notablemente su rendimiento y seguridad</span> actualizando su framework a la última versión LTS e introduciendo nuevas tecnologías, como <span class='text-teal-800 dark:text-teal-200 font-semibold'>migraciones de base de datos</span>.",
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
