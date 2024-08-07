/**
 * @typedef {Object} OnboardingForm
 * @property {string} title
 * @property {string} description
 * @property {string} buttonText
 * @property {string} className1
 * @property {string} icon1
 */

/**
 * @type {OnboardingForm[]}
 */
const onboardingForms = [
  {
    title: "Who likes you",
    description:
      "Professional app to bring account analytics and reporting for Instagram",
    buttonText: "Great!",
    className1: "background-pic2",
  },
  {
    title: "Your unfollowers",
    description:
      "Reachability, engagement rate, countries, audience analysis, etc.",
    buttonText: "Awesome!",
    className1: "background-pic3",
  },
  {
    title: "See your stalkers",
    description: "Figure out viewers of your account in real-time",
    buttonText: "Great!",
    className1: "background-pic4",
  },
]

export { onboardingForms }
