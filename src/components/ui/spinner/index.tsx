import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className=" text-center py-[50px]">
      <BeatLoader
        color={"#5CB85C"}
        size={15}
        margin={2}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </div>
  );
};

export default Spinner;
