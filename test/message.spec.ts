import { expect } from 'chai';
import 'mocha';
import { Message } from '../lib/message';

describe('Message', () => {
  describe('append(Buffer)', () => {
    it('should throw RangeError when adding to a 0 length message', () => {
      const msg = new Message(0, 0);

      expect(() => { msg.append(Buffer.allocUnsafe(1)); }).to.throw(RangeError);
    });

    it('should throw RangeError when adding to a full message', () => {
      const length = 100;
      const msg = new Message(0, length);
      msg.append(Buffer.allocUnsafe(length));

      expect(() => { msg.append(Buffer.allocUnsafe(1)); }).to.throw(RangeError);
    });

    it('should properly append data', () => {
      const length = 100;
      const msg = new Message(0, length);
      const data = Buffer.allocUnsafe(length).fill(1, 0, length - 1);

      msg.append(data);
      expect(msg.data.compare(data)).to.equal(0);
    });
  });
});
