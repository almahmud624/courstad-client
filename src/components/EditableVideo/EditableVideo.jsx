import { useEffect, useState } from "react";
// import {
//   useAddVideoMutation,
//   useEditVideoMutation,
//   useGetVideoQuery,
// } from "../../features/videos/videosApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/videos/videosApi";
import DashboardLayout from "../../Layout/DashboardLayout";
// import { ErrorDialog } from "../ErrorDialog/ErrorDialog";

export const EditableVideo = () => {
  // const [
  //   addVideo,
  //   { isSuccess: addSuccess, isError: addError, isLoading: addLoading },
  // ] = useAddVideoMutation();
  // const [
  //   editVideo,
  //   { isSuccess: editSuccess, isError: editError, isLoading: editLoading },
  // ] = useEditVideoMutation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [views, setViews] = useState("");
  const [duration, setDuration] = useState("");
  const [err, setErr] = useState({});
  const { videoId } = useParams();
  const { data: video } = useGetVideoQuery(videoId);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // mutation response shown by conditionally
  // const isSuccess = addSuccess || editSuccess;
  // const isError = addError || editError;
  // const isLoading = addLoading || editLoading;

  // checking form validation
  const formValidation = (url, duration, views) => {
    let formErr = {};
    if (!/https?:\//.test(url)) {
      formErr = { ...formErr, url: "Url is invalid!" };
    }
    if (!/^\d{1,2}(:\d{1,2})?$/.test(duration)) {
      formErr = { ...formErr, duration: "Duration is invalid!" };
    }
    if (!/\d*\.\d*k|\d+k/.test(views)) {
      formErr = { ...formErr, views: "Views is invalid!" };
    }
    setErr(formErr);
    return formErr;
  };

  // add & edit video
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErr = formValidation(url, duration, views);
    if (Object.keys(formErr).length !== 0) return;
    const createdAt = new Date(Date.now()).toJSON();
    const videoData = { title, description, url, views, duration };
    if (pathname === "/admin/video/add") {
      videoData.createdAt = createdAt;
      // addVideo(videoData);
    } else {
      videoData.createdAt = video?.createdAt;
      // editVideo({ videoId, videoData });
    }
  };

  useEffect(() => {
    // if (isSuccess) {
    //   navigate("/admin/videos");
    // }
    if (video?.id) {
      const { title, description, views, duration, url } = video || {};
      setTitle(title);
      setDescription(description);
      setDuration(duration);
      setViews(views);
      setUrl(url);
    }
  }, [video, navigate]);

  return (
    <>
      <DashboardLayout>
        {" "}
        <section className="">
          <div className="mx-auto max-w-lg px-5 lg:px-0">
            <div>
              <h2 className="my-6 text-center text-3xl font-extrabold text-slate-100">
                Add new video
              </h2>
            </div>
            <form className="py-5" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Video title<sup className="text-red-600 font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="lorem ipsum dolar emmet"
                  value={title}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Description<sup className="text-red-600 font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="lorem ipsum dolar emmet"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="url"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Url<sup className="text-red-600 font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="https://example.com"
                  value={url}
                  required
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setErr({});
                  }}
                />
              </div>
              {/* {err?.url && <ErrorDialog message={err?.url} />} */}
              <div className="mb-6">
                <label
                  htmlFor="views"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Views<sup className="text-red-600 font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="views"
                  name="views"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="12.4k"
                  value={views}
                  required
                  onChange={(e) => {
                    setViews(e.target.value);
                    setErr({});
                  }}
                />
              </div>
              {/* {err?.views && <ErrorDialog message={err?.views} />} */}
              <div className="mb-6">
                <label
                  htmlFor="duration"
                  className="block mb-2 text-sm font-medium text-gray-100 dark:text-white"
                >
                  Duration<sup className="text-red-600 font-bold">*</sup>
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="12:12"
                  value={duration}
                  required
                  onChange={(e) => {
                    setDuration(e.target.value);
                    setErr({});
                  }}
                />
              </div>
              {/* {err?.duration && <ErrorDialog message={err?.duration} />} */}
              <button
                type="submit"
                className="text-white border border-2 border-green-600 hover:bg-green-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-500 mb-5"
                // disabled={isLoading}
              >
                Submit
              </button>
            </form>
            {/* {isError && <ErrorDialog message={"There was an error"} />} */}
          </div>
        </section>
      </DashboardLayout>
    </>
  );
};
