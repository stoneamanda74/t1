外链999!wailian999！

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163atewuwhk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163humicnmj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163shexbwgy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163cxmgzixn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163wbemyjuw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163tuksaipr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163nwjoyvkc.html

TS:   // 同上
来源：http://www.aibaodan.cn/163haerkmbn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163dfmhjxkd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163cryqtloc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rhsbkzvr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wjudwdht.html

================================================================================
来源：http://www.sxryk.cn/163akcohyvb.html

G. 面向对象
来源：http://www.aibaodan.cn/163vaytsqmn.html

================================================================================
来源：http://www.xuanzx.com/163jkgsozpr.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tfqfengk.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xpexmllo.html

PHP:  class User {}
来源：http://www.xuanzx.com/163bkxepsgb.html

JS:   class User {}
来源：http://www.sxryk.cn/163zulenwuf.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163exzlsxyo.html

Java: class User {}
来源：http://www.sxryk.cn/163ajcqspoe.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163yopdjcfc.html

Ruby: class User; end
来源：http://www.xuanzx.com/163sewuemcs.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ufjtylmi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xergymna.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rqywyadt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163rljbjgbn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ihxepsdr.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163jlgbfglg.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163nrtvaveb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163aizqijsj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163amdvqqjd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163wxxfarwd.html

[G03] 实例属性
来源：http://www.sxryk.cn/163fbqdjyum.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163khjjlvfq.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wkqtuekn.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163gkczpveh.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163drpqdrby.html

Java: private String name;
来源：http://www.sxryk.cn/163teyrfeae.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163kcgbssss.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163dgwkwmko.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163xefpckwe.html

[G04] 定义方法
来源：http://www.xuanzx.com/163obhcgbgm.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qoksezem.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jwxoxszt.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163beaitvok.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hixhkybo.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163peomjubv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163twvjjquy.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163iepxamup.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163asxntcph.html

[G05] 继承
来源：http://www.sxryk.cn/163mljratxc.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163kxwbnkmd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163imkmxnky.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163aiawacfl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163iohjhdel.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wggepfns.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xxjjjkff.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163tnzjocks.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kiscwatv.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ckhpthwx.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163acylxaqd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qvvnmfep.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163bxiixtmo.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gahhsdvj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163swyzwgib.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gxdyftvu.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hvvowonw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ovkidwow.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163amwyefme.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ikchxpjx.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qtljiwqu.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gdxjjpsx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163hohdisvj.html

Java: super.greet();
来源：http://www.sxryk.cn/163vngqcwze.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163elhpvmau.html

Ruby: super
来源：http://www.aibaodan.cn/163dyunifun.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163cbihkbuz.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wefhgzyf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163qadsrwva.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163mkujnuok.html

JS:   static f() {}
来源：http://www.sxryk.cn/163opudotrx.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163jahzewrf.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xxvbqsaz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163eanhmiuv.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163mwrvolxj.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163zwgkgbnh.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163oeahfgai.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163qqjjtvnq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163oiupmdtx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163pzmatxjs.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ocutbkwn.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163teikjlcy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163fdfswzjm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tkbadast.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xtchjhjl.html

[G10] 访问控制
来源：http://www.xuanzx.com/163rjlxuweh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lpqocumg.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163vpngtzpi.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163qrqvaybu.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163deimhaet.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rzsrwxdf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gfzmuoiu.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163bvtstgkx.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mflzmrhw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vbqmkfyk.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163hqjloxew.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yzrseybk.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wlzevzsf.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ehghptcy.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163klmqkohh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163wgbgdxwo.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163tegtppvi.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dxxvjoqi.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ukzsyoih.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ujtfluag.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mdfnucln.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163uottyots.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163alkuexyp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163sdsivgui.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163wxselzdz.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163heosgaum.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163muvbyyzq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163bwdvaboc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jlslgppa.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163rokgkndw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qspigfuz.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163oubazbno.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xwbcvuev.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163zvnvtdge.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163szfloocb.html

