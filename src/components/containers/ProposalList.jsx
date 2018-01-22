/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { Grid , withStyles } from 'material-ui';
import { DashBoardHeader, ProposalCard  } from '../functionals/';

// import components
import { proposalStyle  } from './styles';


export class ProposalList extends Component {
  constructor(props){
    super(props);
  }
  render() {

   const { classes , switchView}  = this.props;
   console.clear();
   console.log("-- ProposalList this.props  "  ,this.props);

    return (
      <Grid md={12} style={proposalStyle.root}>
          <DashBoardHeader data={{showHeader:"proposalList"}} />
          <ProposalCard switchView={ switchView }/>
      </Grid>
    );
  }
}
const stateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {};
};

ProposalList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(stateToProps, dispatchToProps)(withStyles(proposalStyle)(ProposalList));

