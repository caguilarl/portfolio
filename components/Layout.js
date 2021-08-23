import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import nProgress from "nprogress";
import Classnames from "classnames";

const Layout = ({children, useFooter = true, useDarkBg = false, title, page = ""}) => {

    const router = useRouter();

    useEffect(()=>{
        const handleRouteChange = url => {
            console.log("Start progress bar");
            nProgress.start();
        };

        router.events.on('routeChangeStart', handleRouteChange);

        router.events.on('routeChangeComplete', () => nProgress.done());        
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }

    },[])

    return (
        <div className={Classnames({'bg-dark': useDarkBg, 'bg-light': !useDarkBg})}>
            <Navbar page={page} />
            <main className="container py-4">
                {title && (
                    <h1 className={Classnames('text-center',{'text-light': useDarkBg})}>{title}</h1>
                )}
                {children}
            </main>
            {
                useFooter && (
                    <footer className="bg-dark text-light text-center">
                    <div className="container p-4">
                        <h3>&copy; Carlos Aguilar León</h3>
                        <p>2009 - {new Date().getFullYear()}</p>
                        <p>All rights Reserved.</p>
                    </div>
                </footer>
                )
            }            
        </div>)
}

export default Layout;