C#:   u is User
来源：http://www.sxryk.cn/163ubfyqsvh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163wnwdutsv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ddumcazf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qvvewffh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163cgblhhwo.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163slndgigz.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163kdjmthxi.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zghausxe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163wbfzibok.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163qaxbgqei.html

[G15] 枚举
来源：http://www.xuanzx.com/163bocypcsj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qyaunzyk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ftcupdye.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163hxokmbzu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mxdnmwri.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163huywqlpm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163keqescdh.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vfkqdcye.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163flppxukh.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163kazmryqb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qmcoqpds.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xtflvnwb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163abyxrhgf.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bimsjsom.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wwqgrybd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163jcfkfihn.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ycuogthd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163polpfaia.html

================================================================================
来源：http://www.sxryk.cn/163gngukkpg.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163fbpdlwnc.html

================================================================================
来源：http://www.sxryk.cn/163ddsyiknv.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rmbnpeuj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163rwvxpsdr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163odpsdeix.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mcazachw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163kltykjms.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163iftcydia.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163pzwkkxpp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163yzgjikeg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vttnznfd.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ovetjmhv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163oidttclo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kpzovqvp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163exyvbpjt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163owlacynh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ktlxxefb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163oyngjeqb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163bhtffhgx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163aqetfgas.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163migoyhnh.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163svrcijgo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mqsxkfmv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rrwhukex.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lsihsfhv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gwjcruxl.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163nmjctboh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163hwjvhpog.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163prherfon.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vewayxnv.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xrlvoazu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kuttfeww.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163egxxscel.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tcgypyry.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ntnitabt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163gmnqwncs.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163sacffkup.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163lrebklkw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nlxfkqek.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163crhnwlou.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163epxngnij.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163eiojkmlh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xmanqlhx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163wwmmhygg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163yqcrhngs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163mvefwwvg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163essoxait.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rosrhwgo.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163dllducaj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xbyzheev.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163aoxfupfd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tsdidhxs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163yghcvagk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163kjtsvzrx.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163lgrzrfbc.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ufkqxszq.html

[H07] 断言
来源：http://www.sxryk.cn/163jjdgxdka.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ylzzujeh.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163uiyuiupv.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wfsecdmz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jjbmnimz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kjacshsb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163emvwtuzl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163zogplmms.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163eoqmltse.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lsbepnbi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qcafybzx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ybbueasp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163hlbnzkvp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163xjeokydo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ehtwrzsf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163fzjaboat.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163svdqhcwm.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163laqftcul.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ciegicem.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163vkhwjijv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163grinvibt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163fqwcpubz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163vrtqexvn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163tioukvhk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163xuwnsgxd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rvucmggv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163yptcxmdw.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vslepnfq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xelqkjrb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163lzldrlle.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dkxajpjs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vamxbpcf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jzcgabfj.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163dwxvjval.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163bkylkowp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163qfeavipw.html

================================================================================
来源：http://www.aibaodan.cn/163vpsonwlu.html

I. 正则表达式
来源：http://www.sxryk.cn/163vffqwgtu.html

================================================================================
来源：http://www.sxryk.cn/163ifhsijzo.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163oarlielo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163afcmedtm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zvvbbvkn.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nxxqgaie.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ejinvkwy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ziyudqod.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163anufvuyc.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163aaiilihh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163zihhreuu.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ewvktjee.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gufgbqaa.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163lcplhsaf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163mvvstros.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163tuexklcs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163hqzerelb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163zyfglfmp.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163nzrrlszf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163cafwoxim.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163akrikpma.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ygcocnjh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ulyqxrrc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163cktennyj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163uvzbsoaj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163vxqryowz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163refknfpp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163vrpqrofq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163zmtpaico.html

[I04] 正则替换
来源：http://www.xuanzx.com/163grjlxkxh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jqzkoyll.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163yjkwmctm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yhusaegf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163aexcxaer.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163rckvgggk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163abifrhcz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163binytzrg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hevogqgb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163yegrhtpq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163iwkmvygs.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mdtvbvez.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ewpckqnr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cwzhvlsd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163efaqjpiz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163porjspob.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dnaynnwm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ifwsebiq.html


<!-- 参考信息 -->