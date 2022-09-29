const messages=[
"The beginning of the end.",
"What we know is a drop, what we don't know is an ocean.",
"But every now and then it's good to question those who question things.",
"There are things out there that our little minds will never comprehend.",
"The same thing we do every night, Pinky - try to take over the world!",
"Good and evil are a question of perspective.",
"Fear is the worst enemy of progress.",
"Dreams change. Other things become important.",
"The distinction between past, present and future is only a stubbornly persistent illusion.",
"dracarys.",
"valar morghulis.",
"Some people wander around their whole lives looking for a way out, but there’s only one path and it leads you ever deeper.",
"The end of the beginning.",
];

const funnyCommit=()=>{
    const message=messages[Math.floor(Math.random()*messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
    funnyCommit
};