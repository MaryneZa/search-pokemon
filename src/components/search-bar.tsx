interface props {
    onSubmit: (e: any) => void
}

export default function SearchBar({onSubmit}: props) {
    return (
        <div>
            <form action="" onSubmit={(e) => onSubmit(e)} className="flex space-x-2">
                <input type="text" name="name" placeholder="Enter pokemon name ..." required className="bg-white p-2 rounded-md border-2 border-gray-500 focus:ring-pink-500 focus:ring-2 focus:outline-none"/>
                <button type="submit" className="bg-pink-500 text-white p-2 shadow-md hover:bg-amber-200 hover:shadow-lg transform transition-all duration-200 hover:scale-105 rounded-md">Search</button>
            </form>
        </div>
    );
}