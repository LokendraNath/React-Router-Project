// import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const GitHub = () => {
  const data = useLoaderData();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/LokendraNath")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  console.log(data);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-md p-6 py-30 text-center">
      <img
        className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-600"
        src={data.avatar_url}
        alt="Profile"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-800">@{data.login}</h2>

      <div className="flex justify-around mt-4 text-gray-700">
        <div>
          <p className="font-semibold">{data.followers}</p>
          <p className="text-sm">Followers</p>
        </div>
        <div>
          <p className="font-semibold">{data.following}</p>
          <p className="text-sm">Following</p>
        </div>
        <div>
          <p className="font-semibold">{data.public_repos}</p>
          <p className="text-sm">Repos</p>
        </div>
      </div>

      <Link
        to={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
      >
        Visit GitHub
      </Link>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/examplecode");
  return response.json();
};
