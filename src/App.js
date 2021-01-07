import axios from 'axios';
import './App.css';
import {useState}from 'react'
import { faAngleDown , faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [baseUrl,setbaseUrl]=useState('');
  const [method, setmethod] = useState('post');
  const [dropdown, setdropdown] = useState('lie');
  const [methodStyle,setMStyle]= useState('method');
  const [reqjson,setreqjson]=useState();
  const [resData,setresData]=useState();
  const [status, setstatus] = useState('')

  return (
    <div className="App">
      <h1>Request</h1>
      <div className='input'>
        <div className='lol'>
          <div class={dropdown}>
          <div className={methodStyle} onClick={()=>{if(dropdown==='lie'){setdropdown('dropdown');setMStyle('methodClicked')}else{setdropdown('lie');setMStyle('method')}}}>{method}<FontAwesomeIcon className='angledown'icon={faAngleDown} size='1x'/></div>
          <div className='method2' onClick={()=>setmethod('get')} >get</div>
          <div className='method2' onClick={()=>setmethod('delete')}>delete</div>
          <div className='method2' onClick={()=>setmethod('post')}>post</div>
          </div>
        </div>
        
        <input placeholder='url' onChange={e=>{setbaseUrl(e.target.value);console.log(baseUrl)}}></input>
      </div>
      <div class='ok'>
        <textarea class='textarea1' placeholder='type your req.body(JSON)' onChange={e=>{setreqjson(JSON.parse(e.target.value))}}></textarea>
        
        <button onClick={()=>{
          if(method==='get'){
            axios.get(baseUrl,reqjson).then((Response)=>{
              setresData(Response.data)
              setstatus(Response.status)
            })
          }
          else if(method==='post'){
            axios.post(baseUrl,reqjson).then((Response)=>{
              setresData(Response.data)
              setstatus(Response.status)
            })
          }
          else if(method==='delete'){
            axios.delete(baseUrl,reqjson).then((Response)=>{
              setresData(Response.data)
              setstatus(Response.status)
            })
          }
        }}>Send</button>
      </div>
      <div className='response'>
        <h1>Response</h1>
        <h2 className='status'>status: {status}</h2>
        <textarea value={resData}></textarea>
        <button className='clear' onClick={()=>{
          setresData('')
          setstatus('')
        }}>Clear</button>
      </div>
      
      
    </div>
  );
}

export default App;
