import './Menubar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink/CustomLink';
import { UseCartIcon } from '../../App';
import { useContext } from 'react';
import defaultImage from '../../images/photoplaceholder.jpg';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Menubar = () => {
    const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useContext(UseCartIcon);
    const { user, handleSignOut } = useFirebase();

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
                    <div>
                        <button style={{ marginTop: '15px' }} onClick={handleSignOut}>
                            Log out
                        </button>
                        <small style={{ marginLeft: '12px', fontSize: '12px' }}>
                            <strong>
                                {user.displayName ? `Hi, ${user.displayName.split(' ')[0]}` : ''}
                            </strong>
                        </small>
                    </div>
                    :
                    <button onClick={() => navigate('/signin')}
                    >Log In
                    </button>}
            </div>
        </nav>
    );
};

export default Menubar;