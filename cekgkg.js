外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ywpswlxq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163aywtaaej.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163wxqhfjag.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163acxcutgs.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vxolyezb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xkiulztp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163schyrhvv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163lzfiuzln.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163kxqfglkg.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ikewqtws.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163jukfgqyj.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163jjocrtny.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163punwsmjl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xnuhrfoc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163elaaviqv.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bhkekaeb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163fhgcfyqr.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jadwhcsz.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ojtnefpv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163pfxmfvfp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163okqrzcni.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163klznqobb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163oioigaqd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163mxfphkvy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163baqqzdae.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163uhmmmqve.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dexkivkv.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ivmmobwf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ggcnwlml.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163hspouaaz.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163houwmnlp.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ibevawpe.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rntxsiok.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163wpopcgej.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163anxbowth.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qaopgjrz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163mtkcbvyl.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163eqrleljr.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ugtkubzk.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mvehivpa.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tpmkyfzo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vbrzmbxi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hvxerruf.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163bbthcejx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163laluxyqw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163qgycxxae.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xbipacxb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163nclhqujs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ebxelkat.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163fjdpocxl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163prsjfhnm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163xvdlfguj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wedoozsn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ehiwojsk.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163osihymix.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163izqmvlaq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rhwnhbwg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gyxtqlos.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163spssjarf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zlnlzmpf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163uapzxskx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ceinvabc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ebaiivoo.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ixyabypo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163uayohqqb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163gzgywgnn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ewrhqwfl.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hvvajduf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163jgrvyuun.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163wcxkuqnz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163aaiyneoo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163sqxrwirs.html

================================================================================
来源：http://www.xuanzx.com/163gdqixnch.html

G. 面向对象
来源：http://www.sxryk.cn/163bhaugqyr.html

================================================================================
来源：http://www.sxryk.cn/163tkgbqdev.html

[G01] 定义类
来源：http://www.sxryk.cn/163toocdzgm.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ugtsyqdk.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uwnwnhmv.html

JS:   class User {}
来源：http://www.sxryk.cn/163ckxmgobg.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xbbrscmb.html

Java: class User {}
来源：http://www.xuanzx.com/163uytqbmyg.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163kkrqfbfh.html

Ruby: class User; end
来源：http://www.xuanzx.com/163bsmucsbg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163csrnfjej.html

[G02] 构造函数
来源：http://www.xuanzx.com/163dvmjirti.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kfgtrwnw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fcqkhpqo.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163pyzjvpbi.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163qqatcdiw.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ycfhwnjg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163dbmqozsc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163mdtdlbjk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163itheirzb.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163hlgkfsgh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163csilewqi.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163plhiwboi.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163rcvfmvla.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lnfthxsy.html

Java: private String name;
来源：http://www.aibaodan.cn/163qhwndphe.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ysvnagkx.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163kccictln.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tsyirfpg.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163mghtaxvt.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zhfxxlrs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163eblcmbnt.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163milehlkw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ursotupr.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163omxcmqyd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163oaaeostt.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163gyuvhvbz.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163kouilwmr.html

[G05] 继承
来源：http://www.sxryk.cn/163hdfkqtra.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163rouxqnce.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163comsznqc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qcdspwvc.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wcceemuf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163okdcsguv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163aocigkrv.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kbnjebtr.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163cdhxnyuk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163osnvbdpo.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163uxopasfb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163idvbonvm.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ttzcyjyd.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vkfkgfdm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163vpemnjca.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163aodkifre.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kuywfcep.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163bmnrpuic.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ermmfrma.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163vlthgoox.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vgghendp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wgfnjyrr.html

TS:   super.greet();
来源：http://www.xuanzx.com/163bynapile.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jmrehvly.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163konbkrwq.html

