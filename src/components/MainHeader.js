import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return(
    <header className={classes.header}>
        <nav>
        <ul>
            <li>
               <Link to="/Welcome">Welcome</Link>
            </li>
            <li>
               <Link to="/Products">Products</Link>
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default MainHeader;