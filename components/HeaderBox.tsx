import React from 'react';

const HeaderBox = ({ type, user, title, subtext }: HeaderBoxProps) => {
    return (
        <div className="header-box">
            <h1 className="header-box-title">
                {title}
                {type === 'greeting' && (
                    <span className="text-green-500">&nbsp;{user}</span>
                )}
            </h1>
            <p className="header-box-subtext">{subtext}</p>
        </div>
    );
};

export default HeaderBox;
