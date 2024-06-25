'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';
// import { useQuery } from 'react-query';
import useStore from '../../store/store';
// import FetchSuggestions from '../fetchSuggestions/FetchSuggestions';
// import { ISuggestion } from '@/types/suggestion';

const FormulaInput: React.FC = () => {
  const { formula, setFormula } = useStore();
  const [inputValue, setInputValue] = useState<string>('');

  //   const {
  //     data: suggestions,
  //     isLoading,
  //     isError,
  //     refetch,
  //   } = useQuery<ISuggestion[], Error>(['suggestions', inputValue], () =>
  //     FetchSuggestions(inputValue),
  //   );

  //   useEffect(() => {
  //     if (inputValue) {
  //       refetch();
  //     }
  //   }, [inputValue, refetch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFormula(value);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    const newFormula = formula + suggestion;
    setFormula(newFormula);
    setInputValue('');
  };

  //   if (isLoading) return <div>Loading...</div>;
  //   if (isError) return <div>Error fetching suggestions</div>;

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите формулу..."
      />
      {/* {suggestions && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSelectSuggestion(suggestion.text)}>
              {suggestion.text}
            </li>
          ))}
        </ul>
      )} */}
      <div>Формула: {formula}</div>
    </div>
  );
};

export default FormulaInput;
