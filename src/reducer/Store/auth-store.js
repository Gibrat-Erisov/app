let initialState = {
  id: "",
  username: "",
  first_name: "",
  last_name: "",
  token: "",
  isFetching: false
};

const employeers = (state = initialState, aciton) => {
  switch (aciton.type) {
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: aciton.isFetching
      };

    default:
      return state;
  }
};

export default employeers;
