import { expect } from 'chai';
import 'mocha';
import { Message } from '../lib/message';

describe('Message', () => {
  describe('append(Buffer)', () => {
    it('should properly append data', () => {
      const length = 100;
      const msg = new Message(0, length);
      const data = Buffer.allocUnsafe(length).fill(1, 0, length - 1);

      msg.append(data);
      expect(msg.data.compare(data)).to.equal(0);
    });

    it('should return remaining data beyond message length', () => {
      const length = 10;
      const msg = new Message(0, length);
      const data = Buffer.allocUnsafe(length * 2);

      for (let i = 0; i < length * 2; i++) {
        data.writeUInt8(i, i);
      };

      const expected = data.slice(length);
      const actual = msg.append(data);
      expect(actual.compare(expected)).to.equal(0);
    });

    it('should return empty buffer when appending up to message length', () => {
      const length = 10;
      const msg = new Message(0, length);
      let data: Buffer;
      let actual: Buffer;

      for (let i = 0; i < length; i++) {
        data = Buffer.alloc(1, i);
        actual = msg.append(data)
        expect(actual).to.be.instanceOf(Buffer);
        expect(actual.length).to.equal(0);
      }
    });
  });

  describe('complete', () => {
    it('should be true when complete', () => {
      const length = 10;
      const msg = new Message(0, length);
      const data: Buffer = Buffer.allocUnsafe(length);

      msg.append(data);

      expect(msg.complete).to.equal(true);
    });

    it('should be false when expecting more data', () => {
      const length = 10;
      const msg = new Message(0, length);
      const data: Buffer = Buffer.allocUnsafe(length - 1);

      msg.append(data);

      expect(msg.complete).to.equal(false);
    });
  });
});
