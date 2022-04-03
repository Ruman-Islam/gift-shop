import './Menubar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import CustomLink from '../CustomLink/CustomLink';
import { useContext } from 'react';
import { UseCartIcon } from '../../App';

const Menubar = () => {
    const [isCartOpen, setIsCartOpen] = useContext(UseCartIcon);
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
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/orders">Orders</CustomLink>
                <CustomLink to="/inventory">Inventory</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <p
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className='cart-icon' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <FontAwesomeIcon className="icon" icon={faCartShopping} />
                </p>
            </div>
        </nav>
    );
};

export default Menubar;