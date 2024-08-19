import { UUID } from "UUID-typescript";
import { strEmpty } from "../libs/constants";
import { IsString, IsNotEmpty, Validate, ValidateNested } from "class-validator";
import { ValidateUUID } from "../validations/validateUUID";

export class AlertModel{

    public builderId: UUID = UUID.createEmpty();
    public buildingId: UUID = UUID.createEmpty();
    public deviceId: UUID = UUID.createEmpty();
    public eventTimestamp: string = strEmpty;
    public severity: string = strEmpty;
    public value: string = strEmpty;
    public name: string = strEmpty;
    public producerTimestamp: string = strEmpty;
}

export class AlertInputModel{

    @IsNotEmpty()
    @Validate(ValidateUUID, {
        message: "organizationId must be UUID"
    })
    public builderId: UUID = UUID.createEmpty();

    @ValidateNested()
    public path: Path = new Path();    

    @IsNotEmpty()
    @IsString()
    public eventTimestamp: string = strEmpty;

    @IsNotEmpty()
    @IsString()
    public severity: string = strEmpty;
    
    @IsNotEmpty()
    @IsString()
    public value: string = strEmpty;   

    @IsString()
    public name: string = strEmpty;
}

export class Path {
    @IsNotEmpty()
    @Validate(ValidateUUID, {
        message: "buildingId must be UUID"
    })
    public buildingId: UUID = UUID.createEmpty();
    
    @IsNotEmpty()
    @Validate(ValidateUUID, {
        message: "deviceId must be UUID"
    })
    public deviceId: UUID = UUID.createEmpty();    
}

export class AlertResponseModel {
    status: number = 500;
    error: any = null;
    name: any = null;
    data: any = null;
}

export class User {
    userId: string = strEmpty;
    phone: string = strEmpty;
    email: string = strEmpty;
}

export class DeviceUser {
    userId: string = strEmpty;
    deviceId: string = strEmpty;
}

export class EnrichedAlertModel {
    alert: AlertModel = new AlertModel();
    users: User[] = [];
}