import React, {useState} from 'react'

function App() {
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [formData, setFormData] = useState({
    email: "webb19@willandskill.se",
    password: "javascriptoramverk"
  })

  function handleOnChange(e) {
    const inputName = e.target.name
    const inputValue = e.target.value
    const newObj = {...formData, [inputName]: inputValue}
    setFormData(newObj)
  }

  return (
    <div>
      <form>
        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleOnChange}/>
        <label>Password</label>
        <input name="password" value={formData.password} onChange={handleOnChange}/>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;
