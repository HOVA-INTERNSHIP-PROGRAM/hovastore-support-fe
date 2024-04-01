import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className=" py-3 w-full flex justify-center items-center ">
      <HashLoader color="#581845" loading={true} size={20} />
    </div>
  );
};

export default Loading;
