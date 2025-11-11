
const Button: React.FC<{ title: string }> = ({ title }) => {
    return (
        <button className="bg-red-500 text text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
            {title}
        </button>
    )
}

export default Button;