import {Link} from "react-router-dom";
import "./header.scss"
const Header = () => {
    return (
        <>
            <header>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contacts'}>Contacts</Link></li>
                    <li><Link to={'/pages'}>Pages</Link></li>
                    <li><Link to={'/Posts'}>Posts</Link></li>
                </ul>
            </header>
        </>
    )
}
export default Header;