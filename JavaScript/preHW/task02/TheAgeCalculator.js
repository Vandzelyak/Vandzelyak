/**
 * Created by Lena on 07.08.2015.
 */
function ageCalculation() {
    const YEAR = 2015;
    var yearBorn=document.getElementById('birthYear').value;
    var ageFirst=YEAR-yearBorn-1;
    var ageSecond=YEAR-yearBorn;
    document.getElementById('ageFirst').value=ageFirst;
    document.getElementById('ageSecond').value=ageSecond;
}