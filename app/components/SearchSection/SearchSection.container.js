import { connect } from 'react-redux';
import SearchSection from './SearchSection.style';
import { requestSearch, searchQueryChange } from './actions';

const mapStateToProps = (state) => ({
  isLoading: state.search.isLoading,
  searchQuery: state.search.query,
  videos: state.search.videos,
});

const mapDispatchToProps = {
  requestSearch,
  searchQueryChange,
};

const SearchSectionContainer = connect(mapStateToProps, mapDispatchToProps)(SearchSection);

export default SearchSectionContainer;
