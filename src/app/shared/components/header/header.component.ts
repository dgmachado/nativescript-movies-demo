import { Component, Input } from "@angular/core";
import { Icons, LayersService, NavigationService } from "@app/core";

@Component({
  moduleId: module.id,
  selector: "ns-header",
  templateUrl: "header.component.html",
})
export class HeaderComponent {
  @Input() headerTitle: string;
  @Input() hasBackButton: boolean;
  @Input() hasMenuButton: boolean;

  icons = Icons;

  constructor(
    private navigationService: NavigationService,
    private layersService: LayersService
  ) {}

  back(): void {
    this.navigationService.back();
  }

  openMenu(): void {
    this.layersService.openMenu();
  }
}
