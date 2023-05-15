import {createContext, useReducer} from 'react'

const initialState = {
  userId: null,
  username: "",
  token: null,
}

const GlobalState = createContext()

const GlobalStateProvider = (props) => {

  const reducer = (state, action) => {
    switch(action.type) {
      case "LOGIN":
        console.log("reducer")
        let {username, id} = action.payload
        return {...state, userId: id, username: username, token: true}
      default:
        return state
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalState.Provider value={{state, dispatch}}>
      {props.children}
    </GlobalState.Provider>
  )
}

export default GlobalState
export {GlobalStateProvider}