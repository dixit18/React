import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <ul>
        <li>
           <NavLink to="/" style={({isActive})=>{return{backgroundColor:isActive?'red':''}}}>Home</NavLink>
        </li>
        <li>
         <NavLink to="/about" style={({isActive})=>{return{backgroundColor:isActive?'red':''}}}>About</NavLink>
        </li>
        <li>
            <NavLink to="/contact" style={({isActive})=>{return{backgroundColor:isActive?'red':''}}}>Contact</NavLink>
        </li>
        <li>
            <NavLink to="/post/mobile" style={({isActive})=>{return{backgroundColor:isActive?'red':''}}}>Post</NavLink>
        </li>
        <li>
            <NavLink to="/post/mobile/1" style={({isActive})=>{return{backgroundColor:isActive?'red':''}}}>Post with id</NavLink>
        </li>
        <li>
            <NavLink to="/login" style={({isActive})=>{return{backgroundColor:isActive?'red':''}}}>login</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" style={({isActive})=>{return{backgroundColor:isActive?'red':''}}}>DashBoard</NavLink>
        </li>
    </ul>
  )
}

export default Navbar
