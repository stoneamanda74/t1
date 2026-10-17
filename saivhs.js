外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ixjvyhke.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mgmwmxbh.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163hyripwjg.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163pgtomjgf.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ufbtiqne.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163vnpezryc.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ljeapkba.html

Py:   if not s:
来源：http://www.aibaodan.cn/163fitcylsn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163cmradhpc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163glcaewoq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163qajgucew.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nptgebis.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163cdzqgxxa.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163uggvzzeu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163wuajhbqh.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mnqjeall.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163jzmwaxnz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ndvtxjjo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ceiydzqk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163enwqlfqe.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hvcjyvib.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163sqrvavny.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163zmgfoqkk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zfdxcans.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163enedisjo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163pbrhmveq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mvldclqv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163euxehjzm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163maoegruh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163snhsndzu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jdpwfnsm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ytubvuik.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163dgzreuok.html

================================================================================
来源：http://www.aibaodan.cn/163ffmvdkbl.html

F. 文件与目录
来源：http://www.sxryk.cn/163qgqmxzap.html

================================================================================
来源：http://www.aibaodan.cn/163ghxgmfxk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wtcvmdxk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163kdrmjwyn.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ihbvkbdo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zzfxvewm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jcbscrvv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163znovdubv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163xzprewgi.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ogrjqoig.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163somrmjfe.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163oqbetali.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163aftubkio.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163witsyjbm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bvtkcpxk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rvzqhimq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163osubhxbv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163txnyeumm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hkkgynrh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ilbotngf.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163cijotpht.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vcuzivnn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163pnrusypl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kjximdvs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163sgbylfei.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163lszqeyvw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qpaagrsg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163csmgdduy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zbndgvkx.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163mdngvegs.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ezqtktej.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163oupzljlf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163aqpomgro.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hwhvujir.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ewcucuhp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163pgxfxkpt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qfqaqopd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ugaydpqd.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163pvaqpagt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163fpvozgpc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163mozmfvsc.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ivdixfxr.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dpwfwxvl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gssmsayo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163uvufmvyh.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wnquajzk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163iktcfdir.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xxwzbtel.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kbtcbocg.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163owqunuev.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163aaosrwkv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lwlznsoo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qqispwdp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163muwsrndo.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163qwootqcp.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163fwktauyu.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163fzxqxxsw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163njhuagxw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163tjvjjapi.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nqxzxwze.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163oznpbdbh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163hkalizxb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qanbsvbe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163cxjefdzf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163gswvwkeq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163bbnvcrig.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163uuzzvxmw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163igucmixw.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zulxmsax.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163oimzvjdz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zjbwijka.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163sgbfetns.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163bjncrlku.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163lyqvlkaj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163jvlwbqde.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163tgtrmcnk.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ztapswwz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qhgfjmxq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wfngasnt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wzgfjiom.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rfosqctc.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gogthewe.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163uahysdfh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mfhaquzy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jusbzlxf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163srmpyfhz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uudfxcbt.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163duyyweao.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163wxuochwh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kxnehxho.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163plwtkeqp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163owuseebi.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zeqiinbk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fewtzlmh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163xlxkvsvu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wgkcqfkf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vpsloybh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163blvjwtxk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163oxpinmph.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nnskxras.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xkrlmcoa.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163mbxrufdi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163awonugcy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163gmsfmntm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gcpbmzjr.html

TS:   // 同上
来源：http://www.aibaodan.cn/163pgrlxekt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kssbdyrk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163mpjriftg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fcgqwafx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163feapseav.html

================================================================================
来源：http://www.aibaodan.cn/163dcqktdlz.html

G. 面向对象
来源：http://www.sxryk.cn/163devysrcb.html

================================================================================
来源：http://www.xuanzx.com/163cgudljzc.html

[G01] 定义类
来源：http://www.xuanzx.com/163ohqpnluq.html

Py:   class User: pass
来源：http://www.sxryk.cn/163cniyiusc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163dywyskmx.html

JS:   class User {}
来源：http://www.sxryk.cn/163yetcefzu.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163elifmxcs.html

Java: class User {}
来源：http://www.xuanzx.com/163pmmdbjth.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163oeuwvobu.html

