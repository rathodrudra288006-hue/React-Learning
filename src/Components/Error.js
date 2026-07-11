import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops,Something Went Wrong.....</h1>
      <h2>We Can't Find You Looking Here</h2>
      <h2>404:Page Not Found</h2>
    </div>
  );
};
export default Error;
