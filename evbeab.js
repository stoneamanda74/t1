外链999!wailian999！

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xzfkiinq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163pupwwlyl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fdphlbpt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163lyhmcynt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eevkncbz.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163lxgaudca.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ypvndfsn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163qggwopkg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gqbacgie.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163dprticol.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163lrgajdou.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hqcdrbpq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163tkmlcvyf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163toluwcvd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jxzzmbrm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163siytzuum.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zzrnisem.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iuzebqyd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163pulnugip.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163unmlmont.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163afqxgdhn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163vnqdvzol.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qbjynvce.html

TS:   // 同上
来源：http://www.sxryk.cn/163jmkveonu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163vwnvtryv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163hjqfcmtc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163izooreuc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163wvtcfzxg.html

================================================================================
来源：http://www.aibaodan.cn/163bvifhosf.html

G. 面向对象
来源：http://www.sxryk.cn/163ucynzvlx.html

================================================================================
来源：http://www.sxryk.cn/163sivlmikl.html

[G01] 定义类
来源：http://www.aibaodan.cn/163mijqqspe.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ytgktfqi.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ilkpzmch.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rirchezt.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163vthjwuxi.html

Java: class User {}
来源：http://www.xuanzx.com/163nbhhjwhu.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163aehqdfao.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ypukqgqy.html

C#:   class User {}
来源：http://www.xuanzx.com/163ituybjtj.html

[G02] 构造函数
来源：http://www.xuanzx.com/163zuravynf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qjgqyhxr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163wxpfqiyt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163psplxvat.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163gjpfziwr.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163bwgguvou.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ikfjxnky.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163goicdndf.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163yylarwne.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163dvkmemhn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163mamqnslt.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163heqrnchi.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163elcyjkgg.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163rqpgvxno.html

Java: private String name;
来源：http://www.aibaodan.cn/163mddkuniz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jwokcwyr.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163rbgbszxp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163acipqbof.html

[G04] 定义方法
来源：http://www.xuanzx.com/163oxsvnzeg.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163pojugjzd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bnoxixbo.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163uvgekazn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mxrlqxzt.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163frubgwks.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qeyozxow.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gahfonxt.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163wqjecdjv.html

[G05] 继承
来源：http://www.sxryk.cn/163zndkevml.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mermnejw.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163pezliucj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163irlyykod.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vqjgiegy.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rjsfmpdn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163cgrbsksx.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163iqbxqcpw.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163vxnjjqnw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yddeuuin.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163gqldkrvb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163djqkhluz.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bmiqiiec.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hvnqszuo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lzkaxaon.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ldbznbtu.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163bnqqlcnn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ucecowzj.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ngywxiic.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ktpphwio.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wplczyla.html

JS:   super.greet();
来源：http://www.xuanzx.com/163efsrbnvs.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163xveiritw.html

Java: super.greet();
来源：http://www.xuanzx.com/163vutpfbwi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163bgkvvomc.html

Ruby: super
来源：http://www.xuanzx.com/163nkwtrgbj.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163azyzjmji.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wmrjzwjp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gknkunnx.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163bpyndpzt.html

JS:   static f() {}
来源：http://www.xuanzx.com/163glzyoxvy.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163cniozdkw.html

Java: static void f() {}
来源：http://www.sxryk.cn/163oburqfap.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163zgjifeqt.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vnnddajd.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tyambooz.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163mcrhuneq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163dellttyi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163owxpkcil.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163znokhoyy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wjefzdtq.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163yltlzrzq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163kehldyfw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rbvftyhd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kcsuwbys.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pnklwmqj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mjpgnoia.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163xdjkrztz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163mhkedbrm.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163rulqibmy.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163tcalrhgu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163pgoewjwr.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163nipebgsg.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163lyjsbunq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xsrssvbp.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163sgfmcebv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163kajkalbu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163uhuptpcr.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163gevffzhq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ozfshxsf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163reibcgoq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wvpvldda.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xyzwhfer.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163rwewiifd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163rhshdyur.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ovnbdpnb.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163tbmghyxl.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hdfocglp.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163pluhuivk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163eegvcnpw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163mcqvdome.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163nhkibbwr.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163puenrhzb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163dcboatrr.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tgcwgaxv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163liyvhrbh.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ouaefweg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163lxxdtlxw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163rrkwbafw.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163slvngftm.html

