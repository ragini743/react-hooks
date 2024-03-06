### types of hooks
there are two major hooks - useEffect and useState
and hooks are less necessary
### hooks that improve performance

#### useMemo :  useMemo is a React Hoom that lets you cache the result of a calculation between re-renders
```
const cacheValue = useMemo(calculateValue,dependency) ;
when calculateValue is a callback function and dependency is a  dependency which is affect the callback function
```

### what is useCallback hook?
#### useCallback : it is lets you cache a function definition between the re-renders .
```
const cachedFn = useCallBack(Fn, dependencies)



```

### what is useRef hook ?
it is lets you reference a value that's not needed for rendering .
```
const ref = useRef(initialValue)

```