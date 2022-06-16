const [posts, setPosts]= useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        addPosts(user_name, password);
   
      //const addPosts = (user_name, password) => {
         axiosInstance.post('', {
               user_name: user_name,
               password: password,
            })
            .then((response) => {
               setPosts([response.data, ...posts]);
            });
         setUserName('');
         setPassword('');
      };