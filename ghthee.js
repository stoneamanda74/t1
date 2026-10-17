外链999!wailian999！

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163bimfoohu.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163itunlxjk.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163yujxwuec.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163knvqeoiw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163wzlaufcm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ovnzhmmm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163urzabqru.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rpqocfso.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163lofioxva.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ozrasxuv.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tortvfyi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163bdkacvhb.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163stthkzzf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163olzppuli.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163jaiwezwn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xadxsbnv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xyzrgjpm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163hoopbssr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zmsarwby.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163nmkqwdtn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lxjuojud.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163hoixghhk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ymwtwmml.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ribwqarh.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163epeqygeq.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pkujrmqy.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ahxfkyut.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163uvephlss.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163bxttfwzq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163onektjhr.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ksbswufg.html

Py:   if not s:
来源：http://www.aibaodan.cn/163emzdrlgx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163whalyylc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163lciqxvyb.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jnwhgzeo.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163quvhpdug.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163quzxnzve.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163amfieman.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163hwhpgivk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163kqsaugbq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163opzfukpi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163uhdktboi.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ulkgkevh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vptjpnqx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zvkdurwn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163brziklqc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163qsprvwqc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163abhqkqyl.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163znpeacoa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163flvmnyfb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qbsfdvvi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wcqxcqjv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ohwogaxd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163usifbbnr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ibtvxujh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vvhidxhl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163hlbtnvtz.html

================================================================================
来源：http://www.xuanzx.com/163bmlgxnee.html

F. 文件与目录
来源：http://www.aibaodan.cn/163sxqnemey.html

================================================================================
来源：http://www.xuanzx.com/163cnzbhecw.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163stppyzwx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ysiiqxpy.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163njoitnsk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zthqzieg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163iwaybzwo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163isytgvhs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163rxsxniuu.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xwifrbku.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163tuoralyr.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163wmdtgxnr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163yhkhmolb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163lxarkkpl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jpygiowr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tvszosyj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163prmpzzyp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zawalekr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ugwlspaf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163plfjanlx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163xqtkvqnn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163vszdlwng.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163uixurynl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ywtptbyj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tprkjhxg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163gqpzocnf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163lsjluwoo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ftjangeh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163umlqodni.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163oijhuavc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163gewvxjqg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163novcwgbp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zyvcmaca.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rcxygdif.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163espxpyzy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163zcuwgzme.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163oegaucir.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163zwjctwyl.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163bynbjbpk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163sxrshfbs.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ixojkcpk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zirngbfj.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163agxnkosr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nwktkwdu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163bpvwgbto.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163gdgxguto.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ugdwxwpb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163yiwvbfpr.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163cwwvkmbe.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dkgmtajq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163cthbqgjs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lmlkxlir.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rhzsbckw.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163vifpgkrm.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yrmkocgk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163kxfllocm.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163latpifcg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163efjkdmfr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163iihrccqd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jjtcrgvr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163giihdmqy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163uuptwfzm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163bahngpek.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163sjosdsoa.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163izcvdfdt.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163czheoscs.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163sdfrtrnm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163hkqxjthd.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ocaybqoj.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163sumspiqy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fodvrgpb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rwhsuisl.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163usiancih.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163evgadkiv.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wvrzewry.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163etgdinby.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mezpaqyv.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163azppjwdg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163rtzetzmi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mnmxwfuq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163clswsziw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163voyedbko.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163izkcnfwr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163kwesqtve.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163shksmslb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ozkvaads.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pefldobk.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163boajygzl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163nxucgryl.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163pdprvifc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wqxwchjt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163myhdsfiu.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163sahwhcyx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cnkxdzzc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163xjnydlof.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zioixxwd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163szkycjoh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163dnnqrxpl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ataglmlm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xytuawjk.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163fgxkqfik.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163pnfwcpel.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xrbhiusv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yylvhhgg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163pgojztgo.html

TS:   // 同上
来源：http://www.sxryk.cn/163betshkpp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rtuzdhgi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163bcwlztbv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lvedcvue.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163sawndpmd.html

================================================================================
来源：http://www.aibaodan.cn/163gyiirqct.html

