import { trpc } from "/home/chrysalis/Code/My_Projects/Idnik/webapp/src/lib/trpc.tsx";

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getIdeas.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data) {
    return <span>Data not available</span>;
  }

  return (
    <div>
      <h1>All Ideas</h1>
      {data.ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.name}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  );
};
