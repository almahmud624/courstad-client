import { Player } from "@lottiefiles/react-lottie-player";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import sendLottie from "../../Assets/send-lottie.json";

export const ContactUs = () => {
  return (
    <>
      <PageHeader title={"Contact Us"} />
      <section className="bg-white dark:bg-gray-900 bg-gradient-to-t dark:from-gray-800 dark:to-green-900 from-white to-green-800 relative">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md relative overflow-hidden">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
            Keep in touch
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <Player
            src={sendLottie}
            className="player absolute lg:-top-7 lg:right-40 -right-5 -top-16"
            loop
            autoplay
            // speed={1}
            style={{ height: "200px", width: "200px" }}
          />
          <form action="#" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-900 dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                placeholder="demo@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-900 dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2 z-50">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-green-00 focus:ring-green-500 dark:bg-gray-900 dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 focus:border-green-500"
                placeholder="Leave your message..."
              ></textarea>
            </div>
            <div className="relative">
              <button
                type="submit"
                className="py-2 px-5 font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit  focus:ring-0  dark:bg-transparent border border-green-700 z-50"
              >
                Send{" "}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
