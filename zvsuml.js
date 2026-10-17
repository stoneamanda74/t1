外链999!wailian999！

JS:   this.name = "x";
来源：http://www.sxryk.cn/163svysyiqt.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163xcfolcup.html

Java: private String name;
来源：http://www.xuanzx.com/163kskycfhl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wjxyhpxz.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mfhpguoy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cjksqwmn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163zeuhtqgc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163dzpbtanb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qmwjpelf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163gbjrceoj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163cxkzmqnr.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163drxwyzbg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163oabethfy.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163oewxbkvm.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163tpbskoxp.html

[G05] 继承
来源：http://www.aibaodan.cn/163pdtrdccv.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163dzpgrbis.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163bjmvedon.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vxuuykzb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lgwfdzfc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163krdojlnm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163glvlhzqe.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163gxdtmshp.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163rnyqqzxq.html

[G06] 重写方法
来源：http://www.xuanzx.com/163vcfgugni.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vixqqyyl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vzuualbu.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163uotzbjum.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vqtfxggl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ztrgpveb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163mhgjcyjo.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gqtafnrx.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163bpgbbcid.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163tiixwrzq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qdrqfmpk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wpnsduic.html

JS:   super.greet();
来源：http://www.xuanzx.com/163gjghreqn.html

TS:   super.greet();
来源：http://www.sxryk.cn/163zdautydi.html

Java: super.greet();
来源：http://www.aibaodan.cn/163zdbrqidb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163anhqivzu.html

Ruby: super
来源：http://www.sxryk.cn/163zihkfuyk.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lanspcdk.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xpxgxbpc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163jbvpiewp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qzcisija.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163apjnfimd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pvulehyx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hmurzqyw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163yhqgbakb.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163yqfnykxk.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163qhszxgkw.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ylrafzud.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163aqxizkfx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163crgnblgz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163crfrpxqd.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rxsnfqow.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163lzpmtpun.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vzzgadot.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163pvitemxz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163sfoxtmpj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163iqbrxlir.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vmluwttx.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ggzlksxm.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163vvlzgbdj.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163rtingopk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163bkmvixje.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163shcxcnvr.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zbdomffc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ndwfoupi.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kboadvlq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163fgzfbnsg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163pvmtswqm.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jdqpdljm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163dopcnrwe.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163yixptrcs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163xvqeeqta.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qrzthbci.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163bcmivpty.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163yfhohgrr.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lqzhllzr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kebjvfkd.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163frjfjktr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xfdpfaxk.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163dthnmspy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163zcgfxnqk.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163evsdrcls.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163pmnecsxv.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163hwsirptx.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163qzfbbaue.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163gkvpzzft.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163nskqotxb.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163zyfgyvce.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163dyubugce.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163wjffkalq.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ixxxrmgy.html

C#:   u is User
来源：http://www.xuanzx.com/163mwkuhbph.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163lmfwwnwh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163fxoatxfb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ptoxbrhj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163wrsgiali.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163nwvbpzwr.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163uykarzcn.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163fjxqdxet.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163veefifwq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163gsqjjybr.html

[G15] 枚举
来源：http://www.sxryk.cn/163frcwgipf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xzfzgejy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163auukfrvf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163rnzwlrbd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wiawrmwz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163xocbypwv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ysqjhdfp.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163cjcrkejk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ywxxuxef.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163awbiahcr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ytadzhaf.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163rnhgikfw.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zljkaejw.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163chicbmdi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163kzertnbi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163yuscvdqp.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163tsegarsy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163pvyvkljm.html

================================================================================
来源：http://www.aibaodan.cn/163hvzpuayy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163homquwhw.html

