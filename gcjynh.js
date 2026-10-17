外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kuxivwjk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163rivxilwc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mqpzoste.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163idedofix.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qzaydeud.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163mypxuhbw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163khoinrki.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163hxqqlhju.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163osctpqxk.html

================================================================================
来源：http://www.sxryk.cn/163igpcanep.html

F. 文件与目录
来源：http://www.xuanzx.com/163ozsivzex.html

================================================================================
来源：http://www.xuanzx.com/163agyhlgjp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163rdxtsefb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163smagwzam.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hoxtpecc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163bickmspd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xpvlgmmm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zaglftgi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163bowtahnm.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163cbtaqrud.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163biiihkyr.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hojpbzbp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163niwqjigk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163uapeyzvj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jcwlzcif.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gddfidcs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163scqtxvff.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163dtdgvsbz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rcdxetol.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163slpqisia.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163gewwamdh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163wizzfedq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bemvuvwp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jufzkjgt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qujichmu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163wzpidvsg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163rhhqzlyf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ysxbtbet.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ggznwufv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163lojqhsmv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zhiejjjo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163lpufcpbn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yggccvey.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163egauqzrm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163sfnbwlii.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xkvpjkit.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163diyimfcx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163lvxjeynf.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163lqunablb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163omcvueph.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163xnuuzszj.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yvusdzrs.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163wpwgmfse.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kclsnbrj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qkixunsg.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163frgvkbva.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ubhpnkzq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163gotbubhs.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bzipisyr.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sdtoyehf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ocywfvlt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ibeguxlf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wznjbywl.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163nqgnpqse.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163goznkaym.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163kvqwydju.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fnocggsp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163wmxadzpp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xbnpatbk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dzltpvlt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vcnfnryf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163rtxsvfle.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163triluiff.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163syczmytg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163uiouppol.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163zskrddsl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163tjdegzfq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163tzdxbryy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163uuoqofmm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163revakvhp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163oxqkkhom.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163qtlmdlmv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163nugugkkz.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xqntddtf.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jcukzhgb.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163nwnwjdtj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163symdnbzt.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rgxuyssx.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163beqywgbg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wykqaata.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vodqoamw.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163nbrjzery.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jokbmojh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163zruhdyst.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ynvrxxbo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163jfogqhye.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nzmeseie.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163hmdptalf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163sucqpcit.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rkmxyfgh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zfekifpb.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ifypsqfh.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163tsekclck.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yaqqdrva.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163iluvqkcm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qteljyio.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oarnhgkl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163qhatutbs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163stlycfqm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fpvtatvj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163rgdnzpby.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163sdnjqnwf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163euyghmqv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163bvadtpqn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163hybduubn.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xopufhyl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ieoiqocm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163zdkaqdww.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163tmqbfusk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163veistzpj.html

================================================================================
来源：http://www.sxryk.cn/163rtlneznw.html

G. 面向对象
来源：http://www.xuanzx.com/163ghbegxtu.html

================================================================================
来源：http://www.xuanzx.com/163jevltwrm.html

[G01] 定义类
来源：http://www.xuanzx.com/163sgtzozga.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lurivjtn.html

PHP:  class User {}
来源：http://www.xuanzx.com/163abprnuca.html

JS:   class User {}
来源：http://www.aibaodan.cn/163huvgqtmy.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zkelktmr.html

Java: class User {}
来源：http://www.aibaodan.cn/163zrwoylto.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163qmaayftr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163vmdnweyb.html

C#:   class User {}
来源：http://www.sxryk.cn/163pftzawve.html

[G02] 构造函数
来源：http://www.xuanzx.com/163njjlakkn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163nyqjkkfq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163bxkkvssl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163dxtzcblx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163trjddeji.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163kqopcrog.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163lzgjglnj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163glghdzvt.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163flpfhgjr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163odmfzmkn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163rqpjsndk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163prnukcrt.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163dwipkvvx.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ounabzep.html

Java: private String name;
来源：http://www.xuanzx.com/163ejjafsyd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ntoxzvfq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gyaocrwo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163lvfbclri.html

