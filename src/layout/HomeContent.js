import * as React from "react";



function HomeContent(){


	return (
		<>
			<section id="about" className="container-fluid">
		        <div className="col-xs-8 col-md-4 profile-picture">
		            <img src="images/photo.jpeg" alt="Kuame ahou Louise blanche" className="img-circle" style={{height: "20rem"}} />
		        </div>
		        <div className="heading">
		            <h1>Bienvenue , je suis Miss Kuame ahou Louise blanche</h1>
		            <h3>Développeuse Web Junior</h3>
		            <a href="#" className="button1">Télécharger CV</a>                                                                                                                                                                                                                                    

		        </div>
		    </section>

		    <section id="presenatation">
		        <div className="red-divider"></div>
		        <div className="heading">
		            <h2>Presentation</h2>
		        </div>
		        <div className="container" id="presentation-text">
		            <p>
		                Je suis Kuame ahou Louise blanche, étudiante passionnée de développement web.Je suis une femme talentueuse, créative et déterminée, qui se démarque par son expertise dans le domaine de la programmation et du design.
		            </p>
		            <p>
		                Jai commencé mon parcours en informatique dès mon plus jeune âge, et mon amour pour la technologie m'a guidée vers le développement web. J'ai étudié rigoureusement les langages de programmation tels que HTML, CSS et JavaScript, acquérant ainsi une solide
		                base technique pour créer des sites web interactifs et intuitifs.
		            </p>
		            <p>
		                Ce qui me distingue, c'est ma capacité à combiner mes compétences techniques avec une sensibilité artistique. Je suis constamment à l'affût des dernières tendances en matière de design et d'expérience utilisateur, ce qui me permet de concevoir des interfaces
		                esthétiques et conviviales.
		            </p>
		            <p>
		                Au cours de mes études, j'ai également exploré d'autres aspects du développement web tels que le développement côté serveur, l'intégration de bases de données et l'optimisation des performances. Je suis toujours prête à relever de nouveaux défis et à
		                apprendre de nouvelles technologies pour rester à la pointe de son domaine.
		            </p>
		            <p>
		                En dehors de ma formation académique, j'ai également acquis une expérience pratique en travaillant sur différents projets web. j'ai participé à des équipes de développement et contribué à la création de sites web pour des entreprises locales, mettant
		                en pratique mes compétences et gagnant en confiance.
		            </p>
		        

		            <p>
		                Je suis une personne extrêmement motivée et organisée. Je suis capable de gérer efficacement mon temps et de m'adapter aux exigences des projets. Ma rigueur et mon attention aux détails font de moi une développeuse fiable et précise.
		            </p>
		        </div>
		    </section>

		    <section id="experience">
		        <div className="container">
		            <div className="white-divider"></div>
		            <div className="heading">
		                <h2>Expérience Professionelle</h2>
		            </div>
		            <ul className="timeline">
		                <li>
		                    <div className="timeline-badge"><span className="glyphicon glyphicon-briefcase"></span></div>
		                    <div className="timeline-panel-container">
		                        <div className="timeline-panel">
		                            <div className="timeline-heading">
		                                <h3>GOOGLE</h3>
		                                <h4>Développeur Web junior</h4>
		                                <p className="text-muted"><small className="glyphicon glyphicon-time"></small> 2013-2015</p>
		                            </div>
		                            
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div className="timeline-badge"><span className="glyphicon glyphicon-briefcase"></span></div>
		                    <div className="timeline-panel-container-inverted">
		                        <div className="timeline-panel">
		                            <div className="timeline-heading">
		                                <h3>FACEBOOK</h3>
		                                <h4>Développeur Web</h4>
		                                <p className="text-muted"><small className="glyphicon glyphicon-time"></small> 2010-2013</p>
		                            </div>
		                            <div className="timeline-body">
		                                <p>Développement du jeu de serpent</p>
		                                
		                            </div>
		                        </div>
		                    </div>
		                </li>
		                <li>
		                    <div className="timeline-badge"><span className="glyphicon glyphicon-briefcase"></span></div>
		                    <div className="timeline-panel-container">
		                        <div className="timeline-panel">
		                            <div className="timeline-heading">
		                                <h3>Mon hospital</h3>
		                                <h4>Développeur Web Junior</h4>
		                                <p className="text-muted"><small className="glyphicon glyphicon-time"></small> 2007-2010</p>
		                            </div>
		                            <div className="timeline-body">
		                                <p>Création d'un site web permettant de prendre rendez-vous dans tous les hospitaux</p>
		                                
		                            </div>
		                        </div>
		                    </div>
		                </li>

		            </ul>
		        </div>
		    </section>

		     <section id="education">
		        <div className="container">
		            <div className="red-divider"></div>
		            <div className="heading">
		                <h2>Education</h2>
		            </div>
		            <div className="row">
		                <div className="col-sm-6">
		                    <div className="education-block">
		                        <h5>2021-2023</h5>
		                        <span className="glyphicon glyphicon-education"></span>
		                        <h3>Programmation informatique</h3>
		                        <h4>Diplome de developpeur Web</h4>
		                        <div className="red-divider"></div>
		                        <p>front-end/ Backend</p>
		                        <p>Système d'informations</p>
		                    </div>
		                </div>
		                <div className="col-sm-6">
		                    <div className="education-block">
		                        <h5>2007</h5>
		                        <span className="glyphicon glyphicon-education"></span>
		                        <h3>Apprendre-a-coder.com</h3>
		                        <h4>Formation online "Développeur Web"</h4>
		                        <div className="red-divider"></div>
		                        <p>HTML/CSS, Javascript, JQuery</p>
		                        <p>Responsive Design</p>
		                    </div>
		                </div>
		            </div>
		        </div>

		    </section>


		    <section id="skills">
		        <div className="red-divider"></div>
		        <div className="heading">
		            <h2>Compétences</h2>
		        </div>
		        <div className="container">
		            <div className="row">
		                <div className="col-md-6">
		                    <div className="progress">
		                        <div className="progress-bar" role="progressbar" ariaValuenow="85" aria-valuemin="0" aria-valuemax="100"  style={{ width: "85%" }}>
		                            <h5>HTML 85%</h5>
		                        </div>
		                    </div>
		                    <div className="progress">
		                        <div className="progress-bar" role="progressbar" ariaValuenow="85" aria-valuemin="0" aria-valuemax="100"   style={{ width: "85%" }}> 
		                            <h5>CSS 85%</h5>
		                        </div>
		                    </div>
		                    <div className="progress">
		                        <div className="progress-bar" role="progressbar" ariaValuenow="90" aria-valuemin="0" aria-valuemax="100"  style={{ width: "90%" }}>
		                            <h5>JAVASCRIPT 90%</h5>
		                        </div>
		                    </div>
		                </div>
		                <div className="col-md-6">
		                    <div className="progress">
		                        <div className="progress-bar" role="progressbar" ariaValuenow="85" aria-valuemin="0" aria-valuemax="100"  style={{ width: "85%" }}>
		                            <h5>JQUERY 85%</h5>
		                        </div>
		                    </div>
		                    <div className="progress">
		                        <div className="progress-bar" role="progressbar" ariaValuenow="80" aria-valuemin="0" aria-valuemax="100"   style={{ width: "80%" }}>
		                            <h5>BOOTSTRAP 80%</h5>
		                        </div>
		                    </div>
		                    <div className="progress">
		                        <div className="progress-bar" role="progressbar" ariaValuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
		                            <h5>ANGULAR 75%</h5>
		                        </div>
		                    </div>
		                </div>

		            </div>
		        </div>
		    </section>

		   

		    <section id="portfolio">
		        <div className="container">
		            <div className="white-divider"></div>
		            <div className="heading">
		                <h2>Portfolio</h2>
		            </div>
		            <div className="row">
		                <div className="col-sm-4">
		                    <a className="thumbnail" href="http://www.facebook.com" target="_blank">
		                        <img src="images/facebook_share.png" alt="facebook share" />
		                    </a>
		                </div>
		                <div className="col-sm-4">
		                    <a className="thumbnail" href="http://www.google.com" target="_blank">
		                        <img src="images/google_translate.png" alt="google translate" />
		                    </a>
		                </div>
		                <div className="col-sm-4">
		                    <a className="thumbnail" href="http://www.twitter.com" target="_blank">
		                        <img src="images/twitter_video.png" alt="twitter video" />
		                    </a>
		                </div>
		            </div>
		            

		        </div>

		    </section>
		</>
	)
}

export default HomeContent;