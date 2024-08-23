const Button = ({ children }) => {
    return (
        <>
            <button class="bg-amber-500 text-white font-bold py-1 px-4 rounded shadow-md shadow-slate-300 hover:bg-amber-600 hover:shadow-md hover:shadow-slate-400 transition duration-300">
                {children}
            </button>
        </>
    )
}

export default Button;