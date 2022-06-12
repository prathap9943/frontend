import { getUserName } from "./localStorage/localStorage";

const initialState = {
    isLoggedIn: false,
    userName: null,
}
const reducer = (state = initialState, action) => {
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
      case "getLoggedInUser" :{
        const user = getUserName()
        if(user){
          return {
            ...state,
            userName: user,
            isLoggedIn: true,
  
          };
        }
        return state
      }
      default:
        return state
    }
  };

  export default reducer