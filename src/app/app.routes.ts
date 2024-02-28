import { Routes } from '@angular/router';
import { DashboardlayoutComponent } from './presentation/layouts/dashboardlayout/dashboardlayout.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardlayoutComponent,
        children: [
            {
                path: 'admin',
                loadComponent: () => import('./presentation/pages/admin/service-page/service-page.component'),
                data: {
                    icon: 'fa-solid fa-screwdriver-wrench',
                    title: 'Administración',
                    description: 'Configuración de servicios'
                }
            },
            {
                path: 'crear_servicio',
                loadComponent: () => import('./presentation/pages/admin/crearServicio/crearServicio.component')
            },
            {
                path: 'testmicroservices',
                loadComponent: () => import('./presentation/pages/microserrvices-page/microserrvices-page.component'),
                data: {
                    icon: 'fa-solid fa-microchip',
                    title: 'Microservicios',
                    description: 'Pruebas de  Microservicios'
                }
            },
            {
                path: 'testservicessoap',
                loadComponent: () => import('./presentation/pages/bus-services-pages/bus-services-pages.component'),
                data: {
                    icon: 'fa-solid fa-bus',
                    title: 'Bus - ESB',
                    description: 'Probar Servicios del Bus'
                }
            },
            {
                path: '**',
                redirectTo: 'testmicroservices',
                pathMatch: 'full'
            }
        ]
        
    }

];
