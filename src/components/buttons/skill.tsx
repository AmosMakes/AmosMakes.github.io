import { motion } from "framer-motion";

type SkillDisplayProps = {
  PortalIcon: string;
  IconName : string
  useStateHook: any; // sorry i couldnt be bothered
};

const Skill: React.FC<SkillDisplayProps> = ({ PortalIcon , IconName , useStateHook}) => {
  return (
    <motion.button className="flex flex-col items-center m-4    bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500     w-25 h-25 justify-center items-center rounded-3xl cursor-pointer" onClick={() => useStateHook(IconName)}
    initial={{ backgroundColor: "oklch(44.6% 0.043 257.281)" , boxShadow: "none"}}
    whileHover={{scale: 1.2, backgroundColor :"oklch(70.4% 0.04 256.788)",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"    }}
    transition={{ stiffness: 300 , ease: ["easeIn", "easeOut"],duration : 0.2}}
    whileTap={{ scale: 0.95 , transition : {duration : 0.1} ,backgroundColor : "oklch(86.9% 0.022 252.894)"}}
    >

        <img src={PortalIcon} alt="my photo" className="w-10 h-auto mx-4" />
        <h1 className="font-bold font-mono text-black text-center">{IconName}</h1>
    </motion.button>
  );
};

export default Skill;
