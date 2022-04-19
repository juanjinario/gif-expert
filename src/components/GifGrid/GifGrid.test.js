import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GifGrid from "./GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGif.hook";
jest.mock("../../hooks/useFetchGif.hook");

describe("<GifGrid />", () => {
  const category = "One Punch";
  const initRender = () => {
    render(<GifGrid category={category} />);
  };

  // test("it should show title and grid wrapper", () => {
  //   // Use mockReturn for change init data in test
  //   useFetchGifs.mockReturnValue({
  //     data: [],
  //     loading: true,
  //   });
  //   initRender();
  //   const gifGridTitle = screen.getByTestId("GifGridTitle");
  //   const gifGridWrapper = screen.getByTestId("GifGridWrapper");
  //   expect(gifGridTitle).toBeInTheDocument();
  //   expect(gifGridWrapper).toBeInTheDocument();
  // });

  test("it should show cards with have a list of images", () => {
    const gifsList = [
      {
        id: "yo3TC0yeHd53G",
        title: "saitama GIF",
        url: "https://media0.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=306c52b5ofsvugmqzmgcq1kyx182y9jnif9weqvmplxgpd1r&rid=giphy.gif&ct=g",
      },
      {
        id: "DuVRadBbaX6A8",
        title: "opm GIF",
        url: "https://media0.giphy.com/media/DuVRadBbaX6A8/giphy.gif?cid=306c52b5ofsvugmqzmgcq1kyx182y9jnif9weqvmplxgpd1r&rid=giphy.gif&ct=g",
      },
      {
        id: "DuVRadBbaX6A8",
        title: "opm GIF",
        url: "https://media0.giphy.com/media/DuVRadBbaX6A8/giphy.gif?cid=306c52b5ofsvugmqzmgcq1kyx182y9jnif9weqvmplxgpd1r&rid=giphy.gif&ct=g",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifsList,
      loading: false,
    });
    initRender();
    const gifGridWrapper = screen.getByTestId("GifGridWrapper");
    expect(gifGridWrapper.children.length).toBe(gifsList.length);
    expect(gifGridWrapper.children[0]).toHaveTextContent(gifsList[0].title);
  });
});
