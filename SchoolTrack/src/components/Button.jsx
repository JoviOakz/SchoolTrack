const Button = ({ children }) => {
    return (
        <>
            <button class="bg-orange-600 text-white font-bold py-1 px-4 rounded shadow-md hover:bg-orange-500 hover:shadow-lg transition duration-300">
                {children}
            </button>
        </>
    )
}

export default Button;