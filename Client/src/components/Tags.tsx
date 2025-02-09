import { allTags } from "../helpers/constants";

interface TagsProps {
  selectedTags: string[];
  callbackSelectedTags: (tags: string[]) => void;
}

interface Tag {
  id: number;
  name: string;
  selected: boolean;
}

const setSelectedTags = (selectedTags: string[], allTags: Tag[]) => {
  return allTags.map((tag) => {
    return {
      ...tag,
      selected: selectedTags.includes(tag.name),
    };
  });
};

const Tags = ({ selectedTags, callbackSelectedTags }: TagsProps) => {
  const tags = setSelectedTags(selectedTags, allTags);

  const prepareSelectedTags = (tags: Tag[]) => {
    const selectedTags = tags
      .filter((tag) => tag.selected)
      .map((tag) => tag.name);
    callbackSelectedTags(selectedTags);
  };
  return (
    <>
      <div className="border rounded-lg">
        {/* Tags shoul be auto adjust based on the size */}
        <div className="m-3 flex flex-wrap">
          {tags.map((tag, index: number) => (
            <div key={tag.id} className="">
              <label className="swap ">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  checked={tag.selected}
                  onChange={(e) => {
                    const newTags = [...tags];
                    newTags[index].selected = e.target.checked;
                    prepareSelectedTags(newTags);
                  }}
                />

                <div className="swap-off border border-blue-600 bg-blue-100 text-blue-600 rounded-3xl m-1">
                  <div className="px-2 py-1">{tag.name}</div>
                </div>
                <div className="swap-on bg-blue-600 text-white rounded-3xl m-1">
                  <div className="px-2 py-1">{tag.name}</div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tags;
