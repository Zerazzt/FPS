updateList.push({ f: () => intervalUpdate()});

intervalUpdateList = [];

function intervalUpdate() { // Specilized counting function
  for (var i in intervalUpdateList){
    if (intervalUpdateList[i].cnt === 0){
        intervalUpdateList[i].f();
      intervalUpdateList[i].cnt = intervalUpdateList[i].int;
    } else {
      intervalUpdateList[i].cnt--;
    }
  }
}