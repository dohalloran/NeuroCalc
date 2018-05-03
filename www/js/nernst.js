            var slider1 = document.getElementById("myRange1");
            var output1 = document.getElementById("demo1");
            output1.innerHTML = slider1.value;
            slider1.oninput = function() {
                output1.innerHTML = this.value;
            }
            var slider2 = document.getElementById("myRange2");
            var output2 = document.getElementById("demo2");
            output2.innerHTML = slider2.value;
            slider2.oninput = function() {
                output2.innerHTML = this.value;
            }
            var slider3 = document.getElementById("myRange3");
            var output3 = document.getElementById("demo3");
            output3.innerHTML = slider3.value;
            slider3.oninput = function() {
                output3.innerHTML = this.value;
            }

            

            function calcFunction() {
                var valence;
                var radios = document.querySelector('input[name="ion"]:checked').value;
                if (radios === "Sodium") {
                    valence = 1;
                } else if (radios === "Potassium") {
                    valence = 1;
                } else if (radios === "Chloride") {
                    valence = -1;
                } else {
                    valence = 2;
                }
                console.log("Valence: "+ valence);
                console.log("ion: "+ radios);
                console.log("in: "+ slider1.value);
                console.log("out: "+ slider2.value);
                console.log("tempinC: "+ slider3.value);
                var tempInKelvin = parseInt(slider3.value) + parseFloat("273.15");
                console.log("tempinK: "+ tempInKelvin);
                var RT = 8.314472 * tempInKelvin;
                console.log("RT:" + RT);
                var F = 96485 * valence;
                console.log("faraday by valence: "+ F);
                var RTF = RT / F;
                console.log("RT/F: "+RTF);
                var fin = (RTF *  2.303)*1000;
                console.log("fin: "+fin);
                // conversion factor ln to log10 2.303
                var diff = parseInt(slider2.value) / parseInt(slider1.value);
                var logged = Math.log10(diff);
                var finale = fin * logged;
                console.log("Answer: "+ finale.toFixed(3));
                //var myTextField = document.getElementById('myTextarea').value;
                var myTextField = radios + ": " + finale.toFixed(3) + "mV";
                console.log(myTextField);   
                var mainDiv = document.getElementsByClassName('main')[0];
                mainDiv.removeChild(mainDiv.childNodes[0]);
                mainDiv = document.getElementsByClassName('main')[0];
                var tHeader = document.createElement("p");
                tHeader.appendChild(document.createTextNode(myTextField));
                tHeader.setAttribute("class", "pAboveTable");
                mainDiv.appendChild(tHeader);
            }

               