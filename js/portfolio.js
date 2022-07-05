

let btnNav=document.querySelector('.m-nav');
let MainNav=document.querySelector('.main-nav');

let skillIcon=document.getElementsByClassName('percent');
let percentage=document.getElementsByClassName('number');
let skillImg=document.getElementsByClassName('skillimg')


// 스크롤 이벤트
window.addEventListener('scroll',function()
{
    let skillHtml=document.getElementById('html');
    let skillCss=document.getElementById('css');
    let skillJs=document.getElementById('js');
    let skillJquery=document.getElementById('jquery');
    let skillReact=document.getElementById('react');
    let skillNodejs=document.getElementById('nodejs');
    let skillEclipes=document.getElementById('eclipes');
    let skillMysql=document.getElementById('mysql');
    let scrollVal=document.documentElement.scrollTop;
    let skillsTop=document.querySelector('#skills');
    let portfolio=document.querySelector('#portfolio');
    
    
    
    
    // console.log('scrollVal '+scrollVal);



    function skillsOn()
    {
        for(let i=0;i<percentage.length;i++)
            {
                // conosle.log(percentage[i]);
                percentage[i].style.opacity='1';
                skillImg[i].style.filter='blur(1px)';
                skillHtml.style.strokeDashoffset='calc(440 - (440*70)/100)';
                skillCss.style.strokeDashoffset='calc(440 - (440*75)/100)';
                skillJs.style.strokeDashoffset='calc(440 - (440*75)/100)';
                skillJquery.style.strokeDashoffset='calc(440 - (440*65)/100)';
                skillReact.style.strokeDashoffset='calc(440 - (440*65)/100)';
                skillNodejs.style.strokeDashoffset='calc(440 - (440*60)/100)';
                skillEclipes.style.strokeDashoffset='calc(440 - (440*60)/100)';
                skillMysql.style.strokeDashoffset='calc(440 - (440*75)/100)';
            } 
    }

    function skillsOff()
    {
        for(let i=0;i<percentage.length;i++)
            {
                // conosle.log(percentage[i]);
                percentage[i].style.opacity='0'
                skillImg[i].style.filter='blur(0)';
                skillHtml.style.strokeDashoffset='calc(440 - (440*0)/100)';
                skillCss.style.strokeDashoffset='calc(440 - (440*0)/100)';
                skillJs.style.strokeDashoffset='calc(440 - (440*0)/100)';
                skillJquery.style.strokeDashoffset='calc(440 - (440*0)/100)';
                skillReact.style.strokeDashoffset='calc(440 - (440*0)/100)';
                skillNodejs.style.strokeDashoffset='calc(440 - (440*0)/100)';
                skillEclipes.style.strokeDashoffset='calc(440 - (440*0)/100)';
                skillMysql.style.strokeDashoffset='calc(440 - (440*0)/100)';
            }
    }

    // 위치에 따른 이벤트 주기

    if(window.innerWidth<535)
    {
        if(2240<scrollVal && 4608>scrollVal)
        {
            skillsOn();
        }
        else
        {
            skillsOff();
        }

    }

    else if(window.innerWidth>534 && window.innerWidth<701)
    {
        if(2252<scrollVal && 4352>scrollVal)
        {
            skillsOn();
        }
        else
        {
            skillsOff();
        }
    }

    else if(window.innerWidth>700 && window.innerWidth<901)
    {
        if(1773<scrollVal && 3300>scrollVal)
        {
            skillsOn();
        }
        else
        {
            skillsOff();
        }
        
    }
    
    else if(window.innerWidth>900)
    {
        if(1192<scrollVal)
        {
            skillsOn();            
        }

        else
        {
            skillsOff();
        }
        console.log(window.width);
    }



    for(let i=0;i<percentage.length;i++)
    {
        skillIcon[i].addEventListener('mouseover',function(e)  
        {
            percentage[i].style.opacity='0';
            skillImg[i].style.filter='blur(0px)';
        })
        skillIcon[i].addEventListener('mouseout',function(e)  
        {
            percentage[i].style.opacity='1';
            skillImg[i].style.filter='blur(1px)';
        })

    }

    
})


// 네비게이션 클릭 이벤트
btnNav.addEventListener('click',function()
{
    MainNav.classList.toggle('main-nav-active');
    btnNav.classList.toggle('m-nav-active');
            
})

// 스킬 마우스오버 이벤트
skillIcon[0].addEventListener('mouseover',function(e)  
{
    percentage[0].style.opacity='0';
    skillImg[0].style.filter='blur(0px)';
})
skillIcon[0].addEventListener('mouseout',function(e)  
{
    percentage[0].style.opacity='1';
    skillImg[0].style.filter='blur(1px)';
})



// 포트폴리오 스크롤 이벤트
portfolio.addEventListener('scroll',function()
{
    let portfolioY=portfolio.scrollTop;
    let portDot=document.getElementsByClassName('dot');

    if(portfolioY / (window.innerWidth * 2) * 100 <= 25)
    {
        for(i=0;i<portDot.length;i++)
        {
            portDot[i].style.backgroundColor='white';
            portDot[0].style.backgroundColor='black';
        }
    }

    else if(portfolioY / (window.innerWidth * 2) * 100 >25 &&
            portfolioY / (window.innerWidth * 2) * 100 <= 50)
    {
        for(i=0;i<portDot.length;i++)
        {
            portDot[i].style.backgroundColor='white';
            portDot[1].style.backgroundColor='black';
        }
        
    }

    // else if(portfolioY / (window.innerWidth * 5) * 100 >40 &&
    //         portfolioY / (window.innerWidth * 5) * 100 <= 60)
    // {
    //     for(i=0;i<portDot.length;i++)
    //     {
    //         portDot[i].style.backgroundColor='white';
    //         portDot[2].style.backgroundColor='black';
    //     }
        
    // }

    // else if(portfolioY / (window.innerWidth * 5) * 100 >60 &&
    //         portfolioY / (window.innerWidth * 5) * 100 <= 78)           
    //     {
    //     for(i=0;i<portDot.length;i++)
    //     {
    //         portDot[i].style.backgroundColor='white';
    //         portDot[3].style.backgroundColor='black';
    //     }
        
    // }

    // else if(portfolioY / (window.innerWidth * 5) * 100 >78 &&
    //         portfolioY / (window.innerWidth * 5) * 100 <= 100)            
    //     {
    //     for(i=0;i<portDot.length;i++)
    //     {
    //         portDot[i].style.backgroundColor='white';
    //         portDot[4].style.backgroundColor='black';
    //     }
        
    // }

    
})


        
