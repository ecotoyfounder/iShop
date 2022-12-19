export function price(toggle, goods) {
    function compare(a, b) {
        if (a.price < b.price) {
            return toggle ? -1 : 1;
        }
        if (a.price > b.price) {
            return toggle ? 1 : -1;
        }

        return 0;
    }

    return [...goods].sort(compare);
}

const sort = {price};
export default sort;
