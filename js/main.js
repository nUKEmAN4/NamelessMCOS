//Main.js
//Window(s) management

let terminalWindow = false;
let appWindow = false;
let internetBrowser = false;

document.querySelector('#vscodeWindow').addEventListener('click', () => {
    new WinBox({
        title: 'Visual Studio Code',
        // modal: true,
        class: ["no-full", "modern",],
        background: "#fff",
        width: '1000px',
        height: '600px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "50",
        y: "50",
        url: 'https://vscode.dev/',
        border: 2,
        onfocus: function () {
            this.setBackground('#0e639c')
        },
        onblur: function () {
            this.setBackground('#014369')
        },
    })
})

document.querySelector('#minecraftWindow').addEventListener('click', () => {
    new WinBox({
        title: 'Minecraft: NamelessMC Edition',
        // modal: true,
        class: ["no-full", "modern",],
        background: "#fff",
        width: '1000px',
        height: '600px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "50",
        y: "50",
        url: 'https://classic.minecraft.net/',
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
    })
})

document.querySelector('#appWindow').addEventListener('click', () => {
    if (appWindow){
        appWindow.close();
        appWindow = false;
    }
    appWindow = true;
    appWindow = WinBox({
        title: 'All Applications',
        // modal: true,
        class: ["no-full", "modern",],
        background: "#fff",
        width: '1000px',
        height: '600px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "center",
        y: "center",
        mount: document.getElementById('appListDiv'),
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
        onclose: function () {
            appWindow = false;
        }
    })
})

document.querySelector('#terminalstart').addEventListener('click', () => {
    if (terminalWindow){
        terminalWindow.close();
        terminalWindow = false;
    }
    terminalWindow = true;
    terminalWindow = WinBox({
        title: 'Nameless Terminal',
        // modal: true,
        class: "no-full modern terminal",
        background: "#00000",
        width: '850px',
        height: '450px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "center",
        y: "center",
        mount: document.getElementById('terminalDiv'),
/*        html: "<div style=\"height:100%;\" class=\"bg-black border-black\">\n" +
            "    <div class=\"w-full subpixel-antialiased mx-auto\">\n" +
            "        <div class=\"pl-1 pt-1 h-auto text-white font-mono text-xs bg-black\">\n" +
            "            <p class=\"pb-1\">Namelessmc OS [Version 0.1.0.beta-1]</p>\n" +
            "            <p class=\"pb-1\">(c) 2022 NamelessMC. All rights reserved.</p>\n" +
            "            <p class=\"pb-1\">&nbsp;</p>\n" +
            "            <p class=\"pb-1\">C:\\Users\\nUKEmAN4> </p>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>",*/
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
        onclose: function () {
            terminalWindow = false;
        }
    })
})

document.querySelector('#namelessWebButton').addEventListener('click', () => {
    internetBrowser.mount(document.getElementById("namelessWebConnectionError"));
})

document.querySelector('#namelessweb_window').addEventListener('click', () => {
    if (internetBrowser){
        internetBrowser.close();
        internetBrowser = false;
    }
    internetBrowser = true;
    internetBrowser = WinBox({
        title: 'Nameless Web Browser',
        // modal: true,
        class: ["no-full", "modern",],
        background: "#fff",
        width: '1000px',
        height: '600px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "center",
        y: "center",
        mount: document.getElementById("namelessWebDiv"),
        // url: 'https://classic.minecraft.net/',
/*        html: "\n" +
            "\n" +
            "<!-- main -->\n" +
            "<div class=\"flex justify-center pt-20\" id='namelessWebDiv' '>\n" +
            "  <div>\n" +
            "    <img style='width:20%;' class=\"w-2/3 ml-auto mr-auto mb-6\" src=\"https://namelessmc.com/core/assets/img/site_image.png\">\n" +
            "    <input type=\"text\" class=\"w-full outline-none px-3 flex border border-gray-200 rounded-full p-3 shadow text-l\">\n" +
            "    <div class=\"mt-8 text-center\">\n" +
            "      <button id='namelessWebButton' class=\"px-4 py-1 text-sm text-orange-600 font-semibold " +
            "           border border-orange-200 hover:text-white hover:bg-orange-600 hover:border-transparent focus:outline-none " +
            "           focus:ring-2 focus:ring-orange-600 focus:ring-offset-2\">Nameless Search</button>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "</div>\n" +
            "\n" +
            "<!-- footer -->\n" +
            "<div class=\"fixed bottom-0 bg-gray-200 border-t w-full flex justify-between text-gray-600 text-xs\">\n" +
            "  <div class=\"flex\">\n" +
            "    <a class=\"block p-3\" href='https://namelessmc.com/resources/'>Resources</a>\n" +
            "    <a class=\"block p-3\" href='https://namelessmc.com/forum/'>Forum</a>\n" +
            "    <a class=\"block p-3\" href='https://namelessmc.com/download/'>Download NamelessMC<a>\n" +
            "  </div>\n" +
            "  <div class=\"flex\">\n" +
            "    <a class=\"block p-3\" href='https://namelessmc.com/privacy/'>Privacy</a>\n" +
            "    <a class=\"block p-3\" href='https://namelessmc.com/terms/'>Terms</a>\n" +
            "  </div>\n" +
            "</div>\n" +
            "\n",*/
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
        onclose: function () {
            internetBrowser = false;
        }
    })
})

