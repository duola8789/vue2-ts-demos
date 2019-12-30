import Vue from 'vue';
import { Container, Aside, Main, Header, Button, Link, Menu, MenuItem, Submenu, MenuItemGroup } from 'element-ui';

[Container, Aside, Main, Button, Header, Link, Menu, MenuItem, Submenu, MenuItemGroup].forEach((Comp) => Vue.use(Comp));