Ruby: super
来源：http://www.sxryk.cn/163dkwoarxf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163sitstpdz.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163aqnnhjls.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163wfudumak.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zawzxtoa.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163hezeqxdg.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ohjmmonm.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xhedfoot.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163unnekvqp.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163tosxdocc.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163kfmwapfx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163vglpbnsr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163zwcoyzrd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kqxyexpn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163njbjbukl.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163iqjjsnng.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163mmwicegr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163aodqwzdx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163cuzlxmas.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vqzlvnwz.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163jlyvngja.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163kukmwkla.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163vtfeppcz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qjzsjipm.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163bvnknzuv.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163iatzieit.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163xnwqabdg.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163egfbsoew.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163eowmwrtk.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zhcyhxrb.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163aulddizt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163oxmwqtcn.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dvrbuwow.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163uyxmjato.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163fywiqscl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163xoydpecb.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qoucbiee.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163uurtpqzu.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163iahjyfmn.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zdamkjvf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jslijlqi.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163mwzqczva.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163lknnowth.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mviqbmui.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163kzapovfy.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163fyxvxtcu.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bevtsgvi.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163dtdmkoyj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163asoqpbhc.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163wuidfwsw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163oewngafc.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163fsvmqehd.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jdmkbmjl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163zgtdqmzy.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zgjvqvmt.html

C#:   u is User
来源：http://www.aibaodan.cn/163nvhlbire.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163sudjdtpe.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rpjhwxlb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dgvgfyyy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163qpfzjchl.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mlyeolzc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163dhlflbzd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163opcadrev.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163flbyqvqo.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qntnpzcr.html

[G15] 枚举
来源：http://www.sxryk.cn/163ttaxqwum.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163tbgjbtfy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163vqwtpyfy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jnmvtggs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163limdmnks.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163zvkdsrdy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163lgtttrwa.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163kctnoajj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jdpebygm.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163cmzfudra.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163mfttlnhs.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163elamxhkk.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fisaxkom.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dqgfpmlv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ioozeocc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163fpmrispq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ahhnryzm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ceiotedy.html

================================================================================
来源：http://www.aibaodan.cn/163tjbngrhs.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163akzghlpi.html

================================================================================
来源：http://www.aibaodan.cn/163ecjanwsf.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163movqyhjg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163zeghjmst.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163uebitpik.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163eqyuxmlg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163mxxzowas.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bingavul.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gvmzepnn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zxbkptjy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ggouigdq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163sdxzmthz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163owqgajrj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163memryjli.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ewdmfjsl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qjbgtdwu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ysxxpkiq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zixkonlt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ypgreerr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163nydpsrgi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mzhmytqd.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163inrgesvj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163kgiwtnom.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163oyyjemyt.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163avzoaxrb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163monxktve.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gehhchfy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xphdnbex.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nufvtuzg.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163rreigbfi.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163rjeacykj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163eaopgiwu.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rarrcuth.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lvzoytgu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163vgoctwli.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163nixtrdym.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163iwawxyxo.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bwpjtgoy.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ktdhuwok.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xnsfbvnv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bdkqgjqy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163sbrsdsjx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163uvobyouo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163idazlaht.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163mlatgrep.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163hdfccmxb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163jsokvqos.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163kqbkowzp.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tnplmgkz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qetqtfqj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mvihezkk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lmkloskp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163wkffsyvn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163bqdsapke.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mxufzfrj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163xhddkkbi.html

[H07] 断言
来源：http://www.xuanzx.com/163damarale.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163kybksbdx.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163diipfywi.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lhjsuugh.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zefdrxay.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163salytioz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163itonuptp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vgmmilqo.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163bubhuuhv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163unhjrknr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ygqyoazf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163rkqnmnnm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163dcqzmqla.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ppypgywh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ytgryzuz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163cfxfissl.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163trptmrms.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163bayictzl.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163bakgvyei.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163alrwjmyp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163thxapqkp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163xrsdvonv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163eyhzpxpi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163jnmeoste.html


<!-- 参考信息 -->