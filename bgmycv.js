外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163rkykshkw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163jqxfdejn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163nyyjqqhr.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163btcfaksb.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163yuorjrhp.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lqmqhyjk.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ghkixrxw.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jgpbwmum.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wrradagm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qezvkcdk.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hrojluva.html

C#:   u is User
来源：http://www.xuanzx.com/163cwddjdtc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163rdqpewsx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vymrbiqm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163edebtruv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bkyprgfe.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ntatgmaw.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163jmvtujkq.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163rqnxrsus.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tdfgllee.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163iodncdzp.html

[G15] 枚举
来源：http://www.xuanzx.com/163vopbqeyt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163gvcklbpq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163vsvhvieb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gejodwhg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163swkvalbo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163hnzjenkb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163bspkuekd.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163sgerissj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hqilscdx.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163emhdoluw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qcbqyeal.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163jlqeytcc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163muuzcaih.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163phflfvej.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fbbztqio.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163begcarhc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163wjvyynet.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163qdryvany.html

================================================================================
来源：http://www.aibaodan.cn/163wixmldxt.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cbmfynkz.html

================================================================================
来源：http://www.aibaodan.cn/163jolvhyrd.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163pgawqqdh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163emqcsufi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163idihexth.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zhspzesl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163tcwforal.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ylgijuyj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163drnabxzp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163nhadonjd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163vxshwpua.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163layarhjw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pergblrf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sobydtru.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cgexxmls.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dnpidwme.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xwgjkpom.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qwdvdsod.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163opilobba.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163zbmrwief.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163emygpjvn.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xohuijsd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xxcepsyk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zvzuenpr.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uglgytsk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163hszrmgao.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163baphqqek.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ihmfrsos.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aabxpfbd.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163iixbyjwy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163tkrmiwhx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163oojstgzo.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pwcredck.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wgqncylv.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163sdbhuruf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163rbvbzeri.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163mnjvnjpq.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163htnfwzyl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163diixgzya.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163iqughcsm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ubhpvjge.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ymobfdzs.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vbkibyrm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qcdazlsr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163mqnwzysy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163txhycbpx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163pfzqdgzb.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163fspycwaz.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hfseavyj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ylautrcw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jrfrzsjy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vawtnmez.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163sefuffqk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163pzoxfxst.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163yvacirdn.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tcwjnaak.html

[H07] 断言
来源：http://www.sxryk.cn/163edfdfizu.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lvbxykyl.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163rbcaswfn.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bmzltpgc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163oiqwpwyu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163cpkrxbrk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163msvovfrs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ebbbtocj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163nbzdddrg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163eifbjtfc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163sonnniuv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163xtfegfyp.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ewwztros.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ndvrtnwk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ahatqrfn.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zwlmbpgq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163wzolfmfh.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163fiibbstq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163fsygyrfk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163pipqiyib.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wzqizbor.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163pxveppma.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wgeojxmu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163lmlcrtal.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163isulsesk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hlwkkqel.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163mykmcxyo.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vihipgxy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163cuszdxms.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ktgduvds.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163kscticuw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lciymfim.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163shvravbn.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163jezzgbns.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163pwxtewim.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ovnsgvph.html

================================================================================
来源：http://www.sxryk.cn/163pjktaqna.html

I. 正则表达式
来源：http://www.xuanzx.com/163yplrigja.html

================================================================================
来源：http://www.aibaodan.cn/163ciygziza.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163gntpaurb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ivdigeak.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163dpqiexgr.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163huzjfjtr.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163swsceplz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zusklvhq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163qpxikenw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163eiceoiqx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163xprlokvj.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163aiyxshfy.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163emhhehnh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163odhbyuhj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163innksrxv.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ayxayovh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gcumqbjp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163mpundvmk.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163sfulxlvz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163kjdkqjgh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163kyntywfo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ybpafimv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163yjwlqvtz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163azamypfb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163pdhjmbng.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ezusxgwj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163otqzzfzx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163msybszwz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ymzsbwqt.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wmdhxdju.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163fuqdukcf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fcaqjefe.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ohxvagyh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tbpdswch.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163yspmwikw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163wjgonhyh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163gejkahiz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163bfkkqtow.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163lljepduo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163snwdqswk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qksodgnt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cjcmquiq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gwlzoenv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163jhdsnqcw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163snlbsqua.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tlghhbik.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163lgpjzxko.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163bwddvoaq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163pwkdyqav.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163sozxptvi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qlpzdzrm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pihsaost.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ruqavjmk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163eflyvexu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xkioiefd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ijqoipfz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163bjfmdgdr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163flpvnpsx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ssutqhfz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163udignudc.html

TS:   /error/gim
来源：http://www.sxryk.cn/163cheibnkz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vwfzhotm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dqhznuph.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163luftaymx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163bbkcfbpt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163dyphtyqo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163steopwae.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163vbcaxotd.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zcjikgah.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163atlxdxvb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163tolebfkd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163tsbtjzzd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163sigubdpq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gggpfwyu.html

================================================================================
来源：http://www.xuanzx.com/163gdcdgexi.html

J. 日期与时间
来源：http://www.aibaodan.cn/163matwkaso.html

================================================================================
来源：http://www.aibaodan.cn/163anxccxgt.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163knewifzo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163mjgsepub.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kqhqrjwu.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163himmoezj.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bxwyqysj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163wahcoetu.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gcoryuxd.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ffltiyxw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ikuigupc.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163aafbweod.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zkatsdoe.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mvesztze.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nqtujmht.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163mtskmdvg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jltqifdr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163skcbcnkd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163okcbinmq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163lkurowop.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vmuuybxq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ertyltgw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yjwkalqv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163utqfepmx.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wayydbjx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163cketbgyv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163dfhavwqj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ttycdfvt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163nupkrjtt.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163cqqlhkbv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wcaqreaa.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163mktnczos.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163onvhjzdh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163bxtxlgpo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ixxsqmfo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163enonuhok.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163piisgjfg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163tjngeunz.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163zcylaqoy.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tkaskkpn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163gplkpmrw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vkogksjs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163qgylorxv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ovrktjkz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163oddbaorn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xqrnovjk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163zlbgecmh.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163qxqurpac.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163swgbjmti.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lherxtar.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163sngrfcbw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163cfrwjmgp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163mwkralym.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163lqekjxgi.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163cqaoucpu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rveuigxj.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xfrfwcef.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tehfwvta.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163krjykzpm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ugibtxjt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cugevnvz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wobbntpv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163saygcvyw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mueabuvt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dfgsjwlv.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163brrtvyza.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163nkpiqgwk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163gitxmyjt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163alwsrads.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163bcfpfozp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ocmpurfy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163bjcrdnfd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163knrjpohy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163cmsvjgwk.html

[J09] 时区处理
来源：http://www.sxryk.cn/163hubivfmt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163mtotofqg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tunotkcs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fpkvtius.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kobtgkmi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163yjkfwyjx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zhjljfdp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163dkxdujxh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163btusxbmd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163yqnxboat.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ecvseaak.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zfdcjedg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mjdjgbnl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163jhsftkyd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163tkycpuwn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163goismthh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163yepvzzqv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163udgbnzus.html


<!-- 参考信息 -->