
import './App.css';
import Profile from'./Profile.js';

function App() {
 const show =(message)=> { 
    alert(message);
  }

  return (
    <div className="App">
      <Profile fullname="ilyas benzid" bio="..." profession="instructor" x="https://th.bing.com/th/id/OIP.jnfQyilCSibqwBt5tsFcaAAAAA?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="fsdfd" show={show}/>
    </div>
  );
}

export default App;
