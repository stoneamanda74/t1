外链999!wailian999！

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bswibaxb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wpqqfyho.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pdakujay.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163cxvntxhb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163dbpilikp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163glwlyens.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163oqfbthxj.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163gvkggqmz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163solhmzmn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163pffhdhqg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rljhyfox.html

TS:   // 同上
来源：http://www.sxryk.cn/163vdtparji.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163cdpyigku.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vjnjscwh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ubpdszix.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gisefxpj.html

================================================================================
来源：http://www.xuanzx.com/163qxngcmeb.html

G. 面向对象
来源：http://www.xuanzx.com/163viqfejdh.html

================================================================================
来源：http://www.aibaodan.cn/163cmryqwws.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tltkufeh.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bgzpwsku.html

PHP:  class User {}
来源：http://www.sxryk.cn/163etegykbp.html

JS:   class User {}
来源：http://www.sxryk.cn/163xbzwmnjj.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163mzateusa.html

Java: class User {}
来源：http://www.aibaodan.cn/163axjlizcw.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cxekmeqr.html

Ruby: class User; end
来源：http://www.sxryk.cn/163praiisnk.html

C#:   class User {}
来源：http://www.aibaodan.cn/163gryuenfd.html

[G02] 构造函数
来源：http://www.sxryk.cn/163cblwhehm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163aveekvsl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163frufvdup.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163rjeimpdn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163fxptdvuz.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jyrloiez.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163tmfbbuvj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163hypteudj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163bzcdsujk.html

[G03] 实例属性
来源：http://www.xuanzx.com/163foxwyikk.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163sjjelizu.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163fjhknwlq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163scjozpnk.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163udehxplv.html

Java: private String name;
来源：http://www.aibaodan.cn/163raqwmdul.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jeqpqugl.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163rjudpjlm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163hghewgsm.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gsxqsmat.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hamslzxt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kmtbzorm.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163auehawng.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163jggvqyuz.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163luzxlfke.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163nkhnhebb.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163tjqatfmj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163lzuonhpl.html

[G05] 继承
来源：http://www.xuanzx.com/163dqlisvug.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163prqcgdjs.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bpdvgagk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tfxleyte.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bfypbjxt.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163nelcekqv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hqbxsopr.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163hooxbvhd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kzdofiip.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163rvodiywb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163sidjrbyc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fgzzjnpx.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gxhdnldl.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hzwcnzdz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163tvphorhk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163osvaoqdk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163impzdwqb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163kbkmecfg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163tscdsqjt.html

Py:   super().greet()
来源：http://www.xuanzx.com/163nhkrcyez.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163asgxlors.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mluwnrcv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163caugqllk.html

Java: super.greet();
来源：http://www.xuanzx.com/163apkmunqy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163heknrscv.html

Ruby: super
来源：http://www.aibaodan.cn/163babvehfg.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163yxiqeclm.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163invdwxah.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163oqbnodcp.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163bctqsxao.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163gvuwbncj.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163epevdsov.html

Java: static void f() {}
来源：http://www.sxryk.cn/163mqbcbwxu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163hhxcnobm.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rhogxzah.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163zqfogazo.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163trupcpqb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163atvcahlp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163yfykiyys.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163kgudpruh.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tjbfgnjd.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163fysptwtg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163duyxakdj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xuvuqiht.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163vrkkvtaq.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163oofareiy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163iqhllvap.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163undhzsci.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163tjledixg.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163bdzxoixh.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163cunprupf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rgzsarmd.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gpxiihcj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163okqndytp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163omumnxqg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163qftqjjve.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lyxhehem.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163hifhuofh.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ugyyekwi.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163bunfshaj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163yhhzyxuo.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163wtuzyshn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tcdcyllu.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ijnxupvb.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163vapkfkoi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163cupjttcb.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163djkxlykp.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163nspahwqk.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163igkahplx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vqgxxcuu.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163tqcwvhga.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163fihgfeza.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163cubzkfod.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ezmddblo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jelsajkm.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rnabogci.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163whgmkywt.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hvhvmedw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163pvbwgqja.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bjxcggra.html

