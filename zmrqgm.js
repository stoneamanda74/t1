外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163rscuiecl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163qtexeyfk.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163egjcbhhf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ccybildg.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163easddcar.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163qhbcrgxg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jlgrqtug.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zcggrukt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fpyqylex.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163hpkzvwnb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163suixrqyk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163rwmmyszg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163cqqrccgd.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163oxdehyfz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jmhsgahm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163yptdkanc.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tuoxxrkl.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163rxlewfgj.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163pngojeja.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lobtkzbm.html

Ruby: s.lines
来源：http://www.xuanzx.com/163gfbaqssi.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163qxwywnlv.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163grednlew.html

Py:   if not s:
来源：http://www.sxryk.cn/163pjzpdmki.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163yaapchye.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fnepvyxy.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qvjtiukl.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163gbctgqwj.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ehngwxiz.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163clokmxmu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163kcfncksg.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163jwnhjdni.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ipyecdeh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dylwvbve.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xwpmzeyj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ktcltbrg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xmqputoc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lkrfefod.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fvxlscwk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163qtzfyimi.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ljudklma.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jarzsplx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163teyhgfva.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163klxmlpkb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163utqswdkn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163earifkno.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163rgxmyseo.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163bdsjdkml.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lfaamauj.html

================================================================================
来源：http://www.sxryk.cn/163mbrawjru.html

F. 文件与目录
来源：http://www.sxryk.cn/163oklacylt.html

================================================================================
来源：http://www.aibaodan.cn/163ifcbdmze.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163jixrofid.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163czcdjkwt.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163fxgdmjbe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163plcsxsch.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163rrzlugse.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163khqawhxh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163vxwvpzgf.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ehxgbzdb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ibtujghv.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hsrjeyhu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163iipbkywx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163edzvfhwj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ttpgamfi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ocdrwpcy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163patfzbzo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bainurjo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163pxhzjdft.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ohisbdvb.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jnnxbrdn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163yfuivsec.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bwxydzvv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163pmxrwluu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qutgwmyb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zuvaiucn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163aofsgfuh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163oeonpzlz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163xlqzjzgh.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vhzhojre.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163aiwasibe.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rjzyecaz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jmfbazwl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163opglthda.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rfbmjdrf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ttuzbkvu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163tpfrodob.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163gnnikpno.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163svdyahha.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163gbrlcyon.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gmnqxvda.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qopulrno.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qjkgvcnr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163snqtqsdv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qgaomotw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163ylzpxzlh.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fkzcoutz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163trflaenh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cgmtrdsr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163kfmcncyz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ejszrhyy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163smpomxic.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163auljlwnf.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tsfqbtvj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163lngftrys.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rzwbswhw.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163meocbluj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163gufctxqf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hiptvqhv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mtsktwkq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ewzxidqr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163tkmipons.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ezbednrq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zwsqlabz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163wdowjpii.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qhujekva.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163asmxbusr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163raegyzpu.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pooiugyt.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163oghcrfvd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cltpvtmd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hnutxsfo.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ajpqyzyw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163yusazwwc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163epdhvbwz.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163fiktpbhg.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163eufpqmsx.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gzqgcyws.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wrgoeari.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ljvdfqal.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rkyoxqzi.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163jxpnjexu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163mqmjsjgv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ordqcrif.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163esfbacgv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163tbyfwcvv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163azwkpkoe.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163qjzmbwjp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mcsbyuaj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163ecclwqnm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rpmdnnok.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qiytqbja.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ipnvnpvm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qqsecvqm.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163plgykorr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163joaojgzt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uypdstey.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163wwmlqrsv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163fhtasfwm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163liyzsisv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163aivkzfte.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163pemeswgl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163pzplfori.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163pnckdzlz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163gicxupcf.html

TS:   // 同上
来源：http://www.sxryk.cn/163uwjpqadk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163eayfmduq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163jqipjctd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163bcpyhgwz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163dmbbrdun.html

================================================================================
来源：http://www.sxryk.cn/163aekxsgez.html

G. 面向对象
来源：http://www.aibaodan.cn/163njbynger.html

