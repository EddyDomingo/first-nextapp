import Link from "next/link";
import styles from '../styles/MyForm.module.css';
import { useState } from "react";



const MyForm = () => {
   const [value, setValue] = useState("");
  
    return (
       <div className={styles.form}>
        <form>
           <h2 className={styles.signUp}>Sign Up</h2> 
           <input type='text' placeholder="Your name" name='username' value={value} on onChange={(e)=>{setValue(e.value)}}/>
           <input type='text' placeholder="Email Address" name='email' value={value} on onChange={(e)=>{setValue(e.value)}}/>
           <button className={styles.btnAction}>Submit</button>
        </form>
        </div>
     );
}
 
export default MyForm;