import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
          throw new Error("Failed to fetch dog image");
        }
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error("Error while fetching dog image:", error.message);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
