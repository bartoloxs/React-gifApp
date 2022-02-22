import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Dragon Ball', 'Dark Souls'];
    const [categories, setCategories] = useState(['Dark Souls']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr/>

            <AddCategory setCategories={ setCategories }></AddCategory>

            <ul>
                {categories.map((category) => <GifGrid key={ category } category={category}></GifGrid>)}
            </ul>
        </>
    );
};

export default GifExpertApp;