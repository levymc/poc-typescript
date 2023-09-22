const eu = new Map<string, string>();

eu.set("1", "oi")
eu.set("2", "oi")

console.log(eu)

eu.forEach((x, y) => {
    console.log(x,y)
})