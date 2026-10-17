外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163fnpjxrpi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163blnhechv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163desasafc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163wstficun.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sydjuzih.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ikozkyos.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163txnvbbzh.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163kcsvvlpf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163aimgxyuf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163cttqdmty.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163beyjwlav.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fatfksfq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163juubohea.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163orcrxvww.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163oeozvtgs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163bxstiuig.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ghesguan.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163dfgegula.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163kyrqtwax.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fssuemfk.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vwhyvloc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dqjkiuaa.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163gsyawxwj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mirxoebe.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163rmcwqqbw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163hzfgcwin.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rkautnke.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gztfkyuq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qanqplla.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163upappknx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sspszzmu.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163htupfciq.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ecgfrysc.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163zrpcctjv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163oxuvqamf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163nsacezak.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163udcnmili.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jkqnpzua.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163iqetwuxc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163hqzlmsrr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163skblrhzj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163skvnghuj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163yinuotpi.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ploxqzbo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163gtloxbnm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rcjjbopg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uqkzjilh.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xsrggvnp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rrjjdqhy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163wjorezzn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163elyutgzv.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163cvtabeac.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xtlbcdny.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163vrdqdodx.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163sozihmje.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lvqnygmj.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mtwwjuyi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bmcfyasj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163dxkazdte.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163mgrfscpx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163uwteztur.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163assrdncs.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oopehozp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163fsvxmkze.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ztsannge.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163vqrcowzv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163txasdimi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163reukihac.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bodcsslt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vpwyihvq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dlylpqgy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lcjkirdq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rjejqxfz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163flxdusrd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ywyykpvz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lbjhrxst.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ubwdijqo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163foveoxyy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163uexmvcjw.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163auhynlck.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cqttfcgj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163fbmocksg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ifnukckx.html

TS:   // 同上
来源：http://www.xuanzx.com/163rggayqmr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ftgeregu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163hzyxckvm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163optdfpha.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163zdjcmzjo.html

================================================================================
来源：http://www.xuanzx.com/163gjrmorya.html

G. 面向对象
来源：http://www.xuanzx.com/163pzatligb.html

================================================================================
来源：http://www.sxryk.cn/163azqbkdxh.html

[G01] 定义类
来源：http://www.xuanzx.com/163nchiigsr.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lqwanchb.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163yjznzlpk.html

JS:   class User {}
来源：http://www.sxryk.cn/163gmusdlcb.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163spjjxxvp.html

Java: class User {}
来源：http://www.sxryk.cn/163rxuhqbme.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163effydrqn.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163elnedkza.html

C#:   class User {}
来源：http://www.xuanzx.com/163wmekpjjy.html

[G02] 构造函数
来源：http://www.xuanzx.com/163nhzpiney.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163sdcmiqcp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jdpvxeyj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163naoxzcwa.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163eybjweym.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ociawjxv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hxohxnwe.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163oagmzxqn.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ecjzxqlm.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ujcleehp.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wrhsrpox.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ytwhoxqg.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qpnmshch.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163gxfcengl.html

Java: private String name;
来源：http://www.sxryk.cn/163licqeefa.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pntkhmce.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ppfbspbq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163dvxwwafc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163sjhilfxq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163qiidbtdl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163vzmelpom.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163hkhnwajp.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163enarrwpi.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hwalzata.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163rrchvcpk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jsslirjy.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163yvnowkxc.html

[G05] 继承
来源：http://www.xuanzx.com/163khlfohnz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ibjtgsza.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163zckozixh.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jjdmqljc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bkgdnqwn.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ainsqwxg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163gbioyzlo.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xscbbpfd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163yjgwkogn.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nubjstod.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163avnfhzll.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163acfumanx.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163oizdlxcv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xyfcwqzd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163thokrevt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163wtjwrbpi.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ppzohckk.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rgagffjp.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163nvqrisao.html

Py:   super().greet()
来源：http://www.xuanzx.com/163drgxvtpu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163zmotixwy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163mascdpiq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163iwonljdw.html

