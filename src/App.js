import "./App.css";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      window.alert("Login successfull!!");
    },
    validate: values => {
      let errors = {};
      if (!values.password) errors.password = 'Field required';
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      return errors;
    }
  });
  const styleContainer = {display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', borderRadius: '5px'};
  const formStyle = {color: '#aaaaaa', backgroundColor: '#555555', padding: '2rem', borderRadius: '5px', display: 'grid', gridTemplateRows: 'repeat(3, 1fr)'}
  const inputStyle = {color: '#222222', borderRadius: '5px', width: '97%', height: '1.5rem', marginBottom: '0.1rem'}
  const divStyle = {marginBottom: '1rem'};
  const buttonStyle={borderRadius: '5px', backgroundColor: '#2222cc', fontWeight: 'bold', color: '#cccccc', width: '100%'}  
    return (
        <div style={styleContainer}>
            <form onSubmit={formik.handleSubmit} style={formStyle}>
                <div style={divStyle}>
                  <label>Username</label>
                <input style={inputStyle} type="text" name="email" id="emailField" onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email ? <div style={{color: 'red'}} id="emailError">{formik.errors.email}</div> : null}
                </div>
                <div>
                <div>Password</div>
                <input style={inputStyle} type="text" name="password" id="pswField" onChange={formik.handleChange} value={formik.values.password}/>
                {formik.errors.password ? <div style={{color: 'red'}} id="pswError">{formik.errors.password}</div> : null}
                </div>
                <div style={{display: 'flex', alignItems: 'middle', justifyContent: 'center'}}>
                  <button type="submit" id="submitBtn" style={buttonStyle}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;
