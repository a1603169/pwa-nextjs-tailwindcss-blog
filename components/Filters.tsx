type FiltersProps = {
  tags: Object;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
};

export default function Filters({
  tags,
  selectedTags,
  setSelectedTags,
}: FiltersProps) {
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <>
      <div className="w-3/4 duration-300 flex gap-2 mb-2 flex-wrap justify-center cursor-pointer max-md:text-lg">
        {Object.entries(tags).map(([key, value], idx) => {
          const isSelected = selectedTags.includes(key);
          return (
            <div
              key={idx}
              className={`flex grow items-center justify-center gap-2 border-2 border-solid border-indigo-300 p-2 rounded-lg ${
                isSelected ? "bg-indigo-300 text-white" : ""
              } max-sm:tex` }
              onClick={() => handleTagClick(key)}
            >
              {key}({value})
            </div>
          );
        })}
        {selectedTags.length > 0 && (
        <button
          className="duration-300 flex items-center justify-center grow px-4 py-2 bg-red-300 text-white rounded-lg hover:bg-red-500"
          onClick={() => setSelectedTags([])}
        >
          Clear
        </button>
      )}
      </div>
      
    </>
  );
}
