外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163putcuwiq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163dvssegck.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ibnajanw.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163wbefzpto.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163tlbsllmt.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163cqugwdiv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ocpqggmr.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ogpqrlyu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163gpclphfi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163tpcmkqwq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xprexrmm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sjuaphnx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vaepyuno.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163jzxeezxa.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163egxxempw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kdjpinue.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163crsvuonb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163iffssqll.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lppfvyar.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163cdhmtcyq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wvywrqey.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163eiaggacs.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163eisrkrhn.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163drrobelj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163hyjnyihe.html

================================================================================
来源：http://www.sxryk.cn/163xlwpuqae.html

F. 文件与目录
来源：http://www.aibaodan.cn/163bwuvobzq.html

================================================================================
来源：http://www.aibaodan.cn/163hzhywcnt.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163goxzgdsq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vuiawrvm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163upggzgbg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ykxnvvvx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163xqbilceo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163peeiftav.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163dnwkzqaw.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163laypwxos.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163njwfuvke.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163cnwzzxia.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163hrfkxltf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163tobzpgvh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lgkhwyul.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jxjkpgzd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dxiavavj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163qjupprfz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163umrwupyz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163qgxxahxp.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163wxzmqmxv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163tyvxsops.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163zrqvtefo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rzdecszo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gscxemsi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fahdbdfd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163yatjdlmt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qdtatcle.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qbdaxrjv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163tqnilkty.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163yndijyux.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163uefekucs.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mvxxifvn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gpauuzdk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163onqjqkvp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163lubvoufi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163wyqzzghx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ffrnzite.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163jeobobzj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163kqufggnm.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163krjcayks.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xzanyhww.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qktsnoqe.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tcwoarfw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jqdampwv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163yenliodx.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163npckwbhk.html

[F06] 删除文件
来源：http://www.xuanzx.com/163uholsckr.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163hdvmtbbv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hjluoswx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ywxljchz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163nyyxfyyn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pndpxinc.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163dwnnpnos.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163xjvgbjsd.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uloigzal.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163erqbdlvu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ejyxmvvh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163bpcqefbx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xmbjojjg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zgujudka.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rmmxshil.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163mlsizlvh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ibvomjbr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163quxasjwc.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pdvrfibq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ksaenpxz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163jjwmsbtv.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nvnvochj.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rcdohwqa.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iqsycsrj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mvhjixbp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qrazezvd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kgsnghfr.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163buyqaiol.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163lesspwib.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163pfljxswy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163akmqojev.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163azkurjge.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163verbfynn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163lnrpseoz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zkkyqhha.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163abfncpay.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163qcxtjfji.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ihakdqph.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163vznzcrdw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163flrdqzut.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163bsqwygle.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163vecrebmp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163cndvypiw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bigovois.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163nefyyamz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163mdbfqrhn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jsshfifu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163txfhozsc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tyuvobbj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oermifiz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ndxoiqiu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163cofqogmc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163suqwxtpt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wqcllaml.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163nyxzgqgs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163mnflgjpw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ihckgqfw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ozmfypsm.html

TS:   // 同上
来源：http://www.sxryk.cn/163jrrckclj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163nalaqmvp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kfzsgvnk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ctvhtntn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163abjetwqh.html

================================================================================
来源：http://www.sxryk.cn/163oamyvgbx.html

G. 面向对象
来源：http://www.aibaodan.cn/163owxymseu.html

================================================================================
来源：http://www.xuanzx.com/163ljcbkois.html

[G01] 定义类
来源：http://www.xuanzx.com/163rqqzammh.html

Py:   class User: pass
来源：http://www.sxryk.cn/163dxxipuab.html

PHP:  class User {}
来源：http://www.xuanzx.com/163zyzsdhrm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ytpcflmx.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ezqhaean.html

Java: class User {}
来源：http://www.sxryk.cn/163nvklcxwj.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163sdyarqre.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163tcpmimnd.html

C#:   class User {}
来源：http://www.sxryk.cn/163dkiabivy.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ygshnujh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wuuuzrch.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163bdauljwq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163akrlqwuu.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163uipxzvvg.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163xpgcpxim.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163fcwiucbt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163adokzkab.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163zmznlgbp.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163sqybnsvx.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163jnvhisoi.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ypatbwbj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163tdpxovrw.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163lqzthrso.html

