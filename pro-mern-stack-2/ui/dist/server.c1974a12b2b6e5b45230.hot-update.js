exports.id = "server";
exports.modules = {

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/src/IssueList.jsx: Expecting Unicode escape sequence \\uXXXX (175:2)\n\n\u001b[0m \u001b[90m 173 | \u001b[39m    \u001b[36mconst\u001b[39m { issues } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 174 | \u001b[39m    \u001b[36mif\u001b[39m (issues \u001b[33m==\u001b[39m \u001b[36mnull\u001b[39m) \u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 175 | \u001b[39m \u001b[37m\u001b[41m\u001b[1m\\\u001b[22m\u001b[49m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 176 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 177 | \u001b[39m    \u001b[36mconst\u001b[39m { selectedIssue\u001b[33m,\u001b[39m pages } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 178 | \u001b[39m    \u001b[36mconst\u001b[39m { location\u001b[33m:\u001b[39m { search } } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:754:17)\n    at Object.raiseWithData (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:747:17)\n    at Object.raise (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:741:17)\n    at Object.readWord1 (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:8661:16)\n    at Object.readWord (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:8690:23)\n    at Object.getTokenFromCode (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:8158:14)\n    at Object.getTokenFromCode (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:4690:18)\n    at Object.nextToken (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:7635:12)\n    at Object.next (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:7560:10)\n    at Object.eat (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:7565:12)\n    at Object.isLineTerminator (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:8822:17)\n    at Object.semicolon (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:8826:15)\n    at Object.parseReturnStatement (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11561:12)\n    at Object.parseStatementContent (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11241:21)\n    at Object.parseStatement (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11193:17)\n    at Object.parseIfStatement (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11545:28)\n    at Object.parseStatementContent (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11238:21)\n    at Object.parseStatement (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11193:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11768:25)\n    at Object.parseBlockBody (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11754:10)\n    at Object.parseBlock (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11738:10)\n    at Object.parseFunctionBody (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:10745:24)\n    at Object.parseFunctionBodyAndFinish (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:10728:10)\n    at Object.parseMethod (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:10690:10)\n    at Object.pushClassMethod (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:12193:30)\n    at Object.parseClassMemberWithIsStatic (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:12110:12)\n    at Object.parseClassMember (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:12052:10)\n    at withTopicForbiddingContext (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11997:14)\n    at Object.withTopicForbiddingContext (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11068:14)\n    at Object.parseClassBody (/Users/chia-wei/Documents/cs5610/MERN_full_stack_web_app/pro-mern-stack-2/ui/node_modules/@babel/parser/lib/index.js:11974:10)");

/***/ })

};
//# sourceMappingURL=server.c1974a12b2b6e5b45230.hot-update.js.map