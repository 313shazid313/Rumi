var quots =[
   '“Do not feel lonely, the entire universe is inside you.”',
   '“Lovers don\’t finally meet somewhere. They\’re in each other all along.”',
   '“There are a thousand ways to kneel and kiss the ground; there are a thousand ways to go home again.”',
   '“Raise your words, not voice. It is rain that grows flowers, not thunder.”',
   '“You are not a drop in the ocean. You are the entire ocean, in a drop.”',
   '“Stop acting so small. You are the universe in ecstatic motion.”',
   '“Why do you stay in prison, when the door is so wide open?”',
   '“I know you\’re tired but come, this is the way.”',
   '“Live life as if everything is rigged in your favour.”',
   '“I am not this hair, I am not this skin, I am the soul that lives within.”',
   '“Don\’t you know yet? It is your light that lights the world.”',
   '“Love is the bridge between you and everything.”',
   '“Dance until you shatter yourself.”',
   '“Why do you stay in prison when the door is so wide open.”',
   '“As you start to walk on the way, the way appears.”',
   '“What hurts you, blesses you. Darkness is your candle.”',
   '“The only lasting beauty is the beauty of the heart.”',
   '“Close your eyes, fall in love, stay there.”',
   '“What is planted in each person\’s soul will sprout.”',
   '“If the light is in your heart, you will find your way home.”',
   '“There\’s a field somewhere beyond all doubt and wrongdoing. I\’ll meet you there.”',
   '“Silence is the language of god, all else is poor translation.”',
   '“Sit, be still, and listen.”',
   '“Patience is the key to joy.”',
   '“If the light is in your heart, you will find your way home.”',
   '“Set your life on fire. Seek those who fan your flames.”',
   '“I know you\’re tired but come, this is the way.”',
   '“Dance until you shatter yourself.”',
   '“Grace comes to forgive and then forgive again.”',
   '“Become the sky. Take an axe to the prison wall. Escape.”',
   '“Let yourself become living poetry.”',
   '“Be soulful. Be kind. Be in love.”',
   '“Be an empty page, untouched by words.”',
   '"The wealth within you, your essence, is your kingdom."',
   '“To praise the sun is to praise your own eyes.”',
   '“Respond to every call that excites your spirit.”',
   '“Wherever you stand, be the soul of that place.”',
   '“You were born with wings. Why prefer to crawl through life?”',
   '“Half-heartedness doesn/’t reach into majesty.”',
   '“Look at the moon in the sky, not the one in the lake.”',
   '“What is planted in each person/’s soul will sprout.”',
   '“The source of now is here.”',
   '“Work. Keep digging your well. Water is there somewhere.”',
   '“The garden of the world has no limit except in your mind.”',
   '“When I am silent, I fall into the place where everything is music.”',
   '“I lost my hat while gazing at the moon, and then I lost my mind.”',
   '“Conventional opinion is the ruin of our souls.”',
   '“The world is a mountain, in which your words are echoed back to you.”',

]

function newQuote (){
   var choose_quote =  Math.floor ( Math.random()*(quots.length));
   document.getElementById ('display').innerHTML = quots[choose_quote];
}
