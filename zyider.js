外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xqinlepj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163gkgwlytg.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163qahuqmsv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163eqvjbhpo.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163muqgtyes.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163utbfllar.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163fvvrhqgg.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163hgaesjgs.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163zlahcuqs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vtpthwxu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fvlumndx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pcijvyao.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163znqtfuuv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163kmyvvipf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fzccesnw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kldtpiie.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ktvchmsb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mubrihds.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xczsekcz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hegbfgih.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vgklyrod.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163cudsybtz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163fbbfjpcg.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163nqibmfni.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jxqptfkh.html

================================================================================
来源：http://www.xuanzx.com/163otkiwtrf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zkckoham.html

================================================================================
来源：http://www.xuanzx.com/163ngswssxo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163nttnyyeb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pvuqebzl.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163sxpivywn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163sqjiibou.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163amfrvinj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dhwqhgct.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163njucmyhr.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163vuyebgal.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163dscidzte.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163bpqpggvo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bobhajub.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163dgjwdqvm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vyhpfrlk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jurpofui.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gwhtzjvj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zzqhlxig.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163vkjjaexo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163djvjmmic.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163oolxfzye.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163dxwmuzqq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gtjggjni.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163sfoglsai.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163owgknssh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163kirtjgev.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163uowkqpvi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pcyagnal.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163kmrfbytr.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qdybquui.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163mtfixkwq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163judcixub.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163aamcsoox.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dcfiuuqd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163lsodwslr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163utlfulpc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163pjskshbh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163lhqaxkax.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163cilvqskf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163mkawfolg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gslxzsgo.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tjculhsw.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ktzxynpl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cytfrcln.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163tpfelqec.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163jrvgqoqd.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163zbrbwriq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163seomwyff.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163lvvvfhdd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163elrowuec.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163roukwawk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pmavabmp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jqfkxyjh.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163fezzofxo.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ldhoumoc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xtwnsiaf.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163mvkkarbh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ydstdidv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163yjjglmfv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bqpatfpe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xofwkttz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qeucvaec.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ncwmxlqn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163iefioxqm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ocsrzkmy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163djguwsmm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163jrwerxsz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163fkmobvln.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pebvyuoc.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163grnrwpub.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ovujziva.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163gzozyhoj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163fhdunkyg.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qtbqttzs.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gtdfqdra.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163sqvwtyme.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ovpthkby.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uabwvxnt.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163eewztfih.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kudgdsoo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163xmwercxb.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163kegqvuuj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163pmhsupns.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163idnfxvnl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163czxjmaeb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163nijqudmt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xbbfaqgl.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163nhzaklhc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163sjzfcgfn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163iaieuijy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kpselxuk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163iwbprghj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rqaaemrs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vnseodir.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163nrcpbmha.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hblaleng.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kqluwlql.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zftvceca.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163foamzzqe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tvmuawcb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163grrspxgy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163zvvvvbzk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163iibaqyqc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hfminpyn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163eyftzhyq.html

TS:   // 同上
来源：http://www.aibaodan.cn/163lbaiexco.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rhzoyyhs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163spzonnex.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163nqiyyqcn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163gigzxywb.html

================================================================================
来源：http://www.sxryk.cn/163gdblivnp.html

G. 面向对象
来源：http://www.sxryk.cn/163lfljpdzr.html

================================================================================
来源：http://www.sxryk.cn/163igoxooqj.html

[G01] 定义类
来源：http://www.xuanzx.com/163zzztykkv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163pekkwzsh.html

PHP:  class User {}
来源：http://www.sxryk.cn/163wumjoimv.html

JS:   class User {}
来源：http://www.aibaodan.cn/163jnmlkxcv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qwmlcysx.html

Java: class User {}
来源：http://www.aibaodan.cn/163jmqjstkc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163hrhovnrs.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163nxdjwqfo.html

C#:   class User {}
来源：http://www.sxryk.cn/163ozjheply.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163cbjotnzv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163hoifrxgs.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163nzhonqrd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ndiecren.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163iwhsmaok.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xvxntfdb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163eeguqbxk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ptfxfdbr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fbazfelk.html

