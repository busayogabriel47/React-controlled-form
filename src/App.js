import './App.css';
import { useState } from 'react';



const App = () => {

/*const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [description, setDescription] = useState("")
const [select, setSelect] = useState()
const [gender, setGender] = useState(false)*/

const [form, setForm] = useState({
  name: "",
  email: "",
  description: "",
  country: "canada",
  agree: false,
  gender: "other"
})

const onChange = (e) => {
  const {value, name, type, checked } = e.target
  setForm((state)=> ({
    ...state,
    [name]: type === 'checkbox' ? checked : value
  }))
}

const showData = (e) =>{
  e.preventDefault()
  console.log("form: ", form )
}

  return (

<form>
      <div className='formImg'>
          
      </div>
      <div className='inputWrapper'>
        <h1>Register to order</h1>
        <div class="mb-3">

          <input type="name" name='name' value={form.name} onChange={onChange} class="form-control mb-4" id="name" placeholder="Your name"/>
        </div>
        <div class="mb-3">
          <input type="email" name='email' value={form.email} onChange={onChange} class="form-control mb-4" id="email" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <input type="description" name='description' value={form.description} onChange={onChange} class="form-control mb-4" id="description" placeholder="description"/>
        </div>
        <div class="mb-3">
          <select class="form-select" value={form.country} onChange={onChange} name='country' aria-label="Default select example">
            <option selected>Select Country</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="uk">United Kingdom</option>
            <option value="sa">South Africa</option>
            <option value="Nig">Nigeria</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-check-label me-3" for="flexRadioDefault1">
            Gender: 
          </label>
          <input class="form-check-input" type="radio" onChange={onChange} name="gender" value="male" id="male" checked={form.gender === 'male'}/>
          <label class="form-check-label me-3 ms-3" for="male">
            Male 
          </label>
          <input class="form-check-input" type="radio" onChange={onChange} name="gender" value="female" id="female" checked={form.gender === 'female'}/>
          <label class="form-check-label me-3 ms-3" for="female">
            Female
          </label>
          <input class="form-check-input" type="radio" onChange={onChange} name="gender" value="other" id="other" checked={form.gender === 'other'}/>
          <label class="form-check-label me-3 ms-3" for="other">
            Other
          </label>

          <div class="mb-3">
          <label class="form-check-label" for="agree">
            Agree:
          </label>
          <input onChange={onChange} value={form.agree} name="agree" class="form-check-input mx-5" type="checkbox" id="agree"/>
        </div>
        </div>

        <button onClick={showData} className='btn btn-success btn-lg submit'>Submit</button>
        </div>
</form>
  );
}

export default App;





/*function App() {

const [count, setCount] = useState(0)

  return (
    <div className="container">
        <h1>{count}</h1>
        <button onClick={() => setCount( count + 1)}>Click</button>
    </div>
  );
}

export default App;*/
