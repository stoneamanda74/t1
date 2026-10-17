外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163wbzkeqlv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163zhkkvqav.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ugxhtyaw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vadjhqdh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163umtwqysx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163kmndvmro.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163bmhndlch.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163vclrxatx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ypapqqzx.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vzodvlzt.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163nspapquc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163gqinvhtc.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163fdhfzqyr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163isaicgbf.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vyezcwud.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jgigyjuh.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ofzndcyj.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163yusdqgao.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163plydahth.html

Py:   if not s:
来源：http://www.aibaodan.cn/163orepquqq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ovyjpcbe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163euzgdxwq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163syvpteko.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163spdjwodq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163qvtywqav.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jillyzvt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163vsnazefh.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ecprijfu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163pdcefqel.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163vmicfeuq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163imajjbvy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163czqroowo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ryzgsvju.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tsecucqc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163lzcdgqgi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163iimtarwl.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hlainnpa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163shwoqohe.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ebcweemc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pkmadfbg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mdegmele.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163wjdtnmjo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jvicpfsr.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jwyaegzr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163fgrvjtap.html

================================================================================
来源：http://www.aibaodan.cn/163kglbylwa.html

F. 文件与目录
来源：http://www.xuanzx.com/163ccwhtybv.html

================================================================================
来源：http://www.sxryk.cn/163epgcpslf.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163cswirymz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163raqipseo.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163dtflaerm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163cyrqgooi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zuewwqrb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tzjfhbzo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163opsbyeqw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163yndkwsci.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163uxfonojd.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ixeceroi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163hqngfoqv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ffulerme.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ornnmyic.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qcapijyd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163exmqgusb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163aixxvnuf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hfumpppb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163iwrzyozr.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163fpajqgtw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gbhtwvic.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163cejfyexf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163nwxizlvs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hcotxnds.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ezimxecz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xybnwyyk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ydadbhyh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163omgfbicz.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163zgxrwbwo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ywzeiret.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163butjojqi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jjzravad.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qlarbotj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163deonwozw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163wcnldvdd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163nbhsgcdl.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tspechvs.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163fbdofqyu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163gvsvktcs.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163woszcobb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lrmriogz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jjbzvunn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tsmimeif.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163newadomy.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163givoeobo.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ajgtkoha.html

[F06] 删除文件
来源：http://www.xuanzx.com/163kmbjsklh.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163yzcislyj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163rltagmtw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163oxdqlxcb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ywcjqzzn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uwvormfj.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bkzaipyq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163grhnknoj.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163wbufgmqx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163braafyjq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163umhlarjn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163dqxzzfun.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yqzxtfyv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163fcsmrlzh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163cgeneasr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163pyxkmedo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163gzverunu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nmejemno.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163iuvtpjvc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163xjjupepu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163slsyqhtm.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yrrelulo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vosvuciy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mztwazle.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xbowalvq.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163apaglcbp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163lyrvcqfr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163jvwpvkkg.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163labkjzqh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163vxhgbucd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jvvbfcyo.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vrsyjphy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ykmrkbfi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163doyuuezn.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163rwdoafdl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163siyrbdwt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163zsznmhoo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jxmlvlff.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cksoxylr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nneqovlz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fkltndhj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163scmexacz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163uyskaane.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ybhldlxu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163khembuym.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163kcmgkdgm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pyjnxrth.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mxgzcfix.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xjiynhfh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163etrjotvz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dbofbhyh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163htcgxnjq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fmmnzvxp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163pqfepeyp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ojoakrwe.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163jnubbrle.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163lstmwzak.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163wqypybvy.html

TS:   // 同上
来源：http://www.aibaodan.cn/163dydjwoha.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163wyxftjof.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163hcsiffol.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163uxmqvmrk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163hmdngovz.html

================================================================================
来源：http://www.xuanzx.com/163ozhxvvgx.html

G. 面向对象
来源：http://www.aibaodan.cn/163aluqolae.html

================================================================================
来源：http://www.xuanzx.com/163jqzxywbm.html

[G01] 定义类
来源：http://www.xuanzx.com/163ncijkxim.html

