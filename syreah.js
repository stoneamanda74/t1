外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xtwjscfp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163bamopsfi.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ersecvkk.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ajmfnbbj.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163szsdibyx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ffxkwmga.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163qhxcwzpo.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jacgsycl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ugruqouo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163uteyavdb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jogymkef.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ldqkejsx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iwgtvttt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tyifvwsc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163sxsvgqnu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163yoqtugqc.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163oqhaqnji.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163elmylusd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jammkedi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fhcdflqe.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163dmibpwxf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163iuqpemsr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163cowndztv.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163tsehfeqn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163szcpkjon.html

================================================================================
来源：http://www.aibaodan.cn/163nlowgbwt.html

F. 文件与目录
来源：http://www.sxryk.cn/163fvqltpkb.html

================================================================================
来源：http://www.xuanzx.com/163cacrcvhi.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163sphwukrb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163socnecff.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163gteardnl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ghgidhwf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163jaodptsm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lrqikpqk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163nqdmdgsw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163nrbdklwt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wkdvkcil.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163iqmyrtbx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163pfjizqyx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ehqahxrx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qgwqdbbj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jbtzwchm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163limzwvof.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ntrizlwe.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ipsdqbnd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163kzwgrnwc.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163tkfidkck.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163wwqjzsoa.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rzwjvjur.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jugmvckp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kztwqeyc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163msrvsodl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163zzxxhmzc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163wtwgtejh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163mwrdodtk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163zsfexrco.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163pzvqqhzq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xfbofpsn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zhdahnvk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163irpkushf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ckiizuzl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163mmqsujhk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ycpzeofw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kxgxhdue.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xgezpqmr.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163lhzwkqgx.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163bbyicvyf.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fqoauosz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163reibyunc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ieleprpq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163hlfchgox.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163pwbmasis.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163cytbebtz.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163mryelinb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wwoxhwmf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163nfkpoxon.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163okwulzss.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ohysrylh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jwrtbleq.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163jdmlesly.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163sbnygdoy.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rcbuuxmd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ajfpukzq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163psbwxwqv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163osbluhek.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nsdqlmem.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ojngjesx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kjyrkhrv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ckwyplqu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163dipezipc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ohfrinkf.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163jbzeyuol.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163zrbugmmj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163lijqhegx.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163icbcktle.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163olumrjhl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wdcsgyrm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hzjdkudf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163cdremnmy.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qcisfryb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wlzllyhw.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163maogulcn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ztddyddt.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jhudfrzm.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163veynadpp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sgqcbzgh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163madxiqan.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163obpmgusd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163yjhidivq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163xukcxlax.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wlpcxuwt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163cawqhdvc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163crytkyut.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163riianqzy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163smjmdkzv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163uxewaioj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pqffpcps.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163lbtwxfrq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163wsstucjc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vgeywwlg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163shlugauh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163icilbzwm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kbjxhqyq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nyxptqoy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163uqdipqql.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hbgtinwt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xchmklnw.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dftstokg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ufmdfnao.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163jjtpvucb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163xiwhsizw.html

TS:   // 同上
来源：http://www.sxryk.cn/163hidigejz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163acuhhetm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163apacuxgv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163lvoqmnwu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163mxvlggcg.html

================================================================================
来源：http://www.xuanzx.com/163kxfljkec.html

G. 面向对象
来源：http://www.aibaodan.cn/163tqmyhtpn.html

================================================================================
来源：http://www.sxryk.cn/163ysefhyrb.html

[G01] 定义类
来源：http://www.sxryk.cn/163sfdkqxps.html

Py:   class User: pass
来源：http://www.xuanzx.com/163twgdcjty.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hgfogppj.html

JS:   class User {}
来源：http://www.xuanzx.com/163yuxgbrnr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163qktclsxv.html

Java: class User {}
来源：http://www.aibaodan.cn/163ykrceidr.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163emppvgvx.html

Ruby: class User; end
来源：http://www.xuanzx.com/163pgqafzys.html

C#:   class User {}
来源：http://www.xuanzx.com/163esjoaboz.html

