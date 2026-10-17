外链999!wailian999！

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163jojwqipr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163akzuyzqo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mnhdiphi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fhlhkijl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163eozcszif.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163cyaubisn.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163rcbcusgm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163dlycidzt.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163fnqtwaxh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163xgdbmsjz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163lbiuazom.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163frhmqvhk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dquadezh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163isqcdbuj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163eehqoavo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vxhyugkt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163uvfeddbb.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163rcszmxhh.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163guysbthc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163aydupnpn.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kozfdpwp.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163oedqwgmj.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163lthyastl.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ndpkaedk.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qwrkdtyd.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mzsuotqe.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163nobcldnu.html

Py:   if not s:
来源：http://www.xuanzx.com/163mpauyrsz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ogovpnpc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163eohgivtt.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163urlxdcnq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ktewywic.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163xwfuawjn.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163iucnepsa.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163qzidyjot.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qjkblyky.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gbvdrlqs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ykgdkfmk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jsmmbbmz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163apkkruai.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pdqrpgqv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163idxnzulr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163eunxqsxn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163bcxxtcqj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ipjskacc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163cmsfmudr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rcvyfyjt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ucqjnpqa.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163flhmwedy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163srqcytyt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163onukmcgy.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163pjlyqvkd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163nsyoeoky.html

================================================================================
来源：http://www.xuanzx.com/163gnaaiepb.html

F. 文件与目录
来源：http://www.xuanzx.com/163whktbbqn.html

================================================================================
来源：http://www.sxryk.cn/163krerlsux.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xcjxfgfg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163reczpycl.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163zcnphzbm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163jirygmmd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xklkglfk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jckbaecs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163gixbvatd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ayzjwndy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163tifvqvsn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163repmpqew.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163pfnqzyfq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zfhpqsij.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ybsewhtw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cnqeodvx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wmddjrdc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163qftcmiwg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rnnmshfl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163iwixxyxf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zzgdogex.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qqvvrgfu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gjdzbciq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ngxqcspz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163enqjqzgo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163djuzbcwa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163pindrfln.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163prouulbc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163qatbcull.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163xkeevpka.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ylnzuziq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dmlycfwg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163iyjwnnuk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163femmywey.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xkqrsvfh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163pewmwvpw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163azghltcq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vgwrvdmd.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163gytrpkqp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163duxrndbz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tgysoluo.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gnwnnmlx.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yjknftjd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fcvxbigc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163gchrhptk.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163zoavhhhu.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163pnkclbjm.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163jyihdrfh.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ebwiwytr.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sayxrauh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wjfnrsbd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zljkbqip.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mgorgmbr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hbsmpjhs.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163udmzymbu.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ivrozyni.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163mxpxmkve.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163nbytkbbq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bshkduhy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lfxzynsz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pmtaemxv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163iriqocns.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wzzjpdgl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163pcujkqqc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163yxsldrki.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163itfunoot.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163twmjyigg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163fmbnmhml.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163iikfknmd.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ccdhfxyk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163bbtaiozq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163genjgjrk.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163fckhqyyc.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163sgfredus.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163vkgzcpac.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163kptlpwaf.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ipzbgcbb.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163arjfqtrp.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hjvwrumf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dcbrgoqk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163wtkxzkgl.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ofkjyhrn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vgzietpn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163wauobfqk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yjjhjbto.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163yntnvdrk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vvclbjlo.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163gdoqgeaz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fdozqldd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bmvucvwv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bewbkpou.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163exnafoey.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163nxcrkaor.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wmsdinpz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163qignotfa.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iuqtwtvd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eoghhezz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163izracynj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163dirvhbmv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163htpenhsi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163ysmbdcnd.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163isgurpfv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163oyhdexud.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163dravgcrj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163qhvvrthm.html

TS:   // 同上
来源：http://www.xuanzx.com/163njbofopo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163yxabqyln.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163hqwojdkc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163antnnsja.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163fznamymj.html

================================================================================
来源：http://www.aibaodan.cn/163sxmtabaa.html

