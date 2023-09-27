"use client"

import { useState } from "react"



const page = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [mainTask,setmainTask ] = useState([])
    const submit = (e) => {
        e.preventDefault()
       
        setmainTask([...mainTask,{title, desc}])
        settitle("")
        setdesc("")
        
        
        
    }

    const deleteHandler = (i) => {
        let copytask = [...mainTask]
        copytask.splice(i,1)
        setmainTask(copytask)
        
        
    }
    let render = <h2>No Task Abalable </h2>
    if (mainTask.length > 0) {
        
    
        render = mainTask.map((t, i) => {
            return (<li key={i} className="felex items-center justify-between mb-8">
                <div className="flex justify-between mb-5 w-2/3" >
                    <h5 className="text-2xl font-semibold">{t.title}</h5>
                    <h6 className="text-xl font-semibold"> {t.desc}</h6>
                </div>
                <button onClick={() => {
                    deleteHandler(i) 

                }}
                    className=" bg-sky-600  text-white  px-4  py-2 rounded font-bold">delete</button>
            </li>
            );
        });
    }
    
    return (
        <>
    <h1 className='bg-blue-400 text-cyan-50 py-5 text-2xl font-bold text-center'>
                Pravin Create Todo-list </h1>
            <form  >
                <input type="text" className='text-1xl border-zinc-700 border-4 m-8 
                px-4 py-2' placeholder='Enter title' value={title}
                    onChange={(e) => {
                    
                        settitle(e.target.value)
                 }}/>
                 <input type="text" className='text-1xl border-zinc-700 border-4 m-8 
                px-4 py-2' placeholder='Enter Description Here ' value={desc}
                    onChange={(e) => {
                    setdesc(e.target.value)
                }}/>
                <button onClick={submit }
                 className='bg-black text-white px-3 py-2 text-1xl font-bold rounded my-3 '>Add Task</button>
            </form>

            <hr />
            <div className="py-8 bg-slate-400 my-7" >
                <ul>
                    {render}
                </ul>
            </div>
        </>
    )
}

export default page
