import DateWidget from "../../utils/Date/DateWidget";
import Search from "../../utils/Search/Search";

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="date-widget-container">
        <DateWidget />
      </div>
      <div className="search-widget-container">
        <Search />
      </div>
    </div>
  );
}

export default Header;
