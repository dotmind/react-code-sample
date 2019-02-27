import { connect } from 'react-redux';
import PostList from './../components/PostList';

function mapStateToProps(state) {
  return {
    posts: state.postState.list,
  };
} 

export default connect(mapStateToProps)(PostList);