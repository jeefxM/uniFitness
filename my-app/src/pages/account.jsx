import React from "react";
import { useSession, signOut } from "next-auth/react";
import Header from "@/components/LandingPage/HeaderUser";

const account = () => {
  const { data: session, status } = useSession({ required: true });

  if (status == "authenticated") {
    return (
      <div
        className="min-h-[100vh]  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("account.png")`,
          opacity: "0.9",
        }}
      >
        <Header />
        <div className="p-10 flex flex-col">
          <p className="text-3xl">Welcome, {session.user.name}</p>
          {/*  */}
          <p>This is all the info we have about you:</p>
          <p>name: {session.user.name}</p>
          <p>email: {session.user.email}</p>
          <p className="flex items-center gap-5 ">
            image:{" "}
            <img
              src={session.user.image}
              className="rounded-[50px] h-[50px] w-[50px]"
            />
          </p>
        </div>
        {/* <button onClick={() => signOut()}>Log out</button> */}
      </div>
    );
  }
};

export default account;
