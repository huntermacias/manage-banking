import React from 'react';

const HeaderBox = ({ type, user, title, subtext }: HeaderBoxProps) => {
    return (
        <div className="header-box bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-8 px-6 rounded-lg shadow-lg">
            <h1 className=" text-3xl font-bold mb-2">
                {title}
                {type === 'greeting' && (
                    <span className="text-green-500">&nbsp;{user}</span>
                )}
            </h1>
            <p className="text-gray-300 text-sm">{subtext}</p>
        </div>
    );
};

export default HeaderBox;
