import React, { useEffect } from "react";
import { getMedia } from "../helpers/restHelper";
import AddMediaForm from "./AddMediaForm";

const Media = () => {
  const [media, setMedia] = React.useState([]);
  const fetchMedia = async () => {
    const response = await getMedia();
    console.log(response);
  };
  useEffect(() => {
    fetchMedia();
  }, []);
  return (
    <div>
      <div className="flex mb-3 justify-between">
        <div>
          <select className="select select-bordered w-full max-w-xs">
            <option>All</option>
            <option>Who shot first?</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              const modal = document.getElementById("my_modal_5");
              if (modal) {
                (modal as HTMLDialogElement).showModal();
              }
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
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="pt-1">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </td>
              <td>
                <div className="font-bold">Hart Hagerty</div>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Add Media</h3>
          <AddMediaForm />
          <div className="modal-action"></div>
        </div>
      </dialog>
    </div>
  );
};

export default Media;
