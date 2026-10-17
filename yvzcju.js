外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163klvlwtkm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163bbpaicbi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ebyruwcl.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vzhuoqnz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hevhbcuk.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163bhugqanb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163iwxciapi.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163pfnmhgak.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fluewrli.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qojlgasp.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bhlrvtos.html

C#:   u is User
来源：http://www.aibaodan.cn/163cuczzrhf.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163heeprxrv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163zgzckfjb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dzepsmfj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163goylfqtl.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bexghygv.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163twyuhkse.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163fuphpsqf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xeuloywe.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zrqvefvi.html

[G15] 枚举
来源：http://www.sxryk.cn/163atwwowkn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163dwznnqmb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163khzqznxf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jqqewkuw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qqxxcvfg.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163oimftwtw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gpcbopwq.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mtghedub.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163omadgmau.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163saawqank.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163otsezrgx.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kdiyovdg.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pmsvapzq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nufhrfye.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163uhendqbg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ejpvtxqj.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163igmldevz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163tjofgflj.html

================================================================================
来源：http://www.sxryk.cn/163zfqhuzvy.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163jwzpkzjg.html

================================================================================
来源：http://www.sxryk.cn/163xxssdesb.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rgwhsudk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163wbghrbxe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163xqfwlwzt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fcdhcykz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163clffruev.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163tlruywat.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163pjpryrjd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163oakunsvf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163iobshgap.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163tcemdfbc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ujaliofe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ypbznvrk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rropoklg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qympamaf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zetcxiqr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163xjunbkwu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qwmzofom.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ciwsegvv.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163yfntjyyo.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vsvaxegn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ggxelhhf.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vaqsvarn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rokaritb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lmrcydhg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163puqwsnfq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wlsaygyk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pqbreavj.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163zcithecz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163gtxgkdqf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wxogjpru.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zvbfwgrm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bcsvzzto.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zacvwnuw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163djbqwveu.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163grghrtfy.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wcsfesnb.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163dxriuoqb.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kjguewsa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163upeffvqh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163sfqatsih.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vgawcvnp.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zzlwyeun.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163liigocaa.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163tzrcbohp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163zozfydhq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uaixhowz.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163rieamkpj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vjtpwykq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nfxssrry.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lfrytevs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zcyrgrfr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qqvrvtaz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163veweejez.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163eqirmmqo.html

[H07] 断言
来源：http://www.sxryk.cn/163vrwvssyv.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rjueubaa.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163dqiqxdlq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163etvluhqw.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cgltmqoe.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163fpfgwtuh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163mwyyxihk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163udtydrpy.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ucpfvfvg.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163pbnvefbt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163amaypppa.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163nwbpibpy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163rlvzkswg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ozfpzlrl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163yvoictvd.html

Go:   err.Error()
来源：http://www.xuanzx.com/163nqlflegq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163amxpirtf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163dqyvkhxu.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163hccdjfsm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163oqgcagtl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wiktbtmd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tfzuxhya.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163arnmctjf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163rzpjeadp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163aksnpuzb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ebryxhvu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163dfvycqzl.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qnydnfia.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ssqdxxbn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163gezfliqh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ethdwsri.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ooousojq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163hsdmiqnf.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gvbfmzvn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163cebziysf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163gbuzevfw.html

================================================================================
来源：http://www.sxryk.cn/163cynbgidb.html

I. 正则表达式
来源：http://www.sxryk.cn/163bykfjbtf.html

================================================================================
来源：http://www.sxryk.cn/163eqpqxjyy.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163covtpbrs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163jzurkont.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163fkspaqcm.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vafottew.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163yjtlnpfc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163sjsciokv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163yzhppfqw.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163tptjxeec.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163icoakfmy.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163njfgksic.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163csuhntkd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qsvbntsx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163deydyrpw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qggpbypj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163rxdgyfcm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163vrxhbnwr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163fsbjrxjv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wmkafhok.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vjemepik.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163nvmtdngp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163zhvqxgub.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163qhwcwktj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163tkytrfui.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ayndngva.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163cucgwmsm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163dheqvbhh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xvvqsqwt.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163iqbgzvak.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mlecrnxq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zwiyvkpn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163bwxuddom.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163whslehmx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163mxzclpel.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163aefbrsgl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163gnrijxph.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fqhidkvp.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ljyrwlyi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163cgbftynq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163noecsscb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cmkrnrrw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fmuzqzhm.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xyrljuib.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163yjpdftdf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fjjqgvnw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163qdrwmqxe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163eshejyms.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ycqbpwec.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163rtgkjuor.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hjmvndyh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rinhwegm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hawzaklz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163znjgbkna.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nubxrqji.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wgeyocju.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163uaetwbyd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163xkixzyme.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fkyfbrsi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163uccmowqv.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ztmnffij.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163xldxvhua.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163fyrobtde.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163igunqzad.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163synialwz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ilrtdvjz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163mkqqvjro.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163swnknqgk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yrevlkkz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163eueacwhl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163kjgbyiip.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bdmnmkzd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163szgwkark.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lwyihlsf.html

================================================================================
来源：http://www.xuanzx.com/163rtswtqms.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cneyndae.html

================================================================================
来源：http://www.sxryk.cn/163xdanvbtp.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xafbsacc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dwgcflzg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ktgpmjji.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cnmdiigo.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hghdpnld.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163swbrwnyv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163xefjqudk.html

Ruby: Time.now
来源：http://www.xuanzx.com/163esfldzos.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163rmscgted.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163puorqybg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jgfbrpwr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fnrcglny.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163mbwiczze.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163icpvfzpa.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163czjljaed.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163lecpeaks.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uukxyzwh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163sjeifpsl.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163pohkuaso.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zuvssxuk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mdcxkjii.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qmiuwxfl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vbjxnshi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ktzlivtg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hgktehbv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bnqecpnm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163lumqyubg.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hffgfkmx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163strhljbn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nplcobxl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163lvqmccmt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zgxckhpx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mkyiqfol.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hdbaaubm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xdfetdqq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163qqcajtxt.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lnuhkauo.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163sbzvrljd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163njhnnpub.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ydjjyeoh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vtskgwjy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rlprgwst.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163bskocluv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xfdbhykj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163xjzxyqvs.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163iyjncoxv.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163mlrigprs.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wdpeyxgc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163nexwrfah.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ddxztvzh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jyuclwuw.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163byxmrsjc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ckbxwytl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163nxeodbva.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163jiytllaw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qtbgmilm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jnvnazoo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163htifnynm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ebitlofs.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163puxdqdmp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bcoekxro.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163exylltry.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163filjllns.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163arpbhibd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rcypbaiu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rgqswqhi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ftulovax.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163tzimiydd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163cydvmwyr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163etwfugxc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163cuokolpl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wnagambe.html

[J09] 时区处理
来源：http://www.sxryk.cn/163codqeacg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163elvnaidi.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gtimfccf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zwbsnmkp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tstllrze.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163cezvsrih.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163fpldzhjj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ohlvdamj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mvvfzncq.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xvsiekjn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163hzlyonbj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163emmdltbi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163oolszyxz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163prrliltz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163sjollnqo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ktkrqcrl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163gzsohupm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hhikzdpi.html


<!-- 参考信息 -->