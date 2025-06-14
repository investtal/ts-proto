// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: enums-as-literals.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "";

export interface DividerData {
  type: DividerData_DividerType;
}

export const DividerData_DividerType = { DOUBLE: 0, SINGLE: 1, DASHED: 2, DOTTED: 3, UNRECOGNIZED: -1 } as const;

export type DividerData_DividerType = typeof DividerData_DividerType[keyof typeof DividerData_DividerType];

export namespace DividerData_DividerType {
  export type DOUBLE = typeof DividerData_DividerType.DOUBLE;
  export type SINGLE = typeof DividerData_DividerType.SINGLE;
  export type DASHED = typeof DividerData_DividerType.DASHED;
  export type DOTTED = typeof DividerData_DividerType.DOTTED;
  export type UNRECOGNIZED = typeof DividerData_DividerType.UNRECOGNIZED;
}

export function dividerData_DividerTypeFromJSON(object: any): DividerData_DividerType {
  switch (object) {
    case 0:
    case "DOUBLE":
      return DividerData_DividerType.DOUBLE;
    case 1:
    case "SINGLE":
      return DividerData_DividerType.SINGLE;
    case 2:
    case "DASHED":
      return DividerData_DividerType.DASHED;
    case 3:
    case "DOTTED":
      return DividerData_DividerType.DOTTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DividerData_DividerType.UNRECOGNIZED;
  }
}

export function dividerData_DividerTypeToJSON(object: DividerData_DividerType): string {
  switch (object) {
    case DividerData_DividerType.DOUBLE:
      return "DOUBLE";
    case DividerData_DividerType.SINGLE:
      return "SINGLE";
    case DividerData_DividerType.DASHED:
      return "DASHED";
    case DividerData_DividerType.DOTTED:
      return "DOTTED";
    case DividerData_DividerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function createBaseDividerData(): DividerData {
  return { type: 0 };
}

export const DividerData: MessageFns<DividerData> = {
  encode(message: DividerData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DividerData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDividerData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
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

  fromJSON(object: any): DividerData {
    return { type: isSet(object.type) ? dividerData_DividerTypeFromJSON(object.type) : 0 };
  },

  toJSON(message: DividerData): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = dividerData_DividerTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DividerData>, I>>(base?: I): DividerData {
    return DividerData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DividerData>, I>>(object: I): DividerData {
    const message = createBaseDividerData();
    message.type = object.type ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
