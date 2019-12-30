import Vue from 'vue';
import {
  Container,
  Aside,
  Main,
  Header,
  Button,
  Link,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Input,
  Card
} from 'element-ui';

[Container, Aside, Main, Button, Header, Link, Menu, MenuItem, Submenu, MenuItemGroup, Input, Card].forEach((Comp) =>
  Vue.use(Comp)
);
