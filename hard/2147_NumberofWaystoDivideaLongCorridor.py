class Solution:
    def numberOfWays(self, corridor: str) -> int:
        modulo = 10**9 + 7
        group1 = 1
        group2 = 0
        last = 0 
        for i,j in enumerate(corridor):
            if j == "S":
                group2 += 1
                if group2 > 2 and group2 % 2:
                    group1 = group1 * (i - last) % modulo
                last = i
        return group1 if group2 and group2 % 2 == 0 else 0
        