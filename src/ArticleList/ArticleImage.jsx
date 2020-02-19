import React from "react";
import PropTypes from 'prop-types'
import styles from "./ArticleImage.module.css";

const ArticleImage = props => {
  return (
    <img className={styles.image} scr={props.image._url} alt={props.title}>

    </img>
  );
};

ArticleImage.propTypes = {
  image: PropTypes.object.isRequired
};

export default ArticleImage;
