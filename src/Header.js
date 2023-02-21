import React from "react";
import './App.css'

class Header extends React.Component {

    render() {
        return (
            <>
                <header>
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div class="container-fluid">
                            <p class="navbar-brand">City Explorer</p>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarCollapse">
                                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                    <li class="nav-item">
                                        <p class="nav-link active" aria-current="page" >Home</p>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    < input onChange={this.props.getTargetInfo} type='text' placeholder='Seattle' ></input >
                                    <button onClick={this.props.search}>Explore!</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );
    }
}

export default Header
