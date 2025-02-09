import { useRef, useState } from "react";
import { uploadThumbnail } from "../helpers/restHelper";
import { addMedia, updateMedia } from "../helpers/restHelper";
import { pushMedia, updatedMediaById } from "../helpers/slices/mediaSlice";
import { useDispatch } from "react-redux";

interface AddMediaFormProps {
  existingMedia: any; // Replace 'any' with the appropriate type if known
  isNew: boolean;
}

const AddMediaForm: React.FC<AddMediaFormProps> = ({
  existingMedia,
  isNew,
}) => {
  const isExistingMedia = !isNew;
  console.log(existingMedia, isExistingMedia);
  const [title, setTitle] = useState(existingMedia.title);
  const [description, setDescription] = useState(existingMedia.description);
  const [customProps, setCustomProps] = useState(
    (existingMedia.customProps || {}) as any
  );
  const [status, setStatus] = useState(existingMedia.status || "Scheduled");
  const tags = existingMedia?.tags ? existingMedia.tags : [];
  const selectedThumbnail = useRef<File | null>(null);
  const thumbnail = existingMedia?.thumbnail ? existingMedia.thumbnail : "";
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const media: {
        title: string;
        description: string;
        tags: any;
        thumbnail: string;
        status: string;
        customProps?: { [key: string]: string | boolean };
      } = {
        title,
        description,
        tags,
        thumbnail,
        status,
        customProps,
      };
      console.log(media);
      try {
        if (selectedThumbnail.current !== null) {
          const response = await uploadThumbnailFun();
          if (response.data.path) {
            media.thumbnail = response.data.path;
            if (isExistingMedia) {
              submitUpdateMedia(media);
            } else {
              submitMedia(media);
            }
          }
        } else {
          if (isExistingMedia) {
            submitUpdateMedia(media);
          } else {
            submitMedia(media);
          }
        }
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const uploadThumbnailFun = async () => {
    return (await uploadThumbnail(
      selectedThumbnail.current as unknown as File
    )) as {
      data: { path: string };
    };
  };

  const submitMedia = async (media: any) => {
    const submitResponse: any = await addMedia(media);
    if (submitResponse.data.id) {
      dispatch(pushMedia(submitResponse));
      alert("Media added successfully");
    }
  };

  const submitUpdateMedia = async (media: any) => {
    const submitResponse: any = await updateMedia(existingMedia.id, media);
    if (submitResponse.data.id) {
      dispatch(updatedMediaById(submitResponse));
      alert("Media Updated successfully");
    }
  };

  const onThumbnailSelected = (file: File) => {
    selectedThumbnail.current = file;
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCustomProps("");
    setStatus("");
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
                value={`${tags.length} tags selected`}
                readOnly={true}
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
                value={`${Object.keys(customProps).length} custom props added`}
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
                onChange={(e) => {
                  if (e.target.files) {
                    onThumbnailSelected(e.target.files[0]);
                  }
                }}
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
                <option>Scheduled</option>
                <option>Ready</option>
                <option>Error</option>
              </select>
            </label>
          </div>
          <br />
          <div className="flex justify-end">
            <button
              className="btn btn-sm btn-neutral mr-2"
              onClick={() => resetForm()}
            >
              Reset
            </button>
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
