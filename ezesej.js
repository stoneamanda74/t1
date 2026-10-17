外链999!wailian999！

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kbtmttcq.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163nomqpyrt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163bfhhvyee.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163hmyzunwz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hugyrlvs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163rqsfqwqo.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163dbodovol.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ououzrdl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163hviqvpoq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fidceqwp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163anilqwqe.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163wnxzltdq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163rhobblet.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rditmdhz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wcvlltse.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163moicqyle.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163xtzrnhhf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zwxtieml.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xfgjpjsl.html

TS:   // 同上
来源：http://www.xuanzx.com/163syfdydkb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163lqtgocir.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163izijtmaz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gyobzkzz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rwvxjzsn.html

================================================================================
来源：http://www.sxryk.cn/163nrfxzcyj.html

G. 面向对象
来源：http://www.xuanzx.com/163bgpqolvz.html

================================================================================
来源：http://www.sxryk.cn/163kdtdykoc.html

[G01] 定义类
来源：http://www.aibaodan.cn/163sqfyixqx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163yofvxled.html

PHP:  class User {}
来源：http://www.xuanzx.com/163tybezdlw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ncmlydjz.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163gyeczefv.html

Java: class User {}
来源：http://www.sxryk.cn/163ytivgqau.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wtlbkwcw.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wunxhgfh.html

C#:   class User {}
来源：http://www.xuanzx.com/163fzatypyp.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163yefijcvh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ehyflfet.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163oddzends.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163njftypoi.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qnpulkqq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163zaapqghw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163bxnpbvpt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163vhtimifw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163efcginim.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yaoqkbby.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ppwvnzkp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163oqjtxnky.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ssmvohuh.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163hnsdfmwz.html

Java: private String name;
来源：http://www.xuanzx.com/163qftyjlzy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163oqyehncd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163zevsuhzg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jufmulwg.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wjlzunzt.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163izrcdnrc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163vpjvwcwk.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163mmroatph.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rhthsejb.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ccqyibji.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163eseuhkix.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163aiqsarau.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163lwdnthzj.html

[G05] 继承
来源：http://www.sxryk.cn/163bxufuhgg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163gfahsmpv.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163vsgdnfaq.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cqbalsht.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nhuyvmhx.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ocbszqgr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163mpeazxkw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163syzgfgxg.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163uqaxutcv.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163gyyzxjkv.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xejjmajp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lqsarkwh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kubzlaet.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163kolgawyv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163fnewafnx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zyrvrwtt.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163bvecdmts.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zubhnwyl.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163yiniwxdd.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163abijyktp.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163diqstjll.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163tcmkuvob.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zkxrythd.html

Java: super.greet();
来源：http://www.sxryk.cn/163kacfyowm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163ermrpwpp.html

Ruby: super
来源：http://www.xuanzx.com/163bvmjotbu.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lbbmukbp.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163gshunrai.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163gjpdjnne.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163bnrsverp.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163eqqemebp.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fctvflun.html

Java: static void f() {}
来源：http://www.sxryk.cn/163wldwdlix.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163kcgrhwmh.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ihtvkevh.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163souglcmo.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163gkwfhhrn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ssbzdqwn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xwxrshgv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163bjvntvbo.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ddrdjhse.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tyjlnwmz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wdsmnmcv.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163djexhoxl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163uulpgcoj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pgtdiuam.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mexvpoud.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nmaznlua.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zqocoqvs.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gnbunemu.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163awuvvnpv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163fdjcukwk.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163njssphzy.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bmmdsbfc.html

[G11] getter / setter
来源：http://www.xuanzx.com/163brrgxuyw.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163jqotwlxp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ujrhsjts.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163awiqciks.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163drtyfchj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163inctpkja.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163hngcvoff.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163yfhgjyvv.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jjdzmezv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qvnqklww.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163hecikyid.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wfdvfqqa.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ofogwqwo.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163iuziltzg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163icjycwbw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163udqmbybe.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163kbdaewbv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163rlzzcxpd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vytfoccw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wdhvappb.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163paleleru.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ldrpbczi.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163viygquto.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xcgiqizm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163xrsninat.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rvvlkthc.html

