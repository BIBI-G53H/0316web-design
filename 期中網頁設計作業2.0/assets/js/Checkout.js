
var countIdA = document.getElementById("commodity00countId");
var countIdB = document.getElementById("commodity01countId");
var countIdC = document.getElementById("commodity02countId");
var countIdD = document.getElementById("commodity05countId");

var countId06 = document.getElementById("commodity06countId");
var countId07 = document.getElementById("commodity07countId");
var countId08 = document.getElementById("commodity08countId");
var countId09 = document.getElementById("commodity09countId");
var countId10 = document.getElementById("commodity10countId");
var countId11 = document.getElementById("commodity11countId");

var btn = document.getElementById("btn");
var out = document.getElementById("out");

btn.addEventListener("click", function(){

    var Id00Price = 15000;
    var Id01Price = 7500;
    var Id02Price = 10000;

    var check01 = document.getElementById("commodity03countId");
    var check02 = document.getElementById("commodity04countId");

    var countId00 = parseInt(document.getElementById('commodity00countId').value);
    var countId01 = parseInt(document.getElementById('commodity01countId').value);
    var countId02 = parseInt(document.getElementById('commodity02countId').value);
    var countId05 = parseInt(document.getElementById('commodity05countId').value);

    if(check01.checked){
        document.getElementById('User').textContent = "是會員，享8折優惠";
        var total = (countId00 * Id00Price + countId01 * Id01Price + countId02 * Id02Price) * 0.8 + countId05;
    }
    else{
        document.getElementById('User').textContent = "非會員，誠摯邀請您加入我們的會員";
        var total = countId00 * Id00Price + countId01 * Id01Price + countId02 * Id02Price + countId05;
    }

    if(check02.checked){
        document.getElementById('UserText').textContent = "我們將會把第一手資訊帶給客戶";
    }
    else{
        document.getElementById('UserText').textContent = "希望客戶持續關注我們公司";
    }

    document.getElementById('totalId').textContent = total;

    out.innerHTML = out.innerHTML + `
    <div class="out">
        <div class="out-fontA">3D PAM 智能建築工具 | 數量&nbsp${countIdA.value}</div>
        <div class="out-fontA">3D PAM 智能建築材料包 | 期數&nbsp${countIdB.value}</div>
        <div class="out-fontA">3D PAM 智能保固合約 | 期數&nbsp${countIdC.value}</div>
        <div class="out-fontA">VIP會員 |&nbsp</div>
        <div class="out-fontA">會員資訊 |&nbsp</div>
        <div class="out-fontA">額外贊助 | ${countIdD.value}元</div>
        <div class="out-fontA">姓名 | ${countId06.value}${countId07.value}&nbsp先生/女士</div>
        <div class="out-fontA">電話 | ${countId08.value}</div>
        <div class="out-fontA">電子郵箱 | ${countId09.value}</div>
        <div class="out-fontA">VISA卡號 | ${countId10.value}</div>
        <div class="out-fontA">安全碼 | ${countId11.value}</div>
        <hr id="out-hr">
        <div id="out-fontB">總共</div>
        <div id="out-fontC">元</div>
    </div>`;

    countIdA.value = "1";
    countIdB.value = "1";
    countIdC.value = "1";
    countIdD.value = "0";

    countId06.value = "";
    countId07.value = "";
    countId08.value = "";
    countId09.value = "";
    countId10.value = "";



    
})

