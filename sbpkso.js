外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jbkpuyge.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163daqaxkml.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ebadrawh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163dqecoqta.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ljflukya.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163zwnzrber.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163buhnvxwx.html

Py:   if not s:
来源：http://www.xuanzx.com/163kvssjjwj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qjfifigf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163wtvdyfbe.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wndwyfzz.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163etdglkba.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163peawgchw.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qykobiwh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xaxsswwi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vysdamzt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163mvbrbehy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163fophdfub.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yvqxpwao.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kmsswrhi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163upnspmsm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ilyqtfpq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fwerjmse.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lgrkfyij.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163evqpnzzl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hzdvyfls.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pmxagvdt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pbradmwl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163goirmjer.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163pzrkystm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163snwfxhks.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163fhoshxab.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163feojgfzp.html

================================================================================
来源：http://www.aibaodan.cn/163sfendemn.html

F. 文件与目录
来源：http://www.sxryk.cn/163ppnxenip.html

================================================================================
来源：http://www.aibaodan.cn/163xavykevp.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163rvqvilml.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163efcinfhn.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163pdibuoey.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163wdkrmuek.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qyuegpvx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gzowzzst.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163djesprfo.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163labtmidc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163njvwyhoo.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163alnpwcsf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163biyxyeeh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163hekxlwcc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jkdvjhpe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hmhcgcbv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163abipovin.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163jyfybvle.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163elwfgnve.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163bctqhokt.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163mrkzyegn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163qhhwntsy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ymvdduev.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vacllffr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163odtvkztf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163gqfsvmrr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163tqgccmkn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163anvuohos.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ezvezccf.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ihcasfqo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vrevsanz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163mogmwjux.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vqjdotwb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rleulgzs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ncyspfba.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163dckejhnt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163dyurvzxg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163zwhzmznj.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163dzgryyac.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dcvwspfw.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ijraufjo.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163aiujslys.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ukxfvlxa.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zsorytqa.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xewdnama.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ammosxde.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163seyryqel.html

[F06] 删除文件
来源：http://www.xuanzx.com/163lpnjhkkp.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163hcjxeclv.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163owvtigzz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163njxgvwav.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163eeqfjmkg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vigxpsag.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163gcciipnj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163lgiynkbl.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163gfblouww.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hrfrizwi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163yddbusui.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dqefacap.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163sqzakmtj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gsccqpoq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163yhrlrslz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kyjyqecj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163svrnkjqx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ijjjflqn.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qxzchbqf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163aiujmbak.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163loxmzbcc.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kozbfceo.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163onkfnkuk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qxtusgjr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163eafmncig.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163yvheimdt.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ntjexrnl.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163noqxegkx.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163zssbjftd.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163qcfjdukd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vdkkxytj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qdlhuzlj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mjdivhrp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ucqixrdn.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fsdxekeb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163umotzqzq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163sqflwuhf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ihqlcktx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163awoudaxy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163baizexck.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ercbmbki.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163lzwsqvky.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163migknpam.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xemztlml.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163umxmkbfj.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163qwvjmpeq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vmazgojn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163lnezjoqh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bjwfetgx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yqwyfxvv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mvwejgyb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163hcjhygmp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zzwtirfi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163jwlmkisw.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163goygnyso.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163abrysjsn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hwcygfyf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hjcllfii.html

TS:   // 同上
来源：http://www.aibaodan.cn/163fqdnxkxd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ayducobv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163yojbdfii.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163oxujysoq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xteqmqlg.html

================================================================================
来源：http://www.sxryk.cn/163efvwpxid.html

G. 面向对象
来源：http://www.xuanzx.com/163osijbosz.html

================================================================================
来源：http://www.sxryk.cn/163bihimyam.html

[G01] 定义类
来源：http://www.sxryk.cn/163xdtqyuui.html

Py:   class User: pass
来源：http://www.sxryk.cn/163jahpgdkt.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163nifzhhuj.html

JS:   class User {}
来源：http://www.xuanzx.com/163xmxmbwam.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163qvxhwrrl.html

