外链999!wailian999！

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uqsgwuhp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163rveqleln.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qfzdxyfy.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ojvpkbgk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ogalqpqz.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kgtvryom.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163gnjqpfxe.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163csytqbus.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jddbjexj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vyhgbqkq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rfhlhvtx.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fkmagsyb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163nlfduvny.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xmrsuonc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qudgpcsd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cwuhjhng.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ktxfwlhj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163eiyfgmnm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ypzlaeih.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163odiwvjlo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qeylmxvc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ydlqjelo.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163lgymorcw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ixhtonze.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163xhiehzyk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163opmapnml.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bvjwggep.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163tezeukgm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163xntmhapf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wuirylzt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163cjwuordm.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vswbsohq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rzmlwymm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ibyhhels.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163igjkuoey.html

TS:   // 同上
来源：http://www.sxryk.cn/163jnukjzfv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163zwjivpve.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163hxujxwqz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163kzubdaix.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yaqtzsxs.html

================================================================================
来源：http://www.sxryk.cn/163eqqdhncz.html

G. 面向对象
来源：http://www.xuanzx.com/163jkulnkgf.html

================================================================================
来源：http://www.aibaodan.cn/163ndintxio.html

[G01] 定义类
来源：http://www.sxryk.cn/163hcqkdfpd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163wqwpewud.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ngcjisyn.html

JS:   class User {}
来源：http://www.aibaodan.cn/163crgjujza.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163pbqztbnq.html

Java: class User {}
来源：http://www.xuanzx.com/163jcwuuobk.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163turdxdti.html

Ruby: class User; end
来源：http://www.xuanzx.com/163tklqpfax.html

C#:   class User {}
来源：http://www.sxryk.cn/163ikqcwfvu.html

[G02] 构造函数
来源：http://www.xuanzx.com/163dhptrjfu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ojwoybbi.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ftjgcmww.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163skawzfbl.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163nuxpnpst.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163igcruaov.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163derdqyej.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yeavmlyj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163sggfgnxn.html

[G03] 实例属性
来源：http://www.sxryk.cn/163knbjoxhe.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cfapzyqp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163bfmlvxbl.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qjbzbtyg.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163wyrhjgmv.html

Java: private String name;
来源：http://www.sxryk.cn/163oqftjgmi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163tsdstxhj.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163cicpknir.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163fdfiwhhe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163asjafzaw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163yvcnmojn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163znhktzzs.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163dirsrfsk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163afnmoyxs.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163prsqneit.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ztzegpet.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163nglmpgou.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ckituxgf.html

[G05] 继承
来源：http://www.sxryk.cn/163horjfodl.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163sqtoydgr.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163fhosxply.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kxfvgjmc.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xfsbgrti.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163dnsesvre.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mrqjqofx.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163rpnbeqpc.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163csundxau.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163upaxgkbz.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163yhlojeha.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rfixrkxc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163olxrmmno.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jvxmrkms.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163xmrgifbl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qoieyive.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163imendxqv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163tdzhvmub.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163gfpyxdpw.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hqzwyavb.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163giksgkup.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163akxobykr.html

TS:   super.greet();
来源：http://www.sxryk.cn/163gknpctgv.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ercrrkth.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fcjuwldf.html

Ruby: super
来源：http://www.xuanzx.com/163aslyxeaw.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163lcvaeepl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hcvpbnwx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163tbyejmjr.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163gafbevaq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163qdllbpnd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163yzjborgy.html

Java: static void f() {}
来源：http://www.sxryk.cn/163hijohcfv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zaksbisb.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163nuubpbrn.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ltztmmbt.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163dejufulo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ptjehmar.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jajicsik.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163uhmwxftl.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ymwaensg.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163amvqfpnj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163defytbzu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wduitxhx.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163zmgfspbx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163nwoqqhnn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ddfxbotp.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163dbstctdz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163kfzllajq.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hcjlxegv.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163zpznlvhi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163udqctycj.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163auonktbh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163sciftzrg.html

