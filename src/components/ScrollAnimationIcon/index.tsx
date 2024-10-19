import React from "react";

import scrollJson from "../../assets/animations/scroll.json";
import LottieAnimation from "../LottieAnimation";

interface ILoadingSpiner {
  size?: number;
}

const ScrollIcon = React.memo(function LoadingSpiner({
  size = 40,
}: ILoadingSpiner) {
  return (
    <div
      style={{
        // position: 'relative',
        // lineHeight: 0,
        width: size,
        height: size,
        backgroundColor: "white",
        borderRadius: "99px",
      }}
    >
      <LottieAnimation animationData={scrollJson} scroll={true} />
    </div>
  );
});

ScrollIcon.displayName = "ScrollIcon";

export default ScrollIcon;
