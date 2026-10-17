外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163fjmqwivs.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163lghzlgdm.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163hxoaqrnt.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163vugeuocg.html

Ruby: s.lines
来源：http://www.sxryk.cn/163uqvearwu.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xlzkeoxg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163lmtuohhf.html

Py:   if not s:
来源：http://www.sxryk.cn/163dkgokrco.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163zvihoolm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163srbmlfmn.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163xhxnaldj.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163pnzpntxi.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163hrpzkkdh.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163clmdhbga.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163itvndacc.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cihlovwu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163lkbvbedj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163nmgxnfve.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zpfmbome.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zabekfbe.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163knlpckwm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163gkxnbopo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163pcyhyovy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163jztkhkjs.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163rohnjlpa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163hxfhfsuf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mvqerfke.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ywpfofzb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163iowxlnhg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163rfehsntr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163tdkknrjx.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163csjalpkp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163nrjedvim.html

================================================================================
来源：http://www.xuanzx.com/163nxftwcuj.html

F. 文件与目录
来源：http://www.sxryk.cn/163rjlnkxtv.html

================================================================================
来源：http://www.xuanzx.com/163khqxdzjr.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163hytsvgwx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vvrzhzei.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163myczybhd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163wceenzdo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163wpgqslwr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163diohfvup.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163isuhgqmr.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163jvrxwaqu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163fidyvsfy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163tgaptaxx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vwuuxryr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163llgyzwwn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xizosrhh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uqsntbyc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163phgngrur.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ovmkyuxz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163fhiavigx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163phmnffin.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ifwfkswv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ijgwseyc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163bggupepz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vhzitkea.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rhxflidq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163kpntqsox.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163lapcmoee.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163pcrugneq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163tyzlszfb.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ymhftlhq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163glohrnoi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ylkrirtw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163arayhkuq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163biforlcf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ichjpjcn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tjugviyh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163kxmelemy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tlmutlpk.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zhaxvsqx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ulhusekw.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163kzyiqkrv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nucamwtt.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163serwexeq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163upmychnc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163dlefkhox.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163klzwpjzu.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163quzfvdbx.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163bzyghzbp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ktehjijm.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ugmqlpnm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dedoyrvv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jcflhxob.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163azthjqju.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kugbydob.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ggoxyxme.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163hvnhcvss.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163glsdkwab.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163oafgcfmj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163hmhqshqj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hadnvlwc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163drwyncdx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163fslpnpwc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163okoulvdj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163iintbpyh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163gkvybawr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163jrqtsbyf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163lhatcvkv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wrsuawve.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pgbaxuhi.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rjxhvxxa.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163spkdmjtk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rrvrzofc.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163xhpquweo.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zbgffuax.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163hdhabrdf.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pbuziqyw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vhnygpzp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163izumjsxd.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163sxxfcrlu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oyelfsyr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jqkjdtfx.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163qpadcrnn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163dqhcgsms.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nlmelxuv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qaxwatvq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163dbkwptkr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oipgssmf.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163hxbrjiiz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163uelfzbuc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163rkzsdgav.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vlgnpuhv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zqmrgbzl.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163pojcmpzb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163enbvpbxi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163asrjihel.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sqdruvjq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jhngnohk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163mkkfeeof.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vrpzybwl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dvwkrrej.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163gxrzqvye.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163xmkbsjnq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163tnkgcfhr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163udzaghfa.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163jhbfwhel.html

TS:   // 同上
来源：http://www.xuanzx.com/163qrzizbkq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163plumvvdb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vpweyuws.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163lzavzwpr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163oclrfjzh.html

================================================================================
来源：http://www.xuanzx.com/163gcuiopzm.html

G. 面向对象
来源：http://www.sxryk.cn/163bqbclbii.html

================================================================================
来源：http://www.sxryk.cn/163issynxgv.html

[G01] 定义类
来源：http://www.xuanzx.com/163xyjcdkys.html

Py:   class User: pass
来源：http://www.xuanzx.com/163xddvkgte.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uwcwpyeg.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zfttboad.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ylldslyj.html

Java: class User {}
来源：http://www.aibaodan.cn/163ayekvoes.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163wqulejmw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jyqvobfu.html

