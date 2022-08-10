import Styles from "../styles/wraper.module.css";

const Wrapper = ({ childeren }) => {
  return <div className={Styles.container}>{childeren}</div>;
};

export default Wrapper;
