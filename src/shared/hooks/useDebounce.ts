import { useEffect, useState } from 'react';

export default function useDebounce<T>(value: T, delay = 2500): T {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const timeOut = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(timeOut)
    }, [value, delay])

  return debounceValue
}
