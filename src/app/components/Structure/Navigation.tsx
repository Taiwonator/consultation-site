import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={cx('px-8 py-16 flex justify-between items-center max-w-5xl mx-auto',)}>
        <li>
          <Link 
            href="https://www.heliosx.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="font-mono font-bold"
            >
              <Image
                src="/zh_blue_logo.png"
                alt="Zip Health"
                width={180}
                height={50}
                priority
                className="rounded-full"
              />
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;