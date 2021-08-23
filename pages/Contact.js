import Layout from "../components/Layout";
import MaterialIcons from "material-icons/iconfont/material-icons.css";
import { SocialIcon } from 'react-social-icons';


const Contact = () => {
    return (
        <Layout useFooter={false} title={'Contacto'} page={"Contact"}>
            <div className="row">
                <p>
                    Puedes contactarme llenando este sencillo formulario, y te responderé tan pronto pueda.
                </p>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <form>
                                <div className="form-group row py-2">
                                    <label for="name" className="col-sm-2 col-form-label">Nombre (*)</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Nombre" required />
                                    </div>
                                </div>
                                <div className="form-group row py-2">
                                    <label for="email" className="col-sm-2 col-form-label">E-mail (*)</label>
                                    <div className="col-sm-10">
                                        <input type="email" name="email" className="form-control" placeholder="tupropio@email.com" required />
                                    </div>
                                </div>
                                <div className="form-group row py-2">
                                    <label for="phone" className="col-sm-2 col-form-label">Teléfono (*)</label>
                                    <div className="col-sm-10">
                                        <input type="phone" name="pho" className="form-control" placeholder="tupropio@email.com" required />
                                    </div>
                                </div>
                                <div className="form-group row py-2">
                                    <label for="issue" className="col-sm-2 col-form-label">Asunto</label>
                                    <div className="col-sm-10">
                                        <select className="form-control">
                                            <option>Consulta general</option>
                                            <option>Presupuesto</option>
                                        </select>

                                    </div>


                                </div>
                                <div className="form-group row py-2">
                                    <label for="message" className="col-sm-2 col-form-label">Tu mensaje</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <input type="submit" className="btn btn-dark" value="Enviar" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 text-center">
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <span className="material-icons">location_on</span>
                                    <p>Santiago, Región Metropolitana, Chile</p>
                                </li>
                                <li><span className="material-icons-round">phone_iphone</span>
                                    <p><a href="tel:+56988776677" style={{color:'black'}}>+ 56 9 8877 6677</a></p>
                                </li>
                                <li><span className="material-icons-round">mail</span>
                                    <p><a href="mailto:caguilar@ca-portfolio.com" style={{color:'black'}}>caguilar@ca-portfolio.com</a></p>
                                </li>
                                <li><SocialIcon url="https://github.com/caguilarl/" />
                                    <p><a href="https://github.com/caguilarl/" style={{color:'black'}}>https://github.com/caguilarl/</a></p>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Contact