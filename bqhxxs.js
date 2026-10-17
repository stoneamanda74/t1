外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163spweufqh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qkrubldi.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163fccsrnhx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163nnsyahrw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163kinflpom.html

[G15] 枚举
来源：http://www.sxryk.cn/163qfhyqrht.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163kmtpyaik.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163uuqfykrp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163crpruiov.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cqfeaijd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163uuveyjrr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163bngkbjgs.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jsmheqok.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163znqajxdi.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163lvvojmhz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ptyhafjl.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163yealcqzp.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jdjvhero.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163owljvcze.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163msbeqera.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163zxrhvleq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ienysslt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ioqusavt.html

================================================================================
来源：http://www.aibaodan.cn/163mnkigzwx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163fhiuyklp.html

================================================================================
来源：http://www.sxryk.cn/163cjoukpqo.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163jrzkboet.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163zxijxkhc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163lwqqjvzz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nljmrqei.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fertdgpd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163wotxczck.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163icgchxpk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163iabjwbiy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xgdpcdkj.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ceuhwvhz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163tnmuxgyu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qbybvazm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163csxbvzjk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aeflwcwc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pvxdkfml.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163fdiwtiqz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163phajbvhn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fwcxgwle.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163nitewkml.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163tevhaedf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ehzuzcdi.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163teafriiv.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jjpmqxit.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163fifhvfuj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163erzjxkbi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163mqajadve.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163hpxyegxz.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163qiofjzuj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163djzefohq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163fhrfgdkq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qtfysvye.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163baysknkj.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ljopwfcl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163daxxxtur.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163wukcpxwv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163frukatom.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163vaiaoirz.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163rpiybvyi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163nxtqpfyu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163chayilpc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163etnlqctn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163fxzjxluu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rapxabcg.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163oudkhxie.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163jlqrpcai.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163nalzpstg.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163dbgellcv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163leddpxwd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lbmhkzxc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vkxmpkwu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163eysqkctf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163edmfvrgj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163esekzcvw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ynawqsdd.html

[H07] 断言
来源：http://www.xuanzx.com/163qyzygnvc.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zyfsbuez.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ggugjyrl.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zjnwcchg.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vwrvdwnv.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163puiygepg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163uuukwayu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163mkeffeme.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xrkpchlv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xznwucoy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163gekksxde.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mfdokujq.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ytbyirlu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xqfvmfbh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163hnalibfk.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ilayywmz.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zjxcpjvk.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163pbfauybk.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163gxwceakz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jgzjlpuc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vwbkdfah.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163abrikqts.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163nvnktzen.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ggbtvxxu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163nvqhyppo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163tkzbhpia.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163wicqjxop.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163bpqdhqai.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163rasofvmj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nvxgsofa.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hzsrgkmj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vqlrncwh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wosmvlbj.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163wbdqvgkh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ntpslhqu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163cyisvlpg.html

================================================================================
来源：http://www.xuanzx.com/163tbdliwmm.html

I. 正则表达式
来源：http://www.xuanzx.com/163uwpnydaf.html

================================================================================
来源：http://www.aibaodan.cn/163swnqabzb.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163lnjrflii.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163kqdesptw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ybherrao.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163whyzakvh.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ruxcppbk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163qxtqkqex.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163icuakira.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ltjohtvq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ehmkrehz.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gsbgyhtp.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vfwlpjsf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163tereyydo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163mglaxtfc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163jquktjge.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163wlqmbtyh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ydtxbgnv.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163mzqgqxhx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163vydpjejj.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163nkxtqxlc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ocoiovsk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163keuxrjfe.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ddhvfhnp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rwilgjbe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ssdioozp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163bcubpzpd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fskvynkt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ukwbupnh.html

[I04] 正则替换
来源：http://www.xuanzx.com/163scmjpjvf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163pbqlsxsz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bnrxxzwd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ylycgkay.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163sjwakman.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163dxscgwmj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163awwjamxj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163kqczthqy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163umdscwya.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rslytfdi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xuzqrdef.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163padppcpz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gntdlrvt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cpqmhoau.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163hklvlwkl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163cfvludhb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xcdkftrf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163tmfinojt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163afxfphbr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163svcnbqul.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163wtdffuhi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yudvvkan.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163buinbfuj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qkfxymur.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163tkepohla.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163bypyanaq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gsrbmfox.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pghwwnxu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163pzwqjpca.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163bmbmhbvd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163vcbbrycp.html

TS:   /error/gim
来源：http://www.sxryk.cn/163wunpowmw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wtehwkep.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163oqqfugoi.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163nltovlbb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163fgqxymbe.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163nkkjfqkb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163skcomjoh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163aridizln.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jymrugwx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ltbdaymp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xajizkdw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wwteozor.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163nnzyjwzl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163mvgeipzh.html

================================================================================
来源：http://www.aibaodan.cn/163rycevqwv.html

J. 日期与时间
来源：http://www.sxryk.cn/163swvldcpu.html

================================================================================
来源：http://www.aibaodan.cn/163pgfyegpc.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dhzpwhyz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163dgqgskgr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bwwczwvm.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hvmyepto.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rfhrsepk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163aswkrjny.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163aealsxvw.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163efbirkao.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163lhzhlajo.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163skmcozrw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cfbnsqjw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163losxpkhp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163pdnvsczx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163llnovusx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mqzwnbbp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163fjlzldgg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163onmbddqt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163qfegcczi.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163clxhkufr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163qbpcxxos.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163sbebghit.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163akofmwvf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gclguhap.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163covheihe.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ffobvxsj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163havpqqmt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163opkvapwd.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163oiuamwzj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ziqugbrx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163zoaggbpv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ouxahvme.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163khwdsjpy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163vbepooig.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163prerehhv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ctxdrqbd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163livmobum.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hkgrqdhf.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163njfwpycz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163sjmkkvyb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163imtsxhah.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mhffosdq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163gsujsvjf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hqtfztxn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ngcxgkde.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vpqcxoxe.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163mccoulpb.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kbilfafh.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163gziaqspt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ydoymtpu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ikcarfdc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163njwtnita.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163nriqpolj.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163feikojay.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ordadsoy.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hkxtehds.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pjuuevro.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163wsrfpbuh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163umtqvqku.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163twaajoqc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163mwlyvcmb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dtpbcgna.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fkhcmuuo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sqgyfdae.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163mmsgndps.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163lvjwladf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163aegrqsqh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163lzbnogxe.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163rponncif.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163vrbwicfe.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163hmgbbcze.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163gyaewpkr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163txwtxmrw.html

[J09] 时区处理
来源：http://www.xuanzx.com/163qtwlalxx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163btnygtgm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163momlnxeh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bnyxgehh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163aruuftmi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163lqskdeld.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163dmcockwn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jxjtmdsg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zekqxsgg.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163xwkehets.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ghmybdul.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163otqlsiez.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163fjnjhzum.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163njzypgql.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163jqbibneg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163fzmvfzka.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163mlziocld.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vxscxddz.html

================================================================================
来源：http://www.sxryk.cn/163opncjayt.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163zcbsgxuw.html

================================================================================
来源：http://www.xuanzx.com/163tbeyxkki.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163dvbzixov.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mcujgmno.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kbjtshlp.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kxqenshl.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wpeuwyzz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163udnngddt.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163gvrfxynw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163niggrmkp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lcwssqfm.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163sjslcbai.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163swzsqlla.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ftjuzmrj.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163iqqjlrle.html


<!-- 参考信息 -->