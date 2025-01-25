// import { SearchParams } from "next/dist/server/request/search-params";
import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {_id: 1, name: 'Timmy'},
      _id: 1,
      description: 'This is a description',
      image: './logo.png',
      category: 'Robots',
      title: 'We Robots'
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {posts?.length > 0 ? posts.map((post: StartupCardType, index: number) => <StartupCard
          key={post?._id} post={post}/>) : "All Startups"}
        </p>
        <ul className="mt-7 card_grid"></ul>
      </section>
    </>
  );
}
