// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Auction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Auction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Auction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Auction", id.toString(), this);
    }
  }

  static load(id: string): Auction | null {
    return changetype<Auction | null>(store.get("Auction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get winner(): string | null {
    let value = this.get("winner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set winner(value: string | null) {
    if (!value) {
      this.unset("winner");
    } else {
      this.set("winner", Value.fromString(<string>value));
    }
  }

  get hero(): BigInt | null {
    let value = this.get("hero");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set hero(value: BigInt | null) {
    if (!value) {
      this.unset("hero");
    } else {
      this.set("hero", Value.fromBigInt(<BigInt>value));
    }
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (!value) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(<BigInt>value));
    }
  }
}