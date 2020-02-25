

// List active thingy
$('.list-group a').on('click', function (e) {
    if ($('.active').length == 3) {
        $(this).removeClass("active");
    } else
        $(this).toggleClass("active");

});


var typed = term("<strong><sup><mark>Guest@FTC_Puzzle</mark> ~$</b></sup> ^250 <br>Can you solve this puzzle?^600<br><br>" + 
    "You can pick up to <samp>3 words</samp>,<br>Try to get a score of <samp><mark><b>5</b></mark></samp></strong>");

function term(text) {

    var options = {
        strings: [text],
        typeSpeed: 1, // typing speed
        backDelay: 650, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function () { } // call function after typing is done
    }

    return new Typed(".terminal", options);

}

$("#myBtn").click(function () {
    // map for vowels
    let dict = new Map();
    dict.set('a', 0);
    dict.set('e', 0);
    dict.set('o', 0);
    dict.set('i', 0);
    dict.set('u', 0);

    var str = '';

    $(".list-group-item").each(function (index) {
        if ($(this).hasClass('active')) {
            str += $(this).text();
            $(this).removeClass("active");
        }
    });


    // check input
    if (str != '') {
        str = str.toLowerCase();
        var score = 0;
        for (let ch of str) {
            if ((ch == 'a' ||
                ch == 'e' ||
                ch == 'o' ||
                ch == 'i' ||
                ch == 'u') && (dict.get(ch) == 0)) {
                dict.set(ch, 1);
                score += 1;
            }
        }

        typed.destroy();

        // TODO: win condition and page

        typed = term("Guest@FTC_Challenge ~$ ^100<br>Score needed to win: 5<br><br>Calculating your score.^300.^300.^500<br><br>Your score is: " + score);
    }
})


