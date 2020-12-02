import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div>
                <a>UpStar Music</a>
                <ul>
                    <li>
                        <NavLink to='/artists'>
                            Random Artist
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/newArtist'>
                            Create Artist
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
