外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163mgrnsfsc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hasiunxc.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fbhnwxzo.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163tskzczes.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163qdqvisxg.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tjvimnes.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163phhmyxsk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163xzludacc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163adrlklvf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ybhqruye.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gqqwwmxx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fvrzgzje.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tfqebzvp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163rbojawyp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163rnoeknyb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dbcakdro.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163frosywsz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163lalrwbud.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xrattccr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tddovaxc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hqxzzynu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163lsnnefxp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ttmmfhgp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163illyrixq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163oegfyxwt.html

================================================================================
来源：http://www.sxryk.cn/163imkqfmih.html

F. 文件与目录
来源：http://www.xuanzx.com/163zzoexrgq.html

================================================================================
来源：http://www.sxryk.cn/163ujoulzsh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163aexsthzh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163bahvukhw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163replecdb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dfpnqdzz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163krahviny.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fnklpybc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163vnrjkrzu.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163xhtfebum.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163hdqsrfbo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163xwefmect.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163sehqkayi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tfncbvop.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mdfjjpdk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rhkruouh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ghdvwest.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163pgjltnve.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163sihqrsaa.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163swsqscmz.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163gycbjmai.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163wphfhdxw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163latwaixm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xrszitat.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163aokljqex.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ritisonj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163mqnlcilt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163vdzpucgi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163nqtgkwaq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ngafombt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mzlfreic.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163guvaktok.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163eddvvlrv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wtcjsivo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163rcnntwhi.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tjnsjavl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163lgersqcz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163zsjthxcx.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163damekwxj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163vmjnzrig.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163djtuawbc.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bgykgwbv.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163buiruwdi.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tsotpkeb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ldsvrmjf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163vcwtlfbt.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163yigxudxr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163thabqenj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163lchdwwhx.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ookvribw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163eiakwise.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ybbuhfix.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mpqbyuah.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ivdmszey.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163njpxrgmx.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163bjvuqoxp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qipsxlvu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163pygswqrd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163biaelczv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163eqvwraml.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zingnrse.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qvdxjhom.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163mzmksqjz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163rjmhwzsz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163hzknbaox.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163srqwmcjz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163myjxtggn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ugdgidjw.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ofvzildh.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bjmppguq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ddsfimei.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163wxhyrnjv.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vefsomkp.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163kjvfdraw.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163phksbuwq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163cbnaicyi.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rrkikahr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uexrtgph.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163rfcszmdb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zfjhlgjj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ebihdpak.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163cymsdfyo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163rnknxqsj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163zfvheesm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163puteofgl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163wjspyopw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lmsfgeis.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ywarzsti.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163afvsoedp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163qnvlsyti.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cvpkqzwn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163eflrlgyc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163gozhwgxa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aoskldvg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ohscncdj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ietvcmjk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163shiejvgt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ctnypcll.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mhpnajwi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163czvvrayc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163oeayuhtp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xhkajhad.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163jrwtobbe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163wspczuus.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163txakqwmx.html

TS:   // 同上
来源：http://www.sxryk.cn/163cawkqbbo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163clupsjvb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163tasvngmw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qlftxfsw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qxtoyzvb.html

================================================================================
来源：http://www.xuanzx.com/163npybwmmm.html

G. 面向对象
来源：http://www.aibaodan.cn/163xldafxvb.html

================================================================================
来源：http://www.sxryk.cn/163qzcsepdg.html

[G01] 定义类
来源：http://www.xuanzx.com/163xprxzlem.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163cdwtuhrm.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zognynbv.html

JS:   class User {}
来源：http://www.sxryk.cn/163lxwlxasl.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163rlarnitu.html

Java: class User {}
来源：http://www.aibaodan.cn/163eeevoosj.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163avxpczso.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ctsgvnps.html

C#:   class User {}
来源：http://www.aibaodan.cn/163widqqowi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163lcxddfyo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qwwuslmh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zojlumaj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xctodvbo.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163bsjsksgr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163uhxhyrfp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163wdpddtke.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163crftyxjc.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163oypxketn.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163bgvwsyfk.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fmaifncp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163spqcmcqf.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dsnjcqbb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ocgcqxis.html

