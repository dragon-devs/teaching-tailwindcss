
const BoxSizing = () => {
    return (
        <div className="flex flex-col gap-5">
            Box-Border
            <div className="box-border border-4 h-32 w-32 p-2">
                <img className="border" src="/background.jpeg" alt="bg" />
            </div>
            Box-Content
            <div className="box-content hover:box-border border-4 h-32 w-32 p-1">
                <img className="border" src="/background.jpeg" alt="bg" />
            </div>

            <div className="box-content overflow-y-auto border-4 h-32 w-32 p-2">
                Hey there it is a box-border as df asd fa
                sdf asdf asdfasd fasd fsd afasdda fsadfasdfas
            </div>
        </div>
    );
};

export default BoxSizing;