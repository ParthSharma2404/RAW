import logo from './logo.svg';
import './App.css';
import biceps from './biceps';
import triceps from './triceps';
import forearms from './forearms';
import shoulders from './shoulders';
import chest from './chest';
import abs from './abs';
import back from './back';
import legs from './legs';
// import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';



function App() {
  return (
    <div>
      <nav>
        <div id="logo">RAW</div>
      </nav>
      <article>Dive into a world of targeted workouts designed for every muscle group. Whether you’re aiming to sculpt, tone, or boost your overall fitness, RAW provides expert-approved exercises to help you reach your goals. Explore our diverse range of exercises and discover the perfect workout for you. Let’s get moving and transform your fitness journey, one exercise at a time!</article>
      <main>
        <ul id="option">
          <li onClick={biceps }>BICEPS</li>
          <li onClick={triceps}>TRICEPS</li>
          <li onClick={forearms}>FOREARMS</li>
          <li onClick={shoulders}>SHOULDERS</li>
          <li onClick={chest}>CHEST</li>
          <li onClick={abs}>ABS</li>
          <li onClick={back}>BACK</li>
          <li onClick={legs}>LEGS</li>
        </ul>
    <div>
      <Link to='/biceps'>hello</Link>
    </div>
        {/* <div id = "content"></div> */}
      </main>
    </div>
      
      // <div>
      // <h1>hello this is my first official website</h1>
      // </div>
    );
  }
  
    
    export default App;
