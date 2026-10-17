外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163idqjugse.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163qvlegabc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pzqbegjp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163aiikbete.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dljqbwwb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hadkquhe.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163mqlcolxn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163wopjtuwo.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163bvrxibwa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163glfekhrt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fdyrmnfq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lmkiifdr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vmnasjvi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163obgmmfvy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163bmqdlbhb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163sunflbpa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163syhdznca.html

================================================================================
来源：http://www.xuanzx.com/163kcskzpjw.html

F. 文件与目录
来源：http://www.xuanzx.com/163ksrnfbyp.html

================================================================================
来源：http://www.sxryk.cn/163wdqfxwbd.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xaaffoeg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fscylxrx.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ollygkza.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163fnvhgpxe.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163jaaxspsq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163amngmchd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163fpwagsvm.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xwdbrrza.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163qujlpfie.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jdwjkeuo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163pmnfzfpa.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163llzzbpkh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hacxwcqv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163twfnqxeg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dqqvyuca.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163jigmpcym.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ddfooblb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163iulzmclf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163sowcryaz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rqdemowh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163iyyikbps.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jsjxxvbs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163whupogoq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163uuxrtpwe.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163hycbpttc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mcgxqjkj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163wnccspkg.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163iriafhjn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163hiotswbv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163wejqzebz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lsyznvie.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nenhtdmq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163nllkjgsd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163itdpfxla.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163dymgceor.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163vtgzrmxb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163uhrtzpel.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163oyqnqjur.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jejhlowh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mqvitren.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163iowovkii.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hsvkkqiz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163pdyualgh.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zzeewmbw.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rmkyliax.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ogeqheol.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wyezwvdq.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163zettkxcw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uwvuqhel.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163izfkhvvx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dthwheve.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163jjvtopbh.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bnlevopk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jyufgqff.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163uuslaulb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dwjjopcm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163llvdryed.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cqzxgknx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163nuwemhoz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qqhmewtx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163nqzcanjq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163xtiilgqe.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163tkbkmipe.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ktafteum.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163gnkemngh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163gaaxsrpl.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jokvgfsc.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163oipbjmqo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ghapyyia.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xphhtaxl.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163oinevjny.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163fwngcjhm.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ibffcvbm.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163fuavchtx.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dtgnpkqz.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rdzsyuhb.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vdkmvzdb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yadhbrkw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163srmtplrw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ijiwqpcp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163psivupop.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lbgimntq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ewifrpym.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163nxomtyzg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163elidghpg.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163gxfmcsbx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163udzfhicd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vmkwsuop.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163eftceuss.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163upkfsduf.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ijsfchvr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rjlcwsjf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163qjyyezvh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vgmltnzt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163plhgcnls.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163oxjadxcp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ewqxaihs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kmvyinwo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wybypqxp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163vzqqtutl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163wshsdjzf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163qotrbzbt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hzovycnz.html

TS:   // 同上
来源：http://www.xuanzx.com/163zhplkxdb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163khgfivpy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163hpsfgjkg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163iibzkdej.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163hwwqrrio.html

================================================================================
来源：http://www.sxryk.cn/163utpkgkce.html

G. 面向对象
来源：http://www.xuanzx.com/163tvbjudrc.html

================================================================================
来源：http://www.sxryk.cn/163ldqohjzs.html

[G01] 定义类
来源：http://www.aibaodan.cn/163gpaacvzi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zjpdgrcy.html

PHP:  class User {}
来源：http://www.xuanzx.com/163bzqbnugy.html

JS:   class User {}
来源：http://www.aibaodan.cn/163gxengmmk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163gxawyjdb.html

Java: class User {}
来源：http://www.aibaodan.cn/163wrmgkwlk.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163xpordzbf.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zwddugxa.html

C#:   class User {}
来源：http://www.aibaodan.cn/163khzyltoi.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163hlyaqydt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163cpfcifwa.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163yccsbywl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qnfekqqd.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163yzkuhbxx.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163vtgvrbhm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163hnpdiibs.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xhvtraaq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163tgadszzg.html

