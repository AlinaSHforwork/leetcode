import "fmt"
func intToRoman(num int) string {
    sym := []string{"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"}
    val := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1} 

    var result = ""

    for i := 0; i < len(val); i++ {
        for num >= val[i] {
            result += sym[i]
            num -= val[i]
        }
    }
    return result
}