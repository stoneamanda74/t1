外链999!wailian999！

Go:   if s == "" {}
来源：http://www.sxryk.cn/163brxiihgy.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163pohfwnux.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163zvypkcrr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163rglfijww.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163yfenwgqb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hwgzkwlk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wdnldboz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bjyboewl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dpiljpio.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163qxathhol.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163giduxotk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163huzadmfy.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163jgwkrllc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163amvtyvqt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rivzxidc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163sabhcuti.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qbqajjfy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rulyxuhz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ijwqtcza.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163hnunidni.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163wsgdmoen.html

================================================================================
来源：http://www.sxryk.cn/163khwtkfiv.html

F. 文件与目录
来源：http://www.aibaodan.cn/163fuktimrw.html

================================================================================
来源：http://www.aibaodan.cn/163ehmizxqa.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ewfdxfgi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163oiooszdt.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hirmytca.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163jfiynrto.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163udrhfpax.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aneojvlh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163sfawhdgc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zznbxody.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163xhusmxkl.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163nscrgbgs.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fnlalqwu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163uyocpait.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xsvymamm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rdiaqmzy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lxvlbnri.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zbqezlsp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163rwxhnxvt.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163bjgxlafk.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163maxjwdkb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163czzajutq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rvlagcda.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ketudfud.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ulvxehlt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163kuzewdva.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163emtywmcd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163lkviboua.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163dhggcvll.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163kztonubq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ywtrafid.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163bmrncpfr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gofhzgfa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jpykjykg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163jnjohnez.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163qulxhiyj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163nrjxyyaf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163hbwkyryx.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163hpltswqf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dxwfwujr.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vmeywtuh.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163upsnpgsq.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163gpbyowlg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tjosrxss.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163slzefnty.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163kqrdmqbt.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163kdwoihya.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ahffices.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163pgssaegv.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163kirpndoz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cczjgwuo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ynidgmlr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uddqojeu.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163rnensege.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mehwsexh.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163fjsfsclg.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163jydmwxou.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163hcvmmfdm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163xbjluijb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mjsiqtpq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163putihtef.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163pgpyeaco.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163irhoyfxs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163koyasxkx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163cyykkoer.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bfumhevo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163roxiesbd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163dcwdybjo.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yrkeuosq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yqogryed.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vwcktlhj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ismktpwt.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ndavepnd.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163kemzqhyk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163rhgwlgxw.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163shrleqih.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qvtninmw.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qjwanjsv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pkijviqy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kyctvsoc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163lkeiwnuw.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163qwqayftj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jyvzzjwk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ktnuxjae.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nanqfrrt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163illeojlu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bigyovfr.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ogtbslpe.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163plimifdo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163mgvxxnar.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163adwwqneu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163irhzoqjw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hrywdupw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wcfnfvge.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163sawhumbt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gpnlpyer.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fucxnfcp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163hjehduxg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vtezosmi.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sflbkekj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qanfgwnn.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163sbmbwuns.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163yefdjolm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ktitrpsy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163dcocicit.html

TS:   // 同上
来源：http://www.aibaodan.cn/163qlamrcho.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163qvjduasu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163wmhdbhpk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163lvenccbn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163tpxaadgf.html

================================================================================
来源：http://www.aibaodan.cn/163yhcnctul.html

G. 面向对象
来源：http://www.aibaodan.cn/163ezpfwsch.html

================================================================================
来源：http://www.xuanzx.com/163rqhwnmem.html

[G01] 定义类
来源：http://www.sxryk.cn/163ryoyvrdj.html

Py:   class User: pass
来源：http://www.xuanzx.com/163fgrsniyv.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ejpcvbiz.html

JS:   class User {}
来源：http://www.sxryk.cn/163lvrxmfxf.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163meazsdcc.html

Java: class User {}
来源：http://www.aibaodan.cn/163akwwasgz.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163eomctdws.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ltwebcsd.html

C#:   class User {}
来源：http://www.sxryk.cn/163llaepxxz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163avepjnbq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163uzhojpxz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163zwdnnhxp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lanlornr.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163vsmhwwly.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163fweewokc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163zsssszyi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qdntrqty.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163sycctwwf.html