[G02] 构造函数
来源：http://www.xuanzx.com/163nxajbifk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163xeocttwr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163wqtawvfa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163przoslgz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qmdboxzb.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zcfmxkxi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163zdmsrxbo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163attdkzmv.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163uamcbcar.html

[G03] 实例属性
来源：http://www.xuanzx.com/163zrgjjrfo.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163nfjsprpr.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163elcoyusp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163fjawrknz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ewfxtqum.html

Java: private String name;
来源：http://www.aibaodan.cn/163liexobgx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163nqwazqmt.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ybvqqhct.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163sseogctr.html

[G04] 定义方法
来源：http://www.xuanzx.com/163uhbzbdmy.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163dpadurde.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163acbrypws.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163cemcckht.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dtpbdbjd.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163yrioptpc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163vdedwpoj.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163dqysufjn.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163wdghqcgl.html

[G05] 继承
来源：http://www.sxryk.cn/163oczjleoi.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163uzcktagb.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163zwyncnit.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vcthmvzw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163pwobvveq.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163itjqjpdo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163nekhvudy.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163whaonmfm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tmzlanvo.html

[G06] 重写方法
来源：http://www.sxryk.cn/163zgphgyhc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163isbnirce.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jmmxtxvq.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dnjszhzn.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163eillbggz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lglczoca.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163kmdwefzv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163rfzsqzvg.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163dxcynboz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163rvylobwx.html

Py:   super().greet()
来源：http://www.xuanzx.com/163zkavbbpi.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163oibkspcy.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ayjnmfmx.html

TS:   super.greet();
来源：http://www.xuanzx.com/163sysewecj.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ektmuiey.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ygrnmwjs.html

Ruby: super
来源：http://www.xuanzx.com/163znvocxbd.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ratufcqo.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163fcpgwabi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163yrfdbodk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163nqllvhvi.html

JS:   static f() {}
来源：http://www.sxryk.cn/163obqitcog.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163clzzxydf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163dgsfuahr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163gkmcytqs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ekuaokfd.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163lflzgkxi.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163jlqlyvvj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ipqsdahd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xzmttuge.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gmrtybwz.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163penrypvu.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vmxxdglp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163tqpbxenj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ahxketik.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kyypjoip.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hfwmaywo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163endhavqb.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163qcekyvsc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163uaelexmj.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163gqhappto.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163crzrwmht.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163wrosqhhd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163sxvvhgzm.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ybkhwdvn.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163zhqehpfs.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ykqwxgvx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163akwijpaj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163itensawy.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163elhitrjs.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163xkkmzlud.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163poxyzzhe.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163neezxern.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163skwvyspv.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163cmlcmdiv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ugouadtk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163uspbxtuz.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163bhhgdtjz.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163yuaojrny.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zesmlbmc.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163zuofjvui.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163yqvaapoh.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cvjbudte.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163qujxigur.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163nvwulypa.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nrxnuxbg.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163tuobgfob.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163iworkllp.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163yhspoqop.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jtywkcdq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163iecvoafl.html

C#:   u is User
来源：http://www.aibaodan.cn/163mpiqbgfa.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rjhmxcvf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163dyjgceyc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ddauovdd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163fyrpsgiq.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gaqfzuth.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163xfdsfbfy.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163suvfkezo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163vyxoqobo.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163nkcrjoid.html

[G15] 枚举
来源：http://www.aibaodan.cn/163rimfzyru.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163oznibnsh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163iphckglu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mftejlxi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163elulusmw.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163nuzinvth.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163dtpfqwae.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163katekbap.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163owmqkxkw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163nguklalv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163gtjfgxmb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163mlmadrgn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bphmajce.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mfjswgdp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163cijruygw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163nnhtiubp.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163gdfqgpbs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kuhvsohw.html

================================================================================
来源：http://www.aibaodan.cn/163jgjmpijo.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ydijkygw.html

================================================================================
来源：http://www.sxryk.cn/163fjrlxsvz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163zwgmndvu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163nsgovyxi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163pczkksme.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wtxbtuur.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gfspjppw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163radacbtr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163wppciafz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163jzylzqol.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163hvazkuax.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163dzujsuxe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163agkycdxt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tdibwabf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bchymjoi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wbglzbbi.html


<!-- 参考信息 -->