import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { Comment } from "../../types";

const Example: FC = () => {
  const {
    isLoading,
    error,
    data: comments,
  } = useQuery<Comment[], Error>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/comments").then((response) =>
        response.json()
      ),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occured {error.message}</div>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.postId}>
          <h2>{comment.name}</h2>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Example;
