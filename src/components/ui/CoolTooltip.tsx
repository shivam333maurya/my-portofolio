interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const CoolTooltip: React.FC<TooltipProps> = ({ text, children }) => {
  // const [tooltipStyle, setTooltipStyle] = useState({
  //   left: "0px",
  //   top: "0px",
  //   opacity: 0,
  // });

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   setTooltipStyle({
  //     left: `${e.clientX + 10}px`, // Offset to the right
  //     top: `${e.clientY - 20}px`, // Offset above the cursor
  //     opacity: 1,
  //   });
  // };

  // const handleMouseLeave = () => {
  //   setTooltipStyle({ ...tooltipStyle, opacity: 0 });
  // };
  return (
    <div
      className="relative group inline-block"
      // onMouseEnter={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className="fixed sm:block left-full top-0 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        // style={{
        //   left: tooltipStyle.left,
        //   top: tooltipStyle.top,
        //   opacity: tooltipStyle.opacity,
        //   pointerEvents: "none",
        // }}
      >
        <div className="relative w-max bg-gray-800 text-cyan-400 text-basic rounded py-1 px-2">
          {text}
          <svg
            className="absolute text-gray-800 h-2 w-2 left-0 top-1/2 transform -translate-y-1/2 -translate-x-2  rotate-90"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { CoolTooltip };
