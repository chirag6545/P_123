/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
     if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the shorter array
  }

  const m = nums1.length;
  const n = nums2.length;
  const halfLen = Math.floor((m + n + 1) / 2);

  let minIdx = 0;
  let maxIdx = m;

  while (minIdx <= maxIdx) {
    const i = Math.floor((minIdx + maxIdx) / 2);
    const j = halfLen - i;

    if (i < m && nums2[j - 1] > nums1[i]) {
      minIdx = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      maxIdx = i - 1;
    } else {
      let maxOfLeft;
      if (i === 0) {
        maxOfLeft = nums2[j - 1];
      } else if (j === 0) {
        maxOfLeft = nums1[i - 1];
      } else {
        maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      if ((m + n) % 2 === 1) {
        return maxOfLeft;
      }

      let minOfRight;
      if (i === m) {
        minOfRight = nums2[j];
      } else if (j === n) {
        minOfRight = nums1[i];
      } else {
        minOfRight = Math.min(nums1[i], nums2[j]);
      }

      return (maxOfLeft + minOfRight) / 2;
    }
  }

  // If no median is found, return 0 or handle it as needed
  return 0;
};