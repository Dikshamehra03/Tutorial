import React, { useState } from 'react'; // Import useState
import Navbar from './Components/Navbar'; // Path to Navbar component
import NewsBoard from './Components/NewsBoard'; // Path to NewsBoard component

const App = () => {
    const [category, setCategory] = useState("general");

    return (
        <div>
            <Navbar setCategory={setCategory} />
            <NewsBoard category={category} />
        </div>
    );
}

export default App;

