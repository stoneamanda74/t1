外链999!wailian999！

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qouwlpiv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fbclmavv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163bhuzpfyg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163tpzctcft.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163dkfregra.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pwfzhrqs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163nqlcrccy.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hwkbaxfj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163xobyluev.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163obdzjsfj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fnlpedjz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mbnqxblo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zpapjraz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yelolsqe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rlupnssl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163dvuivbea.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163tskuftfs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163snivjhuo.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163zzaznpvk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163cuocumxl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163krudjocd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xjzthirc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wknloaiu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163asxltlyq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163gzxqjbgx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163kiekbcgf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fhvmelir.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ixreyrgl.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163jjhmnsgm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163lrznxzrj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ehtrkqzt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ycbjzsed.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163gjhbpgpk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ytysnhfc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163tlhtkhsj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kbghpevj.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163lfjefhvx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163szijtzqg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163kwihuvxc.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vntxulum.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163walqpgbg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pyzutkze.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xsenzujj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ukwifbvm.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163akhmjauz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ylymrybr.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163nsbbeaqy.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163wppmxbxy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163npoluwwe.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jxgfqsqn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163apmdoofr.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163qhbaftua.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163daapyhow.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163slmgswfw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nuocmdzh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163guppbdmk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ywbyqvvr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zdmhlmfn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eogmhmsy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fgdmpzlv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163rrnwejyi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163hhhajaiz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163kivpbdmd.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tponkjqk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163qbktfjgh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163iqbgbbuo.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qidajesj.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jqdkzuut.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wgpbsfwl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163djjlnmde.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163fszzfezs.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163gizwkpkm.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163frvskitv.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pbtsbxyn.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163jguncuuz.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hmqphful.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hcllvmva.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uoiyuora.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163kxhmsvok.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163srcjmkux.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ehkekpsh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163dwjtvxrx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cvbtgxyi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163mfdtbjty.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gsgyauep.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ycfgxrky.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163kbspcznr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163topcsjbw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oqhmckpi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163rfgbgjkz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163hhddtdld.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163spzujpbp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163wmwwdcsp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tmvagndv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bjrbxwok.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163jsnqnqjr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163lxfbdckg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fzmrrbpw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163bxfbpvns.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ygkwilgw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163kmlgkaty.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163mizxwkkf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163kkkniypv.html

TS:   // 同上
来源：http://www.aibaodan.cn/163trlzacni.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kdnxnzsz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ibkkkpvl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163zalzzocl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ytilmcxo.html

================================================================================
来源：http://www.aibaodan.cn/163mqfdkdsi.html

G. 面向对象
来源：http://www.xuanzx.com/163miieasvy.html

================================================================================
来源：http://www.aibaodan.cn/163dytwqmso.html

[G01] 定义类
来源：http://www.sxryk.cn/163rmrnposj.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hpjntpaq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xqrtlydg.html

JS:   class User {}
来源：http://www.xuanzx.com/163ggiehovq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163emdmbbha.html

Java: class User {}
来源：http://www.sxryk.cn/163ootmyoef.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163srznqner.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163txxghsge.html

C#:   class User {}
来源：http://www.xuanzx.com/163vusnppzi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163mwiuobbc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163bifzklmz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163qxuohcxq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163rwuxnfxu.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qlrzqhmi.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163afqrmpox.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163phavrahi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163hmurfvzv.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163umxnculf.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xeadpkiu.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ctnfrqgg.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163xzuuekmp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dnvjfpsy.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ecfpnjpi.html

Java: private String name;
来源：http://www.xuanzx.com/163exhgxqql.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163oxosofbr.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163bnxlinpi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163rkdtvhog.html

[G04] 定义方法
来源：http://www.sxryk.cn/163powtiqvs.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pqmyhibv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hhdvvfns.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163lbqxmddf.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163vutpctnh.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163sbsmvnkx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163rqvxardq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163nxbavkmy.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163nusxgoxb.html

