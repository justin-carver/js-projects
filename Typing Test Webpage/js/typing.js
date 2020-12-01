//  Created by Justin Carver for GitHub

const quotes = [["Reptition - by Peter Handke", "Alone during the day, in my room or out of doors, I thought аbout the waiter more than about my раrеnts; as I now realize, it was а kind of love. I had nо desire for contact, I wanted only to bе near him, and I missed him on his day off. When he finally reappeared, his black-and­-white attire brought lifе into the rооm and I acquired а sense of color. Не always kept his distance, even when off duty, and that may have accounted for my affection. Оnе day I ran into him in his street clothes at the bus-station buffet, now in the role of а guest, and there was no difference between the waiter at the hotel and the young man in the gray suit with а raincoat over his аrm, resting оnе foot on the railing and slowly munching а sausage while watching the departing buses. And perhaps this aloofness in combination with his attentiveness аnd poise were the components of the beauty that so moved me. Even today, in а predicament, I think about that waiter’s poise; it doesn’t usually help much, but it brings back his image, and for the moment at least I regain my composure."], 
["Flights - by Olda Tokarczuk", "Annushka walks out in front of the station and sees from afar that shrouded woman still scrambling, her voice hoarse from cursing – in fact, neither it nor the curses themselves are really recognizable now. Good then – after а moment’s hesitation she approaches her calmly and stands in front of her. This throws the woman off for just а second – she must bе able to see Annushka through the material that covers her face. Annushka takes another step closer and now stands so near she can smell the woman’s breath – dust and must, old oil. The woman speaks softer and softer until she finally falls silent. Her scrambling turns into rocking, as though she can’t stand still. They stand facing each other for а moment as people pass them by, but indifferently; one person just glances over at them, but they’re in а hurry, their trains will leave at any moment."],
["Never Let Me Go - by Kazuo Ishiguro", "Miss Lucy was the only guardian present. She was leaning over the rail at the front, peering into the rain like she was trying to see right across the playing field. I was watching her as carefully as ever in those days, and even as I was laughing at Laura, I was stealing glances at Miss Lucy’s back. I remember wondering if there wasn’t something a bit odd about her posture, the way her head was bent down just a little too far so she looked like a crouching animal waiting to pounce. And the way she was leaning forward over the rail meant drops from the overhanging gutter were only just missing her – but she seemed to show no sign of caring. I remember actually convincing myself there was nothing unusual in all this – that she was simply anxious for the rain to stop – and turning my attention back to what Laura was saying. Then a few minutes later, when I’d forgotten all about Miss Lucy and was laughing my head off at something, I suddenly realised things had gone quiet around us, and that Miss Lucy was speaking. "],
["Voices from Chernobyl - by Svetlana Alexievich", "In a year they evacuated all of us and buried the village. My father’s a cab driver, he drove there and told us about it. First they’d tear a big pit in the ground, five meters deep. Then the firemen would come up and use their hoses to wash the house from its roof to its foundation, so that no radioactive dust gets kicked up. They wash the windows, the roof, the door, all of it. Then a crane drags the house from its spot and puts it down into the pit. There’s dolls and books and cans all scattered around. The excavator picks them up. Then it covers everything with sand and clay, leveling it. And then instead of a village, you have an empty field. They sowed our land with corn. Our house is lying there, and our school and our village council office. My plants are there and two albums of stamps, I was hoping to bring them with me. Also I had a bike."],
["In Sight of the Lake - by Alice Munro","So she continues her walk away from the main street. The doctor’s name that she is after has come back to her, as such things are apt to do when there is no longer a crisis. The houses she walks by were mostly built in the nineteenth century. Some of wood, some of brick The brick ones often two full stories high, the wooden ones somewhat more modest, a story and a half with slanting ceilings in the upstairs rooms. Some front doors open just a few feet from the sidewalk. Others onto wide verandas, occasionally glassed in. A century ago, on an evening like this one, people would have been sitting on their verandas or perhaps on the front steps. Housewives who had finished washing the dishes and sweeping up the kitchen for the last time that day, men who had coiled up the hose after giving the grass a soaking. No garden furniture such as now sat here empty, showing off. Just the wooden steps or dragged-out kitchen chairs. Conversation about the weather or a runaway horse or some person who has taken to bed and was not expected to recover. Speculation about herself, once she was out of earshot."]];
var rtSplitArr = [];
var chosenQuote = "";
var cpm, wpm;
var totalchars = 0;
var startTime, updatedTime;
var totalSeconds = 0;
var updateInterval;
var error;

var $=jQuery.noConflict();
$(document).ready( function(){
    let once = true;
    document.getElementById("user-input").value = '';
    $(document).keydown(function(event){
        // Begin calculating elapsed time on first keypress.
        if (once) {startTimer(); once = !once;}
    });

    // New Quote Button
    $('#quote-button').click(function (e) {
        var r = Math.floor(Math.random() * quotes.length);
        chosenQuote = quotes[r][1];
        $('#quote').html(chosenQuote);
        $('#author').html(quotes[r][0]);
    });
    
});

function updateStatistics() {
    // This function is called every keypress. // TODO: Should be called every update, not keypress.
    var userWordCount = document.getElementById("user-input").value;
    totalchars = userWordCount.length;
    wpm = Math.floor(((totalchars / 5) / (totalSeconds / 60)));
    cpm = Math.floor(((totalchars) / (totalSeconds / 60)));
    // Calculate errors
    // var arrquote = chosenQuote.split(" ");
    // arrquote.forEach((item, index) => {
    //     if (!rtSplitArr[index] == item) {
    //         // TODO: Calculate Errors and Net WPM. [Net WPM = (Gross WPM - (Uncorrected Errors / Time));]
    //     }
    // });
    // Style HTML
    $('#total-characters').html("Total Characters Typed: " + totalchars);
    $('#wpm').html("Words per Minute: " + wpm);
}

function startTimer() {
    startTime = performance.now();
    updateInterval = setInterval(updateTime, 1000);
}

function updateTime() {
    updatedTime = performance.now();
    var timeDiff = updatedTime - startTime;
    timeDiff /= 1000;
    totalSeconds = Math.round(timeDiff);
    $('#counter').html(60 - totalSeconds);
    if (totalSeconds >= 60) { 
        clearInterval(updateInterval);
        updateStatistics();
    }
}