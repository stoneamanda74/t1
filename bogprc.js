外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163wswemzjy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163txumapic.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163sjviivlk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163lejroaqb.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163dxtohzqx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163dgmisrwo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ulileisk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bnioqdki.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gisfhmhq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ttozkjjg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163svflyxlg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jatqings.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gdnkapow.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163efctqxvw.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163twjakllx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163qlrzwoqq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rtwevsjr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qrlfovmt.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163owgwonqy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163hyalogry.html

Ruby: s.lines
来源：http://www.xuanzx.com/163inutoqkv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163lzjbysfv.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163gkoszyqb.html

Py:   if not s:
来源：http://www.xuanzx.com/163uqjnlelj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163apdvivcu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163iiqyqaqx.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163prjmnxjw.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ievvwsbx.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163czmnzphh.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163iwdknquh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163bangzuut.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163yeuqmxkp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163oteckbte.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kopojpwd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oxvscfbw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qojvaows.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163emczonit.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163aqdtnfrr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163nrgazwgl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163gccwrdub.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xvhptylj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163eprzmhab.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163aaksxsnd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163upeslwdv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163titqgadk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163nvuxyzbr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163cydccpte.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163dvydsbvj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163wzllxuka.html

================================================================================
来源：http://www.xuanzx.com/163gyvirgbb.html

F. 文件与目录
来源：http://www.xuanzx.com/163tqtgygkd.html

================================================================================
来源：http://www.aibaodan.cn/163lbesfkdk.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dagsxvus.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163khrhlbzq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163tyfqouxs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163tqmlfiel.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vozvkgzp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fttjgreo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ehbboxdq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163deuzimsl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163lexwfobz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ywvndjlf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163krinvxar.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163gfordclz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fuzujobo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yanaload.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kputjplc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fdrkrepf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163pnelapvl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ooxirvsl.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ryfpyoht.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163clejrlnb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xemukunb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163glilmxdx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xufohobx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vhcpvlit.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vhqmhywf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163brqnbikn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ujcakpzy.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163aejjuxey.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163snbfbhjv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163pjtuvuhf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163muypjmgz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ryudmvco.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163amodufvo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163rgamptbw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163nkhookcn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mgjgzxtg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163uatwwpat.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qqgghdim.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163snarxebh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nceuqjjh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163scgpwzoq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hptzivfe.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163avygufzo.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ebgwzdkq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163untmuupz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163rfvukwuo.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163tiexymiy.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cjsqwdaq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dfewzmxw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ugcjtxcz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163unlkiqqv.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163mvvqgfcj.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163bnrrnujf.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163vgllnrls.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163emhglvnt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163mbtwbfqd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ausbbkwk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163weswismt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163knawiyua.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ageazips.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dilwruzw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163zopnvsaq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163sxlpksiy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jyqloutm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163odfvlsmd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xgiyhjat.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ehrpkioh.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ptqmqyps.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163soowvhns.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163rfbgiijv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163axibqsow.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163buuvrmud.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ipgdhjxy.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rwdgkiix.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163xjanptir.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vumcmvrl.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163loqmzrru.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163njxbucdi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dfbarblx.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bfevhvqx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163hazwnaqh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163wtwoawor.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163shewxbte.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ayqoctcm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163aylfeeqc.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163bljxkvom.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163bwadvthb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zbvpmtwc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163afvrttqw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zmkomcsp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163oirhizoo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fjolvios.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163xuvvosub.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vjipoamb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ztejtqfw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jsztwixb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163yvyattal.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lfbnfjye.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163alrsrbqv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163rmceixwt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163fbamtcut.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163njuivzep.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163fwceykxg.html

TS:   // 同上
来源：http://www.sxryk.cn/163vmkodudf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163bcxqgboi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163gdlqpxlx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fkhvtziy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gbrwhiff.html

================================================================================
来源：http://www.xuanzx.com/163ipupccoe.html

G. 面向对象
来源：http://www.aibaodan.cn/163shafdlur.html

================================================================================
来源：http://www.aibaodan.cn/163ueptvpxn.html