Py:   class User: pass
来源：http://www.sxryk.cn/163astpwtlk.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163aavkemov.html

JS:   class User {}
来源：http://www.sxryk.cn/163sddklczz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163wukqdhmu.html

Java: class User {}
来源：http://www.sxryk.cn/163ygsybwoh.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ltebwnto.html

Ruby: class User; end
来源：http://www.sxryk.cn/163wufvehxw.html

C#:   class User {}
来源：http://www.sxryk.cn/163pjpszlko.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163uevkcatu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163nuuydfhf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zrmwwmka.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163qnhlapnz.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163krmfqpku.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163objygqss.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163fwmvzadf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163rdbuelov.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rmlyewme.html

[G03] 实例属性
来源：http://www.xuanzx.com/163olpxtobl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163helspwih.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163cxyrwwpp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163kdyowtpr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ruwnzdfd.html

Java: private String name;
来源：http://www.sxryk.cn/163awwfhyug.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163tinmuxbl.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163tovtvecl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163gltwzdek.html

[G04] 定义方法
来源：http://www.xuanzx.com/163orejasnf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163vsrjjwap.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163aahbxptx.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xxewpnlr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vmccqyvy.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163pylxwolz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163yhsdpxim.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163inonksrd.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163izskqeml.html

[G05] 继承
来源：http://www.aibaodan.cn/163dfqcxrjq.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163cswbdngd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mnpablkr.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xbjkhlkt.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pgroivwd.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163cltmpuuh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163czxeysok.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163lwnqbptj.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ewyqsqrb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nxfwujfr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163enbxyfcj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fhyljsxy.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163gzcygegv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163upcxvuru.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pjwbllua.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zheovcbe.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163wfosalia.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163uyedbciw.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163lzwucovc.html

Py:   super().greet()
来源：http://www.xuanzx.com/163bacmbkip.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163eqotaxcp.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kzgjyqie.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xssljmek.html

Java: super.greet();
来源：http://www.xuanzx.com/163xccnygyv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ssfzzako.html

Ruby: super
来源：http://www.aibaodan.cn/163jldiemha.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163hvsszegh.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163mpnxroxc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163huporfpg.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ystcbjly.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wkpcewvd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163zxgfzpis.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163xkzonfsl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163tnfcppxd.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163sfxcjxry.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163oadggeoe.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ljaovbsv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163pvwdwqrw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ajsezmfu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163nvqyirsk.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xtjtssph.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163zalzfxpw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163osuqxkyy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tdxytdaa.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163loavjhfr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ewlpntri.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163dbmusjjb.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ccpuhhpf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xgdhoyzb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163agsjypoq.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163dmbsjyhm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163mvkwreeg.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163xwtcsauh.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163kfucsewg.html

[G11] getter / setter
来源：http://www.sxryk.cn/163vhccbblp.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163mspvjzmq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163pcjqdxqq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163yajhngqp.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163zcwnjeaq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163kyixaggc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163emriynfi.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163znccnyzp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lecreevy.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163jfrlmvuu.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163bseiijll.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163amgqlwzt.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ngyibdta.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163bdcugnji.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xwdfdsvb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163tvhlcums.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ojlpxkvi.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163fgjqgosb.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163qvkeoiya.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163uvqvrbdq.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163gidnkpan.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jnixogiz.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163owazxinr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163mzsnxtpb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163tpsigguc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163kmbsyjzo.html

C#:   u is User
来源：http://www.xuanzx.com/163bejdwoon.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163rjqrwduh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163zsumjqtr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tkzlpmgo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163qbdppveb.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163iygkimmm.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163riacysox.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163vbhbvlgi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163szchahiz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163pbliuwiz.html

[G15] 枚举
来源：http://www.xuanzx.com/163wbhijtxr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ntrsasue.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163imysnbze.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163wcodgeez.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rsbiogmr.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163aflpxxlv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ivqsufsy.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dmncwjxi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xdzasadl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tszgmtzy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fnxbrvqa.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163fixsicjt.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dohaabfi.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sulbnnei.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jybvznwy.html


<!-- 参考信息 -->