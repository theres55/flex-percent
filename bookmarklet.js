var s = document.querySelector('#percent-script');
var wp = 100;

if (!s) {
    s = document.createElement('script');
    s.setAttribute('src', 'https://rawcdn.githack.com/peterjaric/flex-percent/HEAD/percent.js');
    s.id = 'percent-script';
    s.onload = () => eval("execute(wp)");
    document.body.appendChild(s);
} else {
    execute();
}