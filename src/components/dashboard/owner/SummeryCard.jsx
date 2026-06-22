const SummeryCard = ({ icon:Icon, title, value }) => {
  return (
    <div className='border font-bold p-6 rounded-2xl space-y-4'>
      <Icon className='text-2xl lg:text-3xl' />

      <h3 className="text-lg lg:text-xl">{title}</h3>

      <h4 className="text-3xl lg:text-4xl">{value}</h4>
    </div>
  );
};

export default SummeryCard;