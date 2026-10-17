外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qropgggt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163nmklqian.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163eaolsmmd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163axyrksui.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uywvzanb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oatdstcf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kcpoxemq.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163buxovezm.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cqdyxxbt.html

[F06] 删除文件
来源：http://www.sxryk.cn/163pqrcbzsr.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vgzcwurs.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163slrfqjqy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163aluynqaz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ghphvfpv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kjegqiss.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kyrsvkxa.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ulcutlby.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163zrvxwzje.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lbzvrwde.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163whpedyfm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163rgrrnmmd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qxwnjtxv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ifscvfux.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xzyafdcx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163cuzsmwkc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163dgpnftye.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163nihmzwey.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163uvfsqcnh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163axwbtmhs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163wrmqdgoq.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ctvfqclo.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163alwpvxbp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pgciuqjc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hwnvjhia.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163hytnpkoq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163rltkyihk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ildgzpsn.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ofzcgrrx.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163apjimxnw.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163iygfkvcy.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ybkewkbf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ttskdfyz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nzdrmdlj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xualtynd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163soizdsrr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163iaxaycuo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xwdemxpr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163xydhrxjv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163blocfdfq.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fbimdsta.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163bvtuwoir.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163otidnohv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bfrgiwhh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gdfanqxn.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ucvsdxye.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dnnmkqkm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ckgjzkfs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163phjfailr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ccigklln.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zikbsrcg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qzlgqdrk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zhpoglfo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163uyuxdrds.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163uohegqog.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163gnhonujg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163pasmivsz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163jqqkufyc.html

TS:   // 同上
来源：http://www.xuanzx.com/163kgtmydvt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163edawicyg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163umztpqnz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163auqcmfpa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qhxmocgt.html

================================================================================
来源：http://www.xuanzx.com/163ezrrhpzk.html

G. 面向对象
来源：http://www.sxryk.cn/163apgslfjl.html

================================================================================
来源：http://www.aibaodan.cn/163yuwgoafq.html

[G01] 定义类
来源：http://www.xuanzx.com/163dbtduzzv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163iobyxgkk.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163yqsyskyl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163qrunxyhq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163wxemovmm.html

Java: class User {}
来源：http://www.xuanzx.com/163ztxjjvof.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jzwcsgrr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163tiqlzath.html

C#:   class User {}
来源：http://www.xuanzx.com/163fiuaudde.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163eroeneox.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163diyddjje.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163cqkjsupi.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wkvspdna.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163euuzlfae.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163nkororik.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qtamxmec.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163whbyxzrf.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163yvgfdglz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163viusonyw.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163izixwbqu.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hwajiubb.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163lhoxoukq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163erxvmrae.html

Java: private String name;
来源：http://www.sxryk.cn/163vzqgnmij.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163phucimio.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163oyybnbhe.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163hatsiuza.html

[G04] 定义方法
来源：http://www.sxryk.cn/163acpicagc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163stivtrap.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163bnxfqoki.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163alagaexj.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163nboahxts.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xlapbxok.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163mvoehswl.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kiydnbna.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tuhyflsp.html

[G05] 继承
来源：http://www.aibaodan.cn/163uwcfnbba.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ibwoiltk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163dhvtxrta.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163hlukwlur.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qwqdfony.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163womiswdn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163oeojkogg.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163yxcyzzbh.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163sljupuxc.html

[G06] 重写方法
来源：http://www.xuanzx.com/163lgpzdppg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mfzwlwas.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ppawvwqj.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163eniglkoq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nwhcxctu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163amlujoww.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163umdxpnmk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nrjdisvn.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163upbvtaud.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mcnognxr.html

Py:   super().greet()
来源：http://www.xuanzx.com/163gyvjccak.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wxpumspa.html

JS:   super.greet();
来源：http://www.sxryk.cn/163rmxqtbmx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xuavucvx.html

Java: super.greet();
来源：http://www.sxryk.cn/163dnznnkwj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163bncvqnff.html

