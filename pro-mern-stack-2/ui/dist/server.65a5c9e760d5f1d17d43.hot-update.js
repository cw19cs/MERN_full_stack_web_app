exports.id = "server";
exports.modules = {

/***/ "./src/IssueDetail.jsx":
/*!*****************************!*\
  !*** ./src/IssueDetail.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function IssueDetail({
  issue
}) {
  if (issue) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, issue.description));
  }

  return null;
}

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-search-params */ "url-search-params");
/* harmony import */ var url_search_params__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_search_params__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");
/* harmony import */ var _IssueTable_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IssueTable.jsx */ "./src/IssueTable.jsx");
/* harmony import */ var _IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IssueDetail.jsx */ "./src/IssueDetail.jsx");
/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphQLFetch.js */ "./src/graphQLFetch.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store.js */ "./src/store.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withToast.jsx */ "./src/withToast.jsx");











class IssueList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async fetchData(match, search, showError) {
    const params = new url_search_params__WEBPACK_IMPORTED_MODULE_1___default.a(search);
    const vars = {
      hasSelection: false,
      selectedId: 0
    };
    if (params.get('status')) vars.status = params.get('status');
    const effortMin = parseInt(params.get('effortMin'), 10);
    if (!Number.isNaN(effortMin)) vars.effortMin = effortMin;
    const effortMax = parseInt(params.get('effortMax'), 10);
    if (!Number.isNaN(effortMax)) vars.effortMax = effortMax;
    const {
      params: {
        id
      }
    } = match;
    const idInt = parseInt(id, 10);

    if (!Number.isNaN(idInt)) {
      vars.hasSelection = true;
      vars.selectedId = idInt;
    }

    let page = parseInt(params.get('page'), 10);
    if (Number.isNan(page)) page = 1;
    vars.page = page;
    const query = `query issueList(
      $status: StatusType
      $effortMin: Int
      $effortMax: Int
      $hasSelection: Boolean!
      $selectedId: Int!
    ) {
      issueList (
        status: $status
        effortMin: $effortMin
        effortMax: $effortMax
      ) {
        issues {
          id title status owner
          created effort due
        }
      }
      issue(id: $selectedId) @include (if : $hasSelection) {
        id description
      }
    }`;
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_7__["default"])(query, vars, showError);
    return data;
  }

  constructor() {
    super();
    const issues = _store_js__WEBPACK_IMPORTED_MODULE_8__["default"].initialData ? _store_js__WEBPACK_IMPORTED_MODULE_8__["default"].initialData.issueList.issues : null;
    const selectedIssue = _store_js__WEBPACK_IMPORTED_MODULE_8__["default"].initialData ? _store_js__WEBPACK_IMPORTED_MODULE_8__["default"].initialData.issue : null;
    delete _store_js__WEBPACK_IMPORTED_MODULE_8__["default"].initialData;
    this.state = {
      issues,
      selectedIssue
    };
    this.closeIssue = this.closeIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
  }

  componentDidMount() {
    const {
      issues
    } = this.state;
    if (issues == null) this.loadData();
  }

  componentDidUpdate(prevProps) {
    const {
      location: {
        search: prevSearch
      },
      match: {
        params: {
          id: prevId
        }
      }
    } = prevProps;
    const {
      location: {
        search
      },
      match: {
        params: {
          id
        }
      }
    } = this.props;

    if (prevSearch !== search || prevId !== id) {
      this.loadData();
    }
  }

  async loadData() {
    const {
      location: {
        search
      },
      match,
      showError
    } = this.props;
    const data = await IssueList.fetchData(match, search, showError);

    if (data) {
      this.setState({
        issues: data.issueList.issues,
        selectedIssue: data.issue
      });
    }
  }

  async closeIssue(index) {
    const query = `mutation issueClose($id: Int!) {
      issueUpdate(id: $id, changes: { status: Closed }) {
        id title status owner
        effort created due description
      }
    }`;
    const {
      issues
    } = this.state;
    const {
      showError
    } = this.props;
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_7__["default"])(query, {
      id: issues[index].id
    }, showError);

    if (data) {
      this.setState(prevState => {
        const newList = [...prevState.issues];
        newList[index] = data.issueUpdate;
        return {
          issues: newList
        };
      });
    } else {
      this.loadData();
    }
  }

  async deleteIssue(index) {
    const query = `mutation issueDelete($id: Int!) {
      issueDelete(id: $id)
    }`;
    const {
      issues
    } = this.state;
    const {
      location: {
        pathname,
        search
      },
      history
    } = this.props;
    const {
      showSuccess,
      showError
    } = this.props;
    const {
      id
    } = issues[index];
    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_7__["default"])(query, {
      id
    }, showError);

    if (data && data.issueDelete) {
      this.setState(prevState => {
        const newList = [...prevState.issues];

        if (pathname === `/issues/${id}`) {
          history.push({
            pathname: '/issues',
            search
          });
        }

        newList.splice(index, 1);
        showSuccess(`Deleted issue ${id} successfully.`);
        return {
          issues: newList
        };
      });
    } else {
      this.loadData();
    }
  }

  render() {
    const {
      issues
    } = this.state;
    if (issues == null) return null;
    const {
      selectedIssue
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Panel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Panel"].Heading, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Panel"].Title, {
      toggle: true
    }, "Filter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Panel"].Body, {
      collapsible: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      urlBase: "/issues"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueTable_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      issues: issues,
      closeIssue: this.closeIssue,
      deleteIssue: this.deleteIssue
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueDetail_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      issue: selectedIssue
    }));
  }

}

