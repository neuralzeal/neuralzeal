import Process1 from "../../assets/image/saasModern/process-1.svg";
import Process2 from "../../assets/image/saasModern/process-2.svg";
import Process3 from "../../assets/image/saasModern/process-3.svg";

import FeatureIcon1 from "../../assets/image/saasModern/icon-1.png";
import FeatureIcon2 from "../../assets/image/saasModern/icon-2.png";
import FeatureIcon3 from "../../assets/image/saasModern/icon-3.png";
import FeatureIcon4 from "../../assets/image/saasModern/icon-4.png";
import FeatureIcon5 from "../../assets/image/saasModern/icon-5.png";
import FeatureIcon6 from "../../assets/image/saasModern/icon-6.png";

import Screenshot1 from "../../assets/image/saasModern/dash-3.png";
import Screenshot2 from "../../assets/image/saasModern/dash-4.png";

import AuthorOne from "../../assets/image/saasModern/author-1.jpg";
import AuthorTwo from "../../assets/image/saasModern/author-2.jpg";
import AuthorThree from "../../assets/image/saasModern/author-3.jpg";

import { ic_monetization_on } from "react-icons-kit/md/ic_monetization_on";
import { ic_settings } from "react-icons-kit/md/ic_settings";
import { pieChart } from "react-icons-kit/icomoon/pieChart";
import { briefcase } from "react-icons-kit/fa/briefcase";

export const MENU_ITEMS = [
  {
    label: "Home",
    path: "#banner_section",
    offset: "0",
  },
  {
    label: "Feature",
    path: "#feature_section",
    offset: "0",
  },
  {
    label: "Pricing",
    path: "#pricing_section",
    offset: "0",
  },
  {
    label: "Testimonial",
    path: "#testimonial_section",
    offset: "0",
  },
  {
    label: "FAQ",
    path: "#faq_section",
    offset: "0",
  },
];

export const PROCESS_ITEMS = [
  {
    image: Process1,
    title: "Predictive Modelling with AI",
    description:
      "Harness the power of AI-driven machine learning algorithms to uncover actionable insights and predict future trends, enabling data-driven decision-making.",
  },
  {
    image: Process2,
    title: "Automated AI-Powered Data Pipelines",
    description:
      "Automate data processing and integration using AI-enhanced data pipelines, ensuring efficient and reliable data ingestion from various sources for seamless analysis and reporting.",
  },
  {
    image: Process3,
    title: "Customised AI Solutions",
    description:
      "Collaborate with our team of AI experts to develop tailored solutions for your business needs, leveraging AI capabilities for tasks such as data mining, predictive maintenance, and personalized recommendations, driving innovation and business growth.",
  },
];

export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: "Basic Account",
    description: "For Small teams or group who need to build website ",
    price: "$0",
    priceLabel: "Only for first month",
    buttonLabel: "CREATE FREE ACCOUNT",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder",
      },
      {
        content: "1,000s of Templates Ready",
      },
      {
        content: "Blog Tools",
      },
      {
        content: "eCommerce Store ",
      },
      {
        content: "30+ Webmaster Tools",
      },
    ],
  },
  {
    name: "Business Account",
    description: "For Mediums teams or group who need to build website ",
    price: "$9.87",
    priceLabel: "Per month & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder",
      },
      {
        content: "1,000s of Templates Ready",
      },
      {
        content: "Blog Tools",
      },
      {
        content: "eCommerce Store ",
      },
      {
        content: "30+ Webmaster Tools",
      },
    ],
  },
  {
    name: "Premium Account",
    description: "For Large teams or group who need to build website ",
    price: "$12.98",
    priceLabel: "Per month & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder",
      },
      {
        content: "1,000s of Templates Ready",
      },
      {
        content: "Blog Tools",
      },
      {
        content: "eCommerce Store ",
      },
      {
        content: "30+ Webmaster Tools",
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: "Basic Account",
    description: "For a single client or team who need to build website ",
    price: "$0",
    priceLabel: "Only for first month",
    buttonLabel: "CREATE FREE ACCOUNT",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder",
      },
      {
        content: "1,000s of Templates Ready",
      },
      {
        content: "Blog Tools",
      },
      {
        content: "eCommerce Store ",
      },
      {
        content: "30+ Webmaster Tools",
      },
    ],
  },
  {
    name: "Business Account",
    description: "For Small teams or group who need to build website ",
    price: "$6.00",
    priceLabel: "Per month & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Unlimited secure storage",
      },
      {
        content: "2,000s of Templates Ready",
      },
      {
        content: "Blog Tools",
      },
      {
        content: "24/7 phone support",
      },
      {
        content: "50+ Webmaster Tools",
      },
    ],
  },
  {
    name: "Premium Account",
    description: "For Large teams or group who need to build website ",
    price: "$9.99",
    priceLabel: "Per month & subscription yearly",
    buttonLabel: "START FREE TRIAL",
    url: "#",
    listItems: [
      {
        content: "Drag & Drop Builder",
      },
      {
        content: "3,000s of Templates Ready",
      },
      {
        content: "Advanced branding",
      },
      {
        content: "Knowledge base support",
      },
      {
        content: "80+ Webmaster Tools",
      },
    ],
  },
];

