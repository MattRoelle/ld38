import { bindable } from "aurelia-framework";
import { TransientEntity } from "../transient-entity";

export class Transient {
    @bindable public entity: TransientEntity;
}