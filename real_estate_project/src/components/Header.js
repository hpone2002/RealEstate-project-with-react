import React from "react";

export default function Header() {
    return (
        <header class="header active" data-header>
            <div class="container">
                <a href="#" class="logo">
                    <img src="./images/logo.png" alt="wealthhouse" width="190" height="28"></img>
                </a>

                <nav class="navbar" data-navbar>
                    <ul class="navbar-list">
                        <li>
                            <a href="#" class="navbar-link label-medium active">Home</a>
                        </li>
                        <li>
                            <a href="#" class="navbar-link label-medium">Rent</a>
                        </li>
                        <li>
                            <a href="#" class="navbar-link label-medium">Sell</a>
                        </li>
                        <li>
                            <a href="#" class="navbar-link label-medium">Buy</a>
                        </li>
                        <li>
                            <a href="#" class="navbar-link label-medium">About</a>
                        </li>
                    </ul>

                    <div class="navbar-wrapper">
                        <a href="#" class="btn-link label-medium">Login</a>
                        <a href="#" class="btn btn-fill label-medium">Get Started</a>
                    </div>
                </nav>

                <button class="nav-toggle-btn icon-btn" aria-label="toggle navbar" data-nav-toggle>
                    <span class="material-symbols-rounded open" aria-hidden="true">
                        menu
                    </span>
                    <span class="material-symbols-rounded close" aria-hidden="true">
                        close
                    </span>
                </button>
            </div>
        </header>
    )
}