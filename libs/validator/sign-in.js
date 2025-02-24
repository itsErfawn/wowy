const Validator = require('fastest-validator');
const v = new Validator();

const schema = {
  userName: {
    type: "string",
    optional: false,
    min: 8,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$|^[a-zA-Z0-9_]+$/,
    messages: {
      stringPattern: "نام کاربری باید یک متن ساده یا یک ایمیل معتبر باشد",
      stringMin: "نام کاربری باید حداقل 8 کاراکتر باشد"
    }
  },
  password: {
    type: "string",
    min: 8,
    messages: {
      stringMin: "پسورد باید حداقل 8 کاراکتر باشد"
    }
  }
};

const signinValidator = v.compile(schema);
export default signinValidator;
