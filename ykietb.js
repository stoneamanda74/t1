外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qtotjixa.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163gcuvqhvk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kksgebzk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163luqxzipt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hstuogza.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163idqnkbzu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163gsqmyqoq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163zyppqxto.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bmpjdfoi.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mbgjdqlm.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tqjhtsit.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163fyoywqpp.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163doloiyrt.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163sgfdunfg.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163mzdskvgb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163cpxiakfl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163egojfhuv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163mqdogylg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hqozlamx.html

Py:   if not s:
来源：http://www.sxryk.cn/163rfjmrpou.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163gixaskkl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163iulsgvzx.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ogegohgd.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163rlqwyifx.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163pdfrhreq.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163orxihvax.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163cpkmbanl.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rxczwmfx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xjurizcy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163wsgrnlhb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163evoknabk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xvgklphg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qubltusb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163kiewekrp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163lrzkqhsn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163kjyijbhz.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163qcdltdyh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163faycgjxj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ozwalmyu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zkqdqkcs.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163tsezctqn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163zjdxjpus.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163hfnqurjx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163haywydnj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163yclsimbr.html

================================================================================
来源：http://www.aibaodan.cn/163ynfcbbik.html

F. 文件与目录
来源：http://www.sxryk.cn/163taldjbhj.html

================================================================================
来源：http://www.sxryk.cn/163hmleunny.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wucuvhze.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163uqtmiuze.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ifiwzjcw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163yveoogij.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kzcjjzni.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wldowcfh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fllfctxr.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163tkmljqsg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163aszabbzo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163enytstnu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163mxqtdtel.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163pejkouhy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jhddikpc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163pcykxazw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tsgsgfll.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ddnudcnm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163nlsamnym.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ucjziulc.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163tqwalqdx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163utsjeikp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163hrpctiiw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yhxyaolw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ynsldpum.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163yyqqeysc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163cqotlers.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163hdmjxihv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zpdqdilr.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163nqpwdlah.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ewedcqcw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163imzyaixk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163eiqvcvou.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rdtmsgmu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163mhuigqyj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163sfymjafb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163inrsqmag.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ovkokehg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163zwychbso.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163znmzheij.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163cdxpfiht.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cwwkfiem.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fucmdojy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163stryxkmh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163epqgfefg.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ogddbqzc.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163drxhjvty.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163jkplmzzx.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163gyqosujc.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163rhmwgkmq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ppwuvagt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vtqykepl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ctxhxrdd.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wsmpwwky.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163abigfgsb.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163woyyqtwq.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163kervbswy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163rggblkyg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163bbxqzljz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zlvnvuni.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jnqjuwbl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ytwyyddu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163npiwthiw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163isjqasqa.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163tamugdkr.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wztqfisu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ufovolwn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163sydjbfei.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rcbeszsg.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nzhtgbhz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vfqxrmfo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163fzzhlpbk.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163exkmlqew.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163gtzsjwgh.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163dintdebj.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xgxgaopo.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163crwmutww.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xulwnbhm.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gbedacxr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wxqizzrm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163zxprxjyu.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163uictyhlv.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jhsoeucg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vnlnwrhu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163eybcgabn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ozgnbmyf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dobgwgpw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tdnywyiz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fgxenpeq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ycnzqtje.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fzjmlsmw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ofiuxrda.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163jbtnmpal.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yucyjdfu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163chdlfzio.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gygslrkz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jarcmzgn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163fzjkqkly.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163fwytzyij.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aqlafpkr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163cqpymqtj.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163mgoubrzx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163qkbixpcc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163atxmifkn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ntuyysid.html

TS:   // 同上
来源：http://www.xuanzx.com/163iyxdtzgm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ksrscpwb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ikeybbut.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163fpabngwi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163nhpavbmb.html

================================================================================
来源：http://www.sxryk.cn/163zzqmajdq.html

G. 面向对象
来源：http://www.xuanzx.com/163xqujcfcl.html

================================================================================
来源：http://www.xuanzx.com/163rzfmkasw.html

