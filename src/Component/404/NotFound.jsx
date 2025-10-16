import { FaArrowAltCircleDown } from "react-icons/fa"
import { NavLink } from "react-router-dom"

// page for 404 error showing
function NotFound() {
    return (
        <div className="flex flex-col gap-6 items-center justify-center mt-14">
            <p className="text-5xl font-bold text-gray-700">Oops !</p>
            <p className="text-5xl font-bold text-gray-700">404</p>
            <p className="text-5xl font-bold text-gray-700">Not Found</p>
            <p className="text-lg font-medium text-gray-600">The page you're searching for does not exist</p>
            <p className="text-lg font-medium text-gray-600">Go back to home page</p>
            <div className="text-blue-800 animate-ping"><FaArrowAltCircleDown /></div>
            <NavLink to={'/'}>
                <button className="rounded-xl bg-blue-700 hover:bg-blue-600 text-white font-bold px-3 py-2 outline-none border-none cursor-pointer">Go Home</button>
            </NavLink>
        </div>
    )
}

export default NotFound