import { FaSearch } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

function SearchComp() {
    return (
        <>
            <div className="d-flex justify-content-center py-2 box">
                <div className="search-box">
                    <sup>
                        <FaSearch
                            className="search-icon"
                            style={{ pointerEvents: "none" }}
                        />
                    </sup>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="buttons">
                    <select id="options" name="options">
                        <option value="1">English</option>
                        <option value="2">Arabic</option>
                    </select>                    
                    <button className="sign-btn ms-2">
                        <IoPersonCircleOutline /> Sign In
                    </button>
                </div>
            </div>
        </>
    );
}

export default SearchComp;