C#:   u is User
来源：http://www.xuanzx.com/163mjcvxwie.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163biwnhvaw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vrxcgqen.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qposjjnu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163bdhmfdbr.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ksetfhzy.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163iissmaun.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163slrvvori.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163nhroshjl.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ijlklhdi.html

[G15] 枚举
来源：http://www.aibaodan.cn/163txpewljh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lcgiyszy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163jyczvvlf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163xoocwufw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rxqjpzzo.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bxqrxrtf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163exrmxkzj.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163lzjuaxdr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rxpooxiu.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163skcqluvs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zhylzixq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163wcxsgdox.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fxuniyda.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wpdxlfvt.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163qbmmamtj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163wnyegjvw.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163pcllslwv.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163wimpdamq.html

================================================================================
来源：http://www.xuanzx.com/163ttozxbqo.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163slpyktmp.html

================================================================================
来源：http://www.aibaodan.cn/163ouoxjtgx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163dtezyiap.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163tbqdjzhu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ldnyiyxv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jejiqdcx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ctzpnfzp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163wedhatkv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163mzjzcdtn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163eaafdmqx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163xzkzxyio.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lwwlsnhr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163vxjesgrd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sqcqzyfx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kdpvdkex.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163erloragv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vfduyckl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163oyfhsqgb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163etufkujr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ieglmpmz.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163mmybtoen.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163omhboqdl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163gmgsqcum.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pcsgwlat.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hzkfvpyb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163uucfhfxo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163svpysjzy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163paikadpu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163rlxipbmr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163nbhuqwxc.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ijpxwkfm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rqysjrgn.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dydexftx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lecjlavz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kkuhzryv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wpvuvlgy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163uevryyih.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163npdnuxvh.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163npdrifnz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163oivkqyqw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163dbhjfyon.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vnbmgwlm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mwcrcszy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163nmllnlat.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ygrmrjgb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163lfbziwld.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163cnwfxrvm.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hvwtobhl.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pzjlbddc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ipbknuoz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vrpviufj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gjfkexif.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163sjzlwkti.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163kaagsqho.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163drsmgjvs.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163efyadtyu.html

[H07] 断言
来源：http://www.xuanzx.com/163qaytkipr.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163klkrzjlk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163lwqzfyru.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wrcchkko.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jwzsjfdh.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163kzvpkpqy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163pgjxsomi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zblmrcmk.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163cvadqjvf.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163unptcpbs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hbwafcqz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163luxgbfsh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163wlwrwhvv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163fmkgmnzh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163abwvpkzz.html

Go:   err.Error()
来源：http://www.sxryk.cn/163adujmyeo.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ggvnycsx.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163eyebefqd.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163dhsbwdvv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ivxthanr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jmcpzlpg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163wqvoohys.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163rchfjkys.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163wqqxgxvd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ptjplvbl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163rihywvrl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163fvxaxjhd.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ecuerwvn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163vqevkfbq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ufjzcjcc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163srzporhv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163utdorung.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163envqpvtw.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163rqtkvzlt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hfedulgc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fbwkpehz.html

================================================================================
来源：http://www.xuanzx.com/163qdwaopsp.html

I. 正则表达式
来源：http://www.sxryk.cn/163whfclbve.html

================================================================================
来源：http://www.xuanzx.com/163kzxpyvml.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163zfsqapnq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163bqswcmgt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163eggzqqbq.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pgevgbhs.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163utsslmwf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kmvmvmmb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163bfxouoln.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163eeathlbt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163qurfpbpn.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163idntyyjo.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fabwnytg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tctqzuge.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163easjetpj.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163aksusnui.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163pjedvhqv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163bbxhnrlg.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163cgungsdm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163nxioeddt.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163wkgqdpqh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163pgwfyszs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163nhdsrqtm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163mgmvfjku.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163xngttoog.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163nradfjgj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ggiyxvhm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zysmehtp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163alzqzonc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163lssarxmp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fxuliyon.html


<!-- 参考信息 -->