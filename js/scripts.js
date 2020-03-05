

// List active thingy
$('.list-group a').on('click', function (e) {
    if ($('.active').length == 3) {
        $(this).removeClass("active");
    } else
        $(this).toggleClass("active");

});


var typed = term("<strong><sup><mark>FTC@Permutation_Puzzle</mark> ~$</b></sup> ^250 <br>Can you solve this puzzle?^600<br><br>" + 
    "You can pick up to <samp>3 words</samp>,<br>Try to get a score of <samp><mark><b>5</b></mark></samp></strong>.");

function term(text) {

    var options = {
        strings: [text],
        typeSpeed: 20, // typing speed
        loop: false, // loop on or off (true or false)
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

    let str = '';
    let names = ''; 

    $(".list-group-item").each(function (index) {
        if ($(this).hasClass('active')) {
            str += $(this).text();
            names += ("<br>&ensp;<kbd>" + $(this).text() + "</kbd>^100")
            $(this).removeClass("active");
        }
    });


    // check input
    if (str != '') {
        var score = 0;
        for (let ch of str.toLowerCase()) {
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

        if(score == 5){
            typed = term("<strong><sup><mark>FTC@Permutation_Puzzle ~$</sup><br> "+
        "You chose: <br>"+ names + 
        "<br><br>Calculating your score.^300.^300.^500<br><br>`Your`^50 `score`^50 `is:`^250 <samp><mark><b>" + score + "</samp></mark></b>."
        + "<br>Congratulations, you've solved the puzzle! " 
        + "<br>&ensp;<mark>O</mark>samah <br>&ensp;Abd<mark>u</mark>lr<mark>a</mark>hman <br>&ensp;<mark>Ei</mark>yad"
        + "<br>The key to this problem is the number of <i>Unique Vowels</i>. The Safe password is <mark><strong>xxxx</strong></mark>");
        
        }
        else{
        typed = term("<strong><sup><mark>Guest@FTC_Phonetics_Puzzle ~$</sup><br> "+
        "You chose: <br>"+ names + 
        "<br><br>Calculating your score.^300.^300.^500<br><br>`Your`^50 `score`^50 `is:`^250 <samp><mark><b>" + score + "</samp></mark></b>.</strong>");
        }
    }
})


