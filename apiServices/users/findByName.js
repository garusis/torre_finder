import got from "got";

const openToOptions = [
  {
    key: "full-time-employment",
    compensationKey: "employee",
    interestKey: "employment",
  },
  {
    key: "part-time-employment",
    compensationKey: "employee",
    interestKey: "employment",
  },
  {
    key: "freelance-gigs",
    compensationKey: "freelancer",
    interestKey: "freelance gigs",
  },
  { key: "internships", compensationKey: "intern", interestKey: "internships" },
  { key: "advising", interestKey: "advising others" },
  { key: "mentoring", interestKey: "mentoring others" },
];

const interestPriority = [
  "employee",
  "freelancer",
  "internships",
  "advising others",
  "mentoring others",
];

function mapResult(srcResult) {
  const interestsMap = openToOptions.reduce(
    (accum, { key, compensationKey, interestKey }) => {
      if (!srcResult.openTo.includes(key)) return accum;
      const compensation = srcResult.compensations[compensationKey] || {};
      accum[interestKey] = {
        interest: interestKey,
        active: true,
        private: false,
        desirableCompensationCurrency: compensation.currency,
        desirableCompensationAmount: compensation.amount,
        desirableCompensationPeriodicity: compensation.periodicity,
      };
      return accum;
    },
    {}
  );
  return {
    id: srcResult.username,
    name: srcResult.name,
    headline: srcResult.professionalHeadline,
    avatar: srcResult.picture,
    opportunities: interestPriority
      .filter(key => !!interestsMap[key])
      .map(key => interestsMap[key]),
  };
}

export async function findByName(query) {
  const response = await got.post(`${process.env.SEARCH_API}/people/_search`, {
    responseType: "json",
    searchParams: { page: 0, size: 20, offset: 0 },
    json: { name: { term: query } },
  });
  const { body } = response;
  const { results, offset, size, total } = body;
  return { items: results.map(mapResult), meta: { offset, size, total } };
}
