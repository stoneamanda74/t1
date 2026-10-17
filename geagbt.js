外链999!wailian999！

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ocnulmoo.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bkymnbnm.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163nvyjemos.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163rexmrbzj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163tumadiqr.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163nputyzuv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hjxqczcz.html

Py:   if not s:
来源：http://www.sxryk.cn/163wmyrgcun.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hawlljip.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163nqdhrlsn.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163wuqwjmye.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ogqctsfl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163wozjjxjr.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xtoxxgag.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163dqswjpkb.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163jrdeetor.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ouswgqkw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163bciksyia.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ivjousgo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ofjgssei.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163eharvwjk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163drjjktmj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163sonqnoil.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163owsfsfdy.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163zcyylpub.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163tckomubf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tigbwjhr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xwjkbflc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bfbhihoc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163eyptfnvp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163hsfuedni.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ujiyyunu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163jjmrvjlg.html

================================================================================
来源：http://www.aibaodan.cn/163cxrpyvxi.html

F. 文件与目录
来源：http://www.sxryk.cn/163knzioidg.html

================================================================================
来源：http://www.xuanzx.com/163igglygsa.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163hoxbgdjn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163wyvpuvks.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163bbtifcdz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163grmshyzf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163diewrxgs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uzlqxkel.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163hpberbls.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163psszstpp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163pfdyulrl.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163mfwurivg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163nblnsopu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163afpztusd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ljpipkrr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cgumofmf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hrldbhyy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163utccdeeg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163gcebbrvj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ndedowlv.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163sbloqpku.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163mbvpnvty.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163enzyueiq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qsejbkas.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163eviuznvq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vlezaewv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qxnacmyz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ucucjzrg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cdrajbmu.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163vttqqxrx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zbcqzafz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163kcpcxdnb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jvnhmwvs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kqfxxzua.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163klejwmgn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163prkupxng.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163npditsub.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163hkuoydag.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163xngsmimi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163sqhnzack.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163sbfyjsfo.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163llayjpni.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dqkcydgk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sidvvlhr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ddvwvdbp.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163uimzcsck.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cfuzviii.html

[F06] 删除文件
来源：http://www.xuanzx.com/163mydatvjq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163hfzrhoms.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163amtarogv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163shzalqcx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163czkiqddi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tiadscbi.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kgrhmbwh.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mlqgykpn.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163kzrxnmzf.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163mruqzlye.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163foyfqemw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163loarhuog.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163iucilcfu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kssugkpz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163idksnvbq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163gupleqgk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163rdnxrigl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163kglusaoa.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wcodinga.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ebjctayp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qpsbyswl.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wtkxcbwy.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kiukcrxb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163trjhskpe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163wnnjwbvo.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163bnicvqyg.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163iptneiyc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163egupxiwe.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qauhogld.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qsrowpcj.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163krcjwvte.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xgokmvxx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sbmnezoj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163yxvonhtl.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zdxqbehf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163fqviidmg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163wcsnkxfh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dbywccar.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hrpduemj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lzvzzlqw.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163grzcfujt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163iludvnbf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ljhcoazs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163orirpfwk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163kyeiwels.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zcblnfsg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163drwtbjxa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163rdstckwd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163udalwngg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aevtbjrx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xgobvuiu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163zwnsvnka.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163myxcldvm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163czpfxzht.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163bysmriki.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163fsuiuugm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163xvtixgkp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163pqezhoic.html

TS:   // 同上
来源：http://www.aibaodan.cn/163oxmazzmj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163avzgkmar.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163gemstryp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163lbnrdqio.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163zhvhklgi.html

================================================================================
来源：http://www.sxryk.cn/163bnsafaza.html

G. 面向对象
来源：http://www.xuanzx.com/163yndhyunv.html

================================================================================
来源：http://www.sxryk.cn/163chmyinbg.html

[G01] 定义类
来源：http://www.aibaodan.cn/163iwqhaxyx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163yultxvqq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163nyuqcdwm.html

JS:   class User {}
来源：http://www.sxryk.cn/163fodiwpoi.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163gciyoaae.html

Java: class User {}
来源：http://www.sxryk.cn/163huderyqh.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wnazqwbu.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rmvvhubw.html

