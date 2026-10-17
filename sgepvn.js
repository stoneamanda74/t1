外链999!wailian999！

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ftjomgvz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kagjiunt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zjvopbdx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zksongvi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qvsrgqic.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tlresyjd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ynkqpbsv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163omaofnsx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163sefvdfwr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163mzmnbwod.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163fkmpopoq.html

TS:   // 同上
来源：http://www.aibaodan.cn/163axdurdur.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163fazsvkyh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ewwpukzz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ywoywqce.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163urqilhru.html

================================================================================
来源：http://www.sxryk.cn/163qwgnhykk.html

G. 面向对象
来源：http://www.xuanzx.com/163uocniwkn.html

================================================================================
来源：http://www.aibaodan.cn/163oevkscdf.html

[G01] 定义类
来源：http://www.sxryk.cn/163tejbaixp.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163fkyghpbl.html

PHP:  class User {}
来源：http://www.sxryk.cn/163dkzpgheb.html

JS:   class User {}
来源：http://www.sxryk.cn/163oggdgprp.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163nxplbobd.html

Java: class User {}
来源：http://www.xuanzx.com/163zhamenop.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qzygddvo.html

Ruby: class User; end
来源：http://www.xuanzx.com/163kgtwbsqy.html

C#:   class User {}
来源：http://www.xuanzx.com/163spupsxnd.html

[G02] 构造函数
来源：http://www.sxryk.cn/163qsgydwvw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vjbifasz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163lzgxgwye.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mhderyfr.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zqseyqxw.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163sfvvawaq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163xtirgobi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163zdbzjkck.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163nfcwkdnl.html

[G03] 实例属性
来源：http://www.sxryk.cn/163uteyexul.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163yqenzpky.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163rtvgsyzl.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163nvsqjycp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163qdaxltkz.html

Java: private String name;
来源：http://www.xuanzx.com/163xaawazwg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163agqfyfkt.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163urotvqok.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xwcyivwk.html

[G04] 定义方法
来源：http://www.sxryk.cn/163obnpvjgq.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zmsjhahh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163pghjfemd.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163clwvldch.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163quozwmjv.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163mhxuoctu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163dcflqqvx.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163roqcszre.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163pyhgyums.html

[G05] 继承
来源：http://www.aibaodan.cn/163oeixneli.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163iyektdfg.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163oawyvmdc.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mbpyaofz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fkgcpydv.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163lmmvuxyh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163zhcecgbn.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xejexinl.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163sigqmglz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163dtwkvvrk.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163yjlimcuc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mvfdicjd.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163tcgqzktp.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jskyzcir.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163srdhaque.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163bccdcrzx.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163faulazfn.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163xbjmajbe.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163efjecjin.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ezoclndl.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163yycjgflv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163jxxlfymb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163quciheau.html

Java: super.greet();
来源：http://www.aibaodan.cn/163aqrfdnmc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163atevyiwv.html

Ruby: super
来源：http://www.sxryk.cn/163hjxyqljg.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163fplpqhqw.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163xofqfsli.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163hhundjmw.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bhqyghov.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wsdelvdj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163zfovppjg.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ewlbtkdb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163fgygqztr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163puuixpus.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163poiyaetx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163buhllobg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163iewetqao.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xxrlgvnw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ffqiwsft.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ubpkivwy.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163utxdmrfq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kifkzqam.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jfuoptur.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163jphgquah.html

[G10] 访问控制
来源：http://www.xuanzx.com/163orozceaq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163nrlobiow.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163cqasfjwu.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ozhmrbzu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163eyjrvtfr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163zadasbrz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163iimvvxfc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vjgartqt.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ktcqupgu.html

[G11] getter / setter
来源：http://www.xuanzx.com/163azsyhtaq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163czcscybq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ioflggxz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163vfdowsni.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163gsihlzsn.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163doplxmve.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163hhvxbjmk.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163udyharcu.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163icvdkmkv.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ozibpvsu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ncqndhlx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ydvvgboa.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163reqxwnyd.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163wshcgout.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dxomckyu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ffsrqaov.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163doyudkgu.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bkgiuvzn.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163kodtmqkm.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fyyyefkb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163mveoytrj.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163aqkqupmo.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163xfzxefue.html

