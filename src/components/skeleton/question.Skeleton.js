function Skeleton({ title }) {
    return (
        <div role="status" className="bg-secondary w-full shadow-md rounded-md p-5 hover:scale-105 transition ease-out duration-200 hover:shadow-xl">
            <div className="flex items-center justify-between gap-1  p-1">
                <h3 className="text-gray-300 text-lg text-center w-full  font-bold bg-gray-300 mx-auto  h-2 animate-pulse">{title}</h3>
                <div className="flex justify-center items-center font-extrabold text-2xl  h-2 w-10 animate-pulse text-gray-400">+</div>
            </div>

        </div>
    );
}

export default Skeleton;