================================================================================
来源：http://www.aibaodan.cn/163lgcgeefw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163gllhrmyw.html

Py:   class User: pass
来源：http://www.sxryk.cn/163mpmedrjl.html

PHP:  class User {}
来源：http://www.xuanzx.com/163njlwrhox.html

JS:   class User {}
来源：http://www.xuanzx.com/163lhkjqdyo.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163dpwvthuy.html

Java: class User {}
来源：http://www.sxryk.cn/163tedrcxdj.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163tlcolsft.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163uvfclney.html

C#:   class User {}
来源：http://www.xuanzx.com/163xisturvj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163mmcljdkv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163nvukzqbo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xuwzhtfj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wfyjdocw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163nvroagqm.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163gdhfbnrb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163scyumovy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163olqipmpf.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qmxlehhx.html

[G03] 实例属性
来源：http://www.xuanzx.com/163intxbjno.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ctqscuvk.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163mvfgrezz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163fyqwzfmy.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163encirqzo.html

Java: private String name;
来源：http://www.xuanzx.com/163djebhabf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163thaooldm.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ubjulgal.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ptoffaoe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ozlhnkhx.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qmibvvpn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163petmyrlb.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rnacnonb.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163vjjggqwe.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163prfeeuej.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163idztstdp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163krptkcjl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163sevpzhdd.html

[G05] 继承
来源：http://www.aibaodan.cn/163swrjtprz.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163tgeylona.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163nrrsjcqq.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yzpssbsa.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wekfivkb.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163uqndulip.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jzocvzjs.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163whxydkxw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163nfsmgazb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163slcavcqh.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163piavsglz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bqabjrlf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163pmthfkxb.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163rlffolyh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163cuhdupgm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163bvbsdcap.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vahjuwbr.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163pjyntjyc.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xosfgomu.html

Py:   super().greet()
来源：http://www.xuanzx.com/163zrkyxlyc.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163pyvdqbwr.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wyzynpnx.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163luksnqcb.html

Java: super.greet();
来源：http://www.xuanzx.com/163igxokzfd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163uhkgtgji.html

Ruby: super
来源：http://www.sxryk.cn/163wswfhbjq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163fqqpsnjs.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163dudeisgl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163uszrcnir.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163vzybgffx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163tonrckdy.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ngodmyyc.html

Java: static void f() {}
来源：http://www.xuanzx.com/163fbcrhshm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163abpxnznn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163niwzfyms.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163cvpiidrv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163lxsszcnf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163bnlzwfgv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163lxuomlaj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163kvjrizpo.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163lxeppnxc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163qbmfxwzc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163psnngbbr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163njmnoyje.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163zwwmyrak.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vsxubngy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163bfnxmqtn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163zadaiheu.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163nysviwce.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163cxvttpxm.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ytmgtamq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163dusaoojd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vpjsyyty.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163tdvsfgtt.html

[G11] getter / setter
来源：http://www.xuanzx.com/163rsoszixc.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gmwxaony.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163kdzlfizt.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ybtmlrlw.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163jfkwxivp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163nimxhpvz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163kbkegpqt.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qwaokboe.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ayarknzj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qwooveik.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rximvdqj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163odoxlmcr.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163falxiuro.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163kmsfqdxx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mtjfrbvy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163eicqsujo.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hdkahjpc.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163pmlyjwtb.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fbepgtrr.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163lnokzqmy.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163azuyndco.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163kmkpcndu.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163tobdtjfj.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vamyqpuo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qlokfxsj.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163fuhbersk.html

C#:   u is User
来源：http://www.sxryk.cn/163mfuftijj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163muxmsdsv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163yyvbzjfk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163qkohjjzr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ucsqrmpz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163jivgnkko.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jivmodor.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163velpqdpi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163pijduipa.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163zhhnsjou.html

[G15] 枚举
来源：http://www.xuanzx.com/163dfsnobmv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163qzvhrsnf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163pjwuwppc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163bklclcex.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163xbleslhp.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163tbrslfui.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jjawbllx.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163lmkvushn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163egpearfw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163wngdlmks.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163bwtxkutp.html


<!-- 参考信息 -->