import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { CART } from '../ContextApi/CartProvider';

const Navbar = () => {
	const { cart } = CART();

	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to='/products' activeStyle>
						Products
					</NavLink>
					<NavLink to='/addnewproduct' activeStyle>
						Add Product
					</NavLink>
					<NavLink to='/viewImage' activeStyle>
						View image
					</NavLink>
					<NavLink to='/team' activeStyle>
						Teams
					</NavLink>
					<NavLink to='/blogs' activeStyle>
						Blogs
					</NavLink>
					<NavLink to='/sign-up' activeStyle>
						Sign Up
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/viewCart' style={{ position: 'relative' }}>
						{cart.length > 0 && <h4 className='cart-item-count' style={{ position: 'absolute', top: 0, right: 10, color: 'black' }}>{cart.length}</h4>}
						<BsFillCartCheckFill style={{ fontSize: '20px', color: 'black' }} />
					</NavBtnLink>
					<NavBtnLink to='/signin'>Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
