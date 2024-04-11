import { useState, useEffect } from "react";

export default function Home() {

  const [currentTime, setCurrentTime] = useState(new Date);

  useEffect(()=>{
    const t = setInterval(()=>{
        setCurrentTime(new Date)
    }, 1000)
    console.log("[]=", currentTime)

    return (()=>{clearInterval(t)})
}, []); 

  return (
    <div className="h-full flex justify-center items-center">
      <h1 className="m-5 font-bold text-3xl">
        HOME 집에 가자
      </h1>
      <h1 className="m-5 font-bold text-3xl">
        {currentTime && `현재시각 : ${currentTime.toLocaleTimeString()}`}
      </h1>
    </div>
  )
}
