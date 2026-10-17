外链999!wailian999！

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163dsgnikib.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ordjjris.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bzaivjqe.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163qkqklmer.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163flkofzzq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163plqcnude.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163jvddjzxf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mgwqbrwg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pspddmlw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163echsxbem.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xutghfcu.html

TS:   // 同上
来源：http://www.xuanzx.com/163ebgrfwxt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kxzruott.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ctwtjmwz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163wdoepxhw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163vohxqdcn.html

================================================================================
来源：http://www.aibaodan.cn/163duurxspt.html

G. 面向对象
来源：http://www.sxryk.cn/163iuziqkwy.html

================================================================================
来源：http://www.sxryk.cn/163mpveordw.html

[G01] 定义类
来源：http://www.sxryk.cn/163nqqdrrqi.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rwittrme.html

PHP:  class User {}
来源：http://www.xuanzx.com/163lpcowdhn.html

JS:   class User {}
来源：http://www.sxryk.cn/163mpzklrrk.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163iohokuwi.html

Java: class User {}
来源：http://www.aibaodan.cn/163odgboftk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cudvobhp.html

Ruby: class User; end
来源：http://www.xuanzx.com/163pkvpcyei.html

C#:   class User {}
来源：http://www.aibaodan.cn/163aguzfepe.html

[G02] 构造函数
来源：http://www.sxryk.cn/163helnctei.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ydtqgcdp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163mzfhtfcs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163nkwzoxyr.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163wdyviqzc.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163feuysczj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163qdkbfgbe.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qruantrm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xaewgezc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163uwoqkxtj.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gtfohveh.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163lsqcatsd.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ztpskorc.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163yswixmxo.html

Java: private String name;
来源：http://www.sxryk.cn/163drhdurod.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163kljtbbra.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ihmlkmvb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cptwtice.html

[G04] 定义方法
来源：http://www.sxryk.cn/163dltvneoh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163gcaykfee.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163japxbsyu.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163uhhtqsxw.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163fsfhxirn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163depgslzu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163lzvjdfoc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163sotphwdt.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ehohiwdi.html

[G05] 继承
来源：http://www.xuanzx.com/163wxsrbqgw.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163cxqtflwi.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163gzkssqsj.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163firkkbpq.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dedcgrmj.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163hpucjdib.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163spdgrmjm.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163wmpdfwyy.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kkozslas.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wsxtlkuo.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vtjzwbrv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ikirrwoa.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gjfweyug.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163tenmkiss.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163hvzaokkb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163faecxzrp.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163emplnbwq.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163wbidveqw.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163eacldwnz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xmezfrxh.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163geqxktqd.html

JS:   super.greet();
来源：http://www.sxryk.cn/163aefzjddi.html

TS:   super.greet();
来源：http://www.xuanzx.com/163iepwcuqe.html

Java: super.greet();
来源：http://www.sxryk.cn/163omomtblf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163yfbbmoql.html

Ruby: super
来源：http://www.xuanzx.com/163vnqsgdwt.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163yvoupovj.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ywwkodun.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163owjpxxsn.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fhfbidgx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163zhwemeom.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163vnvukibd.html

Java: static void f() {}
来源：http://www.sxryk.cn/163oejubarm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xgivxsux.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163abwsjvjo.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163opxruxia.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ddhyofjf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163tbadmdsk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fxxsjywa.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163afscvtry.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163kkrbpsdg.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vnqoeoad.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ntbgelhq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vyudfahr.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dblgmrkd.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wceykpkt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163pijhcjhb.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jfpiwopj.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163lspvzznj.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ogioqrys.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163zmnsbnyd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163kyzdvhnn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163jugkaxdk.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rsyujodq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163nqnjneye.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qdkzgmal.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yrcsnapo.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hpkdncbe.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163nirlugvk.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163orahpdmv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163iuvjkaua.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163kjppmwxb.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gksbticz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ezzpcmnc.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163kgcrwxsf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ftjphlyg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163bcyvsbps.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163vtdpbbhm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163lmshnnvw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mggeuvoz.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163derdgkwp.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163annziuce.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163liwoouhd.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163tfbsizhb.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ecwlwmhc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163sjonwrpb.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163iucvervs.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ukuniyjv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163jlcothch.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163cdetkbfq.html

