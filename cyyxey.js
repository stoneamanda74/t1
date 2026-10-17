外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163nuteognu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ijitmgjg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163vchxxizh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163zgscjvog.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lcbfmwbb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jxxkfjgb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bksodmak.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163scnumcss.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163fbxxxecy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163uhbzzybf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163lwvdivae.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qyhknejt.html

Ruby: s.lines
来源：http://www.sxryk.cn/163xcckekak.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mlcnrpoa.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163asatmgvz.html

Py:   if not s:
来源：http://www.xuanzx.com/163vmebpfnf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163hzufhvwc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ggqwzvxc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163zodxwjvw.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163rfnsxhwt.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ipbxoqqa.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163kekscetb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163liwxegoz.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163hsiiibvp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163qaiuplgv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163wrdprwgo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sstndpxk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rvmiorhx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eczjggtq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163oscrqnbq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wcgiluns.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163fawkkwcy.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lbkfmyle.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163bzecshdz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163caicpdrw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qbhibguk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ddkbnfbn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qhzidwzf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163pgtdysra.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163gpsvcudx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ylnxxbpi.html

================================================================================
来源：http://www.aibaodan.cn/163gxaffzjv.html

F. 文件与目录
来源：http://www.aibaodan.cn/163cdjmbbtb.html

================================================================================
来源：http://www.xuanzx.com/163nxjzbqtu.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xaxijkzu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163dkrvelcp.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ehophlzf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ilwasmzk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xddefqom.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dukycack.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163kyotmqyn.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wrrsiazw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163qlyqsnrb.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163hvqgwmbr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vdsgtxml.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163iztyzrgo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ukacbpkl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qbuhofih.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163puzrhhff.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163tpsidevv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163cfqpqmmd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163uqigpgmn.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163asqfsmqg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qqpjpknq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163lztchqpw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163eieqmppq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dxgavmku.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163umlxsfpz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163pvieecmr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rvfrnodj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163vmjsjdut.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163gflirfeu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vcknvadk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163obyjjvyt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163minunuqh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gksynxsj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163xmxoykht.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163xiuneysu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mbehcsln.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163zfufbvly.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163hcpfiqtv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163uubszlul.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163khvcesmo.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mstcckqy.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gbljlyhp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ichltrlg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xuptyrvw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163doehrugo.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163oerwpphc.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zrovjfoa.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vxxysfsl.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163vbmvkpzj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163awllhbih.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163opxzlrep.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rxsewuhe.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vtgypzet.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163fzvihuxn.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163wpcqsile.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163bgvjlhtz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163rqnsgjzz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163xrdchcxi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wavqtxtj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hkaylojy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163purapzfj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hokwknsp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ytewkmhd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163pytrtine.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163dajnwhql.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163etbuuiux.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163akuxsquq.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xceaeguq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qqvwdfpl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tjebwrni.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163zefyzxfh.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163fzgkqapv.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ahqyghya.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163olkaolru.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163tlsykkqy.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163althndqq.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tqnxphvz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ldiomdpf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ggitdfrf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163pmeakjay.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163qzmvalvq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163pgduywsb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163uuwktunf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oxniwndl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ncbofydu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163owrlbmqk.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gzyofdcl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163srguyfcf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163tedwzotq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tpidulqo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163fjhxvciu.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163hnathblm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kuserefe.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163swhjjhqq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lvcehpnk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wexorzfb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163eraemijm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kylcfide.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xdzwssov.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tdmoxjjf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163epjzjuuf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163rjbtyqzw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163zdhtsldw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163nzbjnjap.html

TS:   // 同上
来源：http://www.aibaodan.cn/163qdytrrrd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wvflekdh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xyhizxas.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lqnkkfjk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qwniguqn.html

================================================================================
来源：http://www.sxryk.cn/163unuxivzi.html

G. 面向对象
来源：http://www.aibaodan.cn/163nhpsazij.html

================================================================================
来源：http://www.sxryk.cn/163hpbcnupz.html

[G01] 定义类
来源：http://www.xuanzx.com/163hsgkqbqu.html

