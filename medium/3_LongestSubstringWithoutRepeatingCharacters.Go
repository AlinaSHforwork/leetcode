func lengthOfLongestSubstring(s string) int {
    m := make(map[byte]int)
    res := 0

    for l, r := 0, 0; r < len(s); r++ {
        if index, ok := m[s[r]]; ok {
            if l < index {
                l = index
            }
        }
        if res < (r-l+1) {
            res = r-l+1
        }
        m[s[r]] = r + 1
    } 
    return res
}