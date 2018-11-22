import { trigger, state, style, transition, animate, stagger, query, keyframes } from '@angular/animations';
export let listStagger =  trigger('listStagger', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger(
            '50ms',
            animate(
              '550ms ease-in',keyframes([
              style({ opacity: 0, transform: 'translateX(-75px)', offset: 0 }),
              style({ opacity: 0.5, transform: 'translateX(35px)', offset: 0.3}),
              style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
              ])
            )
          )
        ],
        { optional: true }
      ),
      query(':leave', animate('50ms', style({ opacity: 0 })), {
        optional: true
      })
    ])
  ])