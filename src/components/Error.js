import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      {" "}
      Invalid url {err.status}: {err.statusText}
    </div>
  );
};
export default Error;
