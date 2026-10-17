外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qhedzdrd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lijuxkkt.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163jecberxp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fhfzebpb.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kicoroir.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163joiakzgz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vencatpx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xahppsak.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xwonzcpf.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xfifwuxk.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163sodquqer.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qbltlevt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163udngqvbn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xqyqrbzt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bflggdkn.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163bofskvdw.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nhuvyawr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163wexllvap.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wugtbkom.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163bjrzzvnx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163mgmpvkkx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vcvjgqng.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gfounglz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163nfebglyx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163cmbywocu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163duyxnfkm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163atdaibpb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fcxrcqes.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fzjthqeu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jtkjdyaa.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vkpiezba.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ialjcuqe.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rmowkgti.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163lpsnrmai.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163uxemaoos.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163goihmnlc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163tzwpaqmq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163whkeakld.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ysbtmdqy.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rhszugsk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ggkhdluo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bkxcudjj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163nwubclxr.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163geqbhwzi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163atapfgos.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163zszmlilw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163moofmfzk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163bcjsnrte.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kvzupdvm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163typbvcge.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163yskbqcma.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163qpqvpkdv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fxxjvfwv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163gweauyuv.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ynlavshe.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wvzdyepn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163yczwfjyq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qoppafzw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tuawrasn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163sowypgyn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163jualfeyg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ytrppkvz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163mxsmpuwx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163wwlluijy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tmocxfgm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lolavviq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163seyeramb.html

TS:   // 同上
来源：http://www.xuanzx.com/163vzmicpir.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163lvyimnrx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163lwjqyagb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163vctsiyyd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163fjkbornw.html

================================================================================
来源：http://www.sxryk.cn/163utjqpdmx.html

G. 面向对象
来源：http://www.aibaodan.cn/163zcsxwcir.html

================================================================================
来源：http://www.xuanzx.com/163jgrmxtcp.html

[G01] 定义类
来源：http://www.xuanzx.com/163akypjtgx.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ifsjgbnu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163vzrsmnsi.html

JS:   class User {}
来源：http://www.sxryk.cn/163jnxkjier.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ibdgckhc.html

Java: class User {}
来源：http://www.sxryk.cn/163zsuwpydz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mwikajny.html

Ruby: class User; end
来源：http://www.sxryk.cn/163pqopoqrx.html

C#:   class User {}
来源：http://www.sxryk.cn/163vejtscve.html

[G02] 构造函数
来源：http://www.xuanzx.com/163orvojfph.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163iwvhkmns.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xzaxiakx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163saopnahm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163rtgktlnq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163grddrtpc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163njsmjfmb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ryrknhrw.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lsqezyrq.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163vjvdekpu.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163trwxurtw.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163zrwpvsrm.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mwbaxgzm.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163jxdbfgxw.html

Java: private String name;
来源：http://www.xuanzx.com/163pjfqjgbb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163bowrikoj.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163lfcexnmt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gaxnxggk.html

[G04] 定义方法
来源：http://www.xuanzx.com/163hozdombm.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bcoobdtp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163mrbbrikw.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ofryjtmn.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163thrbkqxp.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ueripkvb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ivqzhtse.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163addpjqns.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163pouggruf.html

[G05] 继承
来源：http://www.sxryk.cn/163rhcderry.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fevppliz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163hjtaubfk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163gunaxjgp.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ngiwsjee.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163reeztlgu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mcbsalgo.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kzqmohrn.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ieqciklz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163bsyxepfi.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ucrxmspx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ydylqtpy.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163botlzduy.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jovjxkig.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bxwhuhnu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163oolvtosc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163rvohirvf.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dvucdnyf.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163btgoixkk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hsqpbgfe.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163nsfhtely.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xvuseyli.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163qduniegd.html

Java: super.greet();
来源：http://www.sxryk.cn/163scfxvbep.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163obhncrdb.html

Ruby: super
来源：http://www.xuanzx.com/163mmdfyhwk.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163thindbyz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163zeojwnne.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163knsjiszf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163wrewchmt.html

