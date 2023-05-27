import React from "react";
import moment from "moment";
import ReactPaginate from "react-paginate";

function Result({ gitList }) {
  //   return (
  //     <div>
  //       {gitList?.map((item, i) => {
  //         return (
  //           <div className="card" style={{ width: "18rem" }}>
  //             <img src={item?.owner?.avatar_url} className="card-img-top" />

  //             <div className="card-body">
  //               <h5 className="card-title">{item?.description}</h5>
  //               <p className="card-text">
  //                 Some quick example text to build on the card title and make up
  //                 the bulk of the card's content.
  //               </p>
  //               <a
  //                 onClick={() => {
  //                   window.open(`${item?.user?.html_url}`);
  //                 }}
  //                 className="btn btn-success"
  //               >
  //                 Go to Repository
  //               </a>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );

  return (
    <div>
      <div className="container">
        <div className="row">
          {gitList?.map((item, i) => {
            return (
              <div className="col-md-12 list-container">
                <div className="artist-data pull-left">
                  <div className="artst-prfle">
                    <div className="art-title">
                      {item?.owner?.login}/{item?.name}
                      <span className="artst-sub">
                        <span className="byname">{item?.description}</span>{" "}
                      </span>
                    </div>
                    <div className="chip-container">
                      <ul>
                        {item?.topics?.map((list, index) => {
                          return <li className="badge">{list}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="counter-tab">
                      <div className="counter_like star">
                        <i className="glyphicon glyphicon-star"></i>{" "}
                        {item?.stargazers_count}
                      </div>
                      <div className="counter_like">
                        <i className="glyphicon glyphicon-ok-circle"></i>{" "}
                        {item?.language}
                      </div>
                      <div className="counter_like">
                        <i className="glyphicon glyphicon-ok"></i>{" "}
                        {item?.license?.name}
                      </div>
                      <div className="counter_like">
                        {/* <i className="glyphicon glyphicon-ok"></i>{" "} */}
                        <span className="daysago">
                          Updated at:
                          {moment(item.updated_at).format("DD/MM/YYYY hh:mm A")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bot-links">
                    <a
                      className="btn btn-success"
                      onClick={() => {
                        window.open(`${item?.html_url}`);
                      }}
                    >
                      Go to Repository
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Result;
