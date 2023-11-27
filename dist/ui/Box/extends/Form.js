"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const react_1 = __importDefault(require("react"));
const Form = ({ children, ...args }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { ...args }, children)));
};
exports.Form = Form;
