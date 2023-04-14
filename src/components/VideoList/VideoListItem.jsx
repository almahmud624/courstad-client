import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
export const VideoListItem = ({ video = {}, courseName }) => {
  const { _id, title, duration } = video;
  return (
    <>
      <div className="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2 py-3">
        <BsFillPlayFill className="text-gray-500" />
        <div clas="flex flex-col w-full">
          <Link to={`/course-video/${courseName}/${_id}`}>
            <p className="text-slate-50 text-sm font-medium">{title}</p>
          </Link>
          <div>
            <span className="text-gray-400 text-xs mt-1">{duration} Mins</span>
          </div>
        </div>
      </div>
    </>
  );
};
