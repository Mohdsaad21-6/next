export default async function Page({ params }) {


    let languages=["javascript", "python", "ruby", "go", "php", "swift", "kotlin", "cpp", "rust", "perl", "haskell", "matlab",]

    if(languages.includes(params.slug)) {
        return <div>My Post: {params.slug}</div>
    } else {
        return <div>Page not found</div>
    }
  const { slug } = await params
  return <div>My Post: {slug}</div>
}