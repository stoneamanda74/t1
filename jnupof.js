外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zpuulzki.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ngxxtvym.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163uipaslsx.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163cupqjqzl.html

Ruby: s.lines
来源：http://www.sxryk.cn/163pcnbjpuk.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163afxhoaev.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ddvfwpkb.html

Py:   if not s:
来源：http://www.xuanzx.com/163evzjfqya.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163nqybgdwe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163vqveplen.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163oeimqkih.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163eudsqjll.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ctprnktn.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163qecmbfhr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163thkttcdc.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163jjbuqmfe.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163aputzyqa.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rgsyglxc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fbdnwuqc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vnsyvnmu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bbqwzkwu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163lkhjollh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163celciofx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zlhxdkac.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ssktsqwc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163cmcymmki.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rfwbstcj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kescfmej.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163urqxrfhp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jjajkksr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163shpcrdud.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163tztchsqj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163xsybjixz.html

================================================================================
来源：http://www.xuanzx.com/163zajjelpt.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lofgphji.html

================================================================================
来源：http://www.xuanzx.com/163rtesabyx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163iuhycmcv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163myizkdey.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163obvoceyp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163kbntduts.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163lxpuhgzk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163camiiapb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pfzrbusr.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163kikkzden.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163oxwzwyfe.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163gvvzeqcw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163encczocr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163pdgcnflk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uoqmvvae.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hxzkvfaf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bupaypvk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163yatqvhuv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163mfprctce.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163libpylsl.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jkbcsndh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163adhmxuhu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nrdsslet.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wthtzqhu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fbnhwqqm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163fhkvzncd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163cdbgidqw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163xnqbpckp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ywlnqanm.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163pjrbsfag.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163agyjekfk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dkuxmdhh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dsamtjtj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dmnhjavf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163iabciikw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163dhsqxpfc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163bltnvbgn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163cmysfeye.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163rddeavxs.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163rzewxecd.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163odmtvpiy.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ehaiuppj.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uqgzirnf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wpcjnrxc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163weceqigx.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163wpzpzisl.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wssfynjf.html

[F06] 删除文件
来源：http://www.sxryk.cn/163uodojrqi.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163erxrdsad.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gaxdkhqk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jbgvwgtn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rxjdowvf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163onxktazv.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163mekvsfnt.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163rgparnvz.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uuosckjn.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fwozuorm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bqmmlkvj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163awrgdquv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jgcjkoio.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163woqwbkne.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gszbgkne.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163sdknqamk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163nzabhrxm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mbjalsfq.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163apartxhq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vuzsglev.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rajuprcq.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163dnwmbseu.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ezvpkslt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163himzpkhc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163jaidtsct.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163plbhgafy.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vexieykz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ecanewqh.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163lsyxwenm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lyesheyv.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ngwmxhvx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gsosrguy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bzvflkey.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163pprfmjlf.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163coiclrbu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163brykuuoc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hjhqghkm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vhfohzdu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163smlndfwh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vjajsnka.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xelkcsjc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163auognmpt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163zxozwzof.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ialqsaxc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tvzjwdai.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163eppqqxbr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zpenvjgn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rpwudnbx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jmwhpsph.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eagceodp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163kjnezgmn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163jmxcmupn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163agakxjbv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163vwbqotff.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163eptohfzv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163xlnrpzil.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ywgimweb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163wrrshrvw.html

TS:   // 同上
来源：http://www.sxryk.cn/163zketljbb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kvboctjo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163zhgtzazp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ltgrcdyv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ygloxzlb.html

================================================================================
来源：http://www.aibaodan.cn/163eizyeqij.html

G. 面向对象
来源：http://www.sxryk.cn/163buuzgcjk.html

================================================================================
来源：http://www.sxryk.cn/163kvbknwys.html

[G01] 定义类
来源：http://www.aibaodan.cn/163vmjtulep.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rmzhsaik.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fscufmar.html

JS:   class User {}
来源：http://www.sxryk.cn/163kytcekgy.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zsdcixee.html

