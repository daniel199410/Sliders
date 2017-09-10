function CircularList(){
    var length = 0
    var head = null
    var tail = null
    var Node = function(element){
        this.element = element
        this.right = tail
        this.left = head
    }

    this.element = function(){
        return element
    }

    this.size = function(){
        return length
    }

    this.head = function(){
        return head
    }

    this.tail = function(){
        return tail
    }

    this.add = function(element){
        var node = new Node(element)
        if(head === null){
            head = node
            tail = node
            node.right = tail
            node.left = head
        }else{
            var currentNode = tail.left
            currentNode.right = node
            head = node
            tail.left = head
        }      
        if(length === 1){
            tail.right = node
        }
        length++      
    }

    this.search = function(element){
        var temp = tail;
        while(temp.element != element){
            temp = temp.right
        }
        return temp;
    }
}

/**var cl = new CircularList();
cl.add("a")
cl.add("b")
cl.add("c")
cl.add("d")
cl.add("e")
console.log(cl.tail())*/