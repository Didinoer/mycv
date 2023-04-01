var a = document.getElementById('wa-btn').addEventListener('mouseover', inabox2);
var a = document.getElementById('wa-btn').addEventListener('mouseout', outabox2);

function inabox2() {
    document.getElementById('box-besar2').className = 'col-lg-6 warnaabu efek-hijau mt-5 p-4'
}

function outabox2() {
    document.getElementById('box-besar2').className = 'col-lg-6 warnaabu abc mt-5 p-4'
}


var b = document.getElementById('git-btn').addEventListener('mouseover', inabox);
var b = document.getElementById('git-btn').addEventListener('mouseout', outabox);

function inabox() {
    document.getElementById('box-besar1').className = 'col-lg-6 warnahijau efek-hijau mt-5 p-4'
}

function outabox() {
    document.getElementById('box-besar1').className = 'col-lg-6 warnahijau abc mt-5 p-4'
}


var c = document.getElementById('linkdin-btn').addEventListener('mouseover', inabox);
var c = document.getElementById('linkdin-btn').addEventListener('mouseout', outabox);

function inabox() {
    document.getElementById('box-besar1').className = 'col-lg-6 warnahijau efek-hijau mt-5 p-4'
}

function outabox() {
    document.getElementById('box-besar1').className = 'col-lg-6 warnahijau abc mt-5 p-4'
}