import "../../App.css";
import Post from "./Post";

const dummyPost = {
  user: "DonBaumhaus",
  date: "Posted 7 Hours ago",
  title: "Title of the Idea: a Short description",
  body: "Body of the idea: A story to illustrate what the idea is about, how it came to be and where it could go.",
  mats: "Mats: The materials and media needed for the build of the idea.",
  work: "Work: The labours and efforts that will likely be required to make it",
};

function Posts() {
  return (
    <div className="posts">
      <Post postData={dummyPost} />
      <Post postData={dummyPost} />
      <Post postData={dummyPost} />
      <Post postData={dummyPost} />
      <Post postData={dummyPost} />
    </div>
  );
}

export default Posts;
