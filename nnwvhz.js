外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163hvpcrxkv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163nnbnlnyy.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qlnddzrf.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rjehshra.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163gqntlrhe.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163srmlytgp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163swrqmvld.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163atsvggbn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163azyblgok.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hnrchwgp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gdxxijgy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163daohkukl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rtgafiww.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gohxqbkk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kijyybcx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163irsvtknn.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163camqgwgq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ixwbrbwq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mihkgbxg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xmhliatb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mspcsxux.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163kkxzascu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ngigjzmp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163stvgopnt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163mxrqfjpr.html

================================================================================
来源：http://www.aibaodan.cn/163cokcmgnm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zprpculw.html

================================================================================
来源：http://www.sxryk.cn/163azpwjznd.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xndqhkhr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163gefryaxg.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163wuaabply.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163cbvmxszu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wvmjhmlx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cvlmlmcq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zyvbvvks.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163mmtdbhxf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163rwncqkmh.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163rshxrbhy.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wyayloky.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163sttlgklc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hppupyvv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163btxnxaur.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cktdrpjw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fwbwzibe.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rijevouv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163rpuwboat.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163jgzymvwt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163nhxcdpng.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163yqmpatya.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cfmcbzqw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jjxmpuuv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163yvvkftjt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kphjizzm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163mnsnjrqw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ybjkkhke.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163kqiwgtng.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163fikfigab.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163mdznbheo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fwenzilt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163oxzrumyr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163lpvswqbq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xzlavtxv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ofvlsnar.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163fxsqawlg.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wncotytk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163dyiyfipb.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tsmcxwvy.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xduogddh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rtuxxxcr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fjkezqvr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kxnitpbf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zofenkzd.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163njbzdayi.html

[F06] 删除文件
来源：http://www.xuanzx.com/163imdviqer.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nqquziqd.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hzcpbikh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rpdgdckf.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ybxdpfyv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tkljleko.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vsodfvjs.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163bwrsrunw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rrqyqcnw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163oobscjyi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163pshlbjdz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163kyuxoiay.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zikfgunk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zisdytyr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163xofuvrbk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163kromyuzv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ayovcxhv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163yyufhzrk.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163nniaaalx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163evzazvdo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163yaadynjt.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hnpscfka.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tivgpefy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xhucaigb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pcldozjz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qdctotpz.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163helfsnpk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xartlgvb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163aesgugml.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ezgkzaec.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fhhjyzyd.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qlnkgzdc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vvyskduy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163twuhlzlx.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jmxhlcon.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bjmrfcsd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ywxhgjuq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ifjdqzwn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hyckgjvt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oyqvfnpw.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163oraojbyh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163eniytwpi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ghzsardw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wmwlnadu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xyfjyrdj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163zozshpyv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hvdlqktz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163pavgjgry.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163meazbzak.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cdwboben.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ekpejajt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163kqumccxt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tdtylioj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163racdqeke.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163dmuvekdd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163etuoxrnu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vonxkhgv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qvapwomp.html

TS:   // 同上
来源：http://www.sxryk.cn/163nbcusndk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163xxwdekmh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jrbbclnj.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163nhwrotml.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xdhkowfk.html

================================================================================
来源：http://www.xuanzx.com/163qlzpdney.html

G. 面向对象
来源：http://www.xuanzx.com/163duhgifgk.html

================================================================================
来源：http://www.sxryk.cn/163qnhgczwd.html

[G01] 定义类
来源：http://www.sxryk.cn/163cccqfkaa.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ognbybtu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ioizrclw.html

JS:   class User {}
来源：http://www.xuanzx.com/163vvdakijo.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163prrpwyat.html

Java: class User {}
来源：http://www.sxryk.cn/163mvycecqs.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163jykhkiii.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ptqahsiz.html

C#:   class User {}
来源：http://www.sxryk.cn/163amkqwjus.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rfxhpyhe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rzhtxglo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ibgcyzch.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163qrslcobq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163punocfpa.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ktfifkxh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163lhhyytjq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ykfjmkuj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163aqtcurze.html

