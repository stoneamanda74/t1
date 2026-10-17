外链999!wailian999！

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ouqvpoct.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ebhmoryk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163asxbthxa.html

TS:   // 同上
来源：http://www.sxryk.cn/163rbcfsisj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ilixmzmk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163sefkvazb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163otcctzvn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rbrdhscg.html

================================================================================
来源：http://www.xuanzx.com/163fmgzokux.html

G. 面向对象
来源：http://www.sxryk.cn/163ywtzlcio.html

================================================================================
来源：http://www.sxryk.cn/163aiuczloa.html

[G01] 定义类
来源：http://www.xuanzx.com/163zqexqzlv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163sgmacnzr.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lrnoohwl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163bcukqyvk.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163bcwegsrs.html

Java: class User {}
来源：http://www.xuanzx.com/163jgzfhxnj.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163lmawdnio.html

Ruby: class User; end
来源：http://www.sxryk.cn/163evzzvamw.html

C#:   class User {}
来源：http://www.xuanzx.com/163unbqmkix.html

[G02] 构造函数
来源：http://www.sxryk.cn/163mdfenptd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gprqankt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vquxxnhi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163uspxhmvx.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163bipbeyxr.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163hdziworo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163abrkclwl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jtghrstx.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qfkkkggo.html

[G03] 实例属性
来源：http://www.xuanzx.com/163nexhmlgi.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163daenjdii.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163sdyjozcz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163uowlocgk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163auhowtit.html

Java: private String name;
来源：http://www.xuanzx.com/163auolixej.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rikntklp.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163cujkmebl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163bvgnbhte.html

[G04] 定义方法
来源：http://www.sxryk.cn/163gcuvamkr.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163kwauckqa.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163psskcfoz.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rpgfbwdn.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163fmrhdosv.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163pqhhpjfy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163nguokdjp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163qoggnifp.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163fxkidcpd.html

[G05] 继承
来源：http://www.sxryk.cn/163swmldzfy.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163gqjfntvy.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163czpyazpk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vqlsqdhl.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bewdpzfa.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163vcfhbttw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163smqtvfpi.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163eabteiwn.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kdexghao.html

[G06] 重写方法
来源：http://www.sxryk.cn/163bdbbtkoo.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163rpxqbsyy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dhuouezd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ibhwxvbo.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163qwytmivu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163kmmwkbrw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163fcntgatm.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hoyuedoa.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163atppilca.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163gnxfvoqo.html

Py:   super().greet()
来源：http://www.sxryk.cn/163wbsgbpjm.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163yjwxizpy.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mtszpmgf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wvoieprr.html

Java: super.greet();
来源：http://www.xuanzx.com/163nczdadqv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163tmaszqbd.html

Ruby: super
来源：http://www.aibaodan.cn/163piswpqlh.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163efpjpjvh.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163krnnrzjm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163oionnqmd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163spkfmwvo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163rsemnntz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163obblhpst.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ssojhztm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163fgoxzrab.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163dyqzhcrg.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ceytjhmj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zarpgfzy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163vuuklidl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163auwfnkme.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163zdjenawm.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vjqorvfk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163cfnqdjdd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163odvabmcs.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163abnrruyi.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xjcxzash.html

[G10] 访问控制
来源：http://www.xuanzx.com/163urgudtdu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163nclzvgge.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163iuuqvwvk.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163amtpgfgz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wbnccsgv.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rjwiypat.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163orlywyou.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163cesiueix.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163nzrllvzm.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163gtnccvvk.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163srcjxbri.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163oeogflmc.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163edjayrfi.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163akluqhtf.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163qyreyind.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163fevbiinh.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163mbukmybv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163bomtrxdh.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163rnezrazk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dfrpgqbn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wabxdrer.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xwhlpron.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163vkhifiev.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ilxytfym.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163rqphyjju.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163qlwkplwq.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163igemeyyj.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163yobcqevb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163pfrbgeaw.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163fzwhpqdu.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163tgnqpdlg.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163lmozpino.html

Java: u instanceof User
来源：http://www.sxryk.cn/163roorijrq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163efmkrtjl.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163cxqfgcqh.html

