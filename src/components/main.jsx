import Card from './card/card'
import posts from '../../posts'
// const published = posts.map(post => post.published);




export default function main() {

    return (

        <main>
            <section className="container">
                <div className="row">
                    {posts.map((post) => (
                        post.published === true ? (
                            <div key={post.id} className="col-4">
                                <Card title={post.title} image={post.image} content={post.content} tags={post.tags} />
                            </div>
                        ) : (
                            <div key={post.id} className="col-4">
                                <Card title={post.title} image={post.image} content={post.content} tags={post.tags} />
                            </div>
                        )

                    ))}
                </div>
            </section>
        </main>
    )

}