================================================================================
来源：http://www.sxryk.cn/163gafrmosh.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163fvxsovpu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tqvyyrii.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163vfycpppn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zgunmdcr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163medlgokk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163rgmzlzuy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xihwjsnh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mbldpyaj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163imcrzgse.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ucokkcpc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163eyqryhpm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yutoswkn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dgbzffpr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nvhfsynv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cmvmwsgh.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163isflfyts.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ogwmmadp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pwptxogt.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163hymxogfe.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163bgagpjwf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163aqksnxfz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dvoolded.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hbsyhzdu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163jsjiymxj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163sspmjeaw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xbgetcre.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ttxhjqbx.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163laejngaw.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163tuskatpx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mupdtglq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yuxtdstn.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163buronojl.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163sdwdgums.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163rrjagdsy.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163biaffhqe.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163htpemawx.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qnhruyck.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rxyclzit.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163rvhzqbsh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nkdzcqgw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xymaokee.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163jdkvrjbl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163hhdksipy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163qkspabjt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163emjnfxqj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ssujlsbd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jdnecpwk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163kyaxinxo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kozusods.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163codboqoo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mxkxxhui.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163nfxvquqh.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kbhnrmsp.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ieoozkdc.html

[H07] 断言
来源：http://www.xuanzx.com/163hluteiuu.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163invaygyj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163msvpxbxv.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bofvhkpe.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ivytebjx.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163jvzvezst.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163jxebmmdt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ogjufznb.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ofzjkvuu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163wjgymgqv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163fklkdecd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tquilmps.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163jxnorcni.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163yeitgrxu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163iqmccwon.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ttmtkxxq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hhhvajpx.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163kdipplzn.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163zrbvmeki.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163dhkfvoxz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kmldwyfs.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163kfilbyoq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163johmixmh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163cfaxtyas.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hglibqzx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wpsscrrs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163plrzdizg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163tljwvuhb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163eeivfkxs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163fbtotjya.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cgyhcske.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163juexfbtj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kawvwcoc.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hpgqlrzi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jgsmaiod.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163qwykfgqw.html

================================================================================
来源：http://www.xuanzx.com/163ggmthcut.html

I. 正则表达式
来源：http://www.sxryk.cn/163ljxxdsqy.html

================================================================================
来源：http://www.sxryk.cn/163snrwypbj.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163srqyajic.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rvdofwqr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163rrkngndp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hxuksvte.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163etontibc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xswgphbn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163efqxpozz.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163htbrndmv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ulwahphv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163wxdmnqty.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163eiowjewm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163uwfijzqe.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163oxkzkbst.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zknjzzea.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163hwkoesni.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hlmkcwxi.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163uwpbcazc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163kdcxvlha.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ajosnztd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163qegnrcus.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vewmpkot.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163iynhhabn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163iszxeppe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163oghzeztv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163yhfcrejp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163vgykfwjw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163cmivlhmh.html

[I04] 正则替换
来源：http://www.sxryk.cn/163qakaflmy.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ktjcfmct.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zfyvutwa.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oyilazwp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kbipuigj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qzawcgzl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163vobilcei.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163rgliwdvm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163dprntkuw.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163gyzfzrel.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163abmagcpf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fdhhikqw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gwwtcfis.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vtvghziv.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163dxvkhgzx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163bpjozcoq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wydgnfen.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163omewcsjb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163oykeohvt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vwkuytir.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ahbfxdqu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dhyrbxso.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xuxfdoih.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163pwhujitk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ycwzqgpw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163egrbiwpp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rujsoxmb.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vpbvfilv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163gwylyybc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163oggtmnrm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163feonnlpu.html

TS:   /error/gim
来源：http://www.xuanzx.com/163gmsefslk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qcwqmauw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163wnuavsmi.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163euzwixny.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163hahwefsi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163bgftdfca.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163exbnfcgn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fbnjlypi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163arsxckrt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pzduadvu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163gcghplwd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163kghlvvli.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163gydtmsrq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163pskyimpy.html

================================================================================
来源：http://www.sxryk.cn/163dzezypwc.html

J. 日期与时间
来源：http://www.xuanzx.com/163navtvaug.html

================================================================================
来源：http://www.aibaodan.cn/163lcmefiyb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xewthmys.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163dxsplyua.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163afleezte.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gtlyjbge.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dgymrcya.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ndhveusp.html


<!-- 参考信息 -->