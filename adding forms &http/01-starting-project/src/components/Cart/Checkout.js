import { useRef,useState } from 'react'
import React from 'react'
import classes from './Checkout.module.css'

const isEmpty = value => value.trim() === ''
const isFiveChars = value => value.trim().length ===5

const Checkout = (props) => {
    const [formInputsValidity,setFormInputsValidity] = useState({
        name:true,
        street:true,
        city:true,
        postalCode:true
    })
   const nameInputREf =  useRef()
   const streetInputREf =  useRef()
   const postalCodeInputREf =  useRef()
   const cityInputREf =  useRef()
   

    const confirmHandler = (event) =>{
        event.preventDefault()
       
        const eneteredName = nameInputREf.current.value;
        const eneteredStreet = streetInputREf.current.value;
        const eneteredPostalCode = postalCodeInputREf.current.value;
        const eneteredCity = cityInputREf.current.value;

        const enteredNameIsValid = !isEmpty(eneteredName)
        const eneteredStreetIsValid = !isEmpty(eneteredStreet)
        const eneteredPostalCodeIsValid = isFiveChars(eneteredPostalCode)
        const enteredcityIsValid = !isEmpty(eneteredCity)

        setFormInputsValidity({
            name:enteredNameIsValid,
            street:eneteredStreetIsValid,
            city:enteredcityIsValid,
            postalCode:eneteredPostalCodeIsValid,
        })

        const formIsValid = 
        enteredNameIsValid && eneteredPostalCodeIsValid
        &&enteredcityIsValid && eneteredStreetIsValid

        if(!formIsValid) {
return;
        }
        props.onConfirm(
            {
                name:eneteredName,
                street:eneteredStreet,
                city:eneteredCity,
                postalCode:eneteredPostalCode
            }
        )
    }
  return (
    <form onSubmit={confirmHandler}>

    <div className={`${classes.control} ${formInputsValidity.name?'':classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputREf}/>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
    </div>
    <div className={`${classes.control} ${formInputsValidity.street?'':classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputREf}/>
        {!formInputsValidity.street && <p>Please enter a valid name!</p>}
    </div>
    <div className={`${classes.control} ${formInputsValidity.postalCode?'':classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputREf}/>
        {!formInputsValidity.postalCode && <p>Please enter a valid name!</p>}
    </div>
    <div className={`${classes.control} ${formInputsValidity.city?'':classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputREf}/>
        {!formInputsValidity.city && <p>Please enter a valid name!</p>}
    </div>
    <button type='button' onClick={props.onCancel}>Cancel</button>
    <button type='submit'>Confirm</button>
    </form>
  )
}

export default Checkout