外链999!wailian999！

Go:   if s == "" {}
来源：http://www.sxryk.cn/163rgdscrqz.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163uorwquyz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163itmtepno.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vugwdvmc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163bcrtbevf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163vhpqlhad.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rkwkssfs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163diwuijbh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163txvcwnfw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ursazjkm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163dplxawbr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163wvfrhgqd.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163tfcapfch.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fnmjykjh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163gvldituj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qafrccch.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163dpvfdrcd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163tmqedxrc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163rguaszav.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fwmwtuqm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ftnumgdv.html

================================================================================
来源：http://www.xuanzx.com/163gwfczgsg.html

F. 文件与目录
来源：http://www.sxryk.cn/163ajdqkssi.html

================================================================================
来源：http://www.aibaodan.cn/163qevtrqbw.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163pyyzvqlq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163eudztgch.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ufrdxbcj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163vnxejfrd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163fdxovtna.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163unptxggb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163zaptgbpx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163tmwubsco.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kujmsslj.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163tgmcbobc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163itauxncn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163fephqhlo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163iyzztvms.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hrfhyghh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hrfsnmdo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ytvslfvu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163xyrfzhmi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xhgjuwhs.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163kkoakzkw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163eziwbgaw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163taxmerqd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ejgwlhtb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jiwktvbs.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163qwujveej.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qqwjipbi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163codfxman.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163navtxgam.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163mjjiengp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163hevgbvig.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163saftcknh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jbbjpyqx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yobtelfk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xamolfio.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163pyqhudqv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163uknycwhf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kbvbqxhj.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ygaxnhgk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163pvbvrkwh.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tjkigyrn.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ohuqbeak.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163anuaeyki.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vueiskte.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163azdblsdr.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wjbtpbdq.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xixhiaoa.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nmxafmjc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163pprfwedx.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163jguycinw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hdzwrnph.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vwqxthvl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ifjkqpwt.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bzdndpvx.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163jdirhttv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163onujbixv.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163tkwxwhbn.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163wmmgljbe.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163hndkepdj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mphywihm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bgusscla.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163uyvuoufl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163etdjwapf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163xgfipzci.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mhygpfwr.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ymzsdjno.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163obalnpob.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163zrnuyrzy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cqazlejf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kvcowxlu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mrntkvru.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tupukyni.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163zgwkjoww.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wgmlctzu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ehiiwbaz.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dtapzypj.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163tcbyafqi.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mcjruhzq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vxckjknk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cshqwatm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163tsbiikmz.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163hxtbydqo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163poghkqfw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163idfxynhn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gwemozgm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163xjivfncx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zrfoyafa.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ltwbztee.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163uftxjdef.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163npyrxakg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dddsxdtq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163pmddcpal.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163bhxoynwb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qmluzaje.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163usswioss.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qogsmgyz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jpmjqvoc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xyyluihp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163uxlohqlm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mzdvexwj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wygxaiul.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163pssdwjyv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163oiizerjq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163agnpidzu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163aebpvtio.html

TS:   // 同上
来源：http://www.aibaodan.cn/163roryhnkx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hutegcfj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163opwnvxal.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ppcyfygh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ucwqnvtf.html

================================================================================
来源：http://www.sxryk.cn/163ngvtcygk.html

G. 面向对象
来源：http://www.aibaodan.cn/163fepycbvo.html

================================================================================
来源：http://www.aibaodan.cn/163bkjtfkes.html

[G01] 定义类
来源：http://www.aibaodan.cn/163btsrzjsc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vbngwhev.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hchqpfkn.html

JS:   class User {}
来源：http://www.sxryk.cn/163iajbeigu.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zgvluxhv.html

Java: class User {}
来源：http://www.sxryk.cn/163wcltzpfv.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163hftedklp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163uzhgaarg.html

C#:   class User {}
来源：http://www.sxryk.cn/163amxjbvdk.html

[G02] 构造函数
来源：http://www.sxryk.cn/163kkcermuj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163hvwkagur.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163lwkamkce.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163wyfoudig.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163hgmclvss.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163lfqnymud.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vmojomvi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wkiacawg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163blwqqmet.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163hwfwdkup.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163kagngzmi.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163jraydgmz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163dojdqxed.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163hseookwn.html

