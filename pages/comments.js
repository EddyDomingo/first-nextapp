import Link from "next/link";
import styles from '../styles/Comment.module.css'


export const getStaticProps =async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();

    return {
        props: {comments : data}
    }
}

const About = ({comments}) => {
    return ( 
        <div className={styles.about}>
            <h1 className={styles.headerText}>Customer Comments</h1>
            {comments.map(comment =>(
                <Link href={'#' + comment.id} key={comment.id}>
                <a className={styles.single}>
                    <h3>{comment.email}</h3>
                    <p>{comment.body}</p>
                </a>
                </Link>
            ))}
        </div>
     );
}
 
export default About;