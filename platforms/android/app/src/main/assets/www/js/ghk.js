
            var slider4 = document.getElementById("myRange4");
            var output4 = document.getElementById("demo4");
            output4.innerHTML = slider4.value;
            slider4.oninput = function() {
                output4.innerHTML = this.value;
            }
            var slider5 = document.getElementById("myRange5");
            var output5 = document.getElementById("demo5");
            output5.innerHTML = slider5.value;
            slider5.oninput = function() {
                output5.innerHTML = this.value;
            }
            var slider6 = document.getElementById("myRange6");
            var output6 = document.getElementById("demo6");
            output6.innerHTML = slider6.value;
            slider6.oninput = function() {
                output6.innerHTML = this.value;
            }

            var slider7 = document.getElementById("myRange7");
            var output7 = document.getElementById("demo7");
            output7.innerHTML = slider7.value;
            slider7.oninput = function() {
                output7.innerHTML = this.value;
            }
            var slider8 = document.getElementById("myRange8");
            var output8 = document.getElementById("demo8");
            output8.innerHTML = slider8.value;
            slider8.oninput = function() {
                output8.innerHTML = this.value;
            }
            var slider9 = document.getElementById("myRange9");
            var output9 = document.getElementById("demo9");
            output9.innerHTML = slider9.value;
            slider9.oninput = function() {
                output9.innerHTML = this.value;
            }

            var slider10 = document.getElementById("myRange10");
            var output10 = document.getElementById("demo10");
            output10.innerHTML = slider10.value;
            slider10.oninput = function() {
                output10.innerHTML = this.value;
            }
             
                  function calcGHKFunction() {
                var permNa = document.getElementById("na").value;
                console.log(permNa);
                var permK = document.getElementById("k").value;
                console.log(permK);
                var permCl = document.getElementById("cl").value;
                console.log(permCl);

                console.log(slider4.value);
                console.log(slider5.value);
                console.log(slider6.value);
                console.log(slider7.value);
                console.log(slider8.value);
                console.log(slider9.value);
                console.log(slider10.value);
      
                var tempInKelvin = parseInt(slider10.value) + parseFloat("273.15");
                console.log("tempinC: "+ slider10.value);
    
                console.log("tempinK: "+ tempInKelvin);
                console.log("tempinC: "+ slider9.value);
    
                var RT = 8.314472 * tempInKelvin;
                console.log("RT:" + RT);
                var RTF = RT / 96485;
                console.log("RT/F: "+RTF);
                // conversion factor ln to log10 2.303
                var fin = (RTF *  2.303)*1000;
                console.log("fin: "+fin);

                var rightFin = (((permNa*slider5.value) + (permK*slider7.value) + (permCl*slider8.value))/((permNa*slider4.value) + (permK*slider6.value) + (permCl*slider9.value)))
                console.log("right side: " + rightFin);
                
                var logged = Math.log10(rightFin);
                
                var result = fin * logged;
                console.log("Answer: "+ result.toFixed(3));


                //var myTextField = document.getElementById('myTextarea').value;
                var myTextField = "GHK: " + result.toFixed(3) + "mV";
                console.log(myTextField);

                var mainDiv = document.getElementsByClassName('main')[0];
                mainDiv.removeChild(mainDiv.childNodes[0]);
                mainDiv = document.getElementsByClassName('main')[0];
                var tHeader = document.createElement("p");
                tHeader.appendChild(document.createTextNode(myTextField));
                tHeader.setAttribute("class", "pAboveTable");
                mainDiv.appendChild(tHeader);
            }