G. 面向对象
来源：http://www.aibaodan.cn/163scepxzrh.html

================================================================================
来源：http://www.xuanzx.com/163xvknevnv.html

[G01] 定义类
来源：http://www.sxryk.cn/163avqbdfiy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ejagtusz.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cqoejthv.html

JS:   class User {}
来源：http://www.xuanzx.com/163bvahrxrf.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ptxxtzkm.html

Java: class User {}
来源：http://www.xuanzx.com/163pexmsjky.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cvucrobd.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xdxzypdk.html

C#:   class User {}
来源：http://www.aibaodan.cn/163xhtaqcbo.html

[G02] 构造函数
来源：http://www.xuanzx.com/163emavdezt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163lyrlnnqr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163htaztlnc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163owpiufde.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163wfnfikbm.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163gvltvwct.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163odeicemm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163unougmvu.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163yzjzxltl.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xqhtetkg.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163jyhoxnvf.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ocjmmlzu.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jdnjozmk.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163bskmdrvl.html

Java: private String name;
来源：http://www.sxryk.cn/163vifppqnz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163fhsjhddy.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163cxrfesue.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lqgxmbof.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163psakqdyc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163upbryzdm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ydwdoaiw.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dabtezdm.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163kpyuajsm.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163erhmzfqi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163uzffsddj.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163fglecujt.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163iqfndlqw.html

[G05] 继承
来源：http://www.sxryk.cn/163runivaxn.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hqoajglt.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ytnbcqjf.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fscztwyw.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gyvzfage.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163agylmjye.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vfyxgpqy.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vngtjtkn.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163eqqlrhvn.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bwvxcidw.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163msfucdvf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gxyhjwpx.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163lgwvolnx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ielbayso.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163bgxunnsx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ujifckoj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163qrqexrsb.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163wppkoaog.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163lblutccn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163dopovvnl.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163czxiraqz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163swpwgbmn.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163peelxglr.html

Java: super.greet();
来源：http://www.xuanzx.com/163lilzbeaa.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163sboqrmpo.html

Ruby: super
来源：http://www.xuanzx.com/163mdihntzc.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163nyaevyyi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ycxlznvx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163menisnxd.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ozbaigtv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jmsmalwf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163mqmgnodf.html

Java: static void f() {}
来源：http://www.sxryk.cn/163cnyxftvj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xkwqkzbl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163xcaegaxd.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ujwvxrwa.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163bzjyjtme.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wvflerie.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163kffhgahw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ehhvjyoe.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163pyagicac.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163okeyeppd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163cfslbjbt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163sgaoupfr.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163yaprcebx.html

[G10] 访问控制
来源：http://www.xuanzx.com/163rypwtyyy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163fvbokcwc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lpgiqmbi.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163aztgfohr.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163yieavynp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qvixivtg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163xqelawfv.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163obvaobgo.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163kttrkfaf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163yzpvsxlk.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163zldvmyew.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163pzdppybu.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163eucvocnv.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pxplxntq.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163csxjcopo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163kbakcbcu.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pjbjybfv.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mllpygvt.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163vxtfgrpb.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163styhhimb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163funwxsql.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qzngecyd.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163yvleqsnp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ubriplyu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163crhgbjri.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163mjyajwwh.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163okwcqtgx.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163hfxazfoa.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fsjuaeam.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163naumryke.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163qtdrasdl.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163vvsdbkcq.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163uznufnes.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163cgbmrxrf.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163mhohqvux.html

C#:   u is User
来源：http://www.aibaodan.cn/163tzuxgnva.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163vpuocjap.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163jhebwpak.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163rrhvowcb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163nhjxiuol.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163yqkwwxqy.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rvpfoxaa.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163daroxsta.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163njxybsxq.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dbrjhzyq.html

[G15] 枚举
来源：http://www.sxryk.cn/163ptplishq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ssrgdfmz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163kndwhflx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163hacxqzrb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ablxqlbk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163dymawzxw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163uuqrfpnm.html


<!-- 参考信息 -->