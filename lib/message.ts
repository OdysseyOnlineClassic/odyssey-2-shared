import { Enums } from "./enums";

export class Message {
  data: Buffer;
  timestamp: number;

  private bytesRead = 0;

  constructor(public system: Enums.Systems, public id: number, public length: number) {
    this.data = Buffer.allocUnsafe(length);
    this.timestamp = Date.now();
  }

  /**
   * Appends data to a message
   *
   * @param appendData
   * @return {Buffer} Bytes remaining after appending
   */
  append(appendData: Buffer) {
    let bytesToAppend = this.length - this.bytesRead;

    this.bytesRead += appendData.copy(this.data, this.bytesRead, 0, bytesToAppend);

    return appendData.slice(bytesToAppend);
  }

  get complete(): boolean {
    return this.bytesRead === this.length;
  }
}
