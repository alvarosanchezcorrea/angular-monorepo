import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
          label: 'Clientes',
          icon: 'pi pi-fw pi-user',
          routerLink: '/#/clientes',
          items: [
              {
                  label: 'Nuevo',
                  icon: 'pi pi-fw pi-plus',
                  routerLink: '/#/clientes/nuevo'
              },
              {
                  label: 'Configurar',
                  icon: 'pi pi-fw pi-trash'
              },

              {
                  label: 'Exportar',
                  icon: 'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label: 'Productos',
          icon: 'pi pi-fw pi-cart-plus',
          items: [
            {
                label: 'Nuevo',
                icon: 'pi pi-fw pi-plus',
            },
            {
                label: 'Configurar',
                icon: 'pi pi-fw pi-trash'
            },

            {
                label: 'Exportar',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
      },
      {
          label: 'Facturas',
          icon: 'pi pi-fw pi-money-bill',
          items: [
              {
                  label: 'Nueva',
                  icon: 'pi pi-fw pi-user-plus'
              },
              {
                  label: 'Anular',
                  icon: 'pi pi-fw pi-user-minus'
              },
              {
                label: 'Imprimir',
                icon: 'pi pi-fw pi-print'
            },
          ]
      },
      {
          label: 'Reportes',
          icon: 'pi pi-fw pi-chart-line',
          items: [
              {
                  label: 'Clientes',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {
                          label: 'Todos',
                          icon: 'pi pi-fw pi-calendar-plus'
                      },
                      {
                          label: 'Con Factura',
                          icon: 'pi pi-fw pi-calendar-minus'
                      }
                  ]
              },
              {
                  label: 'Productos',
                  icon: 'pi pi-fw pi-calendar-times',
                  items: [
                      {
                          label: 'Todos',
                          icon: 'pi pi-fw pi-calendar-minus'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Salir',
          icon: 'pi pi-fw pi-power-off'
      }
  ];
}
  

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    window.history.pushState(null, 'null', '/login');
  }

  get username(): string {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user).username : '';
  }
}