import { useState } from "react";
import { uploadThumbnail } from "../helpers/restHelper";

const AddMediaForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [customProps, setCustomProps] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    try {
      const media = {
        title,
        description,
        tags,
        customProps,
        thumbnail,
        status,
      };
      console.log(media);
    } catch (error) {
      console.error(error);
    }
  };

  const onThumbnailUpload = async (file: File) => {
    try {
      const response = (await uploadThumbnail(file)) as {
        data: { path: string };
      };
      console.log(response);
      setThumbnail(response.data.path);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex justify-center mt-1">
        <div className="grid grid-cols-1 gap-1">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full max-w-xs input-sm"
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input input-bordered w-full max-w-xs input-sm"
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Tags</span>
              </div>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="tag1, tag2, tag3"
                className="input input-bordered w-full max-w-xs input-sm"
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Custom props</span>
              </div>
              <input
                type="text"
                value={customProps}
                onChange={(e) => setCustomProps(e.target.value)}
                placeholder="Please enter in key:value format"
                className="input input-bordered w-full max-w-xs input-sm"
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Thumbnail</span>
              </div>
              <input
                type="file"
                onChange={(e) => onThumbnailUpload(e.target.files[0])}
                className="file-input file-input-sm file-input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Status</span>
              </div>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="select select-sm select-bordered w-full max-w-xs"
              >
                <option>Seheduled</option>
                <option>Ready</option>
                <option>Error</option>
              </select>
            </label>
          </div>
          <br />
          <div className="flex justify-end">
            <button
              className="btn btn-sm btn-info"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMediaForm;
