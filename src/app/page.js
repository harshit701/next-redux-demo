export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return (
    <>
      <h1>App Page</h1>
      {JSON.stringify(data)}
    </>
  );
}
