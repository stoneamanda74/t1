外链999!wailian999！

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163eunljqet.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163egxsfswc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163aqcrbkbh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ujpkptnp.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163piqjjnhb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163aqjzyjyw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163iuxwlstw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wsjlhzwo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gdbddrby.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163sqdpkykc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163yzpihdpc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163nydbogpk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163sbjqobkc.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163rfvgehep.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163rqzjfomd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xsoyfrkp.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dvuweccc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ioqdgidu.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ebeegcrr.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163mgevfvhn.html

Ruby: s.lines
来源：http://www.sxryk.cn/163zoxyarwe.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163lotbtsdn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163kvqojzpc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163qtozkavx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163bbeuewak.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163najeztrd.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fvmjtqun.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163llcbyudr.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xjbpviep.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163lsfishat.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hhpqdsov.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163rawqxgfr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163vgzissfc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mxgovtap.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bvurxqqv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kxdkphmt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kmzvlncp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163cmtemeog.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163yckizzlf.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kgrtakar.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163fchawdky.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163akfgspfv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ywzmzjfh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163tcwsalqb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cygqqegu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163utsdcfqx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163acwbvbxx.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163lyqaughd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163gzedykau.html

================================================================================
来源：http://www.aibaodan.cn/163xrymyoez.html

F. 文件与目录
来源：http://www.aibaodan.cn/163efgqtdmz.html

================================================================================
来源：http://www.xuanzx.com/163uwllokxc.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163dysgiyii.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163dyaknldh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163bukkxqnx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163jndlykvy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163cxnqoprl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hnyiesaf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ftmoalre.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163yubmcvjs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163yvrzxgrq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163udlmiocg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163gptzfuii.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hlaknlib.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163efuazofd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mvthkylr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ttogjeww.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163igfmvwqe.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163xpouyfpo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163kgzvtnmb.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163onvatsqf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163traxybch.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163bhbitxuq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cmrjlmco.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163oesvrjip.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163xteharpo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ascgniqd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163fmkxumqw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163uityktyz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ifkuiarn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163dlnhygaj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163izgdzksz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163tvfrlrbt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fgbqodbu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163mmvzgutx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163yftbtkes.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163mnqwygqy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163patsctbh.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qoilzhzo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163pumqlwyq.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163arouvqyd.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mplqppnj.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xxxytyqt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wonavpya.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163mzxvhivf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163szufslpm.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163iwxnweeg.html

[F06] 删除文件
来源：http://www.sxryk.cn/163bbjhkcgo.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163oarxghao.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163zpcfiozg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163coibxhzu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bgishxuk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iqfirfln.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163jvyclzpy.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bgyzklja.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163dnhvozmw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163izjxqmld.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163vnyohsos.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163miakhdhb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qsfcofqn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163utccpyex.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163jbyvysqj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163iiarvqql.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163azpbiaex.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163gsuzegjg.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163glfziifr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fmankyrr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xwnevyoa.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ppxzkewd.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hgchxkyb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qkqubteo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ixkazfxa.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163uujoiuth.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zhhmbllu.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163rlomocbx.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163llpqqvvf.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zfwlfuor.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wzjdjucw.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163htetpncj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163stszozer.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163weikggvs.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163sjmklnkn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ubkuiwka.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ltjnlivr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ifvuukfo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bblfqals.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zrxzpprp.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163vewxuqji.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pzfscmfv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163octasoyj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pqzpfzli.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163hmggvwgz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ebyzrtjc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vdajfqtw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ptuufenf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wzrplnkc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ietmxwjf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163euuhnjoj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wywsudoi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163eyblevgw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163mepzwuhy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163zgiviphj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qwwecwjr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163fzbkjslu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hhncdcjj.html

TS:   // 同上
来源：http://www.aibaodan.cn/163dengbfca.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tglkroyl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163cwdtsebn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163tfvbkfmv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dfljkrib.html

================================================================================
来源：http://www.aibaodan.cn/163jperrdru.html

G. 面向对象
来源：http://www.aibaodan.cn/163gokbbtuu.html

================================================================================
来源：http://www.aibaodan.cn/163ojxmjbyz.html

