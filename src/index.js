import style from "./styles/index.css";

import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#navigation',
        data: function() {
          return {
            isExpanded: false,
            isAriaHidden: true,
            isAriaExpanded: false,
            menu: {}
          };
        },
        methods: {
          toggleMenu: function () {
            this.isExpanded = !this.isExpanded;
            this.resetMenuItems();
            console.warn(this.isExpanded);
            this.$forceUpdate();
          },

          toggleMenuItems: function (menuId) {
            if (this.menu[menuId]) {
              this.menu[menuId] = false;
              this.isAriaHidden = true;
              this.isAriaExpanded = false;
            } else {
              this.resetMenuItems();
              this.menu[menuId] = true;
              this.isAriaHidden = false;
              this.isAriaExpanded= true;
            }
            this.$forceUpdate();
          },

          resetMenuItems: function () {
            for (let key in this.menu) {
              if (this.menu.hasOwnProperty(key)) {
                this.menu[key] = false;
              }
            }
          }
        }
    });
});