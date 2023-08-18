const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "-키케로-",
    
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "-사무엘 존슨-",
    
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할것이다.",
        author: "-파울로 코엘료-",
    
    },
    {
        quote: "겨울이 오면 봄이 멀지 않으리.",
        author: "-셸리-",
    
    },
    {
        quote: "길을 잃는다는 것은 곧 길을 알게 된다는 것이다..",
        author: "-동아프리카 속담-",
    
    },
    {
        quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author: "-헨리 포드-",
    
    },
    {
        quote: "작은 기회로 부터 종종 위대한 업적이 시작된다.",
        author: "-데모스테네스-",
    
    },
    {
        quote: "최고에 도달하려면 최저에서 시작하라.",
        author: "-P.시루스-",
    
    },
    {
        quote: "문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다.",
        author: "-메이벨 뉴컴버-",
    
    },
    {
        quote: "인생에 뜻을 세우는 데 있어 늦은 때라곤 없다.",
        author: "-제임스 볼드윈-",
    
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;