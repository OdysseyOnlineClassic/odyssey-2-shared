export class Message {
  data: Buffer;
  timestamp: number;

  private bytesRead = 0;

  constructor(public id: number, public length: number) {
    this.data = Buffer.allocUnsafe(length);
    this.timestamp = Date.now();
  }

  append(appendData: Buffer) {
    if (this.bytesRead + appendData.length > this.length) {
      throw new RangeError("Attempting to append to Message beyond its length");
    }
    let bytesLeft = this.length - this.bytesRead;

    this.bytesRead += appendData.copy(this.data, this.bytesRead, 0, bytesLeft);

    return appendData.slice(bytesLeft);
  }

  isComplete(): boolean {
    return this.bytesRead === this.length;
  }
}