export const FAQ_DATA = [
  {
    expend: true,
    title: "How to contact with Customer Service?",
    description:
      "Our Customer Experience Team is available 7 days a week and you can reach us at sales@neuralzeal.com . We try to reply quickly, so you need not to wait too long for a response!. ",
  },
  {
    title:
      "Can you customize data analytics solutions to meet my specific business needs?",
    description:
      "Yes, we understand that every business is unique, and we tailor our data analytics solutions to address your specific requirements and objectives. Whether you need predictive analytics, business intelligence dashboards, data visualization tools, or custom analytics models, our team will work closely with you to design and implement a solution that aligns with your business goals and delivers actionable insights.",
  },
  {
    title: "How secure is my data with your data analytics services?",
    description:
      "At our company, we take data security and privacy seriously. We employ industry-standard security measures to protect your data from unauthorized access, misuse, and loss. Our data analytics solutions adhere to strict security protocols and compliance standards to ensure the confidentiality, integrity, and availability of your data.",
  },
  {
    title: "What types of data can be analyzed with data analytics?",
    description:
      "Data analytics can analyze various types of data, including structured data (such as databases and spreadsheets) and unstructured data (such as text documents, social media posts, and multimedia files). It can also handle different data sources, including internal data from your business systems and external data from third-party sources.",
  },
];

export const FOOTER_WIDGET = [
  {
    title: "About Us",
    menuItems: [
      {
        url: "#",
        text: "Support Center",
      },
      {
        url: "#",
        text: "Customer Support",
      },
      {
        url: "#",
        text: "About Us",
      },
      {
        url: "#",
        text: "Copyright",
      },
      {
        url: "#",
        text: "Popular Campaign",
      },
    ],
  },
  {
    title: "Our Information",
    menuItems: [
      {
        url: "#",
        text: "Return Policy",
      },
      {
        url: "#",
        text: "Privacy Policy",
      },
      {
        url: "#",
        text: "Terms & Conditions",
      },
      {
        url: "#",
        text: "Site Map",
      },
      {
        url: "#",
        text: "Store Hours",
      },
    ],
  },
  {
    title: "My Account",
    menuItems: [
      {
        url: "#",
        text: "Press inquiries",
      },
      {
        url: "#",
        text: "Social media directories",
      },
      {
        url: "#",
        text: "Images & B-roll",
      },
      {
        url: "#",
        text: "Permissions",
      },
      {
        url: "#",
        text: "Speaker requests",
      },
    ],
  },
  {
    title: "Policy",
    menuItems: [
      {
        url: "#",
        text: "Application security",
      },
      {
        url: "#",
        text: "Software principles",
      },
      {
        url: "#",
        text: "Unwanted software policy",
      },
      {
        url: "#",
        text: "Responsible supply chain",
      },
    ],
  },
];

export const FEATURES = [
  {
    icon: FeatureIcon1,
    title: "Expertise and Experience",
    description:
      "Leveraging a team of seasoned data scientists and analysts with deep domain knowledge and proven track records.",
  },
  {
    icon: FeatureIcon2,
    title: "Cutting-Edge Technologies",
    description:
      "Utilizing the latest advancements in data processing, machine learning, and cloud computing to deliver cutting-edge solutions.",
  },
  {
    icon: FeatureIcon3,
    title: "Customized Approach",
    description:
      "Tailoring our data analytics services to meet your unique business requirements and industry-specific challenges.",
  },
  {
    icon: FeatureIcon4,
    title: "End-to-End Solutions",
    description:
      "Offering comprehensive services spanning data ingestion, cleansing, analysis, visualization, and actionable insights.",
  },
  {
    icon: FeatureIcon5,
    title: "Scalable and Secure",
    description:
      "Providing scalable and robust data solutions with built-in security and compliance measures to safeguard your data.",
  },
  {
    icon: FeatureIcon6,
    title: "Measurable Impact",
    description:
      "Delivering tangible and measurable results that drive business growth, optimize operations, and enhance decision-making processes.",
  },
];

export const SCREENSHOTS = [
  {
    icon: ic_monetization_on,
    title: "Budget Overview",
    image: Screenshot2,
  },
  {
    icon: ic_settings,
    title: "Create & Adjust",
    image: Screenshot1,
  },
  {
    icon: pieChart,
    title: "View Reports",
    image: Screenshot2,
  },
  {
    icon: briefcase,
    title: "Integrations",
    image: Screenshot1,
  },
];

export const TESTIMONIALS = [
  {
    title: "A Game-Changer for Our Business",
    review:
      "NeuralZeal exceeded my expectations! Their data analytics services were top-notch, and their team was incredibly knowledgeable and helpful. I am grateful for their expertise and dedication. Thank you, NeuralZeal Data Analytics Private Limited!",
    name: "Emily Johnson",
    designation: "CTO",
    avatar: AuthorOne,
  },
  {
    title: "Exceptional Service, Unparalleled Results",
    review:
      "NeuralZeal Data Analytics Private Limited has been a game-changer for my business. Their expertise in data analytics and exceptional customer service have truly made a positive impact. Thank you for your outstanding work, NeuralZeal!",
    name: "Sara Doe",
    designation: "Marketing Director",
    avatar: AuthorTwo,
  },
  {
    title: "Empowering Our Team with Innovative Solutions",
    review:
      "NeuralZeal Data Analytics is exceptional! Their expertise in data analytics is top-notch, and their team is professional and knowledgeable. I was impressed by their attention to detail and exceptional customer service. Thank you for your great work, NeuralZeal!",
    name: "Michael Thompson",
    designation: "Head of Operations",
    avatar: AuthorThree,
  },
];
