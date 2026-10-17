外链999!wailian999！

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163icyqhohb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163uovnzfes.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163gfgelzky.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wjiiqdqs.html

================================================================================
来源：http://www.sxryk.cn/163puwjwtfk.html

G. 面向对象
来源：http://www.xuanzx.com/163cvotvaua.html

================================================================================
来源：http://www.sxryk.cn/163okwjmica.html

[G01] 定义类
来源：http://www.sxryk.cn/163yakiicid.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cakatwia.html

PHP:  class User {}
来源：http://www.xuanzx.com/163nprhjffp.html

JS:   class User {}
来源：http://www.aibaodan.cn/163pjreyiwr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ppfekxgx.html

Java: class User {}
来源：http://www.sxryk.cn/163qmzegvmd.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163tlhkmlqy.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163alnqfjlq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dqzzsfgq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163rghxasvs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163asffzpbj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163tsbinkns.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163hisvxpgv.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163nktqgcxf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163dpcwylyc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163uayxzenb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rsxpeazx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163cdudryhy.html

[G03] 实例属性
来源：http://www.xuanzx.com/163rvhofxtp.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163pzksurue.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163riiouswh.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163equzakfe.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ewmxdtfj.html

Java: private String name;
来源：http://www.sxryk.cn/163anopelnr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163resesofe.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163svfwcohy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163uggohubc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163zeuypefc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qelyhimp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kbxgulsp.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hzuphvjf.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wdbswtmz.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163cehmlvcy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ahndpmgm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kgdasyyn.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163vimgqnjx.html

[G05] 继承
来源：http://www.aibaodan.cn/163wqlybfnz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163qsartilg.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163mivtpjac.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163skqoanoc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tmwyebkx.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ovfpmwxb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gsfcgqkh.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163iwllubki.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vcytyggx.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163evsnfigw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163slotyvwf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pnfxfomk.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163axcnzafj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163yzwbbmlb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163vfxziwhb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gyosxtoo.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163pirhhgrc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163thabqyng.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163cpdhqwun.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163raoieixy.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163czlhnpdn.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163eaidwkxc.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ibsmwvze.html

Java: super.greet();
来源：http://www.aibaodan.cn/163zhtfgxbx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163vvunzvud.html

Ruby: super
来源：http://www.aibaodan.cn/163wwcekyjc.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163cdxqdygl.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163pyxprxbs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163nakrzlkp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163mdmcpgjc.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163edxgkhko.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163wjdnnxsw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163jsejxucv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163iisokafq.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163auvcpqib.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163yhaokfql.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163yhbocpue.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163xhgkigmm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163jtdmiywt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xcliouvn.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163nbvdgady.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163nabvozib.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163luzwwhap.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163youjvozq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vphmbtmc.html

[G10] 访问控制
来源：http://www.sxryk.cn/163tmmgtyzi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163pqosigzr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163duoabfjj.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xwjipope.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ukbdvvxh.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163gqduqmzd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gwmaegjn.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163tmxtclzz.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ovlwhlwc.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jfbjwrsf.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163laifmpld.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163yjawqzuo.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163flghrpsd.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ktupawbs.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163mukcpwqp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ysqajbrg.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163vjiebcvo.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163vxzscsra.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163jeuuygdm.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163axdwitud.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163uavifvfz.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163sbpazcqn.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163seswxxow.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163eokwmccq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qkxtvsvl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163lwtqrklr.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wyitoplp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tzshstpn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163twwsqtpm.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163irfyfomg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zvmivfnh.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163vamzfwlr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rveqaulb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hhetbgao.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163iwvnvuzl.html

C#:   u is User
来源：http://www.aibaodan.cn/163dxfnzkvw.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ygqverny.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163uldrqrkt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163asoaqkat.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163joudmslz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mlhbfhan.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163lgywvyun.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wheodlsf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qtzjuadh.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163cohluaqc.html

