import React from 'react'
import './TopBar.css'
import ts_logo from './tracksense-logo.png'
import {
    Navbar,
    NavbarBrand,
  } from 'reactstrap';

function TopBar() {

    return (
        <div>
            <Navbar id='topBar'
                className="my-2"
                color="#333"
                dark
            >
            <NavbarBrand href="/">
            <img
                alt="logo"
                src= {ts_logo}
                style={{
                    height: 40,
                    // width: 40,
                }}
            />
            {/* TrackSense */}
            </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default TopBar

