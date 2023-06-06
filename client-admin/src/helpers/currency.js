const currency = (someNumber) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(someNumber);
};

export default currency;