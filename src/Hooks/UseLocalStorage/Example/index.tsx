import useLocalStorage from '../useLocalStorage';

// Usage
const Example = () => {
  const [name, setName] = useLocalStorage<string>('name', 'ak');

  return (
    <div>
      <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Example;
