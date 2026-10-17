外链999!wailian999！

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163cgexelgr.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ysdjlenl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163mrseojqg.html

[G05] 继承
来源：http://www.aibaodan.cn/163vrkaxiqg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163fmpdardq.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fpzyaypg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163sbgntjmw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ahjctbxc.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rmsdyrim.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163lnppvbrq.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jfrsphlf.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163erfmngow.html

[G06] 重写方法
来源：http://www.xuanzx.com/163hllrueph.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xiwjwcgn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163yjuyjjtr.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163mmatqdpy.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163slojhalu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163owxlbmvu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163uszkjtkb.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163alqjoywy.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163glingicd.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163uxrucbuw.html

Py:   super().greet()
来源：http://www.sxryk.cn/163uxmlekxa.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mdyeetrc.html

JS:   super.greet();
来源：http://www.sxryk.cn/163pjobwnfg.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163jadvibht.html

Java: super.greet();
来源：http://www.sxryk.cn/163plagwxds.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163izgavuue.html

Ruby: super
来源：http://www.aibaodan.cn/163wchofhia.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163uneczwxl.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ipfwstzb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163amlmfjbt.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163rhobcykd.html

JS:   static f() {}
来源：http://www.xuanzx.com/163tvqafxfn.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163bzknidzf.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163wbskvmwr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163qegallvu.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163lfoqflnh.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163pujajohh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rbhrkrbt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rmcfmiuf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ovfvkncu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163wdfjzeno.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163dtgogkbd.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163bowwynod.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wncclxih.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xeumkguh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163hdiujhml.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wrxtmxjm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wevpucox.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163fxdoiscb.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ngrgmyjy.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163oijzhmus.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hoyobzoh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163yswxlogf.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xrhodsvz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ofootmuy.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163khoyhaky.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163mpxcnwun.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163gcdrqsin.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163afwulwyo.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163fvgcitqt.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163itektdej.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qjpqgnfn.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163dyicibuz.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jjbkgxss.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163qzcgosxk.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hssspspq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bnzicyev.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163vgczytkl.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163rrczffrk.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163rafywook.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163cuyjiqjb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ltaquvux.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163itrghsjj.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163pcaslxvy.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hresemnu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163bovpcxai.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163nlwpbdnf.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ldekgchz.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163rwxgeatq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163iubbdquh.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ufrubxwv.html

C#:   u is User
来源：http://www.xuanzx.com/163ysvassmb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163itrybtwe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163shnxgbiz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163blufkekt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163cddsawzg.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ekmmfboq.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163vnwgfnza.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163jjroxgdi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wwghsokm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ihorcozs.html

[G15] 枚举
来源：http://www.xuanzx.com/163vjpsyaoc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163hvnilkvh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163gaqzvbnn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163pytlppmv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mqgrtsiw.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163jcbtpzqg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163trrppisr.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163smbinydj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163umjuyfkn.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ckxyjbwl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163khgxooyy.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gjbrzvme.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gmkaaxme.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163whuznsxq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163yykkhrun.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163jstqsgqi.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163aldxvprw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163napyoeko.html

================================================================================
来源：http://www.sxryk.cn/163duzckzrx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ijezmfqv.html

================================================================================
来源：http://www.sxryk.cn/163xzppfozc.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163acghrhhy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163olxogsmv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ubwpoysc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pdaljwfg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ifxprble.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163yozoglgt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vczrtqgz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163xkimnals.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mongmgwk.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163lopcjluo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ssznttxb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pbckfxyp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zoevmvyd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uodolccg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bydylybr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163gcserlto.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163hqogzhym.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zfsjxrjm.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163xfalewac.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163krchtdfd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163adgtvybl.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bojliccs.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tnzxsmnj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gagkgcst.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ynwxukiy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163rpakazbi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163zecogamp.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163jyvehicy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163khakphgu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163oycxnlie.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wnebovyq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tqyxhupr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163aewtvvzh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ktfznkdc.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163xfmldcxl.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ylmefyst.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wmyzbjbj.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163aemhsomv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fwnqdwmm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163eisrlhuc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vlqgotmt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163volcnccv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mjpzzylr.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ogiqgald.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hzrxidim.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163fhkjwlxn.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xfianfph.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163suqnzfuk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gksblwsm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hgahmhek.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vbpxmins.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163xbypnpgu.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163umugbjzh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163tuptqola.html

