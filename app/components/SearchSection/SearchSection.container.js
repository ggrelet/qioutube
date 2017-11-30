import { connect } from 'react-redux';
import searchSection from './SearchSection.style';
import { requestSearch, searchQueryChange } from './actions';

const mapStateToProps = (state) => ({
  isLoading: state.get('search').isLoading,
  searchQuery: state.get('search').query,
});

const mapDispatchToProps = {
  requestSearch,
  searchQueryChange,
};

const searchSectionContainer = connect(mapStateToProps, mapDispatchToProps)(searchSection);

export default searchSectionContainer;
