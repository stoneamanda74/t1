外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bcfqrysy.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163usvrsncw.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163rpehtnxt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163fppdsnvn.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gbvyqxgp.html

[G15] 枚举
来源：http://www.sxryk.cn/163jlggplow.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163azhepfpx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163logsixhv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jbsluhoc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cwhpmmnt.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ekxbdczf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163xhuikbgy.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163svnpjqyw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cbexxomo.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rhrznhzl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163edhjioqb.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163tosixcxg.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mahfpdlm.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pzwebwqy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ynaezcse.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ijnmpgpb.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wrvidsvu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163pjaykszh.html

================================================================================
来源：http://www.sxryk.cn/163pnklnhbv.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163diyiypbg.html

================================================================================
来源：http://www.aibaodan.cn/163anuwsthl.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163qxpspdtd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163cdfxxzwc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fgikonot.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163elpdcsjg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ehvxchtj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jtwhayoa.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163etekoara.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163khkzaasb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yskllfid.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rvuesqfd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mvvqndsw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sdhunicc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ulyltoav.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xpjxoajp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mcvymddy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ppuihsjt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vsosqwed.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163dydrbujd.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163clvpyncm.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163hhwrtwuq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163eiosnnex.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163nlunhzhg.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ocxywfmr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mlxbctke.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163fsayaxms.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163pztimpjv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163qvqhohqt.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163djsuruxy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163hjdzamux.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fjfmvubd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163iyuyakwh.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163uyqsndpk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zjjooets.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163bjsatkap.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163lyezsyft.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lhnralrf.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163nigtptci.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zieukyqz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163micoblhk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rxpdpbfl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163lrtwjtal.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163batrdiqy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lcbfryhr.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163nddbwwqf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qkzlxekj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ounnkajb.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ibptvbpi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ywucafmq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jpslduwf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ugqnzowg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163qtxrxcly.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gtvftgcc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163vaiaqlms.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ztmsqbzs.html

[H07] 断言
来源：http://www.sxryk.cn/163qgwlqgyl.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163abyvalde.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163rzgxrhyw.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nfuhrzip.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163heirfrwg.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163hfvvtlgu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163jlcrzewv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163khsjmgax.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163fbqsvklq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xutsiqct.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163qykmhnbm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dviswsyh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163fxraxjss.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tmydjkrn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zwfgwitt.html

Go:   err.Error()
来源：http://www.xuanzx.com/163bcezneho.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163tbbketez.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163hnxkldsu.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163wbmwnzoz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dqqpiugg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hhyoodne.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163wwepkjud.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tsxxgjcu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163piozxdhm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163savqvifu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163rhnpzzyp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163nwabzqxf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163uhmsavcb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163qufvnvhp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163sxcvozvr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zqxolnpc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vsjmrxap.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vwdgdccd.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163myuftojq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ezzwhome.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xcstknrd.html

================================================================================
来源：http://www.sxryk.cn/163bzxyhgpz.html

I. 正则表达式
来源：http://www.xuanzx.com/163kpxkqosv.html

================================================================================
来源：http://www.sxryk.cn/163nhovxahh.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163lsrxmfzu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163weojtjxc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163zrxnwznn.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163urbqpquw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xaeluzkj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163begvtdpu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163kkslhocn.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163mcdafawi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163gpqpouqa.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163hmdugshk.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163mvdgztqb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jlzsvanr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163lscmiowp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vcdrnstr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163nwkwqdny.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163wxrijixj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163lkulnyne.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vhdwpddx.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wolkxrud.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163alunylxx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nsvankma.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163syjgxlft.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163brylrrtt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163frwhvbfc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163zdbogtei.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163enprcffc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tdjcscbh.html

[I04] 正则替换
来源：http://www.xuanzx.com/163feevdqjh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163efengbbq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lnkmobat.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163edfiovem.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163opftmtmj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163rcpcvpwg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mbqbdvik.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163cpzeeysp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163utgjfrkh.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163dvegvixw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163frpxtozg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163meulubgf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lctpgjkk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vglrfwlz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qgcsoycs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ratmbdno.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hzwvilis.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163iyfylhcy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163gnuqploj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163toqbbfhk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163vddewwnv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163omptbnsm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rmywerst.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163lwejevkb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163oupopwal.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163hvggjoqt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163shzvrcub.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kpdrobyz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163bnpyiblu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ddoobgam.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163nqpgdfaf.html

TS:   /error/gim
来源：http://www.xuanzx.com/163emivaaix.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163esptstgy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163rxbshxfn.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163upiwmzss.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dgvsbyyy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zxmvjamq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163jvmyowzr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163pivdfnyg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kkejmval.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163iwciwvfy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163igzdxoyu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163mhmrpclz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163aeodvunp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163jrcnjlqx.html

================================================================================
来源：http://www.sxryk.cn/163qxifuorx.html

J. 日期与时间
来源：http://www.sxryk.cn/163uqsfgbey.html

================================================================================
来源：http://www.xuanzx.com/163fiinyzsz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163myfhxsaz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163leqsmjyq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163axjgzjdx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163frkxdwjb.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wlxhlfmw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163csheeawt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163yqbqufig.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zxzeyplf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163uvwghdrp.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zudtunad.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ehxzxgln.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bcrkgylk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jvotjebt.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163qztcvwpl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ozbrzevu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ukyeomnn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bqsibuyr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163zdfewwof.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jjogtano.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xczgyknu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163drmybrau.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sybpcghq.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163chkbumfw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gxcnokip.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vobgxgtz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bwickjpo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163lngntpnf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163wkfkzizp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163lyugqwoy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163pybpkslm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163swfetreg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163kjlmkwzn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163oppwfaxy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163cvuewuvt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163dtcerwhm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163vjgjlxsk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163hmwbmlxm.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163egnhayqd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jnlvugjl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vzfrqitd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mkumpgxp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163kyvpkmeq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163gvnqibaa.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ptkqaycz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163amkmqlgb.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163mcwnxwjy.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163vssylhic.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163bqoeobiv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163jvoouiya.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163lqdcdcrs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163aacawzff.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163pwhdkwgd.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cmofoohk.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163xzvuhtam.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ngkltzgf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sdxgphez.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163egfptpji.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ntxeoctk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jatmkfgy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tjyzpufj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163lfgifwxb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sxyhxlrb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xqiefmbv.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163dlatzptu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163cpfgappq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zqoecfnc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163htgiwhvw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163enwtvmmv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163vbqnxwfb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163beswcqlg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163gijrvcjs.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bynsnjqd.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ffvwywjp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163nrscntrx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jcxscpvd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sunpbvch.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qqipgrdz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163oovkxfcz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163vzlexyjm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163qbadezds.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163armwzebj.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ogychzzc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163chvpsfeh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163wyimtiuf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163iboxhibl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163umrwnqng.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gbfjxvod.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ajzszmtx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163onmwppxm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ycqqfxbn.html

================================================================================
来源：http://www.xuanzx.com/163mbgvvaas.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163bnxhytyy.html

================================================================================
来源：http://www.sxryk.cn/163tsqstnrw.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163wjjkcfnu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kkzytszv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lyhpjhrd.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163quvhyfhu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pofuneel.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163dabjxvak.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163bpprclrv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163mghfzeub.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163vxxvvxef.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163pniefbdm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163gltqsins.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163nxehsqxq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zarlmapq.html


<!-- 参考信息 -->