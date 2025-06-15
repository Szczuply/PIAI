import {Link} from "react-router-dom";

function NavBar(){
    return (
        <>
            <nav className="flex flex-col items-center justify-center gap-4">
                 <ul className="flex flex-row gap-6 items-center justify-center w-lg">
                   <li className="w-sm p-2 bg-red-600 text-white rounded-sm flex items-center justify-center" hover:cursor-pointer><Link to={"/"}>Strona glowna</Link></li>
                    <li className="w-sm p-2 bg-blue-600 text-white rounded-sm flex items-center justify-center hover:cursor-pointer"><Link to={"/login"}>Zaloguj sie</Link></li>
                    <li className="w-sm p-2 bg-green-600 text-white rounded-sm flex items-center justify-center hover:cursor-pointer"><Link to={"/register"}>Zarejetruj sie</Link></li>
                </ul>
                <ul className="flex flex-row gap-6 items-center justify-center text-sm text-gray-500 w-lg">
                    <li className="w-sm flex items-center justify-center hover:cursor-pointer"><Link to={"/offers"}>OBSERWOWANE</Link></li>
                    <li className="w-sm flex items-center justify-center hover:cursor-pointer"><Link to={"/offers"}>POLECANE</Link></li>
                    <li className="w-sm flex items-center justify-center hover:cursor-pointer"><Link to={"/offers"}>NAJNOWSZE</Link></li>
                </ul>
            </nav>
        </>
    )
}




export default NavBar;