// TEST PAGE
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getPostById, createPostComment } from '../utils/API';
import Auth from '../utils/auth';

const SinglePost = () => {
  const { id } = useParams();
  const [ postData, setPostData ] = useState({})
  const [ userData, setUserData ] = useState({});
  const [ commentData, setCommentData ] = useState({
      comment: '',
      username: ''
  })

  const getPost = async () => {
    const data = await getPostById(id);
    const result = await data.json();
    setPostData(result)
  }

  useEffect(() => {
      getPost()
  }, [])

  useEffect(() => {
    const getUserData = async () => {
      try {
        const isLoggedIn = Auth.loggedIn() 

        if (!isLoggedIn) {
          return false;
        }

        const response = await Auth.getProfile();

        if (!response) {
          throw new Error('something went wrong!');
        }

        setUserData(response.data);
        setCommentData({ ...commentData, 'username': response.data.username });

      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCommentData({ ...commentData, [name]: value });

  }

  const handleSubmit = async e => {
      e.preventDefault();

      console.log(commentData)

      const newComment = await createPostComment(commentData, id)

      if (!newComment) {
        throw new Error('something went wrong!');
      }

      console.log('comment added!')

      getPost()
      setCommentData({ ...commentData, 'comment': '' });

  }
  // TEST LAYOUT BELOW - CHANGE FUGLY STYLING 
  return (
    <div>

        <div>
            <p>{postData.title}</p>
            <p>category: {postData.category}</p>
            <p>posted by: {postData.username}</p>
            <p>{postData.content}</p>
            <a target='_blank' rel="noopener noreferrer">{postData.link}</a>
        </div>

        <div>
            <h1>Comments</h1>
            <input 
                name="comment"
                type="text"
                placeholder='add a comment' 
                value={commentData.comment}
                onChange={handleInputChange }/>
            <button onClick={handleSubmit}>Submit</button>
            <div>
                {postData.comments?.map(item => {
                    return (
                      // key property must be added to parent
                      // insert comment component below
                        <div key={item.commentId}>
                            <p>{item.comment}</p>
                            <p>{item.username}</p>
                            <p>{item.createdAt}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    </div>
  )
}

export default SinglePost