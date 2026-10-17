外链999!wailian999！

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163amocbfjo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163sczxnhen.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kvihvnts.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163asoazqye.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mkskcxsu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163wlmnrwhu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163uxfxvegb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163mjqwugql.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163miqjnwzk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163upovncrt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163tdivztod.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jcnspdpm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163bdrspsky.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163fymqthey.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wlqmdnns.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ecdnzslz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163fzoayife.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163kzfjxcze.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zvrlyikc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163zvtefqex.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uyfgcgab.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qandeceb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163aksazghl.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163puczffis.html

Ruby: s.lines
来源：http://www.xuanzx.com/163djezsqeg.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163opryiffk.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163qbuhufqq.html

Py:   if not s:
来源：http://www.xuanzx.com/163rhqjxcax.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163udufndzw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ofjemyxy.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163valjtukq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ewhunmil.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hibaserw.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163gblaekjb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mqowacct.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163xdxhqffc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163kfftwgel.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163dhnumtir.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wjowwogg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xddzjrvy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pogzcnas.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hqgzntbj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163plmsylhr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ulrlzmsb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163jkbafmyf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163laxkxcnp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163uwudrgcw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163aluywqfg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163iuirkpwn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mbkcxlkm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jcmnluck.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163lwlypssl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163lfqaixvb.html

================================================================================
来源：http://www.xuanzx.com/163mauaucsb.html

F. 文件与目录
来源：http://www.xuanzx.com/163nbpfucnx.html

================================================================================
来源：http://www.xuanzx.com/163gbbklkng.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163lwrslqnh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163xyzxixze.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163nclviada.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163puqolphy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fambiibj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tfdjtwqb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163gspimhvy.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163nqcqfhmw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163oadaummk.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163sjooavfg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163knbuoiha.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163raqkxxqq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ertpzuoe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dcruvsyq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163efptjvgd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163goqjawdl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zuzvnhqm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163qwxocqkd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xfrpzdco.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163visipxyx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163yzgecvhl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fqjzrdzn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xsimevpt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ceqxocdn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163arcfpwdx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163njzcvbuf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jxifxunc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163gfdlzxxd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163lphqrpsh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163scrminqk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mjdhstpc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zsbbjlou.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163vnkndkkq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163wkewcnxf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163zlmbnynd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163lywlxegq.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tweumyav.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163hpvpgtoi.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163yeqcpvbx.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mczispkn.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cxgmvauj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xzgxdlfh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163kjlyjqmf.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163yfouadqs.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163swufmzuy.html

[F06] 删除文件
来源：http://www.sxryk.cn/163wuwllcbf.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163uejfzpbv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163uzelxjow.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rlqdoozi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163odrnkzfj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ngrsaaah.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163uzjqlica.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163mwheyweq.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163uxqslhqg.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163sxgyixsf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163doaelsfa.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tiikivmz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pyhftcne.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163uxdtbfbt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163oqrvsblt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163aoyivzco.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163sosodauw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qodspjds.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163dmotcftc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163lcmfrmol.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163gvjpxaxr.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jqvjfzwv.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gknxbtje.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tlfkmjij.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hoafqfiy.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163avjtbiyl.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163dduqxvac.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xayfiogp.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xocrchjs.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163dzlhkeot.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mtmcdbeg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xmidxukt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wjiyxlks.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163fribwrbu.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ryeggiyu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ontlzgni.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163vitdapqj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xlwptvej.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163emonldca.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rtphumvd.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xicqjofs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gejlorny.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163tditjmpv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163czzgmmki.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163qlpvhszr.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163qqgmpcuc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tspsrlev.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163oozgfrfs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qstqaqhr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sztwocba.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163rjupigsl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163smugqvho.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rtosrfoo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ldrpkkeq.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163jevikwtb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163inqjlorn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163bivmtmhb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bbveesqm.html

TS:   // 同上
来源：http://www.xuanzx.com/163xrftdjft.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163mdcvhtnw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vtncsixx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dfpyecbi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163trtebryb.html

================================================================================
来源：http://www.xuanzx.com/163xdhdqeab.html

