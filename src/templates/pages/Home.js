
import Layout from '../initials/Layout';
import { useState, useEffect } from "react"
export default function Home() {
  let [counter, setCounter] = useState(0)

  useEffect(() => {
    
    fetch('http://localhost:9000/',{})
      .then(res => res.text())
      .then(res => {
        console.log(JSON.parse(res))
      })
      .catch(err => {
      
        console.error(err)
      })

    const interval = setInterval(() => {
      console.log(`counter ${counter}`)
      setCounter(prev => prev + 1)
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, [])
  return <div>
    <Layout />
    <div className="container">
      <h1 className='h1 fw-bolder'>Home</h1>
      Counter: {counter}
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat suscipit, labore consequuntur in explicabo quis eum odio obcaecati libero, reiciendis animi alias placeat beatae aliquam corporis. Cupiditate qui facere blanditiis?</p>
    </div>
  </div>
}