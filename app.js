let array = [3, 4, 5, 44, 55, 23, 34, 12, 26, 67, 77, 75, 98, 67]
const newArray = array.filter(item => item % 2 !==0)
console.log(newArray)

const books = (...book) => {
    const withY = []
    const withOutY = []
    for (let i of book) {
        if (i.toLowerCase().includes('y')){
            withY.push(i)
        }
        else{
            withOutY.push(i)
        }
    }
    console.log('книги с буквой y :', withY,'книги без буквы y:', withOutY)
}
books('In Search of Lost Time', 'Ulysses', 'on Quixote', 'One Hundred Years of Solitude', 'The Great Gatsby',' Moby Dick', 'War and Peace')