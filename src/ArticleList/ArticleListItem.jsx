import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage"


const ArticleListItem = props => {
    return (
        <section className={styles.container}>
            <div>
                <ArticleImage url={props.article.image._url} title={props.article.title}/>
            </div>

            <div>
                <h1>{props.article.title}</h1>
                <p>{props.article.shortText}</p>
                <time dateTime={props.article.pubYear}>{props.article.pubDate}</time>
            </div>

            <div id="button">
                {<SlugButton slug={props.article.slug} buttonText={props.article.author}/>}
            </div>

        </section>
    )
};


export default ArticleListItem;
