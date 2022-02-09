import { signIn } from "next-auth/react";
import React from "react";
import styles from "../styles/Login.module.css";

const Login = ({ providers }) => {
  return (
    <div className={styles.main}>
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
              <span>Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
