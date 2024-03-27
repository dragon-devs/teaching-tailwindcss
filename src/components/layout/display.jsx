const Display = () => {
    return (
        <div>
            <div className="p-5 text-lg font-bold pb-4 ">
                Block-inline
            </div>
            <div>
                When controlling the flow of text, using the CSS property
                <span className="inline text-yellow-500">display: inline</span>
                will cause the text inside the element to wrap normally.

                While using the property <span className="inline-block text-blue-500">display: inline-block</span>
                will wrap the element to prevent the text inside from extending beyond its parent.

                Lastly, using the property <span className="block text-green-500">display: block</span>
                will put the element on its own line and fill its parent.
            </div>
            <hr className="mt-5"/>
            <div className="p-5 text-lg font-bold pb-4 ">
                Flow-Root
            </div>
            <div className="p-4">
                <div className="flow-root ...">
                    <div className="my-4 ...">Well, let me tell you something, ...</div>
                </div>
                <div className="flow-root ...">
                    <div className="my-4 ...">Sure, go ahead, laugh if you want...</div>
                </div>
            </div>
            <hr className="mt-5"/>
            <div className="p-5 text-lg font-bold pb-4 ">
                Flex
            </div>
            <div className="flex gap-3 items-center font-bold">
                <img className="w-10 h-10 rounded-full" src="/background.jpeg" alt="dp"/>
                <div>
                    <p>User name asdf asdf asd fasdf asdf asd fasd</p>
                    <p>Developera sdf asdf asdf asd fasd fd sd </p>
                </div>
                <div>
                    <p>User name</p>
                    <p>Developer</p>
                </div>
            </div>
            <hr className="mt-5"/>

            <div className="p-5 text-lg font-bold pb-4 ">
                Flex-Inline
            </div>
            <div className="gap-3 items-center">
                Today I spent most of the day researching ways to take advantage of the fact that bottles
                can be returned for 10 cents in Michigan, but only 5 cents here.
                <span className="inline-flex items-baseline gap-1 font-bold">
                    <img className="w-5 h-5 rounded-full self-center" src="/background.jpeg" alt="dp"/>
                    <span>Salman</span>
                </span> keeps telling me there is no way to make it work, that he has run the numbers on
                every possible approach, but I just have to believe theres a way to make it work, theres
                simply too much opportunity here.
            </div>
            <hr className="mt-5"/>

            <div className="p-5 text-lg font-bold pb-4 ">
                Grid
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-2">
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">01 asdf asdf</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">02 asdf asd f</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">03</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">04</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">05</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">06</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">05</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">06</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">01</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">02</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">03</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">04</span>

            </div>
            <hr className="mt-5"/>

            <div className="p-5 text-lg font-bold pb-4 ">
                Inline-Grid
            </div>
            <div className="flex gap-2">
                <span className="inline-grid grid-cols-3 gap-4">
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">03</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">04</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">05</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">06</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">05</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">06</span>
            </span>
            <span className="inline-grid grid-cols-3 gap-4">
              <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">03</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">04</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">05</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">06</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">05</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">06</span>
            </span>
            </div>
            <hr className="mt-5"/>
            <div className="p-5 text-lg font-bold pb-4 ">
                Contents
            </div>
            <div className="flex gap-4">
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">04</span>
                <div className="contents">
                    <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">05</span>
                    <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">06</span>
                    <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">05</span>
                </div>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">06</span>
            </div>
            <hr className="mt-5"/>
            <div className="p-5 text-lg font-bold pb-4 ">
                Table
            </div>
            <div className="table w-full">
                <div className="table-header-group ">
                    <div className="table-row">
                        <div className="table-cell">Name</div>
                        <div className="table-cell">Gender</div>
                        <div className="table-cell">Subject</div>
                    </div>
                </div>
                <div className="table-row-group">
                    <div className="table-row">
                        <div className="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                        <div className="table-cell ...">Malcolm Lockyer</div>
                        <div className="table-cell ...">1961</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell ...">Witchy Woman</div>
                        <div className="table-cell ...">The Eagles</div>
                        <div className="table-cell ...">1972</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell ...">Shining Star</div>
                        <div className="table-cell ...">Earth, Wind, and Fire</div>
                        <div className="table-cell ...">1975</div>
                    </div>
                </div>
            </div>
            <hr className="mt-5"/>
            <div className="p-5 text-lg font-bold pb-4 ">
                Hidden
            </div>
            <div className="flex gap-2">
                <span className="hidden p-2 bg-blue-500 rounded-md w-auto h-10 text-center">01</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">02</span>
                <span className="p-2 bg-blue-500 rounded-md w-auto h-10 text-center">03</span>
            </div>
        </div>
    );
};

export default Display;