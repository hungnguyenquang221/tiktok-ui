const { override, useBabelRc } = require("customize-cra");
module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);
  // Add a module resolver alias for the src directory
