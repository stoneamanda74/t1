外链999!wailian999！

Ruby: @name = "x"
来源：http://www.xuanzx.com/163gpbcluvz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163scghuwce.html

[G04] 定义方法
来源：http://www.xuanzx.com/163iclbbsjk.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163vbnqndep.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ygnsuygk.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163vpbsptmu.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163aahyychm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163nfmnhxht.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163xvivxiag.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zwsemlet.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tpmiealu.html

[G05] 继承
来源：http://www.aibaodan.cn/163aifrbujx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163tstxvrsk.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ewlepwsv.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163inqlhqbb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zfwejfsj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ocndmrug.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qsyoqzwj.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jtgmjqjn.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163awngwcvh.html

[G06] 重写方法
来源：http://www.xuanzx.com/163bofsgesb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163axjqjwjt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163igbjodye.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163oufgvidv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xjwkbdna.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ztlvyies.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163sbrbniou.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kzfyzhpl.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163iegrjjfj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163avkouxpn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163mfzqzick.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163nqsduumc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ulwiiixt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163yctifrce.html

Java: super.greet();
来源：http://www.aibaodan.cn/163etfhwlih.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163bjrltheu.html

Ruby: super
来源：http://www.xuanzx.com/163yiloxptp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jxtmwkhs.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xrwzizqw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ynibgxol.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163hpxhzjlj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163hpnilknq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163aggzaint.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mhemoskg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163zlyqvbpm.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163bdeihzlf.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163icgfkzjt.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ddvnatib.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163fyvqukwy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xwtqnwpb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xhthqeha.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163kerwysbf.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163dgtbohkv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163klfnmamg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163iserqfwt.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163yzpqcpax.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mswfxoot.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163tvrbcckg.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163digraavi.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163hoeqaium.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nphjmwzs.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pteplynm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wimhznff.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ojgcaiwx.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163pocgygio.html

[G11] getter / setter
来源：http://www.sxryk.cn/163oivtzuyo.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163aufglmbk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dapyijhe.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163gjumrnma.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163txehrmaq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163eafxnssu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163oedcabhz.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163bhlipufk.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163irmyzppd.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163sbrkcrmc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ajhmmelf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163cjkegcmn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163krcbpepv.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163whqinjbg.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163csnplins.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ibyjqzut.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163fernxxez.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163jsfwiedx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tesssrir.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163fgfqkjoy.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163fcdkjisp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163fxzotwww.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ygaaymby.html

Java: u instanceof User
来源：http://www.xuanzx.com/163lwjkhspw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163gdvfkekt.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163prqcwazz.html

C#:   u is User
来源：http://www.xuanzx.com/163fesicxun.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zisvtvlx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163iececnic.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163mfepsgax.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163diimrdeq.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163mtxodzlj.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163fqbcsulc.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163nywecfka.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163egbeiaxv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163zsgczbvl.html

[G15] 枚举
来源：http://www.sxryk.cn/163rwkjzngy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163fvfazknw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163xspeokct.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qcsijsgh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zgvctvao.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163yczddevh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163dkcjdoyh.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163rjtmrlfe.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163deifjmfd.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163wjonxmib.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ihwwkgnn.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163atkgjkfp.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wqeeufvb.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xfydtkoj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163uezykiyu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163fkzoyusj.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163wiazpkhj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163xaxjtrqz.html

================================================================================
来源：http://www.aibaodan.cn/163szbzfjma.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163msymaeax.html

