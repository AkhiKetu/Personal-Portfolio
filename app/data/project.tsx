import type { IconType } from 'react-icons'
import {
  SiFirebase,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export type Technology = {
  name: string
  icon: IconType
  color: string
}

export type Project = {
  id: number
  title: string
  image: string
  description: string
  features: string[]
  technologies: Technology[]
  github: string
  preview: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Krishi Rover',
    image: '/projects/krishi-rover-website.png',
    description:
      'An autonomous agricultural rover website for soil monitoring, obstacle detection, IoT supervision, and smart irrigation.',
    features: [
      'Soil moisture monitoring',
      'Obstacle detection',
      'Adaptive spot watering',
    ],
    technologies: [
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        color: 'text-foreground',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: 'text-blue-500',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: 'text-cyan-500',
      },
    ],
    github:
      'https://github.com/AkhiKetu/smart-irrigation-rover',
    preview:
      'https://smart-irrigation-rover.vercel.app/',
  },
  {
    id: 2,
    title: 'VoiceScribe AI',
    image: '/projects/voice-scribe-tool.png',
    description:
      'A speech-to-text application for file transcription, recording, and live speech recognition.',
    features: [
      'File transcription',
      'Audio recording',
      'Live speech recognition',
    ],
    technologies: [
      {
        name: 'React',
        icon: SiReact,
        color: 'text-cyan-500',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: 'text-blue-500',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: 'text-cyan-500',
      },
    ],
    github:
      'https://github.com/AkhiKetu/voiceScribe',
    preview:
      'https://voicescribe-flax.vercel.app/',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    image: '/projects/analytics-dashboard.png',
    description:
      'An interactive analytics dashboard for presenting important information through charts, statistics, and filtering tools.',
    features: [
      'Interactive charts and statistics',
      'Advanced filtering capabilities',
      'Responsive dashboard layout',
    ],
    technologies: [
      {
        name: 'React',
        icon: SiReact,
        color: 'text-cyan-500',
      },
      {
        name: 'Firebase',
        icon: SiFirebase,
        color: 'text-yellow-500',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: 'text-blue-500',
      },
    ],
    github:
      'https://github.com/your-username/analytics-dashboard',
    preview:
      'https://your-dashboard-project.vercel.app',
  },
]