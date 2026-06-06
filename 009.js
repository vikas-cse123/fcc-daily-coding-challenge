//question : #282
const sleepDebt = (hoursSlept, target) => {
  const totalNeeded = target * (hoursSlept.length + 1);
  const totalSlept = hoursSlept.reduce((sum, hours) => sum + hours, 0);
  if (totalNeeded > totalSlept) {
    return totalNeeded - totalSlept;
  }
  return 0;
};

//sleeps:hoursSlept, targetSleep: target
// totalTarget:totalNeeded
// totalSleepTaken:toalSlept
// acc:sum,curVal:hours
