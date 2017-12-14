module.exports = {
  recursiveTower: function(input){
    const regEx = /(\w+) \((\d+)\)( -> ([\w, ]+))?/;
    input = input.split("\n").map(x => regEx.exec(x));
    let map = {};
    input.forEach(x => (map[x[1]] = true));
    input.forEach(x => {
      if(x[4]){
        x[4].split(", ").forEach(k => delete map[k]);
      }
    })
    for(let a in map) return a;
    return null;
  },

  balanceWeight: function(input){
    let n = input;
    const regEx = /(\w+) \((\d+)\)( -> ([\w, ]+))?/;
    n = n.split("\n").map(v => regEx.exec(v));
    let map = {};
    n.forEach(v => (map[v[1]] = {
      id: v[1],
      weight: Number(v[2]),
      children: v[4] ? v[4].split(", ") : null,
      sum: function() {
        return ( this.weight + (this.children ? this.children.reduce((p, c) => p + c.sum(), 0) : 0) )
      }
    }));

    for(let id in map){
      const o = map[id];
      if(o.children){
        o.children = o.children.map(id => map[id]);
      }
    }
    let root = map[this.recursiveTower(input)];
    let [wrongNode, targetWeight] = getWrongChild(root);
    let diff = wrongNode.sum() - targetWeight;
    return wrongNode.weight - diff;
  }
}

function getWrongChild(node, targetWeight){
    if(!node.children) return [node, targetWeight];
    let map = {};
    node.children.forEach(child => {
      let sum = child.sum();
      if(map[sum]){
        map[sum].count++;
      } else {
        map[sum] = {node: child, count: 1};
      }
    });
    let min = null;
    let weight = -1;
    for(let sum in map){
      if(map[sum].count === 1){
        min = map[sum].node;
      } else {
        weight = Number(sum);
      }
    }
    if(!min) return [node, targetWeight];
    return getWrongChild(min, weight);
  }
