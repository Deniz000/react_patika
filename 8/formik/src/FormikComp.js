import React from 'react'
import { useFormik } from 'formik';

function FormikComp() {
    const formik = useFormik({
        initialValues: {
            email: 'guldenizozdemir@gmail.com',
            password: '',
            passwordConfirm: '',
        },
        onSubmit: values => {
            console.log(values)
        }
    });


    return (

        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <hr />

            <label htmlFor="password">password</label>
            <input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <hr />

            <label htmlFor="passwordConfirm">passwordConfirm</label>
            <input
                id="passwordConfirm"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
            />
            <button type="submit">Submit</button>
        </form>
    )
}


export default FormikComp