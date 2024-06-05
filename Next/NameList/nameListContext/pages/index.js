import NamesList from '@/components/NamesList';
import AddName from '@/components/AddName';

export default function Home() {
  return (
    <div>
      <h1>Names List with Context API</h1>
      <AddName />
      <NamesList />
    </div>
  );
}
