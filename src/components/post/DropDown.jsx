import React, { useRef, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { auth, db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import EditModal from "../modal/EditModal";

const DropDown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const checkboxRef = useRef();
  //yetkilendirme herkes kendi  tweetine düzenleme yapabilir
  const isOwn = tweet.user.id === auth.currentUser.uid;

  const handleClick = () => {
    if (!confirm("Kaldırmak istediğinizden emin misiniz?")) return;

    const docRef = doc(db, "tweets", tweet.id);

    deleteDoc(docRef).then(() => toast.info("Tweet akıştan kaldırıldı"));
  };
  return (
    isOwn && (
      <>
        <label className="popup">
          <input ref={checkboxRef} type="checkbox" />
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="popup-window">
            <legend>Eylemler</legend>
            <ul>
              <li>
                <button
                  onClick={() => {
                    //modal aç
                    setIsOpen(true);
                    //dropdown kapat
                    checkboxRef.current.checked = false;
                  }}
                >
                  <MdEdit className="text-blue-500 text-base" />
                  <span>Düzenle</span>
                </button>
              </li>
              <hr />
              <li>
                <button onClick={handleClick}>
                  <MdDelete className="text-red-500 text-base" />
                  <span>Delete</span>
                </button>
              </li>
            </ul>
          </nav>
        </label>

        <EditModal
          isOpen={isOpen}
          tweet={tweet}
          close={() => setIsOpen(false)}
        />
      </>
    )
  );
};

export default DropDown;
