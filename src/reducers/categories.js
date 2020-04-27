const updateCategories = (state, action) => {
  if (state === undefined) {
    return {
      categories: [],
      loading: true,
      error: false,
    };
  }

  switch (action.type) {
    case "FETCH_CATEGORIES_REQUEST":
      return {
        categories: [],
        loading: true,
        error: false,
      };

    case "FETCH_CATEGORIES_SUCCESS":
      return {
        categories: action.payload,
        loading: false,
        error: false,
      };

    case "FETCH_CATEGORIES_FAILURE":
      return {
        categories: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state.categoriesList;
  }
};

export default updateCategories;