Java: class User {}
来源：http://www.aibaodan.cn/163hdhqqgjv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163kdcfimqk.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wtlelauo.html

C#:   class User {}
来源：http://www.sxryk.cn/163dehufnmp.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ygbgqatw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xhdhjzyk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ofqsghts.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163xixsevwo.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163qcnajdva.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163gsuddxwx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163tmxwwhwu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wygmuarj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rddxpqsq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vvpmwwai.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163chemcwgm.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kjgzaccx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vurfvubd.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163lvoorljf.html

Java: private String name;
来源：http://www.sxryk.cn/163swmvtvav.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163qfgfppdn.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163gcthfxat.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163fgfyktyg.html

[G04] 定义方法
来源：http://www.xuanzx.com/163mqpkqovh.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163yoykcopg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xxquhfhx.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163sjonxgwi.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rxfcalbh.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163jvelesfj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163yqwfduis.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163sezyrehe.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163kbnyljld.html

[G05] 继承
来源：http://www.aibaodan.cn/163ggpsirok.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163rfbqyqyp.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163hccgwkwk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mnabspil.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163eofptnmj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163slswpgcj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ikvtdfif.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163suvjaddj.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ciztegak.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163koxnglix.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ebkfirni.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163buiehoos.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163mnzifegt.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163orskerbs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xikpkoff.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163kziyceer.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163sutzfmrz.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xryorbaw.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163uphfptau.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mpxclqzp.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163woradbec.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163lfpbtqzl.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dlroqebm.html

Java: super.greet();
来源：http://www.sxryk.cn/163webblyvs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vpzeqxil.html

Ruby: super
来源：http://www.sxryk.cn/163lhuefxyt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163krgaoftm.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kpchfudi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163offezmlz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rwumhmby.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ttdsrrhq.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163riorbhnb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xykqmxif.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163nwnzjdxd.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163gjrhqact.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163gtotiyij.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xwbwcchd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163aprjsxvt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163byrohett.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163aglkhdvi.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163uvczdtei.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163laqypsrz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163aycczuje.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tjdbxoue.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163nghvumsn.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wjaoawho.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163edsuhqkh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163hsxptiph.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163dbqrfbzj.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163psbxahdz.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163jlohhuxv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ksquxlzh.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163paulflbo.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163sgvfrhfg.html

[G11] getter / setter
来源：http://www.xuanzx.com/163qikaepbp.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163usbsrqca.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vgjvmpoi.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163hkckjyjp.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ykrdglcw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163wzadnril.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163bchuecck.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ffsyrxxr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163osrwahlq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163hmkomrpj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wxqvjtdq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163roqccxil.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163frvppftf.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163osalldim.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163nezagyfs.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163lfqzxbwp.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163xebwlcvj.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163txoynyzu.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163swuezxpw.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ljawsgrd.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jbqsqekf.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163jadpgvzm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rxflxbea.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vrkkvlma.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163obrxybgo.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163bgxscoyr.html

C#:   u is User
来源：http://www.sxryk.cn/163ftfbyrrs.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163gqvetaeg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163znqxfhux.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163wxauiaoa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163metecnzt.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163szdzpess.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163qcyojqib.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lxakkspi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163gzkpgtol.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163fpatdrbf.html

[G15] 枚举
来源：http://www.aibaodan.cn/163rmppyazd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163gnosaxku.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163oyqvgseo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zrkgwgfy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fzdvymoo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163lfauwbzy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bkqqmbwe.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xzodiheu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163egzzfjwc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163awhpqmot.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163zketvwxb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ngeyswvd.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cnfnketg.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vqzjvdfl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163teaawieb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163tuovcqew.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tphsraue.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163fbbvxdvd.html

================================================================================
来源：http://www.aibaodan.cn/163qcbednqb.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163empfkkww.html

================================================================================
来源：http://www.xuanzx.com/163dstphyva.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163jahxezfj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163apwzabxz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163kyytexvx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xifetltt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163zjcwqayx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163bmigzvfo.html


<!-- 参考信息 -->