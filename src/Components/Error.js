import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="rounded-2xl bg-white p-10 shadow-xl text-center max-w-lg w-full">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Oops! Something Went Wrong
        </h2>

        <p className="mt-2 text-gray-600">
          We can't find the page you're looking for.
        </p>

        {err && (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-left">
            <p className="font-semibold text-red-600">
              {err.status} : {err.statusText}
            </p>
          </div>
        )}

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-8 rounded-lg bg-orange-500 px-6 py-3 text-white font-semibold transition duration-300 hover:bg-orange-600"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