document.querySelector('#about_window').addEventListener('click', () => {
    new WinBox({
        title: 'NamelessOS Information',
        // modal: true,
        class: ["no-full", "modern", "no-resize", "no-max"],
        background: "#fff",
        width: '400px',
        height: '350px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "center",
        y: "center",
        html: ' <div class="py-0 px-4 max-w-sm mx-auto bg-white rounded-xl space-y-2 sm:py-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">\n' +
            '  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://namelessmc.com/core/assets/img/site_image.png" alt="Namelessmc Logo">\n' +
            '  <div class="text-center space-y-2 sm:text-left">\n' +
            '    <div class="space-y-0.5">\n' +
            '      <p class="text-lg text-black font-semibold">\n' +
            '        NamelessmcOS-0.1.0.beta-1 \n' +
            '      </p>\n' +
            '      <p class="text-gray-500 font-medium">\n' +
            '        Edition: Ultra Mega Pro\n' +
            '        <p class="text-gray-400">Activated</p>' +
            '      </p>\n' +
            '    </div>\n' +
            '     <a target="_blank" href="https://namelessmc.com/"><button class="px-4 py-1 text-sm text-orange-600 font-semibold rounded-full border border-orange-200 hover:text-white hover:bg-orange-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">Visit website</button></a>\n' +
            '  </div>\n' +
            '</div> ' +
            '<hr class="mt-2" style="color:#d5d4d4">' +
            '<p class="text-gray-500 p-5">This software is developed by nUKEmAN4 and this version os namelessmcos is originally licensed by "NamelessMC".</p>' +
            '<p class="text-gray-500 pt-2 pr-5 pl-5">There are no new updates avaiable.</p>' +
            '',
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
    })
})

document.querySelector('#flappyWindow').addEventListener('click', () => {
    new WinBox({
        title: 'Bird Flap: NamelessMC Edition',
        // modal: true,
        class: ["no-full", "modern", "no-resize", "no-max"],
        background: "#fff",
        width: '700px',
        height: '520px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "50",
        y: "50",
        html: '<iframe src="https://funhtml5games.com?embed=flappy" frameborder="0" scrolling="no"></iframe>',
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
    })
})

document.querySelector('#flappytrumpWindow').addEventListener('click', () => {
    new WinBox({
        title: 'Flappy Bird: Specal NamelessMC Edition for CPK',
        // modal: true,
        class: ["no-full", "modern", "no-resize", "no-max"],
        background: "#fff",
        width: '700px',
        height: '520px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "50",
        y: "50",
        html: '<iframe src="https://funhtml5games.com?embed=flappytrump" style="border:none;" frameborder="0" scrolling="no"></iframe>',
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
    })
})

document.querySelector('#pacmanWindow').addEventListener('click', () => {
    new WinBox({
        title: 'Pacman',
        // modal: true,
        class: ["no-full", "modern", "no-resize", "no-max"],
        background: "#fff",
        width: '342px',
        height: '460px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "50",
        y: "50",
        html: '<iframe src="https://funhtml5games.com?embed=pacman" style="border:none;" frameborder="0" scrolling="no"></iframe>',
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
    })
})

document.querySelector('#blockninjahdWindow').addEventListener('click', () => {
    new WinBox({
        title: 'Block Ninja HD',
        // modal: true,
        class: ["no-full", "modern", "no-resize", "no-max"],
        background: "#fff",
        width: '750px',
        height: '490px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "50",
        y: "50",
        html: '<iframe src="https://funhtml5games.com?embed=blockninja" style="border:none;" frameborder="0" scrolling="no"></iframe>',
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
    })
})

document.querySelector('#paintWindow').addEventListener('click', () => {
    new WinBox({
        title: 'Pixlr',
        // modal: true,
        class: ["no-full", "modern"],
        background: "#fff",
        width: '1000px',
        height: '500px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "50",
        y: "50",
        html: '<iframe src="https://pixlr.com/e/" style="border:none;" frameborder="0" scrolling="no"></iframe>',
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
    })
})

document.querySelector('#krunkerWindow').addEventListener('click', () => {
    new WinBox({
        title: 'Krunker.io',
        // modal: true,
        class: ["no-full", "modern"],
        background: "#fff",
        width: '1000px',
        height: '600px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "50",
        y: "50",
        html: '<iframe src="https://krunker.io/" style="border:none;" frameborder="0" scrolling="no"></iframe>',
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
    })
})

document.querySelector('#calculatorWindow').addEventListener('click', () => {
    new WinBox({
        title: 'Calculator',
        // modal: true,
        class: ["no-full", "modern", "no-resize", "no-max"],
        background: "#fff",
        width: '612px',
        height: '583px',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "50",
        y: "50",
        url: 'pages/calculator.html',
        border: 2,
        onfocus: function () {
            this.setBackground('#db8d18')
        },
        onblur: function () {
            this.setBackground('#da7d00')
        },
    })
})


function digitalClock() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if(month.toString().length === 1) {
        month = '0'+month;
    }
    if(day.toString().length === 1) {
        day = '0'+day;
    }
    if(hour.toString().length === 1) {
        hour = '0'+hour;
    }
    if(minute.toString().length === 1) {
        minute = '0'+minute;
    }
    if(second.toString().length === 1) {
        second = '0'+second;
    }
    document.getElementById("digitalClock").innerHTML = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
}

digitalClock();
setInterval(digitalClock, 1000);