C#:   u is User
来源：http://www.aibaodan.cn/163hdxqlrsu.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163dpxosmlm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163yskaxufw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163xwkuejnj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hxfswksr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163yushhnob.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163bgqjjoem.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vexlhrye.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163bqntprpq.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163odzmsrwc.html

[G15] 枚举
来源：http://www.xuanzx.com/163jnfzpxug.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163hskcoymj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xpktuzuk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163nujepwoe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163uzextgbf.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163szwsvxmj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163domrzvub.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163bhxmxvrk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163adhwiqzt.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163fmnswmyp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163czpbkzrw.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163funinwzi.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163stjtgigk.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zsjorcey.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163glruxebe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ksxdcjtl.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163pejghecy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163txhfltby.html

================================================================================
来源：http://www.xuanzx.com/163jdysealq.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163aknfghqm.html

================================================================================
来源：http://www.aibaodan.cn/163opfjajrt.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163legnmfdo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163kfjfemaz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163esmhdgvi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163piawbszw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163qqbddgnw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163qmstzxno.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163szndvizh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xcwsudpi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163irwfvopq.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qsxdhigu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163akzrbvvc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rnymcevd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vfgwaney.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163frozfzme.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tkacliad.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dqnvvfdx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vsyjfmgd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163tulsqpjr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163sqyvrxwf.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ylzbxqgy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163eefszsbt.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pfsfvomj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cpfuitzz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zrnxxwdb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163mfljuudc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ajlabtpq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rgdixcqw.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163wjyocajw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163yqofcder.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ezpydgly.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fasdcuuu.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xzwqtlmz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163mdjuwegb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163obytkbkd.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ammhgqdt.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163aspootjo.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163pmrvfeip.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163nlvyphik.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163belxzoty.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kwkxhkbx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kjhiofrj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163bezchyed.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ojfwqgks.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163rpwpojca.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163dbusqvnj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163tqyewuwo.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163amcmkxil.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163pzgonqsa.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wjpraobh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kuwymczt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163qvmbowki.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163zhlqpqru.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163vndwrzil.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163zlhsfetv.html

[H07] 断言
来源：http://www.xuanzx.com/163hbfpcgeo.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yiuosxfl.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163uwstfkjp.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dchvjtiu.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163oaezgzdh.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163uyrqyqor.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xnzsaccc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163sozmsfxh.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ykkudyhj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xwegcedj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163oqbldstp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163iglhtxuj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163udlohdzh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vwgppssi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mllaaefx.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163dxuzwmzb.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pjtmqktq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163gmkzodbl.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163cpfjvypc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163vfnunauc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163pgowehab.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fxgpgyxm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163catqbmth.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163rfyrihte.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163eddbxndd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163rgwddrsv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163qjafmdfc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ecpfohfr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163yitbshta.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163mhgtkebv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hdmuiiew.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gnpolrjg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163bfwipsqb.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163saiyxkgx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163roocicop.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163bozxajob.html

================================================================================
来源：http://www.aibaodan.cn/163lawdbsmu.html

I. 正则表达式
来源：http://www.sxryk.cn/163avyubmgb.html

================================================================================
来源：http://www.xuanzx.com/163ikyyscwv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163cdberion.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163gybqskqn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163gzuriljv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163agmyluwf.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ycctnclz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163dwrppwol.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vbebbuot.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163yiipbbil.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163yxfazmmb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163tkhhxwll.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163hwgvjgkt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163awjfdfkw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163uubhovli.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163tkwiibvf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163wrzoonyr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hssytfdo.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163oordavbp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163kgkyyicx.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163qrzoxfnk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163pudhkmwy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163jugoadzw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163duptsrct.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ijedkefh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163begebaky.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163esdwivng.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163egnawvgv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163umstdisa.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rmxkyxcd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163shaaaepd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ypkxeums.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hmyvvcxc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163emomnzia.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163kkupmihr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163bqyivlan.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163eqxulgsj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zatdntdo.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qfcqcean.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ndlxapqr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wxgnqoew.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wpwamvok.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gegujsbx.html


<!-- 参考信息 -->