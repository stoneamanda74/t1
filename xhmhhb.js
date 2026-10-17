外链999!wailian999！

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dbgnncsm.html

[G15] 枚举
来源：http://www.xuanzx.com/163ganobytt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wphyibko.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163spahwqxs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tdwcuafn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wnuitagc.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ohgincdt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163awuhehlt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ojpdqrzy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163pwhmkjov.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163szpemxrf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163grrtuaec.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163pqcjhvsq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tjfsvfvh.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lgbsgsfa.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163loyarhlr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ckilqmxk.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ggnzmuvz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163owffixyb.html

================================================================================
来源：http://www.xuanzx.com/163fecxkcfg.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163pkegjlel.html

================================================================================
来源：http://www.aibaodan.cn/163vifgrydv.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163kgvvyktx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163tckehyhf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kkzztchq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mistjcrk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bogovyfn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xizskezo.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163cdvbelij.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163faemehll.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163dijujzzu.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163uvjqyvlx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163dslztgsu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qoqciszq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sgqmrnip.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163iykmcofe.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jukqbdye.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rimodeif.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163duycsmfk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163swymvaoj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163smhipqao.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163lwxqjfzi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163iwoakgkz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zscbvecg.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bkjogbiz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163hxuycwth.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163skxtfhyh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vttotbdp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vcgvnuzb.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163kyblytcf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163onqfufpi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163mjspesdo.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rksyrnnz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cqlcodyk.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jomxhxbb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ibznojgj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163sbvoejqs.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163bxnmhtqj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163fbkgjxqh.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163wvnhqtqh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jrrlzqae.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163htkwpztl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zetlmifr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163lwefjngf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163tdniwpex.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wzrznboc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163uxefydyh.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163euyxacgd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ppceelzw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163tldqjofw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ayshbktt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lunjzanq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zmwfpjem.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163idccrirt.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ivhvxdch.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163vunpujjy.html

[H07] 断言
来源：http://www.sxryk.cn/163uyfkxqsw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163gzhzdlnq.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hoyrcaxd.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xffqzkbv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dsuytztt.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163cntmbuhv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163wmenwelv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163hvsoxtoz.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163kkelzcrp.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163dpsmqssb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163emmaqabw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ghldhgqg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163uyzujmme.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163cyodjapy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163bgqqwzxz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163icbuxafv.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163yiselanj.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163mfnoweds.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ilcwmjgv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163pglbthak.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163yuasyzsr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163efszfrrz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163pnjagenw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163rosvrgoq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zvyzhnhq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kihlhoye.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163hiceoigf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ihyjjnqi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163lxmrmnfa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ssqtdpow.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dbajwvxw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ckcmvsvf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163qiqqonsm.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163xflbfaig.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rmhzksji.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cqhtrjld.html

================================================================================
来源：http://www.xuanzx.com/163heqgcmki.html

I. 正则表达式
来源：http://www.sxryk.cn/163qwlmxrab.html

================================================================================
来源：http://www.sxryk.cn/163xgymnayc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163jzndflhz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163romlxqkw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ofpznolw.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dlsqyqcj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163facvweoh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163rwvfrfdk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163pfcovpwa.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163behldwfi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163eflxuchc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163kksqlwoz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163adzzxlmc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163cosadzcu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163pjixqvst.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163mxzxpozj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dgwvvavj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ugcbicnv.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163asjdapea.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163kaxvnxcb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163kimdfozl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dcxptynh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pomrgxuj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163bphpfybr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163avuywlbn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163iuobglyb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163xkwchchv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ahajzuqd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163parqqxdi.html

[I04] 正则替换
来源：http://www.xuanzx.com/163etpklpwr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163syiblbvi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163utjvqvwz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kmzwcffr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tzihxvbo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xxkhubcb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vxbohkal.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ajqdbcob.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163gndfefiz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rjgdsocs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163lxgedcfj.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163kjazegwy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tqmdmdmi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163euochryv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163iqizbxfo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163jenxazxj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ppnebtkg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vkipqupz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163wrokxmaf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nrvlcwhu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163qaikxiyy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wqumddtn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163efjhamrg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163iofvviml.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163jvojnfgw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163luxkrwzb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163umyilbrm.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jnnjlioa.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163iprqhzmi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163bficvfhg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hspjvyoq.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163mctcxigi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163qyqbjqai.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163egmthyhg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dwyukgoc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163eddlkvxk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163sagqdgbh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163pnqadnzu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ylswtmoh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gmylphip.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hqikdqby.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kssmryea.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163jgdwgguu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zfponkzt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163yvvtxvqv.html

================================================================================
来源：http://www.xuanzx.com/163gzterdhv.html

J. 日期与时间
来源：http://www.xuanzx.com/163qrridjlc.html

================================================================================
来源：http://www.sxryk.cn/163sdhlggbm.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163uhoiaqna.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163hujrcegq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163vhogvtko.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hfvomgdp.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cbuxkoal.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163luouetoj.html

Go:   time.Now()
来源：http://www.xuanzx.com/163qehaomeq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163duntkeyh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gwpqzqck.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163sxxdyozp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mhumopwu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ytgqxrsd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bvdichms.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hdiqxqmt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mzvyzrwc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163tlkpobyj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163znisxlic.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163nwsebbca.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163yplouuts.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163gfxvusfo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mdwkjnfk.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163eqwdnptn.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kxxfpfan.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hsosmrag.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zjtvmxrq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bzhuoqpv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163izeyprnu.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ujalcall.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163hahwozbc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ewmglmll.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pkdvcvpk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163mrhuyzqp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jhvxhxar.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mrpvxoew.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fzvemhih.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163enqbiexh.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ercjssbr.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rerrsndd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gfvgkitl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jwjzfhpt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163epotlbtc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163uhxfacsb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163sfelzsxa.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163pgkozfgk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163oazsgqxp.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163qcdbbxrn.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kfatdnsn.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163jypisqot.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163lkujtrsy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163hiocckan.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163bbyerzij.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163edmkmuzz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163mifzzakp.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163edubcaxo.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lwjkjpdd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163adsvacuz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163edlsfmyg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jcsjcass.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fqiszhpz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qitgagkx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xreqxzym.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163keijqsur.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tadqnplk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ibsztzpp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ygohexir.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zfhivjsi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163iwctpsqk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163lrxxdsbj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163pahorrko.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qzbzenuv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wmbrsrzg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bolwdtfv.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lqrxsvso.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rvbcvatq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163jibvdqap.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163neyligkn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ckmixcdn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fsewlstw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kzalylsx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163iukwyaeq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163cdkughhz.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163djvjibux.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163yykuygdo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163atzgddlz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qwouzadb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zkfbfwzw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163jbyblzuv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163awthqhpr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163itvvjnbx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163jgxfiezy.html

================================================================================
来源：http://www.aibaodan.cn/163fpmpdlfu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163algrmwtq.html

================================================================================
来源：http://www.xuanzx.com/163qgsqprym.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163zjbdfmam.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163piepfery.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jlsbvcyh.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163grlbcbpa.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fqwvcjqi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163tkcufnhz.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xymdhtkv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163whzfaydz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163gdlogkcl.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xftorxnv.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163cikyaxtw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bddmlyan.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163milrppbc.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ijfdyqnd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163vauhcccz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163kirpoaab.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163wlvzdqux.html


<!-- 参考信息 -->