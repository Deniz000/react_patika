import './App.css';
import { Formik, Field, Form } from 'formik';
import FormikComp from './FormikComp';

function App() {
  return (
    <div className="App"><h1>Sign Up</h1>
    <FormikComp/>
      {/* <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          gender: 'female',
          hobies: [],
          country: '',
        }} 
        onSubmit={async (values) => {
          console.log(values)
        }}
      >s
        {
          ({ handleSubmit, handleChange, values }) => (
            <form>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" onChange={handleChange} />

              <br />
              <br />

              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" onChange={handleChange} />

              <br />
              <br />

              <label htmlFor="email">Email</label>
              <input type="email" name="emial" onChange={handleChange} />

              <br />
              <br />

              <input
                id='female'
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={values.gender === "female"} />
              <label htmlFor="female">Female</label>

              <input
                id='male'
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={values.gender === "male"} />
              <label htmlFor="male">Male</label>

              <br />
              <hr />

              <input type='checkbox' name='hobies' value='football' onChange={handleChange} />
              <span>football</span>
              <hr />

              <input type='checkbox' name='hobies' value='voleyball' onChange={handleChange} />
              <span>voleyball</span>
              <hr />

              <br />

              <select name='country' value={values.country} onChange={handleChange}>
                <option value='tr'>Tr</option>
                <option value='en'>En</option>
                <option value='us'>Us</option>
              </select>
              <button type="submit" onClick={handleSubmit}>Submit</button>

              <br />
              <br />
              <code>{JSON.stringify(values)}</code>
            </form>
          )
        }
      </Formik> */}
    </div>
  );
}

export default App;
