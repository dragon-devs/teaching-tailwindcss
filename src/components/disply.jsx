const Disply = () => {
    return (
        <div>
            <div className="p-5 text-lg font-bold">
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
            <hr/>
            <div className="p-5 text-lg font-bold">
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
            <hr/>
            <div className="p-5 text-lg font-bold">
                Flex
            </div>
            <div className="flex gap-2 items-center font-bold">
                <img className="w-10 h-10 rounded-full" src="/background.jpeg" alt="dp"/>
                <div>
                    <p>User name</p>
                    <p>Developer</p>
                </div>
            </div>
            <hr/>

            <div className="p-5 text-lg font-bold">
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
            <hr/>
        </div>
    );
};

export default Disply;