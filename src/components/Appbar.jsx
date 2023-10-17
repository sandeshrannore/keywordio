import React from 'react'
import styles from '../styles/Appbar.module.css'
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


const Appbar = () => {
    let navigate = useNavigate()
  return (
    <div className={styles.main}>
        <h2 className={styles.header}>App logo</h2>
        <div className={styles.rightSection}>
            <Button onClick={()=> navigate('/')}>Dashboard</Button>
            <Button onClick={()=> navigate('/ads')}>Create ADS</Button>
        </div>
    </div>
  )
}

export default Appbar