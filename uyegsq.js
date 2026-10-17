外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ilgfdwfj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163idhyiyjc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163kzdksxmm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rtdoekbx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zhbhknhh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163cjnpvlqv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163cafqkhap.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163rlwaxxje.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163fgldbubz.html

================================================================================
来源：http://www.aibaodan.cn/163wpwcoxol.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zolhkieo.html

================================================================================
来源：http://www.xuanzx.com/163fcrfvqrg.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163lqzwfvtu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ywnfcquu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163gpihwgtn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zbiwycue.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163iwlperyd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wqvktofe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163fualmrga.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lierjhmc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ejievvab.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163zuhwnrdf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163kwamsuyq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hzzzogae.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vdogajmx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xbdnefpg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qrzkjrdp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163duwmcjok.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rhahsdca.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163usepjmjv.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163bmjmtwgb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163icqljmcd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163bzlwqsdc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hhafbtin.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jwawouqi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163nyqnzpun.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kaijxddo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163toylepmi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163uzbyvkyo.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163qmuhozdi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vqyrxuls.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163pzqaflam.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rlxnxlgl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163knvjyayh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163nmcqkxpc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163behgewpw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163xiizhztf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ozsenorg.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163aaaxibpx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163fhxkuhsh.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163depfrumw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hhknhgqv.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163edldrytc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163llhrnpvg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jnyhhgwc.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163psilvodb.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163eelltqid.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hyndwepj.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fldmlacv.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cuawhmjx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163urggnebn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163elwseetn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ajmijpkx.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vjbpgjfv.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ifxghshh.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163gnjkheyi.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163typvhmzo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163knwubiyr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zzaprzsm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ywwwmxhq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jfermyws.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163kbbjtrmb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163teekdidr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163yqjvjjhq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163umrnjzha.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jfbeuvvy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163zbiaavko.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163gtiuefls.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wlxbgwjh.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vvydswzy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cukugihr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hmjssnap.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163pygibnwt.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163kedhnctz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163frfdjxkz.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163hgxwimtx.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163flpmtgvv.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bbixulap.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fjfrtbzf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tcoetzqx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163zgzbyhhz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zprsvlsg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163hdohzjsy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163tevpuaqv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lwahdpsp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163pgbdadlt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wkafwutn.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vxrftuac.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ilglqtxd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jewhjoek.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ecvyajbz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163nnfjmvjh.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163iosbfqmb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fxxpuwup.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163nyojtdfv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163adfxpady.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163onnsbbjk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163allratpk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163kyydgybf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163andjeokl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ycphrqmx.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163syzgxhic.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163iwpteulj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163yumrtpnc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163cpkzeasi.html

TS:   // 同上
来源：http://www.aibaodan.cn/163nblysnni.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163whwazkfs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rdlgxtxz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163uunkleeg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163peudthsp.html

================================================================================
来源：http://www.sxryk.cn/163zhyhtbjl.html

G. 面向对象
来源：http://www.sxryk.cn/163ikspcrry.html

================================================================================
来源：http://www.aibaodan.cn/163aiqgygqa.html

[G01] 定义类
来源：http://www.aibaodan.cn/163gxbxupjf.html

Py:   class User: pass
来源：http://www.sxryk.cn/163efsetsjt.html

PHP:  class User {}
来源：http://www.xuanzx.com/163yqlhgcss.html

JS:   class User {}
来源：http://www.sxryk.cn/163adlrfbsq.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163jcekynpi.html

Java: class User {}
来源：http://www.sxryk.cn/163dhkqptao.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ncxktfhn.html

Ruby: class User; end
来源：http://www.sxryk.cn/163uzatrzjc.html

C#:   class User {}
来源：http://www.sxryk.cn/163ydcvvcji.html

[G02] 构造函数
来源：http://www.sxryk.cn/163dxyylmbn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ygsbxtlj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hbydydas.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163pfcxmqas.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163sqidnkud.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163spatptql.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vujzgulr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163htwmsvqa.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nrkbkcvj.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mzezzepv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163jeqfmwfa.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hbwjrjiy.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163lccqcxwx.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163gyjsbhye.html

