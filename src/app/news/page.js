import { GET, POST } from "./api/route";

const News = async () => {
  const albumData = await GET();

  const postAlbum = await POST({ title: "foo", body: "bar", userId: 1 });
  console.log("post album", postAlbum);

  return (
    <>
      <h1>News</h1>

      {albumData.map((album) => (
        <li key={album.id}>{album.title}</li>
      ))}
    </>
  );
};

export default News;
