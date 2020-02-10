import React from "react";
import SlugButton from './SlugButton';
import './ArticleListItem.module.css'

const ArticleListItem = (props) => {
    return(
        <div>
            <h1>{props.article.title}</h1>
            <p>{props.article.shortText}</p>
            <time dateTime={props.article.pubYear}>{props.article.pubDate}</time>
            <SlugButton slug={props.article.slug} buttonText = {props.article.author}></SlugButton>
        </div>
    )
}
export default ArticleListItem;
