export const todoLoader = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (!res.ok) {
    throw new Response("Failed to fetch todos", {
      status: res.status
    });
  }

  return res.json(); // returns Todo[]
};