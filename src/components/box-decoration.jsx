const BoxDecoration = () => {
    return (
        <div>
            Box Decoration
            <div className="">
                <span className="box-decoration-slice bg-gradient-to-r from-blue-600 to-red-500 text-white px-2 ...">
                  Slice Box <br />
                  This is the start of the gradiant<br/>
                  The end of the gradiant
                </span>
                <hr />
                <span className="box-decoration-clone hover:box-decoration-slice bg-gradient-to-r from-blue-600 to-red-500 text-white px-2 ...">
                  Close box <br/>
                    This is clone box gradiant<br/>
                  World
                </span>
            </div>
        </div>
    );
};

export default BoxDecoration;