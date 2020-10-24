import got from "got";

const insterestKeys = {
  jobs: "employment",
  gigs: "freelance gigs",
  internships: "internships",
  advising: "advising others",
  mentoring: "mentoring others",
};

function mapOpportunity(opportunity) {
  return {
    interest: insterestKeys[opportunity.interest],
    active: opportunity.active,
    private: opportunity.private,
    desirableCompensationCurrency:
      opportunity["desirable-compensation-currency"],
    desirableCompensationAmount: opportunity["desirable-compensation-amount"],
    desirableCompensationPeriodicity:
      opportunity["desirable-compensation-periodicity"],
  };
}

const relevantOpportunities = [
  "jobs",
  "gigs",
  "internships",
  "advising",
  "mentoring",
];

function mapResult(srcResult) {
  const { person, opportunities } = srcResult;

  const opportunitiesByInterest = opportunities.reduce((accum, item) => {
    const interest = item.interest;
    if (!accum[interest]) {
      accum[interest] = { interest };
    }
    accum[interest][item.field] = item.data;
    return accum;
  }, {});
  return {
    id: person.id,
    name: person.name,
    headline: person.professionalHeadline,
    avatar: person.picture,
    opportunities: relevantOpportunities
      .filter(key => !!opportunitiesByInterest[key])
      .map(key => mapOpportunity(opportunitiesByInterest[key])),
  };
}

export async function findByUsername(query) {
  try {
    const response = await got(`${process.env.BIO_API}/api/bios/${query}`, {
      responseType: "json",
    });
    const { body } = response;
    return {
      items: [mapResult(body)],
      meta: { offset: 0, size: 20, total: 1 },
    };
  } catch (err) {
    if (err.response.statusCode === 404) {
      return null;
    }
    throw err;
  }
}
