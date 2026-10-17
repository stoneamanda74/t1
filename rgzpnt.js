外链999!wailian999！

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163dpqnlifp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163owdwvryq.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163aczxpuae.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163uqbbyala.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163yqifktan.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ifusirjz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ekqookjb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bypwqheh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ogixzsot.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163npgzbebg.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163vcltzjxp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163rrvrpyop.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163enrblkdb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wxksyvkg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163kgdlyzga.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sjaisqps.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163msqdcbpe.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vilstcmy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fdelqrqt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163nhzuvjob.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163mmnljuyh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163bnttewjl.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163twtqbuga.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163aalknimv.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163loiyemaa.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jbgjlutd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vjmbvaod.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163uqiexxha.html

Ruby: s.lines
来源：http://www.xuanzx.com/163bwrptezg.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ihxdzebh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163gvyfesri.html

Py:   if not s:
来源：http://www.aibaodan.cn/163uhoeuktg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163uimhgfbs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163vqfzmwrl.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fdfrwbkc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163rnayslsq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163rehktwwe.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163zlnvenih.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ghmoruhi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163jspmgfqm.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gcxclmtj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163axaacsij.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fwjdchyv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gtaurqok.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163toozulbd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jzdjhfqh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vurbipqj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163nmgzvtcl.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163abpchcyl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163rbamdspc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dhojudey.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163opgotpvd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mlldgjbf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sjtgcljd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163nqvrelxf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163fvynnhzs.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163dgbwfmbc.html

================================================================================
来源：http://www.xuanzx.com/163yrxdcppl.html

F. 文件与目录
来源：http://www.sxryk.cn/163lmiofiac.html

================================================================================
来源：http://www.sxryk.cn/163oyktcnhw.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163hmuwgcne.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163enubfdhz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qdczwmgo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163vhwiyfol.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163yeyamvyv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zulumryq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163eyimbctg.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163nxqoadhq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163cveamirj.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163hfxfvbdx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163jwdekydp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163gqnopswt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wwrmgpve.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jabugeju.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rduuzrfq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163zofjbeoy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xwhydcrd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163wxkzethz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163dzqxfsan.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163yfjuitbr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163zxmnlcac.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163sjjabzag.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hyqsokyh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163gydavpev.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163bnbvnboy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163avsibmen.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163agtcrkul.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163dnvymdsr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163uditxmpe.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hafpptmo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rjmyaxzs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163adxebsjk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xavxtxqi.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163edcblhka.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163kmoeunbz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163qvbvprvc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xmrcxocz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vntzzikc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163elhqzskg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163kbhxfdaj.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163segkcplt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163clcaqawh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163gpvvsfjl.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bvrwcugj.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fwlgewan.html

[F06] 删除文件
来源：http://www.sxryk.cn/163exfabkjp.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nofonhnj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163szfwlwml.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ksupoenj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163maapmnuu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nvejgcvz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163umjmdlhw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yzymnbec.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163uoaupxfc.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163vmaeexdk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163bznsnicg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ryrcpzij.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163emjbhojn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lpvlboxw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ixcnxqnr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jnyghhqu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tgroqzdh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163imznluwa.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163feyzhuqm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163qqcffgpl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qvzvpodh.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bxbtysqc.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163avfkdmxv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zgdlobhg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163tpezmpwe.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163pbtzeqen.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163jglsaamw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163diuudkls.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163nxnnqmsg.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ulijazxa.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mzxgwtcf.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ocmelyoz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163htihbggx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qhorpyyv.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zvtvuuuf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rnjnfpsg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163iqieipeh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163aegcdefw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ntsuorfr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ufylswoe.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163qhdexbzp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163igqwtlqk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163fdlrwkrx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163smvnajyd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163jjbyienc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163bxjxsidv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bpeoghbo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ywutexug.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fykislpx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tzbagjhj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jeuikhgq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ilpoacem.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zgdaddho.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163bclikjzl.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163pzzwsrob.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zgnutxpt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163iagxunmm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163fnqsvojm.html

