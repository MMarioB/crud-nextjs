module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[id]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[id]/index.js":
/*!*****************************!*\
  !*** ./pages/[id]/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/fp/Descargas/crud-clase-main/pages/[id]/index.js\";\n//Importamos lo necesario\n\n\n\n\n\nconst Note = ({\n  note\n}) => {\n  const {\n    0: confirm,\n    1: setConfirm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const {\n    0: isDeleting,\n    1: setIsDeleting\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    if (isDeleting) {\n      deleteNote();\n    }\n  }, [isDeleting]);\n\n  const open = () => setConfirm(true);\n\n  const close = () => setConfirm(false); //Nuestro metodo para borrar\n\n\n  const deleteNote = async () => {\n    const noteId = router.query.id;\n\n    try {\n      const deleted = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://localhost:3000/api/notes/${noteId}`, {\n        method: \"Delete\"\n      });\n      router.push(\"/\");\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  const handleDelete = async () => {\n    setIsDeleting(true);\n    close();\n  }; //interfaz que nos saldria cuando vayamos a eliminar una nota\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"note-container\",\n    children: [isDeleting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Loader\"], {\n      active: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 19\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: note.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 21\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: note.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 21\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        color: \"red\",\n        onClick: open,\n        children: \"Eliminar nota\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 21\n      }, undefined)]\n    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Confirm\"], {\n      open: confirm,\n      onCancel: close,\n      onConfirm: handleDelete\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 9\n  }, undefined);\n}; //Esta funcion envia la pagina con los datos actualizados desde el servidor\n\n\nNote.getInitialProps = async ({\n  query: {\n    id\n  }\n}) => {\n  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://localhost:3000/api/notes/${id}`);\n  const {\n    data\n  } = await res.json();\n  return {\n    note: data\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Note);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy8vaW5kZXguanM/ZTJmOCJdLCJuYW1lcyI6WyJOb3RlIiwibm90ZSIsImNvbmZpcm0iLCJzZXRDb25maXJtIiwidXNlU3RhdGUiLCJpc0RlbGV0aW5nIiwic2V0SXNEZWxldGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImRlbGV0ZU5vdGUiLCJvcGVuIiwiY2xvc2UiLCJub3RlSWQiLCJxdWVyeSIsImlkIiwiZGVsZXRlZCIsImZldGNoIiwibWV0aG9kIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJkYXRhIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQ3ZCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRixzREFBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlKLFVBQUosRUFBZ0I7QUFDWkssZ0JBQVU7QUFDYjtBQUNKLEdBSlEsRUFJTixDQUFDTCxVQUFELENBSk0sQ0FBVDs7QUFNQSxRQUFNTSxJQUFJLEdBQUcsTUFBTVIsVUFBVSxDQUFDLElBQUQsQ0FBN0I7O0FBRUEsUUFBTVMsS0FBSyxHQUFHLE1BQU1ULFVBQVUsQ0FBQyxLQUFELENBQTlCLENBYnVCLENBZXZCOzs7QUFDQSxRQUFNTyxVQUFVLEdBQUcsWUFBWTtBQUMzQixVQUFNRyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sS0FBUCxDQUFhQyxFQUE1Qjs7QUFDQSxRQUFJO0FBQ0EsWUFBTUMsT0FBTyxHQUFHLE1BQU1DLHlEQUFLLENBQUUsbUNBQWtDSixNQUFPLEVBQTNDLEVBQThDO0FBQ3JFSyxjQUFNLEVBQUU7QUFENkQsT0FBOUMsQ0FBM0I7QUFJQVgsWUFBTSxDQUFDWSxJQUFQLENBQVksR0FBWjtBQUNILEtBTkQsQ0FNRSxPQUFPQyxLQUFQLEVBQWM7QUFDWkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSDtBQUNKLEdBWEQ7O0FBYUEsUUFBTUcsWUFBWSxHQUFHLFlBQVk7QUFDN0JqQixpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBTSxTQUFLO0FBQ1IsR0FIRCxDQTdCdUIsQ0FrQ3ZCOzs7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBLGVBQ0tQLFVBQVUsZ0JBQ0wscUVBQUMsd0RBQUQ7QUFBUSxZQUFNO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxnQkFHUDtBQUFBLDhCQUNJO0FBQUEsa0JBQUtKLElBQUksQ0FBQ3VCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsa0JBQUl2QixJQUFJLENBQUN3QjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSSxxRUFBQyx3REFBRDtBQUFRLGFBQUssRUFBQyxLQUFkO0FBQW9CLGVBQU8sRUFBRWQsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEo7QUFBQSxvQkFKUixlQVVJLHFFQUFDLHlEQUFEO0FBQ0ksVUFBSSxFQUFFVCxPQURWO0FBRUksY0FBUSxFQUFFVSxLQUZkO0FBR0ksZUFBUyxFQUFFVztBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrQkgsQ0FyREQsQyxDQXVEQTs7O0FBQ0F2QixJQUFJLENBQUMwQixlQUFMLEdBQXVCLE9BQU87QUFBRVosT0FBSyxFQUFFO0FBQUVDO0FBQUY7QUFBVCxDQUFQLEtBQTZCO0FBQ2hELFFBQU1ZLEdBQUcsR0FBRyxNQUFNVix5REFBSyxDQUFFLG1DQUFrQ0YsRUFBRyxFQUF2QyxDQUF2QjtBQUNBLFFBQU07QUFBRWE7QUFBRixNQUFXLE1BQU1ELEdBQUcsQ0FBQ0UsSUFBSixFQUF2QjtBQUVBLFNBQU87QUFBRTVCLFFBQUksRUFBRTJCO0FBQVIsR0FBUDtBQUNILENBTEQ7O0FBT2U1QixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1tpZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0ltcG9ydGFtb3MgbG8gbmVjZXNhcmlvXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IENvbmZpcm0sIEJ1dHRvbiwgTG9hZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuY29uc3QgTm90ZSA9ICh7IG5vdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2NvbmZpcm0sIHNldENvbmZpcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNEZWxldGluZykge1xyXG4gICAgICAgICAgICBkZWxldGVOb3RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzRGVsZXRpbmddKVxyXG5cclxuICAgIGNvbnN0IG9wZW4gPSAoKSA9PiBzZXRDb25maXJtKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4gc2V0Q29uZmlybShmYWxzZSk7XHJcblxyXG4gICAgLy9OdWVzdHJvIG1ldG9kbyBwYXJhIGJvcnJhclxyXG4gICAgY29uc3QgZGVsZXRlTm90ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBub3RlSWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL25vdGVzLyR7bm90ZUlkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJEZWxldGVcIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzRGVsZXRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2ludGVyZmF6IHF1ZSBub3Mgc2FsZHJpYSBjdWFuZG8gdmF5YW1vcyBhIGVsaW1pbmFyIHVuYSBub3RhXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90ZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAge2lzRGVsZXRpbmdcclxuICAgICAgICAgICAgICAgID8gPExvYWRlciBhY3RpdmUgLz5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntub3RlLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e25vdGUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3JlZCcgb25DbGljaz17b3Blbn0+RWxpbWluYXIgbm90YTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPENvbmZpcm1cclxuICAgICAgICAgICAgICAgIG9wZW49e2NvbmZpcm19XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17Y2xvc2V9XHJcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm09e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy9Fc3RhIGZ1bmNpb24gZW52aWEgbGEgcGFnaW5hIGNvbiBsb3MgZGF0b3MgYWN0dWFsaXphZG9zIGRlc2RlIGVsIHNlcnZpZG9yXHJcbk5vdGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnk6IHsgaWQgfSB9KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ub3Rlcy8ke2lkfWApO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7IG5vdGU6IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[id]/index.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });