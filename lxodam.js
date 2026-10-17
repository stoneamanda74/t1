外链999!wailian999！

Py:   class User: pass
来源：http://www.aibaodan.cn/163iwkzkdpf.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xmkbwmhj.html

JS:   class User {}
来源：http://www.sxryk.cn/163fwexsabt.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fgksppif.html

Java: class User {}
来源：http://www.sxryk.cn/163qhyzywfu.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163uhgxbyza.html

Ruby: class User; end
来源：http://www.sxryk.cn/163piqrnchm.html

C#:   class User {}
来源：http://www.sxryk.cn/163toujldbn.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ejfcehyy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zjdvnrju.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163qgwxjgaq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ckmmbsyb.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163sbgqebqs.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163bpyzaxqu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163keeixgjw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163inujtibp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163legqiivc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163sqfxcjxj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tsqclntt.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ksavpmkp.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163smclzncd.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163jtwsnoxs.html

Java: private String name;
来源：http://www.aibaodan.cn/163wvgjuwkm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163umbaviee.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ugmbdimk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163grplzhsh.html

[G04] 定义方法
来源：http://www.xuanzx.com/163udnnrotp.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163dlslsuym.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163aystssfu.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163excxfkwa.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ngsjmptq.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xaqgebzs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hlwwzpuc.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163noprdtzj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163btjahdyn.html

[G05] 继承
来源：http://www.aibaodan.cn/163bvvgzrus.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163mklsrejq.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163iugprdze.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xragprpc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ztzjdwhs.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163lrfwovpy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163metdhbzj.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163iatfclxt.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163gnlkxyje.html

[G06] 重写方法
来源：http://www.xuanzx.com/163thmfvlhv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163gsniogwr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163notalwqc.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fowauneu.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qpleeuup.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163iynmgvmh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163dppjrgik.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163scxenmir.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163mhknkqsq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163akxwrdyn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hktpekyh.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163gklbswem.html

JS:   super.greet();
来源：http://www.sxryk.cn/163zwcjcxla.html

TS:   super.greet();
来源：http://www.xuanzx.com/163qljsknqc.html

Java: super.greet();
来源：http://www.xuanzx.com/163tqovtaqn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jzkmhljo.html

Ruby: super
来源：http://www.sxryk.cn/163glkosega.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163yfuiweqf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rqrxuogm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163bqbwunwd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dhztklba.html

JS:   static f() {}
来源：http://www.xuanzx.com/163cytwwukq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ezukanvx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163jawoftfx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163gpxfyeld.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163fssljuid.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163jmejiyil.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163xxdeqdwi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163hbktsbtp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163fahyupne.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bwocytrm.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zubslina.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163lcpbzkek.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ntmdytiz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163oabyajjm.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ithremyu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163wsrmdqwz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163rbezdajq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163drzulydo.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xljwcgny.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163zkorwpyh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163yiesnpyv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vgkimcib.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qbpqlaov.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163usrzqxfq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ngzzqwuk.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xfpjtkza.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163lrxvlzvm.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163prbgbais.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163pleoyuoo.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ftadjkav.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163pzqjhavq.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ukqwphql.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gtnuavcl.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ewbetmzp.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ltvetwtg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ivfwkjfk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163afjtmxst.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163jimwjutr.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ppmxcrsb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163lrlbfpxm.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163wpcvdpbq.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ubmbmjaj.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ioohyjad.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163qwzwjsrn.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qtudbrqr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zrfoqurd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163efuisozl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163cuklrsjy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163hgrujpvz.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163zrtsnhab.html

C#:   u is User
来源：http://www.xuanzx.com/163agpmbykp.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163inefkqgz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163etyrcepd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163lhhvcelr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163emgarfbq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hcwiktbn.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163zlrblrar.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163lgsmuyxz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163uyjqctgr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163msrparru.html

[G15] 枚举
来源：http://www.xuanzx.com/163znkzdvre.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163iliuecwp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163mxehtbpj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163vnheypwv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gozwiosu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163djgmxtjh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163dsbinytk.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163svvyfxkf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zyrdlsnk.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163zitninpi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cygxhtoo.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163aivhlgqx.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pgturwuw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163voznyxoa.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163mekhxkfm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163xpywxdje.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163pzhqnlai.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vvwqrmkt.html