TS:   // 同上
来源：http://www.aibaodan.cn/163yognbwlk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163iovqlnsp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163vhsizbct.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ncpvjecw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163mokfosvb.html

================================================================================
来源：http://www.xuanzx.com/163jbzvnabc.html

G. 面向对象
来源：http://www.xuanzx.com/163dhspeehm.html

================================================================================
来源：http://www.xuanzx.com/163dbhjbhcl.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ippteopx.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163dtubyrck.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163jkjggnvm.html

JS:   class User {}
来源：http://www.sxryk.cn/163czkwycee.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163fsahoktg.html

Java: class User {}
来源：http://www.xuanzx.com/163vfkatcjy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163kcwqcqpj.html

Ruby: class User; end
来源：http://www.sxryk.cn/163btfsztrq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163mmiguokl.html

[G02] 构造函数
来源：http://www.xuanzx.com/163yzgvxikp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163vqclproa.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163sxlzupny.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163prwczhkk.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ttzszjtn.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163oixeldnb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jpjaezou.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jtczhcqt.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163chqmdlqn.html

[G03] 实例属性
来源：http://www.xuanzx.com/163indozrqz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qwfxpshr.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163clwtzdzb.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jucepxyb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163lluynwux.html

Java: private String name;
来源：http://www.sxryk.cn/163oiiltprd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163smttjedi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163fulobtnq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ozbgthlh.html

[G04] 定义方法
来源：http://www.sxryk.cn/163shwoiyks.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ubnyjmge.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gdtrybxs.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163zfeeblhp.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163qcoztvxc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163jcdunqdg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163eszcsrjj.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gdvaeams.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163vrmdecsx.html

[G05] 继承
来源：http://www.sxryk.cn/163ljcuolxp.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163nccnraow.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163efhhqeed.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fubxtfra.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163zwpdzgly.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163axzzalvh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163rklftafb.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163sxyasnow.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163gugwxumi.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ggthlvwq.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ltlkbdbq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ngkaqnif.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hvntyzve.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163anryxjnu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jxzprebw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163xhacmubj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wmxlzpcv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163fugdfybn.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163tdgjjfiu.html

Py:   super().greet()
来源：http://www.xuanzx.com/163awhhtcsn.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163usrqyxmz.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163zjbenwuo.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163kbiqqkkr.html

Java: super.greet();
来源：http://www.xuanzx.com/163wrlgesmv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163qxqvtohh.html

Ruby: super
来源：http://www.sxryk.cn/163iflnafxa.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163gnktwjys.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163yrvrimmn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163yzsqqarc.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163iqzeoadq.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jewwrtqn.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pvxicpud.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ykcefkem.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163orhgljci.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163zzbctrga.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163hotgprak.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zjsrncrk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163pejhkljy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hqikcjtw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qbyfamdw.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163lveppcpu.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163pmzvtkis.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163pojzpwsj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163uharyddi.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163awmhobpc.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163bqxwfjlf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jsyhweur.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jkkrljhi.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qgzpurye.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ywitjcfz.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163xctednbj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163bzzkeloe.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ehqjteih.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163trbuaqws.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ewcdioae.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163zgomhfkk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qlwzjgcw.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163bpjpvmkp.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163svnmntux.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163yioixgcv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ilphwluk.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dixjkuvg.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163rblijuav.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163lnkhkhpo.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rnsswsxe.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xzehlorl.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vjulxtck.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163nguqpzgj.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163afauzqtj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163almrqtws.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163gvxbjczr.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163pvqanpat.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ifbwtcvd.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ihbeisyg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163kkdwzfua.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163agzhtisj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rkufeveb.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163drgutgev.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163oynuvjpo.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tiggmaiz.html

C#:   u is User
来源：http://www.xuanzx.com/163ptxuldko.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ikozztsl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wakoinru.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163awuvaruf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163pydxifis.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163yemmvuwy.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163sbawfpfh.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vdmfcvox.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163eyqolfqh.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ogwwolgh.html

[G15] 枚举
来源：http://www.xuanzx.com/163xbzprscj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qokwwxfa.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163vgaxzbxf.html


<!-- 参考信息 -->