C#:   u is User
来源：http://www.aibaodan.cn/163nguzpvfk.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163qcdimoyu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zrxboaig.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163rsakkckt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163goprtxtx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163uwpnbuha.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163axtanxlx.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163kvpywzxz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dgtgfwcz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163alpzmqwk.html

[G15] 枚举
来源：http://www.aibaodan.cn/163bdcgiriy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163apyspnvv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rdlaoaos.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zvznvrhs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wlywtrmj.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163kdjcchfi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163opomhmcz.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163fcvaezdz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qqxzzvuf.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163skrevnqo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163nfswevup.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163fxwsbqcm.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163thntiszl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ozsxbazg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163omrsnsaa.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163yzowjpxi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163elrvraja.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163sdzetflo.html

================================================================================
来源：http://www.aibaodan.cn/163xqesjoxq.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163acpifbna.html

================================================================================
来源：http://www.xuanzx.com/163kpxjgmtz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163txzdasar.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tvwcyeiu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163frgxpedd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nbastodw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163hoeikltt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163htbaafkj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ywtqqepv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163eombysho.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163msrufrzr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hltdplgz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rvvnzhno.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nfgzevqv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uuotmuri.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nakqtwwj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163atrgdmtr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163uphdwwpi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163bccafapc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pnxyruxe.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vyqpewfi.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163esbpjhwu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163yrbrwecl.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163phjcjzds.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dgwedhok.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163akuudnre.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163mleajymp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163keoefrws.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163vadizvgu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kxosopmf.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163yiapskvz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163dbtsatfo.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163srmtuagl.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163bsepjxtl.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163aivheicc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fsqmmgpb.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163yyfhgcdy.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hibqzxwj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163gjuusunw.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163idxabeyo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tblbtjsn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rikfwrsi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ifqhhwdn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bztgegep.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zpetarzz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wilsgmfe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fvgofvqe.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mawpwncj.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163cgjwfcfw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ybzbejwx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fvynsuxb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kipszuou.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163qtoehvwi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rvwssedn.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163yaqptppp.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163smartupv.html

[H07] 断言
来源：http://www.aibaodan.cn/163hvjbydac.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vzyoblcb.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163njinzjnt.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ispuytyc.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zzzfkudw.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ikmfooaf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163vsxvrjuk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163lwygetaj.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zdmrwway.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163tpwrfigf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163thzuisia.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dylzryhn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163vrzumuwg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163bgmcbmua.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163tpeybugg.html

Go:   err.Error()
来源：http://www.sxryk.cn/163ugsqxkkk.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pmldxcwk.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ydnnkpya.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163xznsqzja.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ddwetqcj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hpxhdarz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163uhqhjyuj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tekjfgfy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zhmdjqse.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163yfzeqhom.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rfdbrnbr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zoxqfksb.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qkxgrguo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163iwhecizi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163vlugzpwt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hllwkyca.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163woqukfqu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163taolfmhf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163allafzqj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rjtywvye.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rwgiphfh.html

================================================================================
来源：http://www.xuanzx.com/163tsdothmo.html

I. 正则表达式
来源：http://www.sxryk.cn/163bffednwx.html

================================================================================
来源：http://www.sxryk.cn/163pzctkbdk.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163zbpdkuvp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163evclgihr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163fvfzuunu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vojnwvgd.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163preyvgsa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163deqpexdx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163gfaezsve.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163aagrorpx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163turrjsqn.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163hizbduwi.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163rlbqnboy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ojrembsv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kcgwnttv.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zqsleazn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qdbtqkom.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fjespytj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163lfaxafno.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163yujmlrly.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163uvfrqdug.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163cknwfgjf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nuqggvhu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163apadoawp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163aqfjepex.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163inwgtfyb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163modijlhg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163rwojdvjh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163tqixysdc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163moxqszyk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163dwfnbwud.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163zxrfuzws.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hckiscqe.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163iklwenci.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vyxnlgjb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ukrghskf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163acomcyjl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163lnwvzkpx.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163kpkzefqa.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163cpxpsmzx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163wzafoxuy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jicxemyi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163aqltapmu.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163iecdewzz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163zkyuamkq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wbonnpuu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ggwbufbu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163svpuahks.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163libgqmfc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163zxkwuhdt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mwosayhz.html


<!-- 参考信息 -->