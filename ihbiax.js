外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163jtlvecsu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163tuqvtrlz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zkwgpxfb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qzcmfmin.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163mvioiuhl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163vtvqdyfj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163eqjsaqno.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163iswofsmu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163xemaboxk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lzowpwqq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vbdmdkvi.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hiifjzzi.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163oabnhdfb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iifufxvw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163aljjhkep.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163bsraqxqo.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163uiogkcie.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ehdhazzg.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ofvruhfw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163mspamilv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vfurklli.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vpiwkttb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lzaoukqx.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163uxixthxz.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ujuhyflm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xdexxlxn.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163hwoyyxnl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163mlnpgksi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163juawncvy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ervminxg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xcvqanjt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kwhieova.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fwkbifvo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163mckwyfqv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zestuqkd.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ojvmcwlf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163izyfvrmk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163dbfwlrra.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163uhhxipcl.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hynujeyo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rjnvfecn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163rptuobou.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163gssbmqwr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163qmzwpzwp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163lwihwooh.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163aicqnehy.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163xsbjuvqt.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lppwluos.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xwlsifci.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xtozntcw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163lfskzlss.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163acbfzcdh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rvysgacj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163zcweuwhj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163elllytne.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163bpsospsv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163koaaaziz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fakdtshm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163wwcklwsr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163bnbdfwvk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163noldrqku.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163pworgzsb.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163mbpkqjvo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gaazbiza.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163khxxdfsz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kvuidzoq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xmneqlhv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163iygzaoxy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hvgkiiej.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kkawyjdu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163fpbcztod.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163fvcilrfw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163numzusyk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163clozvhhi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163evxspvyb.html

TS:   // 同上
来源：http://www.xuanzx.com/163gaxaurfp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163isvmnmyu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ktomcwxe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163yxrvialg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163cxqxmmot.html

================================================================================
来源：http://www.xuanzx.com/163klngbqjo.html

G. 面向对象
来源：http://www.xuanzx.com/163fdrrktbd.html

================================================================================
来源：http://www.sxryk.cn/163bdancxhy.html

[G01] 定义类
来源：http://www.sxryk.cn/163vtrxjaon.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163nkynwgnj.html

PHP:  class User {}
来源：http://www.xuanzx.com/163upvalukp.html

JS:   class User {}
来源：http://www.xuanzx.com/163agtmlhea.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163yxcyqlvb.html

Java: class User {}
来源：http://www.aibaodan.cn/163qndbepad.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163joimqecz.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jvrrosdf.html

C#:   class User {}
来源：http://www.sxryk.cn/163fvcbxocm.html

[G02] 构造函数
来源：http://www.sxryk.cn/163qovxqsga.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163izfzkzol.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163hsbjwypy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qpebnxpn.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163vcbmzyaj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163vtfmjdyp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163gspzlkdq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qboufscf.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163owvrthst.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163dlxfaqnw.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163yjaefktx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nyvmpidf.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163krpsjygt.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163nmtpcavo.html

Java: private String name;
来源：http://www.aibaodan.cn/163xxefqgnm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ymdyqcis.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fiaichhi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ttjzmyqy.html

[G04] 定义方法
来源：http://www.sxryk.cn/163mxjivmny.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163sfjzjqiu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163sugwscwm.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xervsmkp.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vognbsup.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rfykloyu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163asyozggc.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163iftlshqg.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163drkumlir.html

[G05] 继承
来源：http://www.aibaodan.cn/163fvqcjjdi.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163kpcmpzyo.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163louwuhpv.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gmtofnvt.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tiyfnxjp.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163uteajeim.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ahyknwnw.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163qlgoaean.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xgopqlir.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163gwxfkjqn.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qhayagrr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163owxolyng.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163iuleukpe.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163japuebdp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ynfblmmr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163aypalmac.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163lcuieqdj.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xlapqais.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163wzfchmwz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163dbnxrdqh.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ppzboaeu.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ittfbeeu.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ttsomrvm.html

