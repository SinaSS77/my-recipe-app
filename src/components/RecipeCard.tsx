import React from 'react';

interface RecipeProps {
  name: string;
  description: string;
  searchKeyword: string;
}

const RecipeCard: React.FC<RecipeProps> = ({ name, description, searchKeyword }) => {
  const highlightKeyword = (text: string) => {
    const regex = new RegExp(`(${searchKeyword})`, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  return (
    <div className="p-4 border border-gray-300 rounded mb-4 mx-10 bg-black shadow-[0_7px_5px_rgba(300,_80,_10,_0.3)]">
      <h2 className=' text-red-600' dangerouslySetInnerHTML={{ __html: highlightKeyword(name) }} />
      <p className=' text-white' dangerouslySetInnerHTML={{ __html: highlightKeyword(description) }} />
    </div>
  );
};

export default RecipeCard;
