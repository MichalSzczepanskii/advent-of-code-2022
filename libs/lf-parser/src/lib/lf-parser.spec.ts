import { LFParser } from './lf-parser';

describe('lfParser', () => {
  it('should parse CRLF line breaks to LF', () => {
    expect(LFParser.parse('test\r\ntest2\r\n')).toEqual('test\ntest2\n');
  });
});
