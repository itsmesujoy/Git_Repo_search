import React, { useEffect, useState } from "react";
import gitService from "../services/api";
import Button from "../components/button";
import Result from "./result";
import NotFound from "./notfound";
import Spinner from "./spinner";
import PaginatedItems from "../components/pagination";
import FirstRender from "./firstrender";

function Home() {
  const [gitList, setGitList] = useState([]);
  const [text, setText] = useState();
  const [count, setTotalCount] = useState();
  const [loading, setLoading] = useState(false);
    const [firstRender, setFirstRender] = useState(false);
  const [pageCheck, setPagecheck] = useState(false);

  const Searchgitrepo = async () => {
    setLoading(true);
    setFirstRender(true)
    let data = {
      q: text,
    };
    try {
      let response = await gitService.getgitRepo(data);
      console.log(response);
      setLoading(false);
      setGitList(response.data.items);
      setTotalCount(response.data.total_count);
      setPagecheck(true);
    } catch (error) {
      if (error) {
        setLoading(false);
        setTotalCount(0);
      }
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          className="form-control"
          placeholder="Type git repository here"
          type="text"
          onChange={(e) => setText(e.target.value)}
        ></input>
        <Button
          variant="click-none"
          size="resize"
          className="btn btn-primary"
          onClick={Searchgitrepo}
        >
          Search
        </Button>
      </div>
      {firstRender===false&& <FirstRender/>}
      {loading ? (
        <Spinner />
      ) : count === 0 ? (
        <NotFound />
      ) : (
        <Result gitList={gitList} />
      )}
      {pageCheck === true && loading != true && (
        <PaginatedItems
          text={text}
          setGitList={setGitList}
          setTotalCount={setTotalCount}
        />
      )}
    </>
  );
}

export default Home;
