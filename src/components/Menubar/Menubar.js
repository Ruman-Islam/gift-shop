import './Menubar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink/CustomLink';
import { UseCartIcon } from '../../App';
import { useContext, useEffect } from 'react';
import defaultImage from '../../images/photoplaceholder.jpg';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';
import useUserState from '../../hooks/useUserState';

const Menubar = () => {
    const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useContext(UseCartIcon);
    const { user, setUser } = useUserState();

    // const { displayName, photoURL, email } = {} = user;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
    }, [setUser])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <nav>
            <div className="logo">
                <h2 className='logo'>Influencer Gears</h2>
            </div>
            <input type="checkbox" id="toggler" />
            <label className="nav-toggler-icon" htmlFor="toggler">
                <FontAwesomeIcon id='bar-icon' icon={faBars} />
            </label>
            <div className='navigations'>
                <CustomLink to="/banner">Home</CustomLink>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/orders">Orders</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <p
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className='cart-icon'>
                    <FontAwesomeIcon className="icon" icon={faCartShopping} />
                    {/* <sup>{cartItemCount}</sup> */}
                </p>
                <div>
                    <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={user?.photoURL ? user?.photoURL : defaultImage} alt="" />
                </div>
                {user?.email ?
                    <button onClick={handleSignOut}>Log Out</button>
                    :
                    <button onClick={() => navigate('/signin')}
                    >Log In
                    </button>}
                <small style={{ marginLeft: '10px', fontSize: '18px' }}>
                    <strong>{user?.displayName ? `Hi ${user?.displayName.split(' ')[0]}!` : ''}</strong>
                </small>
            </div>
        </nav>
    );
};

export default Menubar;