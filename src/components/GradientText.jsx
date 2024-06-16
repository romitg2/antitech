/* eslint-disable react/prop-types */

const GradientText = ({ children, fromColor, toColor }) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return <div style={gradientStyle}>{children}</div>;
};

export default GradientText;
