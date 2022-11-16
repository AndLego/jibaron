import React from "react";
import styles from "./CreateContainer.module.css";
import { motion } from "framer-motion";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../../firebase.config";

import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import { categories } from "../../utils/data";
import { Loader } from "../Loader/Loader";
import { saveItem } from "../../utils/firebaseFunctions";
import { useStateValue } from "../../context/StateProvider";
import { getAllFoodItems } from "../../utils/firebaseFunctions";
import { actionType } from "../../context/reducer";

const CreateContainer = () => {
  const title = React.useRef("");
  const category = React.useRef(null);
  const calories = React.useRef("");
  const price = React.useRef("");
  const [imageAsset, setImageAsset] = React.useState(null);

  const [fields, setFields] = React.useState(false);
  const [alertStatus, setAlertStatus] = React.useState("danger");
  const [msg, setMsg] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [{ foodItems }, dispatch] = useStateValue();

  /**
   * It uploads an image to firebase storage and returns the download url of the image.
   */
  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error(error);
        setFields(true);
        setMsg("Error while uploading :  Try Again 🙏🏻");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  /**
   * When the delete button is clicked, the image is deleted from the firebase storage and the imageAsset
   * state is set to null.
   */
  const deleteImg = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  /**
   * It takes in the event object, prevents the default action, sets the loading state to true, and then
   * checks if the required fields are empty. If they are, it sets the fields state to true, sets the
   * message state to "Required fields can't be empty", sets the alert status to "danger", and then sets
   * the fields state to false and the loading state to false after 4 seconds.
   *
   * If the required fields are not empty, it creates a data object, saves the item, sets the loading
   * state to false, sets the fields state to true, sets the message state to "Data uploaded
   * successfully 😊", sets the alert status to "success", clears the data, and then sets the fields
   * state to false after 4 seconds.
   *
   * If there is an error, it sets the fields state to true, sets the message state to "Error while
   * uploading :  Try Again 🙏🏻", sets the alert status to
   */
  const saveDetails = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title.current.value,
          imageURL: imageAsset,
          category: category.current.value,
          calories: calories.current.value,
          qty: 1,
          price: price.current.value,
        };
        saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data uploaded successfully 😊");
        setAlertStatus("success");
        clearData(e);
        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (err) {
      console.error(err);
      setFields(true);
      setMsg("Error while uploading :  Try Again 🙏🏻");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
    fetchData();
  };

  /**
   * When the user clicks the clear button, clear the imageAsset state and reset the form.
   */
  const clearData = (e) => {
    setImageAsset(null);
    e.target.reset();
  };

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  return (
    <div className={styles.Create}>
      <form onSubmit={saveDetails}>
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${styles.status} ${
              alertStatus === "danger" ? styles.danger : styles.cool
            }`}
          >
            {msg}
          </motion.p>
        )}

        <div className={styles.title}>
          <MdFastfood />
          <input
            type="text"
            required
            ref={title}
            placeholder="Give me a title..."
          />
        </div>

        <div className={styles.category}>
          <select required ref={category} name="" id="">
            <option value="">Select Category</option>
            {categories &&
              categories.map((item) => (
                <option key={item.id} value={item.urlParamName}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className={styles.upload}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label htmlFor="uploadimage">
                    <div>
                      <MdCloudUpload />
                      <p>Click here to upload</p>
                    </div>
                    <input
                      required
                      id="uploadimage"
                      type="file"
                      name="uploadimage"
                      accept="image/*"
                      onChange={uploadImage}
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className={styles.uploaded}>
                    <img src={imageAsset} alt="uploaded image" />
                    <button type="button" onClick={deleteImg}>
                      <MdDelete />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className={styles.caloriesAndPrice}>
          <div className={styles.title}>
            <MdFoodBank />
            <input
              type="number"
              required
              ref={calories}
              placeholder="Calories"
              step="0.01"
            />
          </div>
          <div className={styles.title}>
            <MdAttachMoney />
            <input
              type="number"
              required
              ref={price}
              placeholder="Price"
              step="0.01"
            />
          </div>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export { CreateContainer };
