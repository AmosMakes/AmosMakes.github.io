import React from 'react';

type IconDisplayProps = {
  PortalIcon: string;
  IconName : string
  Link : string
};

const Icon: React.FC<IconDisplayProps> = ({ PortalIcon , IconName , Link}) => {
  return (
    <a href={Link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center m-4 ">

        <img src={PortalIcon} alt="my photo" className="w-10 h-auto mx-4" />
        <h1 className="font-bold font-mono">{IconName}</h1>
    </a>
  );
};

export default Icon;
