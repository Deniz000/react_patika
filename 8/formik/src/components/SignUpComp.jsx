import React from 'react'
import { useFormik} from 'formik'
import validations  from './validation';

function SignUpComp() {
    const { handleChange, handleSubmit, handleBlur, errors, touched, values} = useFormik({
        initialValues: {
            email: 'guldenizozdemir@gmail.com',
            password: '',
            passwordConfirm: '',
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: validations,
    });


    console.log(errors)

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {errors.email && touched.email &&
            (<div>geçerli email gir</div>)}
            <hr />

            <label htmlFor="password">password</label>
            <input
                id="password"
                name="password"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            {errors.password && touched.password && 
            (<div>{errors.password}</div>)}

            <hr />

            <label htmlFor="passwordConfirm">passwordConfirm</label>
            <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirm}
            />
            {errors.passwordConfirm && touched.passwordConfirm &&( <div>{errors.passwordConfirm}</div>)}

            <button type="submit">Submit</button>
        </form>
    )
}


export default SignUpComp