C#:   u is User
来源：http://www.xuanzx.com/163erlbhgdu.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163eqqhpalz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zetjnkrp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fmnmhokv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163uttjsucs.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163akmkgtnx.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ksvmimmo.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163xfzbjcgk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163vkwtdsba.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163uwxsqsxb.html

[G15] 枚举
来源：http://www.aibaodan.cn/163nomsgktx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163cugpmzrr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163pqatsamx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jmswwarr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gyluwajy.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gnrygdyz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163rtoakvpi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163mcutrayj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bbisouru.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163mmkqdlfx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fkocalby.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163arotsenl.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163hixzlbdc.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ztrfzekm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wxdtwnmn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ouwunnlm.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vpgyzxkb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163xdrglgmv.html

================================================================================
来源：http://www.aibaodan.cn/163zedjvqzb.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163fyawmoxz.html

================================================================================
来源：http://www.sxryk.cn/163bxvmkpkp.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163fpxgjgpe.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163pwfldary.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hkhktxbe.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hpdlxuja.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163jrarkcyn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163afttcxsv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163dfsshqvg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ubbjcswa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163xkqdcfmy.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fyqutaur.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rxbsorko.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163excvaxfq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dlfbpwkm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iouwmwvu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gkqdrlxw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163lrkzbxjv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ruorykcl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pzlasvww.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163yfnkdplq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163utjzjnhp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fmqxsare.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cndvbnyd.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kzwvcbtt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163jjzmlbee.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163snsejlca.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163hitcjpyo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163yadrivze.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163agzekmqg.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dngvmzby.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163txmtwhyu.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rntmflbb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tsalofgp.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163qscwzzex.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zkylcdlz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163lczvbjit.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163gvdxwpxq.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163zurvkqws.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163pgxmulqp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xygjatmc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tppsnsav.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vbdhurun.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163yjufrjmk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163piknpjab.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cglygeir.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163nyomhqqu.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qnuyhtev.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163cdnhfyag.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ncfnagva.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ghwsysmp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163inyrrgvn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ascimsvw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163agupchbu.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163slstyebr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163zofdfnat.html

[H07] 断言
来源：http://www.xuanzx.com/163wguokshx.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vdfcglbs.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163azspydxr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zqhcroja.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qkelesgu.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xosroxks.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163zieiokib.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163tjkluyeq.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163leieatrc.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163yfiqhdlz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163cevsqxbq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163byhnrwpd.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163onyqhfch.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hrutqmbb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163xbdarziw.html

Go:   err.Error()
来源：http://www.sxryk.cn/163acvfcher.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ejftqyyf.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163extfvxyw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ctnnfrpl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163dhqnwyrq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163xpdkfkxe.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163jclpiycq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pqpseqlt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163kszflhsh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163whsoezet.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163acfvejbs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163fezkirxp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163baphnups.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163nwhfdwyh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163gilzfsop.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jrxtwazs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163agxfxkkb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163mxaofbgq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163umzeifay.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163emwdupqz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163tlecbhft.html

================================================================================
来源：http://www.xuanzx.com/163hwbejuup.html

I. 正则表达式
来源：http://www.xuanzx.com/163funnmesk.html

================================================================================
来源：http://www.xuanzx.com/163jcvapbbr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vcdvsyqv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xwosrmud.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163gjfpsjzo.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163snxdoyeq.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vccrqdpa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jfcgfmnj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163lyztfglt.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xsguhztv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163eymxmbqm.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163mzzaietu.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163yhqbuciv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163opfjyptz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163sebejign.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163rddbtrfj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163jbedodgk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163idjdgzcs.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163hrzxmmvq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163nechping.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163wgcrrkyf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ifoxjesl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163eogjnxot.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163gehzcnkp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163eumbxtny.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163yviuyskl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163gnirtdtg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163gveuqeyp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163uiugqnzr.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bbwjdrrd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163juylgync.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vfgjxjld.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163djuqkehz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163sakqbuia.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163anuqoihc.html


<!-- 参考信息 -->