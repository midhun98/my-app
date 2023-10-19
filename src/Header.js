import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
            <img className="nav-logo" src="https://img.icons8.com/officel/160/react.png" alt="react"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
