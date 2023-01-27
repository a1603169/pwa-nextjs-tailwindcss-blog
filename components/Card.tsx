export default function Card() {
  const DUMMY_DATA: any = {
    title: "My first post",
    description: "This is my first post",
    href: "/posts/first-post",
  };
  return (
    <div className="card">
      <h3>{DUMMY_DATA.title} &rarr;</h3>
      <p>{DUMMY_DATA.description}</p>
    </div>
  );
}
