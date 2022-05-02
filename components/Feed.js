import Posts from "./Posts"
import Stories from "./Stories"

const Feed = () => {
  return (
    <main className="grid  grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
        {/* left section */}
        <section className="col-span-2">
           {/* story */}
            <Stories />
            {/* feed */}
            <Posts />
        </section>
           

        {/* right section */}
            {/* mini profile */}
            {/* suggestions */}
    </main>
  )
}

export default Feed