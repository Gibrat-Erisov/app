let initialState = {
  id: "",
  username: "",
  first_name: "",
  last_name: "",
  token: "",
  authError: "",
  isAuthorized: false,
  isFetching: false
};

const employeers = (state = initialState, aciton) => {
  switch (aciton.type) {
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: aciton.isFetching
      };
    case "SET_AUTH_DATA":
      return {
        ...state,
        id: aciton.user.id,
        username: aciton.user.username,
        first_name: aciton.user.first_name,
        last_name: aciton.user.last_name
      };
    case "AUTH_ERROR":
      return {
        ...state,
        authError: aciton.text
      };
    case "IS_AUTHORIZED":
      return {
        ...state,
        isAuthorized: aciton.bool
      };

    default:
      return state;
  }
};

export default employeers;
