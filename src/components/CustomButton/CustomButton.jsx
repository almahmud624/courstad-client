export const CustomButton = ({
  buttonText,
  customStyle,
  customEffectStyle,
  action,
}) => {
  return (
    <>
      <button
        className={`group relative inline-block focus:outline-none focus:ring-0 ${customStyle}`}
        onClick={action}
      >
        <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-700 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 rounded"></span>

        <span
          className={`relative inline-block border-2 text-green-100 border-green-500 rounded px-8 py-3 text-md font-semibold tracking-widest capitalize ${customEffectStyle}`}
        >
          {buttonText}
        </span>
      </button>
    </>
  );
};
