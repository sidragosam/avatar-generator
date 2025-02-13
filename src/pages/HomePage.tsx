import Avatar from "../components/Avatar";

const HomePage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-center">
        Generate Your Avatar
      </h1>
      <div className="card bg-white dark:bg-gray-600/50 p-4 rounded shadow max-w-md mx-auto">
        <Avatar />
        <p className="text-center">
          Create unique avatars with our easy-to-use generator. Customize your
          avatar and save it for later use.
        </p>
      </div>
    </>
  );
};

export default HomePage;
