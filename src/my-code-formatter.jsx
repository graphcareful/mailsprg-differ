import { React, MessageViewExtension } from "mailspring-exports";
//import * as Diff2Html from 'diff2html';

export default class MyCodeFormatter extends MessageViewExtension {
    // static stripHtml(html) {
    //     var re = new RegExp(String.fromCharCode(160), "g");
    //     var res = html.replace(re, " ");
    //     return res.replace(/<[^>]*>?/gm, '');
    // }
    //
    static nthIndex(str, pat, n){
        var L= str.length, i= -1;
        while(n-- && i++<L){
            i= str.indexOf(pat, i);
            if (i < 0) break;
        }
        return i;
    }

    static renderedMessageBodyIntoDocument({document, message, iframe}) {
        if(message.plaintext) {
            console.log("this is plaintext");
        } else {
            console.log('this is not plaintext');
            return;
        }
        const Diff2html = require('diff2html');
        const contents = message.body;
        const lines = contents.split('\n')
        const trimmedLines = lines.map(x => x.trim());

        // Start of diff
        const start = trimmedLines.indexOf("---");
        if (start === -1)
        if(start === -1){
            // console.log("Didn't find --- in email");
            return;
        }
        console.log("Beginning of diff at index: " + start);

        // End of diff
        const end = trimmedLines.indexOf("--", start + 1);
        if (end === -1) {
            // console.log("Didn't find --[  ] in email");
            return;
        }
        console.log("Ending of diff at index: " + end);

        if(!document.getElementById('diff2js_style')) {
            var script = document.createElement('script');
            script.id = 'diff2js_style';
            script.type = 'text/javascript';
            script.src = '/home/robert/workspace/mailsprg-differ/diff2html.min.js';
            document.head.appendChild(script);
        }

        if(!document.getElementById('diff2js_link')) {
            var style = document.createElement('link');
            style.id = 'diff2js_link';
            style.type = 'text/css';
            style.rel = 'stylesheet';
            style.href = 'https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css';
            document.head.appendChild(style);
        }

        // Contents that will run through the Diff2html engine
        const diff = contents.substring(MyCodeFormatter.nthIndex(contents, '\n', start), MyCodeFormatter.nthIndex(contents, '\n', end));
        const diffJson = Diff2html.parse(diff);
        const diffhtml = Diff2html.html(diffJson, { drawFileList: true });
        var div = document.getElementById('inbox-plain-wrapper');
        if(div) {
            div.id = 'inbox-html-wrapper';
            div.innerHTML = diffhtml;
        } else {
            message.body = diffhtml;
            message.plaintext = false;
        }
  }
}
