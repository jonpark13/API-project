// CreateUser.js file
import { useState } from "react";
import { test } from "../store/session";
import { useDispatch, useSelector } from "react-redux";

const TestAws = () => {
  // for multuple file upload
const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(test({ images }))
      .then(() => {
        setImages([]);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

//   const updateFile = (e) => {
//     const file = e.target.files[0];
//     if (file) setImages(file);
//   };

//   for multiple file upload
    const updateFiles = (e) => {
      const files = e.target.files;
      setImages(files);
    };

  return (
    <div>
      <h1>AWS S3 Express-React Demo</h1>
      {errors.length > 0 &&
        errors.map((error) => <div key={error}>{error}</div>)}
      <form
        style={{ display: "flex", flexFlow: "column" }}
        onSubmit={handleSubmit}
      >
        {/* <label>
          <input type="file" onChange={updateFile} multiple/>
        </label> */}
        <label>
            Multiple Upload
            <input
              type="file"
              multiple
              onChange={updateFiles} />
          </label>
        <button type="submit">Create User</button>
      </form>
      <div>
        {user && (
          <div>
            <h1>{user.username}</h1>
            <img
              style={{ width: "150px" }}
              src={user.profileImageUrl}
              alt="profile"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestAws;