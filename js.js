$(document).ready(function(){
    document.querySelector("body").style.height = window.innerHeight + "px";
    $("#btn").click(function(){
        const chk = [];
        let autoT;
        
        const myFn = () => {
            // 랜덤 숫자 추출
            let rdn = Math.ceil(Math.random() * 45);
            // let rdn = Math.ceil(Math.random() * 45).sort(() => Math.random()).sort(() => Math.random()).sort(() => Math.random());
            // let rdn = rdn.sort(() => Math.random());
            // console.log("처음랜덤:", rdn);

            // console.log(rdn);

            // 다시 랜덤
            while (chkFn(rdn)) {
                rdn = Math.ceil(Math.random() * 45);
                // console.log("다시랜덤:", rdn);
            } ///////// while /////////////
            // console.log("rdn", rdn)
            
            const lot = document.querySelectorAll(".lotto");
            
            chk.push(rdn);
            
            if (chk.length < 6) autoT = myFn();

            chk.sort(function(a, b) {
                return a - b;
            });

            lot[0].innerText = `${chk[0]}`;
            lot[1].innerText = `${chk[1]}`;
            lot[2].innerText = `${chk[2]}`;
            lot[3].innerText = `${chk[3]}`;
            lot[4].innerText = `${chk[4]}`;
            lot[5].innerText = `${chk[5]}`;
        }; ///////// 인터발 //////////
        
        const chkFn = (rdn) => {
            let sts = 0;
            chk.forEach((val) => {
                // console.log('체크rdn:', rdn);
                // console.log('체크val:', val);
                if (val === rdn){ sts = 1;}
            });

            return sts;
        }; ///// chkFn //////////////
        
        myFn();
    }); /////////////// jQB /////////////
}); ////////////////// Ready //////////////////