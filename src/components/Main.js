import ItemCount from "./ItemCount";

export default function Main() {

  return (
    <>
      <main id="main">
        <div id="background">
          <ItemCount initial={1} stock={4} />
        </div>
      </main>
    </>
  );
}
