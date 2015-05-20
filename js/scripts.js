(function () {
  'use strict';

  var records = csvToObjects(titanicLog, ['id', 'survived', 'class', 'name', 'sex', 'age', 'sibsp', 'parch', 'ticket', 'fare', 'cabin','embarked'], true);

  computeFareAvg();
  calcPercentMale();
  calcPercentFemale();
  calcPercentSurvived();
  calcPercentFemalesSurvived();

  function computeFareAvg() {
    var sumsTotal = {fare: 0};

    records.forEach(function (dollar) {
      sumsTotal.fare += parseFloat(dollar.fare);
      return sumsTotal;
    });

    var fareAvg = sumsTotal.fare / records.length;
    console.log(fareAvg);
    return fareAvg;
  }

  function calcPercentMale() {
    var isMale = 0;
    records.forEach(function (morf) {
    if (morf.sex == 'male'){
      ++isMale;
    }

    return isMale;
    });
    var percentMale = (isMale / records.length) *100;
    console.log(percentMale);
    return percentMale;
    }

  function calcPercentFemale() {
    var percentFemale = 100 - calcPercentMale();
    console.log(percentFemale);
    return percentFemale;
  }

  function calcPercentSurvived(){
    var didSurvive = 0;
    records.forEach(function (alive) {
    if (alive.survived == '1'){
      ++didSurvive;
    }
    return didSurvive;
    });
    var percentSurvived = (didSurvive / records.length)*100;
    console.log(percentSurvived);
    return percentSurvived;
  }

  function calcPercentFemalesSurvived(){
    return records.filter(function(blah) {
      return blah.sex == 'female' && blah.survived == '1';
    }).length/(records.length*(calcPercentSurvived()/100))*100;
}
console.log(calcPercentFemalesSurvived());
})();
