/**
 * 广度优先遍历
 *
 * 输入: 
 *             1
 *           2   7
 *          3   8 9
 *         4       10
 *        5 6     11 12
 * 
 * 输出: 1 2 7 3 8 9 4 10 5 6 11 12
 * 
 * 方法: 队列
 */

const treeData = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,
            left: {
                value: 4,
                left: {
                    value: 5
                },
                right: {
                    value: 6
                },
            },
        },
    },
    right: {
        value: 7,
        right: {
            value: 9,
            right: {
                value: 10,
                left: {
                    value: 11,
                },
                right: {
                    value: 12
                },
            },
        },
        left: {
            value: 8
        }
    }
};

const bfs = tree => {
    let list = [];
    let queue = [tree];
    while (queue.length != 0) {
        let target = queue.shift();
        list.push(target.value);
        if (target.left) {
            queue.push(target.left);
        }
        if (target.right) {
            queue.push(target.right);
        }
    }
    return list
}

const res = bfs(treeData);
console.log(res);