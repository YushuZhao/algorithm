/**
 * 深度优先遍历
 * 
 * 输入: 
 *             1
 *           2   7
 *          3   8 9
 *         4       10
 *        5 6     11 12
 * 
 * 输出: 1 2 3 4 5 6 7 8 9 10 11 12
 * 
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

// 先序遍历 方法一
const dfs = tree => {
    let list = [];
    let stack = [];
    if (tree) stack.push(tree);
    while (stack.length != 0) {
        let target = stack.pop();
        list.push(target.value);
        if (target.right) {
            stack.push(target.right);
        }
        if (target.left) {
            stack.push(target.left);
        }
    }
    return list
}

const res = dfs(treeData);
console.log(res);

// 先序遍历 方法二 递归
const preorderTraversal = (treeData) => {
    let list = [];
    let preOrderTraverseNode = (tree) => {
        if (tree) {
            // 先根节点
            list.push(tree.value);
            // 然后遍历左子树
            preOrderTraverseNode(tree.left);
            // 再遍历右子树
            preOrderTraverseNode(tree.right);
        }
    }
    preOrderTraverseNode(treeData);
    return list
};

// const result = preorderTraversal(treeData);
// console.log(result);

// 中序遍历 递归
const inorderTraversal = (treeData) => {
    let list = [];
    let inorderTraversalNode = (tree) => {
        if (tree) {
            // 先遍历左子树
            inorderTraversalNode(tree.left);
            // 然后根节点
            list.push(tree.value);
            // 再遍历右子树
            inorderTraversalNode(tree.right);
        }
    }
    inorderTraversalNode(treeData);
    return list
};

// const result = inorderTraversal(treeData);
// console.log(result);


// 后序遍历 递归
const postorderTraversal = (treeData) => {
    let list = [];
    let postorderTraversalNode = (tree) => {
        if (tree) {
            // 先遍历左子树
            postorderTraversalNode(tree.left);
            // 然后遍历右子树
            postorderTraversalNode(tree.right);
            // 再根节点
            list.push(tree.value);

        }
    }
    postorderTraversalNode(treeData);
    return list
};

const result = postorderTraversal(treeData);
console.log(result);