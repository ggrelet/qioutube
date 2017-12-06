export const requestSearch = () => ({
  type: 'REQUEST_SEARCH',
});

export const requestSearchSuccess = (videos) => ({
  type: 'REQUEST_SEARCH_SUCCESS',
  videos,
});

export const searchQueryChange = (query) => ({
  type: 'SEARCH_QUERY_CHANGE',
  query,
});
