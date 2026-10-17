外链999!wailian999！

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ywbqeqlh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fkmvsadf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163rjqstynt.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163bvroaqkw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hlsvuxhr.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ynpmftmq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163chjgkqwi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163acsxipkz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163txyudkbb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yekjikja.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163iepcskhm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163homysvgm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163unazulbb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ykgfncxw.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163dsrfytfi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sxqyedlm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163upzlqhym.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vahzdrek.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nhbmzjpl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zyfixanr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163intfymry.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kdekhhlp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jpxhjmwq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163dqaddzgy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163lymxjqdq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163pdtowtio.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gtqgvhqx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mhylouym.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163dnaredmt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163vficazox.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163yeastfgu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163oxjuhsed.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rnbgicbx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163iudjprms.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163nhgrjamy.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163efavwwxm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gvhamsmn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zalvzuvc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163coztxxpj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163onftcrpb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163iefeppvv.html

[F06] 删除文件
来源：http://www.xuanzx.com/163cklseiin.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163btdpykti.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163dvggvndm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mlqurpok.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fcpvxbha.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163stttikmx.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163flejwyuh.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163lihxcoma.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ifdnnait.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163rlfmzxff.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163gegwmjsd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tyjyvhvr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ihamrhii.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gumkfctr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163pgyzdvtp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163vrjzxiug.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163wtolweuw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163rukdidqg.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hbdsxbtp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ntedcpzv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163nytmosay.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163undztmuh.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pxojvnia.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rohgsoza.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ivbvinqe.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163kzsnsnng.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ekvhszvj.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163hnigdvzz.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wunkxsem.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uenjiilc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dpblexif.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hgcvwelo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dywdhvwn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ntnteywc.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163cbysfzwo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lnwmmwsr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nsntdzvq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163quitqgwh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163xuqksdwc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wktmqdwl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163rnnkeayl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163vuwguyqa.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ontmshnh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uhtcjhll.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163jtdjrubv.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rhxspwsd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ytgtbnfb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163addeznnx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163riukeaex.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fiiarcrw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vguzpzlh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163fqatzwon.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bqlprvue.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163kfjjtimz.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163dqdlityf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tipivqgs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163imflwfix.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163lsactrdp.html

TS:   // 同上
来源：http://www.xuanzx.com/163ctwiqbls.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163sxhfsmow.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163pwwinvdr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163rwuevaeq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163xfyvwbjv.html

================================================================================
来源：http://www.xuanzx.com/163rkvoackk.html

G. 面向对象
来源：http://www.xuanzx.com/163aawwllhm.html

================================================================================
来源：http://www.xuanzx.com/163gcymgokj.html

[G01] 定义类
来源：http://www.xuanzx.com/163mcnqaces.html

Py:   class User: pass
来源：http://www.xuanzx.com/163sihdduoq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ntniojja.html

JS:   class User {}
来源：http://www.aibaodan.cn/163cphucszc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163wgnsvgkm.html

Java: class User {}
来源：http://www.xuanzx.com/163sfmbgfwe.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163yaisrbjp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163gcfefyre.html

C#:   class User {}
来源：http://www.sxryk.cn/163hnemgqas.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tabbfbhb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163giuezblj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163sxttokco.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163oxlancug.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163caojmwam.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163roaequdk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163myuoqvfy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163vifmdqnh.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163lztynisg.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163kktiqfwb.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tbdzvkot.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163bpeuyrdr.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163rwsehjca.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163xyoyowxb.html

Java: private String name;
来源：http://www.xuanzx.com/163lultndmo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163upqsidpn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wufczwsr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fisbtsmf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163iqonfygn.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163jlnisynd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nndgfxnn.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163uzdnznjx.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qbvodnqk.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jsonbgyb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163afrriffb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gtvqukxz.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163dvqiqwde.html