Java: super.greet();
来源：http://www.sxryk.cn/163dsmvjsqb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163bqitvesx.html

Ruby: super
来源：http://www.aibaodan.cn/163lbvualjf.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163uyrapouz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xfcqekkj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lmhdvwwb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163rkkxwbfr.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wzthuevc.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tdmhvpet.html

Java: static void f() {}
来源：http://www.xuanzx.com/163kvnnbpvg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163hkwirkew.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163cyqtwbpx.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mcwyeyvy.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163dchcejaw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163tzdkbrtt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zkrvowxf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163gidfkhky.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163dsdelmty.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163buekzbtj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163koplghyq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163yqymjaul.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163hzdiihlu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163vthspzxc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163yrzkhkov.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zubdnnhq.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163iynrlqzb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163qxuwsdfn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jmeajiyt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ogscuzeo.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163wmxutdiq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163jmcqmpic.html

[G11] getter / setter
来源：http://www.xuanzx.com/163vmkkqaqv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163rmlnefrc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bdqxijaj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wngerkpw.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hqnisgru.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163fcjzdces.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163erqsnjen.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163sklzhkaz.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lgduysfc.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xenuhfef.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ipsqhros.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gqxdmaxx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dsqeicym.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ulxpbfis.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163rjmlwtcn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163oqtysirl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163xdfnjkiv.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163abkrewds.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163gfbepdzy.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mbuwcaif.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163yenfopbi.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ppgzybsj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163nzferfcl.html

Java: u instanceof User
来源：http://www.xuanzx.com/163amlsazci.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ljdajenl.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163citwltkl.html

C#:   u is User
来源：http://www.aibaodan.cn/163uopfklhz.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163namgmgzi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ehewrwns.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qpuxghcg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qcdvcouy.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mwptwclt.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163gakqtxtc.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163oxhukihf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163fwnvqwxe.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ilkdksmz.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wzaobthx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163vhewkfiu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163maiaotlx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163isbverei.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163opmivaxo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163whlxxtyo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163gdrumnya.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163dzwjhunn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163okoubred.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163vobowhjv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qixdzwuw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ovsegihx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163oxfvleni.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163umtbjvzb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163oatuakda.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163swpimnzz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zzjiqjun.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163zrtuuabs.html

================================================================================
来源：http://www.xuanzx.com/163udabljna.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bbdimsjr.html

================================================================================
来源：http://www.sxryk.cn/163gijygdmr.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163oxconyoc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tphimjag.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ulqtvztv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163gtaorisx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163fmqijbea.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163mfqsympy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163otaumgtm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vkmohauy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163blksqfym.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163yufvtbba.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mhgzkgtz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iturbjgs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tmxyuiqe.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hdbgummh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nqmpwwhq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163rchebueb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163uziyyuys.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ztrfkbsk.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zldeqjsh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163kcpssawq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163edzibttb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163oostcqrq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jjwesvye.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163idvolgll.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163utelgaog.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jbqudqpj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163sbuyjmug.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163jfmcsxvk.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163whrvdyua.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163dayzoqii.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ejgwzxlp.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rmoqdoeq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163iizrkscj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163yvitvkih.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163htiuqntp.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hfbcwvxw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wixzzkzj.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163vuaybfio.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xwligqlo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163lwqlbkpk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163iadhblmm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163jzvvzxww.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163aboozeag.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163htdbtsrk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163srhltjbr.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163pxujahwe.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sswtbkqw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163sltucxbm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ryrezlsx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hpbuhewb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zdeubyty.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163bvrdyaoz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xpystcem.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163qyktojad.html

[H07] 断言
来源：http://www.sxryk.cn/163ktjfqpad.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163jkukbgii.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163dqgkwzeb.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163odpjdgsn.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163msrmwgib.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163yjoknwie.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cklfhwpu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163dguwqjre.html


<!-- 参考信息 -->