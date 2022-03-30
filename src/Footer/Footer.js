import React from "react";
import './Footer.css'
import mainlogo from '../Assets/mainlogo.png'

export default function Footer() {
    return (

        <footer className="nb-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about">
                            <img src={mainlogo} className="img-responsive center-block GDSCLogo" alt=""/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra lacus vitae tellus dictum, eget porta arcu ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris at magna sit amet tellus vehicula pretium vel a mi.</p> 
                            <p>Maecenas vehicula justo nec mauris condimentum luctus. Sed vehicula massa vitae faucibus sodales.</p>
                            <p>Maecenas ac risus a urna rutrum pellentesque et in libero. Maecenas finibus eleifend efficitur.</p>
                            <p>Designed by: Angad Singh Kataria</p>
                            <div class ="social-media">
                            <ul class ="list-inline">
                            <li><a href="javascript:void(0);" title="" target="__blank"><i class ="fa fa-linkedin"/></a></li>
                            <li><a href="javascript:void(0);" title="" target="__blank"><i class ="fa fa-instagram"/></a></li>
                            <li><a href="javascript:void(0);" title="" target="__blank"><i class ="fa fa-github"/></a></li>
                            <li><a href="javascript:void(0);" title="" target="__blank"><i class ="fa fa-google"/></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    );
}