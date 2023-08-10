import React from "react"

function Footer(){
    return (

        <footer className="text-center">
            <a href="#about">
                <span className="glyphicon glyphicon-chevron-up"></span>
            </a>
            <div className="row" id="social">

                <a href="https://github.com/louiseKuame" target="blank">
                    <img src="images/github.png" alt="Github" />
                </a>

                <a href="https://www.linkedin.com/in/ahou-louise-blanche-kuame-447a55254" target="blank"> 
                    <img src="images/linkedin.png" alt="Github" />
                </a>
            </div>

            <h5>©
                <script>
                    let year = new Date().getFullYear();
                    document.write(year);
                </script> Tous drois reservés
            </h5>
        </footer>
    )
}

export default Footer;