

let res = new Result;



student.map( (data, index) => {

    console.log(`

        ID          : ${ data.id }
        Name        : ${ data.name }
        Age         : ${ data.age }
        Gender      : ${ data.gender }
        Location    : ${ data.location }

        Subject     Marks               GPA                             GRADE    
        Bangla      ${ data.bn }        ${ res.result(data.bn).abba }   ${ res.result(data.bn).mama } 
        English     ${ data.en }        ${ res.result(data.en).abba }   ${ res.result(data.en).mama }
        Math        ${ data.math }      ${ res.result(data.math).abba }   ${ res.result(data.math).mama }
        Science     ${ data.s }         ${ res.result(data.s).abba }   ${ res.result(data.s).mama }
        S S         ${ data.ss }        ${ res.result(data.ss).abba }   ${ res.result(data.ss).mama }
        Religion    ${ data.rel }       ${ res.result(data.rel).abba }   ${ res.result(data.rel).mama }
        ------------------------------------------------------------
        Final CGPA = ${ res.finalResult(data.bn, data.en, data.math, data.s, data.ss, data.rel).finalCgpa }           Final Result = ${ res.finalResult(data.bn, data.en, data.math, data.s, data.ss, data.rel).finalResult }
    





    `);

});



