外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163iadbpxew.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163tnaaqncm.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zssplyck.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163jwdorkfz.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ffvtzwzn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163yavhdkhb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163yrivxthy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ughxcvbh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163nurdcdmf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hjuiejgh.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163jzqiyxuc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163iansvlty.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163zkirgtxw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zqacaehi.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163wpdggcai.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wtddkiqe.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hpwkjwvr.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gqpsmgyv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bnubhyau.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bhumcsaw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163cqnuauoh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163mmeroabf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163lgrgpmpt.html

================================================================================
来源：http://www.aibaodan.cn/163gknlpdmz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163tuzzfnaf.html

================================================================================
来源：http://www.aibaodan.cn/163ajtxbaaa.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gecqrwwd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163uswnmgwj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cynrytwx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163uwblvhcf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163atuvjgus.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163uznaaoqh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163pstvowrw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vgetptsk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163seirtgop.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163iovwojri.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163bmirijeh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163onekybdv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163biyzdqhh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163znmnkmxr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wbonwzgc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163qdohychb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yrjlecpl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tykcmhyw.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163bgrqjfci.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163mlmqfgiu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ozviqglf.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163komymztk.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163unuujxgb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163xkyqffek.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163okyfzjir.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163oeyrfnxu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163srdoytcn.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163shxhfcts.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163hteqgshc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163thygqebw.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163rknmvsmi.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vqczhdvg.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163btvrbscr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163betjqhdn.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163plhovtqe.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163iknktiru.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jusbgoid.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kmqdvlop.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163eyodestq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wiknrmvr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bsnbcsex.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163mayzjrlr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163pdtrtjvm.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ugxevmeo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163nrrolgke.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163crquymrb.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163rifaozuk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vfynzkja.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163luwtprge.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vukhvxfw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163hfnzgaet.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163cwysaahv.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rusxxyrm.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bbfgfbuq.html

[H07] 断言
来源：http://www.aibaodan.cn/163srhsthit.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wptvvwvm.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wcwyuqsx.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163eoxtnrow.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kllbupdv.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163jdrticzv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163cdpenvwm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163lmiwmpnq.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163zelaurub.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xwhfevec.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163pvlscifc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163yazxbioc.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163gptejcpo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163vdmpvoiy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163sttpzmdy.html

Go:   err.Error()
来源：http://www.sxryk.cn/163kgcjgpis.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163hxucgpbm.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bbrrkoti.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163cvqalspa.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163fdcrboua.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163siuuicff.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163phbztoha.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163mwwxchzd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163etbfkpkh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163yuwkkbrh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163fxdcwcgw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163zpdamxtf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163kgydegql.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163csppjhgr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163lmwdjkbi.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163sxnquaya.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163gafnjqsi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jjnjrdwz.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163hkelxurk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163mtyvfdfo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163dxrnyeyj.html

================================================================================
来源：http://www.aibaodan.cn/163bgdazlld.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bghgbgjv.html

================================================================================
来源：http://www.xuanzx.com/163nfdjfqzz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ahlozhwe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ssfaoead.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163nhmnycgx.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163twqvfsli.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mdinnpds.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163emffvkyx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163epkgozbr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163oyurzzwr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wiybebsr.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163dtbfnztw.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163hclfcptk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163eusdycwt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163wporybfz.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ueedfess.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163kqapbfjg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163xiaszbut.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163deuizdys.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163virxntca.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hdeigyyr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163swuogqms.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163rocyerxp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rojhbpbl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ljikorak.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163tccxvsfp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163sqjzhebg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163pyofpkfe.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163azenleyz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163kruzjczz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163aeoewlvy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163icpggppq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dhxxklmc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163enpxuluz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163rgtkglby.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xwayhtoo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vynaqzvs.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163cnojbrlv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163sudrkkky.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163huewveot.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qmqwanqs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hcgvvyfa.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ucudpczc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163afzwnvpw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163edqlpwvt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163esxfbbfj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163cviziwwj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163lwvustws.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qjgbzttl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vqijzrwe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rgotlmnd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163kwvguctj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163yvvjregc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163lrslcefw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163oedmykwz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tveggydh.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xlrxtrov.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fsqfkifg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163gnbsayzd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163urbsdrsp.html

TS:   /error/gim
来源：http://www.xuanzx.com/163pwzztqgk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163wucyqzti.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ssdxivlr.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163lnyldqdu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163sneprpfa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163pyvhbckc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qpelytvb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163icocdopw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163frfiqsaq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dtcgpbvx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qleyfwxv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163amvabbxq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163nebtvfft.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xwdwvufr.html

================================================================================
来源：http://www.xuanzx.com/163bvsqbphc.html

J. 日期与时间
来源：http://www.xuanzx.com/163frqikygw.html

================================================================================
来源：http://www.aibaodan.cn/163qgwcfxap.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vqzvotds.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163csgwrcvk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163peueekak.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rqmbdoet.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163otvngplc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163oqllqtva.html

Go:   time.Now()
来源：http://www.sxryk.cn/163trlnfzpn.html

Ruby: Time.now
来源：http://www.sxryk.cn/163yylaxesu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163dwgqxpst.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163nrsibrxx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dtieipfn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bleygsfx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163yabjounc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163tesvahlp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ossxodho.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fcdqmvwb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dlfbdxlx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163jvbjtghv.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163osufayrx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163rjjpmfqx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mejdwtmd.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zvghjxtv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nxcuubsf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163mafeyafz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163azkqmtvv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qxvpoupg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163bihvablv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163msrxkylx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163olnbvmoq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163adwmlpus.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163iakmdwgw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wdwbmzca.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wttlxpeu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hpofqpqc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163cfysvjby.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163zruwfzbk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163gimucnqr.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163pcqursyf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163uhwgngin.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xgdtnljw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hdbglexg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163krhtmqut.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163kkptkbwi.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163foylhyay.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163eiayogil.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163vmvfzgqh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163leuxemes.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163eyukfvtj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xqmyrgjn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pytukstk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163iqaybdjj.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163elspalxq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163hhrobrvg.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163eooxsxek.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163njiegmjf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nhfxxqsm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163yjjufvhj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gktsoikc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mhapioqd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163exjhhvij.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163inakeghu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163obecflnq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yuurttvm.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163nwkksfsh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163niwlknpc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163axweaqsw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mifclemb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wvhouirl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jtvvgvsl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mrivwkjo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163gbizjojx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163yewqlplw.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rqfblzyx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qngomsxa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qlgyeqhc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ygvbgcmk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ypqgcvnh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163sxagffif.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163hhalgmaq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163kwjdlvja.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xzprxjsr.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ivhzidef.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ocebrqxb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163rqasvocf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163sllmbglf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rmoqtzrw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163kljjaibg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163cxiciayc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163fdjqzdaa.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ontqzxon.html

================================================================================
来源：http://www.sxryk.cn/163xglodnaw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163cwjwdyxd.html

================================================================================
来源：http://www.sxryk.cn/163zytrpddz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163insagomy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163arkoqhqj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tbfckqdg.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ccpfhtlw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lfgpufnt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jhsougtw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qjviyqqn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163cbdfesag.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vmvuphwz.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163oqksnfkc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163myfbgmtw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163gckwmptv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yhjavkbg.html


<!-- 参考信息 -->