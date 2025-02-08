import React, { useEffect } from "react";
import { BASE_URL, getMedia } from "../helpers/restHelper";
import { useDispatch } from "react-redux";
import { addMedia } from "../helpers/slices/mediaSlice";
import { useSelector } from "react-redux";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { filterMediaByTag } from "../helpers/restHelper";
import { useNavigate } from "react-router-dom";
import { allTags } from "../helpers/constants";
import { MultiSelect } from "react-multi-select-component";

const Media = () => {
  const [media, setMedia] = React.useState([]);
  const dispatch = useDispatch();
  const medias = useSelector((state: any) => state.media);
  const [selectedTag, setSelectedTag] = React.useState([]);
  const multiSelectTags = allTags.map((tag) => {
    return { label: tag.name, value: tag.name };
  });
  const navigate = useNavigate();
  const fetchMedia = async () => {
    const response = await getMedia();
    console.log(response);
    dispatch(addMedia(response.data));
    setMedia(response.data);
  };
  useEffect(() => {
    fetchMedia();
  }, []);

  const onFilterChange = (filter: string) => {
    let filteredMedia = [];
    filteredMedia = filterMedia(media, filter);
    dispatch(addMedia(filteredMedia));
  };

  //write method to implement filter on media
  const filterMedia = (media: any, filter: string) => {
    return media.filter((item: any) => {
      return (
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.status.toLowerCase().includes(filter.toLowerCase())
      );
    });
  };

  const setTag = async (tag: string) => {
    setSelectedTag(tag);
    if (tag !== "All") {
      const response = await filterMediaByTag(tag);
      setMedia(response.data);
      dispatch(addMedia(response.data));
    } else {
      fetchMedia();
    }
    // if (tag === "All") {
    //   dispatch(addMedia(media));
    // } else {
    //   const filteredMedia = media.filter((item: any) => {
    //     return item.tags.toString().includes(tag);
    //   });
    //   dispatch(addMedia(filteredMedia));
    // }
  };

  if (!media) return;
  return (
    <div>
      <div className="flex mb-3 justify-between">
        <div className="flex gap-3 items-center">
          {/* <select
            value={selectedTag}
            onChange={(e) => setTag(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="All">All</option>
            {allTags.map((tag) => (
              <option key={tag.id} value={tag.name}>
                {tag.name}
              </option>
            ))}
          </select> */}
          <MultiSelect
            className="w-full max-w-xs h-30"
            options={multiSelectTags}
            value={selectedTag}
            onChange={setSelectedTag}
            labelledBy="Select"
          />
          <input
            type="text"
            onChange={(e) => onFilterChange(e.target.value)}
            placeholder="Search media by title or status"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              navigate("/media/details", {
                state: {
                  media: {
                    title: "",
                    thumbnail: "",
                    description: "",
                    status: "",
                    tags: [],
                    customProps: {},
                  },
                  isNew: true,
                },
              });
            }}
          >
            Add Media
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead>
            <tr className="bg-base-100 text-base-content">
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Status</th>
              <th>Tags</th>
              <th>Published Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {medias.map((item: any) => (
              <tr key={item.id} className="">
                <td className="pt-1">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={BASE_URL + "/" + item.thumbnail}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.title}</div>
                </td>
                <td>{item.status}</td>
                <td>{item.tags.toString()}</td>
                <td>{new Date(item.publishDate).toLocaleDateString()}</td>
                <td>
                  <Link
                    to="/media/details"
                    state={{ media: item, isNew: false }}
                  >
                    <GrView />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Media;
