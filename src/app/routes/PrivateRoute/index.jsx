// import React, { useEffect, useState } from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { getAuth } from "firebase/auth";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Loader } from "../../../shared";
// import useUserData from "../../../shared/lib/hooks/user/user";
// import GetUserData from "../../../shared/lib/hooks/user/userSelector.hook";

// const PrivateRoute = () => {
//   const location = useLocation();
//   const auth = getAuth();
//   const [user, loadingUser] = useAuthState(auth);
//   const [instagramUsername, setInstagramUsername] = useState(null);
//   const [tokenLoading, setTokenLoading] = useState(true);

//   useEffect(() => {
//     const fetchToken = async () => {
//       if (user) {
//         try {
//           const tokenResult = await user.getIdTokenResult(true);
//           setInstagramUsername(tokenResult.claims.instagramUsername);
//         } catch (_) {} 
//         finally {
//           setTokenLoading(false);
//         }
//       }
//     };
//     fetchToken();
//   }, [user]);


//   if (loadingUser || tokenLoading) {
//     return (
//       <div className="account-creating-wrapper">
//         <div className="create-acc-section">
//           <Loader />
//         </div>
//       </div>
//     );
//   }

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   if (!instagramUsername) {
//     return <Navigate to="/enter-account" state={{ from: location }} />;
//   }


//   return <Outlet />;
// };

// export default PrivateRoute;

import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "../../../shared";
import { User } from "../../../shared/api/axios/requests/user/user.service";


const PrivateRoute = () => {
  const location = useLocation();
  const auth = getAuth();
  const [user, loadingUser] = useAuthState(auth);
  const [instagramUsername, setInstagramUsername] = useState(null);
  const [tokenLoading, setTokenLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      if (user) {
        try {
          const data = await User.getMe();
          setInstagramUsername(data.data.data.instagramUsername)
  
        } catch (_) {} 
        finally {
          setTokenLoading(false);
        }
      }
    };
    fetchToken();
  }, [user]);


  if (loadingUser || tokenLoading) {
    return (
      <div className="account-creating-wrapper">
        <div className="create-acc-section">
          <Loader />
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!instagramUsername) {
    return <Navigate to="/enter-account" state={{ from: location }} />;
  }


  return <Outlet />;
};

export default PrivateRoute;

