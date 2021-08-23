import Layout from "../components/Layout";
import Link from "next/dist/client/link";

const About = () => (
    <Layout>
        <div className="col-md-12">
                <div className="card card-body bg-secundary text-dark">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="profile_long.jpg" alt="profile" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Carlos Aguilar León</h1>
                            <h3>Software Developer - Software Engineer</h3>
                            <p>
                                Hola! Soy Carlos, un Ingeniero en Informática de Chile
                            </p>
                            <p>
                                Ingeniero en informática del Instituto profesional Duoc UC, trabajando en áreas de tecnología desde el año 2012, acumulando más de 9 años de experiencia participando en el diseño, desarrollo e implementación de software en empresas de diversos rubros.
                            </p>
                            <p>
                                Mis principales habilidades técnicas tienen que ver con el análisis y desarrollo de sistemas. He participado tanto en el Backend como en el Frontend de diversos proyectos web, siendo mi mayor afinidad el trabajo con este último, utilizando tecnologías Microsoft, tales como SQL Server, .NET Framework, C#.NET y VisualBasic.NET, y en segundo lugar tecnologías como Java SE, PHP y MySQL.
                            </p>
                            <p>
                                En este sitio podrás encontrar un portafolio de mis proyectos desarrollados y algunos productos y servicios que tengo para ofrecer, además de algunas publicaciones en el blog sobre temas de mi interés
                            </p>
                            <Link href="/Contact">
                                <a className="btn btn-outline-dark">Contactame aquí</a>
                            </Link>                            
                        </div>

                    </div>

                </div>
            </div>
    </Layout>
)

export default About;