[G04] 定义方法
来源：http://www.xuanzx.com/163dhphhoye.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qqqvbkug.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163gcgbmsns.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163lffanntm.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wpexhltn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xkmedgrz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ckjagmfl.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163txcvxrup.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163hhdmzftd.html

[G05] 继承
来源：http://www.sxryk.cn/163qhtjdvfo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ubybaoen.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163nxmfglel.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zlagaypz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lsavaezc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fyhifxxs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kjaisnxj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vdwbwbik.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163oduvekyi.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mdiyhvgq.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ymwhinxq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hfdqwtyn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jfjpsbhv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163lvdrgqme.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163cdgnqdxh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wbtmkqrb.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163qulrbnbg.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rnzgupyw.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mrnauiwz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qrsonyzx.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163qesjizvo.html

JS:   super.greet();
来源：http://www.xuanzx.com/163bzmjojgj.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ghjaferv.html

Java: super.greet();
来源：http://www.xuanzx.com/163aogzfrpn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163zpsxuvao.html

Ruby: super
来源：http://www.aibaodan.cn/163urgtmrpz.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163gkcuvuwi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163fofcbidy.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163hegyfkmb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hwgxnrap.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zqkooiur.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163hcgorodn.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ckhjsnnj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163rcakrdum.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ensuhxih.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ldrfvnpe.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163tuaatciz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163kearcuib.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xwpzxrrh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ylxwuhzb.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163yhrmmnyp.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hjhkliht.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163nfyggehi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163sguncbpf.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qkalynpf.html

[G10] 访问控制
来源：http://www.xuanzx.com/163awwwoxyc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163objamlpp.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163gvqqanhj.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163uhlmnbvz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163icgrftif.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163wpccgesq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163cqdicrhc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163tcnndlxa.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163idzemusn.html

[G11] getter / setter
来源：http://www.sxryk.cn/163okfbgotx.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bbpzfgpt.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rgglepae.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163rxifhfzn.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163bmpafrmz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163nhouqlsa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163agtsezqa.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163hyykbfch.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163znwtfutc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pljncxcs.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hpvbbdiq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163qijelonv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bvgfrlpw.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163kxufckrd.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xtgukuga.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163irhawlbv.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163difxfvcd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163nkrfevfg.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163oihmtygb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163itiggmxz.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163pekfegjy.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163hzneipyi.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163gotkrcwc.html

Java: u instanceof User
来源：http://www.sxryk.cn/163phskdndh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163oupnaqph.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163pozlldrq.html

C#:   u is User
来源：http://www.xuanzx.com/163sozwjkdr.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163tkksrqcw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163sdroybda.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163eeluxnnj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163hnhqtxqd.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163liiwubey.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ukxgmvqt.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163gneqlfdy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163himxyfco.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jmvnyzfh.html

[G15] 枚举
来源：http://www.aibaodan.cn/163tpfelmqi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163mcybjsvd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163bolzogsf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ajejthvi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xmqfqpqe.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163uhnkkajm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xoorycrq.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hgspxuej.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163yopstftb.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163phjpqwab.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fsujozug.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163wtwacdno.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163uekikxhu.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yuofuvbs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163xnsrqlab.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163khaeozsc.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ktqdbnuk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nqismvbk.html

================================================================================
来源：http://www.aibaodan.cn/163ydndcazz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bywqerrl.html

================================================================================
来源：http://www.xuanzx.com/163xhtkhbsj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163nlkfrxub.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163qjuuplas.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zcmjxnxg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163goziwyvd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163jhtfdiqk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163hgpqrwbr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163yupjzwsx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163duzrtkks.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163bzgvnxen.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163konhflzt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xllrniqi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ummimdyn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163odhenwss.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zbrcuzoz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kddujlwr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163bythoztf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163vnsocvcr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163cbjjqwel.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163nqrgwvjq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163oiukebvk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163fhmobezv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pixgtsdi.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163olqmzmyo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163avgsnbwt.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163mcjarzxn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163nimswxgf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zxtpqnji.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ichabtkg.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163hqhfqpbu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gavhvaga.html


<!-- 参考信息 -->