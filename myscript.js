

/*****************Captcha**************** */
function Captcha() {
    var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    var i;
    for (i = 0; i < 6; i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
        var e = alpha[Math.floor(Math.random() * alpha.length)];
        var f = alpha[Math.floor(Math.random() * alpha.length)];
        var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
    document.getElementById("mainCaptcha").value = code
}
function ValidCaptcha() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
    if (string1 == string2) {
        return true;
       
    }
    else {
        return false;
         
    }
}
/*****************Array & Add student**************** */

function validtion(){
    var user = document.getElementById('user').value;
    var student = document.getElementById('student').value;
   // var programme = document.getElementById('programme').value;
    var mobailNum = document.getElementById('mobile').value ;
    if (user != '') {
    if (/^[A-Z][a-z]+\_\d+$/.test(user.value)) {
alert ("User Name ADD Done")
    }
    else {
        alert ("User Name error EX : Mahmoud_215038")
    }

}
if (student  != '') {

    if (/^[ء-ي\s]*$/.test(student .value)) {
        alert ("Student Name ADD Done")
    }
    else {
        alert ("User Name error EX : محمود علي")
    }
}
if (mobailNum  != '') {
if (mobailNum[0] == 0 && mobailNum[1] == 9) {

    if (mobailNum.length != 10 || mobailNum[2] == 1 || mobailNum[2] == 2 || mobailNum[2] == 7) {
        alert ("Mobail Number ADD Done")
    }
    else {
        alert ("Mobail number error EX :0999 999 999")
    }
}
}
}
validtion();

students= [];
class Student {
    constructor(id,user,student,programme) {
        this.id = id;
        this.user = user;
        this.student = student;
        this.programme=programme;
    }
   
}


i = 0 ;

function addStudent(){
    var user = document.getElementById('user').value;
    var student = document.getElementById('student').value;
    var programme = document.getElementById('programme').value;
    var mobailNum = document.getElementById('mobile').value ;
        

    valid=false;
    if( user !== '' && student !== '' && mobailNum  != '' &&  programme !== '')
    {
        valid=true;
        i++ ;
    }
    else {
       alert ("اخل اسم المستخدم \t  مثال : (Ghina-220158)\nادخل اسم الطالب بالعربية       \t  مثال : ( غنى محظية)\nادخل رقم الموبايل مع رمز النداء الوطني \t مثال : (+963-9999999)");
    }
    if(valid==true ){
        alert("تم اضافة طالب بنجاح");
        var s= new Student(i,user,student,programme);
    students.push(s);
        
        
        }
        else{
            alert("لا يمكن اضافة طالب املأ كل الحقول ");
        }
     
    
    let IdNumber   =  document.getElementById("r1");
    let SName =  document.getElementById("r2");
    let progrs     =  document.getElementById("r3" );;
    if (IdNumber.checked == true  )
    {
        students.sort(IdNum);
        function IdNum(a , b){
        return b.id - a.id;
         }
      
       
    }
    else if (SName.checked == true )
    {
    
        students.sort(StudentN);
        function StudentN(a , b){
            if (a.student.toLowerCase() < b.student.toLowerCase()) {return -1 ;}
            if (a.student.toLowerCase() > b.student.toLowerCase()) {return  1 ;}
         return 0 ;
         }
       
       
    }
    else  if ( progrs.checked == true  )
    {
        students.sort(Progrs);
        function Progrs(a , b){
                if (a.programme.toLowerCase() < b.programme.toLowerCase()) {return -1 ;}
                if (a.programme.toLowerCase() > b.programme.toLowerCase()) {return  1 ;}
             return 0 ;
             }
           
           
        }

        /*****************Table**************** */
        $html=` <table class="student"  border="1">
                        <tbody>
                            <tr>
                                <th> متسلسل </th>
                                <th>اسم مستخدم </th>
                                <th> اسم الطالب </th>
                                <th> البرنامج</th>
                                
            
                            </tr>`;
            
            
            $end=`</tbody>
            
            </table>`;
            
            students.forEach(myFunction);
             
            function myFunction(Student) {
                $html +=` <tr>
                    <td>`+Student.id+`</td>
                    <td>`+Student.user+`</td>
                            <td>`+Student.student+`</td>
            
                    <td>`+Student.programme+`</td>
            
            
                    </tr>`
            }
            
            
            
                document.getElementById("abcd").innerHTML=$html+$end;
}

/*****************Convert to json**************** */
function myJson()
{
    let My_Json = JSON.stringify(students);
    document.getElementById('WriteJson').value = My_Json ;
}

