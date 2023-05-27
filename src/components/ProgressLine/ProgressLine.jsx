import React, { useEffect, useState } from "react";
import "./ProgressLine.css";

export const ProgressLine = ({
  label,
  backgroundColor = "#e5e5e5",
  visualParts = [
    {
      percentage: "0%",
      color: "white",
    },
  ],
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  return (
    <div className="my-7">
      <div className="flex justify-between text-white">
        <div className="">{label}</div>
        <div className="font-semibold">{visualParts[0].percentage}</div>
      </div>
      <div
        className="progressVisualFull"
        style={{
          backgroundColor,
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              /* eslint-disable-next-line react/no-array-index-key */
              key={index}
              style={{
                width: widths[index],

                backgroundColor: item.color,
              }}
              className={`progressVisualPart rounded-lg bg-gradient-to-l dark:from-blue-800  dark:to-blue-400 `}
            />
          );
        })}
      </div>
    </div>
  );
};
