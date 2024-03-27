import React from 'react';

const BreakAfter = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-2xl p-2'>BreakAfter</h1>
            <div className="columns-2 p-2 bg-slate-700 border-green-500 border-2 rounded-md transition-all hover:border-blue-500">
                <p className="border-b">Well, let me tell you something, ...</p>
                <p className="border-b">Well, let me tell you something, ...</p>
                <p className="break-after-column  border-b">Well, let me tell you something, ...</p>
                <p className="border-b">Well, let me tell you something, ...</p>
                <p className="border-b">Well, let me tell you something, ...</p>
                <p className="border-b">Sure, go ahead, laugh...</p>
                <p className="border-b">Maybe we can live without...</p>
                <p className="border-b">Look. If you think this is...</p>
            </div>
        </div>
        
    );
};

export default BreakAfter;