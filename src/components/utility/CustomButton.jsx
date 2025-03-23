const CustomButton = ({target, link, text}) => {

  target = target === undefined ? '_blank' : target;
  
    return (
      <a
          className="bg-yellow-500 dark:text-gray-900 px-4 py-0.5 rounded-full shadow-lg hover:bg-yellow-400 focus:outline-none transition duration-300 cursor-pointer"
          target={target} rel="noopener noreferrer"
          href={link}
        >{text}</a>
    );
  };
  
  export default CustomButton;
  