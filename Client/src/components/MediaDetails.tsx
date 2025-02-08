import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddMediaForm from "./AddMediaForm";
import Tags from "./Tags";
import CustomProps from "./CustomProps";

const MediaDetails = () => {
  const location = useLocation();
  const media = location.state.media || {};
  const isNew = location.state.isNew;
  console.log(location.state.media);
  const [existingMedia, setExistingMedia] = useState(media);

  const callbackSelectedTags = (tags: string[]) => {
    const tempMedia = { ...media };
    tempMedia.tags = tags;
    console.log(tempMedia);
    setExistingMedia(tempMedia);
  };

  interface Media {
    tags?: string[];
    customProps?: { [key: string]: any };
  }

  interface LocationState {
    media: Media;
  }

  const callbackSelectedProps = (
    action: string,
    key: string,
    value?: string
  ): void => {
    const tempMedia: Media = { ...media };
    if (action === "update") {
      if (tempMedia.customProps) {
        tempMedia.customProps[key] = value;
      } else {
        tempMedia.customProps = { [key]: value };
      }
    } else if (action === "add" && key !== "" && value !== "") {
      if (tempMedia.customProps) {
        tempMedia.customProps[key] = value;
      } else {
        tempMedia.customProps = { [key]: value };
      }
    } else if (action === "delete") {
      if (tempMedia.customProps) {
        delete tempMedia.customProps[key];
      }
    }
    setExistingMedia(tempMedia);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="card bg-base-100 w-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Media Details</h2>

            <AddMediaForm existingMedia={existingMedia || {}} isNew={isNew} />
          </div>
        </div>

        <div className="card bg-base-100 w-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Tags & Custom Props</h2>
            <Tags
              selectedTags={existingMedia.tags || []}
              callbackSelectedTags={callbackSelectedTags}
            ></Tags>
            <CustomProps
              selectedProps={existingMedia.customProps || {}}
              callbackSelectedProps={callbackSelectedProps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