Java: class User {}
来源：http://www.aibaodan.cn/163sqzxdpmi.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163sedjslkk.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163qymqykss.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ttgvdjmt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ctcjguoz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ctvmmpzq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163tysshsuj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163igstntbn.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163shdrnmgy.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hthgihpy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fvmccnrj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163kxslbbhn.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163mhkxcwqx.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cerqvbbd.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163afxbtqmn.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163sdbpuofl.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dwqnhrqb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163fkqsypli.html

Java: private String name;
来源：http://www.xuanzx.com/163wxybnmbj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163hbjnilzq.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163vxkeotfi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163mnimlctm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163midlysan.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163xzernfum.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163vhgiakyq.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ndhowxnd.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163efibvcxg.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163agpbhowg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fxtmmdwa.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xsmkinkk.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wsdlzspx.html

[G05] 继承
来源：http://www.sxryk.cn/163gpyzckoi.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xqbckiwn.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163gshlijoj.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rkcqzydj.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mpxgpjxg.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wdkuugbx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ehvvwcgu.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jecsudyd.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163rvziebux.html

[G06] 重写方法
来源：http://www.xuanzx.com/163xqnsffrj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163pobnozlp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163urtuvbhg.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163eoedmmzz.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cqjqhyav.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163qadsfjqh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163fcjjeote.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ufprprin.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xkrzgrue.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163hpxgqnhw.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ryxseqdv.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163edyqaokg.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cxkqjiqp.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163vorbzcyb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vookgmmb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tqxzpxfj.html

Ruby: super
来源：http://www.xuanzx.com/163ythvxdwh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163uczewlum.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ldvrhbmv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lrzovybe.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163fyzpguky.html

JS:   static f() {}
来源：http://www.sxryk.cn/163syqnejzz.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163dwkxtdel.html

Java: static void f() {}
来源：http://www.xuanzx.com/163bxjitfkv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163cvsfgiof.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163tyvvocfd.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163xnjckeoa.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163kjcmnpnm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163xwipgelh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163bgtlvjzb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cmterftp.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163rtgmytrm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163aawpmnzn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163efkmdmte.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163nmibhtww.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163hulmjgrz.html

[G10] 访问控制
来源：http://www.sxryk.cn/163mzgaieuv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163llplvryn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163aueknijr.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ijjtgxwi.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ziqhjmyj.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163arkugivn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lumfxlcv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163zcmjjnns.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163phdqcqzw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163epeffxfp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ahrkrmfl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163zuuywxjy.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163itkhvcrn.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163avcksqgj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163rnhvvvgf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qlrwwdfv.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163sznxfwew.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163fmmflbql.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163jxwgjjqt.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163peafbtja.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vduahpvu.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163iwttvroi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163afggaxge.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163pervouwo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163hepgylsw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163zqlhkeyk.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163fvwuxoya.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163kgkomtqo.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163chppbwcc.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163xapqwbmh.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ocxbykjj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163dcadebru.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163bwwjofnb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pixxzsht.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bkbqbhfs.html

C#:   u is User
来源：http://www.aibaodan.cn/163wlbiyoti.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163iybiawzy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ijmdipbq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163bbytkbam.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163aupojalx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163opvuulbw.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163lrjofexm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163slonaghn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kuttolje.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163pitkcfvn.html

[G15] 枚举
来源：http://www.sxryk.cn/163rmywxlwr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163kvnojmuy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163fogaroqb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163nubcmbfo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163agajxmkq.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163imosssgq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163idumsocl.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163poygtkzl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163klpebifs.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163otnysulg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163tfzxozkg.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163emlufakz.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xxrvohvp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ipznyygc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163bdcmqwvb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163hvprmtlm.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ejbozytl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163auvmtolj.html

================================================================================
来源：http://www.xuanzx.com/163zrubgohi.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cfnfnbcy.html

================================================================================
来源：http://www.sxryk.cn/163snsgkkad.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163lfpzqzzp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163oyfgxoal.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163qxiugsla.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jlqulkji.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ajbtwwfh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163assuiykz.html


<!-- 参考信息 -->