JS:   static f() {}
来源：http://www.sxryk.cn/163vzmgvprs.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163vallgngj.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pdzghrya.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163syypxujb.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bkjqmgxq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163girdvsee.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163lctsjpfo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qswmnnbx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163tmmbttby.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fafsxftr.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163owihbcth.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163wtjnvzyk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163pzpiqbpz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lyxaiabt.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163uaentznq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163gjrhyckn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163azoeheqy.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mwksufjv.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163wtwopbli.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163phjirsui.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jtpptxej.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ongavdbm.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ajmhaquv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163lfcbdteb.html

[G11] getter / setter
来源：http://www.xuanzx.com/163udhrbphu.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163udlxgaaz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gpjqpsfx.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wnllqhic.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vzdntlhq.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163fvjvcjxk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163afyzcukb.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163gtboowww.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tldvypib.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163kwjmuusp.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wutxmdvk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zgldeedu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163zrdqqfab.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xpkajxnh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163spbgsqls.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163edzxldso.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163moymswtj.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163czwzrhyc.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163csfgtcvb.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hfxfeukp.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163onovfpsj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bdfjeqeq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dxpcpcin.html

Java: u instanceof User
来源：http://www.xuanzx.com/163iabyctrc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qxtfcpjl.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lryijtgk.html

C#:   u is User
来源：http://www.sxryk.cn/163ndqshzfr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mfdjmhac.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ianknoll.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163dwizrhtf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163zspjmzsc.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163cfwbwbqi.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163hfdmbtim.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163nsbvnqyc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xodjprgd.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163kvwwoske.html

[G15] 枚举
来源：http://www.xuanzx.com/163wkspvuvz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163obqxxaqs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163shpwwxst.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163kluihvlg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zeiqsrlo.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163fzeemuby.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163dwgjbstc.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163csxvpdhy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qmtadebe.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163cnjvzjre.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163nimpcrbd.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163sthczekv.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163yltbgrbd.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dlmfjnch.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163cfbdiuag.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163scjprzwu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vpamewtk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ukeuhaek.html

================================================================================
来源：http://www.sxryk.cn/163zylammrq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gpjznihj.html

================================================================================
来源：http://www.sxryk.cn/163tpqeanrv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gimzaepf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163eaxplrgg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gxzjnnrs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hextfgpl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163dhovpvnb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ansyrrem.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vpkdxgvm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163rbtjelny.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xduikowq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ypthezsk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163xjtbibhr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bjusorsl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sceecmxb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hklqovqj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mcdbvfit.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ugxtccvz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163cotegxdd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fsjwfmjg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163lotgiqdd.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xokwaazm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163mngjjmvd.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lfoyzpmp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jxqtlchu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163wlbanvpn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ndynsnox.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163nskpwcry.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pclhjhrx.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hryykbop.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163tsehztpv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163tryohbmi.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hictmboc.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163frarqfej.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163luptjrye.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163flllpvnr.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163wbnayrho.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qtpcgopv.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163lqoejflq.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163jqkmuscp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kacayczx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mjoougpu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ptjotffd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163otcuohpl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163iazislzn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cwcbxade.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163orlnpnix.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163dbwmpqom.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ituhailb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163yhlimvob.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163conampee.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jroeckbj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163hsstixli.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163spddbakt.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163whvqetfv.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ustbvdxx.html

[H07] 断言
来源：http://www.aibaodan.cn/163yhjlcrxi.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163jtjjkado.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163wsudzvkg.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163oafnamhc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mctzysfg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163jovtxjmn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kiynewte.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zrjcxykk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163harfqqiq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163shtyosiq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vagjjrve.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ipqwcdyz.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163wujtlfyc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xxboetqe.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163mtgrjeza.html

Go:   err.Error()
来源：http://www.sxryk.cn/163lbarhzos.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ayjwavoc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163crusxvyj.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163dqvavcng.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163loznvftd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163uznkpqhr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vjrxlkdb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163nvaybged.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163kdnugwol.html


<!-- 参考信息 -->