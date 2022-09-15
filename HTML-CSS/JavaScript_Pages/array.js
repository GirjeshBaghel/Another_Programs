
  function call() {
    var k = "The respective values are :</br>";
   var input = document.getElementsByName('array[]');

   for (var i = 0; i < input.length; i++) {
    var a = input[i];
    //k = k + "array[" + i + "].value= "+ a.value + " ";
   k=k+"array["+i+"].value : "+a.value+"</br>";
   
   }

   document.getElementById("par").innerHTML = k;
   document.getElementById("po").innerHTML = "Output";
  }
  function submit1()
  {
     var k = "The Students details are : ";
    var name1=  document.getElementById('ab').value;
    //document.write(name1);
     var hobby1 = document.getElementById('hobby').value;
     var email1 = document.getElementById('email').value;
     var marks1 = document.getElementById('marks').value;
     document.getElementById("out").innerHTML = k;
     document.getElementById("name1").innerHTML = name1;
     document.getElementById("hobby1").innerHTML = hobby1;
     document.getElementById("email1").innerHTML = email1;
     document.getElementById("marks1").innerHTML = marks1;
  }

  function save1()
  {
    var arr = new Array(" ")
  }
