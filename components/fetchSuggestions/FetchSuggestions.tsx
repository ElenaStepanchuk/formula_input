import { ISuggestion } from '@/types/suggestion';
import axios from 'axios';
import math from 'mathjs';

// const API_KEY = process.env.NEXT_PUBLIC_FETCH_API_KEY;
// const URL = process.env.NEXT_PUBLIC_URL;

const FetchSuggestions = async (query: string): Promise<ISuggestion[]> => {
  // const url = `https://api.example.com/suggestions?query=${query}&apiKey=${API_KEY}`;

  // try {
  //   const { data } = await axios.get<ISuggestion[]>(url);
  //   return data;
  // } catch (error) {
  //   console.error('Error:', error);
  //   return [];
  // }
  const suggestions = math
    .parse(query)
    .filter(node => math.isSymbolNode(node))
    .map(node => node.name);

  return suggestions;
};

export default FetchSuggestions;
