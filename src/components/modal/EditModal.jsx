import React, { useState } from "react";
import Modal from "./index";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import uploadToStorage from "../../firebase/uploadToStorage";
import { toast } from "react-toastify";
import Loader from "../loader/index";

const EditModal = ({ isOpen, tweet, close }) => {
  const [isPicDelete, setIsPicDelete] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target[0].value.trim();
    const file = e.target[1].files && e.target[1].files[0];

    if (!text && !file && !tweet.content.image) {
      toast.info("Lütfen içeriği belirleyin");
    }

    try {
      setIsLoading(true);

      const docRef = doc(db, "tweets", tweet.id);

      let updatedData = {
        "content.text": text,
        isEdited: true,
      };

      //foto silinecek
      if (isPicDelete) {
        updatedData["content.image"] = null;
      }
      //yeni foto yüklenecek
      if (file) {
        const imageUrl = await uploadToStorage(file);
        updatedData["content.image"] = imageUrl;
      }

      await updateDoc(docRef, updatedData);

      //modal kapat
      close();
    } catch (error) {
      console.log(error.message);
    }
    //stateleri  sıfırla
    setIsLoading(false);
    setIsPicDelete(false);
  };
  return (
    <Modal isOpen={isOpen} close={close}>
      <h1 className="text-2xl">Tweet'i Düzenle</h1>

      <form onSubmit={handleSubmit} className="flex flex-col mt-10">
        <label className="text-sm mb-3">Metni Değiştir</label>
        <textarea
          className=" input resize-y min-h-20 max-h-[250p] bg-black border border-zinc-700 text-secondary"
          defaultValue={tweet.content.text}
        />

        <label className="text-sm mt-8 mb-3">Fotoğrafı Değiştir</label>
        {!isPicDelete && tweet.content.image ? (
          <button
            onClick={() => setIsPicDelete(true)}
            type="button"
            className="button"
          >
            Resmi Kaldır
          </button>
        ) : (
          <input type="file" className="button" />
        )}

        <div className="flex justify-end gap-5 mt-10">
          <button
            onClick={() => close()}
            type="button"
            className="cursor-pointer"
          >
            Vazgeç
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-secondary text-black px-3 py-1 rounded-md hover:bg-secondary/60 transition cursor-pointer min-w-[80px"
          >
            {isLoading ? <Loader /> : "Kaydet"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
