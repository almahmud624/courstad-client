import { PageHeader } from "../../components/PageHeader/PageHeader";

const faq = [
  {
    question: "How does Courstad work?",
    answer:
      "Courstad is an online learning platform that offers a wide range of courses. Users can browse through the course catalog, enroll in their desired courses, and access the course materials at their own pace. The platform provides interactive content, quizzes, and assignments to facilitate learning and engagement.",
  },
  {
    question: "Are the courses on Courstad self-paced?",
    answer:
      "Yes, the courses on Courstad are self-paced, allowing learners to study at their own convenience. There are no strict deadlines, and learners have the flexibility to progress through the course materials according to their individual schedules.",
  },
  {
    question: "What types of courses are available on Courstad?",
    answer:
      "Courstad offers a diverse selection of courses across various fields, including technology, business, arts, languages, and more. Whether you're interested in programming, marketing, photography, or foreign languages, you can find relevant courses to suit your interests and learning goals.",
  },
  {
    question:
      "Can I earn certifications or qualifications from Courstad courses?",
    answer:
      "Yes, Courstad offers certifications for certain courses. Upon successfully completing a course and fulfilling the requirements, learners can obtain a certificate of completion. These certificates can be a valuable addition to resumes or professional portfolios.",
  },
  {
    question: "Are the instructors qualified and experienced?",
    answer:
      "Absolutely! Courstad collaborates with experienced instructors who possess expertise in their respective fields. We carefully select instructors who have practical industry knowledge, teaching experience, and a passion for sharing their expertise with learners.",
  },
  {
    question: "Is Courstad suitable for beginners?",
    answer:
      "Yes, Courstad caters to learners of all levels, including beginners. Many courses offer introductory content, providing a solid foundation for those who are new to a subject. Beginners can gradually progress through the course materials, building their knowledge and skills over time.",
  },
  {
    question: "Can I interact with other learners on Courstad?",
    answer:
      "Yes, Courstad encourages interaction among learners. Our platform includes discussion forums, where you can engage in conversations, ask questions, and share insights with fellow learners. It's a great opportunity to connect with a community of like-minded individuals.",
  },
  {
    question: "How do I get started with Courstad?",
    answer:
      "Getting started with Courstad is simple. Visit our website and create an account. Once registered, you can explore the course catalog, choose your desired courses, and enroll. From there, you'll have immediate access to the course materials, allowing you to begin your learning journey right away.",
  },
];

const FrequentlyQuestion = () => {
  return (
    <>
      <PageHeader title={"Get Your Answers"} />
      <div className="bg-gray-800 pb-5 sm:pb-5 pt-10 sm:pt-10 bg-gradient-to-t dark:from-gray-800 dark:to-green-900 from-white to-green-800 relative">
        <div className="mx-auto max-w-7xl flex lg:flex-row flex-col px-6 lg:px-8 justify-evenly gap-10">
          <div className="space-y-4 flex-1">
            {faq?.slice(0, 4).map(({ question, answer }, i) => (
              <details
                key={i}
                className=" p-6 py-3 border-l-4 border-green-500 bg-teal-800 group transition-all duration-300 rounded"
                close="true"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h5 className="text-lg font-medium text-gray-200">
                    {question}
                  </h5>

                  <span className="flex-shrink-0 ml-1.5 p-1 text-green-500 bg-[#174530] rounded-full sm:p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-300">{answer}</p>
              </details>
            ))}
          </div>
          <div className="space-y-4 flex-1">
            {faq?.slice(4, 8).map(({ question, answer }, i) => (
              <details
                key={i}
                className=" p-6 py-3 border-l-4 border-green-500 bg-teal-800 group transition-all duration-300 rounded"
                close="true"
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h5 className="text-lg font-medium text-gray-200">
                    {question}
                  </h5>

                  <span className="flex-shrink-0 ml-1.5 p-1 text-green-500 bg-[#174530] rounded-full sm:p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-gray-300">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentlyQuestion;
