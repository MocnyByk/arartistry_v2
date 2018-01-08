export class MenuRouteModel {
    public route: String;
    public displayText: String;
    public isActive: Boolean;
};

export class NavbarModel {
    public menuRoutes: MenuRouteModel[];
};
