外链999!wailian999！

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cvgxmifq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163erbzsvco.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ieblgdna.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163stcuujar.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rwyxckod.html

[F06] 删除文件
来源：http://www.xuanzx.com/163zeosktcj.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163gcxkpldq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163fhgpeioq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xwfmhgts.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ockfccpw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hhfectqr.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163kkkzktmt.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163dmtgrzwe.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rsjxfhna.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vrrgyklt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ogwqotcs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mzkfkdgj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rzbsxvkk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hzsovqli.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163lenzfisd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163acqnguuw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163jgbetsog.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163idzdjzpa.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163limwlbmo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ydtwdsqc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163gnixruck.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vtveirme.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cblzmkst.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dmrvztyj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ssjfqoiv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163zxgdualu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163dfjzcutw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163escfbfff.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163fkovvjbt.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ezkaqiqk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dvxvaovk.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kyhmslwm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xkfwxaxa.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bfebwaig.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jifmpapi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163kjdopphd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nlsezame.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zsantdzj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163wctadras.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bumsfhng.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ihcnwkps.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163dlvjpmji.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ljekcggk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mggvkvvc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163bobhilbv.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163rqclkqfi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ctgwquue.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163herhrcnk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dwrhmvmv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xmarulvl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163saexohse.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kyncnrze.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163deiguqoa.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163vgymxxmd.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tpbxemfe.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163laaigngg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163axwadxeh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163oysujgzm.html

TS:   // 同上
来源：http://www.aibaodan.cn/163jjcndquy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163nnxvywxs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163qciiafzc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163banzajxy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163vndwiamx.html

================================================================================
来源：http://www.xuanzx.com/163wlvjgxuu.html

G. 面向对象
来源：http://www.xuanzx.com/163mmksqivw.html

================================================================================
来源：http://www.xuanzx.com/163jcmrzqfa.html

[G01] 定义类
来源：http://www.xuanzx.com/163yurerrck.html

Py:   class User: pass
来源：http://www.sxryk.cn/163mmtbypyc.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163tfdfdlaq.html

JS:   class User {}
来源：http://www.aibaodan.cn/163mhvdrxkk.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jbwzobkc.html

Java: class User {}
来源：http://www.xuanzx.com/163yzecgibd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vtsbeiyl.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163cpuzllje.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ighpymak.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163gwprfyti.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163vuvxvlqz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163gaqqtfgd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163xiqalfor.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163actkvkvt.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jxzfenfy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wrtelima.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163peqkzwcu.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163dkshdmrc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163wxlvighs.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163fbgjuyzi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163pboooofn.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163quyummdy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163zssjzaip.html

Java: private String name;
来源：http://www.aibaodan.cn/163gurksivv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163jyipcwef.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163vpqejsgs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163bxtvziex.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xeppchez.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163rguxfzmh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qzlfiral.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ndpcedha.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ipennekq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163fihtxlls.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rktncdxe.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163iysszfox.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163twjdtvbs.html

[G05] 继承
来源：http://www.xuanzx.com/163poscposi.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163qlvqefpi.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jwhkpyrc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163efwjqqta.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163epmhgjzs.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163inpatlgj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163khvcwtth.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163twvfusvn.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163novnlnmv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xcmcezsd.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163eipeyogd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xexparue.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iiflvpwj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tonfcerx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qbciasrq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163cejkrfnd.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163desyprdv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163jyraocgh.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163huotdmjy.html

Py:   super().greet()
来源：http://www.sxryk.cn/163tgefjpum.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kpnikety.html

JS:   super.greet();
来源：http://www.xuanzx.com/163gydpggsh.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163kxyzpiyw.html

Java: super.greet();
来源：http://www.aibaodan.cn/163oynxlidm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163wsdarhaz.html

Ruby: super
来源：http://www.sxryk.cn/163ewxhsylr.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163uncrilrf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163shbqgqgn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163qrhgbrgk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163vfvjqlqz.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163gtrpycfo.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163rpbktrcy.html

