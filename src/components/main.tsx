import Skill from './buttons/skill'
import { useState  } from 'react';

import Description from './description';

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


function GetIcon(name : string){
    switch (name) {
        case "HTML":
            return HTML
        case "CSS":
            return CSS
        case "Javascript":
            return Javascript
        case "Typescript":
            return Typescript
        case "React":
            return React
        case "Tailwind":
            return Tailwind
        case "Framer":
            return Framer
        case "C++":
            return Cpp
        case "C":
            return C
        case "Python":
            return Python
        case "Godot":
            return Godot
        case "Raylib":
            return Raylib
        case "Blender":
            return Blender
        case "Substance Painter":
            return Painter
        case "Substance Designer":
            return Designer
        default:
            return ''
    }
}

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
            <Description Descname={detail } PortalIcon={GetIcon(detail)}></Description>
                
        </div>
        </div>
    );
}

export default Main;