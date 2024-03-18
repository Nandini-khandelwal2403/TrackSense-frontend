import React from 'react'
import logo from '../logo.svg'
import './TopBar.css'
import {
    Navbar,
    NavbarBrand,
  } from 'reactstrap';

function TopBar() {

    return (
        <div>
            <Navbar id='topBar'
                className="my-2"
                color="dark"
                dark
            >
            <NavbarBrand href="/">
            <img
                alt="logo"
                src= {logo}
                style={{
                    height: 40,
                    width: 40,
                }}
            />
            TrackSense
            </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default TopBar