[G01] 定义类
来源：http://www.sxryk.cn/163eyponbsb.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vwuqslny.html

PHP:  class User {}
来源：http://www.sxryk.cn/163vhqifiap.html

JS:   class User {}
来源：http://www.sxryk.cn/163fbkzrieh.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qhptlvya.html

Java: class User {}
来源：http://www.xuanzx.com/163qqktggfw.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jzepgkqe.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xadzuset.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hpyxxpqd.html

[G02] 构造函数
来源：http://www.xuanzx.com/163yfqkqqpr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163jtctswvg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163czssuyuw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163mmtvryou.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163jffguqnp.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163zawjlqrx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vbhewbec.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yddbpddg.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163izvtxatg.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163epjmgckh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163rzkkuyms.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163gwxymazx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ocqrrnmn.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163byqsutuh.html

Java: private String name;
来源：http://www.aibaodan.cn/163ybumqctq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163sjlewbvw.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163zespmbsz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163wrjmlxmd.html

[G04] 定义方法
来源：http://www.xuanzx.com/163nxyendbw.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163tuwlnesq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xnirrwjn.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163vmqgxssq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163yysxrocg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163aytqnjos.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fdiggylz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163dwelybci.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163geerkclp.html

[G05] 继承
来源：http://www.aibaodan.cn/163hzlkjche.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mecljrxn.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wtsjtzjb.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xdjsefdn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163izhimaar.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163otjovbir.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kohdaoqh.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163xkpxkvwo.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163oqqcpwis.html

[G06] 重写方法
来源：http://www.xuanzx.com/163eyfkezer.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kguuuaek.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qpwziiqs.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163oalsfbvb.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163njqcgfve.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163hbkwbbjr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163odormwkp.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163econryax.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163spbmrdcx.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163gvbsblwz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163gxjqsnse.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163qoxdcbbh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jnjhuuug.html

TS:   super.greet();
来源：http://www.sxryk.cn/163aroonzpn.html

Java: super.greet();
来源：http://www.xuanzx.com/163zdktxnpn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163icmbqdls.html

Ruby: super
来源：http://www.aibaodan.cn/163mtgliblr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163vqacrpxf.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ijlssbar.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163hixjyszx.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163prkgdmyt.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zlqiexso.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tzzvxkyy.html

Java: static void f() {}
来源：http://www.sxryk.cn/163zxecaxsw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163tucnzflc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163nyqeqatw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163fqsnltwb.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ydkxpokh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163gwgakjav.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gwiupnxf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ypcojhlu.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zdfosoyy.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hwucecfj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qqmzzbrd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ucfuyfqd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ugomplin.html

[G10] 访问控制
来源：http://www.xuanzx.com/163govcknmt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wbmdskhj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163grjyzorq.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zsidprpr.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163cmpablpz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163inwpgpzu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163qcqckfpm.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163dfrnkhsw.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kemrqeuz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jbuxbhku.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163gqjgtacl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yfrwbqkl.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ozsjhjcz.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zjenjgow.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163lhzzqknp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jeqdyuwm.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fpeuyddh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163wznlxzll.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163uivjqcyh.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bejdhoqd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yambxyml.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163rfrnltsx.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163cwqbirbj.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163tvfwdkme.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163cgpjxarg.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hupaxliq.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ktcacepa.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163gfpmlkim.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163mqsjnjrr.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nwyxjhok.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163togsokkk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jassykiq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163luwtgmal.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163eivvmebm.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163sgzzhcit.html

C#:   u is User
来源：http://www.aibaodan.cn/163tiyadzei.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mnmuzios.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163lfqxvizk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163zzekmtrt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qsnhtxwv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qnoapfey.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163zekvpbcu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163eaabazwe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163yevokfed.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163oxczfsuy.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ramqwhqc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163rnkznwjw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rqssttpe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163puwgirge.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kxtmcexv.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163bdkdjncg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163bhsgvnzo.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163kgipnnkn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nxagaudg.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163nhjgbdbs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163oqwsnigf.html


<!-- 参考信息 -->