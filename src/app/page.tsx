import {db} from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/cf5c1a30-06bd-4ffa-ba83-5e22c8f22aaa-8gki00.png",
  "https://utfs.io/f/917dde17-cf75-4734-a3bc-dd1153124aef-ogo2mb.png",
  "https://utfs.io/f/68c77a46-8e7c-426a-8c40-619fe0284ad4-y3lkdn.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
      <main className="">
        <div className="flex flex-wrap gap-4">
          {posts.map((post) => (
              <div key={post.id}>{post.name}</div>
          ))}
          {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
              <div key={image.id + " - " + index} className="w-48">
                <img src={image.url} />
              </div>
          ))}
        </div>
      </main>
  );
}
