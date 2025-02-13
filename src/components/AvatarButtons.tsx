interface AvatarButtonsProps {
  handleGenerate: () => void;
  downloadImage: () => void;
}

const AvatarButtons = ({
  handleGenerate,
  downloadImage,
}: AvatarButtonsProps) => {
  return (
    <>
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
    </>
  );
};

export default AvatarButtons;
