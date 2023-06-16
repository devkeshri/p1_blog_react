import React, {useEffect, useState} from 'react'
import '../styles/Countdown.css'

function Countdown() {
        
        const [days, setDays] = useState(0)
        const [hours, setHours] = useState(0)
        const [mins, setMinutes] = useState(0)
        const [secs, setSeconds] = useState(0)

        const deadline = "June, 17, 2023"

        const getTime =()=>{
        
        const time= Date.parse(deadline)-Date.now() 
        
        setDays (Math.floor(time/(1000*60*60*24)))
        setHours(Math.floor(time/(1000*60*60)%24))
        setMinutes(Math.floor((time/1000/60)%60))
        setSeconds (Math.floor((time/1000)%60))
        }

        useEffect(()=>{
            const interval = setInterval(()=>getTime(),1000)
            return ()=> clearInterval(interval)
         },[])
         return (
           <>
            
            <div class="countdown d-flex justify-content-center">
                <div className="cd-timer">
                    <h3>{days<10 ? "0"+days: days}</h3>
                    <h4>Days</h4>
                  </div>
                  <div className="cd-timer">
                    <h3>{hours<10 ? "0"+hours: hours}</h3>
                    <h4>hours</h4>
                  </div>
                  <div className="cd-timer">
                    <h3>{mins<10 ? "0"+mins: mins}</h3>
                    <h4>mins</h4>
                  </div>
                  <div className="cd-timer"> 
                    <h3>{secs<10 ? "0"+secs: secs}</h3>
                    <h4>secs</h4>
                  </div>
                    
                </div>
           
           </> 
        
  )
}

export default Countdown