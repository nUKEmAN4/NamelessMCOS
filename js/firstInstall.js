

let installedOS = false;

if(installedOS == false){
    installedOS = new WinBox({
        title: 'Welcome!',
        modal: true,
        class: ["no-full",],
        background: "#fff",
        width: '750',
        height: '370',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        x: "25",
        y: "25",
        url: 'pages/installOS.html',
        border: 2,
        onfocus: function () {
            this.setBackground('#f1ae24')
        },
        onblur: function () {
            this.setBackground('#f58840')
        },
    })
}