Java: private String name;
来源：http://www.aibaodan.cn/163aqrfzyup.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163hsvaxjjg.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163kdtahiar.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163elwjecsg.html

[G04] 定义方法
来源：http://www.xuanzx.com/163jvgfuxgp.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xhswqkuv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163xfhhfxqf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163thmnldzn.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163uznfoeqw.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163sqcrplqb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163jqzzhtsm.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163afxfeseb.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ptualurp.html

[G05] 继承
来源：http://www.sxryk.cn/163kzqxeqpz.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163emavjwab.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163zjygjhxp.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163snhkbfdh.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163gepbiubs.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163jnftjiua.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163fnxzzyeu.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163dvwcmjdn.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163qysjhcwu.html

[G06] 重写方法
来源：http://www.sxryk.cn/163wdfvwfaa.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163cyybxqfd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163udesdbel.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ivwpmaof.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163atdlyaxr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ukifcukj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163fluqjaqk.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163trnzxnej.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163jefmpaiu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163yzvgbpoy.html

Py:   super().greet()
来源：http://www.xuanzx.com/163yawrbhbu.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vhhsbiry.html

JS:   super.greet();
来源：http://www.xuanzx.com/163fsrtuaps.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163fkbauiqt.html

Java: super.greet();
来源：http://www.aibaodan.cn/163qirbjzmn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163aulgoyjg.html

Ruby: super
来源：http://www.xuanzx.com/163fgawekss.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lesuooeg.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163tyxsuazf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ioqkuubz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163unnylbmc.html

JS:   static f() {}
来源：http://www.sxryk.cn/163exdvbuus.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163xallrzoo.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163hnfkftbx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vebhrynh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163fhbdtqsz.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163jyibmrji.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163vbltgqlh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163lzvkpxpl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vpnvjqxi.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163knkvxfed.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bvibmcyc.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163pybrxbjc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163obvxwlvh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ejxeasno.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163wkzgcbzw.html

[G10] 访问控制
来源：http://www.sxryk.cn/163eeeuzyzk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163izcabcnf.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ueozwref.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163gxolaenz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hojqxkfa.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ehsjcxxx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163cuihqrqv.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163bssimjbr.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163trczcbhp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163gxtbjhjx.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ikamovee.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163gxgprbop.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hjgiwuxr.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ottlnglu.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vddbdyjf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163dwxmuxcm.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163thrabkji.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163cfhwlbhz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163nwpubslw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163xtaiqkix.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xyyevbav.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163uhaybimu.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ddaxjblb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mvlntafq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vyvjbyvv.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ogtxtrxb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163kwsnfzdt.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hngwixqo.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163yqdjqwlf.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163knilnefi.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vjmgoeiz.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163rxwlizhh.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163gmazqxne.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163kgjlkkhk.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163cddlgzjc.html

C#:   u is User
来源：http://www.xuanzx.com/163wynqsxku.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163efawyhqq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163shrlyyas.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163gksnmygs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163mvbgnxea.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rosjaisj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163dfpmyanx.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163uuvzadws.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163qlgmxnim.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163vjvldtii.html

[G15] 枚举
来源：http://www.xuanzx.com/163ufpikuap.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rnebmgjk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163xpvtolnt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rrvqspyw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163auyqkybb.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163oqdyfame.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wnpfilqj.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gwumxspr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tlxaxzld.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163cruxknna.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ltiaidtf.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163aibztciy.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163coxpstdz.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163rfthjkgj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ijkbpnqz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ebsdtwqz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rrreiwjz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qjbvppap.html

================================================================================
来源：http://www.xuanzx.com/163lqhgxrxf.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ilysqlnw.html

================================================================================
来源：http://www.aibaodan.cn/163arkualwg.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yrzorsez.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163bfdoljbd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fzlyipmc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pfgvfmbm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163hjugfdwl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163qsmxjmdt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163rantevxu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163cvnwzhaj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163evklbige.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163vqgunpab.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163qmhonpzf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hqwfermi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tmrxumop.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hghcdjfn.html


<!-- 参考信息 -->