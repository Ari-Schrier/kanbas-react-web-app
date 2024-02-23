import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaHubspot, FaComment, FaQuestion} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 text-secondary" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 text-danger" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 text-danger" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 text-danger" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2 text-danger" /> },
    { label: "History",  icon: <FaClock className="fs-2 text-danger" /> },
    { label: "Studio",  icon: <FaHubspot className="fs-2 text-danger" /> },
    { label: "Commons",  icon: <FaComment className="fs-2 text-danger" /> },
    { label: "Help",  icon: <FaQuestion className="fs-2 text-danger" /> }
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li><img src="https://i.pinimg.com/originals/08/bd/47/08bd47b365a7ad4ed868352014ecbd48.png" width="70px"></img></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;