import Navbar from "./Navbar";
import { useEffect } from "react";
import { Router, useRouter } from "next/dist/client/router";
import nProgress from "nprogress";

const Layout = (props) => {

    useEffect(()=>{
        const handleRouteChange = url => {
            console.log("Start progress bar");
            nProgress.start();
        };

        Router.events.on('routeChangeStart', handleRouteChange);

        nProgress.done();
        return () => {
            Router.events.off('routeChangeStart', handleRouteChange);
        }

    },[])

    return (
        <>
            <Navbar />
            <main className="container py-4">
                {props.children}
            </main>
            <footer className="bg-dark text-light text-center">
                <div className="container p-4">
                    <h3>&copy; Carlos Aguilar León</h3>
                    <p>2009 - {new Date().getFullYear()}</p>
                    <p>All rights Reserved.</p>
                </div>
            </footer>
        </>)
}

export default Layout;