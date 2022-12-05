import { useGetPostsQuery } from "../services/posts";
import React from "react";
import { useSelector } from "react-redux";
import LoadingMoreTitlesButton from "../components/LoadingMoreTitlesButton";

export default function Home() {
  const currentNumberOfTitleLoaded = useSelector(
    (state) => state.loadMoreTitles.value
  );
  const { data, error, isLoading, isSuccess, isError } = useGetPostsQuery();

  return (
    <main>
      <ul>
        <h1>Welcome to React </h1>
        {isLoading && "...Loading"}
        {isError && error.message}
        {isSuccess &&
          data &&
          data.slice(0, currentNumberOfTitleLoaded).map((post) => {
            return (
              <>
                <li key={post.id}>{post.title}</li>
              </>
            );
          })}
      </ul>
      <LoadingMoreTitlesButton />
    </main>
  );
}
