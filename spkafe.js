外链999!wailian999！

Ruby: s.lines
来源：http://www.aibaodan.cn/163hkolfcyi.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163stnmnxkh.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rcpcpfyg.html

Py:   if not s:
来源：http://www.aibaodan.cn/163jgzdohmj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163flbbigyc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163trwahotf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163sjptsbly.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163luelfsnj.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163tgxwjrep.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163bokcyfoq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tplblofv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bdhencuy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fvsrpskv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163uqoeszaa.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xhhrzpls.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eifonirb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ghukzqqw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jfqdskpr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163bratmsbt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163inckmguy.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163jgsyimwx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163iercteab.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163laevmipw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pdwdahxw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zpasujpb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163lyfepwsq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163gpuskxpx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163itmgzqpz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kjbjmplu.html

================================================================================
来源：http://www.sxryk.cn/163nvklpkhl.html

F. 文件与目录
来源：http://www.sxryk.cn/163vfreemvt.html

================================================================================
来源：http://www.xuanzx.com/163pwhggcum.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163swxnxlnr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163aztfrwlw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163agduzlni.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163gwplfhfj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xnpxcprt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163etmmxztr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163tzjfbari.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163javqdjst.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163tpwmhkdm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163nlezwiwi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163nkhzeviv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163cpkmbzap.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qeqgtjoy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ogyyjitp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zkyoyxgl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163wnjaujxp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gkiykokx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xbkfuzyp.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163kexkeakg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163pbjqtcro.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163wmyyvkka.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ftgnuoua.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ocbqfnsl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ibbootsu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qxeiqoiy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fshwlfud.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jgjxpckf.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163nwzuzfwg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dkvfrgnb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xzwtjkfu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vurkvsss.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hxqbsyuh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163apteeipx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vinjhthb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163pkrmopwe.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163wulipwhu.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163cwlzclro.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mrrfgxcx.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163kcnumltv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wixvdouf.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163opxfyrbx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163myutckoi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163pymkycfm.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163boyiwqzm.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163oqsomqlw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ahnujnwq.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163asuznfxy.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163rpihqzzl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fifcccfu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163oozfcwwb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163eqalygbf.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163errlunzj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ukuekjaz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tphiqsit.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163dkzphalj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163emzdvuvy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163qzkxylgg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ffooahbb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fxdodjxk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ejzjawmw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163xqmcagsu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ddhfzfqt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ggrqvqtu.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mcsgiivo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163adhnpkos.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rrutmmvb.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163btgajnlh.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cixbyduf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dubjzmhs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163yqihunwg.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vgetbsil.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163kyrudoei.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163mfznying.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rsioggqu.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163tymustww.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163neouyscb.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163maeamcfs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vzawqfrs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163hctgpfro.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jkvznmsr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163mwpxjhwp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ovcqmydb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163oystcecr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vdlrbsfg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rwttaaca.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163wkrfsgai.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163mechnkkh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163xftmeqqo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zftcbysy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163aqwyiumr.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163lxjhkscc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163usbmxxsy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163fwdsioif.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bctglyfo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kpopvxcc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163xmkfxnnl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163duzlytsp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qggavgip.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163msaaslqc.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xxhuhnoo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ybwucgtj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163cmugcgez.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qvdorfpn.html

TS:   // 同上
来源：http://www.xuanzx.com/163kaevinld.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163lzqgvnmb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163owbwgyiy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163mmermkff.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ukabqqjf.html

================================================================================
来源：http://www.xuanzx.com/163avotewya.html

G. 面向对象
来源：http://www.aibaodan.cn/163ckkbxbjw.html

================================================================================
来源：http://www.xuanzx.com/163dzcecmzo.html

[G01] 定义类
来源：http://www.sxryk.cn/163cvqvymyk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163xfvrnlyq.html

PHP:  class User {}
来源：http://www.sxryk.cn/163axvmdqbp.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rqzsrfll.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xlyngcmk.html

Java: class User {}
来源：http://www.aibaodan.cn/163cxtflzcy.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lybjhgoq.html

