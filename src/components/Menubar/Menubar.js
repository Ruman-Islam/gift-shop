import './Menubar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

const Menubar = () => {
    return (
        <nav>
            <div className="logo">
                <h1 className='logo'>Wish</h1>
            </div>
            <input type="checkbox" id="toggler" />
            <label className="nav-toggler-icon" htmlFor="toggler">
                <FontAwesomeIcon id='bar-icon' icon={faBars} />
            </label>
            <div className='navigations'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
                <p className='cart-btn' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <FontAwesomeIcon className="icon" icon={faCartShopping} />
                </p>
            </div>
        </nav>
    );
};

export default Menubar;