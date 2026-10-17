外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163etsdkdjj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nkbvvmxn.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tvbfzfdw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163vzfhnggn.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163memqfopp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163diojprch.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tiznbwyo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nfktsjfx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wxbtzsfs.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163qftbddxl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163cozegjeu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163eljtsqkj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163qpgbmgwc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vibmoxlv.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163eegyteop.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xfstenrv.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kpcgfnqv.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rkvhvmcf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163eefeyvge.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163gvalpqin.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163cweruaic.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163tvxrwmox.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hmrtpjwv.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qaeftlbd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ubpmtvzd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163sgjauila.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163qkfimyav.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163mwfsemuk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163wxdejuvb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163fdpylred.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163afulkdvr.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163xkhjuksn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163qzajzyhb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163lskbifyu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hgylclth.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qdxvvtub.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nsznijsr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pqcsuefu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163bzcinwwh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zmutdyyr.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ldgvfoyr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163onwpmzgi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dtprqhkh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163poxmegor.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yytgzpro.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rltcgpna.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vgkvqyav.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163licyphff.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163bugxxqwh.html

================================================================================
来源：http://www.xuanzx.com/163dpiomxfi.html

F. 文件与目录
来源：http://www.sxryk.cn/163ammezrlo.html

================================================================================
来源：http://www.xuanzx.com/163zfcqysua.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163rcmrjsgp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163imxbulko.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163tftfcdwk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163psdpmkoc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163whtvdicq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wktzfeaf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pcnlsgsg.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163hasloqmt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163xtmwigpm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163fukuohuf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fpjycsae.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163pikdyojt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uhlqfnms.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163okwkikeo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dggsebhq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163noyjelqo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163stuasivk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163kfnhxrlj.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fccdmeww.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sfdaxbsx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ombhegir.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ojbfyqno.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163glqbxuim.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163thssygeo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163akfstfhv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kgzynptg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ocdzajyd.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163egmdzlky.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vyqvgvsn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163meesmmez.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vrsuutnq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tubpzpci.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163fkbmeken.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163yhbvzwyx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tockrqbv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163khhjdkxw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163mjevjwol.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lyvpgfcp.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163efvfzmuc.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ojhsqlzo.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wdtbgaeg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163smukfuxb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163gweumzfd.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163cgpionbx.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163zwgrquxf.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163syuavpdj.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163eflsmyre.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vsqazozo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vnuwkfwm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163iarsvrat.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cgnqfwla.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163nfjrjxgl.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163eqspnrjg.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163knpatdkw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163qmtssjes.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163vhjprwnu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163xhvdtiia.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163upfzbjjv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163nwrpakoj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163wpjaklpw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jkuchmjd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ukmlnegy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ucfhugaq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163nujlgxbr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163imrsilrq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163nyuooonj.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bzvcjaha.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zzhjtohf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yvtezkjq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vzjjfugp.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163iubhcopy.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163duntbwds.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163jggzxcej.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163aezbuavl.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163tjyktmsl.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vgdlposj.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qwnpsbes.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kwcktaps.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ybmndwjr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163fqkbocck.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163kustyned.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163frktmdpu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zawuxhis.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163fyhcospc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tfnebqqx.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163dfixwklr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wzzbotiq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163uoqcjlme.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jkzooyzs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hpxxxhsg.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163wotxxaaa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163valzrsar.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163koytbomt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163frhfwsfc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pdnctktf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163jbgvwzlw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163jsujfbhw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163akorrxne.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163lzwxahsp.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163cukloryn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163mwjhkmhz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zfzrfpww.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163cackcvlj.html

TS:   // 同上
来源：http://www.xuanzx.com/163ofpbwhby.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163kwcluhai.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163vawxtdbg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163nebaoguq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163aefzeuky.html

================================================================================
来源：http://www.aibaodan.cn/163pmdsvmwn.html

G. 面向对象
来源：http://www.aibaodan.cn/163wuighosg.html

