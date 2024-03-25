const AspectRatio = () => {
    return (
        <div className="p-10 ">
            <div className="w-full aspect-video" >
                <img className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-blue-500 hover:translate-y-10 hover:scale-105 transition-all duration-1000" src="/background1.png" alt="background"/>
            </div>
        </div>
    );
};

export default AspectRatio;