function solve(input){
    let studentsCount = Number(input.shift());
    let totalGradesCount = 0;
    let topStudents = 0; // 5 - 6.00
    let veryGoodStudents = 0; // 4 - 4.99
    let goodStudents = 0; // 3 - 3.99
    let failStudents = 0; // 2 - 2.99 

    while(input.length > 0){
        let studentGrade = Number(input.shift());
        totalGradesCount += studentGrade;

        if(studentGrade <= 2.99){
            failStudents++;
        } else if (studentGrade >= 3 && studentGrade <= 3.99){
            goodStudents++;
        } else if (studentGrade >= 4 && studentGrade <= 4.99){
            veryGoodStudents++;
        } else if(studentGrade >= 5){
            topStudents++;
        }
    }

    let averageGrade = totalGradesCount / studentsCount;
    let topPercentage = topStudents / studentsCount * 100;
    let veryGoodPercentage = veryGoodStudents / studentsCount * 100;
    let goodPercentage = goodStudents / studentsCount * 100;
    let failPercentage = failStudents / studentsCount * 100;

    console.log(`Top students: ${topPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${veryGoodPercentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${goodPercentage.toFixed(2)}%`);
    console.log(`Fail: ${failPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

solve(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"]);