G. 面向对象
来源：http://www.sxryk.cn/163yzrwgklu.html

================================================================================
来源：http://www.sxryk.cn/163upxwpjsu.html

[G01] 定义类
来源：http://www.aibaodan.cn/163jiwxloyw.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dkdfowvk.html

PHP:  class User {}
来源：http://www.sxryk.cn/163beudffdw.html

JS:   class User {}
来源：http://www.xuanzx.com/163rwftpfpw.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163rnevhhnr.html

Java: class User {}
来源：http://www.aibaodan.cn/163zxmegpjy.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163wyhtaoot.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jtsnblcm.html

C#:   class User {}
来源：http://www.xuanzx.com/163auopoctf.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ktdkneqd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163kmgnazto.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zijqdpxd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163cexqdpsn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163xjurgfvf.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wkcertfy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163fzndxfec.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163fkfvuemi.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163bptoqpuj.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163htqfleda.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163geiopygl.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ymmyhyet.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163hfnyyeuk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ybufxecd.html

Java: private String name;
来源：http://www.xuanzx.com/163vloctdey.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163iofqmuwj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ctemeqmh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163norsjqou.html

[G04] 定义方法
来源：http://www.xuanzx.com/163dharxunh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163azdzcywd.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163dvnaqndz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163alfafqos.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163resuzdnc.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163spzoxyib.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163squaswfn.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163lqtvkvpw.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163llzrbsaa.html

[G05] 继承
来源：http://www.xuanzx.com/163potpegjg.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163mwerbpon.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163iwbjdrws.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ahkvhmzr.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cnkifbpr.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163sugptnhd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163dnhqglrw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163gqkrdptf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zyzdcikp.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jqkyvxbu.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163eloukunc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fymvorzf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ucvpswgy.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fiqqoorg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163clmcczis.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163yuanauyh.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163yjdkbvzi.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163mggjwobu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163lmlobbbj.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163hqgxyxua.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163khgbeeig.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163fknxfpdu.html

TS:   super.greet();
来源：http://www.sxryk.cn/163dwbfuslh.html

Java: super.greet();
来源：http://www.aibaodan.cn/163feccvisi.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163tfdghwsj.html

Ruby: super
来源：http://www.xuanzx.com/163zgcshdwe.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163bykzpnvg.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ozjlxoyv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163npdoqpht.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163xznhhjuf.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163buuxivpu.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hnxilgxp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163tszkxble.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163saqxfyba.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hdvyczxg.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wyutnmeb.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163orojjrxs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163aqszzjtz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163odwwvtwt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163zqyvtyku.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163yontodaq.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jwcppsvx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163briecjdy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163zrlsmhdi.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rubvjghy.html

[G10] 访问控制
来源：http://www.xuanzx.com/163rhundmzt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163pikigafm.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163bkzmcotm.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163oypuboox.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ipeoxjpz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pfnvfcka.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163uguvioid.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vhqueaoa.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163pmecxosy.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163zddwuswm.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163wyvdvpdw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dbldqcds.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dhbclmwj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163moakiwxd.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163wmjnunjv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163rvpwruwu.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163unikekyn.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163kbqetkua.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163njghjvgf.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163aktvjjjr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ydvmwdoq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163hiihwpsv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163dhrkucet.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ddslgyma.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163vpdqkorh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163kextrpoq.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163dsrcojgs.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163kyiicfnt.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163eqpnsxdx.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dqwlidby.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163yhieuljq.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163gblrsvxh.html

Java: u instanceof User
来源：http://www.xuanzx.com/163iwyzhnwb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163mrtqxvym.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163clowkpwi.html

C#:   u is User
来源：http://www.sxryk.cn/163bqohhelg.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163nhxszdtg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163meosvtuk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163mqqzocrk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163psfqenwo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163stiaocrn.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163dvktkabp.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163cbelztba.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jfcnjitx.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163dagkyxyb.html

[G15] 枚举
来源：http://www.sxryk.cn/163emidtrxp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hzbrotvk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qohgpabw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163hmkfbkub.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uhuviczm.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pitowtxk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163hiqezehe.html


<!-- 参考信息 -->