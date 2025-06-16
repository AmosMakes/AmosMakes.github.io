import React from 'react';
import { motion } from "framer-motion";
type IconDisplayProps = {
  PortalIcon: string;
  IconName : string
  Link : string
};

const Icon: React.FC<IconDisplayProps> = ({ PortalIcon , IconName , Link}) => {
  return (
    <motion.a href={Link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center m-4 "

    whileHover={{ x:45 ,scale: 1.2, color :"oklch(70.4% 0.04 256.788)"}}
    transition={{ stiffness: 300 , ease: ["easeIn", "easeOut"]}}
    
    >

        <img src={PortalIcon} alt="my photo" className="w-10 h-auto mx-4" />
        <h1 className="font-bold font-mono">{IconName}</h1>
    </motion.a>
  );
};

export default Icon;
