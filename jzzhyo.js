外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qzqvgacv.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163nvtzptmx.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163kcwpdxnc.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163kyugzcvf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mccnmcem.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163fcfndcyr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ykrsbyep.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ntjgeyfq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163stjlankb.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zozshozn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163omskjapf.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163byfeptfa.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163qayxtqgr.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163awcluxcj.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163kednybps.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163iiurkmyw.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163zvxreetd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qmizcfhw.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163hjetkfcp.html

C#:   u is User
来源：http://www.xuanzx.com/163osylxnvs.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hwankjje.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163njilqpsw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163seejizbf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163pclnbbwi.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163coahbnts.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zxlgotve.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163rpxdgssa.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163snzfkjde.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163wzxhlppk.html

[G15] 枚举
来源：http://www.xuanzx.com/163jtdvswjg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hirjaupk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163llqybwhv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ljppyecb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hpoisllt.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163dgsnahkm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ewsbfrll.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mjnkyjzn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163eoaeywiu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rtuoyzod.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mgqpuohs.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163mvkuujjb.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jmuuvqbu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163gpglgwdz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jdxhaoww.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163gxyjmhjs.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163cdfiqmvy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163owjsqgai.html

================================================================================
来源：http://www.xuanzx.com/163hodllvar.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163shmpcumj.html

================================================================================
来源：http://www.aibaodan.cn/163gysfuriz.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163guqpvqnt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163gznqppfx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163yylytnje.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ltdjcinn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wxfagcie.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163acqmraed.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ewgtnuga.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163kzasqzwv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163bztosrli.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163beohvkys.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163hsnzeymk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cvikyzhv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yozsnhcq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zrtokuor.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mpprnmlf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163erwnzstq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163tzzsehsj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qjtjxexp.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163iwlxvxlq.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163nueepfmb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xllxstpj.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cxbnlbnw.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wadudfpg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163pjpxymyj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163uqeqbdgf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163yjdowoky.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zswcacrf.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vjntiiuy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163llqofnwj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kwlgntwj.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hzarintl.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fyrelxdv.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163dplawlro.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163dcfusqnt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xahzewsy.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163qaojrxio.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163tnrmzsaa.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163pcrghojo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tjkuhdty.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163galyncio.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mbgbwwrs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cbywdxdf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163qlurbgns.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163tmkpohcv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163rbmgawnn.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163wenswcex.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kexwjhkh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163xcgpikep.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ppcrthsd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gznazofz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ayghoxgk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jgvpfonl.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163qrtxwstu.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163cufeomfd.html

[H07] 断言
来源：http://www.xuanzx.com/163zgjvtdnv.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163hgghpsit.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163gybtwyuf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163styndsft.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cppkwvij.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163olnyeost.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tcrvbsrb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163emdkkivr.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ltvjvkqn.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ubzefjur.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ochmvpdv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163hybxmazg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163dkifuyau.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zaqtgjos.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ooqmbgfe.html

Go:   err.Error()
来源：http://www.xuanzx.com/163snlmqald.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wrbnbdoj.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163gwnoltrc.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ltohpjis.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xkpwkhtq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163olzhwvnm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163fznnrocg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163eodzdcub.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163qcrxsnkz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163sumtuebt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163bezaltzv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163rsehtjul.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163xkgaqjro.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163kqjaafkr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hglttcez.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163thaovgwm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163optehwpi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163hmywadkf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163wcbccqgu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ekmyfgij.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163qszpiqis.html

================================================================================
来源：http://www.sxryk.cn/163hstiveen.html

I. 正则表达式
来源：http://www.xuanzx.com/163aeuqyrzq.html

================================================================================
来源：http://www.xuanzx.com/163hzuiwitv.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163mpaikikt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163cowfxupv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163obzpxuxo.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pixvzsoz.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163whkhiery.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fppjragk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163yzfkfjxe.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163pgcygter.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163popkgwnw.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ghvkzbso.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ikbsmjre.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xvadquxm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xsfdhval.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163balfmpfp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163yjlplons.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163srxxprdj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vyxkbkik.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163cngzmhsw.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ldbmuzab.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163udosvqob.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163puqclutt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163sspxvjcf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163zriyoppr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163lqvzlhuh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qntgcayg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163roymqjla.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jzqagyjv.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163wnclziin.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163giruzwhw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163recplura.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kfdplxzh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163outtsabb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163qlkdpmmq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kcllienu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ttrjigcl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163qoqnztbj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163eezpzsdt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163poegnyxl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163jgkebfwq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hqwaytlx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mcdcdngu.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163nyujaukw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ecdcafhq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uxlchtqk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163cunbnadd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163mdipshcl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kztwplid.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ycmkxryn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163evhsudio.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163thbrfgev.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163onnxaveo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wjitnclm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163amykpodu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zypjulck.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163lgkjcdvp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163yguptkia.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mmuanzhr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zutlmimz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vkqgjwaw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163iygblhpn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163gcjlpvxd.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163kkuzqezm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xruouldj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163vmdjcnbk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163lggzjvnx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163auabijxy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vldyouek.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jgguezog.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163hveiavyv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mznihhdp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163qenmnlly.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163hdzduxbq.html

================================================================================
来源：http://www.sxryk.cn/163xmbehreh.html

J. 日期与时间
来源：http://www.sxryk.cn/163xppylrud.html

================================================================================
来源：http://www.sxryk.cn/163xpdhojob.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163qptgsdxz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tlbxerlo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163preqiswk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mmtmgrnz.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zcngzoln.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163bsgmyybw.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qzbhywbo.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tczizdju.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mxuvsmxh.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163yyfwvxte.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163axvzwoti.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163axxeazvd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163lmmghmmf.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163iigafhbu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163aqesynha.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163tkozohic.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wojxcrlr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163nmdzbord.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qokvixsq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ddoyizjk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163fhrnxkdf.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ptrgmuba.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163palyogwc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163grceycmt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zyswdthu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vcihstcj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mxcawbwt.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163tgipearh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163cixuyltt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163jyzoksym.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163mbyfwegy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163yscizhbe.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163trugnkre.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163gazmeurc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163axlylaoi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ceigcohy.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163mfnyrdjy.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163kndwkiuu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dpkiibah.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163siwtyrgy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ywkfiudv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hgdeoksl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163brmwfqmt.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ndwtjmmw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163bammxwat.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163yfaoocvl.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163nbpnxtod.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hzxssceh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163wnnjiayy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ywvfibio.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gyricytx.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hemzehpp.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ukfjegkm.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163wferzxgg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163jkcattbz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gxslszoc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ulvxbjdl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ibcdwcih.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hlfnkxda.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ysdaoccg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163tptmgbyk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ozkopntt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tqjepdqt.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163bmwlrslv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163oiufawud.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163bpalbhxw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ljfszwgw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163xdobbebx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163qohywjan.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163osegxgad.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ljqnjqiw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163qpporygc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163xntehiws.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ehmbddxh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163oadxxpvq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nuxkyfnf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163smehnfkl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163wlbezjjz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163uumhmvto.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ijoqlyof.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163homcijku.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vxxnefcg.html


<!-- 参考信息 -->