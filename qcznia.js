外链999!wailian999！

[F01] 读取整个文件
来源：http://www.sxryk.cn/163drkykewd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163lntqewzd.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163odbgyzeu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163jismvvqx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163pufrnfqm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tknekijm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163bjkirvyh.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fwjqikif.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163rzmynezs.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163jwlmpsxc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163evmhxeta.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163gnixukru.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lhhspevn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vrmslmpc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sfjmzakc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bxpvbjdh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zhplmkid.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163lzmerugx.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cqierfpd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163slzqlrad.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rdcqgiyo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ptthvysx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vxgegvzx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qcbosviy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163xluuqytp.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qhtcqcnc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163djvjycrx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fnoaswmt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163palksxbe.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163fvcqjkvp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ejlywgzu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163owmqknlb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163sibzxcqg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ylaruthk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163icmnrmnz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ceeeqfhz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163zexzueys.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163atqkyqtw.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163agxxeacb.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wuxqkohm.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nariqixf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cfygitsh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163nbymtyjr.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163mbiicgyb.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ximlzwcu.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ejcvelcy.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163lmxbppvg.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qlanwtfg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vqbgxhzr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lpfofmcg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aokzohmm.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163susqohvh.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ujlrpaad.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fwwlzcou.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bbekpbph.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163iwodxprw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163oucrvycy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qwnatwjl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163xueybicb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ltyfzsci.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163slxxsckb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tznrduui.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163mpzuehuk.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ltxeyvmk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163zevtbfah.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163uyubcczb.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zulgifti.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dhlvfacb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cqmsoabq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163frsdbpzj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163rehxslgn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163anihcfew.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163dtyualxd.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163odmxuvlk.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163moyigorw.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mqzgpizc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163moodsyda.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hhccdask.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163yrvxevjv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zuvpgspf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163thgdsvgh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163isahacfm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lgvzsfge.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163akocphkm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lfnymrkk.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163vvqnjsxd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163vwhgzzmr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163scxqjgbf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kfomnial.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163zhvihkhs.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163lqblsnye.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sxljrxnv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ooyoxpzy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dvycftsz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163znknvjaj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vrrczayl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163gmcqhbwe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163buajsigd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qxqhzttk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163kqadvajq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ntiqquyf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163nonjkrcz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163zyfjmliz.html

TS:   // 同上
来源：http://www.xuanzx.com/163seevjfhb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tmyzkrfh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163axitfcwo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163uvjbumlh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hdpwovsz.html

================================================================================
来源：http://www.sxryk.cn/163pnjemkpe.html

G. 面向对象
来源：http://www.aibaodan.cn/163ajyvgvwc.html

================================================================================
来源：http://www.aibaodan.cn/163khkidxyh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163kxnqmurd.html

Py:   class User: pass
来源：http://www.xuanzx.com/163uzhlraxc.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163zythifsi.html

JS:   class User {}
来源：http://www.sxryk.cn/163ijdvtgpz.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163nmuveqjo.html

Java: class User {}
来源：http://www.aibaodan.cn/163tmpcmnhu.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163udfljdxn.html

Ruby: class User; end
来源：http://www.xuanzx.com/163bmiysirj.html

C#:   class User {}
来源：http://www.xuanzx.com/163dudpnupu.html

[G02] 构造函数
来源：http://www.xuanzx.com/163mlycwazb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163npctvsto.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hxmqjtiu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163myleltzz.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tubdxbau.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163cderijcv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163iekgpmlj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163rxsgmggn.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163qzeyzral.html

[G03] 实例属性
来源：http://www.xuanzx.com/163umppskbb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163btriylde.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163whcrbtpx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dbsfolcy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163csfvkgsn.html

Java: private String name;
来源：http://www.xuanzx.com/163kotfsbjw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dgrmelgu.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163oirhpkkn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163zeiikjal.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jmjrowkm.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qewxrxag.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163jszheucb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163slbnpnop.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163mfxktiwu.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163kapgndzm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mbvxjiqm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163wwpjzith.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163laltpckq.html

