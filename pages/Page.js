function Page({ data }) {
    // Render data...
    console.log(data)
    return (<h>{data}</h>)
  }
  
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/users/caguilarl`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data : 'datos'} }
  }
  
  export default Page