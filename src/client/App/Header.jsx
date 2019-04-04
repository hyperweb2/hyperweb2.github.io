import React from "react"
import  {Link} from 'react-router-dom';

export default () => (
    <hw2site-header>
        <section id="menu-0">
            <nav className="navbar navbar-dropdown bg-color transparent navbar-fixed-top">
                <div className="container">
                    <div className="mbr-table">
                        <div className="mbr-table-cell">

                            <div className="navbar-brand">
                                <Link to="/" className="navbar-logo"><img src="/assets/images/logo-finale2.svg" alt="HyperWeb2" /></Link>

                            </div>

                        </div>
                        <div className="mbr-table-cell">

                            <button className="navbar-toggler pull-xs-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                                <div className="hamburger-icon"></div>
                            </button>

                            <ul className="nav-dropdown collapse pull-xs-right nav navbar-nav navbar-toggleable-sm" id="exCollapsingNavbar">
                                <li className="nav-item"><Link className="nav-link link" to="/" >HYPERWEB2</Link></li>
                                <li className="nav-item dropdown open"><a className="nav-link link dropdown-toggle" href="javascript:void(0)" aria-expanded="true" data-toggle="dropdown-submenu">I SERVIZI</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/#service-software" >Sviluppo Software</a>
                                        <a className="dropdown-item" href="/#service-training" >Consulenza e formazione</a>
                                        <a className="dropdown-item" href="/#service-assistance" >Assistenza tecnica</a>
                                        <a className="dropdown-item" href="/#msg-box5-0"  >Richiedi un preventivo!</a>
                                    </div>
                                </li>
                                <li className="nav-item"><a className="nav-link link" href="#social-buttons2-8" aria-expanded="false" >CONTATTI &amp; SOCIAL</a></li>
                                <li className="nav-item"></li>
                                <li className="nav-item">
                                <Link className="nav-link link"   aria-expanded="false" to="/Product">PRODOTTI</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link link" to="/media" aria-expanded="false">MEDIA<br /></Link></li>
                                <li className="nav-item"><a className="nav-link link" href="http://blog.hyperweb2.com" aria-expanded="false">BLOG</a></li>
                            </ul>
                           
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    </hw2site-header>
)
//<a className="nav-link link" href="site/it/prodotti.html" aria-expanded="false">PRODOTTI</a>