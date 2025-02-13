import React from "react";

interface SpriteSelectorProps {
  sprite: string;
  handleSprite: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SpriteSelector = ({ sprite, handleSprite }: SpriteSelectorProps) => {
  return (
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
  );
};

export default SpriteSelector;
