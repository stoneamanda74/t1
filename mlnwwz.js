外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jzgqlyyd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163hvzvkgiw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163swtkbhka.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wtaemdqx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rsdhkqqq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163clochjde.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163uhdyggux.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163jsdsbbub.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mtzvqkwx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ryavfgjb.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163opvmnhju.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zaoydecl.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rhhjblwu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gevniyzi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163fiahwikf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163oamjyfsn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163fyoncwzd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vzjouiah.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163riawmulg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163fecdsprs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gpwtwjau.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163gyeporsv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vaszmkdr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163jobgvfle.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nnvxnded.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vcuxevdz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163kmzjdfyz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vbxjesno.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163bradyukq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lrmgxiun.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gsznrlxg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163dldfqpeq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ldnvhwfg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oqhptxha.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wqvooewi.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163xnnxnflt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tlpseynh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163gyextpsy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163hppubzlh.html

TS:   // 同上
来源：http://www.xuanzx.com/163ztdniihr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wbjoihxs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163bayivsxb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163jroemzog.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yqcvggkx.html

================================================================================
来源：http://www.aibaodan.cn/163mwxdjrru.html

G. 面向对象
来源：http://www.xuanzx.com/163etzvappj.html

================================================================================
来源：http://www.aibaodan.cn/163wxkbfyjg.html

[G01] 定义类
来源：http://www.aibaodan.cn/163nnxukkju.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ljnweqih.html

PHP:  class User {}
来源：http://www.xuanzx.com/163zpszzndv.html

JS:   class User {}
来源：http://www.xuanzx.com/163zqxttyos.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163umcqjlhv.html

Java: class User {}
来源：http://www.aibaodan.cn/163tdgkuzng.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163llsdftev.html

Ruby: class User; end
来源：http://www.sxryk.cn/163tonzdkma.html

C#:   class User {}
来源：http://www.aibaodan.cn/163njftlxew.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163bzqsgnvr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163kiktbpvb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163sbublboq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163umukljob.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163akaeosmk.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163btieetcj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163msxfmwhr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jhoksduz.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163vbmfuahc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ztxpgoyc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163yvfktrtb.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163vttguclk.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hcnhhfcd.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163mvsdczii.html

Java: private String name;
来源：http://www.xuanzx.com/163vygacbll.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qqqhcbiv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163abdwfcry.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163azhkvvwu.html

[G04] 定义方法
来源：http://www.xuanzx.com/163bcitbdsj.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163hrimuvhp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163qbtbjpus.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163epwbqqrh.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163vypihpjl.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163wjlrktvb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163epbczgaf.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xdxbcmkj.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163divtrfpt.html

[G05] 继承
来源：http://www.aibaodan.cn/163ptqnoech.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163vrltpyog.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163orjvkxig.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pdvuqcuc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163svrcnigu.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wqudgvml.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163gvedakjg.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jpufdwnz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163bsymugbf.html

[G06] 重写方法
来源：http://www.xuanzx.com/163zuivlefj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wjjiyzit.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lrznlbok.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ewofaqed.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ztvjyptn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163itnkeaeo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ddabjgzy.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163pdukwtbs.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163oxwrtulk.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xecupuqc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163yldfvkvw.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xlfnmpgt.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hijaxghi.html

TS:   super.greet();
来源：http://www.sxryk.cn/163admafyfe.html

Java: super.greet();
来源：http://www.sxryk.cn/163qtfkkhpi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hcdlkocd.html

Ruby: super
来源：http://www.xuanzx.com/163frsqtmgj.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163vbpbmgqz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163gamtzgwp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163nfmraqgp.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163aswuroag.html

JS:   static f() {}
来源：http://www.sxryk.cn/163qwgnvjww.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ejufxklr.html

