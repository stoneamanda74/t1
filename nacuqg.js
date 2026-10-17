外链999!wailian999！

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ugjocxuz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mnhogxay.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163wsgauqiw.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tzgdavrv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163bmeidhqn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163mrzpbdlg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gnnooxsp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163aemtngei.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jdonrpsu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ujpbajgv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163pkpnaalr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163yomknlig.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163eyvwhbiy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163bfbclydo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fejpkaqo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163cokmyvyp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qekqxxjs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163frmqjgtr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163feqoonad.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163pgfyiqrv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ocwqwsuj.html

================================================================================
来源：http://www.aibaodan.cn/163bperzefz.html

F. 文件与目录
来源：http://www.sxryk.cn/163vbwtgxen.html

================================================================================
来源：http://www.sxryk.cn/163gxdrcxpl.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163nkttbett.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rnnhepro.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hagvczby.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163kbkjirvc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jctsggwu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tbkmwxue.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163vmgfxchd.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xqexcgem.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ptpvekqt.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163iozjgulc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163nkskaanr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rhnlbrqu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nohixztf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lidaiwpf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163guinqexn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bicokmpn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lbuttljh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lqhhdugr.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cbrgpuav.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163drnieaqo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nzqyfifr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fxkooako.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163noksdtny.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163wpsvtaih.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163viejfwup.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163jlalethy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163tnhvpsjh.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qtgztpeg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vlvbpnww.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163oopoxsan.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163popoohrv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kpfxigox.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163uztktimk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163qchafhft.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tzhjgnnf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vudmokkv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qzqejggm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163hksyieiw.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163brjevzrx.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mvlmhkun.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lsfrejgc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xxrfdxxa.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163dkuftnhy.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163mopbbskw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163nuzcborm.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163yhhqlfcl.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163innjhatr.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163wymrlhcn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pjndogds.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163niultord.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ovmnxvwy.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163dfoyvzma.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163nijjgzin.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163elrjqwmt.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ercfekul.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163eddimxow.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163oodrgjdd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tfzneynp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mbgfjmeu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jwjfzofw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163vkzhahac.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163jdhuwhsh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163qjufufow.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163emrqnztq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163dslzmurm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163sshmbotl.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ovggthdu.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vvniovij.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163nwxynbyz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163zrtrjdsq.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163pklfadbi.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163tblazdgr.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163acmcyvtr.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163fhpnwcuc.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163jjjzxckv.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cfwkoalh.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zxfcgabb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sceizxos.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163brtyqcaq.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163yohsrdlk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163nhxtjxas.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163uulkoxys.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163umadjycv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163miplgcrk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zafkelds.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ipawiwop.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163qamrfgrh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163afxnurbz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lvfiylpg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163eljurmsd.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zmiadeyt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ntqsoapo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163swozxanu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lhjpbnzt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yismkpwg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163smdecmvp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qmlpwlhe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tsncnxkh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163fvidvjdy.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163kgkusfve.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163rjlvqyco.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163hlpufash.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163doncaxuu.html

TS:   // 同上
来源：http://www.sxryk.cn/163lqxpugdl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wkbzpubx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xusyrilo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163akdadmcj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ukbcmaww.html

================================================================================
来源：http://www.xuanzx.com/163qgdurstc.html

G. 面向对象
来源：http://www.xuanzx.com/163abzhuqgo.html

================================================================================
来源：http://www.sxryk.cn/163xjugipbm.html

[G01] 定义类
来源：http://www.xuanzx.com/163jaeatywg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163dcvlcdkm.html

PHP:  class User {}
来源：http://www.sxryk.cn/163tjncphoy.html

JS:   class User {}
来源：http://www.sxryk.cn/163sltmauwp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163eandntbc.html

Java: class User {}
来源：http://www.xuanzx.com/163anxtpwef.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163kluialar.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163wihmfnza.html

