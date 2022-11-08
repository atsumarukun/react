export function prevNextPost(allSlugs, currentSlug) {
    const numberOfPosts = allSlugs.length
    const index = allSlugs.findIndex(({id}) => id === currentSlug,)
    const prevPost = index + 1 === numberOfPosts? {title: "", id: ""}: allSlugs[index + 1]
    const nextPost = index === 0? {title: "", id: ""}: allSlugs[index - 1]
    return [prevPost, nextPost]
}