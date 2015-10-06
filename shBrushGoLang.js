/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 *
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
    // CommonJS
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;
 
    function Brush()
    {
        var funcs   =   'make';
 
        var keywords =  'break case chan const continue default defer else fallthrough for func go ' +
                        'goto if import interface map package range return select struct switch type var ';
 
        this.regexList = [
            { regex: SyntaxHighlighter.regexLib.singleLineCComments,    css: 'comments' },          // one line comments
            { regex: SyntaxHighlighter.regexLib.multiLineCComments,     css: 'comments' },          // multiline comments
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString,     css: 'string' },            // double quoted strings
            { regex: SyntaxHighlighter.regexLib.singleQuotedString,     css: 'string' },            // single quoted strings
            { regex: /^var \w+/g,                                       css: 'variable' },          // variables
            { regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,             css: 'value' },         // numbers
            { regex: new RegExp(this.getKeywords(funcs), 'gmi'),        css: 'functions' },         // common functions
            { regex: new RegExp(this.getKeywords(keywords), 'gm'),      css: 'keyword' }            // keyword
            ];
 
        this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
    };
 
    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['golang'];
 
    SyntaxHighlighter.brushes.Golang = Brush;
 
    // CommonJS
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();