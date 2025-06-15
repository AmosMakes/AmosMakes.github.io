

type SkillDisplayProps = {
  PortalIcon: string;
  IconName : string
  useStateHook: any; // sorry i couldnt be bothered
};

const Skill: React.FC<SkillDisplayProps> = ({ PortalIcon , IconName , useStateHook}) => {
  return (
    <button className="flex flex-col items-center m-4 bg-slate-600 w-25 h-25 justify-center items-center rounded-3xl" onClick={() => useStateHook(IconName)}>

        <img src={PortalIcon} alt="my photo" className="w-10 h-auto mx-4" />
        <h1 className="font-bold font-mono text-black text-center">{IconName}</h1>
    </button>
  );
};

export default Skill;
