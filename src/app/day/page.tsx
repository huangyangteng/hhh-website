"use client"
import dayjs from "dayjs"
import { useEffect } from "react"
export default function Day(){
    useEffect(()=>{
        const days=[]
        const startOfYear=dayjs().startOf('year')
        const endOfYear=dayjs().endOf('year')
        console.log("Day -> endOfYear", endOfYear)
    },[])


    return <div>day1</div>
}