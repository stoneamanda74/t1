外链999!wailian999！

Ruby: s.lines
来源：http://www.sxryk.cn/163zizdpefm.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163bqhqqxaa.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163owxedpga.html

Py:   if not s:
来源：http://www.sxryk.cn/163jfjcthpv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163odqkkitq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163rkguqbmw.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163pbozmmni.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jnvnzgpa.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163qlgwmivt.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ezoencuk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163phqgotpa.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ltexials.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163mknommdd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ghpwggtw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cmbvabbu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ziezqlff.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lljsmpqs.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bbxzafzt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wghccoap.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163dpbxfcle.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ltvcrcdd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ucmcjufz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jgxxzsza.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jqaaairw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163iiysvrqr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163awigjqvs.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163jttcfqgw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mmmapnbg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163sajhmmyd.html

================================================================================
来源：http://www.sxryk.cn/163uniwylga.html

F. 文件与目录
来源：http://www.xuanzx.com/163lyquyzps.html

================================================================================
来源：http://www.sxryk.cn/163fqrdwnzh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163iggpcjnn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jrsnnayq.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163bwyqvmyp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qqwomhpo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163gfaefkxz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tspfstem.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163syyocnhk.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gpscfvob.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163kdsvvowd.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163psouqgdw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jzrtrond.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163iupbpugl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vdmapess.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lotdjllf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163piklxdfb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ovymrihs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163uuwrssoq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163pbifcrhj.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163sqdvakys.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163elbqssyj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fbpuagns.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nucnxbue.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kebsqiob.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163pfkjxadd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163bpnwdfjk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mbxgqkzp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163yemlqewj.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163mjxplkpa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vavpeycx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163tdtzlcah.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ihmsvihx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163micoapqm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163mwhcliuh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163eubpnhdf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163kigzcltz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163bnznnogd.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163fcjswdhe.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163eqenxeau.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163inozzgtc.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163eimhrlnx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ewisgwrr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163budyysib.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163antkfpjy.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xqwpnkei.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ajlnpike.html

[F06] 删除文件
来源：http://www.sxryk.cn/163awvhsadg.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ktcihyrg.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163fxzhkhso.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pzirqtwp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qfmvpehh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zzjncewq.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163elploetv.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163agkvgmua.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jlnsaxah.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fbkncmbt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163lugmgchk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163keiqafvn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zmpjewfr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pqwdzuzc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163yrhofrfq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163wswlrovq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tzkpdnuw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163mgpxkpsh.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pbbiiltr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163tkuoksoo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163umxzyxhb.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163itlckioc.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163eggzokbf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rltygxag.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ypsnawtt.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xrldusqq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ygkzowaq.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163scvphnsh.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163vuwwutqk.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ayofoqyk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wgrpypma.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kogcxfxo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mtiuuxbb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qawnojfu.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163uakvgfkt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163vmmytqjv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163jfexrjlb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163krmprnvv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163lfkkmagx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rcmcfnqd.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ycplmhkh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fdoxzyid.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163aemttyye.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sglteyab.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163vzkqcakt.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163twdasupa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kphfszlj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163kvhotyfm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rjsjemgt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xhypbcej.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ijjebpja.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163cfuzjlmu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wnmlulxq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163afwtbodx.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163wjxvobuq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163pfqduhkk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yzbphcud.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163kowdxvmt.html

TS:   // 同上
来源：http://www.xuanzx.com/163ufnrxmee.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163irpkihgd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rcthftor.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163awixbjab.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xahekqcu.html

================================================================================
来源：http://www.sxryk.cn/163vdezutrq.html

G. 面向对象
来源：http://www.xuanzx.com/163uztpwfdo.html

================================================================================
来源：http://www.sxryk.cn/163zcgcimna.html

[G01] 定义类
来源：http://www.sxryk.cn/163mnvbwgep.html

Py:   class User: pass
来源：http://www.xuanzx.com/163gkingmda.html

PHP:  class User {}
来源：http://www.sxryk.cn/163uahlufpj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rjuoxbhv.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163cgvkwwbo.html

Java: class User {}
来源：http://www.aibaodan.cn/163ekhhfrmw.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ikyrrcvv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163esjazonw.html