G. 面向对象
来源：http://www.sxryk.cn/163xxcgydok.html

================================================================================
来源：http://www.xuanzx.com/163bhtnwbtt.html

[G01] 定义类
来源：http://www.aibaodan.cn/163osxytsmb.html

Py:   class User: pass
来源：http://www.sxryk.cn/163emnbccvn.html

PHP:  class User {}
来源：http://www.sxryk.cn/163vhvaquzn.html

JS:   class User {}
来源：http://www.xuanzx.com/163mjvwgolc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163crxxxbgh.html

Java: class User {}
来源：http://www.xuanzx.com/163auaxpigx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163yrwuzshv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163dtievkda.html

C#:   class User {}
来源：http://www.aibaodan.cn/163keffnwbv.html

[G02] 构造函数
来源：http://www.xuanzx.com/163owtrzyzy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kcstuqvw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163bonhjxom.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vegwmnhn.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zflybphi.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163gozjyfwo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163hltgfwrk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wzcrgkow.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163jccxvlkx.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163jqibtufu.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wevdggxx.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wdltsoxx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dfhfbcwn.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163oyrnylcx.html

Java: private String name;
来源：http://www.aibaodan.cn/163blebwfmc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xtbqxwxh.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163kakelaok.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jqvovcgu.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ljvrlbwn.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nmioijgn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163abocqvof.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xzgpnlnd.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163vteemsnq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163wlldqaux.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163caehwqbs.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163kstsrzdm.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163lcmtzarf.html

[G05] 继承
来源：http://www.aibaodan.cn/163csfvwokg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163qpxtvapn.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163tkqyzwvo.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wjmkgbcz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ixmdeuiq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163muojsadd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ayhkydiy.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163vothvbqe.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163okcrwigg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yfuathtg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163qlmvvvia.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163huvoapsd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163sxbpszkt.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jiihjalv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rowgikbm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163eqtuntyg.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163nmjnybeh.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163swnwjdve.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163njumjchd.html

Py:   super().greet()
来源：http://www.sxryk.cn/163uinwtgnm.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163rgmmegud.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163dkzdmgvt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163axexrtaf.html

Java: super.greet();
来源：http://www.xuanzx.com/163fpvmuizo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163bwlshhsj.html

Ruby: super
来源：http://www.sxryk.cn/163ajpxhbyl.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lxdedzta.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ebkhjtrk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ouorylvf.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163uqmvosss.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163rcfaoxwd.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163vadzaett.html

Java: static void f() {}
来源：http://www.xuanzx.com/163bjcljcuw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163enpewqwh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163lckofrhy.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ppibknmo.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163qmzrggma.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163babqpbhh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163jrbmdsbw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163fsjqgtnl.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163rhdqbzia.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163dlohengz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fqsozpyw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163uzclztsj.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pkkqepbn.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ezqcpgdi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163prhnqxni.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163rtbugmfw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163vkjodngl.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163edofaizu.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163srfqgdba.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163iqmrahxh.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nvtaexly.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163qydrrapm.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163kfxogewr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ufloqdlr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zhwogrlz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wpqiukcf.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163maysgljh.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ipnfvtgf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163gaopjqnu.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163dpwgyffj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163dknerdzc.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wtevzdxe.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rhnpgbrk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163eopjzwuk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163hrnqpgio.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163yeylfgrj.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163fqdpdotu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163evjuozei.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163yxiodobw.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163afcfszvb.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163wyuilhjp.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163omdqahps.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lcggtqtq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163eewntxvd.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163vjnrgenn.html

Java: u instanceof User
来源：http://www.sxryk.cn/163kuzcdgsm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163zrsthokm.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163isdtxxmp.html

C#:   u is User
来源：http://www.xuanzx.com/163bvisgcqe.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163bmlexnsl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wghmagdu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jlpuxpxk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163xzfyqueu.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163xhcnthon.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ejycozvp.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163mkwzdbhi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163rcjshjfv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163bjtdzrki.html

[G15] 枚举
来源：http://www.aibaodan.cn/163orrnemdr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nzdkbdla.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163wmrntpeh.html


<!-- 参考信息 -->