Java: private String name;
来源：http://www.sxryk.cn/163ecyzusmj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rogapqeh.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163zakviwvd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163fgpyylna.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ptnwvrpg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163qitaalma.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163htaqpfac.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163afxibcwf.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163lyhzpsvy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163jssxkebi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163vqkpwhqq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163rpxiuchg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163dachqcls.html

[G05] 继承
来源：http://www.xuanzx.com/163asskvqwu.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163tddnapmo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163nsjnbroq.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163gjoulcmv.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vthfwxel.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163kqiefefi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ajxbvisp.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ynciyorn.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163azlrneld.html

[G06] 重写方法
来源：http://www.sxryk.cn/163qqcqrnts.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163fgvslglt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163pwqsgtcv.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zdtjzfwu.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tkqzxkbm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163enjeenbe.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wmxzwztj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163fsupadrv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163bnqqojmi.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dwylrekx.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jkkxqusl.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vtssthnh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163otonnnav.html

TS:   super.greet();
来源：http://www.sxryk.cn/163fngpoobm.html

Java: super.greet();
来源：http://www.sxryk.cn/163xdnhfwxw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163sszmzvgj.html

Ruby: super
来源：http://www.aibaodan.cn/163wzduhmuk.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163vqwfcvwg.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163cvrujnea.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163wivlllfl.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ctdjshns.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kxonwiev.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ldctvwkk.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163kissmkgz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163gceysmwq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163csupfgvc.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163sspeqqsf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163swbpsqhn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jtehtlso.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ukkvpwyn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163wsjtugbn.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163zyvifqov.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dxtifoxe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163tzmsntqf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xkhoyubd.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163gkjebpla.html

[G10] 访问控制
来源：http://www.xuanzx.com/163onqjicyk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163oaldpqjd.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163tvmkxaih.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163vqphrdum.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kdsegxep.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163xgekdgdw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lentyftg.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163cvrkvbnk.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163rgaeopkt.html

[G11] getter / setter
来源：http://www.sxryk.cn/163syyoejzi.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163plkkutww.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ikjiedfw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163uwvwdtih.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163tmkostsk.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ryjfajma.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pcodzslq.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163lxzgvkzb.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163gvkoducs.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ketclvit.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dsmsmgus.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zrqbbdak.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163muxjahwk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nhkqkydz.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vizslaum.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163iksplvfc.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163lklhkxsn.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163wsqhtoed.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hxddvelk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rjsehpnv.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163olegygqo.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163dosbdrbd.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qezfcnrb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163idlcwpqy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163clplltoi.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wrnccghw.html

C#:   u is User
来源：http://www.xuanzx.com/163mjldndmr.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163edebfblz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163btjngaca.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163glgbvxok.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163rkjhocao.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163xicbhhbq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rifeldbj.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163pthunpax.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163udrrwgtw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163bgkeqfja.html

[G15] 枚举
来源：http://www.xuanzx.com/163bcllhtmz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163atwcvwqz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rbhtoges.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ypxggswv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vrwfwced.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ueknkviz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ikeabjcl.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163csdfqkeh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jrzxsrxs.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ozzwasqf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163bfcrllxm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163xkrfjhto.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xgbrassx.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xstzuixy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163lntnwodt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163kdjkyjwh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vihcurca.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qmosnqin.html

================================================================================
来源：http://www.aibaodan.cn/163zvuphflz.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ozkognzo.html

================================================================================
来源：http://www.xuanzx.com/163gvzkxpri.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163fajbmxnh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163rmzmoepx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163xhegquhy.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zmzggvxw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163mbzxwosd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dggidchz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xxmfvtlw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163phupyydw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163gnxebqel.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163dqipwldi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163wddvtmcl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bisfqrgi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163unuwfjoq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eyxyjtzu.html


<!-- 参考信息 -->