import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useEffect } from "react";
import axios from 'axios'

function App() {

  const [user,setUser] = useState('')

  const Api = async ()=>{
    try {

      //***the axious way to fetch data***//


      const { data } = await axios ('https://randomuser.me/api/')
      setUser(data.results[0])

//////////////////////////////////////////////////////////////////////////////////////////////

      //***the first fetch way***//

    /* fetch('https://randomuser.me/api/')
        .then((res)=>res.json())
        .then((data)=> setUser(data.results[0])) */

//////////////////////////////////////////////////////////////////////////////////////////////

      //***thats the secound fetch way ***//

 /*   const res = await fetch ('https://randomuser.me/api/')
      const data = await res.json()
      setUser(data) */

    } catch (error) {
      alert('something is wrong , please try again')
    }
  }

  useEffect(()=>{
    Api()
  },[])


 console.log(user)







  return (
    <div className="app">
      <Header user = {user}/>
      <div className="MAIN">
      <Main {...user}/>
      <button onClick={()=>Api()}>Next</button>
      </div>

    </div>
  );
}

export default App;
