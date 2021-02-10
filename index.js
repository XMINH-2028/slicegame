var i,j,k,n,t,r,b,l,x,y,timer,nbtd; 
        var tdnumber=[0];
        var imgnumber=[0];
        var topimg=[0];
        var leftimg=[0];
        var topclip=[0];
        var leftclip=[0];
        var topimgclip=[0];
        var leftimgclip=[0];
        var cliptop=[0];
        var clipright=[0];
        var clipbottom=[0];
        var clipleft=[0];
        var sizemain;
        var text="";
        var nube=0;
        var hr,me,sd;
        var setsize;
        var choicesize=0;
        var choiceimage=0;
        var adds="";
        var layout = 0;
        var idtable = document.getElementById('table');
        var idpic=document.getElementById('imgrd');
        var addpic = document.getElementById('img1');
        var srcpic=['images/butterfly.jpg','images/cat.jpg','images/dolphin.jpg','images/dragonfly.jpg','images/elephant.jpg',
        'images/koala.jpg','images/Lighthouse.jpg','images/lotus.jpg','images/monkey.jpg','images/rose.jpg','images/sunflower.jpg','images/winter.jpg'];    
        var btn=['rgba(0,123,255,0.5)','rgba(40,167,69,0.5)','rgba(255,193,7,0.5)','rgba(220,53,69,0.5)'];
        var srcrandom="";
        var saveh,savew,idpich,idpicw;
        var saveheight,savewidth;
        var reSizenb=0;
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        function getSize(a,b) {
            if(screen.width<1360) {
                document.getElementById('main').style.height = window.innerHeight +'px';
            } else {
                document.getElementById('main').style.height = '100vh';
            }
    
            idpich=idpic.offsetHeight;
            idpicw= idpic.offsetWidth;
            if(b>a) {
                if (idpicw/(b/a)<=idpich) {
                    addpic.style.height = idpicw/(b/a)+'px';
                    addpic.style.width = idpicw+'px';
                    $("#picture>div>div").style.bottom = idpich-idpicw/(b/a)+'px';
                    $("#imgrd button").style.width = idpicw+'px';
                    $("#imgrd label").style.width = idpicw+'px';
                } else {
                    addpic.style.height = idpich+'px';
                    addpic.style.width = (b/a)*idpich+'px';
                    $("#picture>div>div").style.bottom ='0px';
                    $("#imgrd button").style.width = (b/a)*idpich+'px';
                    $("#imgrd label").style.width = (b/a)*idpich+'px';
                }       
            } else {
                if (idpich/(a/b)<=idpicw) {
                    addpic.style.height = idpich+'px';
                    addpic.style.width = idpich/(a/b)+'px';
                    $("#picture>div>div").style.bottom = '0px';
                    $("#imgrd button").style.width = idpich/(a/b)+'px';
                    $("#imgrd label").style.width = idpich/(a/b)+'px';
                } else {
                    addpic.style.height = (a/b)*idpicw+'px';
                    addpic.style.width = idpicw+'px';
                    $("#picture>div>div").style.bottom = idpich-(a/b)*idpicw+'px';
                    $("#imgrd button").style.width = idpicw+'px';
                    $("#imgrd label").style.width = idpicw+'px';
                }   
            }
            setFont($("#imgrd button"),$("#imgrd label"));
        }
        function setFont(a,b) {
            var str1 = a.innerHTML;
            var str2= b.innerHTML;
            var w = a.offsetWidth;
            var str;
            if (str1.length<str2.length) {
                str=str2;
            } else {
                str=str1;
            }
            $("#imgrd button").style.fontSize = w/str.length*1.8+'px';
            $("#imgrd label").style.fontSize = w/str.length*1.8+'px';
           
        }
        
        function setPic() {
                    if (window.innerHeight<window.innerWidth/1.5) {
                        document.getElementById('content').style.flexDirection = 'row';
                        document.getElementById('top').style.width = '50%';
                        document.getElementById('top').style.height = '100%';
                        document.getElementById('picture').style.width = '50%';
                        document.getElementById('picture').style.height = '100%';
                        $("#top>div").style.flexDirection = 'column';
                        for (let i=0;i<$$("#top button").length;i++){
                            $$("#top button")[i].style.minWidth = '100px';
                        }
                        if (srcrandom==="") {
                            srcrandom=Math.floor(Math.random()*12);
                            addpic.setAttribute('src',srcpic[srcrandom]);
                            addpic.addEventListener("load", function(){
                                saveh=this.naturalHeight;
                                savew=this.naturalWidth;
                                getSize(saveh,savew);   
                            });
                        } else {
                            getSize(saveh,savew);
                        }
                    } else {
                        document.getElementById('content').style.flexDirection = 'column';
                        document.getElementById('top').style.width = '100%';
                        document.getElementById('top').style.height = '20%';
                        document.getElementById('picture').style.width = '100%';
                        document.getElementById('picture').style.height = '80%';
                        $("#top>div").style.flexDirection = 'row';
                        for (let i=0;i<$$("#top button").length;i++){
                            $$("#top button")[i].style.minWidth = 'auto';
                        }
                        if (srcrandom==="") {
                            srcrandom=Math.floor(Math.random()*12);
                            addpic.setAttribute('src',srcpic[srcrandom]);
                            addpic.addEventListener("load", function(){
                                saveh=this.naturalHeight;
                                savew=this.naturalWidth;
                                getSize(saveh,savew);   
                            });
                        } else {
                            getSize(saveh,savew);
                        }
                    } 
                    setTimeout(()=>{
                            $("#picture>div>div").style.display="flex";
                            setFont($("#imgrd button"),$("#imgrd label"))
                        },50)
        }


        setPic();

        
        window.onresize=function(){
            if (layout===1) {
                setDisplay();
                setSize();
                cutResize();
            } else {
                if (reSizenb===0) {
                   setPic(); 
                } 
            } 
        }


         //Hàm chọn kích thước
        function choosesize(elmn,clr0,clr1){
            sizemain=clr0;
            for (let i=0;i<$$('.size').length;i++) {
                $$('.size')[i].style.outline = 'none';
            }
            elmn.style.outline = `5px solid ${btn[clr1]}`;
            if (choicesize == 0) {
            choicesize += 1;
            }
            if ((choiceimage+choicesize) == 2) {
                setTimeout(()=>{
                    Cut();
                },6)
            }
        }


        var save_select=0;
        //Upload image
        function Selectimg(event) {
            save_select=1;
            adds=URL.createObjectURL(event.target.files[0]);
            addpic.setAttribute('src',URL.createObjectURL(event.target.files[0]));
            addpic.addEventListener("load", function(){
                saveh=this.naturalHeight;
                savew=this.naturalWidth;
                getSize(saveh,savew); 
                addpic.style.borderRadius="30px";
                $("#imgrd>div label").style.borderRadius="0 0 30px 30px";
                $("#imgrd>div>button").innerHTML= 'Click me to select default image!';
                $("#imgrd>div label").innerHTML= 'Selected your image!';
                if (choiceimage == 0) {
                    choiceimage += 1;
                }
                if ((choiceimage+choicesize) == 2) {
                    reSizenb=1;
                    setTimeout(()=>{
                        Cut();
                    },6)
                    
                }
            })
        }
        //Hàm chọn ảnh
        function picture() {
            save_select=0;
            adds = srcpic[srcrandom];
            addpic.setAttribute('src',srcpic[srcrandom]);
            addpic.addEventListener("load", function(){
                saveh=this.naturalHeight;
                savew=this.naturalWidth;
                getSize(saveh,savew);
                addpic.style.borderRadius="30px";
                $("#imgrd>div label").style.borderRadius="0 0 30px 30px";
                $("#imgrd>div>button").innerHTML= 'Selected default image!';
                $("#imgrd>div label").innerHTML= 'Click me to select your image!';
                document.getElementById('sl_image').value = "";
                if (choiceimage == 0) {
                    choiceimage += 1;
                }
                if ((choiceimage+choicesize) == 2) {
                    reSizenb=1;
                    setTimeout(()=>{
                        Cut();
                    },6)
                } 
            })
            
        }

        function creatNext(){
            var node = document.createElement("button");
            node.innerHTML="NEXT";
            node.setAttribute('class','btn-lg btn-success text-light');
            node.setAttribute('onclick','Next()');
            node.setAttribute('id','next');
            if(screen.width<1024) {
               node.style.padding = '0px 10px';
            } else {
                node.style.padding = '3px 10px';
            }
            document.getElementById('topleft').appendChild(node);
        }

        //Next
        var count_door=0;
        function Next() { 
        let y=document.getElementById(`cheerup`);
        y.play();
        if (count_door<11) {
            count_door+=1;
        } else {
            count_door=0;
            sizemain+=1;
        }
            if(save_select===0) {
                if(srcrandom<11) {
                    srcrandom+=1;
                } else {
                    srcrandom=0;
                }
                adds=srcpic[srcrandom];
                addpic.setAttribute('src',srcpic[srcrandom]);
                addpic.addEventListener("load", function(){
                    saveh=this.naturalHeight;
                    savew=this.naturalWidth;
                })
            } else {
                sizemain+=1;
            }
            
            Cut();
            document.getElementById('xchoice').innerHTML='X-SLICE';
        }
        //Hàm cắt ảnh
        function getOffset(el) {
            var _x = 0;
            var _y = 0;
            while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
                _x += el.offsetLeft - el.scrollLeft;
                _y += el.offsetTop - el.scrollTop;
                el = el.offsetParent;
            }
            return { top: _y, left: _x };
        }

        function setRow() {
            document.getElementById('layout').style.flexDirection = 'row';
            document.getElementById('nexttop').style.flexDirection = 'column';
            document.getElementById('nexttop').style.minHeight = '180px';
            document.getElementById('nexttop').style.width = '45%';
            document.getElementById('nexttop').style.minWidth = '260px';
            document.getElementById('nexttop').style.height = '100%';
            document.getElementById('tablewrap').style.width = '55%';
            document.getElementById('tablewrap').style.height = '100%';
           document.getElementById('topleft').style.flexDirection = 'row';
            document.getElementById('time').style.fontSize = '1rem';
            document.getElementById('xchoice1').style.fontSize = '2.5rem';
            for (let i=0;i<$$('#nexttop .btn-lg a').length;i++) {
                $$('#nexttop .btn-lg a')[i].style.padding = '3px 10px';
                 $$('#nexttop .btn-lg a')[i].style.marginBottom = '0px';
            }
            for (let i=0;i<$$('#nexttop .btn-lg').length;i++) {
                $$('#nexttop .btn-lg')[i].style.padding = '3px 10px';
                 $$('#nexttop .btn-lg')[i].style.marginBottom = '0px';
            }
        }
        function setColumn() {
            document.getElementById('layout').style.flexDirection = 'column';
            document.getElementById('nexttop').style.width = '100%';
            document.getElementById('nexttop').style.flexDirection = 'column';
            document.getElementById('nexttop').style.minHeight = '180px';
            document.getElementById('nexttop').style.minWidth = 'auto';
            document.getElementById('nexttop').style.height = '30%';
            document.getElementById('tablewrap').style.width = '100%';
            document.getElementById('tablewrap').style.height = '70%';
            document.getElementById('topleft').style.flexDirection = 'row';
            document.getElementById('time').style.fontSize = '1rem';
            document.getElementById('xchoice1').style.fontSize = '2.5rem';
            for (let i=0;i<$$('#nexttop .btn-lg a').length;i++) {
                $$('#nexttop .btn-lg a')[i].style.padding = '3px 10px';
                $$('#nexttop .btn-lg a')[i].style.marginBottom = '0px';
            }
            for (let i=0;i<$$('#nexttop .btn-lg').length;i++) {
                $$('#nexttop .btn-lg')[i].style.padding = '3px 10px';
                 $$('#nexttop .btn-lg')[i].style.marginBottom = '0px';
            }
        }
        function setRowMb() {
            document.getElementById('layout').style.flexDirection = 'row';
            document.getElementById('nexttop').style.flexDirection = 'column';
            document.getElementById('nexttop').style.minHeight = 'auto';
            document.getElementById('nexttop').style.width = '20%';
            document.getElementById('nexttop').style.minWidth = 'auto';
            document.getElementById('nexttop').style.height = '100%';
            document.getElementById('tablewrap').style.width = '80%';
            document.getElementById('tablewrap').style.height = '100%';
            document.getElementById('topleft').style.flexDirection = 'column';
            document.getElementById('time').style.fontSize = '13px';
            document.getElementById('xchoice1').style.fontSize = '28px';
            for (let i=0;i<$$('#nexttop .btn-lg a').length;i++) {
                $$('#nexttop .btn-lg a')[i].style.padding = '0 10px';
                $$('#nexttop .btn-lg a')[i].style.marginBottom = '4px';
            }
            for (let i=0;i<$$('#nexttop .btn-lg').length;i++) {
                $$('#nexttop .btn-lg')[i].style.padding = '0 10px';
                $$('#nexttop .btn-lg')[i].style.marginBottom = '4px';
            }
        }
        function setColumnMb() {
            document.getElementById('layout').style.flexDirection = 'column';
            document.getElementById('nexttop').style.flexDirection = 'column';
            document.getElementById('nexttop').style.minHeight = '140px';
            document.getElementById('nexttop').style.width = '100%';
            document.getElementById('nexttop').style.minWidth = 'auto';
            document.getElementById('nexttop').style.height = '15%';
            document.getElementById('tablewrap').style.width = '100%';
            document.getElementById('tablewrap').style.height = '85%';
            document.getElementById('topleft').style.flexDirection = 'row';
            document.getElementById('time').style.fontSize = '13px';
            document.getElementById('xchoice1').style.fontSize = '28px';
            for (let i=0;i<$$('#nexttop .btn-lg a').length;i++) {
                $$('#nexttop .btn-lg a')[i].style.padding = '0 10px';
                 $$('#nexttop .btn-lg a')[i].style.marginBottom = '0px';
            }
            for (let i=0;i<$$('#nexttop .btn-lg').length;i++) {
                $$('#nexttop .btn-lg')[i].style.padding = '0 10px';
                 $$('#nexttop .btn-lg')[i].style.marginBottom = '0px';
            }

        }
        function setDisplay() {
            if(screen.width<1024) {
                /*document.body.style.overflow = 'hidden';
                document.body.style.height = window.innerHeight +'px';
                document.getElementById('main').style.height = window.innerHeight +'px';
                saveheight = document.body.offsetHeight;
                savewidth = document.body.offsetWidth;
                if (window.innerHeight<window.innerWidth) {
                    if (saveh<savew) {
                        document.body.style.transform = 'rotate(0deg)';
                        setRow();
                    } else {
                        document.getElementById('main').style.height = savewidth+'px';
                        document.getElementById('main').style.width = saveheight+'px';
                        setColumn();
                        document.getElementById('main').style.transform = `rotate(-90deg) translateX(${(savewidth-saveheight)/2}px)`;
                    }
                } else {
                    document.body.style.transform = 'rotate(0deg)';
                    setRow();
                }*/
                document.getElementById('main').style.height = window.innerHeight +'px';
                if (window.innerHeight<window.innerWidth/1.2) {
                    setRowMb();
                } else {
                    setColumnMb();
                }
            } else {
                /*document.body.style.height = '100vh';
                document.body.style.overflow = 'auto';*/
                document.getElementById('main').style.height = '100vh';
                if (window.innerHeight<window.innerWidth/1.2) {
                    setRow();
                } else {
                    setColumn();
                }
            }    
        }
        function setLayout(){
            layout=1;
            clearInterval(visible);
            timer=0;
            nbtd=0;
            sd=0;
            me=0;
            hr=0; 
            document.getElementById("nexttop").innerHTML=`<h1 class="h1 text-center text-primary pt-2 mb-3" id="xchoice1">X-SLIDE</h1>
                        <div class="time d-flex justify-content-center align-items-center mb-2" id='time'>
                            <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-alarm text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 15A6 6 0 1 0 8 3a6 6 0 0 0 0 12zm0 1A7 7 0 1 0 8 2a7 7 0 0 0 0 14z"/>
                                <path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.053.224l-1.5 3a.5.5 0 1 1-.894-.448L7.5 8.882V5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
                                <path fill-rule="evenodd" d="M11.646 14.146a.5.5 0 0 1 .708 0l1 1a.5.5 0 0 1-.708.708l-1-1a.5.5 0 0 1 0-.708zm-7.292 0a.5.5 0 0 0-.708 0l-1 1a.5.5 0 0 0 .708.708l1-1a.5.5 0 0 0 0-.708zM5.5.5A.5.5 0 0 1 6 0h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                                <path d="M7 1h2v2H7V1z"/>
                              </svg>
                            <span id="hour" class="text-danger">00</span>:<span id="minute" class="text-warning">00</span>:<span id="second" class="text-success">00</span>
                        </div>
                        <div class="d-flex justify-content-center align-items-center mb-1" id="topleft">
                            <button class="btn-lg btn-danger"><a href="index.html" id='home' class="text-light">HOME</a></button>
                            <button class="btn-lg btn-warning mx-sm-2 mx-1 text-light" onclick="Cut()">RESET</button>
                        </div>`;
            document.getElementById("hour").innerHTML="00";
            document.getElementById("minute").innerHTML="00";
            document.getElementById("second").innerHTML="00";
            document.getElementById("cover").style.display="none";
            document.getElementById("content").style.display="none";
            document.getElementById("xchoice").style.display="none";
            document.getElementById("layout").style.display="flex";
                
        }
        document.getElementById('content').onmousedown = ()=>{
            let x=document.getElementById(`cheerup`);
            x.play();
        }
        function autoPlay(clr) {
            let x=document.getElementById(`note${clr}`);
            x.play();
            let y=document.getElementById(`cheerup`);
            y.pause();
        }
        var addtb = document.getElementById('tablewrap');
        var sizeh,sizew; /*Kích thước khung cắt ảnh*/
        var savenote = 0;
        function setSize() {
            n=0;
            k=0;
            nube=0;
            text="";
            for (i=1;i<=sizemain;i++){
                text += "<tr>";
                for (j=1;j<=sizemain;j++){
                    nube += 1;
                    if(savenote<8) {
                      savenote+=1; 
                    } else {
                        savenote=1;
                    }
                    text += `<td id='tdtd${nube}'>
                        <img src='' alt='' id='td${nube}' onmousedown='set(event,this,${nube})' ontouchstart='set(event,this,${nube})' onclick='autoPlay(${nube})'>
                        <audio id='note${nube}'>
                          <source src='audio/note${savenote}.mp3' type='audio/mpeg'>
                        </audio>
                    </td>`;
                }
                text += "</tr>";
            }
            document.getElementById("table").innerHTML=text;
            /*Thiết lập đơn vị theo kích thước màn hình*/
            if (saveh<=addtb.offsetHeight-30 && savew<=addtb.offsetWidth) {
                sizeh = Math.floor(saveh);
                sizew = 0;
            } else {
                if (addtb.offsetHeight-30<addtb.offsetWidth) {
                    if (saveh>savew) {
                        sizeh = Math.floor(addtb.offsetHeight-30); 
                        sizew = 0;
                    } else {
                        if (savew/saveh>addtb.offsetWidth/(addtb.offsetHeight-30)) {
                            sizew = Math.floor(addtb.offsetWidth);
                            sizeh = 0;
                        } else {
                            sizeh = Math.floor(addtb.offsetHeight-30); 
                            sizew = 0;
                        }
                    }
                    
                } else {
                    if (saveh<savew) {
                        sizew = Math.floor(addtb.offsetWidth);
                        sizeh = 0; 
                    } else {
                        if (saveh/savew>(addtb.offsetHeight-30)/addtb.offsetWidth) {
                            sizeh = Math.floor(addtb.offsetHeight-30); 
                            sizew = 0;  
                        } else {
                            sizew = Math.floor(addtb.offsetWidth);
                            sizeh = 0; 
                        }
                    } 
                }
            }
            if (sizeh!=0) {
                if (sizeh%sizemain==0) {
                    sizeh = sizeh;
                    sizew = Math.floor(sizeh*(savew/saveh));
                    if (sizew%sizemain==0) {
                        sizew = sizew;
                    } else {
                        for (i=1;i<=(sizemain-1);i++){
                            sizew=sizew-1;
                            if (sizew%sizemain==0){
                                i=sizemain;
                            }
                        }
                    }       
                } else {
                    for (i=1;i<=(sizemain-1);i++){
                        sizeh=sizeh-1;
                        if (sizeh%sizemain===0){
                            i=sizemain;
                            sizew = Math.floor(sizeh*(savew/saveh));
                            if (sizew%sizemain==0) {
                                sizew = sizew;
                            } else {
                                for (i=1;i<=(sizemain-1);i++){
                                    sizew=sizew-1;
                                    if (sizew%sizemain==0){
                                        i=sizemain;
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (sizew!=0) {
                if (sizew%sizemain==0) {
                    sizew = sizew;
                    sizeh = Math.floor(sizew*(saveh/savew));
                    if (sizeh%sizemain==0) {
                        sizeh = sizeh;
                    } else {
                        for (i=1;i<=(sizemain-1);i++){
                            sizeh=sizeh-1;
                            if (sizeh%sizemain==0){
                                i=sizemain;
                            }
                        }
                    }
                } else {
                    for (i=1;i<=(sizemain-1);i++){
                        sizew=sizew-1;
                        if (sizew%sizemain===0){
                            i=sizemain;
                            sizeh = Math.floor(sizew*(saveh/savew));
                            if (sizeh%sizemain==0) {
                                sizeh = sizeh;
                            } else {
                                for (i=1;i<=(sizemain-1);i++){
                                    sizeh=sizeh-1;
                                    if (sizeh%sizemain==0){
                                        i=sizemain;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
            for (i=1;i<=sizemain*sizemain;i++){
                document.getElementById("td"+i).style.position="absolute";
                document.getElementById("tdtd"+i).style.animationName="example";
            }
          
            document.getElementById("table").style.width=sizew +"px";
            document.getElementById("table").style.height=sizeh +"px";
            for (i=1;i<=sizemain*sizemain;i++){
                document.getElementById("td"+i).style.height=sizeh+"px";
                document.getElementById("td"+i).style.width=sizew+"px";
            }

            /*Vị trí top của khung chứa ảnh căt-dùng cho random*/
            for (i = 1; i <= sizemain*sizemain; i++){
                topimg[i]=n*sizeh/sizemain;
                k++;
                if (k%sizemain == 0){
                    n++;
                }
            }
            /*Vị trí left của khung chứa ảnh căt-dùng cho random*/
            n=0;
            for (i = 1; i <= sizemain*sizemain; i++){
                leftimg[i]=n*sizew/sizemain;
                n++;
                if (n%sizemain == 0){
                    n = 0;
                }
            }
            /*Vị trí top của khung ảnh cắt-dùng cho random*/
            n=0;
            k=0;
            for (i = 1; i <= sizemain*sizemain; i++){
                topclip[i]=n*sizeh/sizemain;
                k++;
                if (k%sizemain == 0){
                    n++;
                }
            }
            /*Vị trí left của khung ảnh cắt-dùng cho random*/
            n=0;
            for (i = 1; i <= sizemain*sizemain; i++){
                leftclip[i]=n*sizew/sizemain;
                n++;
                if (n%sizemain == 0){
                    n = 0;
                }
            }
        }
        function cutResize(){
            /*Vị trí của khung ảnh khi thực hiện cắt*/ 
            for (i = 1; i <= sizemain*sizemain; i++){
                topimgclip[i] = topimg[tdnumber[i]] - topclip[imgnumber[i]];
                leftimgclip[i] = leftimg[tdnumber[i]] - leftclip[imgnumber[i]];
            }
            /*Lấy các thông số khi thực hiện cắt cho các ô ảnh từ 1 đến 25*/ 
            n=0;
            t=0;
            r=sizew/sizemain;
            b=sizeh/sizemain;
            l=0;
            for (i = 1; i <= sizemain*sizemain; i++){
                cliptop[i]=t;
                clipright[i]=r;
                clipbottom[i]=b;
                clipleft[i]=l;
                r=r + sizew/sizemain;
                l=l + sizew/sizemain;
                if (r == sizew*(sizemain+1)/sizemain){
                    t = t + sizeh/sizemain;
                    b = b + sizeh/sizemain;
                    r = sizew/sizemain;
                    l = 0;
                }
            }
            /*Thực hiện cắt ảnh*/ 
            t=0;
            r=0;
            b=0;
            l=0;
            k=1;
            for (i = 1; i <= sizemain*sizemain;){
                for (j = 1; j <= sizemain*sizemain; j++){
                    if(tdnumber[j] == i){
                        x=document.getElementById("td" + tdnumber[j]);
                        x.src=adds;
                        x.style.animationDuration= k+"s";
                        k=k+0.2;
                        x.style.top = topimgclip[j] + "px";
                        x.style.left= leftimgclip[j] + "px";
                        t = cliptop[imgnumber[j]];
                        r = clipright[imgnumber[j]];
                        b = clipbottom[imgnumber[j]];
                        l = clipleft[imgnumber[j]];
                        x.style.clip= "rect("+ t + "px,"+ r + "px,"+ b + "px,"+ l + "px)";
                        i++;
                    }
                }
            }
        }
        function Cut() {
            setLayout();
            setDisplay();
            setSize();
            let y=document.getElementById(`cheerup`);
            y.play();
            
            /*Random vị trí khung chứa ảnh cắt*/ 
            for (i = 1; i <= sizemain*sizemain;)
            {
                tdnumber[i]=Math.ceil(Math.random()*sizemain*sizemain);
                k=0;
                for (j = 1; j < i; j++){
                        if (tdnumber[i] == tdnumber[j]){
                            k = k + 1;
                        }
                }
                if (k == 0){
                    i = i + 1;
                }
            }
            /*Random vị trí ảnh nằm trong khung chứa*/ 
            for (i = 1; i <= sizemain*sizemain;)
            {
                imgnumber[i]=Math.ceil(Math.random()*sizemain*sizemain);
                k=0;
                for (j = 1; j < i; j++){
                        if (imgnumber[i] == imgnumber[j]){
                            k = k + 1;
                        }
                }
                if (k == 0){
                    i = i + 1;
                }
            }
            cutResize();
            /*Set animationDuration cho khung kết quả + tạo 2 mảng thể hiện sự nhập xuất của ảnh ở 
            phần ảnh random và ảnh kết quả + khai báo biến chứa ảnh đã bị ẩn ở phần kết quả khi thực
            hiện trả về hoặc đổi ảnh*/ 
            k=1;
            for (i = 1; i <= sizemain*sizemain; i++){
                x=document.getElementById("tdtd"+i);
                x.style.animationDuration=k+"s";
                k=k+0.1;
            }
        }
        
        //Hàm bắt đầu chơi
        var visible;
        function start(){
                //Set Time 
                visible=setInterval(()=>{
                        sd +=1;
                        if (sd<10){
                            document.getElementById("second").innerHTML="0"+sd;
                        } else {
                            if (sd==60){
                                document.getElementById("second").innerHTML="00";
                            }else{
                                document.getElementById("second").innerHTML=sd;
                            }
                        }  
                        if (sd==61){
                            me += 1;
                            if (me<10){
                                document.getElementById("minute").innerHTML="0"+me;
                            }else {
                                if (me==60){
                                    document.getElementById("minute").innerHTML="00";
                                    me=0;
                                    hr += 1;
                                    if (hr<10){
                                        document.getElementById("minute").innerHTML="0"+hr;
                                    } else {
                                        document.getElementById("minute").innerHTML=hr;
                                    }
                                }else{
                                    document.getElementById("minute").innerHTML=me;
                                }
                            }
                            sd=1;
                        }
                    },1000)
            }

        /*Counttouch*/
        var countTouch=0;
        function countTouches(e) {
            countTouch = e.touches.length;
            if (countTouch===2) {
               e.preventDefault();
            }
        }


        /*Onclick*/
        var savefirst=0;
        var savesecond=0;
        function set(e,elmn,clr){
            e.preventDefault();
            var timercount=0;
            if (timer===0) {
                start();
                timer=1;
            }
            if (nbtd===0) {
                nbtd = clr;/*Biến chứa vị trí ảnh xuất hiện ở phần kết quả*/
                elmn.style.opacity = "0.4";
            } else if(nbtd===clr) {
                nbtd = 0;
                elmn.style.opacity = "1";
            } else {
                for (i = 1; i <= sizemain*sizemain; i++){
                    if (tdnumber[i]===nbtd) {
                        x = document.getElementById("td" + clr);
                        x.style.top = (topimg[clr] - topclip[imgnumber[i]]) + "px";
                        x.style.left= (leftimg[clr] - leftclip[imgnumber[i]]) + "px";
                        t = cliptop[imgnumber[i]];
                        r = clipright[imgnumber[i]];
                        b = clipbottom[imgnumber[i]];
                        l = clipleft[imgnumber[i]];
                        x.style.clip= "rect("+ t + "px,"+ r + "px,"+ b + "px,"+ l + "px)";
                        savefirst=i;
                    }
                    if (tdnumber[i]===clr) {
                        x = document.getElementById("td" + nbtd);
                        x.style.top = (topimg[nbtd] - topclip[imgnumber[i]]) + "px";
                        x.style.left= (leftimg[nbtd] - leftclip[imgnumber[i]]) + "px";
                        t = cliptop[imgnumber[i]];
                        r = clipright[imgnumber[i]];
                        b = clipbottom[imgnumber[i]];
                        l = clipleft[imgnumber[i]];
                        x.style.clip= "rect("+ t + "px,"+ r + "px,"+ b + "px,"+ l + "px)";
                        x.style.opacity='1';
                        savesecond=i;
                    }
                }
                tdnumber[savefirst]=clr;
                tdnumber[savesecond]=nbtd;
                nbtd=0;
            }
            for (i=1;i<=sizemain*sizemain;i++) {
                if(parseFloat(document.getElementById("td"+i).style.left) == 0) {
                    if (parseFloat(document.getElementById("td"+i).style.top) == 0) {
                        timercount += 1;
                    }
                }
            }
            if (timercount == (sizemain*sizemain)) {
                document.getElementById("xchoice1").innerHTML="CONGRATULATION!";
                document.getElementById("cover").style.display="block";
                creatNext();
                clearInterval(visible);
            }
        }