### types of hooks
there are two major hooks - useEffect and useState
and hooks are less necessary
### hooks that improve performance

#### useMemo :  useMemo is a React Hoom that lets you cache the result of a calculation between re-renders
```
const cacheValue = useMemo(calculateValue,dependency) 