import React from "react";
import classNames from "classnames";

//Icon imports
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa"; 

import styles from "./Card.module.css";
import { group } from "console";

//Set typing for card attributes
type cardsType = {
    title: string;
    likes: number;
    comments: number;
    author: string;
    image: string;
    alt: string;
    pageURL: string;
}

//Card creation
const Card: React.FunctionComponent<cardsType> = ({ title, likes, comments, author, image, alt, pageURL }) => {
  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime, "group"])}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.image} alt={alt} tabIndex={0} />
        </div>

        {/* Hoverable badges under image */}
        <div className={styles.badgeWrapper}>
            {/* Likes counter */}
          <div
            className={classNames([styles.dangerBadge, styles.badgeAnime])}
          >
            <AiFillHeart />
            <span
              className={classNames([styles.counter])}
            >
              {likes}
            </span>
          </div>

            {/* Comments counter */}
          <div
            className={classNames([
              styles.primaryBadge,
              styles.badgeAnime,
            ])}
          >
            <BsChatSquareFill />
            <span
              className={classNames([styles.counter])}
            >
              {comments}
            </span>
          </div>

            {/* Redirect to original image page */}
          <div
            onClick={() => window.open(pageURL, '_blank')}
            className={classNames([styles.infoBadge, styles.badgeAnime, styles.counter])}
          >
            <FaInfoCircle/>
          </div>
        </div>
      </div>

            {/* "Title" of image + author */}
      <div className={styles.textWrapper}>
        <h1 className={classNames([styles.text, "group-hover:text-slate-800"])}>{`${title}`} by {`${author}`}</h1>
      </div>

    </div>
  );
};

export default Card;