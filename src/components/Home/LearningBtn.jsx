import PropTypes from 'prop-types';

function LearningBtn(props) {
  const {icon, nameToLearn, link} = props;
  return (
    <a href={link} className="inline-flex items-center justify-center p-2 md:px-4 text-xs font-bold text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 cursor-pointer">Learn {nameToLearn}&nbsp;{icon}</a>
  );
}

LearningBtn.propTypes = {
  icon: PropTypes.node.isRequired,
  nameToLearn: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default LearningBtn;
