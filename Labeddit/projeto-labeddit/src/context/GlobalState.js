import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../urls/urls"
import GlobalStateContext from "./GlobalStateContext"
import {size} from "../urls/pagina"
const GlobalState = (props) => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [postComments, setPostComments] = useState([]);
    const [page, setPage] = useState(1)
    const [isloading, setIsLoading] = useState(false)
     
  
    
    
    
    
    const getPosts = (currentPage) => {
     setIsLoading(true)
      const header = {
        headers: {
          authorization: localStorage.getItem("token")
        }
      };
  
      axios
        .get(`${BASE_URL}/posts?page=${currentPage}1&size=${size}`, header)
        .then((res) => {
          setPosts(res.data);
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    const getPostComments = (postId) => {
      setIsLoading(true)
     
        const header = {
          headers: {
            authorization: localStorage.getItem("token")
          }
        };
    
        axios.get(`${BASE_URL}/posts/${postId}/comments`, header)
          .then((res) => {
            setPostComments(res.data);
            setIsLoading(false)
          }).catch((err) => {
            console.log(err.message);
          });
      };
    
  
    const states = { posts, post, postComments, page, isloading };
    const setters = { setPosts, setPost, setPostComments, setIsLoading, setPage };
    const getters = { getPosts, getPostComments };
  
    return (
      <GlobalStateContext.Provider value={{ states, setters, getters }}>
        {props.children}
      </GlobalStateContext.Provider>
    );
  };
  
  export default GlobalState;
  