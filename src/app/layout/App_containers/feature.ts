// feature.ts

export interface Feature {
    id: number;
    customerName: string;
    customerId: string;
    beamStockManagement: boolean;
    yarnStockManagement: boolean;
    factoryManagement: boolean;
    shiftManagement: boolean;
    machineManagement: boolean;
    defectiveMeterEntry: boolean;
    machineProfiles: boolean;
    clothQualityManagement: boolean;
    machinesAllowed: number;
    editing?: boolean; // Add optional editing property
}
