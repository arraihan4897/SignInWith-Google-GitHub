//npm i firebase
// 1> getAuth
// 2> app import which was added in Firebase init
//3>provider 
//btn with Onclick >>HandleGoogleSignIn=()=>{  
// signInWithPopup(auth,Provider)
// .then(result=>{
//   const user = result.user;
//   console.log(user);
// }) 
// .catch(error=>{
//   console.log(error ,'error signing');
// })
//
//}



//{

//Another Method Like Sign in with Github

// go to Github>settings>developerSettings>

//}




import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup ,GithubAuthProvider, signOut} from "firebase/auth";
import app from './Firebase/Firebase.init';
import { useState } from 'react';





const auth = getAuth(app);
function App() {
  const [user,setUser]=useState({});
  const googleProvider =new  GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const HandleGoogleSignIn=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      const user = result.user;
      setUser(user);
      console.log(user);

    })
    .catch(error=>{
      console.log(error ,'error signing');

    })
  }



const HandleGoogleSignOut=()=>{
  
  signOut(auth).then(() => {
    setUser({});
  }).catch((error) => {
    setUser({});
  });

}



//github

const HandleGitHubSignIn=()=>{
  const auth = getAuth();
signInWithPopup(auth, githubProvider)
  .then((result) => {    
    const user = result.user;
    setUser(user);
   console.log(user);
  }).catch((error) => {

    // The email of the user's account used.
    const email = error.customData.email;
    console.error(error);

  });

}

const HandleGithubSignOut=()=>
{
  signOut(auth).then(() => { 
    setUser({});
  }).catch((error) => {
    setUser({});
  });
}




  return (
    <div className="App">

      { user.uid &&
          <div>
          <h1>Get the user information</h1>
         <img src={user.photoURL} alt="" />
         <h3> Name:{user.displayName}</h3>
         <p>Email:{user.email}</p>
         </div>
      }

        <div>
          {user.uid ?
                    <>
                    <button onClick={HandleGoogleSignOut}>Google SignOUT</button>
                    <button onClick={HandleGithubSignOut}>Google SignOUT</button>
                    </>
                   :
                  <>
                  <button onClick={HandleGoogleSignIn}>Google SignIn</button>
                  <button  onClick={HandleGitHubSignIn}>GitHub SignIn</button>
                  </>
          }
        </div>
    
    </div>
  );
}

export default App;
