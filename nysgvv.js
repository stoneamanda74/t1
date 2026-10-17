外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ayyazoxu.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ucprvxze.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163fylrhdqn.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163eyhlcacw.html

Ruby: s.lines
来源：http://www.xuanzx.com/163waeviyba.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163yhjprfjb.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163xevpiscw.html

Py:   if not s:
来源：http://www.sxryk.cn/163qkjjvveg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163nvzdiwta.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163rvccpfzq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163svbzqzec.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163rmsoshhb.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163qfougvlp.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163zpvjvjqb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ttopulid.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163kqydydgn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163tsqdjyil.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163tcddwyrq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163muqrrria.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cpwcgrea.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jgffilfe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bcdzkijw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163cpkfmcxg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163mdaawmyz.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vykrunmr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163uvgtivrv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bumujtxl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cphbxffw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bdbdetqr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hwjhqojy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163nxxhzavt.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163yhasctjh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wdozodjv.html

================================================================================
来源：http://www.xuanzx.com/163idazsjhr.html

F. 文件与目录
来源：http://www.sxryk.cn/163iarsqjuw.html

================================================================================
来源：http://www.xuanzx.com/163pzofppux.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163sewrjcup.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zbkujyne.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163jcsvnayn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vckyajeu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163nvdqljpt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163aftkrjgf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163magegrxh.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ktamuncy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163szemmscl.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163mqhmkxqz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zwvhbwwv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wstfhnet.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fpwxwidx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163eidxnzvm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163erdgnqom.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163lraevyni.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163qvthobeb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ewzqrcil.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163vteimvbi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163bkktcspo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163pwaqwcxd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zutjycpj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163sayqqlak.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ayzthsmq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qlqhcrup.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163aroerbmc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163asyzecol.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163unnznstk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163datsolns.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163pfuppkqb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hovtpvmd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163clrhcvin.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163fixzquub.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163epcndvqg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163uhfkhhme.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163jcxikxdg.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bgayvxxi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163yooxagmj.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163itlquxku.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ddygfcpj.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xqrscxer.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ymhicgby.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163kqchhtcu.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163nsfavfwr.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163kpldsznb.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ggtgxysw.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ixscijnc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fmlbunhz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163meekonrq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cvfwgrmc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xrcxoguj.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ojjfgvqn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mcefckww.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xwawemib.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163okeqqfye.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ewgahdmq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163jejqcwso.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163iamgojog.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dohgehjd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163quxvmkvs.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163foslorri.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163exblsezv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163czdmruyo.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fdurzgix.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163udcdgkmd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vuhafpmm.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ruzwedmm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vwcjmubr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vgofznzd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mnsxuzfl.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qplaeipz.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163fnxjgvim.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163myhvzgya.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163bppjoots.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163pwdozavd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pmurzwgt.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hojfnhth.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tnufyoxq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163geeiqulq.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163mijsymfs.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163kgpjkddv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bmcsscez.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pfjwmolo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hupffzkw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lsrnldye.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163fsmampto.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163qxkfuxnn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163sudkrxbe.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mhknfisf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163acswiwxa.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rpdiwxxz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mgaczboi.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163dljlwmtc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ipvjyfkg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cbgtuedh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163mftwtpwa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163fbpawzyl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ulukshnz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163btvsaezx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163stkvgowb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ohkeudok.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ddjdnlcp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gzirvawc.html

TS:   // 同上
来源：http://www.sxryk.cn/163obddthcd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163xpfxsnhz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163khegrial.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163peapvmpt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gbxyccye.html

================================================================================
来源：http://www.xuanzx.com/163klajptnm.html

G. 面向对象
来源：http://www.aibaodan.cn/163jzycnmtt.html

================================================================================
来源：http://www.sxryk.cn/163abuyiqbi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163npejdgcy.html

Py:   class User: pass
来源：http://www.xuanzx.com/163gfxvvfro.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xwcqkfjx.html

JS:   class User {}
来源：http://www.xuanzx.com/163qethkiqm.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163sxcyfiuz.html

Java: class User {}
来源：http://www.sxryk.cn/163qofhakrc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qavmmlji.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163avfavsmt.html