Java: private String name;
来源：http://www.sxryk.cn/163hufqcxic.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163ctabwdjp.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163wevylmct.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163njlkjmox.html

[G04] 定义方法
来源：http://www.sxryk.cn/163kihpavqe.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vxoipdqx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163nomnvdgd.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163swbvjrgh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xqfmfzfk.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xnkyrdvc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ecjxhmbk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ioxpdwqv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tlbmvenp.html

[G05] 继承
来源：http://www.aibaodan.cn/163sissjtqd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163nqjnbcbx.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163kkzexkjq.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jwzgrkvg.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sgcwvcku.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163tfceoumk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163nfybwxph.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zqcioiek.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163lzioazax.html

[G06] 重写方法
来源：http://www.xuanzx.com/163fzacabpi.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vprwsnsm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vktetjpt.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163etvzdwho.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ztdyoeba.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163bxmsnols.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163uptbgvni.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ksnohyxd.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ffggfkki.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163jouxisij.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qugjidcv.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163prmvamty.html

JS:   super.greet();
来源：http://www.xuanzx.com/163fqlpqsux.html

TS:   super.greet();
来源：http://www.xuanzx.com/163owszuuai.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ekawtggf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fbboyiju.html

Ruby: super
来源：http://www.xuanzx.com/163dkpdjben.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zydibfet.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163vxoiozmh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163vbomdrnh.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wbczordf.html

JS:   static f() {}
来源：http://www.xuanzx.com/163nflcgvyy.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ifjojqtd.html

Java: static void f() {}
来源：http://www.sxryk.cn/163omjrmfyu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163fggpbibn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163sipcqenj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ckyhwoxi.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163dvyihwoy.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rgjdecvt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163hbokqzdm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163nicxchgk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163bbznisbx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163vltkfqht.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fuuuhxfk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wbntoosk.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163kghaymqy.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163uzqtvvrr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163dmlrmmcp.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lngpibuy.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163uiwgdjym.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163grzmwwph.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hxkxrfgy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ilqjgyox.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ntipmouw.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163uxbdvbqf.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ehwpqozy.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163lxdlxvnq.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163galzevom.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163niumwwfi.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ijjevrby.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163jtxzmrbw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163afjvgjvw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163vvvxqfxt.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163vjwvknnz.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xdblbgjl.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bzvjlgzo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vywdtztg.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163raycrhit.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163dutqzcjo.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ljlzrbxo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163didbtarb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cyuosrez.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163gfafccmf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vbsrvvmf.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163pdjshjmc.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163waerfwsa.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ugwsupcq.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wnhdcbqa.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163fkwosmbh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kkchbpgj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hgnrjofo.html

C#:   u is User
来源：http://www.sxryk.cn/163whgikhyp.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163xngbpbdg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163fxzhqbgc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163jbwvsutw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163xqkrddpu.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gcjbayfd.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163uhzizaig.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163eejmskze.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163lbxkaczl.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163phnpkixy.html

[G15] 枚举
来源：http://www.sxryk.cn/163axgzurgc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163qqcnqqvp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163udkrsgnb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163bxmznsln.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163wjzdkgar.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163npmnrujr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nejiwqmn.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zwolbcpv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163yoxzriwi.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163hwzjfeag.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163lpghenkl.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jcqcesgm.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lkikbtsg.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gcnbjzdh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163mlsvfxwk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163kibfctbs.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163rrkliiyw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163uajjevvi.html

================================================================================
来源：http://www.aibaodan.cn/163xjuvdcyt.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163gykhczjr.html

================================================================================
来源：http://www.xuanzx.com/163fqwbnybp.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ddrogaye.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163agkslvib.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163zkgzrsez.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zkmcgdkd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163adupvguj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163rqkepfam.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163jabhwoei.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163qwyqnmzu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ihcajcus.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zdelboga.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163xmrxwbpf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bfatxncj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eiqkhlfm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zgmngvtz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163evokgipl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ryjhzbnu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163fqhahjtz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163hfirnngq.html


<!-- 参考信息 -->