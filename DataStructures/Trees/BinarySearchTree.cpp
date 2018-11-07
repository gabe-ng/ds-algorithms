// code in C++, will update to javascript soon

struct TreeNode
{
    int data;
    TreeNode * left_child;
    TreeNode * right_child;
}

class BinarySearchTree {
    BinarySearchTree();
    BinarySearchTree(const BinarySearchTree& bsttocopy);
    BinarySearchTree& operator=(const BinarySearchTree& bsttocopy);

void deleteValue(int value);
void insertValue(int value);
bool isEmpty();
bool lookup(int value);
int findNextValue(TreeNode * node);
void printBreadthFirst();
void printInorder();
void printPostorder();
void printPreorder();
void printTree();

TreeNode * root;
}

BinarySearchTree()
{
    root = nullptr;
}

bool isEmpty()
{
    if (root == nullptr) {
        return true;
    }

    else {
        return false;
    }
}

void insertValue(int value)
{
    insertValue(this -> root, value);
}

void insertValue(TreeNode * node, int value)
{
    if (node == nullptr) {
        node = TreeNode{ value, nullptr, nullptr };
    }

    else {
        if (value < node -> left_child) {
            insertValue(node -> left_child, value);
        }

        else if (value > node -> right_child) {
            insertValue(node -> right_child, value);
        }

        else {
            std:: cout << "Value is already in tree";
        }
    }
}

bool lookup(int value)
{
    TreeNode * currentnode = this -> root;

    while (currentnode != nullptr) {
        if (value < currentnode -> data) {
            currentnode = currentnode -> left_child;
        }

        if value > currentnode -> data) {
            currentnode = currentnode -> right_child
        }

        else {
            return true;
        }
    }

    return false;
}

int findNextValue(TreeNode * node)
{
    while (node -> left_child != nullptr) {
        node = node -> left_child;
    }

    return node -> data;
}

int deleteValue(int value)
{
    deleteValue(this -> root, value);
}

int deleteValue(TreeNode * node, int value)
{
    if (node == nullptr) {
        return;
    }

    else if (value < node -> data) {
        deleteValue(node -> left_child, value);
    }

    else if (value > node -> data) {
        deleteValue(node -> right_child, value);
    }

    else {
        if (node -> left_child == nullptr && node -> right_child == nullptr) {
            node = nullptr;
        }

        else if (node -> left_child == nullptr) {
            node = node -> right_child;
        }

        else if (node -> right_child == nullptr) {
            node = node -> left_child;
        }

        else {
            int nextValue = findNextValue(node -> right_child);
            node -> data = nextValue;
            deleteValue(node -> right_child, nextValue);
        }
    }
}

void printBreadthFirst()
{
    std:: queue < TreeNode *> nodequeue = std:: queue < TreeNode *> ();

    if (this -> root != nullptr) {
        nodequeue.push(this -> root);

        while (!nodequeue.empty()) {
            TreeNode * currnode = nodequeue.front();
            std:: cout << currnode -> data << std:: endl;

            if (currnode -> left_child != nullptr) {
                nodequeue.push(currnode -> left_child);
            }

            if (currnode -> right_child != nullptr) {
                nodequeue.push(currnode -> right_child);
            }

            nodequeue.pop();
        }
    }

    else {
        std:: cout << "Tree is empty." << std:: endl;
    }
}

void printInorder(TreeNode * node)
{
    if (node == nullptr) {
        return;
    }

    else {
        printInorder(node -> left_child);
        std:: cout << node -> data << std:: endl;
        printInorder(node -> right_child);
    }
}

void printPreorder(TreeNode * node)
{
    if (node == nullptr) {
        return;
    }

    else {
        std:: cout << node -> data << std:: endl;
        printPreorder(node -> left_child);
        printPreorder(node -> right_child);
    }
}

void printPostorder(TreeNode * node)
{
    if (node == nullptr) {
        return;
    }

    else {
        printPreorder(node -> left_child);
        printPreorder(node -> right_child);
    }
}

BinarySearchTree(const BinarySearchTree& bsttocopy)
{
    copyTree(bsttocopy -> root);
}

void copyTree(TreeNode * node)
{
    if (node == nullptr) {
        return;
    }

    else {
        insertValue(node -> data);
        copyTree(node -> left_child);
        copyTree(node -> right_child);
    }
}