Java: private String name;
来源：http://www.aibaodan.cn/163ekettnqj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163zgagxcyq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hycarthi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163meesaeaq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ymtlbxge.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ukhvctrf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163plwqwmif.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163lwqlbvtt.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ukripmmn.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163wwwempkp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qojpevhy.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163lblsgfxt.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163arbgkxzb.html

[G05] 继承
来源：http://www.aibaodan.cn/163uuaufzdk.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163cijskmzd.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163glawdlfi.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zsipswky.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rfzbtora.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wqhmwxvf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163txirdxyl.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ezrrmwck.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163iiglctoc.html

[G06] 重写方法
来源：http://www.xuanzx.com/163rrnytokx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163zlbhjwvp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fipjpzbj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jidablyw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163itgzvtrr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163olmhhkmv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zrpnqhdg.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163exoakxmy.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rpjberel.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163tclclpke.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163nnyseurj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163crflgkxa.html

JS:   super.greet();
来源：http://www.sxryk.cn/163rdflwinu.html

TS:   super.greet();
来源：http://www.xuanzx.com/163yqcxtfsj.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vbpzwelt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vlevpvon.html

Ruby: super
来源：http://www.xuanzx.com/163ozfmkeux.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163zohybwgx.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163unvqfevg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163mmspdgpv.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ogoeabsi.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163gqimfdpy.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163lltyfjpg.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nvrdakoz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163hwjppzcg.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163scfeeovm.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xkcnqrrx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cwhrzwin.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163wddbzoxx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ogkzrfre.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163mmgyflco.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qhkpkllh.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163lcvvrpud.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163mmeoswnb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163lorffzww.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vhxlbjeq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163xluuqsws.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ferhpzrp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nikvfxss.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dkdhxaqg.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163rrwyzile.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163onlxivgd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163jllzrcpc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163gjmejuyw.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zhbcfehl.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163drneabyl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163vyiepsun.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qcculnfy.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ixqiblgj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ercnfrug.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163eufahdip.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ogjwfwya.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163wymuhvwk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lmuiermw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xbyzdwju.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163kmzrcqeo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gynercwq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163rvkrhjdi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163fygximzr.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163sdrjleax.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163xcksyugm.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ybbqwzgl.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163jrjmnmrg.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163xadloprw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163bkjyjdzn.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163eyttssxb.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nhukoqcw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163onzfmrxj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163cjnipubv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fpkfkztf.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163bukdaocq.html

C#:   u is User
来源：http://www.sxryk.cn/163wophpjur.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ckhowwaf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qoucytlo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163yxskensd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163jszyqtqj.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163erzlyfze.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163njinzfqm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163vvlbwziw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zbeqvklj.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163fbujjjlv.html

[G15] 枚举
来源：http://www.xuanzx.com/163kkrwghlf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163gvbbgzft.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163lbzkoays.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163evqwsnri.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ytgqprdw.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zojforzh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163xddnnynq.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hrvkzuih.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wemiyinu.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wwjnzdsy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163itszyzyt.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163jocvbved.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163udspelmt.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xdeefenj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163mhieotpt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zdfrlzdy.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163yloatkwu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163zukgoaqo.html

================================================================================
来源：http://www.aibaodan.cn/163klhwjrfd.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163oninewne.html

================================================================================
来源：http://www.aibaodan.cn/163gjplnznb.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rivvzipt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163rpjqvqos.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163vrkxvazs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163texirsee.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wqbadqdi.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163inoydkql.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vixvobud.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163gujrqdea.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163hdpoovng.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wuteivcu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pvebjwoo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hjvjoqna.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hqfwuctd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qiukovyi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hevlxqgp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163qhhqcwig.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163wrdgwvwp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163hiautzgf.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163yoavykga.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xleomara.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163teyltpuo.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qnicrkhz.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qeihfyjx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163bfjzahqu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163wpvbgdeq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163dnqqhonj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nuboubkd.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163jgybozsi.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163hnqzyamy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ecmmfeir.html


<!-- 参考信息 -->