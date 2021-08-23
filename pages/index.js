import Link from "next/link";
import Layout from "../components/Layout";
import { skillGroups, experiences, projects } from "../profileData";

const Index = () => (
    <Layout>
        {/**Header Card**/}
        <header>
            <div className="col-md-12">
                <div className="card card-body bg-dark text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="profile.jpg" alt="profile" className="img-fluid" height="auto" />
                        </div>
                        <div className="col-md-8">
                            <h1>Carlos Aguilar León</h1>
                            <h3>Software Developer - Software Engineer</h3>
                            <p>
                            Especialista en desarrollo de software con tecnologías Microsoft como .NET Framework, SQL Server y C#.NET. También comencé a utilizar algunos frameworks y librerías de Javascript como JQuery, React, React Native y NodeJS.                            
                            </p>
                            {
                            /*
                            <p>Specialist in software development with Microsoft technologies like .NET Framework, SQL Server and C#.NET . Also, I beggining to use Javascript frameworks and libraries like JQuery, React, React Native and NodeJS.</p>
                            */
                            }
                            <Link href="/Contact">
                                <a href="/contacto" className="btn btn-outline-light">Contactame aquí</a>
                            </Link>                            
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
                        <h3>Skills</h3>
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
                <div className="card bg-light h-100">
                    <div className="card-body">
                        <h3>Experience</h3>
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

        {/*Portfolio*/}

        <div className="row py-2">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {projects.map(({ title, subtitle, description, image }, i) => (
                            <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100">
                                    <div className="overflow p-1">
                                        <img src={`/${image}`} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{title}</h3>
                                        <h5>{subtitle}</h5>
                                        <p>{description}</p>
                                        <a href="#">Show more</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <Link href="/portfolio">
                            <a className="btn btn-outline-light">Más Proyectos</a>
                        </Link>

                    </div>


                </div>

            </div>
        </div>
    </Layout>
)

export default Index;