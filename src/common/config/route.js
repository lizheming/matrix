'use strict';

if(think.config('uuap')){
  export default [
    ["admin/user/logout", "admin/uuap/logout"],
    ["admin/user", "admin/uuap/login"],
  ];
}else{
  export default [];
}
