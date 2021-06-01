import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    color: 'var(--clr-accent)',
    backgroundColor: 'white',
    width: '40%',
    marginTop: '10px',
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    
    <Slider className={clsx(classes.root, className)} {...other}>
      {children || 'class names'}
    </Slider>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);