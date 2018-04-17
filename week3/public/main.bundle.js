webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var problem_list_component_1 = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var problem_detail_component_1 = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
var new_problem_component_1 = __webpack_require__("./src/app/components/new-problem/new-problem.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var editor_component_1 = __webpack_require__("./src/app/components/editor/editor.component.ts");
var collaboration_service_1 = __webpack_require__("./src/app/services/collaboration.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                problem_list_component_1.ProblemListComponent,
                problem_detail_component_1.ProblemDetailComponent,
                new_problem_component_1.NewProblemComponent,
                editor_component_1.EditorComponent
            ],
            imports: [
                http_1.HttpClientModule,
                app_routes_1.routing,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule
            ],
            providers: [
                data_service_1.DataService,
                collaboration_service_1.CollaborationService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var problem_list_component_1 = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
var problem_detail_component_1 = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full' // excatly match
    },
    {
        path: 'problems',
        component: problem_list_component_1.ProblemListComponent
    },
    {
        path: 'problems/:id',
        component: problem_detail_component_1.ProblemDetailComponent
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
exports.routing = router_1.RouterModule.forRoot(routes);


/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen {\n    #editor {\n      height: 600px;\n    }\n    .lang-select {\n      width: 100px;\n      margin-right: 10px;\n    }\n    header .btn {\n      margin: 0 5px;\n    }\n    footer .btn {\n      margin: 0 5px;\n    }\n    .editor-footer, .editor-header {\n      margin: 10px 0;\n    }\n\t.cursor {\n\t\t/*position:absolute;*/\n\t   background: rgba(0, 250, 0, 0.5);\n\t   z-index: 40;\n\t   width: 2px !important;\n\t} \n}"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <header class=\"editor-header\">\n    <!-- for select language-->\n    <!-- when change, call setLanguage(language)-->\n    <select class=\"form-control pull-left lang-select\" name=\"language\"\n            [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n      <option *ngFor=\"let language of languages\" [value]=\"language\">\n        {{language}}\n      </option>\n    </select>\n    <!--reset button -->\n    <!-- Button trigger modal -->\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\"\n            data-target=\"#myModal\">\n      Reset\n    </button>\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-\n         labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you\n              sure</h5>\n            label=\"Close\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            You will lose current code in the editor, are you sure?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-\n                    dismiss=\"modal\">Cancel\n            </button>\n            <button type=\"button\" class=\"btn btn-primary\" data-\n                    dismiss=\"modal\"\n                    (click)=\"resetEditor()\">Reset\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <div class=\"row\">\n    <div id=\"editor\">\n    </div>\n  </div><!-- This is the body -->\n  <footer class=\"editor-footer\">\n    <button type=\"button\" class=\"btn btn-success pull-right\"\n            (click)=\"submit()\">Submit Solution\n    </button>\n  </footer>\n</section>\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var collaboration_service_1 = __webpack_require__("./src/app/services/collaboration.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditorComponent = /** @class */ (function () {
    function EditorComponent(collaboration, route) {
        this.collaboration = collaboration;
        this.route = route;
        this.languages = ['Java', 'Python'];
        this.language = 'Java';
        this.defaultContent = {
            "Java": " public class Example {\n       \tpublic static void main(String[] args) {\n        \t// Type your Java code here\n       \t}\n\t}",
            'Python': "class Solution:\n\t\tdef example():\n    \t\t# write your python code here.\n\t\t"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // use problem id as session id
        // since we subscribe the changes, every time the params changes
        // sessionId will be updated and the editor will be initilized
        this.route.params
            .subscribe(function (params) {
            _this.sessionID = params['id'];
            _this.initEditor();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit("editor");
        this.editor.setTheme("ace/theme/eclipse");
        // setup collaboration socket
        this.collaboration.init(this.editor, this.sessionID);
        this.editor.lastAppliedChange = null;
        // register change callback
        this.editor.on("change", function (e) {
            console.log('editor changes: ' + JSON.stringify(e));
            // check if the change is same as last change,
            // if they are the same, skip this change
            if (_this.editor.lastAppliedChange != e) {
                _this.editor.change(JSON.stringify(e));
            }
        });
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.setValue(this.defaultContent[this.language]);
        this.editor.getSession().setMode("ace/mode" + this.language.toLowerCase());
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor;
    };
    EditorComponent.prototype.submit = function () {
        var user_code = this.editor.getValue();
        console.log(user_code);
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'app-editor',
            template: __webpack_require__("./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("./src/app/components/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [collaboration_service_1.CollaborationService,
            router_1.ActivatedRoute])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;


/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<form #formRef=\"ngForm\">\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"problemName\">Problem Name</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"problemName\"\n\t\t\tname=\"ProblemName\" placeholder=\"Input problem name\"\n\t\t\t[(ngModel)]=\"newProblem.name\" required>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"problemDesc\">Problem Description</label>\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"problemDesc\"\n\t\t\tname=\"ProblemDesc\" placeholder=\"Input description\"\n\t\t\t[(ngModel)]=\"newProblem.desc\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label for=\"difficulty\">Difficulty</label>\n\t\t\t<select class=\"form-control\" id=\"difficulty\"\n\t\t\tname=\"difficulty\" required [(ngModel)]=\"newProblem.difficulty\">\n\t\t\t\t<option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n\t\t\t\t\t{{difficulty}}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary pull-right\"\n\t\t\t\t(click)=\"addProblem()\">Add problem</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
});
var NewProblemComponent = /** @class */ (function () {
    function NewProblemComponent(dataService) {
        this.dataService = dataService;
        // create a shadow copy of problem and assign it to newProblem
        // Object.assign() copies property values. If the source value is a
        //reference to an object, it only copies that reference value.
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.dataService.addProblem(this.newProblem);
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        core_1.Component({
            selector: 'app-new-problem',
            template: __webpack_require__("./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__("./src/app/components/new-problem/new-problem.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], NewProblemComponent);
    return NewProblemComponent;
}());
exports.NewProblemComponent = NewProblemComponent;


/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n\t<div class=\"col-sm-12 col-md-4\">\n\t\t<div>\n\t\t\t<h2>\n\t\t\t\t{{problem.id}}.{{problem.name}}\n\t\t\t</h2>\n\t\t\t<p>\n\t\t\t\t{{problem.desc}}\n\t\t\t</p>\n\t\t</div>\n\t</div>\n\t<div class=\"hidden-xs col-sm-12 col-md-8\">\n\t\t<app-editor></app-editor>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
var ProblemDetailComponent = /** @class */ (function () {
    function ProblemDetailComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe: when params changes, this.problem will be updated
        // +: convert string to int
        this.route.params.subscribe(function (params) {
            // this.problem = this.dataService.getProblem(+params['id']);
            _this.dataService.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-detail',
            template: __webpack_require__("./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
}());
exports.ProblemDetailComponent = ProblemDetailComponent;


/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports) {

module.exports = ".difficult {\n\tmin-width: 65px;\n\tmargin-right: 18px;\n}\n.label.difficulty {\n\tpadding-top: 0.6em;\n\tcolor: #fbfdfa;\n\tfont-size: 12px\n}\n.title {\n\tfont-size: 1.2em;\n}\n.diff-easy {\n\tbackground-color: #42ebf4;\n}\n.diff-medium {\n\tbackground-color: #92cf5c;\n}\n.diff-hard {\n\tbackground-color: #dd8d1e;\n}\n.diff-super {\n\tbackground-color: #8d16e2;\n}"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-new-problem></app-new-problem>\n</div>\n<div class=\"container\">\n\t<div class=\"list-group\">\n\t\t<a class=\"list-group-item\" *ngFor=\"let problem of problems\"\n\t\t\t[routerLink]=\"['/problems', problem.id]\">\n\t\t\t<span class=\"{{'pull-left badge difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">\n\t\t\t\t{{problem.difficulty}}\n\t\t\t</span>\n\t\t\t<strong class=\"title\">{{problem.id}}.{{problem.name}}</strong>\n\t\t</a>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var data_service_1 = __webpack_require__("./src/app/services/data.service.ts");
// const PROBLEMS: Problem[] = [
// {
// 	"id":1,
// 	"name":"Two Sum",
// 	"desc":"Given an array of integers, find two numbers such that they	add up to a specific target number.\
// 	\n\nThe function twoSum should return\
// 	indices of the two numbers such that they add up to the target,\
// 	 where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
// 	"difficulty":"easy"
// },
// {
// 	"id":2,
// 	"name":"3Sum",
// 	"desc":"Given an array S of n integers, are there elements a, b, c in\
// 	S such that a + b + c = 0? Find all unique triplets in the array which\
// 	gives the sum of zero.",
// 	"difficulty":"medium"
// },
// {
// 	"id":3,
// 	"name":"4Sum",
// 	"desc":"Given an array S of n integers, are there elements a, b, c,\
// 	and d in S such that a + b + c + d = target?\n\nFind all unique\
// 	quadruplets in the array which gives the sum of target.",
// 	"difficulty":"medium"
// },
// {
// 	"id":4,
// 	"name":"Triangle Count",
// 	"desc":"Given an array of integers, how many three numbers can be\
// 	found in the array, so that we can build an triangle whose three edges\
// 	length is the three numbers that we find?",
// 	"difficulty":"hard"
// },
// {
// 	"id":5,
// 	"name":"Sliding Window Maximum",
// 	"desc":"Given an array of n integer with duplicate number, and a\
// 	moving window(size k), move the window at each iteration from the start of\
// 	the array, find the maximum number inside the window at each moving.",
// 	"difficulty":"super"
// }];
var ProblemListComponent = /** @class */ (function () {
    function ProblemListComponent(dataService) {
        this.dataService = dataService;
    }
    ProblemListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionProblems.unsubscribe();
    };
    ProblemListComponent.prototype.ngOnInit = function () {
        // init problems list
        this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        // this.problems = PROBLEMS;
        // this.problems = this.dataService.getProblems();
        var _this = this;
        this.subscriptionProblems = this.dataService.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent = __decorate([
        core_1.Component({
            selector: 'app-problem-list',
            template: __webpack_require__("./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-list/problem-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
exports.ProblemListComponent = ProblemListComponent;


/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (editor, sessionID) {
        this.collaborationSocket = io(window.location.origin, { query: 'sessionID= ' + sessionID });
        // handler changes sent from server
        this.collaborationSocket.on("change", function (delta) {
            console.log('collabration: editor changes by ' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            // apply the changes on editor
            editor.getSession().getDocument().applyDeltas([delta]);
        });
    };
    // emit event to make changes and inform server and other collaborators
    CollaborationService.prototype.change = function (delta) {
        // emit "change" event
        this.collaborationSocket.emit("change", delta);
    };
    CollaborationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());
exports.CollaborationService = CollaborationService;


/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// import { PROBLEMS } from '../mock-problems';
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        // problems: Problem[] = PROBLEMS;
        // private field start with _
        // BehavivorSubject: when subscribe, we can get the value that emitted last time.
        // Subject: when subscribe, we can only get the value that emitted after 
        // subscribe and we cannot get value that emitted before we subscribe
        this._problemSource = new BehaviorSubject_1.BehaviorSubject(([]));
    }
    // return a list of problems
    DataService.prototype.getProblems = function () {
        var _this = this;
        // return this.problems;
        this.httpClient.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res);
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    // input: id,
    // return a problem by id
    DataService.prototype.getProblem = function (id) {
        // for evbery problem if problem.id === id, return this problem
        // ==: check value
        // ===: check value and type
        // 1 == "1" => true
        // 1 === "1" => false
        // arrow function
        // return this.problems.find((problem) => problem.id === id);
        return this.httpClient.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) {
            console.log(res);
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        // problem.id = this.problems.length + 1;
        // this.problems.push(problem);
        var _this = this;
        // "Content-Type" is case sensitive
        var options = { headers: new http_1.HttpHeaders({ 'Content-type': 'application-json' }) };
        return this.httpClient.post('api/vi/problems', problem, options)
            .toPromise()
            .then(function (res) {
            // any: type, don't care the type
            // update the _problemSource
            _this.getProblems();
            return res;
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (err) {
        console.error('an error occured', err);
        return Promise.reject(err.body || err);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map