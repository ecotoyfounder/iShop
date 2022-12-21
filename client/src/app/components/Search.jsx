import {useState} from "react";

const useSearch = () => {

    const [searchQuery, setSearchQuery] = useState("");

    function filterGoods(goods, valueSearch) {
        let foundGoods = goods;
        if (valueSearch) {
            foundGoods = goods.filter((good) => {
                const searchRegExp = new RegExp(`${valueSearch}`, "i");
                const founded = good.name.search(searchRegExp) !== -1;

                return founded;
            });
        }

        return foundGoods;
    }

    const handleSearchQuery = ({target}) => {
        setSearchQuery(target.value);
    };


    return {searchQuery, handleSearchQuery, filterGoods};
};

export default useSearch;