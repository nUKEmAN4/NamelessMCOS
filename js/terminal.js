//https://gist.github.com/BenJule/91ba3982a3781913226f177a0cdadb21
//BenJule

//Current line
var CurrentId = undefined;
var hostname = "localhost";
var username = 'nUKEmAN4';
var folder = '~';

//Print Greetings
$("#Terminal").append('Namelessmc OS [Version 0.1.0.beta-1]<br/>');
$("#Terminal").append('Licence: Ultra Mega Pro (Personal use only)<br/>');
$("#Terminal").append('(c) 2022 NamelessMC. All rights reserved.<br/><br/>');


//Onload
NewLine();

//Enter button
$(document).on('keydown', function(e) {
    var x = event.which || event.keyCode;
    if (x === 13 || x == 13) {
        var consoleLine = $('#' + CurrentId + ' input').val();
        var delay = ExecuteLine(consoleLine);
        setTimeout(NewLine, delay);

    }
});
$(document).on('keydown', function(e) {
    var x = event.which || event.keyCode;
    var line = $('#' + CurrentId + ' input');
    var length = line.val().length;
    if (x != 8) {
        line.attr("size", 1 + length);
    } else {
        line.attr("size", length * .95);
    }
    if (length === 0) {
        $('#' + CurrentId + ' input').attr("size", '1');
    }

});
$(document).on('click', function(e) {
    $('#' + CurrentId + ' input').focus();
});

//New line
function NewLine() {
    if (CurrentId !== undefined) {
        $('#' + CurrentId + ' input').prop('disabled', true);
    }
    CurrentId = 'consoleInput-' + GenerateId();
    if (username !== '') {
        $("#Terminal").append('<div class="console-line" id="' + CurrentId + '">' + username + '@' + hostname + ':<span class="terminal-red">' + folder + ' $</span> <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" class="terminal-input" /><div class="console-carrot"></div></div>');
    } else {
        $("#Terminal").append('Namelessmc OS [Version 0.1.0.beta-1]<br/>');
        $("#Terminal").append('Licence: Ultra Mega Pro (Personal use only)<br/>');
        $("#Terminal").append('(c) 2022 NamelessMC. All rights reserved.<br/><br/>');
        $("#Terminal").append('<div id="' + CurrentId + '">Login as: <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" type="text" class="terminal-input" /><div class="console-carrot"></div></div>');
    }
    $('#' + CurrentId + ' input').focus();
    $('#' + CurrentId + ' input').attr("size", '1');
}

//Execute the line
function ExecuteLine(command) {
    $('.console-carrot').remove();
    var CurrentCommand = command.toLowerCase();

    if (username === '') {
        username = CurrentCommand;
        return 500;
    } else {
        //Clear
        if (CurrentCommand == 'clear') {
            $("#Terminal").empty();
        }
        //Logout
        else if (CurrentCommand == 'exit' || CurrentCommand == 'logout') {
            $("#Terminal").empty();
            username = ''
        }
        //Echo
        else if (CurrentCommand.startsWith("echo")) {
            var NewLine = CurrentCommand.replace("echo ", "");
            $("#Terminal").append(NewLine);
        }
        else if (CurrentCommand.startsWith("ver")) {
            var NewLine = CurrentCommand.replace("ver ", "");
            $("#Terminal").append("Current version of namelessmc: 0.1.0.beta-1 (LATEST_STABLE)");
        }
        else if (CurrentCommand.startsWith("is namelessmcos the best?")) {
            var NewLine = CurrentCommand.replace("ver ", "");
            $("#Terminal").append("YES!");
        }
        //hostname
        else if (CurrentCommand.startsWith("hostname")) {
            var name = CurrentCommand.replace("hostname ", "");
            if (name !== '') {
                hostname = name;
            }
        }
        //cd
        else if (CurrentCommand.startsWith("cd")) {
            var Address = CurrentCommand.replace("cd ", "").replace(" ", "").replace("//", "");
            if (Address == '/' || Address == '' || Address == 'cd') {
                folder = '~';
            } else {
                folder = Address;
            }
        } else if (CurrentCommand == 'help' || CurrentCommand == '?') {
            $("#Terminal").append('Namelessmc OS [Version 0.1.0.beta-1]<br/>');
            $("#Terminal").append('Licence: Ultra Mega Pro (Personal use only)<br/>');
            $("#Terminal").append('(c) 2022 NamelessMC. All rights reserved.<br/><br/>');
            $("#Terminal").append('cd [dir] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Change directory<br/>');
            $("#Terminal").append('clear &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Clear console screen<br/>');
            $("#Terminal").append('echo [arg...] &nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Echo text back in console<br/>');
            $("#Terminal").append('exit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Logout of terminal<br/>');
            $("#Terminal").append('host &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Get Help about command<br/>');
            $("#Terminal").append('hostname [arg..]&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Change hostname<br/>');
            $("#Terminal").append('logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Logout of terminal<br/>');
        }
        //No command
        else if (CurrentCommand === '') {}
        //Unknown
        else {
            var NewLine = "<div>command '" +  CurrentCommand + "' not found </div>";
            $("#Terminal").append(NewLine);
        }
    }
}

//Generate id
function GenerateId() {
    return Math.random().toString(16).slice(2)
}