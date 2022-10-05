import React, {useEffect, useState} from 'react';
import axios from "axios";

function Posts() {
    const [selected,setSelected] = useState("")
    const [data,setData] = useState([])
    const [options,setOptions] = useState([])
    useEffect(()=>{
        selected==""? axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(r => {
            setData(r.data)
            setOptions(r.data)
        }):axios.get(`https://jsonplaceholder.typicode.com/posts/${selected}`).then(r => {
            setData([r.data])
        })
    },[selected])
    function selecting({target}){
        setSelected(target.value)
    }
    return (
        <div>
            <select onChange={selecting}>
                <option value="">select post</option>
                {
                    options.map(({id})=>{
                    return <option value={id} key={id}>{id}</option>
                })
            }</select>
            {
                data.map(({title,body,id})=>{
                    return <div key={id}>
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </div>
                })
            }
        </div>
    );
}

export default Posts;