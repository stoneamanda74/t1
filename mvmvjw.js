外链999!wailian999！

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163robxmqxn.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163aojwtmpv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163teluguem.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163vcpggaxd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cdlvvovs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163nwimuubo.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163kbtbreia.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ngegckuk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bvccrtli.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zerdappc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aqylvdkt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163qryolydg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163niwjuijv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rksxgphp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zvmipkpo.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163rnljidwt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163fgmlhpbk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163lbyjrbys.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163lfuvxyaq.html

TS:   // 同上
来源：http://www.sxryk.cn/163kyjlgqvi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163zvzpwche.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163nwfsstlf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163nvzdvhzf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163txrxtdms.html

================================================================================
来源：http://www.aibaodan.cn/163dfvfbhww.html

G. 面向对象
来源：http://www.aibaodan.cn/163chyyyoyo.html

================================================================================
来源：http://www.sxryk.cn/163tkaeymdf.html

[G01] 定义类
来源：http://www.xuanzx.com/163fnsloist.html

Py:   class User: pass
来源：http://www.xuanzx.com/163jriqwnui.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163nmyutzez.html

JS:   class User {}
来源：http://www.xuanzx.com/163wwskqxao.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163sfzmptuu.html

Java: class User {}
来源：http://www.aibaodan.cn/163mkomitoy.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163rakpqzap.html

Ruby: class User; end
来源：http://www.xuanzx.com/163jafziclg.html

C#:   class User {}
来源：http://www.sxryk.cn/163beqofnlz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163qincsoke.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163mwappbrz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163nlidlynx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163rzjfewes.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qmsheekm.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xhmsfdfm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163pkxpwpxp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163oixiyzxz.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163trcsgvsj.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163qmcnutac.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hoekaspi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ffaldyhj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ictjvrll.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163pqzsbhri.html

Java: private String name;
来源：http://www.sxryk.cn/163inmwqwhq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ngotcawc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qdrnyxpa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163fivctalf.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163worzjbmk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163annotxnr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hwxbrmlx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bzodmlsi.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mnwkaloc.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163tuktfovc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xvvkybau.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163hveaurfw.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163gdrsomvi.html

[G05] 继承
来源：http://www.sxryk.cn/163arkgcsty.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163cpixfpam.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163sfsjvuoc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163dtivicus.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wjrwirhj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fasqsbjc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163wxbagaiy.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163bhczrbfe.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163cmjlqqpf.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163hxuiszvx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163sqxjovvm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163piwiqegl.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vzccaayo.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163kamshbbm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163cigqmpln.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163gajjxtgz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163uwrzgjlf.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163seujbmqs.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dsonnxmu.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rekdzjyl.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163amkfwfge.html

JS:   super.greet();
来源：http://www.xuanzx.com/163roxfqasz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163puhlyjpb.html

Java: super.greet();
来源：http://www.sxryk.cn/163lkwpttwo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xitpityw.html

Ruby: super
来源：http://www.xuanzx.com/163ajvvmsjh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gpwwylvf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163nqvyudfd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gsykppxq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163tumgynzh.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163gxzrqupo.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163wyecalml.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pankvitw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163fvzzshcx.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rbvejzla.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163soyaidoi.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163vszrtxfq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163nzdkijkf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gdwuqqbs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hhiplyaq.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163bwfnjnul.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163tvvqzvnx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163hjacuian.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163iztcdtat.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163mrssexmr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163qoxbwlzy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163civdebwu.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163kdgjueui.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163atspnghq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zlnrqqaa.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163myzxadox.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163obwsboym.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163sumjtmro.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163nicznszs.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jpenidyh.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163seygfdjg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163hwvkjkgm.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163rfhlsctk.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qcfcgaoj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zyifkusp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xwlyfpgg.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163gtgrcpau.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163njcbbufy.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163huwebffn.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163gcfkvbco.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zgiqxwei.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163vybszqpc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163oivarckf.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163aypnutll.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mxqwtwnh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wsmzurjv.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wsanmuag.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163yvtrwltr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ttefzuee.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163rdiiensi.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163grqbblsg.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163wbjljdqk.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163jcoyuzzh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163xqatkese.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163uemjbabt.html