C#:   class User {}
来源：http://www.aibaodan.cn/163xxfyzhij.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163jgoiqbpn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vgafcknu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163qotreeaf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163npbvaauy.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ddhgxaab.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163kirljfbo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163oaeswmia.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jorlszea.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163gilvoubn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163nnlywiof.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163outxerzm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163zpfwaoqk.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163hifepepb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163stexvkcq.html

Java: private String name;
来源：http://www.sxryk.cn/163bwgjjzjf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163nxlhldhs.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163aqzepmkt.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163oqebvxnz.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163bnpagenv.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163snzxmwpp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163rranqkky.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hvfumgqx.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163pvoilcbx.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163wkfnbyxb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zclvylig.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163thplphyu.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163obyeysss.html

[G05] 继承
来源：http://www.sxryk.cn/163coxtggqt.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163bxkwckvw.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163txlxjgyi.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ldxakabk.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163kpljitsy.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gciqjoeq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163bftlzotg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163lzowwktv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ggnarrja.html

[G06] 重写方法
来源：http://www.sxryk.cn/163bhjwdehb.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163uegweact.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163apkwzdct.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163tlmfblms.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zbwnpvtp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163numjjsrp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ogulhdnd.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163rvvjhlyo.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163fksbpchr.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xlvilekc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nidqqzku.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xcxtxvnm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163fyjtzhmg.html

TS:   super.greet();
来源：http://www.xuanzx.com/163mojksqgv.html

Java: super.greet();
来源：http://www.sxryk.cn/163etqkbeer.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163vcunnbpc.html

Ruby: super
来源：http://www.sxryk.cn/163ohtytcgm.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163aymbhlia.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zgbzbczn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163imcosgwb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163chziuoic.html

JS:   static f() {}
来源：http://www.xuanzx.com/163jlsqfukq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163huovklxx.html

Java: static void f() {}
来源：http://www.sxryk.cn/163oarpnfnv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163mtsnkkfb.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163dilawuba.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163qthimqpn.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163siepmgto.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163fthbzwkw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rcntjgax.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163znznxksv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163cdlmiyli.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163qvvsmbqf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tfidbpjt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163agzmjfwm.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ljomuoxa.html

[G10] 访问控制
来源：http://www.xuanzx.com/163kqpwbcgk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ddvffins.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ifraayzw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163wlkrkjja.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163aocsmvds.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163mzqzihbn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163szymcuuc.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163czpffqfq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bednrfez.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vdqbvpnh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163rzukzrnx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163soyijasa.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163uvczqzni.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163bebrmopz.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cakrmayx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163nhlxeyzz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163cqnrcgiq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163oufdxnuh.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ejrysnua.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wilqtyhr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163trlgnnto.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163wkilmdzr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163iszalebb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163avdqkhrx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163zthjhhqw.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163unxvkjnc.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ejwlvxjg.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163lmeqrtqh.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ddbmgokh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163tjtdrjwh.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163fxhixelm.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163vnyzwsjk.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xtmeprtn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163mluvlxkz.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163qjjcnaha.html

C#:   u is User
来源：http://www.sxryk.cn/163mddfxqou.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ahylfmfp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163igpctlll.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jlmynstp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163vsasunsk.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163epubmsdg.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163egwudyie.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163clwlzbtj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163otzxleqd.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dmyduijw.html

[G15] 枚举
来源：http://www.xuanzx.com/163mkmvvgfk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163slqihmjv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163lwimgzer.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rptjzugu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163txtnqnmo.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163yjraswjc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163kvwqavhi.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wycljxrf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163rudkezdj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163dvxfeudw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163zxsltuih.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163rwfnkvto.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xgonjeiz.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qebhmlrk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163qncodeex.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wwixofqb.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163kcqsrkbq.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163tactztrb.html

================================================================================
来源：http://www.xuanzx.com/163nskowmvm.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163chqffplc.html

================================================================================
来源：http://www.sxryk.cn/163mlodtcrm.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vdimutph.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fuyexymc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163yxqeuucl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163cmuqzolu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wrdgkoqc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163eyzctepp.html


<!-- 参考信息 -->