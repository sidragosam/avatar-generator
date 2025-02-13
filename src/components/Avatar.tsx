import React, { useState } from "react";
import Axios from "axios";

const Avatar: React.FC = () => {
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
          <select
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onChange={handleSprite}
            value={sprite}
          >
            <option value="adventurer">Adventurer Human</option>
            <option value="adventurer-neutral">Adventurer Human Face</option>
            <option value="avataaars">Human</option>
            <option value="avataaars-neutral">Human Face</option>
            <option value="big-ears">Big Ears Human</option>
            <option value="big-ears-neutral">Big Ears Human Face</option>
            <option value="big-smile">Big Smile Human</option>
            <option value="croodles">Old Cartoon Human</option>
            <option value="croodles-neutral">Old Cartoon Human Face</option>
            <option value="dylan">00s Cartoon Human</option>
            <option value="lorelei">Artistic Human</option>
            <option value="lorelei-neutral">Artistic Human Face</option>
            <option value="micah">Modern Human</option>
            <option value="personas">Personas</option>
            <option value="pixel-art">Pixel Art Human</option>
            <option value="pixel-art-neutral">Pixel Art Human Face</option>
            <option value="bottts">Bots</option>
            <option value="bottts-neutral">Bots Face</option>
            <option value="fun-emoji">Fun Emoji</option>
            <option value="glass">Glass</option>
            <option value="icons">Icons</option>
            <option value="identicon">Identicon</option>
            <option value="rings">Rings</option>
            <option value="shapes">Shapes</option>
            <option value="thumbs">Thumbs</option>
          </select>
        </div>
        <div className="avatar flex justify-center mb-4">
          <img
            src={`https://api.dicebear.com/9.x/${sprite}/svg?seed=${seed}`}
            alt="Sprite"
            className="w-32 h-32"
          />
        </div>
        <div className="generate flex justify-center space-x-2">
          <button
            className="btn border-1 border-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
            id="gen"
            onClick={handleGenerate}
          >
            Randomize
          </button>
          <button
            className="btn border-1 border-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            id="down"
            onClick={downloadImage}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