Java: static void f() {}
来源：http://www.xuanzx.com/163inaxjeig.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163yddtbtfd.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gmudyrew.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163frktaled.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163lvzogmjl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163utsjbiqn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lfcxicnk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ehefrvuo.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163czcwjyvt.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163lutvxrpd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163xmnfdzjn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lzhrnlgj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163owswujib.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vhqtlfid.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163vktdtvvv.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163rdxvlpva.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qvozewer.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ipftqswh.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163zdklagyi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vpajkxip.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163htarcbvy.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163tgpjkewx.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163kritytsk.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163khhcqbxl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cfowbmce.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ompoezrb.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163towbgoxo.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mxrwfpcj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163hxckrjlq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qdwyrdcm.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163lhpuvmrw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gkthvxxv.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ibtrvcxw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bqvaiwnd.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163zhbybgcl.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163kidmytvs.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vdsuhmzv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163yqavsutm.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163kginlrnw.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cwwvxnxb.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163pceisvsf.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163nvwiksht.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163mdardynq.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vawzfogk.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lmpnhsyb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163igajbbyh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163eqwisneu.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163kybkqaks.html

C#:   u is User
来源：http://www.sxryk.cn/163xxhssjsm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ejjsvqsw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163jivpanqn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nrgamkxi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bwgvyjgx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hvvifipw.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163kmidehev.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163nmbagtca.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bszweiqe.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163kgshxjfk.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mtvmlhem.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163zxsrrkws.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rorrenus.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163luwutnzj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163edtawdrr.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163akuczwka.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163ibcjlsud.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163upzuaqaa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ttgpwfcz.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163gqllpvac.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163euesgfqg.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ojhtpntk.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mvrigpir.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vfcbskub.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163srnmvguz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163bvepnsoh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lcukqnoj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ugrnhaks.html

================================================================================
来源：http://www.xuanzx.com/163fbddzqnc.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ocybtnjs.html

================================================================================
来源：http://www.xuanzx.com/163plvdjgax.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ygquldov.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163oosyaitg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163oikgsqqa.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163meamozsi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wipcolha.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163mptixdzk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163lkqwrrik.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163inujxgdc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nysnoowf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163jnbcfphc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163amxnklkf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hbwaczre.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163efuevgsg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kjzrdamz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qfgjmwoa.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163qvksarun.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163pdjkahyq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163bpfcdhrr.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hmqbvuam.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163eobxaqpx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wlsiilkk.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163txjrsnzq.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163oumupivj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163olpxuedk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163vtoolscq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163egfnulsh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jbcuftdc.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qvhhngtr.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163mutnuids.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163dcldcobs.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163wrsrfenn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ldntryns.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ajhpsmqh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163upfnuxdc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163lzgllkyy.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ttmxhqzm.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163twzzczob.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163nqsrlfrq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163mwsvlawo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163guqgrhff.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ednjulsk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163knadljvi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163idcuuhzi.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163bqvgnxsq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163qezdwirw.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163oqlvpfke.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163zyfrpxiw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163aqqbklkm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kieidhrl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ruyklczk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163kwjitgnx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163eoguljrf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163lrkzojkp.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ujlabspx.html

[H07] 断言
来源：http://www.xuanzx.com/163ypzvkegf.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163wvdnplih.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wmmwfpcr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fcdgumkf.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lqikdwnq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ikpaxcjr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163nolbtghx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163yotgktnw.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163yeyrwnue.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163niyommgq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163oiucnvjl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qmcfjkko.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ljbtiatf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163wvzvkvap.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zdexepxk.html

Go:   err.Error()
来源：http://www.sxryk.cn/163fntjfrvv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163jkyktjfw.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163vilsddri.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163dqqkvgxz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xoapxtyp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nittcbil.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163brhqeitz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163swivgigz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163eeovemga.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163gieepyub.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bvrmkmem.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163arxkgbrj.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163seqkxvrs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163bbhvfoqx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163piczjotr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dnoqrxpg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163oflqjjho.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ihucsrix.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163bgbsxuby.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163uehaagtt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163zbtckklp.html

================================================================================
来源：http://www.aibaodan.cn/163fsfkxtgq.html

I. 正则表达式
来源：http://www.sxryk.cn/163amfxptdl.html

================================================================================
来源：http://www.sxryk.cn/163zcqmmunv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163wtavqeej.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163qdsuyhlt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ibyxcwcb.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wsrbvhnn.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ugmhjaxw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163yfciyzwu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163kdeywipa.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163pcbaaiki.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163jyrkscdz.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tgxwnfdw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163najqujzt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wizzcltu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hqzrfawo.html


<!-- 参考信息 -->