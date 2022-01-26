import React from 'react';
import '../App.css';
import '../index.css';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { ReactComponent as Logo } from '../logo-v7.svg';

const mailchimp = 'https://gmail.us20.list-manage.com/subscribe/post?u=ee86290eba4a80851f0819174&amp;id=b5b7a5a77d'

function Home() {
    return (
        <div class="wrapper">
            {/* <img src="cup-white.png" class="icon"/> */}
            <Logo class='icon'/>
            <h1 class="header">Want unlimited coffee?</h1>
            <img src="iphone-app.png" class="hero" alt='app-img'/>
            <div class="tagline">One subscription. All your favourite coffee shops.</div>
            <div class="content-wrapper">
                <img src="shop.jpg" alt='shop'/>
                <div class="text">
                    <div class="title">
                        Get your <span class="highlight">BeansPass</span>
                    </div>
                    <br></br>
                    <div class="body">
                        then have as much coffee as you want - across all participating shops, at no extra cost.
                    </div>
                </div>
            </div>
            <div class="cta">
            <div class="tagline">Sign up for early access</div>
            <p>You'll be the first to know when we launch</p>
            <MailchimpSubscribe url={mailchimp}/>
            </div>
            <hr/>
            <div class="footer">
            <div class="copyright">
                <h2><span class="highlight">BeansPass</span></h2>
                <p>© 2022 Copyright BeansPass. All Rights Reserved.</p>
            </div>
            <div class="nav">
                <div class="socials">
                <p><a 
                    href="https://flicker-acoustic-526.notion.site/What-is-beans-pass-88034edddac74408a23ded871419589d" 
                    target="_blank" 
                    rel="noreferrer">Got questions?
                </a></p>
                <a href="https://www.instagram.com/beanspass/" target="_blank" rel="noreferrer"><FaInstagram class="icon"/></a>   
                <a href="https://www.tiktok.com/@beanspass" target="_blank" rel="noreferrer"><FaTiktok class="icon"/></a>   
                <a href="https://www.youtube.com/channel/UC-9EPlcxjqynwX1WlZVDZlA" target="_blank" rel="noreferrer"><FaYoutube class="icon"/></a>  
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;