================================================================================
来源：http://www.xuanzx.com/163ygblsvxx.html

[G01] 定义类
来源：http://www.xuanzx.com/163bxusmtic.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ngnutsvs.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xeepstpb.html

JS:   class User {}
来源：http://www.aibaodan.cn/163wvdxnkex.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zhwvqzlg.html

Java: class User {}
来源：http://www.xuanzx.com/163ccldbeyf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cipwkgmr.html

Ruby: class User; end
来源：http://www.xuanzx.com/163vhnhoqya.html

C#:   class User {}
来源：http://www.aibaodan.cn/163drihdfly.html

[G02] 构造函数
来源：http://www.xuanzx.com/163rfbfqeww.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zajnhudk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163womqviir.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wguzdker.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163mspveikf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163iqrokehu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cqkcxayb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163yhcoeptj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ceorppco.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163bocwnvrs.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bcunnusg.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163bahkqgjx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163heucfmld.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163whuhkclt.html

Java: private String name;
来源：http://www.xuanzx.com/163obpirnvj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163qvbgfwxn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163hzpmssjy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163brbqmcjn.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ixpycgbi.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ojnorvkj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163movnvnhj.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163givgepgz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wzzddwnn.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163avcqwkls.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qgutcqcq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163yvqimjjv.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163mzlfkwur.html

[G05] 继承
来源：http://www.aibaodan.cn/163someiznn.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fsizvfkk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163esgxryre.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163odoevtqy.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xznibfhn.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vbckvsle.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163dgntjjjs.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163yklgfcre.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163oekfqnnw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163frpvqjry.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163bwvlgckm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wkyzhrdz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163bhupqnbo.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163phdjvkhe.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nfnxhopm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ylhblaji.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wkalyuhb.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163pzjhoiau.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pwczolpa.html

Py:   super().greet()
来源：http://www.sxryk.cn/163btxmchfv.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163fhditset.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jingmbot.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ffrahgyf.html

Java: super.greet();
来源：http://www.aibaodan.cn/163yviufhuh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163xrrwbjwn.html

Ruby: super
来源：http://www.aibaodan.cn/163ioohqnbd.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pjrbkcpv.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163fhqhqzfr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163nyujwlts.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163xvqqfwgb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163nmzihbuf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163vcbmvzel.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163vohjimrt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163pcgmxajw.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163qqgqwolo.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163fmrslxdc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163poevoire.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163schevqup.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163iaacfcxn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rvoltnav.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163aagdkcsc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pkjufbta.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163madwkvjr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163zyhjfmdi.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163eufwfdgx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163uvaydaif.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163tvdkfpkh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163umjfiqoi.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163zscibgdl.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163twedbgme.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163crbxblfs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rqsbjkpi.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qwubpgkw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xaehtgmg.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163jqstgfzp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163xpewqikh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ifdiqwug.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163rajchaqy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163afxjggjj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163scxtwjnm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163wqvfaxsp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163nkckociz.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163qhtsosui.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xgdwuhyw.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163lvhrllgi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163cqbeoqff.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ahkomblg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163fybaxnoi.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163uornqltz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163yeugpboh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163utferfry.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163zgsaioyg.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ncmhlfxf.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163qbahknzc.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163lmjswxff.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qlfjoipu.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163rjoyiuru.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163wolrtmya.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163nperlwit.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163qfolbtbn.html

C#:   u is User
来源：http://www.sxryk.cn/163lqhqdbjj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163jpfkwtyj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163qtbjrwnz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qaiydzfs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163rokdqwsg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wfjnjzqb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163shqqsled.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163icxseqsm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vixubkfo.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163quoxjjch.html

[G15] 枚举
来源：http://www.sxryk.cn/163tbfgkeqo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163tfjunvwu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163idlilhkr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163mlxjqsaa.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vhfjhneq.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163vapsbnpp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163aarzlesg.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163oymyesyd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vvttcscm.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163borwpukz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fgdmomvb.html


<!-- 参考信息 -->