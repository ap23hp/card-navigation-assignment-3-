import React from 'react';
import {Route,Routes,BrowserRouter,Link,useNavigate} from 'react-router-dom'

function StudentLogin(){
  const nav=useNavigate()
  
  return(
<>
<h1>Student Login </h1>
<label > Name &nbsp;
<input type="text" id="name" onInput={(e)=>e.target.value}/>
</label>
<br></br>
<br></br>
<label > Email &nbsp;
<input type="email" id="name" onInput={(e)=>e.target.value}/>
</label>
<br></br>
<br></br>
<br></br>
<button> Submit</button>
&nbsp;
<button onClick={()=>nav(-1)}> Back</button>
</>





  )
}

export default StudentLogin