function printCertificate(grade, array) {

    if (grade < 3.00) {
        console.log('Student does not qualify');
        return;
    }

    printHeather();
    printName(array);
    formatGrade(grade);



    function printHeather() {
        console.log(`--------{@}--------`);
        console.log(`----Certificate----`);
        console.log(`-------------------`);
    }
    
   function printName(array) {
        console.log(`${array[0]} ${array[1]}`);
   }

   function formatGrade(grade) {

    if (grade < 3.00) {
        console.log('Fail (2)');
    }
    else if (grade >= 3.00 && grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    }
    else if (grade >= 3.50 && grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    }
    else if (grade >= 4.50 && grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    }
    else if(grade >= 5.50) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}
   

}

printCertificate(5.25, ['Peter', 'Carter']);