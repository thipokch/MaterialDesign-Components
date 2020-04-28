import { Component, Prop, Part } from '@mdi/element';
import { uuid } from '../utils/uuid';
import { removeToast } from '../utils/toast';

import template from './toast.html';
import style from './toast.css';

@Component({
  selector: 'mdi-toast',
  style,
  template
})
export default class MdiToast extends HTMLElement {
  @Prop() loading: boolean = false;
  @Prop() message: string = '';
  @Prop() type: string = 'default';
  @Prop() key: string = uuid();

  @Part() $button: HTMLButtonElement;
  @Part() $loadingIcon: SVGElement;
  @Part() $closeIcon: SVGElement;
  @Part() $message: HTMLSpanElement;
  @Part() $loading: HTMLSpanElement;

  toasts: any[] = [];

  connectedCallback() {
    this.$button.addEventListener('click', () => {
      removeToast(this.key);
    });
  }

  render() {
    this.$message.innerText = this.message;
    this.$loading.classList.toggle('hide', !this.loading);
  }
}