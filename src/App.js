import axios from 'axios';
import { useEffect , useState } from 'react';
import './App.css';
import Cards from './Cards';

function App() {
const [data,setData]=useState([]);


// useEffect(()=>{

//   axios.get('https://jsonplaceholder.typicode.com/users')
// .then(res => console.log(res.data))
// .catch((err) => console.log(err))

// },[])

const [movieList,setMovieList]=useState([]);

useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {setMovieList(res.data)
  console.log(res.data);});
},[])

  return (
    <div className="App"  style={{display:'flex'  , flexWrap:'wrap' , justifyContent:'space-between'           }}         >
  
 
{
  movieList.map((el)=> ( <Cards movie={el}    />          ))
}



    </div>
  );
}

export default App;
