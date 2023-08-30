import {useFormik} from 'formik';
export function BasicForms() {
  const formik = useFormik({
    initialValues:{email : "", password:""},
    onSubmit : (values)=>{
      console.log("onsubmit",values)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input type='email' name="email" placeholder='Email'
      value = {formik.values.email} 
      onChange={formik.handleChange}/>
      <input type='password' name="password" placeholder='Password'
      value = {formik.values.password}
      onChange={formik.handleChange} />
      <button type='submit'>Submit</button>
    </form>
  );
}
