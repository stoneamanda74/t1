外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zypxqtgo.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163sfmctjqa.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163tutfeoex.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163meohcemx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dulglgvn.html

[G15] 枚举
来源：http://www.xuanzx.com/163bcclsepe.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bpnzgkaz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163bsjjdsjq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vvevaylg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tlxzgyuq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ljzakihm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163modygezy.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163aiihcatn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wkqczjmq.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xckxepig.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163kinjbgrw.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163djfhmswz.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bhcjobtz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163oqukmyqz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163bptgxeou.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163alzqazjh.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163dlftxnqt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gytwudxg.html

================================================================================
来源：http://www.sxryk.cn/163vubrcxju.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163mjvyzszt.html

================================================================================
来源：http://www.xuanzx.com/163uwlmkkdc.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163jgnhmewq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163sgfympxj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xubtsaoq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nhbjvmlf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jivutkkt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163unilepgx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163rxtdvcpw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163vwzrkywn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163gkimwnue.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qdpvfowq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163rlzwooao.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163esbtisry.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ccmanxem.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163llxsubwj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vqzodlcz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163bercunml.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163piilxxfo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163owmqntwk.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zqqardct.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163iqgsxinu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ultcpwzu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163miarcuil.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163imfhinhe.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oyilnhfx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ypashfgc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163lcofnfzw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xkdimmds.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163wmsbwxoh.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163snzjjoph.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fxsivhdb.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qpbcelwv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fvcolfno.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163oznfjdsl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jofznnzm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163lcxrnjet.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xigszxuw.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163wunlsbwn.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ffwfbomp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163awveoqvx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fdwiceui.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ajeljith.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163jjswbkqh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163iwykkuaj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163djphvoha.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163oaousffq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163nsufzuce.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bowxzkhz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163abkyzehe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zegerrhh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dcdmrqax.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163yrayzstu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mhtdnfmh.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nzvsyaml.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ekvmkpzk.html

[H07] 断言
来源：http://www.xuanzx.com/163smsaniyn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163edqeybsa.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163lkwzpova.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nfvepxwc.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mualwdyd.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163legfhygm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163hljremse.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ktqivdeg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163bpmtvxmq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163fvjnadto.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163fxczmwri.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dyzzsqtl.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163aptagzwk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163gbucbhhc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wfrukamw.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vgctokod.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163wwclciaf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163qcznogsb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163cidwyzmc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163lsayihqi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163gwzskmwi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163znnxlxpz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163scpngknx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163whyiuocw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cauxbyvw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163vccbzuhg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mrxfmodl.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163zofghutj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163rpkgheiz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163klcuyekn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dthrnrfo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xlkrutdt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ozzpjdjk.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163qlftkiqq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jxvnerjd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163kqamapnz.html

================================================================================
来源：http://www.aibaodan.cn/163jrpnadxz.html

I. 正则表达式
来源：http://www.sxryk.cn/163biqfwejk.html

================================================================================
来源：http://www.xuanzx.com/163lkvdhbwn.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163nnyydhhi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ygnhujcf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163psoperok.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163oxntnnbo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163cgzppwap.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163qbrfkcwi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163zdxlgftw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hxsbyzrf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163jsndwdzh.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163nhoedjoc.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163nkvlogfj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qovkxpzf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163etgndkmq.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163tsigakjr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163abhholmm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ewjqkwpv.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163zgwdksdr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163jdvshohy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163dmlfannz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qifodurd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163rbpwweqw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ovcoddqm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gnlxmvbp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163dbnytnxp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163icvwfugi.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163exqexvzt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163szannsgx.html

[I04] 正则替换
来源：http://www.xuanzx.com/163fxhwaxsr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163wggmeylu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ylrkkuyx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nnvphcce.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163awcqwavy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163kuxxslem.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163bpcmrccx.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163cewjuotl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163csimdcwm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qpardezb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163nggjsmpl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ekyywdov.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163owabggmv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xmpnaszr.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163oromeupi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163mlrbyucz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fwdmcmco.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163sviygxsa.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hjpnfkri.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gnyfcpsd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163crfdpxne.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bvhzeowv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163otuptjvo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wrlzqdgh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163kslbkfhb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163zhnygbbw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163evdmjspv.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pbdxmcjr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xcqgyxjv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163svmnafey.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mtjtttwu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163oncmhicb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163tovoehcj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163eebikbth.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163rwdjosex.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163gyejmwgo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163qtnpoimx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163nhissxkb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163gqxcqnsq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163aidlaoqj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dwyfwytz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163akwlxhne.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163zqloybgs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ihefgmnn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vfnznzng.html

================================================================================
来源：http://www.aibaodan.cn/163iumuxbyv.html

J. 日期与时间
来源：http://www.sxryk.cn/163tyxxgkpq.html

================================================================================
来源：http://www.xuanzx.com/163sgxuisev.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163tgfnvnxs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163fhcskvfi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xzqwykux.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qgduizhw.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163tdinwefd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163dggndqsa.html

Go:   time.Now()
来源：http://www.sxryk.cn/163wcgqkkhj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ytpnwhkg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ytrtckxq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hmactmyb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kzantiwy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rawfwmar.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163xayfqeft.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163abpewgtg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hgjycrmc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163aoesaqqt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163imwxuinz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mocipbny.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163whumipgk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163npprfzmw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163nkroehpm.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yyomzicf.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163iiuszlbp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163xeetmncy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163iloxqzll.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cwmsxtgn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hrnoijbh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163nphyaljq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163fcxxpefr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163homfnwgo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163bskzsqnj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163dgfovjdi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163bkwdasak.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ikmewhva.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163hkttxoht.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163wnarhlhi.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ktdyqesp.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163rjelinha.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163pbgwappf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ollvjfiy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uxtxtyxg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jvytrxzf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163fmwelagh.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163nfndupou.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qyqajyrh.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163jsmyqfag.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163whloikaq.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163stnwtrvi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163krtsxteh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ennccave.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163bvilmcpl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ihmqmefi.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ayyvazxb.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163himahozt.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rlrlfveq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xpvdyyyn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zwvdboxx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163igmhdanp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163defsacmp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163gnsxcbut.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163labstbcc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ilkfxzwa.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163alukvmyp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ilugsrtv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163khhwhmoa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163kfxighgn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163qklhkwiq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ndjouzlh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163tlkstgqz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163bhsuwuae.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163obzxssvf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163abavqhgl.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163exufzuji.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163omwshlps.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tacyjfsb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fozlnzvo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163kgbfxcen.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fflmpxbh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qxnwzczo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163zyrgkkon.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163sddnvcop.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163pcpynkpu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vydnyruv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163whbhxmax.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163glssxuof.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163mzxpmdft.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163sxvquqwj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ejxuziqo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qpvpipii.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mmxyjppx.html

================================================================================
来源：http://www.xuanzx.com/163dnzpnpvd.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163agtqguto.html

================================================================================
来源：http://www.sxryk.cn/163goydcrlp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hbriinyc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ypjauilq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fxcktitq.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163rocnypxo.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163uakgjdhg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163srvucjlm.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163odzlmgfv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vqxgsabq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163bzbbiftg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163yiqzxozp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ojvyelms.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163crihrvqq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bdyfpoiw.html


<!-- 参考信息 -->