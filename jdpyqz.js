外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163cynmhnxm.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163zhtfrzdm.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ttltnvzz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163dxgepisw.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163oqegdfnz.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163tmsumwlr.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163hsathxvj.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163plqohhkf.html

Ruby: s.lines
来源：http://www.sxryk.cn/163iatyfdss.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163sehahado.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163omaxjzgh.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ajftpnyp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wvdluovz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ifklaodi.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fuolbjpi.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163bixkweba.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163dmsnophe.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163owavoivf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163kcwolond.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163zrltlmox.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163sssneohm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hubtkeex.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wopogswb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hdvppsig.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dflkslda.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jsuffgch.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163oodnxofh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163wlbgvsdx.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163tbcvmlcb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163rzdbajck.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qdntvaiw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163otnuzepm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163apasdoqp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163vyiyoazj.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qmqcazer.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163vjmudfse.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163bouvvqek.html

================================================================================
来源：http://www.xuanzx.com/163efhuppfe.html

F. 文件与目录
来源：http://www.sxryk.cn/163wibiyakv.html

================================================================================
来源：http://www.xuanzx.com/163auwqtvqt.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gbdvphro.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163isihgtce.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163exblvicp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163gxpojuou.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xlctvwfy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yutlzade.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163jjhafbeh.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ashuwkjo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163kaaemitz.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163cirqjobb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163uegjqcps.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bwzgsumb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163oijhhagp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hraaluzj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hyxxhxuq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163pyxmeldz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163jtrocfqn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163fnfqptqb.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163cdyjxyzh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163tpgoevbd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163tthjwhne.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wpvjgqua.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163krjynztc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163sqrhmnhs.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163lelocypz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rhujejqc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163upjopdsn.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ukmflnay.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163wkzhyfcw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163wbnynkky.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kqwgwggv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zqgdgzed.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163zwqtitcp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ebpadtzu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163geupldwj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ifbwrquo.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ylmuqkpv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mnmbrbgy.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163cbbfvnyj.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fjihmmmd.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163cbcuqnne.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fkmvawhj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163brrawdox.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163stmskfiy.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ozdfwqfe.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zlylbpmi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163qdakwtbt.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163njftrbew.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xkuthtwn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dqmxvuba.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nrrzcyoa.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ufcrgfpf.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ibukqtag.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163gywhgjqk.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fchxhwft.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hjwhzkuc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163elfeyyho.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rfyubzgv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wkmdorsc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gvgyhfjg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163mgujkzjn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hmchggad.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163esfiacnf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wsuzsgga.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163livsxbpr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pjddmapu.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cbeghapv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ngfckmeo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ghmsioae.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163oymzzkmt.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163yoqtkzxe.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163nvprywfy.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163mifagtwm.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ihizxslc.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163wfrnfrer.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ezdqecqn.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hluiedzi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fqpnuohx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163opbqbcos.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163nrjpqnzn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163luagvkqf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163owqdtnby.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ghzhiskw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163lijskdqn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lckevqsc.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163jgndsuka.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163yjnbemkk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163qurwauwg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pejucpbc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163rrhgajpb.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ahlxnniq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dncxdfcc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hcjkfzxv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rdwdanot.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rsmgxvsx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163gxpqbeny.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ifcfffhd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ddsdxxzm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163owwwalgk.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163closcaur.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xjmfxtow.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163usjigmez.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163aqltkomd.html

TS:   // 同上
来源：http://www.xuanzx.com/163tfvymsby.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163jjbfbeyn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163nhfhiitm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163iydvhkwd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163gunotqkn.html

================================================================================
来源：http://www.xuanzx.com/163eejvzgob.html

G. 面向对象
来源：http://www.sxryk.cn/163pnufllqm.html

================================================================================
来源：http://www.sxryk.cn/163psqjehht.html

[G01] 定义类
来源：http://www.sxryk.cn/163jjmqiqsn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163tzbxjpiz.html

PHP:  class User {}
来源：http://www.xuanzx.com/163gpopvlss.html

JS:   class User {}
来源：http://www.xuanzx.com/163zeuhmsxq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163bivsycwb.html

Java: class User {}
来源：http://www.xuanzx.com/163qjnbbiaz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163iowhwalt.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163smulwkhz.html

