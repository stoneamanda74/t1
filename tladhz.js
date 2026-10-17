外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xtgnmikq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163umavzyjf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163geeharqb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163nmvqtspj.html

Ruby: s.lines
来源：http://www.xuanzx.com/163pwfamtmp.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uzcyzyeh.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xwsssstm.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wajbshnq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163siymvrdf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tpcoxlhi.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163keinuldo.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163atyjdlgl.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163qrboyapm.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163gbxsimtp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163blnwhhzx.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163avrkkrpy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qpuukhaa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163aarpzloy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zuazztlp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cpqcilma.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sjthatfq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163xkxrjbry.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ixutobwr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163cgzoxoej.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163zdkajoso.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163oflmmsbs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vdkgvxdt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163indfvbfl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zvqagqul.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fessxeip.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163bnfxusvf.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lpqgmlar.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163cxtzkrjj.html

================================================================================
来源：http://www.sxryk.cn/163sttavish.html

F. 文件与目录
来源：http://www.aibaodan.cn/163dyjdgsbd.html

================================================================================
来源：http://www.aibaodan.cn/163zsiwllyb.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163krpcyosu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163osgersiv.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xnmpubua.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ltjeirzt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163sbbesptx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rnobhbhi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163pnqwtctd.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163qqlbajgr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zpgjclgn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rdlpoked.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163duayzovp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163myfjmqlh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163elanuwki.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163axbkuapv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ajqodama.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nxclbpgd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163eigchmkw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163oeyxigjk.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fsmputaf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163jnrojjdl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xwpfyygb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tnnlnrox.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jgkfcgwa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zzjmzuri.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163fjfnychd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ohehqwdv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ewarlgzc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163jyftqljt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163qbigiovx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163nguozrsz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163uamdjdbs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zljokkhp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163sceokyhm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163wwsdswiw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lvbpvhte.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163fkqjbdzh.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rkftakpx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xnyrzqul.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163zlgfxwzz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163glxyptfr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163joqljfij.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bckuqmdl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163njejbufi.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163kzcppghi.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163qeybahza.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xdphetlz.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163mewsfmnm.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163gfxtkpmq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cylxpxxn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vjqrzuep.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163stssrtsu.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163fvucooyc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163juqushod.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dfzekfiz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163glfmtqgj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163nvirsfvu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163xvikhqxp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cqfobnev.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163expbokop.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163zurnnfjr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jtzccgph.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163cjhvaane.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163svfcjrrs.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163axdypctb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163xmcnhdae.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163frmpsmwo.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xrczztqq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rzdetxnj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fvpnltkn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163zfrrlokj.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163iyoqvxtv.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163pnnvubbx.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163enhtefwt.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163klwivhck.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mboyvjoj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nnwoikfj.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nareekhc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zddczbfy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163cknlqptb.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163nsdzexgq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rmxywitv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mwnvxekv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ucpuidsl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hddyngij.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lylavaio.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163dsunsxzv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rpburdyw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bjtjzthb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iogyprrp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163cspinurk.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163obwekddc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163btfvkbzs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163eorjwawy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zochzszi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tjuykqlu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163spqxbpar.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163gpkhoamf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bnnljlfd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163nyduhdvo.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163uljotygb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163rcvoohgy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163eupfypic.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163bqihnxbb.html

TS:   // 同上
来源：http://www.aibaodan.cn/163jwldhycu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163tiuiayft.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163duchkukf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163vwtccqor.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wgzicwet.html

================================================================================
来源：http://www.xuanzx.com/163obgmmzhg.html

G. 面向对象
来源：http://www.aibaodan.cn/163tdhwoshh.html

================================================================================
来源：http://www.xuanzx.com/163tosejrfb.html

[G01] 定义类
来源：http://www.xuanzx.com/163zqfuxnzv.html

Py:   class User: pass
来源：http://www.sxryk.cn/163aqxpvbla.html

PHP:  class User {}
来源：http://www.xuanzx.com/163dcqzutrf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163cfmfjqoq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163yqrydnmc.html

Java: class User {}
来源：http://www.xuanzx.com/163wqpacmst.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lhpciegm.html

