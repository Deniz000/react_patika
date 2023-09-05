import { useState } from 'react';

function InputExample() {
    const [form, setForm] = useState({name: "", surName: ""});

    const onChangeInput = (e) =>{
        setName({...form, [e.target.name]: e.target.value});
    }

    return <div>
        Please enter a name
        {/* <input value={name} onChange={(event) => setName(event.target.value)}/> */}
        <input value={form.name} onChange={onChangeInput}/>
        {form.name}
    </div>;
}

export default InputExample;