Ruby: class User; end
来源：http://www.xuanzx.com/163iffunjqg.html

C#:   class User {}
来源：http://www.sxryk.cn/163kbhihqfo.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163bkhoecuc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163mvamwcui.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ozxilpiq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163acqryqvr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163wmufmmyu.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163biklwuev.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163strihspk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163etkwdqbe.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qvozxxwf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163mecyioax.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163rzoeiqgn.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163uybmqxkj.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163huroxoec.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wquxlilv.html

Java: private String name;
来源：http://www.sxryk.cn/163qrqhfgzs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163drpwpljb.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163hxqjponq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jcpideph.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lslzkxmr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xithmneg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xgafphse.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163nuklvvyw.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163letasckb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163kccfsnyb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163hpwmsgxw.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jaeqvpvi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jcrpsrxh.html

[G05] 继承
来源：http://www.xuanzx.com/163kmjpfjvv.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163oiyujlpq.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xqtoyrwi.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163awfoxfgu.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pcsnmgxu.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ycbzvvet.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163zfagehrb.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163fazcwglz.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ddrnpidy.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163vdrxsgzx.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163wbacpser.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ebddgmwc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163gnkjwxqn.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gtvdbaaz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163bjbxwozg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163saouxccd.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jdoqanly.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163wlrqxdqw.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vmakfjys.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163lyyoaprm.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163viwhudek.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ibgxkyaf.html

TS:   super.greet();
来源：http://www.xuanzx.com/163fdxoraxo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163neuqjvrc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163uuaolnlk.html

Ruby: super
来源：http://www.aibaodan.cn/163peixsvpu.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163yolhghgd.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vqkkywas.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xjxrnzjb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163exlbznhi.html

JS:   static f() {}
来源：http://www.xuanzx.com/163yrpbhyfu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163elhzjmwn.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jpkyyuzd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163uomjfucr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163yijmnvwp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163crouqizc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163bxlngxfn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163pmsgppqz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163gytshlxh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163zoepmonn.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bgzfxjmg.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tphvhpxt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163eumtjldd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163djrnvyml.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ulvulmyg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ubqjjivi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xjuetqwc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163wkzhqxsh.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163yuhmzfmh.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dfrazmmi.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rkdmmbkv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ugmmynak.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163dhwthqnc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163qbltwabi.html

[G11] getter / setter
来源：http://www.xuanzx.com/163imfqcntj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163gbombezd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163rkwqirak.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ovabeqee.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nnbyrkwz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163bfhkganv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163eadfmbza.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rbxxuxro.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163yzgweytk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163wfyxvlhv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wmfrcsrx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163trdvqsgn.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163siikstgn.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163bcuolkyb.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163pqibdjfq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163tbgtbnlo.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163gfggjdxt.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163scxvsmjz.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ifrhadqw.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163vpwvkqgi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163hncjatvm.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163fmosxtzr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ozrhqjpo.html

Java: u instanceof User
来源：http://www.xuanzx.com/163uyzcftbu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bmkmjqgm.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163hxhzqnwe.html

C#:   u is User
来源：http://www.sxryk.cn/163fedeljlf.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ppbjkpae.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163torwlpho.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163fbqpokjn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163jlwlbfml.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ygefxocv.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ksrljszb.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ldicyotr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163zparwkob.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ayexbmcb.html

[G15] 枚举
来源：http://www.aibaodan.cn/163kttvtdxb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163qgyfjsrg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163igzfbfgc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163dynxxprg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pbohjiyy.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163llrbscor.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ozageybt.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163bgcfdztl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ccxpxonh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ekbbzkse.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lrizrikg.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163nredfgjx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tpzazmag.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163btutwrrv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jmwipjqp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ypbuswim.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nbuztodi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163abmmwvek.html

================================================================================
来源：http://www.sxryk.cn/163bifwhvhr.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qpbmbzby.html

================================================================================
来源：http://www.xuanzx.com/163ylrheqjf.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163lrapnnku.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163mmfingky.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163pvjqgpin.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lousdqek.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ywjcwovc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163sqzicfel.html


<!-- 参考信息 -->