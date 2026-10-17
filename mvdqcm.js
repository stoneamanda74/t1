外链999!wailian999！

Ruby: s.lines
来源：http://www.xuanzx.com/163ypsgqnjn.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xdmwflrf.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163nwqquuwl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163oeczdkcq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vipzggkg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xvyxkqjq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163gnzciplr.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163drtzbjcl.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163exulebzp.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163bjaqstdg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163drxjsuws.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vcdzolqf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163myzlujwr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163nopoywwq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163thlvrzij.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163orumaskv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hibwbpig.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163nrsmhert.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163crjatdfq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ayxzytea.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lkmakhmc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163bikcpqke.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ehhknnkx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vqvropyq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163uwwtefih.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163zzphfagv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163edqlsnfk.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163agjemcox.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163vkfabumo.html

================================================================================
来源：http://www.sxryk.cn/163ohvmbwxs.html

F. 文件与目录
来源：http://www.aibaodan.cn/163zybwunsa.html

================================================================================
来源：http://www.aibaodan.cn/163plrczyxe.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163efmxceon.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163oxnqbtct.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ticmxsol.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dntqiona.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ifngurqp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163avcjzoth.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163thjvlvwl.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163zwxictyl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163azqznibn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163bclstytg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163aufvnrsm.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qcbmwocu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163oaaunrwv.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kayzxyxb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163qeddifnj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163pqffrgam.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163aytkfzxy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163tvyoklix.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163tezclgjd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163egtgwmvd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163dweeojzt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vsbbnder.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rylierry.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163nincdifm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163giuukpeo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163xvzszntv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163yxqtywvj.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163lquaiiix.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vdzditoh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163cfiqudal.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bnbpiqts.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wsxnmsqi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163mogvlimn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hecddbsl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163obswyyxz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qhhnvgor.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163olxmtwlh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163zqfudxdb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qralxtpm.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qsclodrw.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rihpnhpw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ebgqfwxe.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163wrtcuokz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163demcccia.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163pmixpkax.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ryjwvygq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163lppofjia.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163cealufjd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yvbqjqxj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163eegewzqb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163veephxlt.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ltsdpyie.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163wecntpzl.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163rvnpmpny.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163zncvfsuf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163mxjoalvo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ihnzrmct.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lqlsaodd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163edmyoeqz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163bqulxwqz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163levybspe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163hypqypwx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163laarhksn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jjriuprs.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163xiienvrc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wmrhxgzv.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hfqxmtxx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163omnucatx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cevrqiqy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gvbpsxsw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ikvbakkx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163dkepckbi.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163udhhrmos.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163pasijjfu.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163hkkmtopy.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163krzwqdhp.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tpankbdi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fryzmmqp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163rjkxnkjg.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163vjdogruy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163wortvmua.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163asbyvnrp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fkwxvfqt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163spadjogr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uzfofgxi.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ehkwwhmj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163rsmpsltp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163evrbxjqx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ztqpbsqo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ydvtbogm.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163osfouify.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163svohowbk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ntpkqxrh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ddcytknb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163axeulgnj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163faeezedj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163lxxnxytu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ktaqhkez.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163zzfsrpyo.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ytyswsue.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vytkanbd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163cuypcjdd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163dhjbstxv.html

TS:   // 同上
来源：http://www.xuanzx.com/163jeqibhhf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ycxapfub.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mbbudhvk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163gdabzmfb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qdjryvyt.html

================================================================================
来源：http://www.aibaodan.cn/163snosmweg.html

G. 面向对象
来源：http://www.xuanzx.com/163vxpalhhw.html

================================================================================
来源：http://www.xuanzx.com/163eaiixcii.html

[G01] 定义类
来源：http://www.xuanzx.com/163lbtajpoz.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rflspijv.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xaumbxnz.html

JS:   class User {}
来源：http://www.xuanzx.com/163alyzhzwc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163myvqompn.html

Java: class User {}
来源：http://www.aibaodan.cn/163qojtqzmc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163gykcavlt.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vschxhkn.html

