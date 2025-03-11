import React from 'react';
import SearchBar from "./inputs/SearchBar.tsx";

const TopBar: React.FC = () => {
    return (
        <div>
            {/*Profile*/}
            <div>
                <img src={''} alt={'profile image'}/>
                <div>
                    <p><b></b></p>
                    <p></p>
                </div>
            </div>
            {/*Search Bar*/}
            <SearchBar />
        </div>
    );
};

export default TopBar;
