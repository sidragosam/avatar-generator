import React, { useState } from "react";
import Axios from "axios";
import SpriteSelector from "./SpriteSelector";
import AvatarButtons from "./AvatarButtons";

const Avatar = () => {
  const [sprite, setSprite] = useState<string>("bottts");
  const [seed, setSeed] = useState<number>(Math.random() * 1000);

  function handleSprite(event: React.ChangeEvent<HTMLSelectElement>) {
    setSprite(event.target.value);
    setSeed(Math.random() * 1000);
  }

  function handleGenerate() {
    const x = Math.floor(Math.random() * 1000);
    setSeed(x);
  }

  function downloadImage() {
    Axios({
      method: "get",
      url: `https://api.dicebear.com/9.x/${sprite}/svg?seed=${seed}`,
      responseType: "arraybuffer",
    })
      .then((response) => {
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(
          new Blob([response.data], { type: "application/octet-stream" })
        );
        link.download = `${seed}.svg`;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(link.href);
        }, 200);
      })
      .catch((error) => {
        console.error("Error downloading the image", error);
      });
  }

  return (
    <div className="container mx-auto p-4">
      <div className="nav text-center mb-4">
        <p className="text-2xl font-bold">Random Avatar Generator</p>
      </div>
      <div className="home">
        <div className="flex justify-center mb-4">
          <SpriteSelector sprite={sprite} handleSprite={handleSprite} />
        </div>
        <div className="avatar flex justify-center mb-4">
          <img
            src={`https://api.dicebear.com/9.x/${sprite}/svg?seed=${seed}`}
            alt="Sprite"
            className="w-32 h-32"
          />
        </div>
        <div className="generate flex justify-center space-x-2">
          <AvatarButtons
            handleGenerate={handleGenerate}
            downloadImage={downloadImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