Ruby: super
来源：http://www.xuanzx.com/163frxzgsju.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ykzwfara.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hvkkwqob.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163osooomsw.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163pewcbfbv.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bpctgcfo.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163zrwapgfn.html

Java: static void f() {}
来源：http://www.xuanzx.com/163joajqkqx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163joxdctrj.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hurfcdze.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mzleysea.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163vqjcqvsf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wlidtheq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163sgrrudkw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163vbhrckon.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163frwgjmma.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163madcrmmx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163okvbugjz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xbjbktkk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163adbrwofv.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hzzhwseo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jaucnbzj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163feicsgir.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163nokreblp.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163sijlcipo.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163kltrgpdw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163phnzicql.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163elnkvrkf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yszofybm.html

[G11] getter / setter
来源：http://www.xuanzx.com/163orhdgsyt.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pnjpkumx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fyvoukyl.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jyhkfccm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163rweiyxlr.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ogzadbgw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163vccgjhjp.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163njxslncw.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163geqoisyz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xzulqmip.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ossnwyyr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163lkwpmmve.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163jyeofehh.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163axabfyrm.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163daddrkos.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lbozdgkn.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163godrklwv.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163flxkfzaz.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hwwhkyzj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163cwulvhpi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163plqcbixj.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zsllynxs.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163kcefwbot.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163nncpildy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163kvhkzvon.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163thomntwf.html

C#:   u is User
来源：http://www.aibaodan.cn/163eagwosav.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163vcuklpln.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163rreqmymn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163mfxsivdw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ewsxpfbz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163khbromdy.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163zdxmbuwf.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163pfoeisds.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163bfpqixns.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163wvldxgxu.html

[G15] 枚举
来源：http://www.aibaodan.cn/163smwsnnsd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163iurutxel.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163yeuyhrye.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gvsmmzfe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wdloyexe.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163lpdrwutd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bhdwqjdj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163iruqpzmh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ynwkmjii.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163drmabkde.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hxpgqtbv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163bgcewdjz.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sfdfgugs.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gtqseocw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wmpvnidh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163gzjqlpky.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163nrjxmtkb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163gcwgbard.html

================================================================================
来源：http://www.xuanzx.com/163oqashkgb.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ulqmhdem.html

================================================================================
来源：http://www.aibaodan.cn/163xbxfyhbx.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cythcsxt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ggenlyld.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fpubkgcj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fqvreznz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163vfnvbabt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163yjeeqazi.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163qllflcwu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ggnyzcka.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163jpdsleoi.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163icrfnkjf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163vehohxau.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163svvcyopi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163htgzjcul.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mopyntoi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163foaeljvx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163wnkdjcpy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163tcocmxes.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163gnwqnmki.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163himkhriu.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163rpnbpjhe.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ycnfpzdg.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163smmdhscl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163oynloali.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163xotvxwgy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163wkribdwg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qenjnvpl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ynhywjsf.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ltceodgn.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dbuftlls.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qjvpzgmg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lsswftvk.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nirdwfgv.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163seonsozi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163sjodxzyt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163jobwmwiy.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163yxzyxfvs.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ynndnjfp.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163tdenryxw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163pyurfjzb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wlqgcwko.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163sncoyven.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163oncklfbg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163kaxmuhop.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163gqpfbzpm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163uzpkotht.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uktipbfy.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163twnhcerz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163abottshr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vigruxlx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163toqpbjus.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163bexpujjr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163tflgbhal.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163unqejlwo.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163bocjbcfn.html

[H07] 断言
来源：http://www.xuanzx.com/163dqwufvol.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163nhczmaul.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163mikdozrd.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163eitshgwc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163oujuaxqc.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163hgnsttcr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163siwkorqu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kxajdgoc.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163oacqebzh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163stmdgday.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163fbsrjxxk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163buroocug.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163vpbnfdrk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163xwqvjgyr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ugizgvkp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163iwedyhuw.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163eoalhaaa.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ufcfudnl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gaqpefso.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163tpgktkao.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163fdtbwpco.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163keaqvqok.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163dmzgdsgt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163knncdmkp.html


<!-- 参考信息 -->