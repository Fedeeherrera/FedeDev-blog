async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}

function page() {
  const data = getData()
  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default page