[G05] 继承
来源：http://www.xuanzx.com/163mumvkynj.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163uiqwgkde.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163qcjlzqne.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nccuifoa.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163sygncjab.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163palprdqg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163nirbydzl.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163sfwzilng.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163sckhaxky.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nfgngxtb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uzfxxphz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163oqmayokq.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163epxeezkj.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xtwkenfp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163oeqnlvdi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163bqtgytni.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163asivihsw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163febhchyl.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163irdgowzz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163frpgekfx.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163gcndasin.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163dfvousvu.html

TS:   super.greet();
来源：http://www.xuanzx.com/163msigrsrj.html

Java: super.greet();
来源：http://www.aibaodan.cn/163scikgrns.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163zmhlaumx.html

Ruby: super
来源：http://www.xuanzx.com/163asbagqve.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163dyvlnxov.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163fnuoidxs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163yjfcipwc.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ulwlxxdk.html

JS:   static f() {}
来源：http://www.xuanzx.com/163lbamucpo.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ynasihdy.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163hmjbfmoh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163lzyskadm.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163eopehhtq.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pwafarzb.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163xknyhaoz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163urkpiply.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bbxngksa.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163shwjuimr.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163lfjnmbly.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163wycznhbt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mpjuedka.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163bvrkxkxy.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ujyljhwl.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163aixvnpwb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wstxkiey.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163melywqwr.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163adxxhfzh.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163gxdpxsib.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163edrhmgrf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gpcvdmwh.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163uqwvjdgm.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163opblxqki.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vdtpmbyj.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163fjktzvfd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163viookosn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163bageopbk.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163giufdhlp.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163yxzhdnak.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163pvwwmrcl.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163cyiyefxh.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163pwaluyzq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163vhiscwul.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163kanrfuns.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ydgmesoq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163apblmjei.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163fopmtqqm.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jdmivash.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163peeecjnb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163navsjtwf.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163guxqyron.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163uvyvxdwp.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163imtqjkye.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ohmmwrwj.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lrncrnnf.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163mlrvlaup.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ixuaokgp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163mhxaqetr.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163piotqvjg.html

C#:   u is User
来源：http://www.sxryk.cn/163hryhpfoa.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163sqkhicys.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163gqvdqcej.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163odlrdrlp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ozxrqdbo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xybovxzp.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jmrbpgol.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163firuqxaj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163cnkzkrfb.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163taiieabh.html

[G15] 枚举
来源：http://www.sxryk.cn/163meubueva.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163swlscfdh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xvnieaao.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163wjmbzint.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jhzkkurp.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163qyxxaxny.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163vasvyezf.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163isibvtxd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bxwqwpgw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ezoywwan.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163xgsptczu.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163obgebzgn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xakxhaeu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163nizmlvax.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ztubgjzh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ymysntsy.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ehgpojzg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163adjyttlc.html

================================================================================
来源：http://www.aibaodan.cn/163xpuynxsv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ficojnec.html

================================================================================
来源：http://www.sxryk.cn/163ggiimptx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163zwjgsllp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163lyfjkefc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163gszgzptl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lacpuvbk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ntudhnqy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163biwjnddj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163eeftqidf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lmzbhlja.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163sjgfpvtv.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163erhnuwax.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163hhoftimb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vnjiscsq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dzwuubmr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ewtsdjzy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sxqgrfua.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163fklxprpg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163xfrteelb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163uyztbwxz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163fxfbxrsm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163jfvgcuwl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163atsmkqdl.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cbfudhoz.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ulfjjhrw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ramfedfa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163pcccppjb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163apiuxpnz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163juyeyahq.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163oesycpgn.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dwpopxws.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jgnushwj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163opqprwom.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163swphnzly.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163dtzbmgfk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163lqxjtmxe.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163hnbqdjem.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163oytnqktj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163drzlraox.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163eoplnzlr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wgdmzpmq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163njgygajk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163epfewfyz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163uqfekqwu.html


<!-- 参考信息 -->