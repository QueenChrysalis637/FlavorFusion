const App = () => {
  const ideas = [
    {
      nick: "cool-idea-nick1",
      name: "idea 1",
      description: "description of idea 1"
    },
    {
      nick: "cool-idea-nick2",
      name: "idea 2",
      description: "description of idea 2"
    },
    {
      nick: "cool-idea-nick3",
      name: "idea 3",
      description: "description of idea 3"
    },
    {
      nick: "cool-idea-nick4",
      name: "idea 4",
      description: "description of idea 4"
    },
    {
      nick: "cool-idea-nick5",
      name: "idea 5",
      description: "description of idea 5"
    }
  ];

  return (
    <div>
      <h1>FlavorFusion</h1>
      <div>
        {ideas.map((idea) => (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default App;