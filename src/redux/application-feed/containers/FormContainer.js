import { connect } from 'react-redux';
import Form from './../components/Form';
import { sendPost } from './../actions/PostActions';

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (value) => dispatch(sendPost(value)),
  };
}

export default connect(null, mapDispatchToProps)(Form);