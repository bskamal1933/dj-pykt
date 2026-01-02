import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Travel With Us</h1>
            </header>
            <section className="hero">
                <h1>Explore the World</h1>
                <p>Your adventure starts here. Discover amazing places with us.</p>
                <div className="cta">
                    <a href="/explore" className="cta-button">Start Exploring</a>
                </div>
            </section>
            <section className="features">
                <div className="feature">
                    <h2>Top Destinations</h2>
                    <p>Handpicked destinations for your perfect getaway.</p>
                </div>
                <div className="feature">
                    <h2>Affordable Packages</h2>
                    <p>Travel without breaking the bank with our exclusive deals.</p>
                </div>
                <div className="feature">
                    <h2>24/7 Support</h2>
                    <p>We are here to assist you anytime, anywhere.</p>
                </div>
            </section>
            <footer className="home-footer">
                <p>&copy; 2026 Travel With Us. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;