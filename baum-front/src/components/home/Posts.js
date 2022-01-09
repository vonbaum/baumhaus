import "../../App.css";
import Post from "./Post";

const dummyPost1 = {
  user: "DonBaumhaus",
  date: "Posted 7 Hours ago",
  title: "Title of the Idea: a Short description",
  body: "Body of the idea: A story to illustrate what the idea is about, how it came to be and where it could go.",
  mats: "Mats: The materials and media needed for the build of the idea.",
  work: "Work: The labours and efforts that will likely be required to make it",
};

const dummyPost2 = {
  user: "DonBaumhaus",
  date: "Posted 7 Hours ago",
  title: "This is post 2 Idea: a Short description",
  body: "Body of the idea: A story to illustrate what the idea is about, how it came to be and where it could go.",
  mats: "Mats: The materials and media needed for the build of the idea.",
  work: "Work: The labours and efforts that will likely be required to make it",
};

const dummyPost3 = {
  user: "DonBaumhaus",
  date: "Posted 7 Hours ago",
  title: "this is post 3: a Short description",
  body: "Body of the idea: A story to illustrate what the idea is about, how it came to be and where it could go.",
  mats: "Mats: The materials and media needed for the build of the idea.",
  work: "Work: The labours and efforts that will likely be required to make it",
};

const dummyPosts = [dummyPost1, dummyPost2, dummyPost3];

function Posts() {
  let renderedPosts = [];

  for (const post of dummyPosts) {
    renderedPosts.push(<Post postData={post} />);
  }

  return (
    <div className="posts">
      {renderedPosts.map((post) => {
        return post;
      })}
    </div>
  );
}

export default Posts;
