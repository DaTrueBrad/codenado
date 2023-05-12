import axios from 'axios'
import React, {useState, useRef, useContext} from 'react'
import GlobalState from '../state/GlobalState'

const Auth = () => {
  const [register, setRegister] = useState(false)
  const toggle = () => setRegister(!register)
  const userRef = useRef()
  const passRef = useRef()
  const {state, dispatch} = useContext(GlobalState)

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      username: userRef.current.value,
      password: passRef.current.value
    }
    axios
      .post(register ? '/api/register' : '/api/login', body)
      .then((res) => {
        dispatch({type: "LOGIN", payload: res.data})
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }


  return (
    <section>
      <h1>Auth</h1>
      <form onSubmit={handleSubmit}>
        <h2>{register ? "Registering" : "Logging In"}</h2>
        <input ref={userRef} type="text" placeholder='Username'/>
        <input ref={passRef} type="password" placeholder='Password'/>
        <button>{register ? "Register" : "Login"}</button>
      </form>
      <button onClick={toggle}>Click here to {!register ? "Register" : "Login"}</button>
    </section>
  )
}

export default Auth