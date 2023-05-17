/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../portfolio/params";
import { Project } from "../portfolio/project";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "nadongjun.dongthereum.portfolio";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetProjectRequest {
  index: string;
}

export interface QueryGetProjectResponse {
  project: Project | undefined;
}

export interface QueryAllProjectRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllProjectResponse {
  project: Project[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetProjectRequest: object = { index: "" };

export const QueryGetProjectRequest = {
  encode(
    message: QueryGetProjectRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProjectRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetProjectRequest } as QueryGetProjectRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProjectRequest {
    const message = { ...baseQueryGetProjectRequest } as QueryGetProjectRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetProjectRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProjectRequest>
  ): QueryGetProjectRequest {
    const message = { ...baseQueryGetProjectRequest } as QueryGetProjectRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetProjectResponse: object = {};

export const QueryGetProjectResponse = {
  encode(
    message: QueryGetProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.project !== undefined) {
      Project.encode(message.project, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProjectResponse,
    } as QueryGetProjectResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project = Project.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProjectResponse {
    const message = {
      ...baseQueryGetProjectResponse,
    } as QueryGetProjectResponse;
    if (object.project !== undefined && object.project !== null) {
      message.project = Project.fromJSON(object.project);
    } else {
      message.project = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProjectResponse): unknown {
    const obj: any = {};
    message.project !== undefined &&
      (obj.project = message.project
        ? Project.toJSON(message.project)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProjectResponse>
  ): QueryGetProjectResponse {
    const message = {
      ...baseQueryGetProjectResponse,
    } as QueryGetProjectResponse;
    if (object.project !== undefined && object.project !== null) {
      message.project = Project.fromPartial(object.project);
    } else {
      message.project = undefined;
    }
    return message;
  },
};

const baseQueryAllProjectRequest: object = {};

export const QueryAllProjectRequest = {
  encode(
    message: QueryAllProjectRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProjectRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllProjectRequest } as QueryAllProjectRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProjectRequest {
    const message = { ...baseQueryAllProjectRequest } as QueryAllProjectRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProjectRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProjectRequest>
  ): QueryAllProjectRequest {
    const message = { ...baseQueryAllProjectRequest } as QueryAllProjectRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllProjectResponse: object = {};

export const QueryAllProjectResponse = {
  encode(
    message: QueryAllProjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.project) {
      Project.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllProjectResponse,
    } as QueryAllProjectResponse;
    message.project = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.project.push(Project.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllProjectResponse {
    const message = {
      ...baseQueryAllProjectResponse,
    } as QueryAllProjectResponse;
    message.project = [];
    if (object.project !== undefined && object.project !== null) {
      for (const e of object.project) {
        message.project.push(Project.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllProjectResponse): unknown {
    const obj: any = {};
    if (message.project) {
      obj.project = message.project.map((e) =>
        e ? Project.toJSON(e) : undefined
      );
    } else {
      obj.project = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllProjectResponse>
  ): QueryAllProjectResponse {
    const message = {
      ...baseQueryAllProjectResponse,
    } as QueryAllProjectResponse;
    message.project = [];
    if (object.project !== undefined && object.project !== null) {
      for (const e of object.project) {
        message.project.push(Project.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Project by index. */
  Project(request: QueryGetProjectRequest): Promise<QueryGetProjectResponse>;
  /** Queries a list of Project items. */
  ProjectAll(request: QueryAllProjectRequest): Promise<QueryAllProjectResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "nadongjun.dongthereum.portfolio.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Project(request: QueryGetProjectRequest): Promise<QueryGetProjectResponse> {
    const data = QueryGetProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "nadongjun.dongthereum.portfolio.Query",
      "Project",
      data
    );
    return promise.then((data) =>
      QueryGetProjectResponse.decode(new Reader(data))
    );
  }

  ProjectAll(
    request: QueryAllProjectRequest
  ): Promise<QueryAllProjectResponse> {
    const data = QueryAllProjectRequest.encode(request).finish();
    const promise = this.rpc.request(
      "nadongjun.dongthereum.portfolio.Query",
      "ProjectAll",
      data
    );
    return promise.then((data) =>
      QueryAllProjectResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
