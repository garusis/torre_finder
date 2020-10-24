import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import _startCase from "lodash/startCase";

import Skeleton, { LoadingContext } from "../../Skeleton";
import styles from "./SearchPane.module.scss";
import { initialResults } from "./initialResults";

function Oportunity({ opportunity }) {
  const interest = _startCase(opportunity.interest);
  const currency = _startCase(opportunity.desirableCompensationCurrency);

  const fomatter = useMemo(() => {
    if (!currency) return null;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.substring(0, 3),
    });
  }, [currency]);

  if (!opportunity.active) return null;

  if (opportunity.private || !currency) {
    return <span className={styles.line}>{interest}</span>;
  }
  return (
    <span className={styles.line}>
      <span>{interest}</span>{" "}
      <span className={styles.lineDetail}>
        {currency}
        {fomatter.format(opportunity.desirableCompensationAmount)}{" "}
        {_startCase(opportunity.desirableCompensationPeriodicity)}
      </span>
    </span>
  );
}

Oportunity.propTypes = {
  opportunity: PropTypes.shape({
    interest: PropTypes.string,
    active: PropTypes.bool,
    private: PropTypes.bool,
    desirableCompensationCurrency: PropTypes.string,
    desirableCompensationAmount: PropTypes.number,
    desirableCompensationPeriodicity: PropTypes.string,
  }),
};

function ShortProfile({ profile }) {
  return (
    <Grid item className={styles.profile}>
      <Card>
        <CardHeader
          avatar={
            <Skeleton variant="circle" height={80} width={80}>
              <Avatar
                alt={`${profile.name}'s avatar`}
                src={profile.avatar}
                className={styles.avatar}
              />
            </Skeleton>
          }
          title={
            <Skeleton height={42}>
              <Typography variant="h5">{profile.name}</Typography>
            </Skeleton>
          }
          subheader={
            <Skeleton height={42}>
              <Typography variant="h6">{profile.headline}</Typography>
            </Skeleton>
          }
        />
        {profile.opportunities.length > 0 && (
          <CardContent className={styles.profileContent}>
            <Typography variant="body1" component="p">
              <Skeleton width={90}>Open to:</Skeleton>
            </Typography>
            <Typography variant="body1" component="p">
              {profile.opportunities.map(opportunity => (
                <Skeleton width={200}>
                  <Oportunity
                    key={opportunity.interest}
                    opportunity={opportunity}
                  />
                </Skeleton>
              ))}
            </Typography>
          </CardContent>
        )}

        <CardActions>
          <Skeleton
            className={styles.viewDetails}
            height={42}
            width={150}
            variant="rect"
          >
            <Button
              className={styles.viewDetails}
              variant="outlined"
              color="primary"
              size="large"
              aria-label="find similar"
            >
              Find Similar
            </Button>
          </Skeleton>
          <Skeleton height={42} width={150} variant="rect">
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              aria-label="find coworkers"
            >
              Find Co-workers
            </Button>
          </Skeleton>
        </CardActions>
      </Card>
    </Grid>
  );
}

ShortProfile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    headline: PropTypes.string,
    avatar: PropTypes.string,
    opportunities: PropTypes.arrayOf(Oportunity.propTypes.opportunity),
  }),
};

function Results({ isLoading, users, meta }) {
  if (!isLoading && !users) return null;

  const results = isLoading ? initialResults : users;

  return (
    <LoadingContext.Provider value={isLoading}>
      <Grid item>
        <Skeleton height="24px">
          <Typography variant="subtitle1">
            Showing results {meta.offset + 1} - {meta.offset + results.length}{" "}
            of {meta.total}
          </Typography>
        </Skeleton>
      </Grid>
      {results.map(profile => (
        <ShortProfile key={profile.id} profile={profile} />
      ))}
    </LoadingContext.Provider>
  );
}

Results.defaultProps = {
  meta: {
    offset: 0,
    size: 0,
    total: 0,
  },
};

Results.propTypes = {
  isLoading: PropTypes.bool,
  users: PropTypes.arrayOf(ShortProfile.propTypes.profile),
  meta: PropTypes.shape({
    offset: PropTypes.number,
    size: PropTypes.number,
    total: PropTypes.number,
  }),
};

export default Results;
