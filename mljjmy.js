外链999!wailian999！

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163vowbkpkd.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163uhbpsuwx.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163yjxqquev.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163beaajlzs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bamfozov.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zihlcgfs.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dogqsfvp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gkwbtusm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163eocizbho.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163keqdenzs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163vyfdhrpc.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163kwrpieph.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163guifehkr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pbopbptt.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dxnqsnpx.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nimrzajb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mygimehs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hwmezaxq.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jebfsonj.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163jslykpay.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163goxzzmrd.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163chuskzdz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163mpnxwqga.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ccbsffzi.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pxuydabl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dlhtxouc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163qwvnrixc.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163kdrzxgmt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163qezvevcc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nyazsbeo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163affntgqy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ksxvjvcu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xqcspzda.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163lxskwbha.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gkbusgzz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sdfdjqni.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163twtcnykw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163gkvyhkoh.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kfhegarq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zdpwuyqo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163eufdxbhz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xchyjuds.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ixiswuqr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dogxwgsn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dqscnnas.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163myrfdnoq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163glsfaoqq.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bsgjosdq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fanjogbe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163sbcutkrl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ckkhmemj.html

TS:   // 同上
来源：http://www.sxryk.cn/163kbxlhucf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163sppejmvl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kjzmnemr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163xagxvkxp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163vxkdhuxk.html

================================================================================
来源：http://www.sxryk.cn/163tqwgocha.html

G. 面向对象
来源：http://www.xuanzx.com/163bkthqpnz.html

================================================================================
来源：http://www.xuanzx.com/163vjiatkzc.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lcrzlejw.html

Py:   class User: pass
来源：http://www.xuanzx.com/163liflthmd.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163oativice.html

JS:   class User {}
来源：http://www.sxryk.cn/163wdwdovqa.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163lvycjqcq.html

Java: class User {}
来源：http://www.sxryk.cn/163qgtwelnt.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vurtiqvu.html

Ruby: class User; end
来源：http://www.xuanzx.com/163miftrlxk.html

C#:   class User {}
来源：http://www.xuanzx.com/163shdletzl.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163dmbutmyu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163fnnotvqe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xsysoyto.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163dgbgshik.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163nqaqowzb.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163xoudyhvt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163keqtamib.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ckqduuqo.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163waynmqgq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dynceyag.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163dklksmgl.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ilxldmue.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rhdfjtgq.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163xklefedp.html

Java: private String name;
来源：http://www.sxryk.cn/163oarcxuiz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vegurlcc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ghdylcxv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163rqqqabcy.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hyltitbh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163clsfuujw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163oqkcmvnz.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xvxtngpv.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163qyytnshe.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ehtvbkog.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fxgveiyk.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163exfgxlns.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163adtyqzht.html

[G05] 继承
来源：http://www.aibaodan.cn/163yzjmvsmr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163oxdkiruq.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163oiwkveeb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qgjwclkh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xfbzbwpy.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163jmfstjig.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xzrfbiye.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163uzzmumpn.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zpdquyyo.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163hkqqefsp.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163nyzxiwgw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163plmcnmwl.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163nuswojyh.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163npdsrpvw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163truvtthk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163skjmkjki.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jvgwnppv.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jcwjjrxl.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163dbwlzhtj.html

Py:   super().greet()
来源：http://www.xuanzx.com/163tdeihulf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163tsohhcwv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gynndknf.html

TS:   super.greet();
来源：http://www.sxryk.cn/163rwkgrosg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163cpmamtfa.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163yxvfqphc.html

Ruby: super
来源：http://www.sxryk.cn/163xjrlwfam.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163kerbblpl.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163uflgjnem.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163vxpddtiu.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163bxqtkcdg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163tkaoanmw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nehfouvx.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pzdlardj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163koptethy.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163iotaudui.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163yyspiwop.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163soxjjaov.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163nxmtxknc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jxqsikwu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dcgxrsqh.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163yngnmmzi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dgtchfdd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ljnnttoi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163xokaulbn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ncotquga.html

