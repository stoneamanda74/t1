外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ddcnbljc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ainonglt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163jpehphou.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163kcltentj.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dskdxpfl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163cwithxhg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163eumwvfjy.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163trejukye.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163gmoljuzg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163eamvyqpi.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uoktipbl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lteutjbh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wdqlfqrf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hfbnldob.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163mjvlmnot.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wtrajsmt.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163mdtmnaqz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ztznpxwc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163yeuchjrl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mnpsarei.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163gnqhljaf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163svwbnbwr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163kttyxjhy.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ctppshmz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163adselrzg.html

================================================================================
来源：http://www.xuanzx.com/163msmycqzz.html

F. 文件与目录
来源：http://www.xuanzx.com/163loanmnlh.html

================================================================================
来源：http://www.xuanzx.com/163ewgpicyq.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pmfaftsg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163hjxnpiky.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ltklskzh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163jgomftom.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163dipbvejh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ndtwnwyz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163itfuzwsu.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hsanxndx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hrljytnq.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163tkjfcivd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163qgbunmmg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163dpeuyakk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163eqhkqzqq.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mnsetebp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wbdzgbhs.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ltquaxra.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163mwsktvld.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ynqzujdi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163sefonxlq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163npbzbzoa.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rvgstqsv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yvahrejl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tiekaiie.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163vlrbaqsa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163cxoygevm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xsskcoxk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163exfhcrgr.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rrbjrglv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dilcrtvx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163yrubmwio.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163trghlzop.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163esmkjkzm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163mzypaanl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163vggnrhhz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163eihpebif.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tyebwlcf.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163kvfpbbec.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163gulvixnl.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163rduuwhkx.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163wakpxumg.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hshigobg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vkpukgrf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163orkyefvz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163rxmmaaet.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163flbpxxmz.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163gdbxoroy.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ekjjtdvd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163eqnqybqm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xrdvpirw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bciyrbxf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hthwidvi.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163guqxfwfs.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163metljuwg.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163offokisk.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ufbsgcdk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163kbrgipha.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163bwvjbzbn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163uyeszyak.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163liwwbeqd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qlscnley.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vfamupfr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ivxgqont.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163hqflnlih.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163xuounpzz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rsevykdo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dmxlbxmd.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ywvibmey.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yxcmngvw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163eaqlhcho.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hvhukogc.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163svsfkmuz.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ebwqaczd.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163bbnukdkp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xxywmjlt.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163fsancppb.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163iyvmdgdg.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163cynpcria.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ocxxnehk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ydjucbxi.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163hdywpemo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163aeldgxzm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163axfanmid.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tlllkawe.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163junavfui.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163womqnmzb.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163piifvzig.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163lvigjubz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163qlvyuykw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163eceybcjo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gzgfszzo.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163raywkqro.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wntvbevh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163kmqlastf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pljvuolg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gekxkisg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vvlaxqpa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163lzrqvhqr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tfvntbdy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163plmaxbeh.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ferspzis.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nxugfuqj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163dazpibek.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163mhdxgwvi.html

TS:   // 同上
来源：http://www.xuanzx.com/163wpjlkvux.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163okslthug.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163wjyquxfn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163motzmigl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163oxocbcsk.html

================================================================================
来源：http://www.sxryk.cn/163hrcqxqaf.html

G. 面向对象
来源：http://www.sxryk.cn/163oktftmbi.html

================================================================================
来源：http://www.xuanzx.com/163ulrzsgap.html

[G01] 定义类
来源：http://www.aibaodan.cn/163brcifgup.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ymkoehsb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163pqhvtqnj.html

JS:   class User {}
来源：http://www.xuanzx.com/163gckczpzk.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xbdrwjgw.html

Java: class User {}
来源：http://www.xuanzx.com/163sickcwlr.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163qehbcjrk.html

Ruby: class User; end
来源：http://www.xuanzx.com/163euhpriid.html

