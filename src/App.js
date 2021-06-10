import React from "react";
import Axios from "axios";
import {useState} from "react";

function Postform()
{

  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState({
     id:"",
     body:"",
     title:""
  })
  function handle(e)
  {
     const newdata = {...data}
     newdata[e.target.id] = e.target.value
     setData(newdata)
     console.log(newdata)
  }

  function submit(e)
  {
      e.preventDefault();
      Axios.post(url,{
        id:parseInt(data.id),
        body:data.body,
        title:data.title
      })
      .then(res=>{
        console.log(res.data)
      })
  }

  return(
    <div>
       <form onSubmit={(e)=> submit(e)}>
           <input  id="id" value={data.name} type="text" placeholder="Enter Your Name"></input>
            <input  id="body" value={data.date} type="text" placeholder="Enter Your Name"></input>
             <input  id="title" value={data.idUser} type="text" placeholder="Enter Your Name"></input>
             <button>Submit</button>
       </form>
    </div>
  )
}

export default Postform;
