import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NavItem } from '../nav-item';
import { Router, ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent implements OnInit {

  constructor(public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
  }

  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;


    onItemSelected(item: NavItem) {
      if (!item.children || !item.children.length) {
        this.router.navigate([item.route]);
     
      }
      if (item.children && item.children.length) {
        this.expanded = !this.expanded;
      }
    }

}
