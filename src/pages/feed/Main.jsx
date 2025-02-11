import FeedForm from "../../components/feed-form/index";
import List from "./List";

const Main = ({ user }) => {
  return (
    <main className="border border-tw-gray overflow-y-auto">
      <header className="border-b border-tw-gray p-4 font-bold">
        Anasayfa
      </header>
      <FeedForm user={user} />

      <List />
    </main>
  );
};

export default Main;
