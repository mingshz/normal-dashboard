const menuData = [{
  name: '首页',
  icon: 'welcome',
  path: 'index',
}, {
  name: '账户',
  icon: 'login',
  path: 'login',
  authority: 'guest',
  children: [{
    name: '登录',
    path: 'login',
  // }, {
  //   name: '注册',
  //   path: 'register',
  // }, {
  //   name: '注册结果',
  //   path: 'register-result',
  }],
}, {
  name: '使用文档',
  icon: 'book',
  path: 'http://pro.ant.design/docs/getting-started',
  target: '_blank',
}];

function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    const result = {
      ...item,
      path: `${parentPath}${item.path}`,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
