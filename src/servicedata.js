import img1 from "./Assets/undraw_ideation_research.svg";
import img2 from "./Assets/undraw_design.svg";
import img3 from "./Assets/undraw_devops.svg";
import img4 from "./Assets/undraw_growth_analytics_8btt.svg";

export default [
  {
    id: 1,
    title: "Ideation & Research",
    description: [
      "Strategic Design Thinking",
      "Technology Architecture",
      "Product Strategy",
      "Userbase Research"
    ],
    images:
      "https://raw.githubusercontent.com/digital-citadel/digital_citadel/master/src/Assets/undraw_design.svg"
  },
  {
    id: 2,
    title: "Design",
    description: [
      "User Experience Design",
      "User Interface Design",
      "Visual Design",
      "Usability Engineering"
    ],
    images: { url: img2 }
  },
  {
    id: 3,
    title: "Development & Ops",
    description: [
      "Web Application",
      "Mobile Applications",
      "Containerization",
      "E-Commerce Applications"
    ],
    images: { url: img3 }
  },
  {
    id: 4,
    title: "Growth",
    description: [
      "Digital Marketing",
      "Search Engine Optimisation",
      "Business Analysis",
      "Video Production"
    ],
    images: { url: img4 }
  }
];
