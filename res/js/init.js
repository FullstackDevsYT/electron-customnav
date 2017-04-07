var title = document.getElementById('title').innerHTML;
document.getElementById('showTitle').innerHTML = title;
package = require('./package.json');

var theme = package.Theme;

const settings = require(`./res/themes/${theme}.json`);

var body = document.body.style;
var nav = document.getElementById('nav').style;
var toggler = document.getElementById('togglers').style;
var Minimize = document.getElementById('minimize').style;
var Maximize = document.getElementById('maximize').style;
var Close = document.getElementById('close').style;
var title = document.getElementById('showTitle').style;

var styles = `
<style>
    #togglers>#minimize:hover{
        background-color: ${settings.Toggler.Minimize.Background.Hover};
        color: ${settings.Toggler.Minimize.Color.Hover}
    }
    #togglers>#maximize:hover{
        background-color: ${settings.Toggler.Maximize.Background.Hover};
        color: ${settings.Toggler.Maximize.Color.Hover}
    }
    #togglers>#close:hover{
        background-color: ${settings.Toggler.Close.Background.Hover};
        color: ${settings.Toggler.Close.Color.Hover};
    }
    #togglers>#maximize>span::before,#togglers>#maximize>span::after{
        border: 2px solid ${settings.Toggler.Maximize.Color.Static};
    }
    #togglers>#maximize>span::before{
        background-color: ${settings.Toggler.Maximize.Background.Static};
    }
    #togglers>#maximize:hover>span::before{
        background-color: ${settings.Toggler.Maximize.Background.Hover};
    }
    </style>
`;

document.getElementById('head').innerHTML += styles;

body.backgroundColor = settings.Background;
body.color = settings.TextColor;

nav.backgroundColor = settings.navBackground;

toggler.backgroundColor = settings.Toggler.Background;

Minimize.BackgroundColor = settings.Toggler.Minimize.Background.Static;
Minimize.Color = settings.Toggler.Minimize.Color.Static;

Maximize.BackgroundColor = settings.Toggler.Maximize.Background.Static;
Maximize.Color = settings.Toggler.Maximize.Color.Static;

Close.BackgroundColor = settings.Toggler.Close.Background.Static;
Close.Color = settings.Toggler.Close.Color.Static;

title.fontWeight = settings.Title.FontWeight;
title.fontFamily = settings.Title.FontFamily;