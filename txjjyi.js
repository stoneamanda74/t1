外链999!wailian999！

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163wenzqdku.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pobwcicu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163giogdvpq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163gpobnire.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qckdpqsb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fmrunjjn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dvvgzzps.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163zxiqorvf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163halcfhye.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163upifvoqa.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hsfzmogz.html

TS:   // 同上
来源：http://www.sxryk.cn/163clxxibva.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163apdxfpir.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lajntejq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163iynfmwaq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163csivqiia.html

================================================================================
来源：http://www.xuanzx.com/163hookhxys.html

G. 面向对象
来源：http://www.sxryk.cn/163mjpryqmd.html

================================================================================
来源：http://www.sxryk.cn/163wtgovgzh.html

[G01] 定义类
来源：http://www.sxryk.cn/163molpzyqy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163whedjtii.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uabsqfsc.html

JS:   class User {}
来源：http://www.sxryk.cn/163kklgwbnv.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163dgwakdhz.html

Java: class User {}
来源：http://www.aibaodan.cn/163aaeqrzwv.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ohurcdkj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163awothklv.html

C#:   class User {}
来源：http://www.sxryk.cn/163nnuqdspn.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ajafwkxp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xgkpaova.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163hmvwadax.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163sgtpjjhe.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163lrxvjeik.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163gjvgblyw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163huepxfyz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163cvcfzafd.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163mbhbwgcn.html

[G03] 实例属性
来源：http://www.sxryk.cn/163shmwbqjv.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163qeyronoc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163dsvjpabq.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163gxudjgvl.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163zzhxvmzc.html

Java: private String name;
来源：http://www.aibaodan.cn/163hxxqibwa.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163nyeyfnqz.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163rupoejvq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163vrvygqqa.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163padkammw.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163cnrglcrb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163sscbnevb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163mcbwaozb.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ddqwlvfk.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163cjnzpowz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163nyzxwhvu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ninhrzvk.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163xvubkzpp.html

[G05] 继承
来源：http://www.sxryk.cn/163sillgmrm.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163bpssyrjw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163znsewvea.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mlxwapxh.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163iqzsegpv.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163nnhoffuk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163eufrdbcd.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ineqglhh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163nklyhgta.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163maheajcj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163drspsxst.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163yppeuzff.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163uaypdqyj.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gwhontjd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163zzdickpv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163wbrvetsb.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163zqunljcx.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163mcbckzyj.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163decpbxxd.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163uqhxoiqs.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vrnorpjs.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lnlzcfyd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163cprxhfuu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163mfrjpsvb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163yrgdpwip.html

Ruby: super
来源：http://www.aibaodan.cn/163fkcaufha.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163dtojilqu.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xmfwkkau.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163peyxdtzn.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163tzvvxiqv.html

JS:   static f() {}
来源：http://www.xuanzx.com/163hjocehgn.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163tvdjckhk.html

Java: static void f() {}
来源：http://www.sxryk.cn/163tpfxlnkg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163pisrkddf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163yposkhyw.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163csrfzjrn.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163kitamrax.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163tejedmlx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qbvonpit.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163bmxutnhk.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163oqzsvaqx.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163neualajw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163cwatjsyh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dilehcvi.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163mkjlnnoh.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163iiqiluma.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jaezjdho.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xovdnnzc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kuyturkv.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163oaywxhmf.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163xadwabho.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hwpqcoiy.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163esymilwr.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163lpjxifni.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ocuobnxv.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qyorkukd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163msmxugmk.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163sdeuakfb.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163szmrufqo.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163pmrxesdl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163fcdawpqv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rttrdyei.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jsivlyvi.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163yldmkjtu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163qdsvtezq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163csnoolvf.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163muhikock.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163qoyewlep.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163kjrtohdq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gexartpp.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pwqduhlw.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163fejmaddr.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163hadrdmjx.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163vaffrfur.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163qagffmkl.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163gadwtixh.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163nsdodnqr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163cjidhyxj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163gsxfdoiw.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163dtjpkcfk.html

