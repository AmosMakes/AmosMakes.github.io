import { motion } from "framer-motion";

type DescriptionKey = string ;

type DescriptionProps = {
  PortalIcon: string;
  Descname : DescriptionKey;
}

type DescriptionContent = {
    "HTML" : string[],
    "CSS" : string[],
    "Javascript" : string[],
    "Typescript" : string[],
    "React" : string[],
    "Tailwind" : string[],
    "Framer" : string[],
    "C++" : string[],
    "C" : string[],
    "Python" : string[],
    "Godot" : string[],
    "Raylib" : string[],
    "Blender" : string[],
    "Substance Painter" : string[],
    "Substance Designer" : string[],
    '' : String[]
}


const HTML : string[] = ["HTML (HyperText Markup Language) is the foundational code used to structure and display content on web pages, defining elements like headings, paragraphs, links, and images through tags . It acts as the skeleton of a webpage, organizing text, media, and interactive components for browsers to render.",
    "HTML is the simplest way to make the most bare-bones website it the first block"
];

const CSS : string[] = ["CSS (Cascading Style Sheets) is the language used to style and visually enhance HTML elements on web pages. It controls layout, colors, fonts, spacing, and responsive design across different devices.",
    "i know how to use css its simple but in this website i used Tailwind as its just faster Tailwind is just CSS utilities"
];

const Javascript : string[] = ["JavaScript (JS) is the programming language that adds interactivity and dynamic behavior to websites. It enables features like animations, form validation, real-time updates, and user interactions by manipulating HTML/CSS.",
    "javascript was not used in this website but its modified version of Typescript which is almost the same"
];

const Typescript : string[] = ["TypeScript is a strongly typed superset of JavaScript that adds static type checking, helping developers catch errors early and write more maintainable code. It compiles to plain JavaScript and works with any JS runtime, while enabling advanced features like interfaces, generics, and type inference for scalable applications.",
    "Typescript was used for this website its almost the same as Javascript but with types so just JavaScript but better"
];

const React : string[] = ["React is a popular JavaScript library for building interactive user interfaces. Developed by Facebook, it lets developers create reusable UI components that update efficiently when data changes, using a virtual DOM for optimized performance.",
    "React was used for this website i have an understanding of react nowhere near mastery but im confident with it"
];

const Tailwind : string[] = ["Tailwind CSS is a utility-first CSS framework that lets you rapidly build modern designs directly in your markup. Instead of writing custom CSS, you apply pre-defined utility classes (like text-blue-500 or p-4) to style elements, enabling fast development without leaving your HTML/JSX.",
    "i used tailwind in this website i didnt used all of its features but i have an understanding of this libraly"
];

const Framer : string[] = ["Framer Motion is a powerful animation library for React that simplifies creating fluid, interactive animations with minimal code. It provides intuitive APIs for gestures (drag, hover, tap), page transitions, and complex animations while handling performance optimizations automatically.",
    "i used motion Framer in this website to make theese animations "
];

const Cpp : string[] = ["C++ is a high-performance, general-purpose programming language that extends C with object-oriented features. It's widely used for system/software development, game engines, and resource-intensive applications where speed and low-level control are critical.",
    "i use C++ often im nowhere near master but im ready to learn right now im working on my webdev so im on pause with this at the moment "
];

const C : string[] = ["C is a foundational, procedural programming language known for its efficiency and low-level control over hardware. It's widely used in operating systems, embedded systems, and performance-critical applications where direct memory management and speed are essential.",
    "i use C sometimes but i moslty use its ++ brother but i know their differences and can use both "
];

const Python : string[] = ["Python is a versatile, high-level programming language known for its simplicity and readability. It supports multiple paradigms (procedural, object-oriented, functional) and is widely used in web development, data science, AI, scripting, and automation.",
    "i use Python often for small scripts macros and other simmlar things its a very usefull tool for quick tools"
];

const Godot : string[] = ["Godot is a free, open-source game engine designed for creating 2D and 3D games with a focus on flexibility and ease of use. It features a node-based architecture, a built-in scripting language (GDScript, similar to Python), and support for C# and C++.",
    "i use Godot on almost daily basis im very efficent and good with it i like the engine it self and i was using it on and off since 3.3 "
];

const Raylib : string[] = ["Raylib is a lightweight, easy-to-learn C library for game development and multimedia applications. It provides simple, hardware-accelerated 2D/3D rendering with no external dependencies, making it ideal for prototyping and learning graphics programming.",
    "i use Raylib often its a simple and fun tool for making games"
];

const Blender : string[] = ["Blender is a free, open-source 3D creation suite used for modeling, sculpting, animation, rendering, video editing, and more. It offers a comprehensive toolset for artists and developers, supporting the entire 3D pipeline—from concept to final output.",
    "im most skilled at this i have been doing this since near the end of the pandemic i mostly do modeling everything from cube to rigged and textured 3d model i can do many styles. one of my favorite tools of all time"
];

const SubstancePainter : string[] = ["Substance Painter is a professional 3D texturing and material painting tool used in game development, film, and design. It offers a real-time PBR (Physically Based Rendering) workflow, allowing artists to create highly detailed textures and materials with lifelike surfaces.",
        "i use this for appling textures to my 3d models im very skilled with this tool"
];

const SubstanceDesigner : string[] = ["Substance Designer is a node-based 3D material authoring tool for creating procedural textures and PBR (Physically Based Rendering) materials. It enables artists to generate complex, tileable textures and surfaces using a non-destructive, algorithmic workflow.",
        "i use this for making textures to suubstance painter im very skilled with this tool"
];

const content : DescriptionContent = {
    "HTML" : HTML,
    "CSS" : CSS,
    "Javascript" : Javascript,
    "Typescript" : Typescript,
    "React" : React,
    "Tailwind" : Tailwind,
    "Framer" : Framer,
    "C++" : Cpp,
    "C" : C,
    "Python" : Python,
    "Godot" : Godot,
    "Raylib" : Raylib,
    "Blender" : Blender,
    "Substance Painter" : SubstancePainter,
    "Substance Designer" : SubstanceDesigner,
    '' : ["",""]
}

const Description: React.FC<DescriptionProps> = ({ PortalIcon , Descname  }) => {
  return (
    <motion.div className="flex flex-col  items-center bg-slate-900 p-5 rounded-3xl "
    initial={{ opacity: 0, scale: 0.8 }}   
    animate={{ opacity: 1, scale: 1 }}    
    transition={{ duration: 0.6, ease: "easeOut"}}
    >
        <img src={PortalIcon} alt="" className="w-40 h-40 object-contain p-5" />
        <h1 className="font-bold font-mono text-center pt-10 text-xl  bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent  slate-900/90">{content[Descname as keyof DescriptionContent ][0]}</h1>
        <h1 className="font-bold font-mono text-center pt-10 text-xl  bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent  slate-900/90">{content[Descname as keyof DescriptionContent ][1]}</h1>
    </motion.div>
  );
};

export default Description;