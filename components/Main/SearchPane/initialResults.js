export const initialResults = [...Array(10).keys()].map(key => ({
  id: key,
  name: `Placeholder Profile ${key}`,
  headline: "Nothing to show",
  avatar: "https://via.placeholder.com/80",
  opportunities: [
    {
      interest: "jobs",
      active: true,
      private: true,
    },
    {
      interest: "gigs",
      active: false,
    },
    {
      interest: "internships",
      active: true,
      private: false,
      desirableCompensationCurrency: "USD$",
      desirableCompensationAmount: 50000,
      desirableCompensationPeriodicity: "yearly",
    },
    {
      interest: "advising",
      active: true,
      private: false,
      desirableCompensationCurrency: "USD$",
      desirableCompensationAmount: 50000,
      desirableCompensationPeriodicity: "yearly",
    },
    {
      interest: "mentoring",
      active: true,
      private: true,
      desirableCompensationCurrency: "USD$",
      desirableCompensationAmount: 50000,
      desirableCompensationPeriodicity: "yearly",
    },
  ],
}));