================================================================================
来源：http://www.aibaodan.cn/163uuqobnul.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163foqaufgq.html

================================================================================
来源：http://www.aibaodan.cn/163hpotdmsx.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163zcywswhk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pjutrzdn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ovjaanmt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jqoprius.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163cnnqklon.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163dwgoyiwj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163eesssqwz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163gwvcpzik.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wexdgcmh.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ljgbyfdy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163rdplumyh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dxauxdzh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pzteylzp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rfvvqxzh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zdgkwemw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163vjaherxc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vkowshtm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bwwkgzjr.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163bgiqwyss.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163vudapvqr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vzhelmiz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ztwukgxw.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xgcgabal.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dlwvvykv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hecdzftu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163euwuevmn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ginmxyzu.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163disydxvk.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163timwjykc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rqsktxgn.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mdpkmaql.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xzuzgagr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ecdwcjlu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163aolkexsg.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163cgtwswis.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163wyxrugjp.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163xiynorhq.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163eclqkkan.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qldslqwx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kksuplmd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ligqkqmt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163xbejtdih.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163poonhheg.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cctcryyl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qsmwrlnl.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163nctwgxcs.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163nawnzxen.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163tzbxwhxu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163arpjbztg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163smecrlex.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163nlvtpodu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163eltyiqeq.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ekypozzp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163vgmeoihc.html

[H07] 断言
来源：http://www.aibaodan.cn/163xiwtecvn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ssaocigr.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vsinavhp.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ptezzaub.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zxqwjwum.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163jittmvdf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rsjyssch.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ksfkhgpo.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163eiufttva.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163llpfuhvt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ttczjizc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dvbruqfm.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hpxpfbcx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163axkxrjqp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163irvtubji.html

Go:   err.Error()
来源：http://www.sxryk.cn/163pabdqnfq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163sbrxyzzn.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163aesbmlbd.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163watasjjy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163hysduhdw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hdzxhvcl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163branrwbr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163oskkryeg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163jfomdxmz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163owysdwjb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163tastolub.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jrysnytg.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163bkdapfal.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pxxcyiin.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163spumwgtz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nmubfmvv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jbkbsisb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163igcrnhus.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163sdztbvqo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163abqazaio.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163yopbtzdg.html

================================================================================
来源：http://www.sxryk.cn/163zihvrxbk.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zhjluggd.html

================================================================================
来源：http://www.aibaodan.cn/163sjsggden.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ihkvnftk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163bgxrhjvk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163hulopwgg.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xjmvrknh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163sntjwnwh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163funyxyja.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163lflygayr.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jhneoapx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ikhwnqvn.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163pgwqjmif.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163rmjslxoi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163pmqfeucd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163dfafkxom.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163dwdekxrh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163pfqmisso.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163wvjxmdpl.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163qsnfjwdc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163mjhigrml.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lyxwaixm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163jdoafjkt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163fhwmfrhf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xnyhximp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163wzacgykg.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ceojoumy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163kyazajea.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163byqzouog.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jdsmenhs.html

[I04] 正则替换
来源：http://www.sxryk.cn/163shoorzyc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163cbqnulzj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163etkidohl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kzjcmwjz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zetacplu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163hoylyeel.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163xtoprjhk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163yxsxxqcj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163rwnfkwzx.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163hmsjsnjo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ojbxydvx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ricuqtpv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ymyrayzi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mqforgll.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163lygsrqig.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163uihbfikd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ymltsoxz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163zfvexoqi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163segmbaij.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cwdjckua.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ffbcyheb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163weixvuxx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hrrvyclr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163giarylwb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163nucntzdr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163lymvmtim.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dwlddfrq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163nmwytwuk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163zkouwezg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163vlbdwenf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163qzxaebcs.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ndxuahhz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163efsgbxlc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ztsrndkr.html


<!-- 参考信息 -->