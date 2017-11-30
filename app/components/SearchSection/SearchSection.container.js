import { connect } from 'react-redux';
import searchSection from './SearchSection.style';
import { requestSearch } from './actions';

const mapStateToProps = (state) => ({
  isLoading: state.get('search').isLoading,
});

const mapDispatchToProps = {
  requestSearch,
};

const searchSectionContainer = connect(mapStateToProps, mapDispatchToProps)(searchSection);

export default searchSectionContainer;
