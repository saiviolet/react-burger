import PropTypes from 'prop-types';
function MenuItem ({icon, link, stylesComp, stylesText, title}) {

    return (
      <li className={stylesComp}>
        {icon}
        <a href={link} className={stylesText}>{title}</a>
      </li>
    );
  }
  
  MenuItem.propTypes = {
    id: PropTypes.string,
    icon: PropTypes.element,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    stylesComp: PropTypes.string,
    stylesText: PropTypes.string,
  };


export default MenuItem 