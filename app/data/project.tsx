import type { IconType } from "react-icons";
import {
  SiFirebase,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiFlask,
  SiPython,
} from "react-icons/si";

export type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  features: string[];
  technologies: Technology[];
  github: string;
  preview: string;
  fit?: "cover" | "contain";

  localSetup?: {
    title: string;
    cloneCommand: string;
    updateCommand: string;
    localUrl: string;
    steps: string[];
    note: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Krishi Rover",
    image: "/projects/krishi-Rover-Website.png",
    description:
      "An autonomous agricultural rover website for soil monitoring, obstacle detection, IoT supervision, and smart irrigation.",
    features: [
      "Soil moisture monitoring",
      "Obstacle detection",
      "Adaptive spot watering",
    ],
    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-foreground",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
      },
    ],
    github: "https://github.com/AkhiKetu/smart-irrigation-rover",
    preview: "https://smart-irrigation-rover.vercel.app/",
  },
  {
    id: 2,
    title: "VoiceScribe AI",
    image: "/projects/Voice-Scribe-Tool.png",
    description:
      "A speech-to-text application for file transcription, recording, and live speech recognition.",
    features: [
      "File transcription",
      "Audio recording",
      "Live speech recognition",
    ],
    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "text-cyan-500",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
      },
    ],
    github: "https://github.com/AkhiKetu/voiceScribe",
    preview: "https://voicescribe-flax.vercel.app/",
  },
  {
    id: 3,
    title: "Krishi-Verse — Database Course Project",
    image: "/projects/krishi-verse.png",
    description:
      "A web-based agricultural supply chain management system for products, inventory, warehouses, consumers, transportation, and document management.",
    features: [
      "Product, warehouse, and inventory management",
      "Transportation scheduling and cost monitoring",
      "Farmer, supplier, and customer management",
    ],
    technologies: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS",
        icon: SiCss,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-500",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "text-indigo-500",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-600 dark:text-blue-400",
      },
    ],
    github: "https://github.com/AkhiKetu/Krishi-Verse",

    // Empty because this project has no live deployment
    preview: "",

    localSetup: {
      title: "Run Krishi-Verse Locally with XAMPP",

      cloneCommand:
        "git clone https://github.com/AkhiKetu/Krishi-Verse C:\\xampp\\htdocs\\Krishi-Verse",

      updateCommand: "cd C:\\xampp\\htdocs\\Krishi-Verse && git pull",

      localUrl: "http://localhost/Krishi-Verse",

      steps: [
        "Install XAMPP and Git on your computer.",
        "Clone the repository into the XAMPP htdocs folder.",
        "Open XAMPP Control Panel and start Apache and MySQL.",
        "Open phpMyAdmin and create the database required by the project.",
        "Import the SQL file included in the repository.",
        "Check that the database name and credentials match the project configuration.",
        "Open the local project URL in your browser.",
      ],

      note: "The database name and SQL filename must match the configuration and SQL file included in the repository.",
    },
  },
  {
    id: 4, // Change this if 4 is already used
    title: "ToxicScan — Bangla Toxicity Detection System",
    image: "/projects/ToxicScan.png",
    description:
      "A Bangla text toxicity detection system that compares user input with a labeled dataset using tokenization, exact substring matching, Jaccard similarity, and Dice similarity.",
    features: [
      "Bangla text normalization and tokenization",
      "Dataset matching with Jaccard and Dice similarity",
      "Detection of abusive, profane, political, and religious hate content",
    ],
    technologies: [
      {
        name: "Python",
        icon: SiPython,
        color: "text-yellow-500",
      },
      {
        name: "Flask",
        icon: SiFlask,
        color: "text-foreground",
      },
      {
        name: "HTML",
        icon: SiHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS",
        icon: SiCss,
        color: "text-blue-500",
      },
    ],
    github: "https://github.com/AkhiKetu/AI-Bad-Word-Detection-System",

    // No deployed website
    preview: "",
    fit: "contain",

    localSetup: {
      title: "Run ToxicScan Locally",

      cloneCommand:
        "git clone https://github.com/AkhiKetu/AI-Bad-Word-Detection-System && cd AI-Bad-Word-Detection-System",

      updateCommand: "cd AI-Bad-Word-Detection-System && git pull",

      localUrl: "http://127.0.0.1:5000",

      steps: [
        "Install Python 3, Git, and Ollama on your computer.",
        "Open a terminal inside the cloned project folder.",
        "Create a virtual environment using: python -m venv .venv",
        "Activate it on Windows using: .venv\\Scripts\\activate",
        "Install Flask using: pip install flask",
        "Download Phi-3 using: ollama pull phi3:mini",
        "Create the project model using: ollama create mybanglamodel -f Modelfile",
        "Start the application using: python app.py",
        "Open the local URL in your browser.",
      ],

      note: "Keep app.py, hybrid_detector_model_confirm.py, train_data.jsonl, and Modelfile in the same project folder. Ollama provides AI confirmation; if it is unavailable, the application code falls back to the dataset label.",
    },
  },
];
