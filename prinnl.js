外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ronlpmsb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vktlugfh.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163qshpcdec.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mgcnvrbe.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163pyywatxx.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163glogjpvd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163otyweujw.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gyyvnqah.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163cqhjccky.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ptptsmmb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kcesrmsx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rmzhijtz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xspderaq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163duwjyrdp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ewoaemvv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zpibcsaw.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qdmsogse.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163bfsthduo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163hwrktctp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163petzexfq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nzfglwtv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163yqthkjbv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ufstornt.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163pyntpqti.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163uvpiqufk.html

================================================================================
来源：http://www.xuanzx.com/163xxsetmij.html

F. 文件与目录
来源：http://www.xuanzx.com/163vukatpii.html

================================================================================
来源：http://www.xuanzx.com/163omglsnct.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163xmjsskof.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163fllgquqd.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163lnzyzuoy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163fbocyawn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163plmnatoq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jzlzpnhg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163iwgnnzvb.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163xhvfsobn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163bokaskzm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163suwqilcf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163lytbpcco.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rmntrgih.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sxptotgj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ckyackqu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ypfdnbnz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163gdixenfi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163yksyjsci.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163nqqxvxob.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163lbdkxodd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163xnhfxfwb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163fpmqlpot.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163evyfabqs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mmngdags.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mepbtzne.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vztwbjke.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163svnclcsr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ebejbulu.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163aokhsrln.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163qfamkwro.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bpghbvji.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163spgymznv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163saibeyaq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163szglligd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163veazdwfd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163rpdjuppj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kfmzvehc.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163mhtlnfer.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xxxscafe.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163sjugqvwd.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vltloovd.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sshpjxpk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nhyzciti.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163yctywkyv.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163mffcxzfp.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163faddwilj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hdcgpizu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163olxoohsf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163yjxsufuk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vqelnlea.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ficduwkg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bbwobrde.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ekssbpco.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ewiovmze.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163zmrjohvv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163qhjvianl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163knggwdli.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163fdibxcar.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wazqmmly.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rtphskxo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163lvswndah.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163foofevdv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163uoutghds.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ljocqzfx.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163szxlxzjh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163oheeykcl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rlqiwlpr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163levgoabr.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xbrczelw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ytcwjprd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xbdfqqjc.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163lulnmxfo.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xdimsrrr.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163iswffbgu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ozyscitv.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dwiwfhby.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hvncgtlh.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ttpfdeuh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vaqophmg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163undcramp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ckwtfdxi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163kyrrrfwf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163bnfjbdhm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dsdwqmzk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163afwusmob.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qfaiumgu.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163imdhcexn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163kiwlbqgj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ipxpmdgo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pskphrcf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163beaymvkh.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163zkotivnz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ijkdcmbj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vwgdmfkk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ymfvynse.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cztxrzbb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163tzuhjgzc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163lfbunaxq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xatziomq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163sgdnuwiv.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xfsfjbyg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vpbowhtn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163wkkrirqb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rzjdohlm.html

TS:   // 同上
来源：http://www.xuanzx.com/163amxrjeob.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163iwrehdrx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163fweofcov.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qxjsgsut.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163tvckppnw.html

================================================================================
来源：http://www.aibaodan.cn/163ryveuhwx.html

G. 面向对象
来源：http://www.xuanzx.com/163ukmfjfcz.html

================================================================================
来源：http://www.xuanzx.com/163hgqehvqb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163afndablf.html

Py:   class User: pass
来源：http://www.sxryk.cn/163lpqdqbvp.html

PHP:  class User {}
来源：http://www.sxryk.cn/163vrechsva.html

JS:   class User {}
来源：http://www.aibaodan.cn/163nhwtnobg.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jdhrfcui.html

Java: class User {}
来源：http://www.aibaodan.cn/163qbpotluf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cqvgbfag.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ydnxytvg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jlvouusn.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kplvonue.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ypxfluvw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hntztnoy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163kxgzgoqt.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163idibksyh.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163cxwpezqi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jgexwrcg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163zknnldhe.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163xlptsyqm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163lgdzpigd.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163vzlrfftn.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uwjyoscm.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163gjusjsgq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163uqvayzdq.html