[G11] getter / setter
来源：http://www.sxryk.cn/163bqejysbo.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163aunbcodb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hgirtezc.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163wdhbanxl.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163cwmlmjei.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ynoterkz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163eqwpxsin.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163oxpckvpx.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163yceobqoy.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163tyqtrfdw.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163qeltyyoc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jhdnujll.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ztkqmowp.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163drgsukwd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163zimnvsik.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163anpjrveq.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163awjmmeng.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163sdnqglxv.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ltcapqjq.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163difqjkpw.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163widdqxmb.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163yaxhnrqf.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hmcostin.html

Java: u instanceof User
来源：http://www.sxryk.cn/163jjuxnobb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163uhqzyobl.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163mxguhbky.html

C#:   u is User
来源：http://www.aibaodan.cn/163ualarclj.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ubobeupi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163aninwubm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ntxecsup.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163zilinppo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163qalkowjw.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163mafgachg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ntjqdguu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163gzshjmes.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163adrnkqfi.html

[G15] 枚举
来源：http://www.xuanzx.com/163ewfynsng.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ofvtblqx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163tffxcsqn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163xcouerez.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163agebfyfy.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tghvponn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jdpbanhk.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163denwmfxp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dxpbrbqm.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163mdcmquux.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zbvcexex.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vfmodlyq.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163okyqjqyj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mkyfmboq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163iorjwdjr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ndgkpsko.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jvmwcgfc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163dnbmucxm.html

================================================================================
来源：http://www.aibaodan.cn/163xkngbndi.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163wuuwbtiu.html

================================================================================
来源：http://www.sxryk.cn/163inampfsy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163vzhfdiwy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163aadqqyah.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163vfkifzxw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ekbpyzey.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jksugkuv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163sbxkzgah.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163kxvebiex.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163olyvwgrz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163hzkuhmst.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lsjstwps.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163zrmncxdn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ycbzxghj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kgnunujl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gadgqmky.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mfawqjgo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163stzmdoqv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163owvivgwp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tdrbvvgp.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163qnuuqjvu.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ppaxckws.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gjjvjque.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xrlntyzi.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ahtnqgdv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163upytfwgb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163yzopxmdq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163oteyunth.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163wpygypin.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xljhstfz.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163eombnqvu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163uxnbcabg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kytmhyla.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163rffkidlv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tokoqbsn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jwusvkxg.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ovjvotwh.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163drbriyme.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163udyizmwe.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rjiuageg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163lvxgoxqi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wrqnrfez.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kvitkgay.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qltnrqlf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163nhjfzvfd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163likzyuok.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163steubifj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163fijysdpp.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vlmiveed.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163mapcdtoa.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rnghpypi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mophwptq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mbdmorhy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163geikjdec.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163sufvmtdj.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163qonbjfhu.html

[H07] 断言
来源：http://www.sxryk.cn/163qcebkfok.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163advgopuf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163uctlxkqx.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163asskbopu.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163etrqfyyq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163etikhcde.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kcpeozun.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163pazwsdus.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163sfnylumw.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zrswqjpf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163bfafdmlg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163rcidhasi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163fesrqejo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163epzvxcyy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wknyznhj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tkngsmkp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163mxmxpuwf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163znhnojlq.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163esxxxwdd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163wkhaazcb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ytjvxgdj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163jzmrvshf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ertcdnlx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163bwqavcnb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163mttdirhq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163zpkmzgey.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163zitiwydj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163jaktukdc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163uwxhopee.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163umhcqbey.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zghylwba.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rufwxugi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163mchllufb.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163llclihbh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163llhwvcac.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163biabgths.html

================================================================================
来源：http://www.aibaodan.cn/163xorwqkgp.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zxcasckn.html

================================================================================
来源：http://www.sxryk.cn/163qusdpyuw.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163fqzgcggb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163knjqlukm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163dtssiaah.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ncntqafj.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ogfedqae.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ffbvuzlv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ceprwzbk.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163bprphgrp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ddeadhjf.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163vmkhqcuj.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vobipvgp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163hxfuelye.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uewuyzsy.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163osjnkstm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163gisqxawy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163clrqhzjc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163lfelcssn.html


<!-- 参考信息 -->