================================================================================
来源：http://www.sxryk.cn/163ngtxyxmd.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ybbbkgqi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163scpixmqw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163thzjckvh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wpqjdyca.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bhjhgfik.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163uulswxua.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gkuqstvg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lfjjqcgf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qaxfqwqt.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163jkeuxwyl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163wzuybdyq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ojcxiglr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zmilubdg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xqtcvagm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vwiawjup.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163thdzrxxt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ljddscmy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163lopsplnc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163fyxakloj.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ccyqulkn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ulllqhol.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kzfuydlt.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fdemtbqa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163njqjxkdi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qeqmlnoh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ibnorlpj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163dslwemvt.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163wlwyxokd.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163vlnligaa.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ytetwtlm.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ntperxel.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163orbvavck.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163dfcwyeoq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xrukkspt.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ddilpvpo.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163gadqtwey.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jgddzvua.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ahbcfpod.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163rbqyahfg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tmmgqote.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qvpzyjas.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zcenikob.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ewvuahgd.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wyvvanbi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163corepbzx.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163aahazvgx.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163gfxjdugw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163nltvjjzn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xrlgbmgg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163aqqxhixs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mebxgtrj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163kmzwkjgx.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ruvdjxff.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163blruzhtt.html

[H07] 断言
来源：http://www.sxryk.cn/163jkvomtkt.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163tcapzpma.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163rjhyznuv.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rkqujuuu.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163afkbgasr.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163lthgznxj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rohmdcfo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163qqfhrzda.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163unrffrhw.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xykcfwcg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163spyxhmzq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163oyozwtgg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163kwtjvqvw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163xmipfrtk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163pstdbmqv.html

Go:   err.Error()
来源：http://www.sxryk.cn/163anbtnbtc.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pkqobwvs.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163lnrpgyeh.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163kcmpdbct.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jhskomcb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163fbiknssi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bxipuhno.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163hronzvls.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163yxtijnhr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163pjbrhnmg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163hhijowlz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163rntsirhx.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163tfxvmmxh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163quqtgsla.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ffwcomtz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vfcbaols.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gqowryis.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xhyfowrs.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163bgekgcyj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163potrmnko.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163eygiuokw.html

================================================================================
来源：http://www.xuanzx.com/163anjcxmkr.html

I. 正则表达式
来源：http://www.aibaodan.cn/163oiaethyc.html

================================================================================
来源：http://www.xuanzx.com/163ifnodscu.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jwrnfglw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163czpwafws.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163hibtavtv.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tnvsqqtm.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ofonpsba.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163aqsuseft.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163fvymeoeu.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163encswxbo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qrcmfhgz.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ultrzkwl.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163cwuyljnc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163zhrtmrei.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cxztdjbf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163nmixofup.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ibhfvtbu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163rxlelhmh.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163jlhihlna.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163kitmaqro.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dixqquhs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163quqzcbyz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163bybioezx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ntkqlatw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ndehrviw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163rnyitaym.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163dotsyqsf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ftcphtxz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163xididefi.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rwxgnnyc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163fggbrmop.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163khatahnr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163azeagsrl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bxangbbt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zpquoqqw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163lezcmvbq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163yiwsnybv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163mraqexck.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163hereufek.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163slqdioni.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163kzsvcbuj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uokoihkn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mnqwppyj.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163bbdpznzv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xklajwux.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163argxfdny.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163cizitytn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163oivltyyq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ayqtpkhm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qdqwnjuc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163otsrgggw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hyxybgil.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ahfebrtg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163phfiypib.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163zpcmmkqe.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163phoncfzg.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163thcysexu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163kfemgkxs.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163zdmqxnmi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163pqldodrc.html

TS:   /error/gim
来源：http://www.sxryk.cn/163hmznetsn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bizkptxl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163dprnorfu.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ugwedtnm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ajdamzqs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163gowlfrck.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163elkpuwdi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163qzuunejk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163cxjcaakj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vtbpupto.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163enbdenht.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wiqpyntl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ovtpwvih.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vxchshkk.html

================================================================================
来源：http://www.xuanzx.com/163njulvpjj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163aymmgmbt.html

================================================================================
来源：http://www.xuanzx.com/163yhuralqb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163elypgfgg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163zybdhzox.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ziucnmmb.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wchkmkib.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163eyugdtnc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vnuksntc.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zrawacng.html

Ruby: Time.now
来源：http://www.xuanzx.com/163crpjvwwg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163gxvqqsgt.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ytzoanbj.html


<!-- 参考信息 -->