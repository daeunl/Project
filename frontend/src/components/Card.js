import React from 'react';

const Card = (props) => {
    
    let classes = (props.favorite === 1) ? 'favorite active' : 'favorite';
    
        return(
            
             <div className="card" onClick={() => {props.cardLink(props.company_id)}}>
                  <div className="thumbs">
                      <div className="img"></div>
                      <div className="logo"></div>
                   </div>
                  <div className="info">
                      <h3>{props.recruit}</h3>
                      <div className="company">{props.company}</div>
                      <div className="rebate">채용보상금 {props.rebate.toLocaleString()}</div>
                   </div>
                  <div className="opt">
                      <div className="recom">{(props.recom > 0) && <span>{props.recom} 명 추천</span>}</div>
                      <div className={classes}></div>
                   </div>
               </div>
        )
    }

export default Card;