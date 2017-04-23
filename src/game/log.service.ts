import { Utils } from "./utils";
import * as _ from "lodash";

export class LogService {
    public staticLogs: Log[] = [];
    public tempLogs: Log[] = [];

    constructor() { }

    public addStaticLog(log: Log) {
        log.id = Utils.guid();
        this.staticLogs.push(log);
    }

    public deleteStaticLog(id: string) {
        this.staticLogs = _.filter(this.staticLogs, l => l.id != id);
    }

    public addTempLog(log: Log) {
        log.id = Utils.guid();
        this.tempLogs.push(log);

        const _this = this;
        setTimeout(() => {
            _this.tempLogs = _.filter(_this.tempLogs, l => l.id != log.id);
        }, 5000);
    }
}

export interface Log {
    id: string;
    text: string;
}