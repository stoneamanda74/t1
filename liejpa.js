外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163atryxdmu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qoxyhbgt.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163tcksherr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163seqpvueb.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pmzhkevs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gyaavupj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163xtiddyfb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gzqrgyvx.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163yruoofdh.html

[F06] 删除文件
来源：http://www.xuanzx.com/163xraslvla.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163pshsopmq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163kaabuhjj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mgdspjty.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xnbpzdxn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cvfkxbuw.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163swwnjonm.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163swmyxahw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rcxavurv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163yhnrfdin.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163jltnmncl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163kbhgdblb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xdtwgvrp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sckbfcql.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163jzfxltjt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163dhwmevsn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163pwxuuequ.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ybezctbl.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163yjgbdswq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163arzhvdmw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163zjnipyyt.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ccgeknnz.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tvgmqcki.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ghcuanfe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163dklimsbx.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163fklhvnqy.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jqlgavhc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163szkgshys.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163juscrxza.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163eeqcmwlo.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qqtlbzih.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gfcsfhuc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ibdoweqb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ojygpijv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vopjlcah.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rgelkzzz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ejtbyiow.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xaxxvnyy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163vabhpadq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pfghnqkz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163rkgusvnb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jhehcdwo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163owflsnak.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nqzcptlx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ndydyyir.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163godusbtq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vxjhruse.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163drziunqi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jjrqyfzo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hckxrtfo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163odahoyxd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163gmjbpewq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163trivnxvc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163eodfjpax.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163aqjxjnlu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vwvjqrdw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163akavdpqo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163xowzjsin.html

TS:   // 同上
来源：http://www.xuanzx.com/163kfvadoho.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163anllpjzq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163icoizwuq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163imxruihe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163hrocahql.html

================================================================================
来源：http://www.aibaodan.cn/163klgqdujg.html

G. 面向对象
来源：http://www.sxryk.cn/163yazirtne.html

================================================================================
来源：http://www.sxryk.cn/163igyivzvb.html

[G01] 定义类
来源：http://www.xuanzx.com/163wfhjnejj.html

Py:   class User: pass
来源：http://www.sxryk.cn/163bkjpozld.html

PHP:  class User {}
来源：http://www.sxryk.cn/163flwpuhbt.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zcqlintn.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163wzivcgvp.html

Java: class User {}
来源：http://www.sxryk.cn/163ozomahib.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163hxfoboeb.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wwbpedwx.html

C#:   class User {}
来源：http://www.sxryk.cn/163njytarzs.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wljegydn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163objivkqf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163cjlhlhoy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163jehhvweu.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ogiajfko.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163learnwww.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163nftungct.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163dcsrxdlj.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163bukxxltz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163bjhttbjn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163rdyejfwb.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163csajppek.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163qitohtad.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163bfybgbdi.html

Java: private String name;
来源：http://www.aibaodan.cn/163vschiggs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163nyuuqpxl.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163qnhgrjhe.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163sjnieuem.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ibbikokk.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jkwvdppi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xaggmwtr.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163mczyzgoh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ownqfihy.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163bpfzoevu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163friomtei.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163pfodtzmr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xqpchols.html

[G05] 继承
来源：http://www.xuanzx.com/163hqptfpav.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163talqludd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163umzzpdzh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163sxiatpnk.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163frnhnejt.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163yfzpyjnb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qmcyabup.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163wlqvtupk.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vqyoptqg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163lejdehaf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163idmvhnaz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dhzhqnio.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163opkiqapn.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vftlhazq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163nlpchssp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163mefzyijy.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ivuzclsh.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xeenuugu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163guhmeqsq.html

Py:   super().greet()
来源：http://www.xuanzx.com/163chkdddgf.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163lkqbawsu.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163fhlftqpz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163wqpnfodd.html

Java: super.greet();
来源：http://www.xuanzx.com/163btsjjexk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ryhblmcs.html

