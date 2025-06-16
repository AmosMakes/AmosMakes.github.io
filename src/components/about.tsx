import { motion } from "framer-motion";

import PFP from '../assets/pfp.jpg'
import Icon from './buttons/icons';

// importing pictures (https://simpleicons.org)
//--------------------------
import Bluesky from '../assets/Links/bluesky.svg'
import Github from '../assets/Links/github.svg'
import Itchio from '../assets/Links/itchdotio.svg'
import Steam from '../assets/Links/steam.svg'
import Youtube from '../assets/Links/youtube.svg'
//--------------------------

import '../App.css'

const baseGradientStyles = {
    backgroundImage: "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };


function About() {

    


  return (
    <div className=' hidden md:flex inset-3 flex-col items-center p-5 lg:w-94 md:w-54 h-screen fixed rounded-tr-3xl rounded-tl-3xl   bg-slate-900 overflow-y-auto'>
        <div>

            {/* this is the about me part*/}
            <img src={PFP} alt="my photo " className=" w-64 h-auto rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-3xl rounded-bl-3xl mx-auto " />
            <p className="mt-3 text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent  font-bold font-mono">
                Lucas
            </p>

            <p className="mt-3 text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold font-mono ">
                Hi im 17 years old programer from slovakia i focus on Webdev, Software Development, 3D moddeling and Gamedev 

            </p>
            <br></br>
            {/* using a simple div to draw line*/}
            <div className='h-1 v-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl'></div>


            {/* this is the links part */}
            <br></br>
            <div className='bg-slate-800 p-4 rounded-3xl text-center'>
                <h1 className='font-bold font-mono '>Links</h1>
                <Icon PortalIcon = {Bluesky} IconName='Bluesky' Link='https://bsky.app/profile/amosmakes.bsky.social' ></Icon>
                <Icon PortalIcon = {Github} IconName='Github' Link='https://github.com/AmosMakes' ></Icon>
                <Icon PortalIcon = {Itchio} IconName='Itchio' Link='https://amos-makes.itch.io/' ></Icon>
                <Icon PortalIcon = {Youtube} IconName='Youtube' Link='https://www.youtube.com/@Amos_makes' ></Icon>
                <Icon PortalIcon = {Steam} IconName='Steam' Link='https://steamcommunity.com/profiles/76561198967180788/' ></Icon>
            </div>

            <br></br>
            {/* using a simple div to draw line*/}
            <div className='h-1 v-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl'></div>

            <br></br>
            <br></br>
            <br></br>
            <motion.p className="whitespace-pre font-mono text-xl font-bold text-blue-300/40 pb-8 select-none text-center font-semibold"
            
                style={{
                    ...baseGradientStyles,
                    color: "oklch(37.2% 0.044 257.287)", 
                }}
                whileHover={{ color: "transparent" }} 
                transition={{ duration: 0.3 }}
                //className="font-semibold cursor-pointer"
                >
                 ∧ ,,, ∧  <br></br>
                (  ̳• · • ̳) <br></br>
                /    づ♡

            </motion.p>

        </div>
        
    </div>
  );
}

export default About;