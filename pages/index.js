import Layout from "../components/Layout";
import { skillGroups, experiences } from "../profileData";

const Index = () => (
    <Layout>
        {/**Header Card**/}
        <header>
            <div className="col-md-12">
                <div className="card card-body bg-secundary text-dark">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="profile.jpg" alt="profile" className="img-fluid" height="auto" />
                        </div>
                        <div className="col-md-8">
                            <h1>Carlos Aguilar León</h1>
                            <h3>Software Developer - Software Engineer</h3>
                            <p>
                                Hola! Soy Carlos, un Ingeniero en Informática de Chile. Me especializo en el desarrollo de software utilizando diferentes lenguajes y frameworks de programación.
                            </p>
                            <a href="/contacto">Contactame aquí</a>
                        </div>

                    </div>

                </div>
            </div>
        </header>
        {/* Second Section */}
        <div className="row py-2 ">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        <ul>
                            {skillGroups.map(({ group, skills }, i) => (
                                <li key={i}>
                                    <h5>{group}</h5>
                                    {skills.map(({ skill, percentage }, idx) => (
                                        <div className="py-2" key={idx}>
                                            <h6>{skill}</h6>
                                            <div className="progress">
                                                <div className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: `${percentage}%` }}
                                                    aria-valuenow="50"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100">
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {experiences.map(({ title, description, from, to }, i) => (
                                <li key={i}>
                                    <h5>{title}</h5>
                                    <h6>{`${from} - ${to}`}</h6>
                                    <p>
                                        {description}
                                    </p>
                                </li>
                            ))}
                        </ul>



                    </div>

                </div>
            </div>

        </div>
    </Layout>
)

export default Index;