class Solution:
    def isPalindrome(self, x: int) -> bool:
        rev_str = str(x)[::-1]
        if rev_str.endswith('-'):
            return bool(False)
        rev = int(rev_str)
        return bool(x == rev)
        