[G03] 实例属性
来源：http://www.xuanzx.com/163spvcwgmr.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163huljnqjc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163nmoejujg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163wimtlepm.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163alyuzpsr.html

Java: private String name;
来源：http://www.sxryk.cn/163teidlxmd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163hvyjtodg.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163andtzcgh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163icmtnqlr.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vmyyqokx.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jlpetgyy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163mbwyzhha.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163sgwxfapo.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163snlvgzlm.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xcrpdwws.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163thnvejvf.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163tkkdknia.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163hawpxzwf.html

[G05] 继承
来源：http://www.aibaodan.cn/163sxicyalt.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163gmpscmli.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163dekbmgul.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fubxgvfl.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qanhilwu.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fguhabkn.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163eabycdqd.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163aipaoyek.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jdavopey.html

[G06] 重写方法
来源：http://www.sxryk.cn/163gaoqpeto.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163jxzspblf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163sjndhapp.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163mpyxniic.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iktccuzg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163dwsznhkz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163yroiided.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163mcouaudj.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163cdnuvuya.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163jbazekua.html

Py:   super().greet()
来源：http://www.xuanzx.com/163oqccksii.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ftgavhja.html

JS:   super.greet();
来源：http://www.sxryk.cn/163fdfhcaxo.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zmqedemj.html

Java: super.greet();
来源：http://www.xuanzx.com/163iwuwlhci.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163fhonmmhm.html

Ruby: super
来源：http://www.sxryk.cn/163yoafoukr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163hdmwlbkd.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163yaxiytbw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163pdvwvgux.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ybhralqi.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wfagvslk.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163eyjodqfm.html

Java: static void f() {}
来源：http://www.xuanzx.com/163jwtqdmdd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163yhlzkovn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163jdjeyypw.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zqalfffo.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163brkspejy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163iwysfngp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163eliapanp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163qloxhrad.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163uwdaamwy.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vdgwtkmv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163thvzohbi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dclfryka.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pagyeusu.html

[G10] 访问控制
来源：http://www.xuanzx.com/163pbewsyfi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wtvrcfyf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163urmkkrog.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163uhwawuxg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nahycwgo.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163uzdxgiva.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163pgkbjzvl.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163pkxzuvzp.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163xtjjhlxd.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ulmigqkw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ebkryimc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163xrzvfhtg.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ogfqyjec.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163loshcfft.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163rburlfwe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163oxkndmht.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163tfznreyz.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ekvyjgvy.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163emovurxb.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wlfxzdqj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163rbevqxnl.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163djqqkwzz.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163sguhsxja.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163olqaqftb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163htzufdja.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163qjatejhi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163yxbomnyw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163nptiqwdq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wctgfxol.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163duygnsvo.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163atpgllwo.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163djjdohmv.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ochnopph.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163cmbkxwok.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tnsnegjw.html

C#:   u is User
来源：http://www.xuanzx.com/163egdtmtou.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163lcqedtls.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163somhvhjp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163gwjcmylz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163eowemhow.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163euovpqqe.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163upqlyjdt.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163krtzjljq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ueifraea.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zxwymdhq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ezlchbjt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163fxbclkda.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xmjssxxb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zfgizmsq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vflkkfdc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163lxjbmdet.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163behlspqi.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163cdfipwxo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163caobgrlr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xgjaotmx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ecstyzqx.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163piearcyf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kejcieae.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163phkitcyp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163eqvqzkcz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lsavuuen.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163eangnojb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163qopwnppg.html

================================================================================
来源：http://www.aibaodan.cn/163sjcystxo.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163imwtrocn.html

================================================================================
来源：http://www.xuanzx.com/163gdqvcsvl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163wntntyxi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fxyhhdkv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163lmbhjuhp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jigjsjyi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163kreiiysp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ovfkvamd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163fobgcnss.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wcmtdgdq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163bvckcodh.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163nhtggnds.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163iclfowgi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ujiryaue.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163obepwxnk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163adqhvrce.html


<!-- 参考信息 -->