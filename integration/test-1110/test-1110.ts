// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: test-1110.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "";

export interface UserRule {
  /** just some fake rule for testing */
  UUID: string;
}

export interface Object {
  namespace: string;
  name: string;
}

export interface Boolean {
  namespace: string;
  name: string;
}

export interface Symbol {
  namespace: string;
  name: string;
}

export interface FunctionMessage {
  namespace: string;
  name: string;
}

export interface Nested {
}

export interface Nested_Function {
  namespace: string;
  name: string;
}

export function createBaseUserRule(): UserRule {
  return { UUID: "" };
}

export const UserRule: MessageFns<UserRule> = {
  encode(message: UserRule, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.UUID !== "") {
      writer.uint32(10).string(message.UUID);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.UUID = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserRule {
    return { UUID: isSet(object.uuid) ? globalThis.String(object.uuid) : "" };
  },

  toJSON(message: UserRule): unknown {
    const obj: any = {};
    if (message.UUID !== "") {
      obj.uuid = message.UUID;
    }
    return obj;
  },

  create(base?: DeepPartial<UserRule>): UserRule {
    return UserRule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserRule>): UserRule {
    const message = createBaseUserRule();
    message.UUID = object.UUID ?? "";
    return message;
  },
};

export function createBaseObject(): Object {
  return { namespace: "", name: "" };
}

export const Object: MessageFns<Object> = {
  encode(message: Object, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Object {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.namespace = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Object {
    return {
      namespace: isSet(object.namespace) ? globalThis.String(object.namespace) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Object): unknown {
    const obj: any = {};
    if (message.namespace !== "") {
      obj.namespace = message.namespace;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<Object>): Object {
    return Object.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Object>): Object {
    const message = createBaseObject();
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

export function createBaseBoolean(): Boolean {
  return { namespace: "", name: "" };
}

export const Boolean: MessageFns<Boolean> = {
  encode(message: Boolean, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Boolean {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolean();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.namespace = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Boolean {
    return {
      namespace: isSet(object.namespace) ? globalThis.String(object.namespace) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Boolean): unknown {
    const obj: any = {};
    if (message.namespace !== "") {
      obj.namespace = message.namespace;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<Boolean>): Boolean {
    return Boolean.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Boolean>): Boolean {
    const message = createBaseBoolean();
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

export function createBaseSymbol(): Symbol {
  return { namespace: "", name: "" };
}

export const Symbol: MessageFns<Symbol> = {
  encode(message: Symbol, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Symbol {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSymbol();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.namespace = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Symbol {
    return {
      namespace: isSet(object.namespace) ? globalThis.String(object.namespace) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Symbol): unknown {
    const obj: any = {};
    if (message.namespace !== "") {
      obj.namespace = message.namespace;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<Symbol>): Symbol {
    return Symbol.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Symbol>): Symbol {
    const message = createBaseSymbol();
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

export function createBaseFunctionMessage(): FunctionMessage {
  return { namespace: "", name: "" };
}

export const FunctionMessage: MessageFns<FunctionMessage> = {
  encode(message: FunctionMessage, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FunctionMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunctionMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.namespace = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FunctionMessage {
    return {
      namespace: isSet(object.namespace) ? globalThis.String(object.namespace) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: FunctionMessage): unknown {
    const obj: any = {};
    if (message.namespace !== "") {
      obj.namespace = message.namespace;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<FunctionMessage>): FunctionMessage {
    return FunctionMessage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FunctionMessage>): FunctionMessage {
    const message = createBaseFunctionMessage();
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

export function createBaseNested(): Nested {
  return {};
}

export const Nested: MessageFns<Nested> = {
  encode(_: Nested, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Nested {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNested();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Nested {
    return {};
  },

  toJSON(_: Nested): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<Nested>): Nested {
    return Nested.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<Nested>): Nested {
    const message = createBaseNested();
    return message;
  },
};

export function createBaseNested_Function(): Nested_Function {
  return { namespace: "", name: "" };
}

export const Nested_Function: MessageFns<Nested_Function> = {
  encode(message: Nested_Function, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.namespace !== "") {
      writer.uint32(10).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Nested_Function {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNested_Function();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.namespace = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Nested_Function {
    return {
      namespace: isSet(object.namespace) ? globalThis.String(object.namespace) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: Nested_Function): unknown {
    const obj: any = {};
    if (message.namespace !== "") {
      obj.namespace = message.namespace;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<Nested_Function>): Nested_Function {
    return Nested_Function.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Nested_Function>): Nested_Function {
    const message = createBaseNested_Function();
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

export interface APIService {
}

export const APIServiceServiceName = "APIService";
export class APIServiceClientImpl implements APIService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || APIServiceServiceName;
    this.rpc = rpc;
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
