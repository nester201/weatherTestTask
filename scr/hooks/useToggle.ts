import {useCallback, useState} from 'react';

const useToggle = (defaultValue = false) => {
  const [on, setOn] = useState(defaultValue);
  const toggle = useCallback(() => setOn(prevState => !prevState), []);
  const toggleOn = useCallback(() => setOn(true), []);
  const toggleOff = useCallback(() => setOn(false), []);

  return {on, toggle, toggleOff, toggleOn};
};

export default useToggle;