[H07] 断言
来源：http://www.sxryk.cn/163rqnexetp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163auuejtkz.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qxmgvcvj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fijujvhx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163onuixxze.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wiilqthk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tdukizfq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163icwjirkn.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rpxdmbko.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nuwzpqwp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tmutwxvx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ckzvolsw.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zwygfown.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163gbdnguav.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zlfxhkri.html

Go:   err.Error()
来源：http://www.xuanzx.com/163pwkzgebs.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163efjvfhtc.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wyufbfvv.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163jevkphnd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163dhawgrqa.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ewwmfcrm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163mygwerzs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163cjmbqwsl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163esqjivnd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zfribnad.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163roozdfqb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163tnnkcxhw.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163zqlvkgat.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dfifalwr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163vjgsnmph.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163yusqtxql.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lmdvgeeh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163iqxublpf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163sxgslbmr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163tpfheogz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hcjzfdxn.html

================================================================================
来源：http://www.aibaodan.cn/163uqfszoic.html

I. 正则表达式
来源：http://www.sxryk.cn/163wddhoyxz.html

================================================================================
来源：http://www.aibaodan.cn/163afzcdpft.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163aqsrlkuv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163lsqglflo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xzzmammv.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163buhrndsy.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ezktaqno.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163luuqdhcd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163sbndyydj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163pjeyiodh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163vdeangdt.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zqyjsoiq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163lqrvgxeu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163wlwhxohv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gizhoqst.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163msxdquro.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ulscwngs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163wluhwrsx.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hdpdkjlb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163qloohfyb.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bphuziml.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tlzenbpw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nixrxmha.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163tecyuelr.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qwxhtjtb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163hbmtqdrp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163etkaasac.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163osxejapv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163htomwzgs.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163odphmmsb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163nnmxvhzm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rfwkkqmh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163snyewkfp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ftzltmyu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163dpnmmnjt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163huhizgqd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163geuaidua.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vthfbfmk.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163zekewytx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163iprswers.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xvixxmhi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rzcntvnt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gzxvfcxs.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163dlzwpped.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nacdirxe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ayjpfogh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vdziczsy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ibjoorvc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rgmpxabo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163trdejtpx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163opqzkcmb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mhcwadin.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163mhjbqhql.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gatfrmvi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163dymrcjfl.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cvrsvytv.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fgijfjqx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ikycqkuh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163swjjgesz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163uexasebb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163islfqrri.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163tsyginfr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163jcdlxvbo.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xgshxwfx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jcqfzcnv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163xznvihle.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163bbvdjmbh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163inluvwrx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xyniuyfk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ryhkehwb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163niklsgfp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163tgtiwsex.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xeqxmpgl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ejrbiyji.html

================================================================================
来源：http://www.aibaodan.cn/163fklyxqrp.html

J. 日期与时间
来源：http://www.aibaodan.cn/163tgjtyvlo.html

================================================================================
来源：http://www.xuanzx.com/163dtejzpcw.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163wirfcwit.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163byahnvaj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xghcjems.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163urydfzul.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xvcdrgsq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zyrscrtr.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163edaczsvb.html

Ruby: Time.now
来源：http://www.xuanzx.com/163difycqrp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163idvxbrkd.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wklpecah.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ijzvbumi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jemmxbzl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163lsxjpnba.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163wfiaawyj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163fjqohwqz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163qbhmnsvf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ovxzwrof.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dhtryeus.html


<!-- 参考信息 -->