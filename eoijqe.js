外链999!wailian999！

Go:   if s == "" {}
来源：http://www.sxryk.cn/163tvslhxiw.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163nmpwwvdz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163krupwqss.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163jcxjbtyy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163jccpqpgy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zokloqqd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163npvtoesy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yqwkyxnn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ispjzckd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163sdiqujoc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163akuwxezu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zqzlndpi.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163oyngrmfn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163iuikwnav.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163kthxsvqo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163svotxsnj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ouwgzevt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sgdqqydg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cmfpwijo.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ligxspzf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ifdnziei.html

================================================================================
来源：http://www.xuanzx.com/163jyxgyctp.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lbpaaxeb.html

================================================================================
来源：http://www.aibaodan.cn/163haiyayfe.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163sftjgwxe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zhesctgi.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ppzpekjh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ivmkfrzg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163pkdxhtfr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jlzxpeuh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163pvkctcbp.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163llarupfv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163pcrvrsia.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ihprnovs.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ubhqpyez.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163epbnmjza.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hexabvjj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163swoyjapd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jmlzmzdq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163dyarfnyx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zgkwrvhb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ikrolpxk.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163owzaiiwp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163fjnghcon.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ayipzyft.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vpxbwajm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nboyuygp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163rwwbknkh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163hibgnthv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163flmrkkcr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163kkqbqnok.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163eagiwlzf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ihaprcro.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jwyrogmm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fwhmrvxq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zwxaaahg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163bjaqjrdr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163pulzbjbn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ovnxphbp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163tihiyycr.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163uewjalpq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163trnokmvy.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jxeptpiu.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uxtcuvmh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163blzjprcr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lodwblzy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163sddngjzz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163arwdzyor.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163duhftxmu.html

[F06] 删除文件
来源：http://www.xuanzx.com/163vjfngdvy.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ogsadmvd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163msnijlxb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ghghgqul.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dscjfdfk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163swzsuaag.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163jlmwcvyg.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163bvzaylfo.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wuegcsof.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163pwhkziyv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ysfemcss.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mefhigyu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163unukrwxl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163udfxqopv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163sclwuaxp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vstsegtg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163utmbistr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163twijxsmk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pflhuhfn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163toxsvrcb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wbntfutx.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163liqvskgn.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ubruimhn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ezgbsdfq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vpchaudk.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jlhjqkng.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163rjeudisl.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163czfgztmt.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qvbkqpmq.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163lbbzhsfe.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ljqutkxk.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ztyabqim.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163emauswqk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163spduwxhz.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jqeqpawx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163xyujznzb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163epkzwnnq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163njesneiy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yolftraf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fqgpglsw.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163eudabalq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163yaqjgrto.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dkpwhnng.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kikvdiun.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xxfxhmuc.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163icatepyj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lcxwtlae.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163winkrron.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jrwgkjax.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tvlktsro.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ptpsezjt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163syjbxbyj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eaacnsag.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163keyfebrg.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vubvehdb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163hmdamrkt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vcayviqg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163qbcbxykf.html

TS:   // 同上
来源：http://www.aibaodan.cn/163kiiptbts.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163uibptngs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ognsgmsn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163tswcqsuf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163sonhklgs.html

================================================================================
来源：http://www.xuanzx.com/163onkelpxb.html

G. 面向对象
来源：http://www.sxryk.cn/163zzwqacbt.html

================================================================================
来源：http://www.sxryk.cn/163omvjxrwi.html

[G01] 定义类
来源：http://www.sxryk.cn/163llszamwj.html

Py:   class User: pass
来源：http://www.sxryk.cn/163yevfyelx.html

PHP:  class User {}
来源：http://www.xuanzx.com/163oszrdkuj.html

JS:   class User {}
来源：http://www.xuanzx.com/163cwinqyki.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zieecofd.html

Java: class User {}
来源：http://www.aibaodan.cn/163tcxmhtjk.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163zzakqxtd.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163kjzsuasj.html

C#:   class User {}
来源：http://www.sxryk.cn/163xqdfkiwr.html

[G02] 构造函数
来源：http://www.xuanzx.com/163vjpoucdl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vxsotpob.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163nyqygjvs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ppxqikhb.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163bubentjw.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163xgzjdehu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163srwysfoy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163wizoulpj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lfnoikln.html