Java: u instanceof User
来源：http://www.xuanzx.com/163pefskeur.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ogfqbgmf.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jtrqdwyk.html

C#:   u is User
来源：http://www.xuanzx.com/163kirsuhad.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163pmsjcvuy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ebdpifvc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163dlzumrgj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mtipccut.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163yavbdvrm.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163icfppdfx.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163bbqwmgbd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163nzwqbznf.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jujyjwjr.html

[G15] 枚举
来源：http://www.sxryk.cn/163pwvzryto.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163hfehrjqa.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163zgfrwqoo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qvwxelsk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163lgtcpwbx.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163obcorjpi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163grcutfgb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163nsefartf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163slgvflcc.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wxosqhwp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163yeryusdf.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163mkiviyzi.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qfztbxqd.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hzozlhif.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163zsktqjff.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ytdjbxnu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ytnvdlpx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163qnkqzhrp.html

================================================================================
来源：http://www.sxryk.cn/163ibbkidmz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163kpndobgo.html

================================================================================
来源：http://www.sxryk.cn/163sunnzgmh.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cjsmapyw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163jzawqvas.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163xwndvpqj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163pdjsoiex.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163iudpooed.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163gcmeeivy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163yrxaudaq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163wwvollwk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163oudfbnrr.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163nmnlggry.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163jcejmoid.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163husyehrp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sugktwsj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lywlzfge.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163aoapfdra.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163aqfnjzcr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ddtvsoon.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qanblttu.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163faevhrwp.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qhnxrlus.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163pfdltyuq.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wqzounvz.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jxzkugbu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163lmritomw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163igfhkmge.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163fystdfuj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163lcqbcuti.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163bsxnkitt.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ajivrygb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kjxxfxgq.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xmyngopj.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163yenefhsu.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163nxrcxtav.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wupcmasb.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163qhdttbzi.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163fcwzixje.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163rcixsilo.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163zrdwlbme.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163itbqfrhh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pztlbamk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zhxufdre.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163fzorzcqp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ozkykvft.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163gdqpalwt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163maajhczu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ymarinoz.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163oypiymkm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163wljsipgo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bmchvjon.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yudzuoiu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xveekyww.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163invnmbju.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163bxphejdo.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163afstmeqr.html

[H07] 断言
来源：http://www.aibaodan.cn/163skauflaq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vxsxgxoo.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163drihgjxs.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jbwtyjmg.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ephghwko.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163giiaghzb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163gsnrlanm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163lclpefhk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163kdyhfbhw.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163fqzwfzol.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gkamopoq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jsdjhkol.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ecuoqtjx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163vllbzdpx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xjyslfoo.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vxhwduvs.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163uewjkptw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163awuuewnf.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ymfuiqpz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163hckcigqf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163pllwjuee.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163wkpxdkxf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163tfwiklim.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163nwandtrh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ftyzfxii.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163zaixwhvy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163moqvazzq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163rstzxtyj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163rolcrcim.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163jeslknbw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xqwrxrix.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163drcgozlp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163lfgkjaql.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jdhcylia.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163udzinkzs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xshbesxm.html

================================================================================
来源：http://www.xuanzx.com/163aagxrzrt.html

I. 正则表达式
来源：http://www.xuanzx.com/163xstpfaul.html

================================================================================
来源：http://www.aibaodan.cn/163kdoktvrv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163bufpnbed.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163tylpvvmj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pzzhjkea.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xisibbxh.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163uuvhmzav.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hhmcnkfr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vutfmnge.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163edhngltz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163dngufpos.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163sjgzyibp.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vgfnacnf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163dspuxeph.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163udyqooqg.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163leffxruq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163oxxhfiwu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163imaiqnga.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ibispghj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xclqeukg.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163yenqzwwb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ibqinvni.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163lcnhzvla.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163vuzskkui.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gkvatrex.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163vkkjlxpq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ovqukyhv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163fphaivof.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163hhzohpsa.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163cucpohkv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163wkupbaov.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ercfbwme.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ofljuzcw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ftqbvzlm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163dwkwqngq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163hdfjsxuv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163uxyyopio.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163pdusiemp.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163aycwsclo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163yxvenhhc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gqcdtmej.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hqhnxqjq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cohcoddw.html


<!-- 参考信息 -->