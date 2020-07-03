// 验证名字
var validateName = (rule, value, callback) => {
  if (!value) {
    callback(new Error("名字不能为空"));
  } else if (/[a-zA-Z]/.test(value)) {
    callback(new Error("请填写中文名字！"));
  } else {
    callback();
  }
};

// 验证年龄
var validateAge = (rule, value, callback) => {
  const toNumberVal = Number(value);
  if ((typeof value === "string" && value === "") || value === null) {
    callback(new Error("年龄不允许为空"));
  } else if (isNaN(toNumberVal)) {
    callback(new Error("年龄为数值类型"));
  } else if (!(toNumberVal > 0 && toNumberVal <= 120)) {
    callback(new Error("年龄范围应该大于一岁且小于等于120岁"));
  } else {
    callback();
  }
};

// 验证性别
var validateSex = (rule, value, callback) => {
  if ((typeof value === "string" && value === "") || value === null) {
    callback(new Error("性别不允许为空"));
  } else {
    callback();
  }
};

// 验证不为空
var notEmpty = (rule, value, callback) => {
  if (value === "" || value === null || value === undefined) {
    callback(new Error("不允许为空"));
  } else {
    callback();
  }
};

/* 合法uri*/
var validateURL = (rule, value, callback) => {
  const urlRegex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  if (!urlRegex.test(value)) {
    callback(new Error("请输入合法的url网址!"));
  } else {
    callback();
  }
};

/* 小写字母*/
var validateLowerCase = (rule, value, callback) => {
  const reg = /^[a-z]+$/;
  if (!reg.test(value)) {
    callback(new Error("请输入小写字母!"));
  } else {
    callback();
  }
};

/* 大写字母*/
var validateUpperCase = (rule, value, callback) => {
  const reg = /^[A-Z]+$/;
  if (!reg.test(value)) {
    callback(new Error("请输入大写字母!"));
  } else {
    callback();
  }
};

/*验证正整数*/
var validateNum = (rule, value, callback) => {
  const reg = /^[1-9][0-9]*$/;
  if (!reg.test(value)) {
    callback(new Error("请输入正整数!"));
  } else {
    callback();
  }
};

//校验输入非中文
var noChinese = (rule, value, callback) => {
  const reg = /[\u4e00-\u9fa5]/;
  if (!reg.test(value)) {
    callback();
  } else {
    callback(new Error("请勿输入中文!"));
  }
};

//校验输入是否是数字（包括正负、小数点）
var inputOrNumber = (rule, value, callback) => {
  const reg = /[-+]*[0-9][.][0-9]+|[-+]*[1-9][0-9]*|^[0]$/;
  if (!reg.test(value)) {
    callback(new Error("请输入数字!"));
  } else {
    callback();
  }
};

/* 是否邮箱*/
var validateEMail = (rule, value, callback) => {
  const reg = /^([a-zA-Z0-9]+[-_/.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
  if (value == "" || value == undefined || value == null) {
    callback();
  } else {
    if (!reg.test(value)) {
      callback(new Error("请输入正确的邮箱地址"));
    } else {
      callback();
    }
  }
};
/* 不能出现@符号*/
var validateSign = (rule, value, callback) => {
  const reg = /@/;
  if (value == "" || value == undefined || value == null) {
    callback();
  } else {
    if (value.indexOf("@") == -1) {
      callback();
    } else {
      callback(new Error("不能输入非法字符@"));
    }
  }
};

/* 是否身份证号码*/
var validateIdNo = (rule, value, callback) => {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (value == "" || value == undefined || value == null) {
    callback();
  } else {
    if (!reg.test(value) && value != "") {
      callback(new Error("请输入正确的身份证号码"));
    } else {
      callback();
    }
  }
};

/* 是否手机号码或者固话*/
var validatePhoneTwo = (rule, value, callback) => {
  const reg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/;
  if (value == "" || value == undefined || value == null) {
    callback();
  } else {
    if (!reg.test(value) && value != "") {
      callback(new Error("请输入正确格式的电话号码或固话"));
    } else {
      callback();
    }
  }
};

export {
  validateName,
  validateAge,
  validateSex,
  notEmpty,
  validateURL,
  validateLowerCase,
  validateUpperCase,
  validateNum,
  noChinese,
  inputOrNumber,
  validateEMail,
  validateIdNo,
  validatePhoneTwo,
  validateSign
};
