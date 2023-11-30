function ShoeCard({ src, width, className, handleClick, selectedShoe }) {
  return (
    <img
      src={src}
      alt="shoe collection"
      width={width}
      className={`rounded-xl ${className} ${
        selectedShoe === src ? "border-2 border-red-600" : ""
      }`}
      onMouseEnter={handleClick}
    />
  );
}

export default ShoeCard;
