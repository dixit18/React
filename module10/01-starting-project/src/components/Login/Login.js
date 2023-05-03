import React, { useState,useEffect,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) =>{
  return { value: '', isValid: false};
}


const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

const [emailState,dispatchEmail] = useReducer(emailReducer,{value:'',isValid:false})


useEffect(()=>{

  const identifier = setTimeout(()=>{
    console.log('checkng form validity! ')
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    )
  },500)

  return ()=>{
    console.log('CleanUp')
    clearTimeout(identifier)
  }
}, [enteredEmail,enteredPassword])



  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

// rohan n k n project ni zip file mane gmail kre 
//anu any nthi hmna male atle kv
// anu react ma che n 
//ha 99% me joyu ny anu// pachd node
//e badhi ky vat ny thay ho okk
// tane pug file banavta aavde 
// na e to aakhu skip j karelu
// okk

// rohan sathe vat kr amne k
//shu?
// project mate 
////are aa natours walo krine thaki gy atle 
//pn aakho na karvano hoy backend thay gyu 
//me mara report ma khali backend j rakhyu che 
// okk 
// natours walo rakhu k bijo ki rakhu 
//natours nakhi dene most of thay gyu n karelo atle ans b aapi sakis 
//and amsthu b 12 week aatlu j thay 
// hu sarikh pase thi ss lai leva and aa j muki dev 
//ha chale
// amare ppt kidhi che hmana report pachi 
// e to weekly sathe batavani hase n