import { useEffect } from 'react';

// useeffect is not onl used for calling api, we can also use 'useeffect' for dom manipulation
//in fact hooks manipulate dom internally, thats why we dont need to manipulate dom directly in REACT. But here we are creating a custom hook.
const useTitle = (title) => {
  useEffect(() => {
    document.title = `Disney Palace | ${title}`;
    console.log(title);
  }, [title]);
};

export default useTitle;