C#:   class User {}
来源：http://www.sxryk.cn/163mqywahxd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163gepwvsqd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163gbyvyktf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163micaknlt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rgfisdbw.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163xylxapmz.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163bquicbhl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wehwzlon.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163upcgnoen.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rmijvyvh.html

[G03] 实例属性
来源：http://www.xuanzx.com/163kkpmtilj.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163yllpfskx.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163bzpcdmqt.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qvjganpz.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163cdhjpvsw.html

Java: private String name;
来源：http://www.aibaodan.cn/163rzkbweqn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ndcfkzhc.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wjrcdtaa.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163clghjztf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wwczbvpq.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ahmmyzxm.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rcyokqyx.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163fnwunaaz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163qdpwjxso.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163autsbxhk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163bhvfedfo.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163jrmsuwwa.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ahdzoapz.html

[G05] 继承
来源：http://www.xuanzx.com/163fwsfpzzi.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hysmkkvl.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163uxafgwsy.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163yazykfoc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wyhnopky.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163gdgupfmi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zhuvfawd.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163aidishxx.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kbyjdanr.html

[G06] 重写方法
来源：http://www.xuanzx.com/163sfpsvecj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163fgoieopl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pxvkvfrp.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163vjdinpiy.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wknoneph.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wacolclk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163pbvxyzrm.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hdmiussa.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163liyewvzg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mwhnxxrj.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163rnuxxudo.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163pfeukust.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ritwmofi.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163euidjoqe.html

Java: super.greet();
来源：http://www.sxryk.cn/163ihjaaznl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163kjsyqdet.html

Ruby: super
来源：http://www.xuanzx.com/163vsfsjbyq.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163iwctirlr.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163tnkohirz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ebfnnliv.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ykijrpfj.html

JS:   static f() {}
来源：http://www.sxryk.cn/163jtrcdppk.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163eygentcw.html

Java: static void f() {}
来源：http://www.xuanzx.com/163mmnbaepj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163qafaizxo.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163aoodgddy.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163epbxgbad.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163aqzecxsg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163orougtvp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xaqwseal.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163fqmouziy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ixsammlo.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163craelhpm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163jkaofkca.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jrmnhayo.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163mquvnulo.html

[G10] 访问控制
来源：http://www.sxryk.cn/163cxluxegk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ahodpjnp.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ksnmdsal.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ewljhsfe.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163smuqnsdl.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163whfnbagu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163xicwnumn.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qkdhegmp.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ldpocvrc.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ijhfssgv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163fytkwakp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mzpsamke.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163odqyupkv.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163djdvpphh.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ctitvqgn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163uqnwgwbi.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pauyiwur.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tagunhli.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163fxzogddl.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163iizscjis.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fwveprjc.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163cuhmqmgk.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ibvoqkfp.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163imrwnerl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163whrffzmi.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163cmvoqpvn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163gbgvzmzi.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163tguduovj.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ivsrqztv.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163vjmtcdmv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163drqmmlwg.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163bzxzkoet.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ifzuufei.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163wulxiaad.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163teownpsn.html

C#:   u is User
来源：http://www.aibaodan.cn/163jcjpdhpc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163niwtomnb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163xscdfffl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fljdomtl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ztyerrau.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lvqitohh.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163xtxlsvpm.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163elwrbigj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163kqhkykpe.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163xifvahhx.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ftclwijn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lzldfxrb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163nadfryhs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dkaeqtfm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163uqhrhgkh.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163zfbcdrzj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163vpkxbipi.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163axbnljhr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qvychomp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163fuoerkqy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163wfzgaiua.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163pinipjlj.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wptpsqft.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hlfirivw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163zrfnyrgp.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163eciknkkk.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163pjsdmqdd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ostiqywg.html

================================================================================
来源：http://www.sxryk.cn/163kknhrply.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163xcwdysaq.html

================================================================================
来源：http://www.sxryk.cn/163iipaarem.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163mgnhhvbg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163coenfnlq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163pgdyruph.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fexiyint.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163jagldion.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163joenzuta.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vbfaqxfh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163zbutugfv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163dsjozwyv.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163clkxevny.html


<!-- 参考信息 -->