[G03] 实例属性
来源：http://www.xuanzx.com/163lhklxxsf.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163pskcbrgw.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163vibhaybz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163tkbpsjsj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qeuptjwn.html

Java: private String name;
来源：http://www.sxryk.cn/163ounrwupm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163haycmpuj.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163zhltpqtd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ylozhouc.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tdyifyco.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163rntpnvlg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163woccsmnh.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163devrxvxm.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ecqukyct.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jqhdlaxp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163osafvbyu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163glyyivqx.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163rntfvhlg.html

[G05] 继承
来源：http://www.sxryk.cn/163pevcfojk.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hpmovlsq.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jiwoqjbn.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rgqhubzy.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163uncvkejq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163qqdlyjyc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163shsctbwu.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zizicucp.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163wrrcodox.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163nmukovow.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gftdjttu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163micbjibp.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nsixmfgy.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163caunmvfo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163qgylhgyv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163yztudipn.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ssaxrdja.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163rgpojoty.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163cpvilnag.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163tfezsljx.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163tumijfcb.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163uavefosq.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ifjmsiiu.html

Java: super.greet();
来源：http://www.xuanzx.com/163sucxkmqh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qgukhbql.html

Ruby: super
来源：http://www.xuanzx.com/163mqiscbmf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163aepkdsht.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163mqkohuzw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163imzieuex.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163lcrzrzga.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ncbkzgoq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163swzdcwof.html

Java: static void f() {}
来源：http://www.xuanzx.com/163sspldowz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nwtazxlb.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163rfxgoloy.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xyfocaaw.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163djsqasdf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163sblldrhb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nxawphtv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163wakxgjab.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163jlvnlaas.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163uculwprh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tvpgqbsu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163gzzgbhfs.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163znqmsgoh.html

[G10] 访问控制
来源：http://www.xuanzx.com/163uirzfpvc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163miquzzri.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fiiqbppb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xkuqtofn.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kqerlujk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rwzsmipu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163nxuiyxsu.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hxvvetpv.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ztstbhpl.html

[G11] getter / setter
来源：http://www.sxryk.cn/163blqvfgqw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163stbhwfht.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163fegchhge.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163utobpkwo.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163dfpbqzud.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163levfamiu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vurygnsz.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wtnzeunu.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163sxvttvva.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163tywtopar.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ijanuaac.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163yunlbooh.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163gcayqfch.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163sfjwleur.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zwbvtplw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163bjdbutic.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163eboxmlkb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163tstvxtnt.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163geitjnra.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hzhckorm.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163kxrjuxyr.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ftzqptmp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163gpexotqe.html

Java: u instanceof User
来源：http://www.sxryk.cn/163mfrjikpz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163pznwwjae.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zofyqgmi.html

C#:   u is User
来源：http://www.aibaodan.cn/163ltrbjnde.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163dntfalro.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163dbwuibec.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vftwjbda.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163htsntakh.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qgeqyksj.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163acmaqlim.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ekxshqhb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163mdwuybon.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163tdxjwtri.html

[G15] 枚举
来源：http://www.sxryk.cn/163hhadqnck.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xqpgulay.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qekmhqkx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163nhhpgcjr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bxlterte.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jaayvmwt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xwfgyddq.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ovtkupfw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163svnjmlkn.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163mrxihhjc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ojtaivoc.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163tvcuztmb.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vrwbehmu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163clqrnimd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ekqvtfmy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ljpwjyqc.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hgcrrogk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ixpgcovp.html

================================================================================
来源：http://www.sxryk.cn/163ugctetmq.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163oprqehuc.html

================================================================================
来源：http://www.aibaodan.cn/163gvaezgpn.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163gckgurdp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163dstqkjsf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163rasbbvha.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gsosralm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163wtdysrcp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163wnhexzgn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163woepyvxo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163orhnzrje.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163qavkovum.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163wllcfmiu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163hknsvllw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nygvmknk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hyulrara.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ueemubal.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qofkmtky.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163yrwfxdno.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lxdkkcuu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163wncopgqa.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ditbfljy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163sbehgkru.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163comtcxcv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ujqsjkno.html


<!-- 参考信息 -->