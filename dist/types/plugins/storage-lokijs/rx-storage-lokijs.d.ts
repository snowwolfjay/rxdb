import type { FilledMangoQuery, LokiDatabaseSettings, LokiSettings, LokiStorageInternals, RxDocumentData, RxJsonSchema, RxStorage, RxStorageInstanceCreationParams, RxStorageStatics } from '../../types';
import { RxStorageInstanceLoki } from './rx-storage-instance-loki';
import type { LeaderElector } from 'broadcast-channel';
export declare const RxStorageLokiStatics: RxStorageStatics;
export declare class RxStorageLoki implements RxStorage<LokiStorageInternals, LokiSettings> {
    databaseSettings: LokiDatabaseSettings;
    name: string;
    statics: Readonly<{
        prepareQuery<RxDocType>(schema: RxJsonSchema<RxDocumentData<RxDocType>>, mutateableQuery: FilledMangoQuery<RxDocType>): any;
        checkpointSchema: import("../../types").DeepReadonlyObject<import("../../types").JsonSchema<any>>;
    }>;
    /**
     * Create one leader elector by db name.
     * This is done inside of the storage, not globally
     * to make it easier to test multi-tab behavior.
     */
    leaderElectorByLokiDbName: Map<string, {
        leaderElector: LeaderElector;
        /**
         * Count the instances that currently use the elector.
         * If is goes to zero again, the elector can be closed.
         */
        instancesCount: number;
    }>;
    constructor(databaseSettings: LokiDatabaseSettings);
    createStorageInstance<RxDocType>(params: RxStorageInstanceCreationParams<RxDocType, LokiSettings>): Promise<RxStorageInstanceLoki<RxDocType>>;
}
export declare function getRxStorageLoki(databaseSettings?: LokiDatabaseSettings): RxStorageLoki;
