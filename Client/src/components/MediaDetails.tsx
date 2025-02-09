import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddMediaForm from "./AddMediaForm";
import Tags from "./Tags";
import CustomProps from "./CustomProps";

const MediaDetails = () => {
  const location = useLocation();
  const [media, setMedia] = useState(location.state.media || {});
  const isNew = location.state.isNew;

  const callbackSelectedTags = (tags: string[]) => {
    console.log(tags);
    const tempMedia = { ...media };
    tempMedia.tags = tags;
    setMedia(tempMedia);
  };

  interface Media {
    tags?: string[];
    customProps?: { [key: string]: any };
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
    setMedia(tempMedia);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="card bg-base-100 w-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Media Details</h2>

            <AddMediaForm existingMedia={media || {}} isNew={isNew} />
          </div>
        </div>

        <div className="card bg-base-100 w-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Tags & Custom Props</h2>
            <Tags
              selectedTags={media.tags || []}
              callbackSelectedTags={callbackSelectedTags}
            ></Tags>
            <CustomProps
              selectedProps={media.customProps || {}}
              callbackSelectedProps={callbackSelectedProps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