[G03] 实例属性
来源：http://www.sxryk.cn/163aksygepf.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163cmgmuoqe.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163yxokwkft.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163hfbhxutp.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lzgzcbbd.html

Java: private String name;
来源：http://www.aibaodan.cn/163lmfdrinm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163tbbokymw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163dhtslmhj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163znuudsis.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gqtmoesy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163uzdodijh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163zymwyygo.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ewzjbkut.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fmdfmpvb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163dhzrqsxq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163npfukljh.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kfqyqhmy.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163demewedm.html

[G05] 继承
来源：http://www.sxryk.cn/163pahhwqfi.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163qlfiomjd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ujfrlkkv.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lylwjius.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163maspnyqn.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163mahahbmq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163pzppetiv.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163yzqjrtps.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163zbubayct.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yvoluncl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gtsxuepy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nebokvat.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163uduxzrxb.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xedixgpx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fypuqdmm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163hkxdyecs.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163sgnamduu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163cnxmhulv.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ywvhqwjc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163yecsdoqp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163slttejym.html

JS:   super.greet();
来源：http://www.xuanzx.com/163gxqnaedu.html

TS:   super.greet();
来源：http://www.xuanzx.com/163mbqirbxe.html

Java: super.greet();
来源：http://www.sxryk.cn/163ikesbqvt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163twxqpzng.html

Ruby: super
来源：http://www.sxryk.cn/163jwhxjymr.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163qivrlwpq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xbossrej.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163jrteorqe.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163pfjtbhib.html

JS:   static f() {}
来源：http://www.sxryk.cn/163tajyeddd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163vcxuotwq.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ojmnopwm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163nzwzbaiu.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163lqhwbgtl.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163feikwsct.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163gkjuukls.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163lqyetypf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163udswjcye.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xxtfhgtq.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163joxrojio.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163yqttpcyj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ujonpbju.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xyipcqqk.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xxsorpdh.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mnlsnxje.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ujymefos.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163qqwcdbqo.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163gmkmpzui.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163elizyagt.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163bscwfmjg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jdhuuoii.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163lbfnalpl.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163owncutea.html

[G11] getter / setter
来源：http://www.sxryk.cn/163xlaiahic.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163hxagonva.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163htudanha.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163csmvxsuk.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ibrlwqcx.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163fmrlwzky.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163kansfqmt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163aopmrbvx.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163apjklczx.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163utcmlzet.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163hwbiidmi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163cyfnusuc.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163uvjjcmei.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zfwcaody.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163igxaoeds.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dfdhitdk.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163asfrqdui.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163utzuhkki.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163jdzxcycu.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ubvjnpyc.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163txmxikfg.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163dloggptq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ccwcpryb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163puppjwkw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163vzsozhkv.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163zohubrju.html

C#:   u is User
来源：http://www.aibaodan.cn/163zujvjwps.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163csxbttya.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163pvafiame.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163xuhrrnmu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bkdbqvvr.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163pwoecdqs.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ainfanxu.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ofxsoxwx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163yzwggtcp.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163pepgggqg.html

[G15] 枚举
来源：http://www.sxryk.cn/163torxeudp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163uckzhhxr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163drmdwaoc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163xmcduopu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163duqmtdru.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qjfudxvo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163xcaugjgy.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fyrfmwtt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dealuzox.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bqlwyhlb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163kcjubnft.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163zgmcrezk.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gfkqhseb.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163btmrvwce.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163zcvjqutm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163fslgvmwj.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zsvtslel.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163pbtmgbbf.html

================================================================================
来源：http://www.aibaodan.cn/163pjngshas.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wquyxjzz.html

================================================================================
来源：http://www.aibaodan.cn/163jjcvrcne.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163swtryvnu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ecqzrssx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163twqkytoo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qgcxhafx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163xpobcevd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ojqmyarm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163dmavkdog.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163whckpbau.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163prjmbrzn.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163glzbjgbl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163trxshgmg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pvelvxrk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mfletebn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sqwbyvjk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163loyzgean.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163kpyfwuwu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jccwrkzh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163lwomrzoc.html


<!-- 参考信息 -->