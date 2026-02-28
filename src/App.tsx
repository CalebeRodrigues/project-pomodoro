import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo 2{' '}
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sapiente
        odit hic iste, perspiciatis, voluptatibus facere ipsa non reprehenderit
        modi ipsam, quaerat quod. Eveniet tempore velit ipsa iusto officiis
        facere?
      </p>
    </>
  );
}
