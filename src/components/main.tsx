import Skill from './buttons/skill'
import { motion } from "framer-motion";
import { useState  } from 'react';

// importing pictures (https://simpleicons.org)
//--------------------------
import HTML from '../assets/skills/webdev/html5.svg'
import CSS from '../assets/skills/webdev/css.svg'
import Javascript from '../assets/skills/webdev/javascript.svg'
import Typescript from '../assets/skills/webdev/typescript.svg'
import React from '../assets/skills/webdev/react.svg'
import Tailwind from '../assets/skills/webdev/tailwindcss.svg'
import Framer from '../assets/skills/webdev/framer.svg'

import Cpp from '../assets/skills/software/cplusplus.svg'
import C from '../assets/skills/software/c.svg'
import Python from '../assets/skills/software/python.svg'

import Godot from '../assets/skills/gamedev/godotengine.svg'
import Raylib from '../assets/skills/gamedev/raylib.svg'

import Blender from '../assets/skills/model/blender.svg'
import Painter from '../assets/skills/model/substance-3d-painter.png'
import Designer from '../assets/skills/model/substance-3d-designer.png'
//--------------------------


function Main() {


    const [detail, setDetail] = useState<string>('');

    return (
        <div className="flex flex-1 h-full overflow-hidden">
        
        <div className="lg:w-100 md:w-16 sm:w-0 flex-none" />

        <div className="flex-1 overflow-y-auto scrollbar-hide py-4 px-2 md:px-4">
            <div className="flex flex-col items-center space-y-10 mx-auto max-w-4xl">
            
            {/* Webdev Section */}
            <div className='w-full bg-slate-900/90 flex flex-col items-center rounded-3xl p-6'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold font-mono text-center pt-6">
                Webdev
                </h1>
                <div className='w-full flex justify-center pt-5 pb-10 px-4'>
                <div className='grid grid-cols-3 gap-4 bg-slate-800/80 p-4 rounded-3xl w-full max-w-md'>
                    <Skill PortalIcon={HTML} IconName='HTML' useStateHook={setDetail} />
                    <Skill PortalIcon={CSS} IconName='CSS' useStateHook={setDetail} />
                    <Skill PortalIcon={Javascript} IconName='Javascript' useStateHook={setDetail} />
                    <Skill PortalIcon={Typescript} IconName='Typescript' useStateHook={setDetail} />
                    <Skill PortalIcon={React} IconName='React' useStateHook={setDetail} />
                    <Skill PortalIcon={Tailwind} IconName='Tailwind' useStateHook={setDetail} />
                    <Skill PortalIcon={Framer} IconName='Framer' useStateHook={setDetail} />
                </div>
                </div>
            </div>

            {/* Software Development Section */}
            <div className='w-full bg-slate-900/90 flex flex-col items-center rounded-3xl p-6'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold font-mono text-center pt-6">
                Software Development
                </h1>
                <div className='w-full flex justify-center pt-5 pb-10 px-4'>
                <div className='grid grid-cols-3 gap-4 bg-slate-800/80 p-4 rounded-3xl w-full max-w-md'>
                    <Skill PortalIcon={Cpp} IconName='C++' useStateHook={setDetail} />
                    <Skill PortalIcon={C} IconName='C' useStateHook={setDetail} />
                    <Skill PortalIcon={Python} IconName='Python' useStateHook={setDetail} />
                </div>
                </div>
            </div>

            {/* Gamedev Section */}
            <div className='w-full bg-slate-900/90 flex flex-col items-center rounded-3xl p-6'>
                <h1 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold font-mono text-center pt-6">
                Gamedev
                </h1>
                <div className='w-full flex justify-center pt-5 pb-10 px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-800/80 p-4 rounded-3xl w-full max-w-md place-items-center'>
                    <Skill PortalIcon={Godot} IconName='Godot' useStateHook={setDetail} />
                    <Skill PortalIcon={Raylib} IconName='Raylib' useStateHook={setDetail} />
                </div>
                </div>
            </div>

            {/* 3D Modeling Section */}
            <div className='w-full bg-slate-900/90 flex flex-col items-center rounded-3xl p-6 '>
                <h1 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold font-mono text-center pt-6">
                3D Modeling
                </h1>
                <div className='w-full flex justify-center pt-5 pb-10 px-4'>
                <div className='grid grid-cols-3 gap-4 bg-slate-800/80 p-4 rounded-3xl w-full max-w-md'>
                    <Skill PortalIcon={Blender} IconName='Blender' useStateHook={setDetail} />
                    <Skill PortalIcon={Painter} IconName='Substance Painter' useStateHook={setDetail} />
                    <Skill PortalIcon={Designer} IconName='Substance Designer' useStateHook={setDetail} />
                </div>
                </div>
            </div>

            </div>
        </div>

        {/* Right Spacer */}
        <div className="lg:w-125 md:w-16 sm:w-0 flex-none" />

        {/* Right Sidebar */}
        <div className="hidden lg:flex fixed top-0 right-0 w-125 h-screen bg-slate-800/90 p-4 text-white z-50  lg:flex-col  lg:items-center p-10 ">
            {(() => {
            switch (detail) {
                case 'HTML':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={HTML} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">HTML (HyperText Markup Language) is the foundational code used to structure and display content on web pages, defining elements like headings, paragraphs, links, and images through tags . It acts as the skeleton of a webpage, organizing text, media, and interactive components for browsers to render.</h1>
                        
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">HTML is the simplest way to make the most bare-bones website it the first block</h1>
                    </motion.div>;
                case 'CSS':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={CSS} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">CSS (Cascading Style Sheets) is the language used to style and visually enhance HTML elements on web pages. It controls layout, colors, fonts, spacing, and responsive design across different devices.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">i know how to use css its simple but in this website i used Tailwind as its just faster Tailwind is just CSS utilities</h1>
                    </motion.div>;
                case 'Javascript':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Javascript} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">JavaScript (JS) is the programming language that adds interactivity and dynamic behavior to websites. It enables features like animations, form validation, real-time updates, and user interactions by manipulating HTML/CSS. </h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">javascript was not used in this website but its modified version of Typescript which is almost the same</h1>
                    </motion.div>;
                case 'Typescript':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Typescript} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">TypeScript is a strongly typed superset of JavaScript that adds static type checking, helping developers catch errors early and write more maintainable code. It compiles to plain JavaScript and works with any JS runtime, while enabling advanced features like interfaces, generics, and type inference for scalable applications.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">Typescript was used for this website its almost the same as Javascript but with types so just JavaScript but better</h1>
                    </motion.div>;
                case 'React':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={React} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">React is a popular JavaScript library for building interactive user interfaces. Developed by Facebook, it lets developers create reusable UI components that update efficiently when data changes, using a virtual DOM for optimized performance.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">React was used for this website i have an understanding of react nowhere near mastery but im confident with it</h1>
                    </motion.div>;
                case 'Tailwind':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Tailwind} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">Tailwind CSS is a utility-first CSS framework that lets you rapidly build modern designs directly in your markup. Instead of writing custom CSS, you apply pre-defined utility classes (like text-blue-500 or p-4) to style elements, enabling fast development without leaving your HTML/JSX.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">i used tailwind in this website i didnt used all of its features but i have an understanding of this libraly</h1>
                    </motion.div>;
                case 'Framer':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Framer} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">Framer Motion is a powerful animation library for React that simplifies creating fluid, interactive animations with minimal code. It provides intuitive APIs for gestures (drag, hover, tap), page transitions, and complex animations while handling performance optimizations automatically.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">i used motion Framer in this website to make theese animations</h1>
                    </motion.div>;
                case 'C++':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Cpp} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">C++ is a high-performance, general-purpose programming language that extends C with object-oriented features. It's widely used for system/software development, game engines, and resource-intensive applications where speed and low-level control are critical.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">i use C++ often im nowhere near master but im ready to learn right now im working on my webdev so im on pause with this at the moment</h1>
                    </motion.div>;
                case 'C':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={C} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">C is a foundational, procedural programming language known for its efficiency and low-level control over hardware. It's widely used in operating systems, embedded systems, and performance-critical applications where direct memory management and speed are essential.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">i use C sometimes but i moslty use its ++ brother but i know their differences and can use both </h1>
                    </motion.div>;
                case 'Python':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Python} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">Python is a versatile, high-level programming language known for its simplicity and readability. It supports multiple paradigms (procedural, object-oriented, functional) and is widely used in web development, data science, AI, scripting, and automation.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">i use Python often for small scripts macros and other simmlar things its a very usefull tool for quick tools </h1>
                    </motion.div>;
                case 'Godot':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Godot} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">Godot is a free, open-source game engine designed for creating 2D and 3D games with a focus on flexibility and ease of use. It features a node-based architecture, a built-in scripting language (GDScript, similar to Python), and support for C# and C++.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">i use Godot on almost daily basis im very efficent and good with it i like the engine it self and i was using it on and off since 3.3 </h1>
                    </motion.div>;
                case 'Raylib':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Raylib} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">Raylib is a lightweight, easy-to-learn C library for game development and multimedia applications. It provides simple, hardware-accelerated 2D/3D rendering with no external dependencies, making it ideal for prototyping and learning graphics programming.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">i use Raylib often its a simple and fun tool for making games </h1>
                    </motion.div>;
                case 'Blender':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Blender} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">Blender is a free, open-source 3D creation suite used for modeling, sculpting, animation, rendering, video editing, and more. It offers a comprehensive toolset for artists and developers, supporting the entire 3D pipeline—from concept to final output.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">im most skilled at this i have been doing this since near the end of the pandemic i mostly do modeling everything from cube to rigged and textured 3d model i can do many styles. one of my favorite tools of all time</h1>
                    </motion.div>;
                case 'Substance Painter':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Painter} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">Substance Painter is a professional 3D texturing and material painting tool used in game development, film, and design. It offers a real-time PBR (Physically Based Rendering) workflow, allowing artists to create highly detailed textures and materials with lifelike surfaces.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">i use this for appling textures to my 3d models im very skilled with this tool</h1>
                    </motion.div>;
                case 'Substance Designer':
                    return <motion.div className="flex flex-col  items-center bg-slate-600 m-7 rounded-3xl "
                    initial={{ opacity: 0, scale: 0.8 }}   
                    animate={{ opacity: 1, scale: 1 }}    
                    transition={{ duration: 0.6, ease: "easeOut"}}
                    >
                        <img src={Designer} alt="pick something" className="w-40 h-40 object-contain p-5" />
                        <h1 className="font-bold font-mono text-black text-center text-xl">Substance Designer is a node-based 3D material authoring tool for creating procedural textures and PBR (Physically Based Rendering) materials. It enables artists to generate complex, tileable textures and surfaces using a non-destructive, algorithmic workflow.</h1>
                        <h1 className="font-bold font-mono text-black text-center pt-10 text-xl">i use this for making textures to suubstance painter im very skilled with this tool</h1>
                    </motion.div>;
                default:
                    return <></>;
            }
            })()}
                
        </div>
        </div>
    );
}

export default Main;