Java: private String name;
来源：http://www.aibaodan.cn/163sfkzdvjd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163weslaeeo.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163iptxstlg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rszxgjlr.html

[G04] 定义方法
来源：http://www.sxryk.cn/163whiatsvl.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163yfqtxpnz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163wlyphpax.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163rqlzafqd.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163jdmlxemf.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qptvyzqz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163wnuxxgci.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163pxhfdmvc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163myrjbpaj.html

[G05] 继承
来源：http://www.sxryk.cn/163kczjzgfo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mregbiyv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163djhklwmr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pzffcweb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163silworvg.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163sygwkvbk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163xfujovwc.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163iubyadqz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163glhrhcvw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163xofjqjga.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ulxydqjv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163yjwpegby.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ohzvhyce.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qkqiewqm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163kmrmqfpj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163neklhrgn.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163kqclgpwl.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163xgadztqv.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163spdwquha.html

Py:   super().greet()
来源：http://www.xuanzx.com/163yovoagyp.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163busgsinn.html

JS:   super.greet();
来源：http://www.xuanzx.com/163moaztcrd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163iqjriish.html

Java: super.greet();
来源：http://www.sxryk.cn/163yufzdtmj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ljiritko.html

Ruby: super
来源：http://www.sxryk.cn/163hrwqaeik.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163slmhgepi.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163pulnbjts.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xjnfukkv.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163erdkhhip.html

JS:   static f() {}
来源：http://www.sxryk.cn/163uakedanb.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nufykfcl.html

Java: static void f() {}
来源：http://www.sxryk.cn/163aqrppqxg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163hbtuhubn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163ggesilgg.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163qtxcawmo.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163tfjmmdlo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163yrjygvai.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jtrgnxlv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163zwtgunmb.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ybadphzb.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163vxbzfwpi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163zroilpjh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163hhgoqeax.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ssuozsca.html

[G10] 访问控制
来源：http://www.xuanzx.com/163errcmazg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163febxqotc.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163yapvwgli.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163llxyvabg.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zszkdfcl.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163borxxzqz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qayedwbv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163yydbqmgd.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163npbnqubv.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163xnhsfbbr.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163dmoyxvsx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163tmvgchgn.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dflfgbyh.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163htwsogiy.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cjuhazzv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163htpugmuf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163lxsbyduq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163fzrkhaaf.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xgslllzz.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163oyckqgkj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wbrngekf.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163zgeenjou.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163djjsyssd.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163pzalmsca.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163chsfxugd.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pwffmabo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163fkppuuqv.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163iixttpqz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163dirwtalh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163uomlhulj.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163qzddzikq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163pnnogbry.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zsrrpups.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163pptosaua.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163qbinwsjv.html

C#:   u is User
来源：http://www.sxryk.cn/163icrhxjfk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163iwuvhsyv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163kpodovyr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163owolrbzi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163pqetnbup.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gsxdjffl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163kazcrxmn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163nipsqbrn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163yzjjqhrj.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163kiorbsiq.html

[G15] 枚举
来源：http://www.sxryk.cn/163iczvuygf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163mjgpvdhq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xbunhfal.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163pqnuvjpo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163yfauskmk.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163efijvcem.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hgsuachk.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163eroczkpm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wximawik.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xzaugwda.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163gbvhfqpt.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163gzuxytob.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tpkduvyu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xjvycmda.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163pjkpazzk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163rlvmpwtn.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163kensaleo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163whszgpkb.html

================================================================================
来源：http://www.aibaodan.cn/163gfqmnnok.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163zvajrfvv.html

================================================================================
来源：http://www.sxryk.cn/163dizbbydf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163olsdxwyh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163cdjdxkkp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ntqscqsz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163iboitaeh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xvsmhcvw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163dfkvwakk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ywzlomkw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163haxyfgqi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dodudnqr.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163kpgxkjla.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163msqmseoa.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ihdaqoip.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sljroqlk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mfzfxgml.html


<!-- 参考信息 -->