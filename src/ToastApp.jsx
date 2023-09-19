import React, { useState } from 'react'
import { Alert } from './components/Alert/Alert'
import { Button } from './components/Button/Button'
export const ToastApp = () => {

    
    const [notification, setNotification] = useState([])
    const printToast = (text)=> {
        setNotification([...notification, text])
        setTimeout(()=> {
            setNotification((notification)=> notification.slice(1))
        },5000)
    }


  return (
    <div className='container'>
        <h1>Toast Notification</h1>
        <div className="buttons-container">
        <Button btnText='success' variant='success' printToast={printToast}/>
        <Button btnText='error' variant='error'  printToast={printToast}/>
        <Button btnText='warning' variant='warning'  printToast={printToast}/>
        <Button btnText='info' variant='info'  printToast={printToast}/>
        </div>
        <h3>Click on the notification type buttons to see all notifications!</h3>
        <div className="toast-container">
        {notification.map((noti,index) => <Alert key={index} variant={noti}/>)}
        
        </div>
        
    </div>
  )
}
