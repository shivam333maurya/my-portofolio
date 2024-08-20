import React from "react";

interface ScrollSnapComponentProps {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  height?: string;
  width?: string;
  snapType?: "mandatory" | "proximity";
}

const ScrollSnapComponent: React.FC<ScrollSnapComponentProps> = ({
  children,
  orientation = "horizontal",
  height = "h-full",
  width = "w-full",
  snapType = "mandatory",
}) => {
  const isHorizontal = orientation === "horizontal";
  const overflowClass = isHorizontal ? "overflow-x-auto" : "overflow-y-auto";
  const snapDirection = isHorizontal ? "snap-x" : "snap-y";
  const snapTypeClass = `snap-${snapType}`;
  const invisibleScrollbar = isHorizontal
    ? "scrollbar-hidden-horizontal"
    : "scrollbar-hidden-vertical";

  return (
    <div
      className={`relative ${overflowClass} ${snapDirection} ${snapTypeClass} ${height} ${width} ${invisibleScrollbar}`}
      style={{
        scrollSnapType: `${snapDirection} ${snapType}`,
      }}
    >
      <div className={`relative ${isHorizontal ? "flex" : ""} h-full w-full`}>
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`snap-start flex-shrink-0 ${height} ${width}`}
            style={{
              scrollSnapAlign: "start",
              scrollSnapStop: "always", // Ensures the snap points are honored
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export { ScrollSnapComponent };
