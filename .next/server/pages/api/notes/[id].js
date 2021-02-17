module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/notes/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/Note.js":
/*!************************!*\
  !*** ./models/Note.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst NoteSchema = new mongoose.Schema({\n  title: {\n    type: String,\n    required: [true, 'Introduzca un nombre para la nota/tarea'],\n    unique: true,\n    maxlength: [40, 'El nombre de la tarea no puede ser mayor de 40 caracteres']\n  },\n  description: {\n    type: String,\n    required: true,\n    maxlength: [200, 'La descripcion no puede ser mayor de 200 caracteres']\n  }\n});\nmodule.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvTm90ZS5qcz9kMTNkIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIk5vdGVTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsIm1heGxlbmd0aCIsImRlc2NyaXB0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIk5vdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFELENBQXhCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxJQUFJRixRQUFRLENBQUNHLE1BQWIsQ0FBb0I7QUFDbkNDLE9BQUssRUFBRTtBQUNIQyxRQUFJLEVBQUVDLE1BREg7QUFFSEMsWUFBUSxFQUFFLENBQUMsSUFBRCxFQUFPLHlDQUFQLENBRlA7QUFHSEMsVUFBTSxFQUFFLElBSEw7QUFJSEMsYUFBUyxFQUFFLENBQUMsRUFBRCxFQUFLLDJEQUFMO0FBSlIsR0FENEI7QUFPbkNDLGFBQVcsRUFBRTtBQUNUTCxRQUFJLEVBQUVDLE1BREc7QUFFVEMsWUFBUSxFQUFFLElBRkQ7QUFHVEUsYUFBUyxFQUFFLENBQUMsR0FBRCxFQUFNLHFEQUFOO0FBSEY7QUFQc0IsQ0FBcEIsQ0FBbkI7QUFjQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixRQUFRLENBQUNhLE1BQVQsQ0FBZ0JDLElBQWhCLElBQXdCZCxRQUFRLENBQUNlLEtBQVQsQ0FBZSxNQUFmLEVBQXVCYixVQUF2QixDQUF6QyIsImZpbGUiOiIuL21vZGVscy9Ob3RlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxuY29uc3QgTm90ZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnSW50cm9kdXpjYSB1biBub21icmUgcGFyYSBsYSBub3RhL3RhcmVhJ10sXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzQwLCAnRWwgbm9tYnJlIGRlIGxhIHRhcmVhIG5vIHB1ZWRlIHNlciBtYXlvciBkZSA0MCBjYXJhY3RlcmVzJ11cclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFsyMDAsICdMYSBkZXNjcmlwY2lvbiBubyBwdWVkZSBzZXIgbWF5b3IgZGUgMjAwIGNhcmFjdGVyZXMnXVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuTm90ZSB8fCBtb25nb29zZS5tb2RlbCgnTm90ZScsIE5vdGVTY2hlbWEpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/Note.js\n");

/***/ }),

