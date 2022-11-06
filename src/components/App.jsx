import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home-container">
      <div className="welcome-img">
        <div className="project-briefContainer">
          <h1> Welcome! </h1>
          <p className="project-brief">
            Custom counter hook with increment, decrement, reset, setValue and
            Implement a page for the custom hook, useReducer, 404, and a page to
            test error boundary and good SEO.
          </p>
        </div>
        <img
          className="rasheed-img"
          src="https://yt3.ggpht.com/yti/AJo0G0nmZO_9kR0gj2GzyZte4-3ZAS7RzCRuwu5ttuJ7MQ=s88-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        />
      </div>
      <div className="dev-details">
        <p>Full Name: Olatunde Rasheed</p>
        <p>Email: olatunde336@gmail.com</p>
        <p>Bootcamp: AltSchool Africa</p>
        <p>Phone: +2348133642798</p>
      </div>
    </section>
  )
}

function Error() {
  return (
    <section>
      <p className="description-page">opps!!! page not found</p>
    </section>
  )
}

function Counter() {
  // const [count, setCount] = useState(0);
  const [userValue, setUserValue] = useState(0)

  function increment() {
    setUserValue(Number(userValue) + 10)
  }
  function decrement() {
    setUserValue(Number(userValue) - 10)
  }
  function reset() {
    setUserValue(0)
  }

  function handleChange(event) {
    setUserValue(Number(event.target.value))
  }

  return (
    <div className="container">
      <h1 className="counting-heading">Counting App</h1>
      <h1>{userValue}</h1>
      <button className="increase" onClick={increment}>
        +
      </button>
      <button className="decrease" onClick={decrement}>
        -
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
      <div className="setvalue-cont">
        <input
          onChange={handleChange}
          type="number"
          placeholder="Type Your Counting Number"
        />
        <button className="values">Set Value </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <section className="heading-logo">
        <img
          className="altschool-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2AkPZnP2U9CMVnhgVOzYxljEitpzIudEV5JjwzNT7w&s"
          alt=""
        />
        <h1 className="heading"> AltSchool Second Semester Exam</h1>
      </section>
      <section>
        <div className="link-container">
          <Link className="home-button" to="/">
            Home Page
          </Link>
          <Link className="error-button" to="/error">
            Error Page
          </Link>
          <Link className="counter-project" to="/counterproject">
            Counter Project
          </Link>
        </div>
      </section>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/home" element={<Home />} />
          <Route path="/counterproject" element={<Counter />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