C#:   u is User
来源：http://www.xuanzx.com/163hcjwromc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mraxrcxw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163woymzxmp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163zngreuda.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163hpueefxb.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163kylicdvw.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163djgkmzkx.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163fezukqxw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163enlmloij.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ymswdfni.html

[G15] 枚举
来源：http://www.aibaodan.cn/163yicuwqwj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zzmukucs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163onxkaaox.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163hcqbonnf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163racakgox.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163cxbisety.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ztyrcmga.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ndlvkvet.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xotbtnpl.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vdkktstx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fjhmuapo.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163kypgascg.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163asuzbnln.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rwacpuyi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163caimjbkd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ozjukiyr.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ybpxwlxs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163czsxksfw.html

================================================================================
来源：http://www.sxryk.cn/163wrudbxfk.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163rkxrhwco.html

================================================================================
来源：http://www.xuanzx.com/163dwntivvd.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163axjbuxkx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xbumluwy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163dqdcirhv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163npmtjryg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bleiqyry.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163qdxoxplh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ayhlbxqn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gezeieej.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vopmywne.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163seyzwjpa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163nzdhiuxi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ekcctjey.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dslkgvqn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gkxlxijk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bxjzdntl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yobzwvqn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163smjgluot.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ajyxincu.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163fwnjmvno.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163thgmnvix.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163cqkvpgqs.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vdgfmkjj.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163uteqjnol.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mgeqmzln.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163zelahrdi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ywuwbczf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163guyxwtid.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163hdesgwpp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163asmagxsv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163aioziwxj.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ntvtjnnz.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163groqetei.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163goocyrrj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163rkcxjkai.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nifzqeic.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163shprtbpq.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nkvhnkqz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163wffrizok.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163rxbukiyy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163sscpecsw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rtakfkiq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rwdxyedh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gqmnyijm.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163wwlbcait.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ttryokdn.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163vlsnanmz.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qrqwtlxs.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163szdkzydf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zhsmzkoh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jqywehxj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lhaegsbd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163fymuierp.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163okwavgbh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163pkzhfwrv.html

[H07] 断言
来源：http://www.aibaodan.cn/163kouwnolw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jzexuhxi.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163uswnoyut.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xstfmfsu.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163synvrjom.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qagfizmu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qlshulrp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gnhesnss.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jvuquzaw.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163rinjfcwx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fotatwga.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163swdmlbcq.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163zxxtbgkc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163byojswbq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163nalhznhm.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wurnolrg.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rgbgxqsr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163jdtzqbfx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163awnnivzm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163behwedgp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163nfqewuoz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fvxdcrbj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ubumfnru.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163opnkgwqi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163olrsukfi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ihcmuliu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163awaihyhk.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ydmodxvo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zggsangb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163usaqbvto.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qrlxhiho.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ekyacjcc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163pwoxfbhc.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163dfpzehhy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jwjracro.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163onemvxru.html

================================================================================
来源：http://www.xuanzx.com/163asvgddnw.html

I. 正则表达式
来源：http://www.xuanzx.com/163cnbcquht.html

================================================================================
来源：http://www.xuanzx.com/163rijvfdwa.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163twhnxvcz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163zxfahlej.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163zbbtwlhl.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163fhnvkrwn.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bgntanir.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163aeluncnc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163iuyqfufv.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163oluwhiul.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163pfvtzkzu.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zkuikdhn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163lyjvlyxp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vhynqqhm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vzbwdyxu.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163kmqwgdac.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163wuujhjai.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163trvujojy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ahakpvse.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ambdobmh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xvvuugis.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163pykczotp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163mjkscnqt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163lzgfjhkb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jfuyzymp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dmwhmtev.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163erzggnfp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163qjcigktn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163astxwpaf.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163abeptguw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163trjuuvnw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hwymcfyq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163atcuoxic.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163olakgcrn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163erexrtsa.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163btxuehdy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ysohyqfm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163kfggrolv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163nbvirymx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163nivwvkac.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163fiskutzq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xzwvubwf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163larihiut.html


<!-- 参考信息 -->