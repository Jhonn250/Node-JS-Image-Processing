"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { getTest, loadData, uploadImagResize, uploadImage, uploadImageBW, uploadImageInvert } from "./API/imagesAPI";


export default function Home() {
  const [file, setFile] = useState();
  const [fileShow, setFileShow] = useState();
  const [fileShowReceived, setFileShowReceived] = useState(null);
  const [test, setTest] = useState();
  const [toggle, setToggle] = useState(false);
  const [option, setOption] = useState(0);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');



  function handleChange(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    setFileShow(URL.createObjectURL(e.target.files[0]));
    setToggle(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      console.error('Selecciona un archivo antes de enviar.');
      return;
    }
    const formData = new FormData();
    formData.append('image', file);

    try {
      alert("Imagen Enviada");
      if (option == 0) {
        const response = uploadImage(formData);
      }
      if (option == 1) {
        const response = uploadImageInvert(formData);
      }
      if (option == 2) {
        const respose = uploadImagResize(formData);
      }
      if (option == 3) {
        const response = uploadImageBW(formData);
      }

      if (!response.ok) {
        throw new Error('Error al cargar la imagen.');
      }
      // const responseData = await response.json();
      // setFileShowReceived(`http://localhost:4000/uploads/${responseData.file}`);
      // console.log(fileShowReceived);


    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
  };


  const loadData = async () => {
    await getTest()
      .then((res) => res.json())
      .then((data) => setTest(data))
      .catch((err) => console.log(err));
  }


  return (
    <main className={styles.main}>
      <div>
        <h1 style={{ marginBottom: "2%" }}>Image Converter</h1>
        <div className={styles.container}>

          <div className={styles.column}>
            <p>Add file:</p>
            <input type="file" onChange={handleChange} />
          </div>

          <div className={styles.column}>
            <p>Select an option:</p>
            <select value={option} onChange={e => setOption(e.target.value)}>
              <option value={0}>Normal Upload</option>
              <option value={1}>Invert Colors</option>
              <option value={2}>Change Size</option>
              <option value={3}>Black and White</option>
            </select>
            {/* {option == 1 && (
              <div>
                <form>
                  <label for>
                    Width
                    <input
                      type="width"
                      value={height}
                      onChange={(e) => setHeight(e)}
                    />
                  </label>
                </form>

                <div>
                  <h2>Values of the form</h2>
                  <p>Name: {height}</p>
                </div>
              </div>
            )} */}

          </div>
        </div>
      </div>
      {toggle && (<button onClick={handleSubmit} className={styles.button}>Upload Photo</button>)}

      <div className={styles.container}>

        <div className={styles.column}>
          <img src={fileShow} />
        </div>
        {fileShowReceived && (
          <div className={styles.column}>
            <img src={fileShowReceived} />
          </div>
        )}

      </div>
    </main>
  );
}
