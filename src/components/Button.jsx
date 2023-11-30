function Button({ buttonText, iconUrl }) {
  return (
    <button className="ml-2 rounded-full flex gap-2 bg-coral-red text-white font-montserrat font-medium py-3 px-6">
      {buttonText}
      <img src={iconUrl} alt="" />
    </button>
  );
}

export default Button;
