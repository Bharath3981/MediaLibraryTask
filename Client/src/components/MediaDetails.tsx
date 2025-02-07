import { useLocation } from "react-router-dom";
import AddMediaForm from "./AddMediaForm";

const MediaDetails = () => {
  const location = useLocation();
  const media = location.state;
  console.log(media);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="card bg-base-100 w-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Media Details</h2>

            <AddMediaForm existingMedia={media.media} />
          </div>
        </div>

        <div className="card bg-base-100 w-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Tags & Custom Props</h2>
            <div className="border rounded-lg">
              <div className="m-3">
                <span>
                  <label className="swap">
                    <input type="checkbox" />
                    <div className="swap-on">ON</div>
                    <div className="swap-off">OFF</div>
                  </label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