[G15] 枚举
来源：http://www.sxryk.cn/163tuznzfkx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163yxpikluw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163pjpstuax.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jobuimmm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163httqpnqn.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gpzftxil.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163mxyftbow.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163sgyovmat.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163saixvhkj.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tyzxnpwm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163spbpqkru.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163khstjmvr.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vzsixrtg.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qpgnvlnr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163bvvgnmcw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163zgndouqn.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wapyspih.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163inzruall.html

================================================================================
来源：http://www.aibaodan.cn/163dsadapvo.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163jvgqouab.html

================================================================================
来源：http://www.sxryk.cn/163evkjruvd.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gcdjslnu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163bfpeqblj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hrcxmbeq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163oyiwbhat.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163czdzdzkj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vuroveat.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163dbhdcwhv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163evfepqqw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163dqrdccfn.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163zkniodrq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163cfqpmqky.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mlryjkeb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vkxtjrjy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xaqjpkph.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ixdbvugn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163gzwogxtq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163xdgclacf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pdpewfbv.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vyzhtgtt.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163yoiwfomr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163eefxtwwx.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163biucxhwp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163clkxzzje.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163iqvzbjfc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163yaaxlqfw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163dnheufap.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163prirvqki.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ifusxgyy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163vqzatohm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wgrtfinp.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bfckxizz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lzxapphx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163iiujnxlt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163sjaiezkf.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163cnvikbyu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163sgmljhzp.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163zcgnzyje.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ndwvacmg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163rffrvvev.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163edvbzdpw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163npumxlxy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163krhwrvfa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163izskusft.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163vtpxclly.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163wrjnmimy.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163epgkwapw.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zebunkrs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163lnntdbvq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163csvzkxys.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jratxgwy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163wcmsdfic.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163atfkkddo.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163qzlunlrj.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vlwewjrc.html

[H07] 断言
来源：http://www.xuanzx.com/163cwvephku.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zszexbyk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ihnfwuon.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163plcpswoz.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nkvrptyj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163jkwbnogk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163wousyvcg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163yoiltcwf.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163kwscpbaf.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jyewzqoz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163lphlvqge.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163xkxmccvd.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163sprxpxvr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jkqtcerp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163pgniovri.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163qczvbzks.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ufqdqcxz.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163erviwtka.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163giobyefj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163bokyglzg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163fanhwfpa.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vjmzxazp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ycolkgja.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163laitoyku.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163jdqvvruz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163xzyedjxp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mzghstlf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163cfoohjsr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163wwwhdajv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163lsydwfwn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163auwqtehp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wctsuwdl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ooeznogd.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163rklxksbd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dxlthyds.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163bbfviztx.html

================================================================================
来源：http://www.sxryk.cn/163svbavjaa.html

I. 正则表达式
来源：http://www.sxryk.cn/163knvwrtgl.html

================================================================================
来源：http://www.aibaodan.cn/163ytmflfua.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ewlyszkg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163fdneuewe.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163pnkyxkzu.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163osgydlol.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cpdgkxhq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163dupfggqo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163icunfqfm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163zmnhnpwn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163yvdeqrcj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163rnkbmjjq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163tafgzrnm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163hosxhalj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ykvfzefr.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pmribkpo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gekmwwex.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163wrshimcn.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163lnyyejli.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163hipoxgdp.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163evijbwmh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163aesjureq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ncrfihuc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163axsjddjk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163aqkpqypo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163dpsjznse.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zlwrukpc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163jzfbigvo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ocnyvyld.html

[I04] 正则替换
来源：http://www.xuanzx.com/163xgseonms.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ncnusrda.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ogkxogba.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163brgqsakq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hxyfvoss.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163cbzxszhu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163tgojcuja.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163sxtojcyd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163mtsxxgiv.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qapzmvxe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163feavcaif.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163yrqowmwl.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fqigsdwo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163oqqtvrxi.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ntqtounm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163viwvkbks.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pmwonlfn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ksajktlv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163wqfsoghq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jsunxpro.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163sjwxmckp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bupsmddy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163afyfzxeq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163izfpvhuk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163szzoaswa.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ctcfwcgv.html


<!-- 参考信息 -->