import './App.css'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function clickHeldelar1() {
    alert('Protom button added')
  }

  const clickHeldelar2=()=>{
    alert('2nd btn added')
  }
  const clickFour=(num)=>{
    alert(num + 5)
  }

    return (
    <>
      
      <h2>React core concepts part-2</h2>

      <Friends></Friends>
      <Users></Users>

      <Team></Team>

      <button onClick={clickHeldelar1}>Click 1</button>

      <button onClick={clickHeldelar2}> Click 2</button>

      <button onClick={()=>{alert('theer button added')}}> Click 3</button> <br></br>
    
    {/* vejaulla */}
      <button onClick={()=>{clickFour(5)}}> four</button>
      
    
    </>
  )
}

export default App
