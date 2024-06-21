import axios from 'axios'
import React, { useEffect, useState } from 'react'

export type CommentSectionProps = {
    id: number
}

type DataType = {
    id: number,
    name: string,
    phone: string, 
    email: string,     
}
export default function CommentSecion({id}: CommentSectionProps) {
    const [data, setData] = useState<DataType | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                setData(response.data)
                console.log(data)
            } catch(error){
                throw new Error("Failed to fetch data");
            }
        }
        fetchData()
    },[id])
  return (
    <div>
        <h2>Comment Section</h2>
        <p>Details information on commenter</p>
        {data && (
            <>
            <span>name: {data.name}</span>
            <span>Email: {data.email}</span>
            <span>Phone: {data.phone}</span>
            </>
        )}
    </div>
  )
}
