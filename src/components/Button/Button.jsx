import Loader from "./../Loader/Loader";

const Button = ({ isLoading, isEdit }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button disabled={isLoading} type="submit">
            {isEdit ? "Update" : "Submit"}
          </button>
        </>
      )}
    </>
  );
};

export default Button;
