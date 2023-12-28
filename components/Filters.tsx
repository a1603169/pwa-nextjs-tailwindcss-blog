import { useState } from 'react';

type FiltersProps = {
  tags: Object;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
};

export default function Filters({ tags, selectedTags, setSelectedTags }: FiltersProps) {
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="w-3/4 duration-300 flex gap-2 mb-2 flex-wrap justify-center cursor-pointer max-md:text-lg">
      {Object.entries(tags).map(([key, value], idx) => {
        const isSelected = selectedTags.includes(key);
        return (
          <div
            key={idx}
            className={`flex grow items-center justify-center gap-2 border-2 border-solid p-2 rounded-lg ${
              isSelected ? 'bg-indigo-300 text-white' : ''
            }`}
            onClick={() => handleTagClick(key)}
          >
            {key}({value})
          </div>
        );
      })}
    </div>
  );
}