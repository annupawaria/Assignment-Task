import React from 'react'
import Services from './components/Services'
import Category from './components/Category'
import './App.css'

const App = () => {
  return (
     <div>
    <div id="dp">
     <h1>Nav</h1>
     <nav id="nav">
     <button><a href='#Home'>Home</a></button>
     <button><a href='#contact'>Contact</a></button>
     <button> <a href='#about'>About</a></button>
     <button><a href='#hello'>hello</a></button>
     </nav>
     </div>
     <section id="Home">
<h1>Home</h1>
     </section>
     <section id="contact">
<h1>Home</h1>
     </section>
     <section id="about">
<h1>about</h1>
     </section>
     <section id="hello">
<h1>hello</h1>
     </section>
     <section id="hello">
<h1>hello</h1>
     </section>
     
      </div>
  )
}

export default App