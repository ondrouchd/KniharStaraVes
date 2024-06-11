# KniharStaraVes

## Tailwind command
```
npx tailwindcss -i ./src/index.css -o ./dist/output.css -- watch
```

## Use phoneicon
```
npm install @heroicons/react
```


```
import { PhoneIcon } from '@heroicons/react/solid';

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <PhoneIcon className="h-6 w-6 text-blue-500" />
    </div>
  );
}

export default App;
```