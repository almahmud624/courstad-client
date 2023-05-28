import { ProgressLine } from "../ProgressLine/ProgressLine";

export const FutureEducation = () => {
  return (
    <>
      <div className="bg-gray-800 lg:pb-24 pb-5 pt-10 sm:pt-16 bg-gradient-to-t dark:from-gray-800 dark:to-green-900 from-white to-green-800 relative">
        <div className="mx-auto max-w-7xl flex lg:flex-row flex-col-reverse gap-x-8 lg:gap-y-20 gap-y-10 px-6 lg:px-8">
          <div className="flex-1 relative">
            <h2 className="mb-3 text-3xl md:text-5xl font-semibold leading-none sm:text-4xl text-gray-100">
              We are Future of Education
            </h2>
            <p className="my-5 dark:text-gray-400 text-gray-800">
              <span className="font-base text-sm md:text-base">
                You are definitely intrigued to discover who we are. We are
                Scrate Education – future of education. We have the best
                knowledge base for you study. Whether you are a prospective
                student.
              </span>
            </p>
            <ProgressLine
              label="Science"
              backgroundColor="lightgrey"
              visualParts={[
                {
                  percentage: "73%",
                  color: "slateblue",
                },
              ]}
            />
            <ProgressLine
              label="Technologies"
              backgroundColor="lightgrey"
              visualParts={[
                {
                  percentage: "83%",
                },
              ]}
            />
            <ProgressLine
              label="Language"
              backgroundColor="lightgrey"
              visualParts={[
                {
                  percentage: "93%",
                },
              ]}
            />
          </div>
          <div className="flex-1">
            <div>
              <img
                src="https://img.freepik.com/free-photo/front-view-smiley-girl-wearing-headphones_23-2149455149.jpg?w=740&t=st=1685065211~exp=1685065811~hmac=7c9360000ecc5e2ef4323b53043e8cb69555ecb808603ee6168666c8529db2e3"
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
