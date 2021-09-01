import { ReactComponent as SetaIcon } from "assets/images/Seta.svg";
import "./styles.css";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <SetaIcon className="seta-previous seta-inactive"/>
      <div className="pagination-item active">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">...</div>
      <div className="pagination-item">10</div>
      <SetaIcon className="seta-next seta-active"/>
    </div>
  );
};
export default Pagination;
