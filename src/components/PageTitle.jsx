import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return (
    <div className="bg-black/5 p-1 rounded-md title shadow-md">{title}</div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
