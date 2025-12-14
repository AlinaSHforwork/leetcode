class Solution:
    def maxArea(self, height: List[int]) -> int:
        maxObj = 0
        x = 0
        y = len(height) - 1 

        while x < y:
            h = min(height[x],height[y])
            w = y - x

            lastSum = h * w

            maxObj = max(maxObj,lastSum)

            if  height[x] < height[y]:
                x += 1
            else:
                y -= 1
        return maxObj
        