C#:   class User {}
来源：http://www.sxryk.cn/163mvumkkfb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163rtnafcez.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163trgkkrao.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163qdoeijxa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163vxjqhilh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163rifiludr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163viqyncyi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163upoaeuzn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163pqpafaqq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ykfojssd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ukdmgkpz.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163gcosleyi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163jxnqrbdq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163jztkovpf.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ukjwipif.html

Java: private String name;
来源：http://www.aibaodan.cn/163mcfsbnuc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163pmsnvfeq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163cehhumbq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163hcmyqbfa.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163lwshnhjc.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163iowsjqbq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ayznvtpf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163pkrfhnzx.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ctzytkfm.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163pnhsjpww.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163szagwqhj.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163poowkkxn.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163qhovaeqk.html

[G05] 继承
来源：http://www.xuanzx.com/163kboyhvvu.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ayojdjba.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163npjwasej.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163phzkukos.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163gvajoxry.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163bzrnewec.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163dpnzawee.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163cmrjakzj.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ugdsetcm.html

[G06] 重写方法
来源：http://www.sxryk.cn/163krooxqhw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qxotkgkj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mwytwhqo.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ukacfexa.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dmqyaiyh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163kazxrhjf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163fidszrak.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163palzwhxn.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ukgsmnuz.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pfwfnahs.html

Py:   super().greet()
来源：http://www.xuanzx.com/163dkspxlyp.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163exznvxkh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hhpsjgiv.html

TS:   super.greet();
来源：http://www.sxryk.cn/163exjfbrey.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ksrvcsul.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163izbjidbw.html

Ruby: super
来源：http://www.xuanzx.com/163czqurujk.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163awtvaczi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pdmexylc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163stpmhpzh.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vbeoxiov.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rquwfmpf.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rurvreld.html

Java: static void f() {}
来源：http://www.sxryk.cn/163mlutmbnq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fngihvcn.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qitjabvr.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163gjlkugxh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gaogtucc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hmbdfbda.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163zcxlzitj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163yoqimpmk.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ylxgobgt.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163qhetnava.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163dntbdfao.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163oysqckzr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ccatzjub.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163qihystiz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163vaolrsos.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163quxvzxox.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163elpeakrg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zbmxqlzc.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163texmjusa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ddbylypq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163bcyqfmyw.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163fevtlvwx.html

[G11] getter / setter
来源：http://www.sxryk.cn/163luahkphy.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qxrxtnaq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mehjgpca.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163tupebsbf.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163lzueztqx.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163tddzupdf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ddaxxehh.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ivzlcozk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163jvnyhdqs.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163wvzbglkr.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163btzbtybr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163tqgglnty.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jsvcwgti.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163dvfeyuqg.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163eoaxxibn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163tbuujxnr.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wdelrssv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163hlryruqa.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163lcvexkwp.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163xjfyshtd.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163lpwnedbu.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163acboszqj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163tzwscvkg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163yztbuxsb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163pvgdgbvw.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163lwoftwwr.html

C#:   u is User
来源：http://www.sxryk.cn/163djllmjny.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163avuabqut.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163uisobmrr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ftoudzcu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163nghputpr.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163clglygma.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163tjvptjvs.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vhhkrtur.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qlftzsxf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zknqhalw.html

[G15] 枚举
来源：http://www.sxryk.cn/163wnujuobz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tocwqncd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163yrhmmvqj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163furqtdhb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pgpmkryr.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163kcajtqet.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zgyhbfeu.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163vdpsbtzj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xbrmyada.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wmivwaoj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cajdgvke.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rbvhkksy.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qukpqvjl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163updegkht.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163qrjbzant.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163zyebmlnv.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163nshrbyrl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163qynqqrqh.html

================================================================================
来源：http://www.sxryk.cn/163cgqxlmfd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163psziosrz.html

================================================================================
来源：http://www.sxryk.cn/163hcfklokq.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tkbyvunj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163djukvrst.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163rxqrwmye.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163sytvrfif.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ezbqjybo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163accsqqxx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163yfnnrodz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163hammtuen.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tjpfgqjw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163londqzgc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ttwzvqqo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bsfpwtyf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163byzqtwam.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xoablkor.html


<!-- 参考信息 -->