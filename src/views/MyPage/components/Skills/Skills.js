import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, colors } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

const Skills = props => {
  const { data, className, ...rest } = props;

  return (
    <div className={className} data-aos="fade-up" {...rest} id="skillset">
      <SectionHeader
        title="My skillset"
        subtitle="Below I explain my approach to web app design, functionality, and maintenance."
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        fadeUp
      />
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-up"
          >
            <DescriptionListIcon
              icon={
                <IconAlternate
                  fontIconClass={item.icon}
                  
                />
              }
              title={item.title}
              subtitle={item.description}
              align="left"
            />
          </Grid>
        ))}
        <Grid item container xs={12} justify="center">
          <Button variant="contained" size="large" color="primary" href="mailto:rwfarish@gmail.com">
            contact me
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

Skills.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Skills;
