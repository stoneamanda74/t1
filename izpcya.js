外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ekgoxpbw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yfnvwufo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qqvqcglj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163upjexspi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163oiboecxd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ivmmbrgl.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dnpfsdxb.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uasvvinl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gkdzonou.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163reiwoado.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163onssvver.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wtyxxvfk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163fxnimlyp.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163upsfpmvy.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zlqakmfe.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163setnnqch.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ozyukljn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163sveveutn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jhcsfqpu.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tmgumrkj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ffvqrdat.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163gtdbzivt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cgcmjqef.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ynqtiojg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hvvouvub.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163tqpvyrln.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ezckngzr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sgdfrzev.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163baywxxfz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163mkzubjsl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163oznhgjuj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jnybftbf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ndeiyfog.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tsqwkoai.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163myrnhyav.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163qhvvjgqg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163grpdpyzo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163grhpygto.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163etdyzrzb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163cwafzyde.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163finuvolu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163bwebfasu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163igdreyxj.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xefiqlml.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163qngcjuvv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zjdstjpn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qkmlsuvp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ljtxvhmb.html

================================================================================
来源：http://www.xuanzx.com/163yoigltei.html

G. 面向对象
来源：http://www.aibaodan.cn/163fwrdiaah.html

================================================================================
来源：http://www.sxryk.cn/163wzteukuo.html

[G01] 定义类
来源：http://www.aibaodan.cn/163rfmwnwup.html

Py:   class User: pass
来源：http://www.sxryk.cn/163iorriyfe.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ssrwijtx.html

JS:   class User {}
来源：http://www.sxryk.cn/163peuqqqzd.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163drwisdja.html

Java: class User {}
来源：http://www.xuanzx.com/163epnvldcu.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163speqmgej.html

Ruby: class User; end
来源：http://www.xuanzx.com/163cremgvqm.html

C#:   class User {}
来源：http://www.sxryk.cn/163jfcmuxot.html

[G02] 构造函数
来源：http://www.xuanzx.com/163pfntgjhm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163yzjgsnzz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163cxupriaf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163fsdgxyku.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ropvogox.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zbownkxr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vgpbeihh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163lvynrcev.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lomsyrrc.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163qgcdhjdz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hnbccgxy.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163abqevsch.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163eytagvsg.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163awmcubcx.html

Java: private String name;
来源：http://www.aibaodan.cn/163uijwnazj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163glehuayd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163hvtjzajt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163aakhjxbz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163dibkkhbn.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163faovnbjj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163lnasamah.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ogzzmsrw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163zemvmqyn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163yfwmnaxm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ixbgkpjp.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163rnhaqogf.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163eyscaoxy.html

[G05] 继承
来源：http://www.aibaodan.cn/163gzcgpetk.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163fgjisddu.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163rjofbhzd.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kmsnrscq.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hshdbhwu.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wnssnpqw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qoqzdkfh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163lcgodzig.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jhuofhyw.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xnetvqxw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mmnbvqfn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dsoffqdr.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163jpepzpuh.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ftqasuik.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163yzfjkydf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dmzstotv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163dhmxckyc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163asikhqto.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163tjwclfyg.html

Py:   super().greet()
来源：http://www.sxryk.cn/163zgzemusm.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163aknyhowi.html

JS:   super.greet();
来源：http://www.sxryk.cn/163begkvnog.html

TS:   super.greet();
来源：http://www.sxryk.cn/163yypzmbns.html

Java: super.greet();
来源：http://www.sxryk.cn/163orceaqfq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163cerxxnbl.html

Ruby: super
来源：http://www.xuanzx.com/163qztpeqkp.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163yabizlia.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163yopjkmam.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163cnrnkuih.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163dedgkyul.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rrqluaub.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163svmdyvjh.html

Java: static void f() {}
来源：http://www.sxryk.cn/163thyabkta.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mmptplpz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vikwbdix.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163gjudlgtk.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qdstgdof.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163eqaarkbb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163wqsladny.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163kybmcbxt.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163tludrqtb.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rulmgytq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163fzrvyjhk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163zwkxijjq.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163gxgcbuza.html

[G10] 访问控制
来源：http://www.xuanzx.com/163yfireyqz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163akcutkrb.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ikeuvhfl.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163bnsfgoph.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163swueelfo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wxyhtuei.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163puvkifcu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xxigdrny.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ywewxbws.html

