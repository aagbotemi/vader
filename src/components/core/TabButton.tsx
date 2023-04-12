const TabButton = ({ title, activeTab, setActiveTab }: any) => {
  const isActive = activeTab.toLowerCase() === title.toLowerCase();

  return (
    <div
      onClick={() => setActiveTab(title)}
      className={`cursor-pointer px-3 transition-all delay-75 ease-in-out ${isActive ? "border-b-2 border-[#98B6FF]" : "bg-transparent"
        }`}
    >
      <h1
        className={`font-medium m-0 text-[15px] leading-[20px] transition-colors delay-75 ease-in-out ${isActive ? "text-[#FDFDFD]" : "text-[#C3C5CA]"
          }`}
      >
        {title}
      </h1>
    </div>
  );
};

export { TabButton as default }  