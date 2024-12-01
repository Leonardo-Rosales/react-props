import Card from './card/card'
import posts from '../../posts'
import Tags from './Tags/Tags'



export default function main() {



    const published = posts.filter(post => post.published === true)

    const tags = []

    posts.forEach(post => {
        const postTags = post.tags
        postTags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag)
            }
        })
    })


    return (

        <main>
            <section className="container">
                <Tags tags={tags} />
                <div className="row">
                    {published.map((post) => (
                        <div key={post.id} className="col-4">
                            <Card post={post} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )

}