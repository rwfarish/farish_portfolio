import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button, Typography } from '@material-ui/core';

import { Image, LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
}));

const Work = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest} id="projects">
      <SectionHeader
        title={
          <span>
            My Projects{' '}
          </span>
        }
        subtitle=""
        fadeUp
      />
      <Grid container justify="center">
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            spacing={isMd ? 4 : 2}
            data-aos={'fade-up'}
            alignItems="center"
            justify="space-between"
            direction={index % 2 === 1 ? 'row-reverse' : 'row'}
            className={classes.listGrid}
          >
            <Grid item xs={12} sm={6}>
              <SectionHeader
                label={item.label}
                titleVariant="h5"
                title={item.title}
                subtitle={item.description}
                ctaGroup={[<LearnMoreLink title="View project" variant="h6" href={item.address}/>]}
                align="left"
                disableGutter
              />
            </Grid>
            <Grid item container justify="center" xs={12} sm={6}>
              <Image
                src={item.illustration}
                alt={item.label}
              />
            </Grid>
          </Grid>
        ))}
        <Grid item container justify="center" xs={12}>
          <Button
            variant="contained"
            color="primary"
            size={isMd ? 'large' : 'medium'}
          >
            See all features
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Work.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Work;
