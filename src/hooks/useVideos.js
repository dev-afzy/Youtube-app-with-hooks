import { useEffect, useState } from 'react';
import youtube from '../apis/youtube.js';

const KEY = 'AIzaSyAydF2UPyJ2xoTUh3Y77OhtX5bi8GNARVc';
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (SearchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: SearchTerm,
        type: 'video',
        part: 'snippet',
        maxResults: 5,
        key: KEY,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
