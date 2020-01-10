import Vue from 'vue';
import {
  Container,
  Aside,
  Main,
  Header,
  Button,
  Row,
  Col,
  Link,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Input,
  Checkbox,
  Card,
  Dialog,
  Steps,
  Step,
  CheckboxGroup,
  Notification,
  Loading,
  Message
} from 'element-ui';

[
  Container,
  Aside,
  Main,
  Button,
  Header,
  Link,
  Row,
  Col,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Input,
  Checkbox,
  Card,
  Steps,
  CheckboxGroup,
  Step,
  Dialog
].forEach((Comp) => Vue.use(Comp));

Vue.prototype.$notify = Notification;
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