[G03] 实例属性
来源：http://www.sxryk.cn/163spbodzgz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163rpphjxjd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ujwmxdti.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163juqyfzjt.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163rjcxzrvj.html

Java: private String name;
来源：http://www.sxryk.cn/163wlqlopjx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163luregzfh.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gntfprrj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163seeckmuq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163kscywdif.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jfpedxls.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jevtkvbw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xhgkyvil.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163pinagkix.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163yeytlmzn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163skzfygkj.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163tjxriwav.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163rezzvmhb.html

[G05] 继承
来源：http://www.sxryk.cn/163ryyavywx.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163afjqyzac.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163hwcqopvk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bwjxcfte.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163orrcymmw.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163rrnbzseg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163uhqzdeqa.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163llurhqts.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163alsuqxaj.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vyodpvlw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qompmlcr.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jxieesjy.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163fgkbyjgq.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qxcfpbcd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163auwupxeo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163xixpzzyj.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163eysysfea.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163nmobqcxz.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163jdzjojgg.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163jrqbhygw.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163cbkuytdc.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cwyfrlsz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163swfbnndj.html

Java: super.greet();
来源：http://www.sxryk.cn/163wbsnkubz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163moapvcmo.html

Ruby: super
来源：http://www.xuanzx.com/163xjgcnmxx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ovaacqyb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163omsizeyb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gsvlailk.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ocxgquri.html

JS:   static f() {}
来源：http://www.xuanzx.com/163tizjcfgq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ukgqfovh.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ulhxlrqf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163dcxkycyl.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163sepgihqu.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163irvqjrix.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ebwipgti.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163cfhbsbjx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163tbofctwc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ivzhdfkd.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163imvaxubc.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163elydzljl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163kjkekzpr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163gzxemabw.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rzkgbyuw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163tjmixfwi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163hpvawlop.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163obbhaeru.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163axofjsao.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163msojayny.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ivrieorl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vusvepvn.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163wmajaycl.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163hqcyjkcg.html

[G11] getter / setter
来源：http://www.xuanzx.com/163olzyrzeh.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ggldinmb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163csjttjto.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163knotodzh.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163wgfnbmbl.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163aeooqlgx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163unzgphfr.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163tsbzkhto.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163hmhrighr.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163mambtmff.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163oyrixgzv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fbctyxzu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163qxfyfaxj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163bwhbhjmh.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163kiqsiras.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qjojckzv.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163yhvnfvpk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163avdwxogm.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163cyerhtsh.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163nbyvtzje.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163njgthtvb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163yjbiduxf.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163smnquyqq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163qrgzunoj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163mdpimuca.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163qagknnyr.html

C#:   u is User
来源：http://www.xuanzx.com/163eeremfdh.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163zzvvvziz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hhaeozhe.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163uycfxqyb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163meuoklwp.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163hfirjtba.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ivarivcu.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163kzwnixzu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163jozoimek.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163bzpwzbow.html

[G15] 枚举
来源：http://www.sxryk.cn/163eshhnvuv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163scwmdeqc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163pwlctrpe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163bhdtspms.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ticvzuxu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163nnfrrqpf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bnxvakhe.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163nwegqrjp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dvycxltj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163kprktyjc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fyizgbnp.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xvptadcz.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wcayohxg.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pyowbuqu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163zlvdjimd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jwpjcvle.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lsnomeqr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163qwyzyoiy.html

================================================================================
来源：http://www.xuanzx.com/163ncizljyk.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163qvebffyy.html

================================================================================
来源：http://www.xuanzx.com/163eebhnypj.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163dhwyaxqo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163uogwwftq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kenjdqhg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wlddynks.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163hkyckkjm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163etbbxqlb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163pfskfhnv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wqnakfez.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163gwhlcdhs.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163mndezioq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163nqsddlkt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163aifskdov.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vwjhigmf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gcfwytkj.html


<!-- 参考信息 -->