Py:   class User: pass
来源：http://www.xuanzx.com/163djosfsoz.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163silisoyx.html

JS:   class User {}
来源：http://www.sxryk.cn/163kolgzhza.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163sbncaeuj.html

Java: class User {}
来源：http://www.aibaodan.cn/163xhykcjkw.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wqexoxdw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rqjglhbc.html

C#:   class User {}
来源：http://www.sxryk.cn/163gyznymff.html

[G02] 构造函数
来源：http://www.xuanzx.com/163cqlvnjmh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fiokfibg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163pfhuidvx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163rcdjpsso.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163yqbkrhnk.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163aknxeapl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163kyoduyca.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163fjeoccma.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163tkxjnhsg.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163hodqlwqb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163lgzjesht.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163fdhecgon.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163nkcsgpig.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163bfamajta.html

Java: private String name;
来源：http://www.xuanzx.com/163uxhvness.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ncaaltsf.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163vzuqbkqb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163eswprxhy.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pcpsfqnj.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vrfkfina.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163pntwqnsp.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163zffprmub.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163wyupxtke.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hpkrcwlg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163axxufymw.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ynuyunpu.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163kqnxorna.html

[G05] 继承
来源：http://www.aibaodan.cn/163ndyzsqxz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163jvswxamu.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163bwgazxwo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ospfnliq.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wvxffldt.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fizznazx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163xtcbhnde.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163eznjhvhu.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ayblafnw.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zcovxwuz.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163pindghqx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ycsozxux.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163unwqssaq.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163iezybwbt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rlqgvzni.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ekrxudvg.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163fjosuiht.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163qolxdutg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163yonolsiv.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163vebmzepq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163wqcmqxbv.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jdgktadb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zydjxqvm.html

Java: super.greet();
来源：http://www.sxryk.cn/163gdzilacv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jxakskzy.html

Ruby: super
来源：http://www.sxryk.cn/163gldvjmsw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ddmxqlrl.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ornvcvou.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163autvyqkj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mvsfmoth.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dmqplgrj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163pzrdmnpf.html

Java: static void f() {}
来源：http://www.sxryk.cn/163zfydjdfe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163mpaiaajg.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163sdemezbq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163dlqkewky.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163yiwhlnqi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qmqliiyj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qtutugxs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bugfxykm.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163juliqwxc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163zbuzckhe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163mnudprba.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rkcmarbs.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163hucnviha.html

[G10] 访问控制
来源：http://www.xuanzx.com/163kiooefum.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163tyjlqhhv.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qrdoxxei.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163nvhudanf.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kwxfogum.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163sdyvrgqy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hllthtmq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163skwxyusv.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163jjmmcqgv.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163tindrdeq.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163vlnrdsex.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163bomwkeng.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163mhlbmnyz.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163dfbwkyup.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163gbzqdhcs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jjlbtvls.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163zpadwbhs.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lqkyfqmw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163asygshbe.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163bkhogfkm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163nbpjraov.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163vygeafpx.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163hbdpieyc.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mxklkzvb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163thmazkey.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163gcojqupl.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ccgdhpcy.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163nvgcfups.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163togfccbm.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lqxkljjf.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xpkgqexb.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hgxhluep.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jcbwhoys.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163pcucgurd.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163oezvcgse.html

C#:   u is User
来源：http://www.sxryk.cn/163nywztpug.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163mtkndpfy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163fzrvliqg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163yabnepva.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163pngzmjvj.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rnqmdguu.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jxobjrtw.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163qzfkqmty.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163cwuqlwya.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dwukxmrk.html

[G15] 枚举
来源：http://www.sxryk.cn/163gnrkifor.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163wxohaibi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163nakwwlnx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163rdulmujm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rdipsdzj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163iyjszrsv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bcjvmgqm.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163lrjlxrvl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kyaikfhq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163zuvafkvu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163kayesats.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163wihgqzmh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zsjkqtak.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fflcswol.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163azjfnjmm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163qnlmjsbx.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163xjuzsgza.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163xagterni.html

================================================================================
来源：http://www.aibaodan.cn/163kysvttjq.html


<!-- 参考信息 -->