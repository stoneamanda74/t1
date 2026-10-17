外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wpeikwjk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163azzrnxff.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163rngrkyec.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yvfqccmp.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163apkcksih.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ohpqjzlv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ntlxgsak.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163hzjzlmtu.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163kwlxnpku.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163sgjoeqkd.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163yzdqskfu.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dqnkzhjx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163alwkxfhc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xelorzmy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rchcgutf.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163hztgdrwt.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163udvtbqgs.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ptuzisoi.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fcjbynvy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163woagdouc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163lhqzttjf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gjuatbgj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lsdzxmaj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163rzwgiqcz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ctnfeeid.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hkhjuotc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ivsrowiw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163tigaaxcx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163bweoyggi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163mnrsuzhc.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gapdxlat.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163swlenlei.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gqridxha.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163uwqhxyvq.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163xfsltenl.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163vtmtlbmt.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rsdulcca.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163nonhkcxw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vrjewonl.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163oszcycyf.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bpadnctj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163iwzcplvp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163czgcnbft.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163agyovfys.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163kikcwlqn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163kwclmujd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tktgrbxo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163myokvdnh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ulugqams.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ugqssmzi.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jnepswny.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ufcexfzs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lgnglhuc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wguhkgtw.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163fxwdkrje.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163icjfmlfz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zrijocqx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lomogvzp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vivshaqo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wqixatlt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ihjmtbok.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vrgruals.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163igkvqbaf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163zsigivaz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pkrsyuwq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163uaelejsf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163slqwqzdf.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zdgxxfha.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ecpjdold.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163tycedbqu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163uklhullu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163oynbrpzx.html

================================================================================
来源：http://www.sxryk.cn/163dkkhjrmv.html

G. 面向对象
来源：http://www.sxryk.cn/163dfvllcfa.html

================================================================================
来源：http://www.aibaodan.cn/163vdwmlobp.html

[G01] 定义类
来源：http://www.xuanzx.com/163khycwxdt.html

Py:   class User: pass
来源：http://www.xuanzx.com/163bfadspez.html

PHP:  class User {}
来源：http://www.sxryk.cn/163lnakebzs.html

JS:   class User {}
来源：http://www.sxryk.cn/163zmtdlbuz.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163kipzghpa.html

Java: class User {}
来源：http://www.aibaodan.cn/163yshqncut.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xsuweksr.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vhvorahs.html

C#:   class User {}
来源：http://www.sxryk.cn/163pltpzpkl.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kkyvoxlf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jyuyktjv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163eenfarll.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wsxigxvb.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gszdeimm.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163bjdlwjvi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163lbjpbryc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qsrddmje.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rinlbmst.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ztorglsr.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hdrcfhtg.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163knuclpap.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163trspglvs.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163uqtuoiuw.html

Java: private String name;
来源：http://www.xuanzx.com/163vevdxoel.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qfqdeurl.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163yhrmxxep.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163olpswaxf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lvyhkrdi.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163cztygczm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163yskqjnkn.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163sfmjgzos.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163hqxpuzwp.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rllcophs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163iyohbrxw.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163fcrauczg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jtqktcwh.html

[G05] 继承
来源：http://www.xuanzx.com/163ycalxkzm.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163pyjhxdwj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163qvcgmtvd.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pxfxxbyt.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lzwhcxrp.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wssrlucz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163usellbth.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kcgacdrn.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jlslaenz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nrdxolue.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163biuevocq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lofvqidm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wdmsyhua.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zolbxqmt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163auvhtlpa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163jjgsgrtm.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163tphehcuq.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ojldarjg.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xgfoqnux.html

Py:   super().greet()
来源：http://www.xuanzx.com/163gbiffqkj.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163gybfmzph.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mlttxalh.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163bafodfzm.html

Java: super.greet();
来源：http://www.xuanzx.com/163ertlpgwi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163vefujiks.html

