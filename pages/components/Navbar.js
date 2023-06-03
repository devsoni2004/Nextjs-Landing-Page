import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div classNae="logo">

                        <h1 className="text-light">
                            <Link href="/">
                                Tech Dev
                            </Link>
                        </h1>

                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    </div>
                </div>
            </header >
            <nav>

                <div className="nav">
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header"></div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                            <span />
                            <span />
                            <span />
                        </label>
                    </div>
                    <div className="nav-links">
                        <Link className="active" href="/">Home</Link>
                        <Link href="../About">About</Link>
                        <Link href="../Team">Team</Link>
                        <Link href="../Service">Services</Link>
                        <Link href="../Pricing">Pricing</Link>
                        <Link href="../Portfolio">Portfolio</Link>
                        <Link href="../Blog">Blog</Link>
                        <Link href="../Contact">Contact</Link>
                    </div>

                </div>
            </nav >
            {/* .navbar */}
        </div >

    )
}

export default Navbar