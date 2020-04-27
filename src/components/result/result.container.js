import { connect } from 'react-redux';
import Result from './result.view';

const mapStateToProps = (state) => {
  const { participants, sprint: { percentage }, holidays } = state;
  return {
    participants,
    percentage,
    holidays,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Result);
