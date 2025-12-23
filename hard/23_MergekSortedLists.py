from typing import List, Optional
from heapq import heapify, heappop, heappush

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        setattr(ListNode, "__lt__", lambda self, other: self.val < other.val)

        prior = [head for head in lists if head]

        heapify(prior)

        list_const = ListNode()
        current_node = list_const

        while prior:
            min_n = heappop(prior)

            if min_n.next:
                heappush(prior, min_n.next)
            
            current_node.next = min_n
            current_node = current_node.next
        return list_const.next
