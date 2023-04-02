import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';

function Router() {
    const password = useSelector((state) => state.loginPage.password);
    const [control, setControl] = useState(false);

    const handleClick = () => {
        if (password === 'Kesan') {

            setControl(true)

        }
    }

    return (
        <div>
            <button onClick={handleClick} >Giriş yap</button>
            {control && <Home />}
        </div>
    );
}

export default Router;

/*

(
                <>
                    <NavLink to="/" activeClassName="Göktuğ">
                        Anasayfa
                    </NavLink>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </>
            )

*/
