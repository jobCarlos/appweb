import { RouterLink } from "@angular/router";
import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard',
    },

    {
        routeLink: 'gestion',
        icon: 'fal fa-box-open',
        label: 'Gestión Documental',
        items: [
            {
                routeLink: 'recepcion/recepción',
                label: 'Recepción',
                items: [
                    {
                        routeLink: 'recepcion/altas',
                        label: 'Altas',
                    },
                    {
                        routeLink: 'recepcion/modificaciones',
                        label: 'Modificaciones',
                    },
                    {
                        routeLink: 'recepcion/entrega-documentos',
                        label: 'Entrega de Documentos',
                    },
                    {
                        routeLink: 'recepcion/consultas',
                        label: 'Consultas',
                    },
                ]

            }
        ]
    },

    {
        routeLink: 'instrumentos-trabajo',
        icon: 'fal fa-chart-bar',
        label: 'Instrumentos de Trabajo',
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Sistema',
    },
    
];