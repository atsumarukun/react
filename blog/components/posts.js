import styles from "styles/posts.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Posts({posts}) {
    return (
        <div className={styles.gridContainer}>
            {posts.map(({title, id, eyecatch}) => (
                <article className={styles.post} key={id}>
                    <Link href={`/blog/${id}`}>
                        <figure>
                            <Image src={eyecatch.url} alt="" layout="fill" objectFit="cover" sizes="(min-width: 1152px) 576px, 50vw" placeholder="blur" blurDataURL={eyecatch.blurDataURL} />
                        </figure>
                        <h2>{title}</h2>
                    </Link>
                </article>
            ))}
        </div>
    )
}