Ruby: class User; end
来源：http://www.sxryk.cn/163hzogdylz.html

C#:   class User {}
来源：http://www.xuanzx.com/163xpmkocjq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163qcfdseka.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163jswjirpa.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163upriinkt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163hfrqpvtj.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ipjivdsa.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163wysetumw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jeccjjoe.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163mpfzpsed.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hioxlnuv.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hkbesjub.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qzzrwbfv.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163iaprikhy.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163rbloddmo.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163iqywxvcy.html

Java: private String name;
来源：http://www.aibaodan.cn/163pyenmfkl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163mtxtifcb.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163qencrnur.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163dppomdsf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163mdnddkkf.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pygyqxeq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163pfufivlh.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163qyipqvva.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163knkeettp.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xalbobrq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163mvpiecej.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163mgodnxqk.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zsplozkh.html

[G05] 继承
来源：http://www.aibaodan.cn/163ezhzeuls.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163vazkjetk.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qehygcfk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ibirmqaj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163predbswc.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wlpwsjog.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163dhbwtsjh.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163cddsnezv.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163kcfnhhza.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vftarvzf.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163nnmyairh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163impgdunv.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163bbqelzhz.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ffopkbur.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163fuwfeaiy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163erupvacp.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ljutcwvk.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163flxusmri.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vuabdcnz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163qhnefyqy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cjvdtnxr.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163bjonlooz.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hwsmhduz.html

Java: super.greet();
来源：http://www.xuanzx.com/163imuqziqv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163mjygzudo.html

Ruby: super
来源：http://www.sxryk.cn/163bdvhnfvy.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163smpoxyua.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163uyrmzhlz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163islqfogn.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163azvtnfbg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ytforple.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tawxogxl.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163efofjsdz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163qjufsntk.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163hxhryuid.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pphdqmft.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xrzqnhnq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xaiualrb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163movcuyep.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ptlaoqza.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163rnqmbtrt.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163axijflnq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163lpktcwli.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wvdbuyyj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163lvmjgmst.html

[G10] 访问控制
来源：http://www.xuanzx.com/163xxuebnro.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163jnauvpcr.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163dzyntqxd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xehqrawr.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163byholqkm.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163tlwgivok.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163utoxvktc.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163yjymrdtg.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163trkkxjtn.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vowwqgnj.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163anojwywb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163gaddltdo.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163klncfxlg.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163kgbavwrn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163krirnnht.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163oyetndgl.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163oclqiwso.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lawonzhj.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163vhoxkeew.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163whcebsne.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163kuiwoycw.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163drqscwuy.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163zehhuprb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163yvttbbcb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163rxujqpip.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163xuiiculw.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163oewlsptu.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163imuvgzeg.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163bmmybfuj.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163gfzojqxr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jmdyfuoi.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163qrvsnovk.html

Java: u instanceof User
来源：http://www.sxryk.cn/163lntatcbl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hjookznf.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163dibmtycg.html

C#:   u is User
来源：http://www.aibaodan.cn/163wuveqyej.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fbzrljna.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ncaenfee.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gkuopwha.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163cfmnkast.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vzgcypyw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163irhefwpn.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163yfmpzyka.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163zrjlrqul.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163toirgiav.html

[G15] 枚举
来源：http://www.xuanzx.com/163cfzxradk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163asrjlqtb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rhkaztdx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163knbuosxt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dmrqowhy.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163oihvmrpg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163uvgrmqfo.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163bfcmznra.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163czbrgiin.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xhfqmiol.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163nuylxjeu.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163txhdexaz.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zefhkmlg.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cwiruiwx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ctrkoacx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163smtumxqd.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163cnbesagp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163fjoludru.html

================================================================================
来源：http://www.xuanzx.com/163omemsdnv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163pjzqqaev.html

================================================================================
来源：http://www.sxryk.cn/163aksffput.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163bszblmhu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163sdiqktvu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163fglrrmit.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yarxqvhm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163pdpteder.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163khmhjvts.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vdmvfdrw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163uwznaiia.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163huwkvzus.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163pcdkpauh.html


<!-- 参考信息 -->