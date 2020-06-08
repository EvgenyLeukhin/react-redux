// HOC REDUX COMPONENT //

// connect to the store function
import { connect } from 'react-redux';

// page with rendex jsx
import ReduxTest from './page';

// import actions to mapDispatchToProps
import { plus, minus } from './store/reduxTestActions';

import './styles.scss';

// Connect reducer initial state to mapStateToProps
const mapStateToProps = store => {
  return { counter: store.reduxTest.counter };
};

// Connect actions
// const mapDispatchToProps = dispatch => {
//   return {
//     plus: () => dispatch({ type: 'PLUS' }),
//     minus: () => dispatch({ type: 'MINUS' }),
//   };
// };

export default connect(mapStateToProps, { plus, minus })(ReduxTest);
