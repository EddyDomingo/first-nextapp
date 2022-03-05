import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() =>{
        setTimeout(() =>{
            router.push('/')
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Oppsss....fatal error...</h1>
            <h2>That page could not be found</h2>
            <p>Lets get back <Link href='/'><a>Home</a></Link></p>
        </div>
     );
}
 
export default NotFound;