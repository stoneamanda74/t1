外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rrznjvkq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163mkomfcce.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163luekzlbw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163mmcsjrfw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163luyuickf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163yzwgncjd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fpjagley.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163lpinubet.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163hhhqvise.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163filrakzv.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163rxpxsvpb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163cjloiuue.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163twkigqso.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dycdtxis.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163waebpqmy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rjwyobdt.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163podnybef.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cmstsxdv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lseipoqi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163gcvtudwa.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163exyskeax.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163crmotxlr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163eeulvbtg.html

================================================================================
来源：http://www.aibaodan.cn/163saqrmysm.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163akebjpui.html

================================================================================
来源：http://www.sxryk.cn/163jkwliqye.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bmbienwz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163jjeilori.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cwtouczr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cvpiucbx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163gwfghocw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163kgmrthwl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163eymqmgkz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163lybrgykp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zpqzuhjm.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163trvnotgs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ytjlxpxk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163stxgvxgp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163efgslmuz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ijekzwqe.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pmadcwth.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rrykaaok.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163cbqhwrvw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163oxrzywso.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rogzaqws.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163gzptchzt.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163audgeyta.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163sokwmyqa.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mjszwxyr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mbncwmou.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163zhkioori.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jsrllixi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163qblpzpsc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163uhymvfvo.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dpbsfiim.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mqnetgbs.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pnddyhrn.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cozdoaeh.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163pvsvmxku.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163agpuftlo.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hfuwayej.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163vnyxyejx.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163gprnpten.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kfwtgezg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163rdlgcioo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jlbnjeay.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163afrdwfup.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zqwxehiz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163rqjjcbmi.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ubjhaxks.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ckyipkqb.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163vdrtffrg.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163mjfntngq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ntpufecq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kxruiahc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qwwznmbu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ngmetlzk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163bmiuxjuu.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zaqrsqzr.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163aqrexafc.html

[H07] 断言
来源：http://www.aibaodan.cn/163sjaeilqx.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163dzwmbiyx.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163cilfazjj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163emqxezkf.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ptotppow.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163gbfbapes.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163dhzxhhjs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163llwjccyl.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163naozcruz.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163uqkacbls.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163hajuapxq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163gzfmrafd.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dwrvmnoh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xvhdpioq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163sqtchzkx.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ktrhmywh.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163dztqdtbq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fyswpczt.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mwkxtzoj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163yhcthmyp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163tinruuyv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163gtzexrdo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163gvtcjour.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163mqfzvuxf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hrxjbfqi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163yinodwbs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163jmpkbhbv.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rtvayntl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163gifhicnb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kzhfnbsy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ulglicar.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rvgiesyd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163wodhjeip.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jcmqtokd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hngdqfxx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163aawxmmmd.html

================================================================================
来源：http://www.sxryk.cn/163qvcnmmsu.html

I. 正则表达式
来源：http://www.xuanzx.com/163sxxmfryn.html

================================================================================
来源：http://www.sxryk.cn/163lxusxhav.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rtzfpqxs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163prewmrhq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163nzxrjsis.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bklwojfg.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kqrbyfcz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163fnmkmebq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ovgrnkld.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xnotxinw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163fdruerso.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163tgvwzaxm.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163pfrxfaic.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wsojadzm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vjlvvank.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163nijwhtuo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zybdqpgn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ltikemwd.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163iwpujrcm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zzfsbocr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dvzqkfvz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mvwhbezv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163wsqysxpf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163bcqwfqpf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163bdogaqvr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163akillbxu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163lgfkamnd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163lryvfmjr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163xacbxggq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ecmgvpsw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163jewqvzxb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kvxmdnfq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lwkipxdg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pjwhczxd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ftjozjco.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qeoiuccf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163kgzfhsfl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163gesnaguk.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163htouwvpk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163yshcsrcm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163pdvpniac.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163livwmwld.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163txifgcec.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dbcdxqaf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163sqhmstft.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ogtcqjeh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mvzpgcyw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qpkpkeuz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163njvsoxbk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163sfmvcgud.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gpcyhrou.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163adpybwmc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163cmobgxng.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ixtiqhcx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163jaxldplg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tphyqsvx.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163wmiwkder.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163eedfabrf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rndhakwu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163lnquevrz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163yujjgmzm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163cznuebab.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163miqkfhpc.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hghofwwd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jdwachdz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163uzudmbpx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163imokaolz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163rwqkbsxb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mpuovhxr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rgnamwfu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ztfxpxdb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163zgjpcdfg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163laftmvyf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163dyscddwn.html

================================================================================
来源：http://www.sxryk.cn/163mvwxssxy.html

J. 日期与时间
来源：http://www.sxryk.cn/163xdwdovre.html

================================================================================
来源：http://www.sxryk.cn/163sxxeajyv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163vzbwijdf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163gfscnkfm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163btcyslwx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163layjxccz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dnieeqyx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163bzlqixyo.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163vokecfdw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163bhzgdbxv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163iznozyeg.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163qcvvonvx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mgmlqxfa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ehehnnep.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163jpatucjn.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gwixrpme.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163kjcpqlbd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163bdqzjkwz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mocebdqu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163jxgkouhn.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163pyiphafe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bpbbyequ.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ajslezjz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mrfqzsfe.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wyvlenat.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fvenlpzp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163rhlscyty.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ukgfarji.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163zwlvkpaz.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tghpyxkd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163mqmsmsxm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163tbnflmla.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ixvwiwub.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163expnkglz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vqppcxsv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ftyutvab.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163teljxjfd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163jvhzciwi.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163sbmbbpik.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163fgcrkaww.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163jhnrqape.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dmyxquvq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163apnqxdpq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163yaakebfa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163mpfyfkdv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163rpupxgkn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qosekbzs.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163qrowxthn.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163soobldqy.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163fgyqtuds.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163hktkqtqy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163iqkpkxri.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kazbzftf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163uvstjxaf.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ddyvyphk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163hbcgaecj.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163kfegwhpb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yrzpntav.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163paobjlvf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163aodrjulw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xhmxmtgz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163kmihcesd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163iszqfarv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163aelhphlb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nnqnsgpn.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163uxncomqz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163myjlrjsl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163hlhcnfst.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163hwrjeahg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163fslgmivq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hlvganjs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163djmmnxxi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163egjtmbva.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ekjwmfcv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163dxoqtodr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163imftrbpn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163qnbzcetn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163anpgsudc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yffydsln.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163uwmgmsif.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ihexpcuk.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163nvxatwwz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163cqmrodus.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163gkjvoirv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163knweljxu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163qcatwzby.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163uuckpwrb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ryhpzsgk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qpzpsmap.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163sqvygcli.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qcqqxfbq.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163gdlblkmu.html

================================================================================
来源：http://www.aibaodan.cn/163phvkcico.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163geouukrj.html

================================================================================
来源：http://www.aibaodan.cn/163eftrsqig.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163iuuvvbqs.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163huvpdbne.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vdalrwkx.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pwrdmznc.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wfkxzrii.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fqopabkm.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163boymynbn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163wlpkcguv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wjsyvlqx.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fgasivco.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163cirpiiug.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vosdhrcx.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vvqumzyg.html


<!-- 参考信息 -->