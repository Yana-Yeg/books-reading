import * as React from "react";
import Rating from "@mui/material/Rating";
import ReviewModal from "../ReviewModal/ReviewModal";
import s from "./Summary.module.scss";
import MediaQuery from "react-responsive";

const Summary = ({ bookId, rating, feedback }) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const onModalOpen = () => {
    setModalOpen(true);
  };

  const onModalClose = (e) => {
    setModalOpen(false);
  };
  return (
    <>
      <MediaQuery minWidth={768}>
        <button onClick={onModalOpen} className={s.reviewBtn}>
          Резюме
        </button>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <div className={s.wrapper}>
          <div className={s.ratingWrepper}>
            <p className={s.ratingText}>Рейтинг : </p>
            <Rating
              name="half-rating-read"
              size="small"
              value={rating}
              precision={0.5}
              readOnly
            />
          </div>
          <div className={s.reviewBtnWrepper}>
            <button onClick={onModalOpen} className={s.reviewBtn}>
              Резюме
            </button>
          </div>
        </div>
      </MediaQuery>

      {modalOpen && (
        <ReviewModal
          bookRating={rating}
          bookId={bookId}
          modalOpen={modalOpen}
          onModalClose={onModalClose}
          coment={feedback}
        />
      )}
    </>
  );
};

export default Summary;