C#:   class User {}
来源：http://www.sxryk.cn/163ivbeztoi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163svrnehbp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163wgeavlrd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ssknoleb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163esibrxxv.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163sieauaem.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163xddltwtw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ugefdlpn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163iyfhiung.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163esfgbpcd.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ocycgiai.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163cgwhcder.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163qlgonsnm.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163bfhjloye.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wtjqrqiq.html

Java: private String name;
来源：http://www.sxryk.cn/163mbvtrghc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gusvvhgy.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mzoqudyl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gyvtdhzr.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ratqltrx.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163vvwynwto.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ffvijmhm.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163slqntqcb.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zvqhwhyc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163vndkiabo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163jcsgptip.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163egpgbqbu.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163pldtdbpk.html

[G05] 继承
来源：http://www.aibaodan.cn/163eawmobii.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163szhvmhqh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xvllvprw.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jdldxabn.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mbkktswi.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163uveglnzh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xktemkaz.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mvjqtxkw.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jusghxay.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nnypvhtz.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163hfhnbtbk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qiqcenyj.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163anbmfqhx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hvzpatel.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163odjvccdy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rrntoebh.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163qwahvmtw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wlkfghxe.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163clrwqsea.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163jafwitul.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163wnyvzywr.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kloyxybr.html

TS:   super.greet();
来源：http://www.xuanzx.com/163waakvfcx.html

Java: super.greet();
来源：http://www.xuanzx.com/163yiplnbto.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nndsjqln.html

Ruby: super
来源：http://www.aibaodan.cn/163fpnjbdcr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163smjckgha.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163izmbbqtm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163pyufkqol.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163albzgtrd.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163aojjksqa.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163vuyydczm.html

Java: static void f() {}
来源：http://www.sxryk.cn/163dyckxhlr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163cnhafxhc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163iiksknsl.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163gnkpvkvw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163joxfpotp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163bssjkbvk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ikebuuck.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163nwaidiph.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163lwbtvmcw.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163csvmpuab.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163magnvdit.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163nomrfrwn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163snsulbwe.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163tppbtadt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163agjzyqfi.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163qxmurymj.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163dwuglicu.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163pzxvrbpd.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163icxbvwvw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163pfujpxia.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rgocdpxj.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163noqpudzf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163qrhredem.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163fmpfsvuj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qikhkufc.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163cfnmsvui.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163spmszuqm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cmysqlqn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163bcrgngmz.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163srclcoay.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163iiblxafy.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wobsnyio.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163iquneczc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163sfgfdcyg.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163sonytxrt.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163avatfumm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ixidhurr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lrkaxgue.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163pqekuull.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163dgaulhhc.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lnjawdve.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163btlunudi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163prgesndz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163imdtkwmr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xhdlverz.html

Java: u instanceof User
来源：http://www.xuanzx.com/163gqvlkpir.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ncagpnju.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163iwkjeudw.html

C#:   u is User
来源：http://www.aibaodan.cn/163rmufllua.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kplwcgmp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163uubcbksv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163gkgpyium.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163awezuost.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163zjggkvds.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cdlpoqve.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163yasxiqqz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qoozwzqp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163lrafgnkp.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ivuhddiu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ftvndswv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163kddykrsh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163begtlupk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163iexuconr.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163igkhozbo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163hrapfakt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cuuhcqou.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yobhwovz.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rajehyuh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163eiptaamf.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163skwhkqje.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wvkbvijo.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rrhkesur.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tzvasptf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mqwqblmz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qrkpnwnl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163mkujhccz.html

================================================================================
来源：http://www.sxryk.cn/163ychtbwfy.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163beusqpuz.html

================================================================================
来源：http://www.aibaodan.cn/163gnfejhkk.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kxinpqox.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163xgdxlhdh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163xyedwxbd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wzlhxojp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xtgqdxlf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163oafuhomg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163hdxrxfzo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163bbkdvxph.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kwcuqzfy.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163vlhhpbxb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163dwfxmlgh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wzhqvlpe.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xzjyxams.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vrilkhoh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ljhxfycq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fabbanpu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163myziiiep.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163gmyuladd.html


<!-- 参考信息 -->