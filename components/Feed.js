import Stories from "./Stories"

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl">
        {/* left section */}
            {/* story */}
            <Stories />
            {/* feed */}

        {/* right section */}
            {/* mini profile */}
            {/* suggestions */}
    </main>
  )
}

export default Feed