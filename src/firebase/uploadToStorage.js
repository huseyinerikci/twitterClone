import { toast } from "react-toastify";
import { storage } from "./index";
import { v4 } from "uuid";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

const uploadToStorage = async (file) => {
  //dosya yoksa veya dosya resim değilse durdur

  if (!file || !file.type.startsWith("image")) return null;

  //max dosya boyutu <2mb
  if (file.siz > 2097152) {
    toast.error("Lütfen 2mb'ın altında bir medya yükleyin");
    throw new Error("Medya boyutu aşmaktadır");
  }
  //dosyanın yükleneceği konum referansı
  const imageRef = ref(storage, v4() + file.name);

  //referansı oluşan konuma dosya yükleme
  await uploadBytes(imageRef, file);

  //yüklenen dosyayı al ve return et
  const url = await getDownloadURL(imageRef);

  return url;
};

export default uploadToStorage;
