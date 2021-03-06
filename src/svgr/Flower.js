import * as React from "react";
import PropTypes from "prop-types";

const SvgFlower = (props) => (
  <svg
    id="flower_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 1920 1080"
    style={{
      enableBackground: "new 0 0 1920 1080",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>{".flower_svg__st0"}</style>
    <path
      className="flower_svg__st0"
      d="M768.52 407.97c31.21-43.32 61.64-87.24 94.04-129.66 12.68-16.6 29.47-33.2 53.7-20.98 21.76 10.98 44.15 23.75 40.27 54.06-3.91 30.59 18.16 46.3 34.88 65.74 33.79 39.28 26.4 76.88-19.02 101.6-64.19.87-128.68 9.83-192.26-6.89-16.02-19.05-22.31-39.92-11.61-63.87zM727.86 521.23c-.2 56.61-.1 113.23-.7 169.84-.56 52.81-34.78 72.6-78.49 40.81-31.37-22.81-59.46-43.9-99.99-51.81-40.72-7.94-47.14-59.71-11.59-87.55 41.82-32.75 87.83-60.14 132.02-89.85 24.21-8.45 41.17 6.03 58.75 18.56zM675.13 395.51c-26.83-36.34-54.01-72.42-80.34-109.12-13.71-19.1-23.89-40.18-5.76-61.85 16.44-19.65 36.53-31.91 63.59-19.66 23.3 10.55 43.74.42 64.73-8.5 20.49-8.71 40.4-19.33 64.63-8.94 27.68 11.87 41.88 26.39 28.94 59.01-19.6 49.41-36.2 100.02-54.07 150.13-27.32 5.67-54.55 4.92-81.72-1.07zM657.89 489.65c-47.6 14.87-95.1 30.08-142.87 44.42-18 5.4-37.62 15.34-53.39-4.29-15.07-18.76-21.27-40.53-10.78-63.23 14.96-32.37 28.41-63.09 18.3-101.37-5.29-20.02 8.97-40.01 28.86-51.52 21.1-12.21 36.46-.32 51.93 12.29 36.19 29.51 72.63 58.72 108.96 88.06 11.41 25.36 8.43 50.54-1.01 75.64z"
      style={{
        fill: props.colorLeaf,
      }}
      
    />
    <path
      d="M657.89 489.65c-11.43-25.37-10.85-50.59 1.01-75.65 5.4-6.17 10.81-12.33 16.23-18.5 27.42-13.32 54.66-12.74 81.72 1.08 3.89 3.8 7.79 7.59 11.68 11.39 10.15 19.08 12.79 39.7 12.54 60.91 1.27 4.14.6 7.87-2.33 11.12-11.59 11.47-23.18 22.95-34.78 34.42-5.37 2.27-10.73 4.54-16.09 6.81-21.8.85-40.87-6.95-58.75-18.56-3.75-4.34-7.49-8.68-11.23-13.02z"
      style={{
        fill: props.colorMiddle,
      }}
    />
    <path
      className="flower_svg__st0"
      d="M795.66 486.8c51.35 14.62 103.01 28.3 153.91 44.33 19.92 6.28 41.24 16.42 37.99 43.37-2.92 24.19-7.32 49.59-37.15 56.26-30.1 6.72-37.37 32.82-49.96 55.16-25.45 45.13-63.32 50.98-102.01 16.67-22.65-60.07-53.01-117.67-58.91-183.14 12.48-21.57 29.97-34.58 56.13-32.65z"
      style={{
        fill: props.colorLeaf,
      }}
    />
  </svg>
);

SvgFlower.propTypes = {
  colorMiddle: PropTypes.string,
  colorLeaf: PropTypes.string
};

SvgFlower.defaultProps = {
  colorMiddle: "#8582B3",
  colorLeaf: "#019934",
};

export default SvgFlower;

