import React from "react";

const FrequentlyQuestion = () => {
  return (
    <div className="dark:bg-gray-800 bg-white">
      <div class="max-w-screen-xl mx-auto p-8 ">
        <h2 class="text-3xl font-bold leading-9 dark:text-gray-200 border-b-2 border-green-100 text-gray-800 dark:text-gray-200 mb-12">
          Frequently Asked Questions
        </h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <li class="question  shadow dark:shadow-green-80 shadow-green-300 rounded p-3">
            <p class="text-lg font-medium leading-6 text-gray-800 dark:text-gray-200">
              How is the Courstad Membership better than just enrolling in
              Quests separately??
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-500 dark:text-gray-400">
                Firstly, you’re saving a lot of money. You’re getting an
                unlimited access to all Quests that you can consume anytime
                within the next 12 months, for a small annual or monthly fee.
                You’re saving up to $15,000 off the original enrollment fees.
                It’s a great way to experience amazing transformations in every
                aspect of your life while saving big. And you’ll even get to
                experience all our best Quests. Money aside, you’re putting
                yourself in a state of perpetual growth by locking in your
                education for the next 12 months. Plus, you’re joining a
                community of the most passionate and committed Courstad
                students, who will uplift and support you through each Quest you
                take.
              </p>
            </p>
          </li>
          <li class="question  shadow dark:shadow-green-80 shadow-green-300 rounded p-3 shadow-sm">
            <p class="text-lg font-medium leading-6 text-gray-800 dark:text-gray-200">
              How do I choose the Quests I want to take?
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-500 dark:text-gray-400">
                Upon confirming your subscription on this page, you’ll
                immediately have access to our entire library of Quests in your
                Courstad account.
              </p>
            </p>
          </li>
          <li class="question  shadow dark:shadow-green-80 shadow-green-300 rounded p-3 shadow-sm">
            <p class="text-lg font-medium leading-6 text-gray-800 dark:text-gray-200">
              How do I cancel or get a refund if I’m not satisfied?
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-500 dark:text-gray-400">
                You get a 15-day money back guarantee on your first subscription
                fee whether annual or monthly. If in this time you decide it’s
                not for you, get your easy refund at Courstad.com/refund. Upon
                refunding, you will lose access to all Quests acquired through
                your Membership (but you will still have access to any Quests
                previously purchased, since you invested in them separately).
              </p>
            </p>
          </li>
          <li class="question  shadow dark:shadow-green-80 shadow-green-300 rounded p-3 shadow-sm">
            <p class="text-lg font-medium leading-6 text-gray-800 dark:text-gray-200">
              Can I pay in instalments?
            </p>
            <p class="mt-2">
              <p class="text-base leading-6 text-gray-500 dark:text-gray-400">
                Unfortunately, we are unable to provide this offer with
                installments. Since this offer is not a single product but an
                annual or monthly subscription that gives you access to almost
                all of our programs. However, we provide you with a 15-day
                money-back guarantee. If you are not fully satisfied, we will
                refund you, no questions asked.
              </p>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
