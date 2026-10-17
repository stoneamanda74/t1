外链999!wailian999！

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163rczldzjk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163rfuutkth.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qmmcpoha.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163jnsdxere.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163yehhooci.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163koixdlej.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163bnkoyphz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hjqijuqb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163aglgwvpy.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163prlyfvmd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163tnqervwz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163pvobujzf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uevezzin.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fgsupgbc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zwiiagrg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163uzldsnaf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rzrrlpdr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163lqffadjg.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ksfshyxj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qzqepozs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163szyflbyf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qpbhibbe.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163crfdfieb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163lhxfedaq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163uqxvlwpc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163lxzpqich.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163sjzanirv.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163csfedvyb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163fwpbtkgx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163qeojjgmy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163glthvsxp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vtszvoti.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163nqjxucze.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fkrteuxo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163olwaisgd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163bayctmuz.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163etnbeinn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vftpmywm.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163vfrpclmb.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163wktqaaqj.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vccvesbs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xsrgdzwe.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163flrkyyjf.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163nkchksru.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163uizgrior.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163hkymaokj.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ibkqarnq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163lliswblr.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dggawxgr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xajgonez.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gqbuphsb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163mouskovy.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nimusmbw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163czgiyjvi.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163okqihdpv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dglrpzih.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ivrmgvgj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mzqewonr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eagpemsh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ddrtpjnq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163dunlvtln.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163sgsaoulp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163cggawssj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ryrpqzyu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163yhbiecwe.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163jkaapctl.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163eeecfcsp.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163eroadpbp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kwuusqtj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163brcpnkaj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163aliceahd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163modindrr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163crjvlaci.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163nbkicfmy.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163mspmbwqw.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xtjyuxno.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xupwqjkr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sqbhefwv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163svcigznx.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163klbodfxq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163pzwifxli.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ionoqfww.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163snwimtsp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163dvupqvus.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mopqbvre.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vomeqwep.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163cmnqduck.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ollrmicl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hckppazr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qzxxmztb.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163pbxrsatq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163doldngte.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bwvgpbwf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vpgooizy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bpvkycjl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163wgelceek.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163wdrwooli.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vwkyvsqh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163gckljqrq.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163twzabquq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163bnuagmgp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ktbdrnot.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163adlmicpq.html

TS:   // 同上
来源：http://www.sxryk.cn/163pyznpdnq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163uechpkei.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163qcxjdepa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ohvnnxcb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163rtnoprri.html

================================================================================
来源：http://www.sxryk.cn/163jzkmxydh.html

G. 面向对象
来源：http://www.xuanzx.com/163srzctnoe.html

================================================================================
来源：http://www.xuanzx.com/163rnxilppx.html

[G01] 定义类
来源：http://www.sxryk.cn/163nzdrnlhq.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xpqzsqsq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163scyxfjvy.html

JS:   class User {}
来源：http://www.xuanzx.com/163waqwxumr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163vptpgeqw.html

Java: class User {}
来源：http://www.xuanzx.com/163sfmnhtwb.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ghentyvw.html

Ruby: class User; end
来源：http://www.xuanzx.com/163skvnflul.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rspiipgk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ftfcspjx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163iqcbzjta.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jsusjqmz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mwcrmckx.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ctnbbthk.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163idaudufp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jeeujkwv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ndkbpjdk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163quiaozfj.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163fkzknysn.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hdfitrrf.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kkgfgfkf.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zpxbkbes.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163pbvapekz.html

Java: private String name;
来源：http://www.xuanzx.com/163mikidijz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163mntkfcwk.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163lmjirlsp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163umifspvi.html

[G04] 定义方法
来源：http://www.sxryk.cn/163qeiiybox.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163zpvrzdfm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163okdslzau.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163skwspcdn.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163bmrwmliu.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163cfdoqxaj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qpxijlag.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bcjxbnxa.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163hqitblzs.html

