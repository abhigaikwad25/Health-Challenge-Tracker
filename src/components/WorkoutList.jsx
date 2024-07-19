// import React from 'react';

// function WorkoutList() {
//     return (
//         <div className="container">
//             <div className="row justify-content-between align-items-center">
//                 <div className="col-md-5">
//                     <div className="input-group mb-2 border border-black rounded winputw">
//                         <input type="text" className="form-control" placeholder="Search" aria-label="Search" required />
//                     </div>
//                 </div>
//                 <div className="col-md-5">
//                     <div className="input-group mb-2 border border-black rounded winputw">
//                         <select className="form-select" aria-label="Filter by Workout Type" required>
//                             <option selected>All</option>
//                             <option value="1">Cycling</option>
//                             <option value="2">Running</option>
//                             <option value="3">Swimming</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             <table className="table table-striped my-5">
//                 <thead>
//                     <tr>
//                         <th scope="col">Name</th>
//                         <th scope="col">Workouts</th>
//                         <th scope="col">Number of Workouts</th>
//                         <th scope="col">Total Workout Minutes</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{localStorage.getItem('name')}</td>
//                         <td>Cycling</td>
//                         <td>5</td>
//                         <td>300</td>
//                     </tr>
//                     <tr>
//                         <td>Johnson</td>
//                         <td>Running</td>
//                         <td>3</td>
//                         <td>180</td>
//                     </tr>
//                     <tr>
//                         <td>Williams</td>
//                         <td>Swimming</td>
//                         <td>4</td>
//                         <td>240</td>
//                     </tr>
//                 </tbody>
//             </table>

//             <div className="container d-flex justify-content-center my-5 ">
//                 <button type="button" className="btn btn-dark mx-1">&larr; Previse</button>
//                 <button type="button" className="btn btn-dark mx-1">1</button>
//                 <button type="button" className="btn btn-dark mx-1">Next &rarr;</button>
//                 <div className='mx-2 font-weight-bold p-1'>Items per page</div>
//                 <div>
//                     <select className="form-select w-auto" aria-label="Filter by Workout Type" required>
//                         <option selected>1</option>
//                         <option value="1">2</option>
//                         <option value="2">3</option>
//                         <option value="3">4</option>
//                     </select>
//                 </div>
//             </div>

//         </div>

//     );
// }

// export default WorkoutList;








import React, { useState, useEffect, useId } from 'react';

function WorkoutList() {
    
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedworkout, setSelectedworkout] = useState("All")
    const [search, setSearch] = useState('');
    const itemsPerPage = 10;
    const id = useId()

    //use for taking data from localstorage and update the useState setusers
    useEffect(() => {
        const usersData = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(usersData);
    }, []);

    //this enent give the live changes and give selected workout type using event.target.value 
    const handleworktypeChange = (event) => {
        setSelectedworkout(event.target.value);
        setCurrentPage(1);
    }

    //this filter is use for the give the selected workout user only 
    //by default it will give the all data 
    const filteredUsers = selectedworkout === 'All'
        ? users
        : users.filter(user => user.type === selectedworkout);
    
    //this is for sorting the workout filtered data  
    const sortedUsers = filteredUsers.sort((a, b) => {
        if (a.type < b.type) return -1;
        if (a.type > b.type) return 1;
        return 0;
    });

    //count the index of last item like 1*10=10
    const indexOfLastItem = currentPage * itemsPerPage;
    //count the inddex of first item of page  10-10=0
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    //store the data from indexOfFirstItem to indexOfLastItem in new array without updating the old array
    const currentUsers = sortedUsers.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);


    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (
        <div className="main container mt-5">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-5">
                    <div className="input-group mb-2 border border-black rounded winputw">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                            required />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="input-group mb-2 border border-black rounded winputw">
                        <select className="form-select" aria-label="Filter by Workout Type"
                            onChange={handleworktypeChange}

                            value={selectedworkout}
                            required
                        >
                            <option value="All">All</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Running">Running</option>
                            <option value="Swimming">Swimming</option>
                        </select>
                    </div>
                </div>
            </div>

            <table className="table table-striped my-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Workouts</th>
                        <th scope="col">Workout Minutes</th>
                    </tr>
                </thead>
                <tbody>
                    {/* This logic is for searching using filter method */}
                    {currentUsers.filter((user) => {
                        return search.toLowerCase() === ''
                            ? true
                            //make username lowercase for case sensitive7
                            //The includes method returns true if the search term is found within the user's name.
                            : user.name.toLowerCase().includes(search.toLowerCase());
                      //map is map the current element in array being proceed and id define the index of the element
                    }).map((user, id) => (
                        //key is helpfull to react to identify which element is render,remove,update 
                        //if not pass the key it wil show error on console
                        <tr key={id}>
                            {/* take name,type,workoutmin from user object */}
                            <td>{user.name}</td>
                            <td>{user.type}</td>
                            <td>{user.workoutmin}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="container d-flex justify-content-center my-5">
                <button
                    type="button"
                    className="btn btn-dark mx-1"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    &larr; Previous
                </button>
                <button type="button" className="btn btn-dark mx-1">{currentPage}</button>
                <button
                    type="button"
                    className="btn btn-dark mx-1"
                    onClick={handleNextPage}
                    //disabled if current page and totalpage count is same
                    disabled={currentPage === totalPages}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    );
}

export default WorkoutList;