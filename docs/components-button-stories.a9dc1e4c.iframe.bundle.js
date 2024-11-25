"use strict";(self.webpackChunktailwind_shadcn_storybook_boilerplate=self.webpackChunktailwind_shadcn_storybook_boilerplate||[]).push([[512],{"./src/components/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority_dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),bundle_mjs=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,bundle_mjs.QP)((0,clsx.$)(inputs))}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","variant","size","asChild"],buttonVariants=(0,class_variance_authority_dist.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,props=(0,objectWithoutProperties.A)(_ref,_excluded),Comp=asChild?dist.DX:"button";return(0,jsx_runtime.jsx)(Comp,(0,objectSpread2.A)({className:cn(buttonVariants({variant,size,className})),ref},props))}));Button.displayName="Button";const button_stories={title:"Components/Button",component:Button};var Default={render:function render(){return(0,jsx_runtime.jsx)(Button,{children:"Default Button"})}};const __namedExportsOrder=["Default"]}}]);