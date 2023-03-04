import React from "react";

const Header = () => {
 let headerClass = 'headerClass';
 let logoTitle = 'My first React App';
    return (
        <header className ={headerClass}>
            <div>
                <a href="#">{logoTitle}</a>
            </div>
            Header here
        </header>
    )

}

export default Header
