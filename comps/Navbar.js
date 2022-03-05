import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Image src='/project.png' alt="Logo" width={80} height={77}/>
            </div>
            <ul>
                <Link href="/"><a>Home</a></Link>
                <Link href="/comments"><a>Comments</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
                <Link href="#"><a className="btn">Sign-Up</a></Link>
            </ul>
        </nav>
     );
}
 
export default Navbar;