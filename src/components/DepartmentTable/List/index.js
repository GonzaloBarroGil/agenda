import {connect} from 'react-redux';

import {fetchDepartmentsRequested} from '@actions/departments';
import fromState from '@selectors';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    departments: fromState.Departments.getDeparments()(state)
});

const mapDispatchToProps = dispatch => ({
    fetchDeparments: () => dispatch(fetchDeparmentsRequested())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
