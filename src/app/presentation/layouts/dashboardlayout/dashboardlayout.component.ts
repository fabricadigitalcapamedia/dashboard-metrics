import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';
import { SidebarMenuItemComponent } from '../../components/sidebarMenuItem/sidebarMenuItem.component';

@Component({
  selector: 'app-dashboardlayout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarMenuItemComponent
  ],
  templateUrl: './dashboardlayout.component.html',
  styleUrl: './dashboardlayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardlayoutComponent {
  
  public routes = routes[0].children?.filter( (route) => route.data);
  

}