C#:   u is User
来源：http://www.aibaodan.cn/163nennvyaf.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163euvnkuap.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163dpbswbwp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fgjsuzwe.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163fsmcumhx.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163uvsuzdiy.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163vijlasao.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163eodnvmrn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163uflfwctz.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163udogcoen.html

[G15] 枚举
来源：http://www.xuanzx.com/163neerfnpq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zvehclqs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163auqgvrwp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tkftoaat.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tyhxmvls.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bughayey.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163iyuqasws.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ytaczqhd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nwmluacj.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163sszmcugw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163pfmkpotb.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163jsajpahm.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xngpjben.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kctkwsev.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ygyomlwi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163amotatmb.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ncopkcin.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163rjeahkdz.html

================================================================================
来源：http://www.xuanzx.com/163zkbvaurd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163urrmdrxw.html

================================================================================
来源：http://www.sxryk.cn/163khqxgdby.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xgliaikg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163wkdmcrmu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163uynokfsz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163lhyvlemn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163qxamoxsq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ofuajnue.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163gfkuzkrv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xmteneei.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163edjvvjmb.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163dftbocnb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163qqyguaui.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rnyvfbsb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fuffvmzi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iscdygvr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ylygsxgi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163fcfcrtrl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163oowqfxja.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163wywopqxy.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qhketnam.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ptrnsivp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163mtzhfckg.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zbodszrr.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ttjfsxlh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163smumydch.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jjjffaio.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163fpmyvhak.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bnnmzowc.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163iwhfczro.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ibegvngj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wjabtkrb.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zvywlvvq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wkkgsfmb.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nwtjgdpx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163gflfgoxy.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163mkpaarut.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163oyvceemx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163klgppasd.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163swgzqyhd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163mytfpxgu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jvorejdn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163aqifcwfo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163hzxjgnzh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163iazeofup.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163owkwvbdi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163eoamvotn.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163raigvkub.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163pbxjyroz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163oqvjkgpg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xtsfjtte.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163isudjgbm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ibjwxaew.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163gbprkxxf.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163axxknpen.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ngjywner.html

[H07] 断言
来源：http://www.aibaodan.cn/163eydjlqyz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163yuvypytw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qmbxxwsq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163auzphztq.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ictsulub.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163aldelyov.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163kssugcwf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163oohmoggz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163smwmwqno.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163xqkthgoc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ofxqceln.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dcjdltdt.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163erjpdmsj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hvstfoqj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163sgkviaib.html

Go:   err.Error()
来源：http://www.sxryk.cn/163gkdcakbs.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rilndbag.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163veqoieda.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163exzqvksq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163swapmple.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163azvbeknb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dcrnoglk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163omgtbclh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163tfkldzhh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163unhidoib.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163clzjzbkb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163yawiogzn.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163pqleyzsy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163vgwnggwh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163uenbflia.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163yajahhiw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163orghlmop.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vwrucmsg.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jcaxlzgi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fpllosjo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163kgaujcqo.html

================================================================================
来源：http://www.sxryk.cn/163qszysxvc.html

I. 正则表达式
来源：http://www.sxryk.cn/163qqkfjnqa.html

================================================================================
来源：http://www.xuanzx.com/163jgmpcpwk.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163kzhaxjde.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163msdylave.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163qqsbrrby.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cdmcaghe.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wzgfevkq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ulphwiwv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163dhvxxnat.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ueaemloe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163slsaqwml.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ilxlcevc.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163rrrrwawh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163vwiodrgv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163kcxnhnsz.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ozqqtnmv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163oachwrtn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163dbkgcemd.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163jegmfkqi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163vacblwir.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qxyzwlgh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163abplflsf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163rjctmyfq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163uhhtueox.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163mwarawlz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163vejybkou.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qqpbbzyv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163flqujdhy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163mkmejwoc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163fbydsrui.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163lixmvvwb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ehljdteo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fygbfkwm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qfitfelo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xhrysfpl.html


<!-- 参考信息 -->