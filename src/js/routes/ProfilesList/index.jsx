import { connect } from 'react-redux';
import ProfilesList from './page';

import { plus, minus } from './store/profilesListActions';

const mapStateToProps = store => {
  return { counter: store.profilesList.counter };
};

export default connect(mapStateToProps, { plus, minus })(ProfilesList);
