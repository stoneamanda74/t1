外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163wpwysfyg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163sliiaafh.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ajgrhyap.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163bqjrgvbn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163myrandvk.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163crpkmrwu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163lnvcalzu.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163konzvgwz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163xgfwozfn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163vhkqrdvq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163afmgozlo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iolmddpd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mznowmnc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163edzfpbrm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163nivleycl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163orzoaxmo.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hxsaveoc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ouyuszbf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nyrvkbqp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163srmhizsd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163eovlhyks.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163metlyadk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163situofbb.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gkeqdhnw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ljdsazux.html

================================================================================
来源：http://www.aibaodan.cn/163makcoprb.html

F. 文件与目录
来源：http://www.sxryk.cn/163vblxarkl.html

================================================================================
来源：http://www.sxryk.cn/163bjmvmjmg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163suqydntd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163zsubnrjc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163bxsaztia.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qjoclarn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ulkhnvym.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163btpqdnss.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163weyiuiic.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163qttkjbfh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jhpnuqzu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163iydssamx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ormzvzod.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163jwsmrgfi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163eusacohj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rvcptfah.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xvsrszin.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163chcsjhsq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163yvycorqr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163uknkqvzo.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163tjjefscx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ywqedsdv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jauwdgxd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163sdswglxm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ygzcdebl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163xwfjiosn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163edjbdnjo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mbutvdam.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zpeeutcr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163haoaqywv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163uowbfinj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ghrhsris.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rocokmma.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kfuisedz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163hrrtkncu.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163virfibub.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ltrwbuyc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163abiwmerf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163pfbgckhp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163upxmylnw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163dbnihnbe.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rxqkmwep.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yfqalftu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ixmwdfck.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mjecgngq.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ghtqdayt.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163omjllans.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ytlvqsyb.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163igfgjexh.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163xknzelpb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163aqzfxltn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wosuuqzk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163asadvmho.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163fqnddvvi.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163obaobwqf.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rfxvkisq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163oxipxvii.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163bggusmum.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163wpsoyqfe.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kkvptfdr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yfzoshet.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163tatipyop.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163dyakompi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163rckmvwpx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xpqicujt.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163mcgksjlp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163heonxtuj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163mpjxfebs.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ewncfakz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ylbgluma.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nfhngqvj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hexebwmd.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163siyjleqc.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dgivnret.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163xlniowvs.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163jxyvksuc.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163xnowkiai.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mubgrwfi.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gkqesgfr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cbieizxp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hnqhtepw.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tzwmezre.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163pnokogiy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163auunptva.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aeihveva.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163nehhmjef.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163eagcknep.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ewnnvcds.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rpgfkics.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163kduneqmq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rbllxhhn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wmwtudqu.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ehhbtqih.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163orkazaoa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163snczvjjm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fkonnhpg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mtjobhuy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163firakhbu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vcrabvgv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163olcfnsoh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163aqrbgqgp.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163xjfktczt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163oflwwhfi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163rlkvyhsg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rpvgjvqr.html

TS:   // 同上
来源：http://www.sxryk.cn/163pkfrzjye.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kricnenk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163wwgnpagk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163jqkikmbs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ojjmepsc.html

================================================================================
来源：http://www.xuanzx.com/163zyomgqor.html

G. 面向对象
来源：http://www.sxryk.cn/163jxkgdnlt.html

================================================================================
来源：http://www.aibaodan.cn/163fgzvgnzk.html

[G01] 定义类
来源：http://www.sxryk.cn/163uecksalr.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hivsxmhe.html

PHP:  class User {}
来源：http://www.sxryk.cn/163smsszpor.html

JS:   class User {}
来源：http://www.sxryk.cn/163fmxedcmq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163hpesdtwb.html

Java: class User {}
来源：http://www.aibaodan.cn/163vqvdrxcp.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gadyxqkk.html

Ruby: class User; end
来源：http://www.xuanzx.com/163cebmenun.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pruwnftt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163dpovuvgv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163yjfkywta.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163wmznoxor.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163rmbfosoq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163hnvncsmy.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ggpvurgh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vuedrelu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163pfbgiknx.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163rtuswhhr.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163rsdkewwr.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163eyzudgbx.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163pqnkbays.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163anegkonz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ngqppgyv.html

