import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Loader from "../../components/loader";
import Post from "../../components/post";

const List = () => {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    //koleksiyon referansı
    const collectionRef = collection(db, "tweets");

    //abonelik ayarı
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    //koleksiyona abone ol
    const unSub = onSnapshot(q, ({ docs }) => {
      const temp = [];
      docs.forEach((doc) => temp.push({ id: doc.id, ...doc.data() }));

      setTweets(temp);
    });
    //kullanıcı sayfadan ayrılırsa abonelik durdur
    return () => unSub();
  }, []);

  return !tweets ? (
    <Loader designs="my-40" />
  ) : (
    tweets.map((tweet) => <Post key={tweet.id} tweet={tweet} />)
  );
};

export default List;
