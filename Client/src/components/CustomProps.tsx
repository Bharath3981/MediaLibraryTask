import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

interface CustomPropsType {
  selectedProps: any; // Replace 'any' with the appropriate type
  callbackSelectedProps: (
    action: string,
    updateString: string,
    keyOrValue?: string
  ) => void;
}

const CustomProps: React.FC<CustomPropsType> = ({
  selectedProps,
  callbackSelectedProps,
}) => {
  console.log(selectedProps);
  const [addPropKeyValue, setAddPropKeyValue] = useState("");
  const [addPropValueValue, setAddPropValueValue] = useState("");
  return (
    <>
      <div className="border rounded-lg">
        <div className="m-3">
          {/* Implement the UI for custom props */}
          <label className="text-lg">Custom Props</label>
          <div className="flex m-3">
            <div className="flex flex-col gap-2">
              {Object.keys(selectedProps).map((key) => (
                <div key={key} className="flex gap-2">
                  <div>
                    <input
                      type="text"
                      value={key}
                      readOnly={true}
                      className="input input-bordered w-full max-w-xs input-sm"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={selectedProps[key]}
                      onChange={(e) => {
                        callbackSelectedProps("update", key, e.target.value);
                      }}
                      className="input input-bordered w-full max-w-xs input-sm"
                    />
                    <div>
                      <a onClick={() => callbackSelectedProps("delete", key)}>
                        <MdDelete />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <br />
              <div className="flex gap-2">
                <div>
                  <input
                    type="text"
                    value={addPropKeyValue}
                    onChange={(e) => {
                      setAddPropKeyValue(e.target.value);
                    }}
                    placeholder="Key"
                    className="input input-bordered w-full max-w-xs input-sm"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={addPropValueValue}
                    onChange={(e) => {
                      setAddPropValueValue(e.target.value);
                    }}
                    placeholder="Value"
                    className="input input-bordered w-full max-w-xs input-sm"
                  />
                  <div>
                    <button
                      onClick={() => {
                        callbackSelectedProps(
                          "add",
                          addPropKeyValue,
                          addPropValueValue
                        );
                        setAddPropKeyValue("");
                        setAddPropValueValue("");
                      }}
                      className="btn btn-sm btn-neutral"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Use the selectedProps object to populate the fields */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomProps;