Java: private String name;
来源：http://www.aibaodan.cn/163zavfyulv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163nozftrht.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163khtanqwm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163lbargiaj.html

[G04] 定义方法
来源：http://www.xuanzx.com/163jgaswkfz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163cnvhgrsg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163zkeylwtw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163taairjuw.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ssoxftwm.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ovdrxyxg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163amhtbooz.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163httztxxa.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163sflqmmdr.html

[G05] 继承
来源：http://www.xuanzx.com/163llajvral.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163quwyeaup.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163frczrfux.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qufslmcw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jmarsdml.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dthzqufp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163fzbezlno.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ptjukzda.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163hcurxmmt.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163dalpietr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163pnfqfdfi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163srojkggk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163cgpoiqpz.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163igkttgko.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163itnrdqyh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163jltrcnms.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163abrnshby.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163agbyvenm.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163jvmnuooh.html

Py:   super().greet()
来源：http://www.xuanzx.com/163lmagekjf.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163nfoxlrgx.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hvypxmob.html

TS:   super.greet();
来源：http://www.xuanzx.com/163jabxeaof.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jgeniius.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kpsdzwqk.html

Ruby: super
来源：http://www.xuanzx.com/163ytomzflh.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jvnyjjnh.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tuwrbfsj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jhyqqxyv.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163xpqxtegq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lmcsapcs.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163adsfzemb.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163sbntnvwt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ejhbfeyd.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163opkfysvv.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163kyetzarv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163otpqmdru.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ezulepui.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163uofrjenn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fgoqbpgj.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163zpwquyut.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163unqtkivj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163lxvqmkpm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163dbjxrtgw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ykueviai.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163jjnhhxvp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163kfcfqanw.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163iavenggt.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mshtaqrx.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kecodasd.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xwsyjdjt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163yeqgjuhh.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163cspkawcf.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163boiisiom.html

[G11] getter / setter
来源：http://www.sxryk.cn/163nqvgxgnd.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163vlvgqinx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163hbwrfxog.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wxtchuxu.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163plhusibm.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163vdhoclcp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163lnlsnwrs.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163shoarati.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163staxbysz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163eirjzqsf.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lxxkuzhp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163inzuipye.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163nyzjywkz.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ushjvqrq.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163jzonkeyj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163tzbpqris.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163akuxwyob.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163eilghdpe.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163hpjnirdm.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163nomftesh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163alkvrswz.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163llihsfxe.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163xfoobboc.html

Java: u instanceof User
来源：http://www.sxryk.cn/163pprzyucn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kdbehwcg.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163dxjmqrvi.html

C#:   u is User
来源：http://www.xuanzx.com/163rztqtofn.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ujoevzvf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zgdhtigl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pbntbhpr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163hqzrxvve.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kksaoqye.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163wxerzxgt.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tlhmnuow.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tgsyenhc.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163fudefsoc.html

[G15] 枚举
来源：http://www.xuanzx.com/163lvxhwxgr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163axulvgpu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163kzhcstgv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163atyngiji.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vagezzvp.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zcrxegzm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163sjrelcqf.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163zzgzwsqb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163oxmcujds.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163vjfhyvay.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163gdohsdbc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163pppsukfx.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lbgwgsvk.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163klqybviq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ozovzddd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ldhwvmzs.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163bphtkrfz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163jvclvvkx.html

================================================================================
来源：http://www.aibaodan.cn/163yifilrej.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163haxyamdb.html

================================================================================
来源：http://www.sxryk.cn/163lmvptvvq.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xnmqvodm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163etlroylq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163jtbmjjhu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pzfzfnwr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163jjhyzngb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lcpjwrsy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163yylqdcvp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163blnjfcmj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vdsqwhoi.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163guawxhaa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163puzknfaw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gryvqrue.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nunwmlvo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lcssgeik.html


<!-- 参考信息 -->