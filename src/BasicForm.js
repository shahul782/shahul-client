import { TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

// function  BasicForm(){

//     const use{
//       initialValues:{email:"shahul@gamil.com",password:"1234"},
//       onsubmit:(values)=>{
//         console.log("form values",values)
//       }
//     })

//   return(
//           <form onSubmit={handleSubmit} className="form">
//        <input
//          type="email"
//                   name="email"
//          placeholder="enter email"
//         value={values.email}
//          onChange={handleChange}
//        />
//        <input
//          type="password"
//          name="password"
//          placeholder="enter password"
//          value={values.password}
//         onChange={handleChange}
//       />
//       <button type="submit">submit</button>
//              <pre>{JSON.stringify(values)}</pre>
//      </form>

//   )
// }

// export default BasicForm;

// const formvalidationschema=yup.object({
//   email:yup.string().required("why not fill this email").min(5,"big email").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"pattern not match"),
//   password:yup.string().required("why not fill this password").min(5).max(12)

// })

//   const {handleSubmit,values,handleChange,errors,handleBlur,touched}=use{
//     initialValues:{email:"",password:""},
//     validationSchema:formvalidationschema,
//     onSubmit:(values)=>{
//       console.log("form values",values)
//       getValues(values)
//     }
//   })

//  const  getValues =(data)=>{
// console.log(data)
//   }

// return(
//         <form onSubmit={handleSubmit} className="form">

//      <TextField
//        type="email"
//       name="email"
//        placeholder="enter email"
//       value={values.email}
//        onChange={handleChange}
//        onBlur={handleBlur}
//        error={errors.email&&touched.email? errors.email:""}
//        helperText={errors.email&&touched.email? errors.email:""}
//      />
//       {errors.email&&touched.email? errors.email:""}

//      <TextField
//        type="password"
//        name="password"
//        placeholder="enter password"
//        value={values.password}
//       onChange={handleChange}
//       onBlur={handleBlur}
//       error={errors.password&&touched.password? errors.password:""}
//       helperText={errors.password&&touched.password? errors.password:""}
//     />
//     <button type="submit">submit</button>
//            <pre>{JSON.stringify(values)}</pre>
//            <pre>{JSON.stringify(errors)}</pre>
//            <pre>{JSON.stringify(touched)}</pre>

//    </form>

function BasicForm() {
  const formvalidationschema = yup.object({
    email: yup
      .string()
      .required("why not fill this email")
      .min(5, "big email")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "pattern not match"),
    password: yup
      .string()
      .required("why not fill this password")
      .min(5)
      .max(12),
  });
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "sha@123", password: "12345" },
      validationSchema: formvalidationschema,
      onSubmit: (values) => {
        console.log("form values", values);
      },
    });

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="email"
        name="email"
        placeholder="enter the email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && touched.email ? errors.email : ""}
      <input
        type="password"
        placeholder="enter the password"
        value={values.password}
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {errors.password && touched.password ? errors.password : ""}
      <button type="submit">submit</button>
      Values
      <pre> {JSON.stringify(values)}</pre>
      Touched
      <pre> {JSON.stringify(touched)}</pre>
      Touch
      <pre> {JSON.stringify(errors)}</pre>
    </form>
  );
}

export default BasicForm;
