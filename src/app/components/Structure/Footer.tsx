import cx from 'classnames'

const Footer: React.FC = () => {
  return (
    <footer className={cx(
      'mt-16 px-4 space-y-4 text-center bg-black-500',
      'md:grid md:grid-flow-col md:grid-cols-2 md:mt-16 md:items-center md:justify-center md:h-16 md:bg-black-500',
      )}>
      <p>© ZipHealth Services Inc. 2024</p>
      <p>Michael Taiwo</p>
    </footer>
  );
}

export default Footer;
