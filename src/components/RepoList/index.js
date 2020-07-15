import React from "react";
import RepoCard from "../RepoCard";

const RepoList = ({data}) => {
  return (
      <div>
          {data.map((val, i) => <RepoCard key={i} data={val}/>)}
      </div>
  )
};

export default RepoList;
