const AnimatedImage = ({ src, alt, title, currentActiveImage, handleActiveImage, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={`featured-image ${currentActiveImage === alt ? "active-featured-image" : ""} ${
        currentActiveImage !== alt && currentActiveImage !== null ? "normal-featured-image" : ""
      }`}
      onMouseOver={(e) => handleActiveImage(e.target.alt)}
      onMouseLeave={() => handleActiveImage(null)}
      {...props}
    />
  );
};

export default AnimatedImage;