Ruby: class User; end
来源：http://www.sxryk.cn/163gvgzdijm.html

C#:   class User {}
来源：http://www.sxryk.cn/163uvdyhluu.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ixkqejyd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163yymtrpoj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jnrbytgu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fqcxobau.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163nlndmwik.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163szywqehg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163aktzygzc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163rwscbixq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163cnfwtkvu.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163fdgwsbwz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163nswoictc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163oweytyuh.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ulpkpkhq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163spncanmb.html

Java: private String name;
来源：http://www.aibaodan.cn/163xyvwbrej.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wpbhyigk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163tjrhxkde.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ygzqoavg.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163neynimlh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zlzhkelf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lagasbmm.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163subnhtmv.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ouweyrgr.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163pyyrnnxv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ynudynid.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qiwfsbfx.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163dsczflhb.html

[G05] 继承
来源：http://www.aibaodan.cn/163nhkbnaee.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163pgjovejt.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163inqirurt.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nsbguzkg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vczlwtgc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wxzvlkgq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163iosxjsjv.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163idcovrux.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163wbpibltg.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163kmrwfbxk.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gqaaekvc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163trypzfmi.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163sobtfugr.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vzsxkyfc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163uagymkov.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163foqhkypj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163mwtzkocg.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163uovzwyar.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163fnvighfl.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ctmettny.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163cwnneihs.html

JS:   super.greet();
来源：http://www.sxryk.cn/163gtnbawgp.html

TS:   super.greet();
来源：http://www.sxryk.cn/163euzjffkm.html

Java: super.greet();
来源：http://www.sxryk.cn/163bqbzxxrp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163yfwrmwyt.html

Ruby: super
来源：http://www.sxryk.cn/163cctoszex.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163mercqyxg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xlfmoqht.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163veodrclk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163mhpgxrkj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163lrasxofk.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nxulzmfc.html

Java: static void f() {}
来源：http://www.xuanzx.com/163trggpczf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163mvgqkwso.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163tnimcckb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xuxtivyh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ofjmprxx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163qcjofywh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163qafgshsq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163sxjeudut.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wdkzzids.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163xijczubb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163vfairwwq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163kdchztyc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163gtlvvjys.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163nabhgwrp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163klgzkdcb.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163opoqukxh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163etcebhze.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163guookxse.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nlcfoumc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ljrqslyu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163geuldnit.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163kglcgsxs.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xnsfiqua.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163uamyqnyo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163knzfrfol.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ucaxyxic.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163lmqqblmy.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163nzlljxlt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ialszmnk.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163iyibtrov.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163cyttmlax.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163nhvcgzie.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ocveayad.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cwpvbdeq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gbbrtsxb.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163lrlmthkl.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163krthgqjs.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163hyjhfidz.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163axwkqwre.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pejfcxaz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163usrjdhvw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163uywetrbb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163rzedrmye.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163euepxvcx.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rqoezlha.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zikzprom.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qrwnmdus.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jgrbxfnk.html

C#:   u is User
来源：http://www.xuanzx.com/163bpdugaxc.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163yihnwtjv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163lamlymwq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jlsxmpju.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163leqhwhnf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163lpsngzel.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163clvafkwc.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163nxrcggqd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163njpnliyg.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163cbsgpadu.html

[G15] 枚举
来源：http://www.sxryk.cn/163ibqvxlnz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163yghleiqr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qmvhbnnw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ewpjkiqu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wuoxeiao.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ruuzzriu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163puanxxoo.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163gfsegdoe.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jdkbhnvu.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jbpiqtsk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163odiuthtx.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163cunzklmp.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tgndifyo.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lzzrhoaq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163yfpkxppa.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rkbomaeu.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hfsdfrso.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163mzdbvige.html

================================================================================
来源：http://www.xuanzx.com/163xfrcvqqo.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ciiphdsl.html

================================================================================
来源：http://www.aibaodan.cn/163ocwqvzbp.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ddrqsxls.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bflmgwks.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hxdyiwlz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cxcuduaf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ubhiyqnp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163kdivrdwq.html


<!-- 参考信息 -->