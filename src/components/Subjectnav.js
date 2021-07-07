import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Subjectnav() {
    return (
        <div>
            <div className="nav-contents navbar-nav">
                <li className="nav-item sitems">
                    <NavLink exact to='/class/books' activeClassName="active-link" className="nav-link nav-sublink">Books</NavLink>
                </li>
                <li className="nav-item  sitems">
                    <NavLink exact to='/class/link' activeClassName="active-link" className="nav-link nav-sublink">Links</NavLink>
                </li>
                <li className="nav-item  sitems">
                    <NavLink exact to='/class/ref' activeClassName="active-link" className="nav-link nav-sublink">References</NavLink>
                </li>
            </div>
        </div>
    )
}
