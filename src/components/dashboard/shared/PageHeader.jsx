const PageHeader = ({ title, subtitle }) => {
  return (
    <header>
      <h2 className='text-2xl lg:text-3xl font-bold'>{title}</h2>
      <p>{subtitle}</p>
    </header>
  );
};

export default PageHeader;