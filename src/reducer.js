const initialState = {
    isLoggedIn: false,
    userName: null,
}
export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case "userName":
        return {
          ...state,
          userName: action.data.userName,
          isLoggedIn: true,

        };
      case "deleteUser" :{
          return {
              ...state,
              userName: null,
              isLoggedIn: false,
          }
      }
      default:
          console.log(state)
        return state
    }
  };