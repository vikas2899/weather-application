import { useSelector, useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { fetchSearchListData } from "../../features/Search/searchSlice";
import { fetchSearchedData } from "../../features/weather/weatherSlice";
import { fetchAstronomyData } from "../../features/astronomy/astronomySlice";

import "./Search.css";

function Search() {
  const dispatch = useDispatch();
  let searchData = useSelector((state) => state.search.data);

  const inputRef = useRef(null);

  const debounce = (callback, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const getData = (location) => {
    dispatch(fetchSearchListData(location));
  };

  const debounceGetData = debounce(getData, 800);

  const handleChange = (e) => {
    debounceGetData(e.target.value);
  };

  const handleClick = (e) => {
    if (e.target.nodeName === "LI") {
      const coordinate = e.target.getAttribute("data-coordinate");
      dispatch(fetchSearchedData(coordinate));
      dispatch(fetchAstronomyData(coordinate));
      inputRef.current.style.display = "none";
    } else {
      return;
    }
  };

  return (
    <div>
      <div className="search-container">
        <BsSearch fontSize={"20px"} />
        <input
          type="search"
          className="search-input"
          placeholder="Search location here atleast 3 character"
          onChange={(e) => handleChange(e)}
        />
      </div>
      {searchData.length > 0 ? (
        <div className="search-result-list" ref={inputRef}>
          <ul onClick={(e) => handleClick(e)}>
            {searchData.map((d, i) => {
              return (
                <li
                  key={i}
                  data-coordinate={`${d.lat},${d.lon}`}
                >{`${d.name}, ${d.region}, ${d.country}`}</li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Search;
