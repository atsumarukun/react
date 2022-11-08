import {createClient} from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: `${process.env.SERVICE_DOMAIN}`,
    apiKey: `${process.env.API_KEY}`,
})

export async function getPostBySlug(slug) {
    try {
        const post = await client.get({
            endpoint: "blogs",
            queries: {filters: `id[equals]${slug}`},
        })
        return post.contents[0]
    } catch (err) {
        console.log("~~getPostByuSlug~~")
        console.loog(err)
    }
}

export async function getAllSlugs(limit=100) {
    try {
        const slugs = await client.get({
            endpoint: "blogs",
            queries: {fields: "title,id", orders: "-publishedAt", limit: limit},
        })
        return slugs.contents
    } catch (err) {
        console.log("~~getAllSlugs~~")
        console.log(err)
    }
}

export async function getAllPosts(limit=100) {
    try {
        const posts = await client.get({
            endpoint: "blogs",
            queries: {fields: "title,id,eyecatch", orders: "-publishedAt", limit: limit},
        })
        return posts.contents
    } catch (err) {
        console.log("~~getAllPosts~~")
        console.log(err)
    }
}

export async function getAllCategories(limit=100) {
    try {
        const categories = await client.get({
            endpoint: "categories",
            queries: {
                fields: "name,id",
                limit: limit,
            }
        })
        return categories.contents
    } catch (err) {
        console.log("~~getAllCategories~~")
        console.log(err)
    }
}

export async function getAllPostsByCategory(catID, limit=100) {
    try {
        const posts = await client.get({
            endpoint: "blogs",
            queries: {filters: `category[equals]${catID}`, fields: "title,id,eyecatch", orders: "-publishedAt", limit: limit},
        })
        return posts.contents
    } catch (err) {
        console.log("~~getAllPosts~~")
        console.log(err)
    }
}