C#:   u is User
来源：http://www.sxryk.cn/163yhcicmdr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ozzycoba.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163farsoxfy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163bhkneqfi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163fgesomvn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pifhppct.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163lvqoghym.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163limisboc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qmbkayze.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ssnndldz.html

[G15] 枚举
来源：http://www.xuanzx.com/163ssidbdmt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hgsuyepc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163tovpxjzi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163oepfjbxn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dumzeucd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163fvyhyrog.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163hppbyoxr.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163idgsbtba.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163numfaesj.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163yopgsbss.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163yhilbwre.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163coesrmru.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bpzzpkvl.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163acwxzjhr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163owytusmk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163glsphrtv.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163pnhkmscx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163svtvfopy.html

================================================================================
来源：http://www.sxryk.cn/163pmlzmbzu.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163qpvwrsfl.html

================================================================================
来源：http://www.xuanzx.com/163kwizneeo.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163kpjmowev.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163susaxrjn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163zhrkqrnb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vexnpfwk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163cuwarwhr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163tcsbzeen.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163rexyxqlx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wzakleds.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163xfdcdvel.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163utkhhmzy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163axlfgyiu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vlflrcuz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163onberxrg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163geuafgsh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ornvgpod.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jiluidvv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163fxybvvcg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fsacwswe.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hxkmebwu.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163nxffktzb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ydxnizww.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163fygpyamc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xagshfve.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jomsbipe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163iuucbcxe.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ccaegfyh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163iacrpfxk.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163zjelsjxq.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163vcodgbtc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163vyuxyuqy.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nqfwaewu.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dztfizer.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bftmtwvo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163elptkvgj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ycyqrkra.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163tuwatekq.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163bnibnczw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163wxkxgsus.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163tdlzputm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qhpbbhns.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ufgumfsf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163mefqzqma.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163xqgmwzvr.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163uqbhjdwf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163hlijuuim.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163kkbczeqt.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163xkczenav.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163jsclhygi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ifaqzewj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kbxwonng.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163oajjpceo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163vkzvzqxt.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163lanxzvff.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163msnembib.html

[H07] 断言
来源：http://www.aibaodan.cn/163nttszrnf.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163avhkwdkt.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163iqmgezqb.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jjsxlwwt.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163czvjckxp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163mflzwvtj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xqngfzbm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163pupybani.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163zpdqxszk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163zvgdpnds.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163foekhsbg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163pkcrhlqs.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163nldjnxue.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ituotfen.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163afmtqvqb.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163yfdindus.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163pqujoemw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163yknyutbo.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163etmfbcnf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xkyjjswh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163fkdymjrk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163yqcrpaxe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ygockzoa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163mywifxpr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ytyifdtw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163exkscvhj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vrwetehy.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zifiswvz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jhigrmbi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163zzljmnma.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163baxddkxr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lnsqnlxf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163pdftltss.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163izzyegez.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163yysftoif.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163aserxyny.html

================================================================================
来源：http://www.xuanzx.com/163ediolfmx.html

I. 正则表达式
来源：http://www.sxryk.cn/163ebloxsbg.html

================================================================================
来源：http://www.xuanzx.com/163kmqocgmw.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163gdoabvpv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163kgoxpteo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163cdkagnxn.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kvlnklcl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qefdhkzo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ucyktsbk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163wdfacynt.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ehgunwsd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163yaifvsoq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ovxfutdw.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163aqabehee.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qudlgccb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nvkynrtl.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vzacydwg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163yvinitrz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ufelpbsl.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163iiadeekt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163abwrsuiv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163didxgnhh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163wcfmiclv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163pxdoxxml.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163uitkywxa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163teettrqk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ydrpezqb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ajjqlnet.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163puqwvnrk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163uuduukmm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hwfhtiua.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163gbuvvdnp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ffrsgvif.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jjkayokx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163kmluyyur.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ckordzxn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gdlcfpil.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163fljyfnkc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163eeekeikl.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163eokyifye.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163whweuyvp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163owcwmlop.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zonfrjao.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163aixazmez.html


<!-- 参考信息 -->