import UserAvatar from "./UserAvatar";
import TextArea from "./TextArea";
import FormAction from "./FormAction";
import { useRef, useState } from "react";
import ImagePreview from "./ImagePreview";
import { toast } from "react-toastify";
import uploadToStorage from "../../firebase/uploadToStorage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const FeedForm = ({ user }) => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef();

  //resim önzilemesi
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  //
  const clearImage = () => {
    setImage(null);
    if (fileInputRef.current.value) {
      fileInputRef.current.value = "";
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    //inputlardan verileri  al
    const text = e.target.text.value;
    const file = e.target.image.files[0];

    if (!text && !file) return toast.warning("Lütfen içeriği belirleyiniz");

    try {
      setIsLoading(true);

      //resim varsa storage'a yükle
      const url = await uploadToStorage(file);
      //tweets koleksiyon ref
      const collectionRef = collection(db, "tweets");

      //tweet belgeyi koleksiyona kaydet
      await addDoc(collectionRef, {
        content: {
          text,
          image: url,
        },
        isEdited: false,
        likes: [],
        createdAt: serverTimestamp(),
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
      });

      //formu temizle
      e.target.reset();
      clearImage();
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  return (
    <div className="border-b border-tw-gray p-4 flex gap-3">
      <UserAvatar photo={user.photoURL} name={user.displayName} />

      <form onSubmit={handleSubmit} className="w-full pt-1">
        <TextArea />

        <ImagePreview image={image} clearImage={clearImage} />

        <FormAction
          isLoading={isLoading}
          onImageChange={onImageChange}
          fileInputRef={fileInputRef}
        />
      </form>
    </div>
  );
};

export default FeedForm;