/***/ "./pages/api/notes/[id].js":
/*!*********************************!*\
  !*** ./pages/api/notes/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Note */ \"./models/Note.js\");\n/* harmony import */ var _models_Note__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Note__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    query: {\n      id\n    },\n    method\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      try {\n        const note = await _models_Note__WEBPACK_IMPORTED_MODULE_1___default.a.findById(id);\n\n        if (!note) {\n          return res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: note\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'PUT':\n      try {\n        const note = await _models_Note__WEBPACK_IMPORTED_MODULE_1___default.a.findByIdAndUpdate(id, req.body, {\n          new: true,\n          runValidators: true\n        });\n\n        if (!note) {\n          return res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: note\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'DELETE':\n      try {\n        const deletedNote = await _models_Note__WEBPACK_IMPORTED_MODULE_1___default.a.deleteOne({\n          _id: id\n        });\n\n        if (!deletedNote) {\n          return res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: {}\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbm90ZXMvLmpzPzMyZWMiXSwibmFtZXMiOlsiZGJDb25uZWN0IiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsIm5vdGUiLCJOb3RlIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImZpbmRCeUlkQW5kVXBkYXRlIiwiYm9keSIsIm5ldyIsInJ1blZhbGlkYXRvcnMiLCJkZWxldGVkTm90ZSIsImRlbGV0ZU9uZSIsIl9pZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLGdFQUFTO0FBRU0sc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixRQUFNO0FBQ0ZDLFNBQUssRUFBRTtBQUFFQztBQUFGLEtBREw7QUFFRkM7QUFGRSxNQUdGSixHQUhKOztBQUtBLFVBQVFJLE1BQVI7QUFDSSxTQUFLLEtBQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTUMsSUFBSSxHQUFHLE1BQU1DLG1EQUFJLENBQUNDLFFBQUwsQ0FBY0osRUFBZCxDQUFuQjs7QUFFQSxZQUFJLENBQUNFLElBQUwsRUFBVztBQUNQLGlCQUFPSixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckIsQ0FBUDtBQUNIOztBQUVEVCxXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRU47QUFBdkIsU0FBckI7QUFDSCxPQVJELENBUUUsT0FBT08sS0FBUCxFQUFjO0FBQ1pYLFdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNIOztBQUNEOztBQUNKLFNBQUssS0FBTDtBQUNJLFVBQUk7QUFDQSxjQUFNTCxJQUFJLEdBQUcsTUFBTUMsbURBQUksQ0FBQ08saUJBQUwsQ0FBdUJWLEVBQXZCLEVBQTJCSCxHQUFHLENBQUNjLElBQS9CLEVBQXFDO0FBQ3BEQyxhQUFHLEVBQUUsSUFEK0M7QUFFcERDLHVCQUFhLEVBQUU7QUFGcUMsU0FBckMsQ0FBbkI7O0FBS0EsWUFBSSxDQUFDWCxJQUFMLEVBQVc7QUFDUCxpQkFBT0osR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsbUJBQU8sRUFBRTtBQUFYLFdBQXJCLENBQVA7QUFDSDs7QUFFRFQsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFJLEVBQUVOO0FBQXZCLFNBQXJCO0FBQ0gsT0FYRCxDQVdFLE9BQU9PLEtBQVAsRUFBYztBQUNaWCxXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBckI7QUFDSDs7QUFDRDs7QUFDSixTQUFLLFFBQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTU8sV0FBVyxHQUFHLE1BQU1YLG1EQUFJLENBQUNZLFNBQUwsQ0FBZTtBQUFFQyxhQUFHLEVBQUVoQjtBQUFQLFNBQWYsQ0FBMUI7O0FBRUEsWUFBSSxDQUFDYyxXQUFMLEVBQWtCO0FBQ2QsaUJBQU9oQixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBckIsQ0FBUDtBQUNIOztBQUVEVCxXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRTtBQUF2QixTQUFyQjtBQUNILE9BUkQsQ0FRRSxPQUFPQyxLQUFQLEVBQWM7QUFDWlgsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSVQsU0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTtBQTdDUjtBQStDSCxDQXJERCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9ub3Rlcy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi91dGlscy9kYkNvbm5lY3QnO1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvTm90ZSc7XHJcblxyXG5kYkNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgICAgICAgbWV0aG9kXHJcbiAgICB9ID0gcmVxO1xyXG5cclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBhd2FpdCBOb3RlLmZpbmRCeUlkKGlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW5vdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG5vdGUgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1BVVCc6XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RlID0gYXdhaXQgTm90ZS5maW5kQnlJZEFuZFVwZGF0ZShpZCwgcmVxLmJvZHksIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFub3RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBub3RlIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlZE5vdGUgPSBhd2FpdCBOb3RlLmRlbGV0ZU9uZSh7IF9pZDogaWQgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFkZWxldGVkTm90ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/notes/[id].js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// Importamos mongoose\n //Creamos la constante de conexion\n\nconst connection = {}; //Conectamos a nuestra base de datos mediante MONGO_URI \n\nasync function dbConnect() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://mario_dam20:morcilla1@cluster0.zlkyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  connection.isConnected = db.connections[0].readyState;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0EsTUFBTUEsVUFBVSxHQUFHLEVBQW5CLEMsQ0FFQTs7QUFDQSxlQUFlQyxTQUFmLEdBQTJCO0FBQ3ZCLE1BQUlELFVBQVUsQ0FBQ0UsV0FBZixFQUE0QjtBQUN4QjtBQUNIOztBQUVELFFBQU1DLEVBQUUsR0FBRyxNQUFNQywrQ0FBUSxDQUFDQyxPQUFULENBQWlCQyw0R0FBakIsRUFBd0M7QUFDckRDLG1CQUFlLEVBQUUsSUFEb0M7QUFFckRDLHNCQUFrQixFQUFFO0FBRmlDLEdBQXhDLENBQWpCO0FBS0FSLFlBQVUsQ0FBQ0UsV0FBWCxHQUF5QkMsRUFBRSxDQUFDTSxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDSDs7QUFFY1Qsd0VBQWYiLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gSW1wb3J0YW1vcyBtb25nb29zZVxyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuLy9DcmVhbW9zIGxhIGNvbnN0YW50ZSBkZSBjb25leGlvblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG4vL0NvbmVjdGFtb3MgYSBudWVzdHJhIGJhc2UgZGUgZGF0b3MgbWVkaWFudGUgTU9OR09fVVJJIFxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });