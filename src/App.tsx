import React, { useState } from 'react';
import recipes from './recipes';
import RecipeList from './components/RecipeList';

const App: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div className="mx-auto w-2/3 p-4 place-content-center ">
      <input
        type="text"
        placeholder="Search recipes..."
        className="p-2 mb-4 mx-10 w-2/3 border border-gray-300 rounded"
        value={searchKeyword}
        onChange={handleSearch}
      />
      <RecipeList recipes={recipes} searchKeyword={searchKeyword} />
    </div>
  );
};

export default App;
