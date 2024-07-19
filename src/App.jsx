// import { useState } from 'react'
// import Home from './components/Home';
// import Workoutlist from './components/workoutlist'
// import Progress from './components/progress'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Home />
//       {/* <Workoutlist />
//       <Progress /> */}
//     </>
//   )
// }

// export default App


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import WorkoutList from './components/WorkoutList';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/workout-list" component={WorkoutList} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WorkoutList from './components/WorkoutList';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workout-list" element={<WorkoutList />} />
                {/* Add more routes here as needed */}
            </Routes>
        </Router>
    );
}

export default App;
