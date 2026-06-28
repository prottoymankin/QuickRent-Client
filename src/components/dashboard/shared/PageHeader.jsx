const PageHeader = ({ title, subtitle }) => {
  return (
    <header>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>{title}</h2>
      <p>{subtitle}</p>
    </header>
  );
};

export default PageHeader;