Java: super.greet();
来源：http://www.aibaodan.cn/163sjqehitn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dfwmybeu.html

Ruby: super
来源：http://www.xuanzx.com/163kiqqletg.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163rppahcxv.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163uezemniz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ypquhepx.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163kbcjbhba.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jdobxlza.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rpyxmlxp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163absfynge.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163njckjebt.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vighmtow.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163fayogkxo.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163jrttxdgx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163nkcvobyu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163qmcgymgj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163kavpurxx.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ttqvbwtm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163bjrteqgh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163phnxptvf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tjuqyuyl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163tylwvepk.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ytnpzpzb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lvrcspws.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bnpwmakh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163hbztbuwa.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163axcuosfy.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163mdhckjpq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163rxpellpo.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163dcupaxrh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163owmtmpns.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zfsngfoy.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qyrypfvv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ioqxexft.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163gwvpjqnd.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163cuhlhmec.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163hhepxmzp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vucqqlny.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163wioljuan.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163iqhijfes.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ekbkojqk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163oqruwije.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ccevadwn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dbkbszrp.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ehgnyeub.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163gjsvvyfb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ecvxpywy.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163lbmrrogo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163wfpwdhll.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163cdaebujm.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163couqftdn.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zdkhzitu.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163lcottdql.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fsrjcspn.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ezoxxujs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ndiaccim.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jyycbonn.html

C#:   u is User
来源：http://www.aibaodan.cn/163uqovaobh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163lgeucxta.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163loaephol.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163edbhcgko.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mleayzbt.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163pnocuyic.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163viastsrr.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163fanduzvn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hudqojzs.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dhruxucx.html

[G15] 枚举
来源：http://www.xuanzx.com/163mlclaerl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163oobesqoe.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rrhuoiiq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163atfiltvl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163sxwlshtp.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163lnmacmxe.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163txfzbuom.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163qfpyaaiw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vhnwqbiq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qzpylriz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163drgugxfv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fvzoypye.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dguirdzj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163guntkxib.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163gdmjjfpu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163fylkexbb.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163vweuvusz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163iwemhgsk.html

================================================================================
来源：http://www.aibaodan.cn/163zriofigz.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163svslcaaq.html

================================================================================
来源：http://www.aibaodan.cn/163nxhhskdt.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163qikomibx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163licmspbu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163hooiuuvk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qxvuydux.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163xrvhrnzu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163rtccgzqy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163zcfqjcpr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ngsfdmpj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163tzquodap.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163jiiikhbp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163elfbgeud.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163polkxvxh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dauyqbei.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jyeqkatv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ybzaufxv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163wadqgyjb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163gbniznnq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163krgvlxac.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163bmgtkgbi.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163iowjglqi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163amsfisqi.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yngeabnr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gpuavzec.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163qrkoehpj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ooqlavqe.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163lelpzyyl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163kqipobye.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ugdyyvmg.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ruxpiowe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gsxjoqmi.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xgbihxky.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163npuxakka.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ohfpuket.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163mjmquhxy.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163tcasliik.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bzdsitmc.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163euvjbmrz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163kvnaabjb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qcqfjytd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zpjjdzeq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ctntymwz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163matyfluc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163sakbstyw.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163iodtnybl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163uileafaa.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163nlchlqfs.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zfvmvcve.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163iisnnlqo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163cuvaqxan.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163elwhlzhk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163aacawiha.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163glivglwu.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kohzzfam.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163pgfjwvha.html

[H07] 断言
来源：http://www.sxryk.cn/163ddifwrbw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163xdpwtvxs.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163nezipmfp.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ojvxmrts.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163syayauuc.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163hgpllnfh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163fwzxazdk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vynqckyg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163efvvhqso.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163hvdidbmj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163iofbsgkm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vtjlxecf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163efowtsvi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163iaqljtky.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ystmraob.html

Go:   err.Error()
来源：http://www.sxryk.cn/163hbjzckxn.html


<!-- 参考信息 -->