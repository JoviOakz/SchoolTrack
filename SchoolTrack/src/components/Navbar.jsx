import Logo from "/Logo.jpeg";

const Navbar = () => {
    return (
        <>
            <div className="flex h-[8vh] bg-slate-600 shadow-md shadow-slate-500">
                <div className="flex justify-center items-center w-1/12">
                    <img className="h-14 rounded-full" src={Logo} />
                </div>

                <div className="flex justify-between items-center w-10/12">
                    <h1>SchoolTrack</h1>

                    <ul className="flex gap-8">
                        <button>Home</button>
                        <button>Home</button>
                        <button>Home</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;