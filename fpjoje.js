外链999!wailian999！

JS:   super.greet();
来源：http://www.xuanzx.com/163bjtzqbhy.html

TS:   super.greet();
来源：http://www.sxryk.cn/163thkfrpdd.html

Java: super.greet();
来源：http://www.xuanzx.com/163ngwoiowm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nhvcaglj.html

Ruby: super
来源：http://www.sxryk.cn/163okxzvrpn.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ntusjltg.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xdhmrlwk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163yxnhmasx.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163rjeiqprd.html

JS:   static f() {}
来源：http://www.sxryk.cn/163pnbgmjoi.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163hqjpyjbq.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ahautaew.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ovogcack.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fpbrrksd.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163aavvzwqf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163bmohwvlr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163labgrtbm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163tijwcwiz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ozcgmzqu.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163irjdmszd.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163snlbpqzj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163qjfouayb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ngmwergf.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163yrnncacf.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163onlfexnt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163pvtbetsk.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163wxmuymwl.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dwkhiunr.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163izebrzrf.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163laiielwn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163veslyslt.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163nrixxlgw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163kdxjpnfd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ocfwfbsy.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163prmzycem.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163siddxrot.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163eqjrvtvx.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163qzguhsuj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zsnviqmn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163kodfykmr.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xpslyuuw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163hcflgmle.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163sdaqlsbj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163dmiaudql.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163jeypgovv.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ngeqadcf.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163rjfkarpw.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163svisqnrl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163uqymebxx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ngkrdped.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163qbmdcyje.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163zstppcdm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ajrzxxpc.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163oxcwusjm.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163tupsdisg.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ymifcdqa.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163knofvqpy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ckqujzqy.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rhzobpqw.html

C#:   u is User
来源：http://www.xuanzx.com/163wxqhwyys.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vmmaprzf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pfdadkbn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163hpvelhiz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163nbkcmmbo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lqkjedrf.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163jhbeqktu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163pjvuudyp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xsfruevg.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163gdgqqwiw.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wikovqlh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hzhjyjxq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163lzydilya.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163xdsnrazc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163swkidfco.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163dskzmoog.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163jqohjgik.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163invarxyv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ayszaoau.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163kovqtzbu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bsmdlbjp.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163fhxpmpic.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163iyvvxyjz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mykflyjt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163uvfawpws.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163zrvkniur.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xqwxtvbp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163flueyphz.html

================================================================================
来源：http://www.aibaodan.cn/163zngvmjxl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163iknensfd.html

================================================================================
来源：http://www.sxryk.cn/163yxsrqbuc.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gljeivgg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163guijkbjr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ixeodvvn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ypunddgp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gpcuslaw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vtartliz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163bjqlachm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tkuyxrph.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163hkuedixi.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163vjnyodzj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163nknxzsty.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ihrodhvo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163giofzksd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aknwocqe.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163drfvnhfp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163fyixnkod.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163mmmrwqxf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163jruxphgu.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ogcckoys.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ahncykcz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163cydwtmlq.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wxdufftc.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163teqzenhm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163afdfmpwu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163nigiuuwk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rdijhqip.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163phiemcii.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gbtgknxq.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163draqmobe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163tfmasotd.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wijkploa.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pxvwepkg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tssocakw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163uiltnlgi.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ppjwtjqi.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163cdqahrcj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163tyfuxjfq.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163arcgpuxn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163vtcigwkm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163alsljsvg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hcmjtoqc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163tufihdke.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dkvkgqjk.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163kvmdipma.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163kccjvzyp.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mfsluqde.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163sodqlrfv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ggvopwzn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163aadulxtd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fuxkzvtn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163fqoisvxk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163euecdonn.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163gxsdzufb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163kzzybvoj.html

[H07] 断言
来源：http://www.aibaodan.cn/163khehswhl.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163pnyvrfkf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163yfagbikd.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qqitglof.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ifkbaxsa.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163anpskdiy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163mmkpxeax.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wvcosxcu.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163joelrzle.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163lckslags.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jpypnted.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163fqjfctvk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163jcbonaxp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163uylndugt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163alyfucxu.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ttlmudbe.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163fsfpfgdq.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163jamibtkn.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163jdptzoso.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163bmdljyds.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163shfhmdrj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163rkybkcfx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163agdlmsuz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163nrilpaxc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ditbodcm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wneafvij.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163nlvrxdkf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nkrtgbmo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pyekzxso.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163onrlswek.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163plyvnbbh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ciowaacw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163wuokwjus.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163sbhgurje.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163muofddyr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mfslaexl.html

================================================================================
来源：http://www.sxryk.cn/163ruvgnlhz.html

I. 正则表达式
来源：http://www.xuanzx.com/163jtvhdhlb.html

================================================================================
来源：http://www.xuanzx.com/163mnpquciy.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ksfsomaa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tdzvpowr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163glrrjgsn.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163afowyalo.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lfhduprs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163dglfwnsw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163uihfblqa.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ixfaknir.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163bcpimgef.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163bifeutlq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163dpnksnfc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163lecbcgmd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163znoydtlt.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qgpvllnl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dsmbwnfd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163nbjitlue.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163rliiceme.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163relnixsy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163kixaweko.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163oqsumvbt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163zhmauepu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163oaputupu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163imlzujmo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163bknucaal.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qjrprmef.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xyepkyvj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163juiuljie.html

[I04] 正则替换
来源：http://www.xuanzx.com/163fprgzxvw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163veuzkymx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qrlpqbai.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hnikntpm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nnerniqy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163dbyrhozr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163gmrhraiu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163udverjdy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ehcwghka.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xqvkcxoc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rqwsibnw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163amlnzqhn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wmulqsuv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vwvbztgf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163tjdwgmoe.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ouuhcemh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pezodvap.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ndjglykj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163tviqdpvw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fixeqgrf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163fezhkfim.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163myjuwbwc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163diaqhkre.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163sejddtsd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163jobjknoo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163htejcppq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zaaqdzuz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163enncqmmy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163jfhxdeol.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163hoadnerl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ausdbebv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pflpmicx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hwqplohk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nvakuiut.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163lzcatyvk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zcjmldhc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ixdapssi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163opczwurn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163yeeafmxk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dqrjmcbv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163akpztntk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163kwubinnp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vaajkehi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163lnshsjag.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163eaklbhhw.html

================================================================================
来源：http://www.xuanzx.com/163uetqhagt.html

J. 日期与时间
来源：http://www.sxryk.cn/163ztfsfvvy.html

================================================================================
来源：http://www.aibaodan.cn/163xdyhcvah.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163vsssbtia.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163uksagrpi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163idaewpoo.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163waeiijed.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163srcpeqxl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163uuggnwyn.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ysbkjwpj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ixklyejx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163utpiroyq.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163qoozkirl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nddxgjmr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fkfvddaa.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163mjkojqnk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163xzyonjam.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163jgnatfht.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163poarxuyb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163emoxbmhe.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dpbzbaul.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163rwhdpkge.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163oqseajmh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163vgkzynbn.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163swwhgktq.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zjaepbzi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163hlrysrhm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163gzmajsso.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163dirycwoa.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163tqeatcey.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xhstgges.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163yycohiar.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163xokirbda.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163piuntepe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vnwifcml.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163yqswbrri.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163izmhjsbi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163cvurnpfm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ggzdlrds.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163fdjnnaph.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nkfpkiai.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163koezfqzp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dnhzmkdl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rccndzrc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qppumaoq.html


<!-- 参考信息 -->