[G03] 实例属性
来源：http://www.xuanzx.com/163gcvdtwmy.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163yfzfienu.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163uwbyunwx.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163dmqhskaz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163zzvwmuua.html

Java: private String name;
来源：http://www.xuanzx.com/163ccooaqji.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163emmhqhgo.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163jyjpkogk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163dikdaxmy.html

[G04] 定义方法
来源：http://www.xuanzx.com/163vmdfsnce.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163bvfjryve.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xebonktk.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163csyfrfzq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163hwmyqmka.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163nszxqula.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163auooegdl.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ycqjrvjf.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ycieqwfi.html

[G05] 继承
来源：http://www.aibaodan.cn/163wiursijx.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163bdfjvcht.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jzqzzurz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mjshqjpc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ojajxjdp.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ekjofrlc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163gubqncrq.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ptbuebcp.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jwswlszq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163dcwjlvhw.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163pqfrmvpk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ykvkrsew.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163thzhqfey.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qjkutmbs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163esqijwdt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163gxyesjob.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163akksidph.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163dzelstdo.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163jgjgezdr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163tesbhsti.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vxdbsnzi.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163tlkbmejd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ambipksg.html

Java: super.greet();
来源：http://www.xuanzx.com/163owixyvmm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163nwxlbdyy.html

Ruby: super
来源：http://www.aibaodan.cn/163smxqlfha.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163scklsikq.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vlekupbn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gojvlpim.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163utymeocp.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163hdxufurz.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163orgcohli.html

Java: static void f() {}
来源：http://www.sxryk.cn/163zkhtnkhj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nmtslfij.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wvjlyfkk.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163zreyxulg.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163meyweayn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jvidymrv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163liwumwxl.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rxrnxhrk.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163nhebutyq.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dcxuckuz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163tucwyuem.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163njerxram.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ohbwfpgr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163fmiwnsey.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yeygvyxy.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ibaagtil.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163gvcnrmhy.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ovbvvxio.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163lhddmxdd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lyrsdruo.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wejdgici.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163jvucappg.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163gtnxalhe.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163hlookbqu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kjfaeugo.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163dgfnddvm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163tnlxtmri.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hdivxyzt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163gpazilbs.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qixknosv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163kaxbtrfb.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163chbuouyj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ndqpdhoh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lddagzwd.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ilzdzqin.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tgjvcpsd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xvewflpo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163uinvjmik.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163iqibaohq.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163waztsabw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163exhtqiqz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163nloseqza.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163iffywpdb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163sklimrxa.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163fzibzhgo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163donnzagl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163qjbmrkga.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163fpqpwpsd.html

C#:   u is User
来源：http://www.aibaodan.cn/163rrjjuejy.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ozbbplcd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pofbxexi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163bkrxdqut.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163aekuriti.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zmvyahcc.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163udnbiado.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163teiphakz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163bzlxyedu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163xatdosav.html

[G15] 枚举
来源：http://www.sxryk.cn/163qxeqcrww.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163dtduclja.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ijwarube.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163rmijqzsg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163soqtslaw.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163rgslbclg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163rrageoqc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163oqnhpmlu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zgtjxdew.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163eugesgdr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163plomzgdg.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163bqjugedk.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ibqohzht.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rolnyhcj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ftpknfrn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ixjtgpdc.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rfmkkheh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kglckzpe.html

================================================================================
来源：http://www.sxryk.cn/163cdexmuif.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163kcosxnao.html

================================================================================
来源：http://www.aibaodan.cn/163cmtacgmc.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163hkppknpd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ppkvuntf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jhnxsyem.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bmfefusr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163shlpivyx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163cibuzzso.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163tbhhytmg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163oiikayvw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tdwttkcy.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163dbmfmnam.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163fkuetegv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vpahvstv.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mxynulhi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163awtsegjf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163abslnofr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163xginixhb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163wdwokekx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163fmsdzonf.html


<!-- 参考信息 -->