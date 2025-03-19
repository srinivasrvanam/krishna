const CustomButton = ({target, link, text}) => {

  target = target === undefined ? '_blank' : target;
  
    return (
      <a
          class="btn btn-warning btn-sm"
          target={target} rel="noopener noreferrer"
          href={link}
        >{text}</a>
    );
  };
  
  export default CustomButton;
  