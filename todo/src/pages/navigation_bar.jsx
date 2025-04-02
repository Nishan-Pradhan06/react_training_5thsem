import React from "react";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h2 style={styles.logo}>MyApp</h2>
            <ul style={styles.navLinks}>
                <li><a href="#" style={styles.link}>Home</a></li>
                <li><a href="#" style={styles.link}>About</a></li>
                <li><a href="#" style={styles.link}>Services</a></li>
                <li><a href="#" style={styles.link}>Contact</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#333",
        color: "#fff",
    },
    logo: {
        margin: 0,
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "15px",
        padding: 0,
        margin: 0,
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "16px",
    },
};

export default Navbar;
