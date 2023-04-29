import { CustomLinkButton } from "../CustomLinkButton/CustomLinkButton";

export const NotFound = ({ message, linkText, link, hideBtn }) => {
  return (
    <>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing&#128549;
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {message}{" "}
            </p>
            <div className={hideBtn}>
              <CustomLinkButton buttonText={linkText} link={link} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
