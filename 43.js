var minSwapsToAlternate = function(head) {
    let arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    
    let n = arr.length;
    let count0 = arr.filter(v => v === 0).length;
    let count1 = n - count0;

    if (Math.abs(count0 - count1) > 1) return -1;

    const swapsNeeded = (startVal) => {
        let mismatch = 0;
        for (let i = 0; i < n; i++) {
            let expected = (startVal ^ (i % 2));
            if (arr[i] !== expected) mismatch++;
        }
        return Math.floor(mismatch / 2);
    };

    let res = Infinity;
    if (count0 >= count1) res = Math.min(res, swapsNeeded(0));
    if (count1 >= count0) res = Math.min(res, swapsNeeded(1));

    return res === Infinity ? -1 : res;
};