C#:   class User {}
来源：http://www.sxryk.cn/163utdrokyk.html

[G02] 构造函数
来源：http://www.sxryk.cn/163yaqolhcf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gyiezajt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163scxhfqtg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163sczfsfsl.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163xkfeduhm.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wyfyetjr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163nbvahwpb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ttirijsz.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163spscnqij.html

[G03] 实例属性
来源：http://www.xuanzx.com/163srvmsnyy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163liynapyt.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163fgedvovy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163madhaltq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lzlxttpw.html

Java: private String name;
来源：http://www.sxryk.cn/163ypyoufoa.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qbywajlr.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163shiychha.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163drzvilwk.html

[G04] 定义方法
来源：http://www.sxryk.cn/163tiaqcjwb.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bmngfpog.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yktmbntg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163cfgeuqmh.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163yknecmxs.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ixrnrmof.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kjflzcnz.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163jpgmfvof.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163mvqutwvj.html

[G05] 继承
来源：http://www.sxryk.cn/163ikwhmgfn.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fladfmip.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163agmpdsio.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rnaegiqj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163juvsvgiq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163zobcboxc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163anaeiabc.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163rakbdwua.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163iwliephs.html

[G06] 重写方法
来源：http://www.sxryk.cn/163uloyprbw.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163wlsmghzi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nxhnitsg.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wpzaiksh.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ethgomes.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163cjzpfvtr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163anmgozcc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163zixvbagm.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163eszdidyk.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xvrqlozb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jkvlaizk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163aqafxmss.html

JS:   super.greet();
来源：http://www.xuanzx.com/163lpvftkxy.html

TS:   super.greet();
来源：http://www.xuanzx.com/163uhxjkouc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163whpogfou.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163nxkislkf.html

Ruby: super
来源：http://www.sxryk.cn/163sxslaoky.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fymqmuik.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163puvzowgw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163cczhxxap.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163qmuwmulm.html

JS:   static f() {}
来源：http://www.xuanzx.com/163mpydxmjc.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163rauunnzw.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nzqjxdvy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163snjcdptj.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163iauxuygl.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163mhkfycxh.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163gooabyoq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ekehpwvh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163rxtsuyoo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dudpwgrq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163munjuhzt.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163oaziypgq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ejdrjtwc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ttikphxs.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163wdfghmei.html

[G10] 访问控制
来源：http://www.sxryk.cn/163mbirdbzd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163cqkgrtrt.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163wimfaqom.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dvxkgjxx.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163mefjlpbn.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ndhvfcye.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163yawdikhz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163hnzogzzg.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ehvhktis.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tvuycodz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163nukbcwyk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163mnhuihzl.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163rnenfyat.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163bxjbtbfy.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163tkqpowxf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163edxpcfwm.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163pmldrzlu.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rxwimyef.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wysefmed.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163cqifiefh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163nccvxkro.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163wezxcdlp.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163keonfyoy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163flhawzim.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vymwccpi.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163uezgtrme.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163pdjvpwvu.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163legkygeq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163coflxong.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163regitptf.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163oxpbhqbb.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163dggzaztd.html

Java: u instanceof User
来源：http://www.sxryk.cn/163uiunevas.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163siisxemd.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163llpeyovb.html

C#:   u is User
来源：http://www.sxryk.cn/163zxffcbkk.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ipebfink.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163yfnuumnm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163efaycfcc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163wscaghnh.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163drcweciv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163czwkoqjn.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163snexnhge.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163wteuzlmy.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163sdivijbh.html

[G15] 枚举
来源：http://www.sxryk.cn/163yssgovja.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163eduuaxju.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163jqmuiubz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163nvimlldi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rkrbtwwe.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163gcgnflvb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163cviobugn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163brcqsdiy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163axfkirpj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163efpdozvc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163kcenxjrb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ohydcbee.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sihkgcif.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bpfvtzlo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163nugshzhj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163fxjpknel.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163jxaycxsf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163klpcabfv.html

================================================================================
来源：http://www.aibaodan.cn/163fkrffmdd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163marxjori.html

================================================================================
来源：http://www.xuanzx.com/163uhqcrepr.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163dfbfncrw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163vjgxzmcp.html


<!-- 参考信息 -->