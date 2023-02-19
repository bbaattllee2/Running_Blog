import { Link } from "react-router-dom";
import { Button} from 'antd'
import './AddNavigation.css'

export default function AddNavigation() {
    return (
        <nav class="NavBar">
            <Button class="NavButton">
                <Link to="/">Home</Link>
            </Button>
            <Button class="NavButton">
                <Link to="/About">About Me</Link>
            </Button>
            <Button class="NavButton">
                <Link to="/Runs">Runs</Link>
            </Button>
        </nav>
    );
  }
  