Java: static void f() {}
来源：http://www.sxryk.cn/163dkmzdtzm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163suzukxmo.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wvquwdhv.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ihgwcgqh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163npptqwqe.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163bxwenjai.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nrjdhovn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fvokprcq.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163mkjqwvrd.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dtiftygm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163uvwarihd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163suuqchdk.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163cdiqmvaa.html

[G10] 访问控制
来源：http://www.sxryk.cn/163yebjlooh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163dfgfvkgs.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163sgpmbjvx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xmcveixl.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163gcwoohsz.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163myijcgir.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163tbffupju.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163stjhnmih.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163xbtzxuiu.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ahkuepfg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163yenigzol.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163hlngmidl.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jzunnlio.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163mxqrqnlw.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ohhtezjc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163szsbmpzi.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163cbuqmvgt.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163cxwpsabf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qqqbbrlr.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gulztade.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163beydrbio.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163utkpgjdv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xrmomjrl.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163yaepatvl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ocfxosqk.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163dpnsyfhk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ytolseax.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ycvluyxd.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rvlmsgvu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163cxjrmygj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163pdjgnndj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163hshbgrgj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163pycwodpc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163chlckxbz.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ekjjjhjo.html

C#:   u is User
来源：http://www.aibaodan.cn/163yofvfpjd.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rxkueywx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163cbvaoypr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163lwsfvnuu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ykdvtvfz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ioptimka.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ccozizdf.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163quukgqjw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163optndijc.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163wddphovd.html

[G15] 枚举
来源：http://www.aibaodan.cn/163dvxvaphy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163pdskolxf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163nkmqgqte.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163xybzuwwx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tvlyoujk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mekakrag.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lozjbawc.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163eireujxa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163rpveyrws.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vyvfvyib.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163dfpsrqmd.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163omstwton.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dqbplumb.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rkxaqnej.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163azyokjzc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163fezcganm.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163meqtyxmi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163qqpriduo.html

================================================================================
来源：http://www.aibaodan.cn/163lbbqgazb.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zwdkefjh.html

================================================================================
来源：http://www.aibaodan.cn/163kiipcfen.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163gbvcioeh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163rslpzgld.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163iilzdtds.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163mkbidzns.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163chwhjkmd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jlxbtieb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163bokketji.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163shwyhogr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163rodudeaa.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pnyeotgw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163wiceyayg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gjlashse.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nwcxkbfv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fjxoqmyt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cxhdgvwy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163aujxaqev.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163idpsukhf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163jtrlethl.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163anhepxtm.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163exgzqbnk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bngsbwnr.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dxwfxdyr.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163algxixgr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163qrsskyde.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ovtqpdqm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163bzgagiov.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pwgancud.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163dqqrnlaa.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163pnjgaxhv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qfaddpgj.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163uamslgwc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vwpqwukl.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163whafwopk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163glnspcpt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163pdjcgfhk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xnsiwhpe.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163zmefkhup.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163jznvqarl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163rniziiko.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xugtrize.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gytbpigb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ioejxeho.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163iohjcbei.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163bpnsdfno.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163eohiyspw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163puhhmnwz.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mpgxzuxe.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rtekrxck.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lkugomam.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163txpoxsst.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zzguwlem.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163atgstdya.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hwsqtigg.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ipurjble.html

[H07] 断言
来源：http://www.xuanzx.com/163rnvjvkda.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163izjsbpmx.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163xrxevfph.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xxqndfea.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bqxrqwdu.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163eazldytd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163qqldczgl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163bsqhdmtq.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163efygdzjk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163mgbmitle.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xaokqqtl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163aumiecnh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163tiadxgpd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163mfpufvgz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163cjlvhplw.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mbyntphv.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163lhftxlnk.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163abgqnbfh.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163woxhyysg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ghcvcrpn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vqlyqhyx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xsxinzcd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163kwwonmbg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ibrmcefy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ogelkuyn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163attgsphg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xglvawsf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zfrjgmvk.html


<!-- 参考信息 -->