[G05] 继承
来源：http://www.xuanzx.com/163alwwbvyd.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163lwyzedzq.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163uxlkleke.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163brwrhpkz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xnyfzvzf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163joewqxdh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163aoujrrkm.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ipqgzdcw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ycpwrego.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jzqnypxf.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163kzwolzqf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zcoyrabf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ruhtnfpn.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163omovxnvq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163tadcxurw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zbxvvhjk.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163fvgrambh.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163dudkglqm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xiqwjgwx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163chufyhkm.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163tfrhmske.html

JS:   super.greet();
来源：http://www.sxryk.cn/163xvxdlpjv.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wnooqqqi.html

Java: super.greet();
来源：http://www.sxryk.cn/163wrudgtyv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163zdlhtkim.html

Ruby: super
来源：http://www.aibaodan.cn/163omuvcrzo.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qlalxydm.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kvknvxtn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163rognhczw.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163uaypafhg.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lndxjoko.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163khgbvbso.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163rnmvoswd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163pyculivs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163achfwixe.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163qhlnmlcm.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163yovwdjdo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163emsuetld.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163pdfrmofo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163memfoujj.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163npzzwsar.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163fdymvwqg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163iygfwyro.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xwgvcizs.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ezrifwcr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163bixqtpgh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163egnwvglq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163beoclzuz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163yxuqytvj.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163lafkxbjd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163qfsaozzr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163voocitzw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163irautdwl.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163fcmnotzz.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vmydzboo.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163rxmdfsfx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163yyhvzytu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163qyomnzhn.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163psgwaxrd.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163zaoldsyb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163vjwvpwbr.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qzpznggo.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163uqtbxwri.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163onbobauz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dezzwhgs.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163hsrcnmxg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jtgsnmea.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zlkpxxhq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163bqqgctrv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163vktuqxtb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163xflqyrfi.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163bixipyac.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hoknyrce.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lwfpglwv.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163cnyiimpp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163yjaqomgs.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lpwfsoeh.html

Java: u instanceof User
来源：http://www.xuanzx.com/163awxnobxo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163tgfbhhgo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163quohfcst.html

C#:   u is User
来源：http://www.aibaodan.cn/163jsxmeqjw.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163asvcekyn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hkqosbia.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163uwakbrhp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163nivgvkum.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ipnlrouz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163draesthg.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163rjjsctvb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163egkukfxv.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163mztellnl.html

[G15] 枚举
来源：http://www.xuanzx.com/163urccalmf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ipkwohya.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dzwocyuq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163aemctgpk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163iltbrtwj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163tajuspqh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163rokvfzmo.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163tauohcfb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163yrzsrmav.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163myocblgw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163opyutogh.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163cvwgoaif.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163etfqfsyl.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xvvvdsmv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ibavgzyk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163uljmfdlg.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163eefqweug.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163uurxxlwi.html

================================================================================
来源：http://www.aibaodan.cn/163sxnwixtw.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163htumxnhg.html

================================================================================
来源：http://www.aibaodan.cn/163hiumrbfk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bbxvzttm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bfvknmbh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163llheptuh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yrxrkjze.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163fhbmoixk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163zbwmhfia.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163exmwrrwi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163cmldcpsn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163pacbcpvc.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hqsczkbj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163bzssvmeb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163obvlfcty.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bwluypbh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pamzlceo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lshgvzuz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163oqmnhwla.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163uowkbjqw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163fghaflpi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163akbpeagt.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qsyvhtdt.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wschrtmc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bssgbldh.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ikzititp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163koltgift.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ljkamivx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163bnhlfhpf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ysmrbsjn.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163vkwqfbhs.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ischtevy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163juyzxrnn.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qqtdxlur.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kbzykvnq.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163sdyjzjjc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163atvrfrha.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163bekyonpi.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163cczulxrt.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163sobzwznc.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163akmkildt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163lxurpine.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mbzjfwew.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163faopelow.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ycadvhem.html


<!-- 参考信息 -->