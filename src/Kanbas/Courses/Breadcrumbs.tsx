import { Link, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(crumb => crumb !== '');

    let currentlink = '';
    const crumbs = pathnames.map((crumb, index) => {
        currentlink += '/' + crumb;
        const isLast = index === pathnames.length - 1;
        const className = isLast ? 'breadcrumb-item active' : 'breadcrumb-item';
        return (
            <li className={className} key={index}>
                <Link to={currentlink}>{crumb}</Link>
            </li>
        );
    });

    return (
        <>
            <ol className="breadcrumb">
                <li><HiMiniBars3 /></li>
                {crumbs}
            </ol>
        </>
    );
}



export default Breadcrumbs;