C#:   class User {}
来源：http://www.sxryk.cn/163kzvwpwob.html

[G02] 构造函数
来源：http://www.sxryk.cn/163caeqczzu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163luugygwv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163npngypmz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163hjupwmww.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lktuoyou.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163rrsqiuhq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163zjgkmyyi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163gvnkqyrh.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163rgjewsxu.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xrieulqs.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jvbnnqrc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163vfivozxg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163fuxjwxyc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163kpnutrvd.html

Java: private String name;
来源：http://www.xuanzx.com/163gofnfuzg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163laxcfbka.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163qmhgalaj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163akxbgren.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163khdvgrej.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fpnjwrnn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dqfvjaad.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163abkyspiu.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163vgtwwvio.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163bwbptfbu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163zjcvkjcc.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163dhkzclyw.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hxlkargd.html

[G05] 继承
来源：http://www.sxryk.cn/163inmgqsif.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vvyqexre.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163dynpohlz.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163paxqtbxt.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pezklpir.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163atocceqm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zgazqaqk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163mgauyosf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163cagcifqm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163zktqezsy.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163jswdmdqy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163awwarngi.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163icvitnvr.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163aomvwluc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qpydtshu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163egqyvrny.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163aoxupuhn.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163cgmzcycq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163qvesgoik.html

Py:   super().greet()
来源：http://www.sxryk.cn/163cewlynkd.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vgsfvtln.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163kzmbtloe.html

TS:   super.greet();
来源：http://www.xuanzx.com/163kckuvpra.html

Java: super.greet();
来源：http://www.aibaodan.cn/163sjzftnro.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jxoevuiz.html

Ruby: super
来源：http://www.xuanzx.com/163pvqrpwnw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163iqerpzdz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163huuxpedv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163qzwpzgjk.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163zkmdohpx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xhkzseua.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cwykjkpl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163qwuooclj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jmjhtbfh.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163qwapyluw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163mzvgamdf.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163wgwigarc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jocmyvas.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163dykxuvwz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163orxfftud.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ldspmmva.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163isiaqomy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tncagmfl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xyzzcavk.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ikjykmao.html

[G10] 访问控制
来源：http://www.xuanzx.com/163aarxvxpe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vcizkpwz.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163rpcrszdv.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ouhylfqs.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nggcajzz.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ozbshdan.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163cuwlulyr.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wmsfjtpy.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163dxkowwon.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vlocmlaq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163sbdxvrtx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dyjqgcrc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163awmlxmig.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ibqhskjl.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ethrdxgu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ambxwsvy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163awpagipc.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rlbdrxvw.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ukhleiyl.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163qvprggpg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163atebskgf.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163moakxjwc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163rowyukaa.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163iciffdmi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163fltflkch.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163bwmfnzxd.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163wrltimly.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163svlwzspc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163xhdffyjw.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yzouknbq.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163skzaiitg.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163svtkxzmq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163erlycavs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qictlzwl.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mxqeclss.html

C#:   u is User
来源：http://www.xuanzx.com/163nzxpewtu.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163hkfuwcrc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163foteckyg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zlozqtri.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ybheocvn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163jnuuvcuj.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163xtuvmrfl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163khsopgup.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163qunoolpw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hxtxtpfj.html

[G15] 枚举
来源：http://www.sxryk.cn/163lackdwww.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163qtmqulon.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163svhehuel.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ojgbmxsl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nhfwprdr.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163icdtdgoa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163pgwnlkoo.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ghwtywva.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pbhmghyd.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qctmuiuh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163mibiuzlz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jeydgemh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163utbbjojp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lltykatu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163pdzckiry.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163fgaixvfb.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163eywuqcwf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vrtcrsos.html

================================================================================
来源：http://www.xuanzx.com/163zyqpgazn.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163fwlvxobg.html

================================================================================
来源：http://www.aibaodan.cn/163qxndvvtf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163zpfewnvx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163imlqtjdp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163tdsydnuz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ffcwdrjc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163zwletwal.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163buyxdovl.html


<!-- 参考信息 -->