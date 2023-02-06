import React from "react";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa"; 

import styles from "./Card.module.css";
import { group } from "console";

type cardsType = {
    title: string;
    likes: number;
    comments: number;
    author: string;
    image: string;
    alt: string;
    pageURL: string;
}

const Card: React.FunctionComponent<cardsType> = ({ title, likes, comments, author, image, alt, pageURL }) => {
  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime, "group"])}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.image} alt={alt} tabIndex={0} />
        </div>
        <div className={styles.badgeWrapper}>
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

          <div
            onClick={() => window.open(pageURL, '_blank')}
            className={classNames([styles.infoBadge, styles.badgeAnime, styles.counter])}
          >
            <FaInfoCircle/>
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <h1 className={classNames([styles.text, "group-hover:text-slate-800"])}>{`${title}`} by {`${author}`}</h1>
      </div>
    </div>
  );
};

export default Card;