[G01] 定义类
来源：http://www.xuanzx.com/163qztykamv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rvpwhgeg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uqkdgrng.html

JS:   class User {}
来源：http://www.sxryk.cn/163pmnyaanm.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163glqqdrwf.html

Java: class User {}
来源：http://www.xuanzx.com/163byhdlkmd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163anprytzv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jjfzqvaj.html

C#:   class User {}
来源：http://www.xuanzx.com/163rsmaeqyd.html

[G02] 构造函数
来源：http://www.sxryk.cn/163bjxteefo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163hsihgkrf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163tpfwkoaq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163bjyrijrx.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163bcvnswpy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163jktfuqdl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163hxnluwlc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163lurondkh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163bendttad.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ssaiwgks.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163gazywtho.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163bpomqnwy.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163oieimibt.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163yfgnqwkf.html

Java: private String name;
来源：http://www.xuanzx.com/163qmfmvdrx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163opeqweoi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gnrueirb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163yztecrxl.html

[G04] 定义方法
来源：http://www.xuanzx.com/163uxatcdjk.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163kainvctk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hdllxlab.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163pmwgpaid.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163itnonwxy.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163wnwtkgul.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163tmsgepdo.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163rrxcyggn.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163puykcyip.html

[G05] 继承
来源：http://www.sxryk.cn/163ywscfckq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163zvmgtywp.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163nmcvncdr.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163matgmuvv.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163phuduquv.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163txihvily.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163scdzliau.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163yaergimm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163fahguork.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wvyqwteo.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ydmogujr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kzjbieho.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ogscpybs.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nihkbfje.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163dapdsucp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ejzxmmoi.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ksfhvgot.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163cktmzolq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xeipoejn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163kbjjpjxl.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163pepfwnsp.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hpoyjkuz.html

TS:   super.greet();
来源：http://www.sxryk.cn/163seusnxhk.html

Java: super.greet();
来源：http://www.xuanzx.com/163pbtmgymc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163yoljkmds.html

Ruby: super
来源：http://www.aibaodan.cn/163kstavcsg.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163uqueollg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qsmbzemp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163xfrxoyal.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ndgwnvbo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163fqjtdwty.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tiupuker.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163awvgnwqn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163mdgivhfv.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fgtfhagg.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wsjbsgpi.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163dkklujka.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ywqpiggt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163tmcnxvfw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tvuggdxh.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gpmepvey.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ndxjauzt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ieqtbjei.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gohkdsgc.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163fkygaxeu.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ttnnkzrm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mtcrcleu.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163zdsgvinn.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163djqhtwrc.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163myzrwwhs.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163trmtczse.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gawmgylg.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vdjvatms.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ipoxwioi.html

[G11] getter / setter
来源：http://www.xuanzx.com/163sollkytv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163whfxicwi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rhqvjsne.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163amajxaoj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163zbmchons.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ldvnogaj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163yuurjnvx.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163sgcxpfdm.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ggnkcert.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163trdnicwz.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163cynmocxy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163slopnxur.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163yahwwpgm.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163cuvgpfet.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163jjdfbhbo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163xqdnccqe.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ecqnctfu.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163gswqtbhq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163txrtohbg.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163vqwdmzby.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163lrllvvem.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163kaqliwmg.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163cznxptej.html

Java: u instanceof User
来源：http://www.sxryk.cn/163imqvucnl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163aqbuzvtk.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163lrornktk.html

C#:   u is User
来源：http://www.xuanzx.com/163zeoywrwn.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163cwjrucxs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jdwolphz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pfhfmyhn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163brhpyypo.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163lvfoetdx.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qchhqugq.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wmcatmof.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ezzcwwdv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163emzrbeog.html

[G15] 枚举
来源：http://www.sxryk.cn/163toynnrwu.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zidyivgu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163sbfnbdxv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163taztecum.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163numwksco.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mjhxqnwm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163bbozmyux.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163kqypusdr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nlzpdnmb.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163nxbtulhi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163jdwvahff.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163bfwnihkf.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163arqdxjbm.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ttcwrnst.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163oimesrqi.html


<!-- 参考信息 -->