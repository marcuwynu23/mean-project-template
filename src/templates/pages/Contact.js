import { useState, useEffect } from 'react';
import Layout from '../initials/Layout';
export default function Contact() {
  let [data, setData] = useState({})

  const valueHandler = (e) => {
    data[e.target.name] = e.target.value
    setData(data)
  }
  const submit = (e) => {
    e.preventDefault()
    fetch('http://localhost:9000/contact',
      {
        method: 'POST', 
        body: JSON.stringify(data)
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  }
  return <div>
    <Layout />
    <div className="container">
      <h1>Contact</h1>
      <form method='post'>
        <div className="form-group">
          <input onChange={e => valueHandler(e)} type="text" name='firstName' className="form-control my-4" placeholder="first name" />
          <input onChange={e => valueHandler(e)} type="text" name='middleName' className="form-control my-4" placeholder="middle name" />
          <input onChange={e => valueHandler(e)} type="text" name='lastName' className="form-control my-4" placeholder="last name" />
          <input onChange={e => valueHandler(e)} type="text" name='address' className="form-control my-4" placeholder="address" />
          <button onClick={e => submit(e)} className="form-control btn btn-primary" type='submit'>submit</button>
        </div>
      </form>

    </div>
  </div>
}