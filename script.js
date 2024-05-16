document.addEventListener("DOMContentLoaded",()=>{
    const container = document.querySelector('.container');
    const btncopy = document.querySelector('#btncopy');
    const allborder = document.getElementById('all');
    const borderelement = document.getElementById('border');
    const all_value = document.getElementById('all value');
    const border_value = document.getElementById('border value');
    const code = document.getElementById('code');
    const border_styleElement = document.getElementById('border_style');

    var all_radius=10;
    var border_style="solid";
    var border_size=3;
    var coding="test";

    function allBordersUpdate(){
        all_radius=allborder.value;
        border_size=borderelement.value;
        all_value.innerText=all_radius+"PX";
        border_value.innerText=border_size+"PX";
        coding=`
        border-radius:${all_radius}px;
        border:${border_size}px ${border_style} red;
        `;
        code.value=coding;
        container.style.cssText=coding;
    }

    allborder.addEventListener("mousemove",allBordersUpdate);
    allborder.addEventListener("change",allBordersUpdate);

    borderelement.addEventListener("mousemove",allBordersUpdate);
    borderelement.addEventListener("change",allBordersUpdate);

    btncopy.addEventListener('click',()=>{
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert('code copied');

    });
    allBordersUpdate();

    border_styleElement.addEventListener('change',function(){
        border_style=this.value;
        allBordersUpdate();
    });



});