[G05] 继承
来源：http://www.aibaodan.cn/163gcktsahs.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163alptmdnd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tzqmqhgu.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ffeuxwwt.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fnsfaogu.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ghchsypf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163taimuoaz.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mbgkqxaa.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bnsxtywf.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mikuoxpx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ljkwoyjq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163liqvhmbo.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hgdnktex.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jydlxlxi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ehjmsoea.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rycclbml.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nwomqevg.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ybypihvz.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zzyvpkbc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mirxiczm.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163pykyfxal.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wnljutse.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163phfnrmvu.html

Java: super.greet();
来源：http://www.sxryk.cn/163axhcqlcw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nucspsdp.html

Ruby: super
来源：http://www.aibaodan.cn/163lkiolxpu.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163jictwcjm.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wkjraruc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163whnerjpr.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163vdfabyml.html

JS:   static f() {}
来源：http://www.sxryk.cn/163mzbnfkoy.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163fuznvxuf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ywbdxgtx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163sllhosry.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qulalzoz.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ftnzosem.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163wtiepakn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163oelhejoo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163vwewlmjz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163nzmpivyu.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jsgzocpo.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ppiphsjc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163rjanppft.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163pcdpycjy.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163glctcfjm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163eqeynwac.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xtcvjssi.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jdragbdb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163nljpaxzr.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163fyqszcjn.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163gqhnpppi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163srtikyhf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163fgogjadc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163qpxchvkz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163nucqdsii.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163otmryhrw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uwfosduj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163uxypxixk.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163fkjnxtei.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dyckbzbs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ohfcjlnw.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ivjxdgbr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mbdqppdh.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163adjhwiju.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gmfexawl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hogsqjru.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163yxzzgtsy.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mdfesuai.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vkkoecdi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163lbfxcyak.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163sdcmggco.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163zlndmzip.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bwehxabp.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ywbzfhlr.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hqaxltrj.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zupyctbb.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wckczntb.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xaftrfzo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163patwvvql.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163zzrfxwow.html

C#:   u is User
来源：http://www.aibaodan.cn/163ltuvwidm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163tvbdtjon.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163khrvqpss.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163xqcvsjsz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163hptuhgyj.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163tlvgnesl.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163excppgyk.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163bfjfscoq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163bvzoibhb.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163otaqbnuw.html

[G15] 枚举
来源：http://www.aibaodan.cn/163agahmdli.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163yfdbzqyw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163yhwczbqt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163hwwjibmy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qitxvmub.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163wqtxuvxc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zdcsqsjp.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163bzrmyfdb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163olmgwzvs.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163lrwltpaa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163sntmytsy.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163uizogjkg.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cdylzxze.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ltfulnzx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163brmpkipw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lnddzpga.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qqlejwob.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163fvxbqzes.html

================================================================================
来源：http://www.sxryk.cn/163ptgylcnk.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163zznaclnt.html

================================================================================
来源：http://www.aibaodan.cn/163zmcdddti.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yrzundty.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163alirfipk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fmsgovsg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163kemgdlus.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163rolgkmmg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ruhfgrkn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163mfdngnja.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163smiblfkk.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mkovnmqz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163zjeijklc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163tyrfsgxk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lwxoffcn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163osrudylt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nnzdyflv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hczddhid.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163thtorjkr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163prstnabu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163clxajgdf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163agbanbdx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163juloqeqk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rpcvsmdq.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ndrdmmlv.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163sgbogzzh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cjmiknxs.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163crdettfu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163fwxdixwc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163weqrveoa.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163njauvizj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jmdibkfq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lweoxnsw.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163avikgrrd.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xymphewd.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163hjfbqgzm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163uukofuff.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nipdvwku.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163pfkdiwwn.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163egbnpgmk.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163vmvqnjsj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ldprijyw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163aqvirmqs.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rowqcjzf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163dzpjkeln.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163gdfqriyj.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163htxmumnu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ugnltldb.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rcvjpxrb.html


<!-- 参考信息 -->