C#:   class User {}
来源：http://www.sxryk.cn/163yyabbkpj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163mxnkghfu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163hrsyswhz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163pfwjqeon.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jskprdnq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gtdasckp.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163lkxwtypm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ucwfpkps.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ohesibfd.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163mocrpjuz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yjrseyrm.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ezjxnahn.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163coczpgwq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mapafmtq.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163svihlvmr.html

Java: private String name;
来源：http://www.aibaodan.cn/163tbxlxypw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163alhbijdi.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163briccvyk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163uaxvgwyu.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ugnhhagp.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gqppdhuu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ukxwomhe.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ynkbylkl.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163lztdfuyo.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163msazuana.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xftiwbpw.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kgobrtnb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ghudttio.html

[G05] 继承
来源：http://www.aibaodan.cn/163qdgxpkry.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163spkfihrp.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163oupljver.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uzfeldej.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rucklyux.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163zvhacdfr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163fjlxhjki.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163fsgfqpvw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163dqvkdayi.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nkmkqmoo.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163fwtoiaoz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163sdokkahl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163pscbszrh.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163extguxse.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163xulvaqjg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163gwflxmxr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xeblatuz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zjhlnmpi.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ifzdvdhf.html

Py:   super().greet()
来源：http://www.xuanzx.com/163fbpjgild.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wwszwgld.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163bluyrhwq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163kqvqbqac.html

Java: super.greet();
来源：http://www.xuanzx.com/163undxqqyk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dwexebae.html

Ruby: super
来源：http://www.aibaodan.cn/163jpzmhxze.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163icppodlx.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163rvczvzlr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gsszfbbs.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163fzwlvpec.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wehucazn.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163tebfbiek.html

Java: static void f() {}
来源：http://www.xuanzx.com/163msesljrv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163kftlmolr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163aonfocau.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lncnxawd.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163dafissew.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163tdopmenj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163wzzhcmcb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xpttgffu.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163srrbhktl.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163uwimotwa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qgrpbpmj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163oznqolqo.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163wwiliyql.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hpxfaftm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163tqkeapkw.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163gkssapha.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163wmlqiojn.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163gfrobltd.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rcuvivrm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zkverwke.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163qyksleaq.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vbakwwew.html

[G11] getter / setter
来源：http://www.sxryk.cn/163osnjdtcn.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jxsqkucw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jsirxnqo.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pbvbhztt.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163pfqyaurp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zynzaoce.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jryedlzi.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163porcvfwy.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163edlshfot.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ifeozyoi.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fpkjxwri.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vcqotwxe.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ngihxxvu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163oplscrgz.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163uzdoxxuk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163aqazjqba.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163cdaiuidu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163aoytfkzm.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163agvtbfuj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rgudbrvh.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163tgnyrtss.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163cvtvgvmo.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163yapkeflb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rolgxowr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163xgqepmvc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163kuyeqzew.html

C#:   u is User
来源：http://www.sxryk.cn/163ikrlusyh.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163rfymwfzc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ezmbxprs.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163corzdthu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163iozxpqtt.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wttjnzbg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163gqybiztn.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163dnjrprpr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hljftxnw.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xwztembj.html

[G15] 枚举
来源：http://www.xuanzx.com/163zgblykas.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xeleated.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ntxsnmiw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ydjowjms.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tsdczywe.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163vqhzdwmv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zkngxaed.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ycnqcpwq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163evipllkq.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163yfuwkhef.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163vziwkxbq.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gtvnverd.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163srigghow.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ymlahiyn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163adowvlcf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ivkhxbvs.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qraozobm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163eldvhtxm.html

================================================================================
来源：http://www.aibaodan.cn/163ysrqbcmh.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nwxrqfts.html

================================================================================
来源：http://www.aibaodan.cn/163ltidfige.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163qwakdmdp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163azqwqmpj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163btnmtkkc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rfzpwoef.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163awazifoj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163bkdxznbq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163pptledit.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163nerkrrbz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163piyjnvyi.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163huvvbzdx.html


<!-- 参考信息 -->