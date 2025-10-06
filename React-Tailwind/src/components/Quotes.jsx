import QuoteBox from "./QuoteBox";

const Quotes = () => {
  const quotes = [
    {
      text: "Knowledge speaks, but wisdom listens.",
      author: "Jimi Hendrix",
      bio: "Singer",
    },
    {
      text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
      author: "William Butler Yeats",
      bio: "Irish poet and playwright",
    },
    {
      text: "The best way to predict your future is to create it.",
      author: "Peter Drucker",
      bio: "Austrian-American management consultant",
    },
  ];

  return (
    <>
      <QuoteBox quote1={quotes[0]} quote2={quotes[1]} quote3={quotes[2]} />
    </>
  );
};

export default Quotes;
