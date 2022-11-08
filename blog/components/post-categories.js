import styles from "styles/post-categories.module.css"
import Link from "next/link"

export default function PostCategories({categories}) {
    return (
        <ul className={styles.list}>
            <li key={categories.id}>
                <Link href={`blog/category/${categories.id}`}>
                    {categories.name}
                </Link>
            </li>
        </ul>
    )
}