C#:   class User {}
来源：http://www.xuanzx.com/163kireriix.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163vxgxknjg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163pjvmihnc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163puatibju.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ulxqoiyu.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163icnatncn.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163sdadkogd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163tuyvtcnw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163idhzhmgn.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163jtlnglun.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163niijmpmd.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163bbnriaxy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163blmjaxnl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163mmwfsphp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163jvxqptke.html

Java: private String name;
来源：http://www.sxryk.cn/163dvsfepfk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163uhbknhpk.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163kwefdzfr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163vlmfgcmm.html

[G04] 定义方法
来源：http://www.xuanzx.com/163eyxxgckd.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lpzfmzyu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zndbsmkt.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163tuexnzta.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wglcocck.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163zdqyuagg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163eobsdylr.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163prjihomt.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163gzrnhccl.html

[G05] 继承
来源：http://www.xuanzx.com/163nwzcdddd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163aycqriye.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tnkegtnm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163adwfhrdw.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wrozphdn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163yzpigghf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163uuytdqhj.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163fetcorii.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163tkpfeiit.html

[G06] 重写方法
来源：http://www.xuanzx.com/163njztmwpz.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163zdjotrdj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163aejymmmo.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zkhsstuf.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tfrvrthc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163eptxivfu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163tiaihvvt.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163zncmnugl.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163rembhdyd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vobnygwo.html

Py:   super().greet()
来源：http://www.xuanzx.com/163osuvflrh.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vyomrhwv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ursagilw.html

TS:   super.greet();
来源：http://www.sxryk.cn/163bjhgubxl.html

Java: super.greet();
来源：http://www.aibaodan.cn/163moeuzhwc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163uurulrqy.html

Ruby: super
来源：http://www.xuanzx.com/163wdmhwiob.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kuzvrmdt.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163phunessc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jraiyzpo.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zfmhjsnk.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ucwnknaj.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163sptbxykr.html

Java: static void f() {}
来源：http://www.sxryk.cn/163pnubsheu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163oeztmrzq.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163rhvdohkg.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lgyioylg.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163gfqexihc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163vvdndcfl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163losjooou.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163mdidtvdv.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163nkbzhwyi.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wbytcgog.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163wyscdsuz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163kiqndaan.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163cnrdisgm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ksimemqn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rdsfwvmt.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163kntmeuhj.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qvodohdz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163dtygyybu.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163tisyowvs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163mzbphtlq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163piedzkgp.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ignepeyv.html

[G11] getter / setter
来源：http://www.sxryk.cn/163bmldltzu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163cnclzthc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163wkrhdazu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163cwrqpeim.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163pdwuapby.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163gfapcdnn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pypajcts.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163yhuayglh.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163jflqwvmv.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ubukmezj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vohuissk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ybumvxxt.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bgaysnig.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163yjyjqqga.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163kqmririg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163lqqzscov.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ukdentqj.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163wafbpifq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163wnynjqnn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163gpahkxij.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vdiidqju.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163heaijckl.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dlkvztfd.html

Java: u instanceof User
来源：http://www.xuanzx.com/163bzymwjrj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163jiverxnt.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163kctykaeo.html

C#:   u is User
来源：http://www.xuanzx.com/163ufpoxdan.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163oaxkiuxf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bzwslvnh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163uefshqmz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kwcxnnns.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ubaaqdja.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163uryydcse.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zisohusz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163rxsvpbtm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ggmlyhdh.html

[G15] 枚举
来源：http://www.xuanzx.com/163ibodluhm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163iqpbygio.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ikzyrqxj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mclzuvfv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163eoaowgws.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163padckptv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163eiwduxpz.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163qnndktph.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163txhdbkby.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163kvdullph.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163hflmyqpl.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vdzqmjbp.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ebwwyduw.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163elouqjfm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ayavklrt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163jmuyjsio.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163cogvejlo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163iwlsokvl.html

================================================================================
来源：http://www.aibaodan.cn/163huujmmow.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163bjwtczqa.html

================================================================================
来源：http://www.sxryk.cn/163heerjktu.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163dtinqjgw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163luoogicm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163cxuvccxx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vufoqovq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xrsktdku.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163pmyvfwwf.html


<!-- 参考信息 -->