[G11] getter / setter
来源：http://www.sxryk.cn/163cdahmeje.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163sdwzfeev.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163rqrzjmbg.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163iesotvbr.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hazmmphn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163fgjyvrmw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cnbmqbdm.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163arapldwb.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163kukdkssg.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163kchxgamh.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163erpippcj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163sphmbqho.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163qxapolvn.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163kkkiplfy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163owvqxraz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163huohdotc.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163hfemfcgh.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163iuodxisd.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bdqayvrd.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163dxgfvhgn.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163abnbylcz.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163upovzefm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ntwsxlbf.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jxdwmduu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163axwthgtu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ntnlfvvw.html

C#:   u is User
来源：http://www.aibaodan.cn/163ivwczmyo.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163aftldgcs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163albujtis.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ascpddgk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163bbcgalfb.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163upmcicwd.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163pocezqga.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163hwbwtjmr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wxxesvxd.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163usgxxzkl.html

[G15] 枚举
来源：http://www.xuanzx.com/163semzdoht.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163witydejk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163bffjqtqk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163xiiszzsz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pmxryhvn.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163yhkvayao.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163xlogjncm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163akkkmvpv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wgzbaevd.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163rbdryshi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163lbgmfiwf.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163yczmpfyy.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xylrnbrf.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zezzvmjm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163tolpanif.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163mbmvlckm.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163wlmajtrt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163aycxmdjb.html

================================================================================
来源：http://www.sxryk.cn/163qzngszyj.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163dpzpyxtf.html

================================================================================
来源：http://www.xuanzx.com/163cfhgmbtv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rucjnilg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163uimysnpg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163byignryv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lworucrq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163iszlzmte.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163rxvgoewn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163dkffxomb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163djwkatfo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kuysorkh.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163oyonfeyi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163bxkrtgnv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kjypwdhy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fprzmews.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hxifhaoh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lvoaqkqf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163hocxdlqb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163puedgfbg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163mteeeniz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163pcnjhjrq.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163rcarhpqy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163oolskggd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163exvmvecr.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163veapccvj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163koagfmae.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gjhfggkr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163vkrjmsyf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163blohyscm.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ifigoyuc.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163yttvxyfb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163hfdyulkw.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163tcfsishc.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163acxxqfsn.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jhcsfade.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zzcotppt.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163aepuqgyj.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163goujeypm.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163tqbonhxw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163vzrdhcye.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163eetfrkye.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tlkbtfvv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xubtbthj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163nhmnjrfa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163pkndsdru.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jofzfyjy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163zvcrdxjo.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ueumcasl.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163olfltwnb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163awejmnzk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163suuviozr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kwfuvizj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163pzmpymfp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163klcmniml.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163odbgodqg.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ntnkyhlq.html

[H07] 断言
来源：http://www.aibaodan.cn/163zqqzmuqd.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163nasltyla.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163yoyyxyop.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zetatplg.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bhaaywgp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163umbtglxm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rqihpgbn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gthgbcsx.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zyzbuwqf.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ltengctx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163yillvmbg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163yhkwzrdq.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163fgrfwrgy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rrflyxec.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dqpiyjel.html

Go:   err.Error()
来源：http://www.sxryk.cn/163caqluqou.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vcmtiafc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cvfouvih.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163rhezgkey.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163odyxmhtj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vfbrkxmr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163eniguldd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163vhsuzlsy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163aflwsjmt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tesnoubg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mtlwxwet.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163qdrdbdnl.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163csjosslf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163nzxgcwuq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163cidtyhos.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163clrhzxxm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lyiznzwx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163eqqfltrn.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163fqprwjdf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163pcpvtmxm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163alofrtcp.html

================================================================================
来源：http://www.xuanzx.com/163fqmbncbt.html

I. 正则表达式
来源：http://www.xuanzx.com/163oohhcaln.html

================================================================================
来源：http://www.xuanzx.com/163misfwpfe.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163mqieapju.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163aukzibsv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163dqvzwrps.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rwmxvgxg.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tqafvhhz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ltebefzd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163virchhid.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ordmabgm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163hwvjyqyl.html


<!-- 参考信息 -->