import { Layers } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Plug } from "lucide-react";
import { Workflow } from "lucide-react";
import { Sparkles } from "lucide-react";
import { AudioWaveform } from "lucide-react";
import { Rows3 } from "lucide-react";

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";
// import user5 from "../assets/profile-pictures/user5.jpg";
// import user6 from "../assets/profile-pictures/user6.jpg";

// trusted brands

import trusted1 from "../assets/bd.png";
import trusted2 from "../assets/carrefour.png";
import trusted3 from "../assets/cocacola.png";
import trusted4 from "../assets/glossier.png";
import trusted5 from "../assets/Holt.png";
import trusted6 from "../assets/lionsgate.png";
import trusted7 from "../assets/universal.png";

//Explore

import Blur from '../assets/Blur.png'
import Projects from "../assets/projects.png";
import Tasks from "../assets/Task.png";
import Marketing from "../assets/Marketing.png";
import Design from "../assets/Design.png"
import CRM from "../assets/CRM-firstfold-AI.png";
import Product from "../assets/Product.png";
import IT from "../assets/IT.png";
import Operations from "../assets/Operations.png"
import Gantt from "../assets/Gantt.png"


//Accelerate Business

import Sidekick from "../assets/accelerate-sidekick-v1.avif";
import Agent from "../assets/accelerate-agent-v1.avif"
import Vibe from "../assets/accelerate-vibe-v1.avif"


export const navItems = [
  { label: "Products", href: "#" },
  { label: "Ai", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Enterprise", href: "#" },
];

export const platForm = [
  {
    icon: <Layers />,
    text: "Platform overview",
  },
  {
    icon: <LayoutDashboard />,
    text: "Dashboards & reporting",
  },
  {
    icon: <Plug />,
    text: "Integrations",
  },
  {
    icon: <Workflow />,
    text: "Automations",
  },
  {
    icon: <Sparkles />,
    text: "Ai",
  },
  {
    icon: <AudioWaveform />,
    text: "mandoay MCP",
  },
  {
    icon: <Rows3 />,
    text: "Our infrastructure",
  },
]

export const explore = [
  {
    id: 0,
    icon: <Layers />,
    text: "Projects",
    image: Blur
  },
  {
    id: 1,
    icon: <Layers />,
    text: "Projects",
    image: Projects
  },
  {
    id: 2,
    icon: <LayoutDashboard />,
    text: "Tasks",
    image: Tasks
  },
  {
    id: 3,
    icon: <Plug />,
    text: "Marketing",
    image: Marketing
  },
  {
    id: 4,
    icon: <Workflow />,
    text: "Design",
    image: Design
  },
  {
    id: 5,
    icon: <Sparkles />,
    text: "CRM",
    image: CRM
  },
  {
    id: 6,
    icon: <AudioWaveform />,
    text: "Software",
    image: Product,
  },
  {
    id: 7,
    icon: <Rows3 />,
    text: "IT",
    image: IT,
  },
  {
    id: 8,
    icon: <Rows3 />,
    text: "Operations",
    image: Operations,
  },
  {
    id: 9,
    icon: <Rows3 />,
    text: "Product",
    image: Gantt,
  },
]

export const trusted = [
  {
    id: 1,
    image: trusted1
  },
  {
    id: 2,
    image: trusted2
  },
  {
    id: 3,
    image: trusted3
  },
  {
    id: 4,
    image: trusted4
  },
  {
    id: 5,
    image: trusted5
  },
  {
    id: 6,
    image: trusted6
  },
  {
    id: 7,
    image: trusted7
  },

]

export const AccBusinessItems = [
  {
    text: "Every persons work, exponentially better",
    image: Sidekick,
    note: "Empower every person to plan, execute, and deliver exponentially with the most advanced AI models and capabilities built directly in the context of work",
    bg: "bg-blue-500"

  },
   {
    text: "Unlimited workforce of AI agents",
    image: Agent,
    note: "Achieve impact faster with an unlimited workforce of AI agents that can take on specialized tasks and support multiple functions for automated execution at scale.",
    bg: "bg-yellow-500"
  },
   {
    text: "Consolidated made effortless",
    image: Vibe,
    note: "Reduce costs and clutter by replacing rigid, disconnected tools with custom apps and workflows tailored to how your business actually works.",
    bg: "bg-pink-300"
  },


]


// export const testimonials = [
//   {
//     user: "John Doe",
//     company: "Stellar Solutions",
//     image: user1,
//     text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
//   },
//   {
//     user: "Jane Smith",
//     company: "Blue Horizon Technologies",
//     image: user2,
//     text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
//   },
//   {
//     user: "David Johnson",
//     company: "Quantum Innovations",
//     image: user3,
//     text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
//   },
//   {
//     user: "Ronee Brown",
//     company: "Fusion Dynamics",
//     image: user4,
//     text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
//   },
//   {
//     user: "Michael Wilson",
//     company: "Visionary Creations",
//     image: user5,
//     text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
//   },
//   {
//     user: "Emily Davis",
//     company: "Synergy Systems",
//     image: user6,
//     text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
//   },
// ];

// export const features = [
//   {
//     icon: <BotMessageSquare />,
//     text: "Drag-and-Drop Interface",
//     description:
//       "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
//   },
//   {
//     icon: <Fingerprint />,
//     text: "Multi-Platform Compatibility",
//     description:
//       "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
//   },
//   {
//     icon: <ShieldHalf />,
//     text: "Built-in Templates",
//     description:
//       "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
//   },
//   {
//     icon: <BatteryCharging />,
//     text: "Real-Time Preview",
//     description:
//       "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
//   },
//   {
//     icon: <PlugZap />,
//     text: "Collaboration Tools",
//     description:
//       "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
//   },
//   {
//     icon: <GlobeLock />,
//     text: "Analytics Dashboard",
//     description:
//       "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
//   },
// ];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
