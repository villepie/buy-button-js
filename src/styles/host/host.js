export default ".shopify-buy-frame {\n  display: inline-block; }\n  .shopify-buy-frame iframe {\n    width: 100%;\n    display: block;\n    height: 0;\n    overflow: hidden; }\n\n.shopify-buy-frame--cart {\n  width: 100%;\n  max-width: 350px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  z-index: 2147483647;\n  transform: translateX(100%);\n  -webkit-transform: translateX(100%);\n  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1); }\n  .shopify-buy-frame--cart iframe {\n    height: 100%; }\n  .shopify-buy-frame--cart.is-active {\n    transform: translateX(0);\n    -webkit-transform: translateX(0); }\n\n.shopify-buy-frame--product {\n  display: block; }\n  .shopify-buy-frame--product.layout-horizontal {\n    display: block;\n    margin-left: auto;\n    margin-right: auto; }\n    .shopify-buy-frame--product.layout-horizontal iframe {\n      max-width: 100%; }\n      @media (min-width: 950px) {\n        .shopify-buy-frame--product.layout-horizontal iframe {\n          max-width: 950px;\n          margin-left: auto;\n          margin-right: auto; } }\n\n.shopify-buy-frame--toggle {\n  display: inline-block; }\n  .shopify-buy-frame--toggle:not(.is-sticky) {\n    overflow: hidden;\n    padding: 5px; }\n  .shopify-buy-frame--toggle.is-sticky {\n    display: none;\n    position: fixed;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    -webkit-transform: translateY(-50%);\n    z-index: 2147483645; }\n  .shopify-buy-frame--toggle.is-active.is-sticky {\n    display: block; }\n  .shopify-buy-frame--toggle iframe {\n    height: auto; }\n    .is-active .shopify-buy-frame--toggle iframe {\n      min-height: 67px; }\n\n.shopify-buy-frame--productSet {\n  width: 100%; }\n\n.shopify-buy-frame--modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2147483646;\n  display: none;\n  transition: background 300ms ease; }\n  .shopify-buy-frame--modal iframe {\n    height: 100%;\n    width: 100%;\n    max-width: none; }\n  .shopify-buy-frame--modal.is-active {\n    background: rgba(0, 0, 0, 0.6); }\n  .shopify-buy-frame--modal.is-block {\n    display: block; }\n"