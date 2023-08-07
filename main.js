function open_letter()
{
    document.getElementById('letter').style.height = '650px';
        document.getElementById('letter').style.transition = 'height 2s';
        document.getElementById('cover').style.height = '0px';
        document.getElementById('cover').style.transform = 'translateY(590px)'
        document.getElementById('cover').style.transition = 'height 2s linear 2s, transform 2s linear 2s';
        document.getElementById('message').style.opacity = '1';
        document.getElementById('message').style.transition = 'opacity 2s';
        document.getElementById('gift1').style.transform = 'scale(1)';
        document.getElementById('gift1').style.transition = 'transform 2s linear 4s';
        document.getElementById('gift2').style.transform = 'scale(1)';
        document.getElementById('gift2').style.transition = 'transform 2s linear 4s';
        document.getElementById('gift3').style.transform = 'scale(1)';
        document.getElementById('gift3').style.transition = 'transform 2s linear 4s';
}
function myFunction()
{
    window.scrollTo(0,0);
}
function click_button()
{
    document.getElementById('button').style.transform = 'scale(0)',
    document.getElementById('button').style.transition = 'transform 2s'
    document.getElementById('email-icon').style.transform = 'scale(1.5)',
    document.getElementById('email-icon').style.transition = 'transform 2s linear 2s'
}
function click_gift1()
{
    document.getElementById('wish1').style.transform = 'scale(1)';
    document.getElementById('wish1').style.transition = 'transform 2s'
    document.getElementById('wish2').style.transform = 'scale(0)';
    document.getElementById('wish2').style.transition = 'transform 2s';
    document.getElementById('wish3').style.transform = 'scale(0)';
    document.getElementById('wish3').style.transition = 'transform 2s';
}
function click_gift2()
{
    document.getElementById('wish1').style.transform = 'scale(0)';
    document.getElementById('wish1').style.transition = 'transform 2s'
    document.getElementById('wish2').style.transform = 'scale(1)';
    document.getElementById('wish2').style.transition = 'transform 2s';
    document.getElementById('wish3').style.transform = 'scale(0)';
    document.getElementById('wish3').style.transition = 'transform 2s';
}
function click_gift3()
{
    document.getElementById('wish1').style.transform = 'scale(0)';
    document.getElementById('wish1').style.transition = 'transform 2s'
    document.getElementById('wish2').style.transform = 'scale(0)';
    document.getElementById('wish2').style.transition = 'transform 2s';
    document.getElementById('wish3').style.transform = 'scale(1)';
    document.getElementById('wish3').style.transition = 'transform 2s';
}