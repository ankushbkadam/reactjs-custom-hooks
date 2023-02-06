import { useState, useCallback } from 'react';

const useToggle = (initialValue:boolean = false) => {
  const [state, setState] = useState<boolean>(initialValue);
  
  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);
  
  return [state, toggle, setState] as const;
};

export default useToggle;