[G10] 访问控制
来源：http://www.sxryk.cn/163etbjncqx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163hzspceqn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163upduthqz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163hnleacit.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163cjotgadq.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163gevaltfs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163uknnidac.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163kamevyvy.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wkowcnux.html

[G11] getter / setter
来源：http://www.sxryk.cn/163bwmmhujb.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163kkjfbnyj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163nluiwwfs.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fgplyxat.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163bqdzqouh.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163qofugcou.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163vjqjitxa.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163lwxqzgmt.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163gqzxplta.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163igeowmpy.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fekpjugv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hfpmtnci.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ofztlfbn.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qvssljsk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163mpnskiga.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163hiayatra.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163zrsvtjoz.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bbvqgbrn.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163qglkcluj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163twgqrzpm.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ufworsus.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163mgtepzqx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163yapypmma.html

Java: u instanceof User
来源：http://www.xuanzx.com/163gwnlcmiv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163eyukoimx.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ofgcvffh.html

C#:   u is User
来源：http://www.xuanzx.com/163efajarph.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163vcmejylw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163cfmrvhcr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ltvavqbv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163hzwyvxai.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163tigmvhrd.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163wgdljifi.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163hmsylcwz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163nwtxtfpm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163drqqmgpw.html

[G15] 枚举
来源：http://www.aibaodan.cn/163svhoafmx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zeccrhnx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163oelcprcw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163clufbwhu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163lpyioybq.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ttmvgjcf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163aggjfwaf.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163vprfvdxj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bqojqgmt.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163cibsgxxy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qvnidjaf.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163yvvutsxo.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163uqwuvvng.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163naepytat.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jzbeaici.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163uarzsezh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163acgmulrr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ljijmlwl.html

================================================================================
来源：http://www.aibaodan.cn/163pgneuuyx.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163pgbljunk.html

================================================================================
来源：http://www.aibaodan.cn/163tyvjxfrj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163fmdeskud.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fmaqmrid.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ytpqdigg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wqqwsjoj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163nmnfggyl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163fyvnztdz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163faklywbv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163yquovmbz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163krctuvhc.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163kmgmfjzd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163fvaczxrk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163csmupjlw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163puwyyhis.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kygykcco.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qaqazivy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163szawrvwe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163oogtvsml.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ebhkoodi.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ngvjicwv.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163rvcednhd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163jgwhzpra.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lpojprdd.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qvhxgxku.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163runvqnhj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163jurvuedg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163zkajvvqb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163utwuwvrz.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163bptlsecp.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163cmhpojls.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163cjgwhaah.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jznvtpkt.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163soqabpxd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163rtraishd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jgihulqg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163iqwgqdkm.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163qlptsrhj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pdufjxxy.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163iwpygwwx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163akfscqhu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163pozzetox.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163yvpevmok.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qxmelgci.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163fsszuluo.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163heccvxbi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hagupqis.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163hvwiclfv.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pdpaswlc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163cidbvbnt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mamyqwwx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cbsgvwys.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ueyxrrmc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163edizaeah.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ueqozimb.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163oasmdgbl.html

[H07] 断言
来源：http://www.xuanzx.com/163ccmffynz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163aoqgwitw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163npweafnd.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163onxdfazc.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lhoejisw.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vsbtjbgg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qyoryilg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wdgjxdle.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163hpdbecgj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jtpjmzao.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gxhqqaso.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tsnxfgvz.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xbaahecj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163frplwgza.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ybqsifja.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163wnflsdfb.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163pbamuiia.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163laffffhr.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163hahxoqqk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163tmozrvlq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bbsgjtnn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163hpcnvcnh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163nvbexdsi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163qxflehst.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jygndoqv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163waniskrj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163djwqeyoi.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163smskyuic.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ygcrenub.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163kmfrbrnt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ggensqar.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163goyovoqf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163bzkeiano.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163waqstwxy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vajuormw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163aakyervq.html

================================================================================
来源：http://www.aibaodan.cn/163elzqddro.html

I. 正则表达式
来源：http://www.aibaodan.cn/163miavgvhj.html

================================================================================
来源：http://www.sxryk.cn/163vxiwlrup.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xeqvcwri.html


<!-- 参考信息 -->