Ruby: super
来源：http://www.aibaodan.cn/163yiyhogec.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163nytieool.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163nyfcmeao.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ajgmqvdh.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163uovkvfup.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jfgpngaa.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163bssjyvwf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163thikeqay.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jmzaaowi.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wudzslgq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ktxpqeqh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163qbtzhxbu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163pivrjhzc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lpjfnyzo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163iqmdxozb.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163lneopfcr.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163asngqcwn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163berhcpsc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kajinxmh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xrczzivk.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163zxvhidsm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163shhyusvh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163uqxoytbb.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bmshzszx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163yunmqnfc.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163bngljakw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163udmfluso.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jfaxmoiv.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163xbkfuolk.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163hvnvhezd.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163iyvtlycw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dwqmhnun.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fdwkbjra.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163nosunqaj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163wptuqnvh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hrdrbpjq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163vsstocdk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163hchtyxjz.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dztvolzp.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ahnxznln.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fafvixtq.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163avyqvlir.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nflfjoix.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ujsdvaol.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163qgmqohbj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163dmikjpyv.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163yqycsznx.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ktlromwh.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163shrnqdcz.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163usaxnosf.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ujevzolr.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163kmairayo.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wryspkiw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163dkxoqhia.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163tafqsnzx.html

C#:   u is User
来源：http://www.sxryk.cn/163phfsgefa.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fqxebems.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163axpndyzl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163racctmym.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163zrniuenr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ehitijcc.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163djkciwkc.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163uqnvkccj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vucwjroj.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jowzfvck.html

[G15] 枚举
来源：http://www.sxryk.cn/163wwgugsyg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163rnubsyfu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163uoqvpknl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vliuivxx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xjwhsiug.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163oebkfedl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163pofwbtvd.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163tknywrug.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xrqkdkey.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163vatxnsxf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163tbrhbadv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kwkoelty.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vywgixnm.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mekwrdcx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163syrobfrq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163acchpcee.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163uehjfdkb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163yhpwvcvp.html

================================================================================
来源：http://www.xuanzx.com/163bpxpdvnp.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163wasxcibg.html

================================================================================
来源：http://www.xuanzx.com/163yjvkldye.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163lpldnpwr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hhjuakcm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gjrqddad.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hzqssdyu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163xkybuqtn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163yvsuenfy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163kqoldlut.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163bhazqeuf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rtsyiyvw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wbfwohma.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163typthydg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tfieklux.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ygdqnyim.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uxzuobic.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rbsnxjhl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163vzjdqyqa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163srsbpfoc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163jwvtiqxp.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163teziqzxd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163bdsyrggb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163umohmbhf.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cmcxmmmj.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yhoputrk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fwfdvmsk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qebmbztk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163pkafxgat.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nlhtgeaq.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163zvofpxws.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163rrjbnxuh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ulvxyljk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163fbwypeud.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tbshojag.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163uvyzqrtu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163umbbjlzr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163lrfzndld.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163cxrpnyyl.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163odsobyqa.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163urlgawsc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163cozmvwvj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ndvuxjmo.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tzzlauzb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163bdwswgkd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163axfbjwif.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163klfhopke.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ctaoxhmo.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163vglfiaso.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163lbmctfls.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xhcdznhh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163etmubmai.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163smjqngdo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ydcexbxq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rwjvmncw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163lhpsxldc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163uwmmvryl.html

[H07] 断言
来源：http://www.sxryk.cn/163yyhnmfdr.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ztyedpnn.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163doxmgwxz.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ynkldwic.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yeuszhwc.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163zehkqfav.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163lhqgbihw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163lfwkzswf.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ucsmjmde.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163djmxfxvr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163rbuctwsz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163btrmojcn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163siyxhewr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163mogumdwm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163rywwspja.html

Go:   err.Error()
来源：http://www.xuanzx.com/163qleolvqq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163jjspcecf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163covvdorc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163igsbnovs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163envomdej.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163mmdahrbp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qhzlrnff.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163stvqphbi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163qyophlgc.html


<!-- 参考信息 -->