[G01] 定义类
来源：http://www.xuanzx.com/163dbglugru.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163lrxaxryu.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zuvuglyw.html

JS:   class User {}
来源：http://www.sxryk.cn/163swheaonq.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bwhhosrc.html

Java: class User {}
来源：http://www.xuanzx.com/163vkdxltfx.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163niscyeaj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163eyboewbd.html

C#:   class User {}
来源：http://www.sxryk.cn/163qzshlpam.html

[G02] 构造函数
来源：http://www.xuanzx.com/163giljacro.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163sfrntprt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163wwjhshcx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163avweynqj.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163dairohlc.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ggfaijds.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ugxdhkel.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nmxvzgat.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pokdacgn.html

[G03] 实例属性
来源：http://www.sxryk.cn/163hnxkckqo.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163vzhujydp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xrllsogj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163enmyfyxd.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cbajbuwn.html

Java: private String name;
来源：http://www.sxryk.cn/163kdavuspv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163evvbdkwa.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163kffnmuep.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163jxiqtdxt.html

[G04] 定义方法
来源：http://www.xuanzx.com/163qwhzmfdq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163zatkmkux.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163tlvdtwbs.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wpbhtpsm.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163yfjsgphu.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163acihulho.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163zxbjcrqn.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163inteuplp.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zzrqfljm.html

[G05] 继承
来源：http://www.xuanzx.com/163enernmzq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163rtnlusnn.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wojeqiqi.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fhcxcsmj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tdyfijnx.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163uoijutnb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ifgtwczm.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xjhboukk.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163pndtrbms.html

[G06] 重写方法
来源：http://www.sxryk.cn/163dlfbiusl.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163dcsixsfb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wmefzcis.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163urwnxbho.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fvqsxbsj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163sbqgkcru.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163wiltrkxq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kuxchkiu.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163qnbvgebz.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ipqlqdib.html

Py:   super().greet()
来源：http://www.sxryk.cn/163rhyrjkbh.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163zhpnvilx.html

JS:   super.greet();
来源：http://www.sxryk.cn/163sjanpazo.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163tiieryag.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ieybbjmo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163nttnyfik.html

Ruby: super
来源：http://www.sxryk.cn/163pqhqtmlh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ssdpuukh.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163oqvaygge.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163umzcncdc.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163usakekfi.html

JS:   static f() {}
来源：http://www.sxryk.cn/163evuekqlx.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163hjinvrlg.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163sfnhqafn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163sgxjmpjo.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163yzzkfycq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lzfsdlaq.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ltzslyvp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163fgzlumkn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163zvgrttvj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ufehurdr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163fnzspgfg.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163bwlzjioy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163bwvfnnmr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ptrtartp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ixiybmca.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163fjlexahs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ryfvexmg.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163wnklzwfb.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163hggmxtkb.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163uucrezcq.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163paofaqst.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wlsazfmw.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163omcgnhom.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163qgyyfrpv.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ynxzhtoq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163cicxkatk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163adidwjlz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163osyckrcd.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163sslzixiv.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163nxgsdadq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qjukdhig.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163guzzeakj.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163pomqkkmo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163gbxdcomn.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163yqieajst.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163timalenj.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163favwhgrc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163eatdzoaf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163druobzdv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163prxamcar.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163hildjkxi.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163iljerqas.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163tpveskhj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163aubzorwc.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163rznyhwlt.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ruwexrxh.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163mydrtbkd.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xvtvuvgi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qmdiexzq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163iaqlrcoo.html

C#:   u is User
来源：http://www.xuanzx.com/163dfqxjfmc.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163iiojelvc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163yswajmen.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163takwnfjv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163paxtplgc.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lhoxgvuv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163resitgyd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ashvkocc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ghkniepi.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163mqodceny.html

[G15] 枚举
来源：http://www.sxryk.cn/163cohwwwfw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163pyjcrjkd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163nykpyyhx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163luhmhhyc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jlpwxomp.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pydsrqlc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163jkwzpkss.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163rlazkagh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qhqvgvxi.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qibyberg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163lcixxtcw.html


<!-- 参考信息 -->