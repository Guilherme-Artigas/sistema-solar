import Image from 'next/image';
import logo from '../images/logo-sistema-solar.svg';

export default function Header() {
  return (
    <header className='flex justify-center mt-10 mb-24'>
      <Image
        src={logo}
        alt='logo sistema solar'
        className='h-5/6 w-5/6'
        data-testid='logo-sistema-solar'
      />
    </header>
  );
}
