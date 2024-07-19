// import React, { useState } from 'react'

// function Home() {
//     const [user, setUser] = useState({
//         name: "", workoutmin: "", type: ""
//     })
//     let name,value;
//     const handleInput=(e)=>{
//         console.log(e);
//         // name=e.target.names;
//         // value=e.target.value;

//         // setUser({...user,[name]:value})
//     }
//     return (
//         <>
//             <div className='main container'>
//                 <div className='container d-flex justify-content-between uname m-2'>
//                     <div className="input-group mb-2 border border-black rounded" required>
//                         <input type="text" className="form-control" placeholder="User Name" aria-label="Recipient's username" 
//                         name='names'
//                         aria-describedby="button-addon2"
//                             autoComplete="off"
//                             value={user.name}
//                             onChange={handleInput}

//                         />
//                     </div>

//                 </div>
//                 <div className='container d-flex justify-content-between m-2'>
//                     <div className='mx-2 '>
//                         <select className="form-select border border-black rounded" 
//                         name='type'
//                         aria-label="Default select example"
//                             autoComplete="off"
//                             value={user.type}
//                             onChange={handleInput}
//                             required>
//                             <option>Open this select menu</option>
//                             <option value="1">One</option>
//                             <option value="2">Two</option>
//                             <option value="3">Three</option>
//                         </select>
//                     </div>

//                     <div className="input-group px-1 border border-black rounded">
//                         <input type="text" className="form-control" placeholder="Workout Minutes" 
//                         name='workoutmin'
//                         aria-label="Recipient's username" aria-describedby="button-addon2"
//                             autoComplete="off"
//                             value={user.workoutmin}
//                             onChange={handleInput}
//                             required />
//                     </div>
//                 </div>
//                 <button type="button" className="btn btn-primary mt-4">Primary</button>
//             </div>
//         </>

//     )
// }

// export default Home


// import React, { useState } from 'react';
// import { addToLocalStorageArray } from './localStorageUtils';

// function Home() {
//     const [user, setUser] = useState({
//         name: "", workoutmin: "", type: ""
//     });

//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//     };

//     const handleSubmit = () => {
//         addToLocalStorageArray('users', user);
//         console.log(user);
//         alert("User data added to localStorage array!");
//         setUser({ name: "", workoutmin: "", type: "" }); // Clear form after submission
//     };

//     return (
//         <>
//             <div className='main'>
//                 <div className='container d-flex justify-content-between uname m-2'>
//                     <div className="input-group mb-2 border border-black rounded" required>
//                         <input type="text" className="form-control" placeholder="User Name" aria-label="Recipient's username" 
//                         name='name'
//                         aria-describedby="button-addon2"
//                             autoComplete="off"
//                             value={user.name}
//                             onChange={handleInput}
//                         />
//                     </div>
//                 </div>
//                 <div className='container d-flex justify-content-between m-2'>
//                     <div className='mx-2'>
//                         <select className="form-select border border-black rounded" 
//                         name='type'
//                         aria-label="Default select example"
//                             autoComplete="off"
//                             value={user.type}
//                             onChange={handleInput}
//                             required>
//                             <option value="">Open this select menu</option>
//                             <option value="One">Cycling</option>
//                             <option value="Two">Running</option>
//                             <option value="Three">Swimming</option>
//                         </select>
//                     </div>
//                     <div className="input-group px-1 border border-black rounded">
//                         <input type="text" className="form-control" placeholder="Workout Minutes" 
//                         name='workoutmin'
//                         aria-label="Recipient's username" aria-describedby="button-addon2"
//                             autoComplete="off"
//                             value={user.workoutmin}
//                             onChange={handleInput}
//                             required />
//                     </div>
//                 </div>
//                 <button type="button" className="btn btn-primary mt-4" onClick={handleSubmit}>Submit</button>
//             </div>
//         </>
//     );
// }

// export default Home;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { addToLocalStorageArray } from './localStorageUtils';

function Home() {
    const [user, setUser] = useState({
        name: "", workoutmin: "", type: ""
    });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = () => {
        addToLocalStorageArray('users', user);
        console.log(user);
        // alert("User data added to localStorage array!");

        setUser({ name: "", workoutmin: "", type: "" }); // Clear form after submission

        navigate('/workout-list'); // Navigate to WorkoutList
    };

    return (
        <div className=''>
            <div className='hmain mt-5'>
                <div className='hmain container-sm'>
                    <div className='d-flex justify-content-center'>
                        <div className="input-group mb-5 border border-black rounded d-flex justify-content-evenly align-items-center w-50 pl-4" required>
                            <input type="text" className="form-control" placeholder="User Name" aria-label="Recipient's username"
                                name='name'
                                aria-describedby="button-addon2"
                                autoComplete="off"
                                value={user.name}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                </div>
                <div className='container d-flex justify-content-evenly'>
                    <div className='mr-1 w-25 '>
                        <select className="form-select border border-black rounded "
                            name='type'
                            aria-label="Default select example"
                            autoComplete="off"
                            value={user.type}
                            onChange={handleInput}
                            required>
                            <option value="">Open this select menu</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Running">Running</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                    </div>
                    <div className="input-group px-1 border border-black rounded w-25 ">
                        <input type="text " className="form-control" placeholder="Workout Minutes"
                            name='workoutmin'
                            aria-label="Recipient's username" aria-describedby="button-addon2"
                            autoComplete="off"
                            value={user.workoutmin}
                            onChange={handleInput}
                            required />
                    </div>
                </div>
                <div className='container d-flex justify-content-evenly'>
                    <button type="button " className="btn btn-primary mt-5 px-5 w-25" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
