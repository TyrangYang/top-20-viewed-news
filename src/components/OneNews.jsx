import React from 'react';

export default function OneNews(props) {
    return (
        <div className="card">
            <h1 className="title">
                <a href={props.info.url}>{props.info.title}</a>
            </h1>
            <div className="keyWordContainer">
                {props.info.des_facet.map((e, index) => (
                    <div key={index} className="keyWord">
                        {e}
                    </div>
                ))}
            </div>
            <p className="abstract">{props.info.abstract}</p>
            <div className="card-footer">
                <p className="publishDate"> {props.info.published_date}</p>
                <p className="more-detail">
                    <a href={props.info.url}>Read More -></a>
                </p>
            </div>
        </div>
    );
}
