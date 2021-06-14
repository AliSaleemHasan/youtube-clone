import React, { useState } from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import { Avatar, Button } from "@material-ui/core";
import axios from "./axios";
import requests from "./requests";
import { useStateValue } from "./StateProvide";
import { actionType } from "./reducer";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");
  const [, dispatch] = useStateValue();

  const history = useHistory();
  const search = (e) => {
    e.preventDefault();

    async function fetchData() {
      const request = await axios
        .get(requests.search, {
          params: { q: { input } },
        })
        .catch((err) => console.log(err));

      dispatch({
        type: actionType.SET_SEARCH,
        searchOutput: request,
      });

      history.push(`/search/${input}`);
      setInput("");
    }

    fetchData();
  };
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img
            className="header__logo"
            src="logo.png"
            alt="logo"
            height="70"
            width="100"
          />
        </Link>
      </div>
      <div className="header__center">
        <form action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search"
          />

          <Button disabled={!input} type="submit" onClick={search}>
            <Search />
          </Button>
        </form>
      </div>

      <div className="header__right">
        <Avatar src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/121551442_664036064509610_5476752320869443759_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=R8pphp7dkCoAX96jK97&_nc_ht=scontent-cdg2-1.xx&oh=fbdc40fbded53685c51654682ea66a26&oe=5FE9D900" />
      </div>
    </div>
  );
}

export default Header;
