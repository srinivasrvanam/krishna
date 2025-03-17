const CustomButton = ({target, link, text}) => {

  target = target === undefined ? '_blank' : target;
  
    return (
      <a
          class="home"
          target={target} rel="noopener noreferrer"
          href={link}
        >{text}</a>
    );
  };
  
  export default CustomButton;
  