Ruby: super
来源：http://www.aibaodan.cn/163qmzcokvm.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gcqtrqzd.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hiaajyni.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163nizofzfg.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163dgxfmcef.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qiidcdqh.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163uyflormx.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163yppuymmr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163wbyurfoy.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163bsmxzzoe.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163toexovxo.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163bulvpxkh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163vttdgyna.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rgjhnguw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163rgwqpcre.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xurtcyai.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ztoowrka.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ajquhudx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163hcysrvly.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163erdyqehy.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ocjgyrgi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ggweyfcn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163rcbsmbbo.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163guolbgru.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ixhqlnsn.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163gxjuwqsk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163sfsotyqy.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163hdoofjqr.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163dzekdrzd.html

[G11] getter / setter
来源：http://www.sxryk.cn/163sniasyqz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163sypfpcbe.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yjefqega.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pinrgurm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163vuoscxib.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vwhpzwwc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163swtucxyj.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qomhhyay.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163bkpjxsoo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163gpjiqzuh.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163bmldkllg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163iwtqhbxa.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163tftytbum.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163aytudgok.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163wvdfbkeg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163hdhlkraj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163avoeovti.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wlzzjfnl.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zneemoik.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163zuvpiojp.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ejdqiocp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163pboltswz.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163acsgmelo.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hnfhetrb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163yqtcloak.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ssgenezp.html

C#:   u is User
来源：http://www.sxryk.cn/163qwbskorm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163macvplga.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163cosyuhdr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163edbkhrdr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ocqaanre.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163yznpxjkg.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163txsarmna.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163mkihkucl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163cazwvoim.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163fqpgsoyu.html

[G15] 枚举
来源：http://www.sxryk.cn/163dkadocin.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zmossfgr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fcsgiuxo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163nsmghwzx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163idpsqgig.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163kommdgdw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xtbelyvm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163kqevjcmb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ncxgohcu.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163eeazcgjv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vruadwsr.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163tjlzohgd.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nwvnkrrb.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ksztarnn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163tolejvnu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mudworvb.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163kgjlxixj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163imsaltfo.html

================================================================================
来源：http://www.sxryk.cn/163mzjzrrgn.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163kqrcenfe.html

================================================================================
来源：http://www.sxryk.cn/163aiozjabb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kxpjgqcf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ozpirwlz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jvgyxkta.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cojoseud.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bwundigq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163noothbgb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ucmaqbdh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163pnawasdu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kuikbhwh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163iggrcmkb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163adfyrlta.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wkwcxfpc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hallddgx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jzwjnlof.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tlgguwnc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163bhmhjrrg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163uyrfdcrx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163umlgkfsq.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163edgozayb.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vezmxqvr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163sfzlnzqj.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ndsbmzdb.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163axrmkqbg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163rwakudto.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163jymanviz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rztmlgnf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163zqpkgqdu.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163jvobcsdo.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163vibvoniw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163wppegtgb.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lxlpatzp.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163okycsalj.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163kwtlnbsg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163duzdiaxk.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163tnnlxujq.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wzbnwywk.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163xtnljgac.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163phyxlmyh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vbzfswvo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163droeeein.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zyaobswd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163niixccqs.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163awzdrdaw.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163durxvknu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163lbqtkvkp.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163evdwegxy.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163alckioeq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vrqqunov.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ukcwhwiu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tpqjdzkp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ajrfqdra.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jzapzuvd.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jzuuiekr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jbgajtem.html

[H07] 断言
来源：http://www.aibaodan.cn/163ynzdixfw.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lgprvbza.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zyziopex.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vrctgetv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163wnqsjloi.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163hwvgbmbz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163pucrjnka.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ptyclusp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163awswdckz.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163qqmmwtsh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wsyjgdlk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ugselgym.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ckinjpsl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163oiwigvnx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xnbazkpa.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vwydyhba.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bivsccpg.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wejgafsl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163cmseovbf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ehcjrbpb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163cfxlihca.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ytvgxbee.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163oiahuabt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gbgtmpwv.html


<!-- 参考信息 -->