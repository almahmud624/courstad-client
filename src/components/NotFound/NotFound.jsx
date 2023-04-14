import { CustomLinkButton } from "../CustomLinkButton/CustomLinkButton";

export const NotFound = ({ message, linkText, link }) => {
  return (
    <>
      <section class="">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing&#128549;
            </p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {message}{" "}
            </p>
            <CustomLinkButton buttonText={linkText} link={link} />
          </div>
        </div>
      </section>
    </>
  );
};
