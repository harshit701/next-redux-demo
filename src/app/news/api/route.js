export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();
  //   console.log(data);
  return data;
}

export async function POST(data) {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums", {
    "content-type": "application/json",
    body: JSON.stringify(data),
    method: "post",
  });

  const resData = await res.json();

  console.log("post data", resData);
  return resData;
}