[G05] 继承
来源：http://www.xuanzx.com/163qvmtiwgc.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163cqzveedg.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163guhzxjmo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wkqgetai.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ovelpygs.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ksovllpr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zyukbnjh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163gfjtjbmu.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163pyampzyt.html

[G06] 重写方法
来源：http://www.sxryk.cn/163hjhnbfww.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vhxvzurc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ymtrogdl.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kbilkgjo.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163tmmernll.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163meqcquxo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163fjgrmcxu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vvkfzycl.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163eipdwlyb.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163nevygzvg.html

Py:   super().greet()
来源：http://www.xuanzx.com/163tvnjrdkk.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mcmluuqf.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ckhngvwv.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163khbwqcuo.html

Java: super.greet();
来源：http://www.sxryk.cn/163fwabacxy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163luamcnoj.html

Ruby: super
来源：http://www.xuanzx.com/163muucbmmo.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163idfdmxpu.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163cotxwerd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gbueqmhd.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163tdfgdmgm.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xqncibka.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163zdkjvslm.html

Java: static void f() {}
来源：http://www.xuanzx.com/163clvlepzf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163maoggerz.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gmauemka.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163wbirermx.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163tkpcdour.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163batqdbpm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jlpkthmi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163czvwujmh.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ywcqzard.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ohhmuiyt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163axyyixyd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163pfdpkkmf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163hpwriwgz.html

[G10] 访问控制
来源：http://www.xuanzx.com/163dadyngdp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163pmnxveua.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163whmyxjep.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163wixsrbsw.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163adcpeowz.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163csfuachv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163sxojripw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163oswgwnqh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163njcfrlkr.html

[G11] getter / setter
来源：http://www.xuanzx.com/163tpbvdxwp.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163egdtplaz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163cpowyhtz.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163khkzihlw.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ssjftkwv.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hifnszmt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163mcqjvtjd.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163cikuoblq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163iajmfxnr.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ucnxujcg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163baaogklj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bhvsdrbu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wrzrntpo.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163zvnlzxwr.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163zpaewmyb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163nubggjcg.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163iybgkcfo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163fsphplaj.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163cvodoebz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163pnpzaxrs.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nmgmndbr.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rloqdpyx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163yytwnyff.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163gmeekqsr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ltsprmmb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163pjqcozan.html

C#:   u is User
来源：http://www.sxryk.cn/163fghyaust.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fwewefyv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163tjsvstxj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163cxhcegzh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ighxhmks.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163shuecuvs.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qcylrqsg.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163sdebseec.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jnzpcxvy.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qymcrdkv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vpidsthc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163fxpepwgk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163nekuzedn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163lqimktkb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tslvqpec.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163rafmgyyu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163idwnvwgc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163umgvicfr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163awkpvbgk.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163dtzlykft.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163tqfnbjdd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ekqfppvj.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zlayqwag.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163danbgvsc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163azsqqlvf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163tbmpaygw.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163hbtjwixy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163rlljckqs.html

================================================================================
来源：http://www.aibaodan.cn/163euhzeqqw.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163rycudtbn.html

================================================================================
来源：http://www.xuanzx.com/163tbxlqsoz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163qfqqnynu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ywejzixp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163sggigjsb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pwdvblap.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gohjebao.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163hdfbttjf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163swsljklc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163txydsslq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yjjpciqu.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163fckciiea.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163tzjwzapr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kvwohqfh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yhzqyogk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ztavqmff.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wxnmqqhe.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163frlkozaf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lodetiqk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ffywibuo.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163qenfhyjf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dxpwqizp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163labbldsw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163awokoktp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163slbtpqzm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ojjyidis.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163spouduyl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163pucvouqf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nuvyqqle.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163bkyaiaxo.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163yuosdicf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hgxybiuz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163wrgkbfiw.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163upkbfwqo.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163raeexsio.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163gapllsct.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163rcocdnkp.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lmdbfrtj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163qbxytofk.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163qbivldua.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ffklalwn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qinbcykg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dykfwiwc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163uwkskjwr.html


<!-- 参考信息 -->