const { 
  override, 
  useBabelRc,
  // 1. Cần import hàm addWebpackAlias
  addWebpackAlias, 
} = require('customize-cra');
const path = require('path'); // 2. Cần import module path của Node.js

module.exports = override(
  // Giữ lại useBabelRc nếu bạn đang sử dụng file .babelrc
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc(), 
  
  // 3. Thêm cấu hình Webpack Alias vào đây
  addWebpackAlias({
    // Alias bạn muốn dùng (~) : Đường dẫn thư mục đích (src)
    '~': path.resolve(__dirname, 'src'), 
  })
);