const IssueListWithToast = Object(_withToast_jsx__WEBPACK_IMPORTED_MODULE_9__["default"])(IssueList);
IssueListWithToast.fetchData = IssueList.fetchData;
/* harmony default export */ __webpack_exports__["default"] = (IssueListWithToast);

/***/ }),

/***/ "./src/IssueTable.jsx":
/*!****************************!*\
  !*** ./src/IssueTable.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IssueTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);




const IssueRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(({
  issue,
  location: {
    search
  },
  closeIssue,
  deleteIssue,
  index
}) => {
  const selectLocation = {
    pathname: `/issues/${issue.id}`,
    search
  };
  const editTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    id: "close-tooltip",
    placement: "top"
  }, "Edit Issue");
  const closeTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    id: "close-tooltip",
    placement: "top"
  }, "Close Issue");
  const deleteTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    id: "delete-tooltip",
    placement: "top"
  }, "Delete Issue");

  function onClose(e) {
    e.preventDefault();
    closeIssue(index);
  }

  function onDelete(e) {
    e.preventDefault();
    deleteIssue(index);
  }

  const tableRow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.owner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.effort), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.due ? issue.due.toDateString() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, issue.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__["LinkContainer"], {
    to: `/edit/${issue.id}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["OverlayTrigger"], {
    delayShow: 1000,
    overlay: editTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    bsSize: "xsmall"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Glyphicon"], {
    glyph: "edit"
  })))), ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["OverlayTrigger"], {
    delayShow: 1000,
    overlay: closeTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    bsSize: "xsmall",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Glyphicon"], {
    glyph: "remove"
  }))), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["OverlayTrigger"], {
    delayShow: 1000,
    overlay: deleteTooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    bsSize: "xsmall",
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Glyphicon"], {
    glyph: "trash"
  })))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__["LinkContainer"], {
    to: selectLocation
  }, tableRow);
});
function IssueTable({
  issues,
  closeIssue,
  deleteIssue
}) {
  const issueRows = issues.map((issue, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IssueRow, {
    key: issue.id,
    issue: issue,
    closeIssue: closeIssue,
    deleteIssue: deleteIssue,
    index: index
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    bordered: true,
    condensed: true,
    hover: true,
    responsive: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Owner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Created"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Effort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Due Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, issueRows));
}

/***/ })

};
//# sourceMappingURL=server.65a5c9e760d5f1d17d43.hot-update.js.map