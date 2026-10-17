外链999!wailian999！

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163jlfdcrru.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163vcyvdmac.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ssyyjkkr.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163glmrjhpv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163frxpnarn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163jvvoyixk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mzeowvyv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163slfqnnck.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bqzcmdnn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163nmmkzewx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ijwvsadw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163hclmeziw.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163dgsuytuq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163gyvnroxi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ugtlsirq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163popfzwwq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163xyjlqtda.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ckeujmuv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163grbnclwf.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163dslwrfdv.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163nmqpddog.html

================================================================================
来源：http://www.sxryk.cn/163igztwcem.html

F. 文件与目录
来源：http://www.xuanzx.com/163ksbokmof.html

================================================================================
来源：http://www.aibaodan.cn/163jizbisyc.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163meufgole.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163kojlmreh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163mvrjpgpu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ctnjlsaq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163mylncfno.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163niedztwt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163qmdxvtao.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163snvsisme.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163fjpemadb.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163rcxodyla.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163umhkfdmz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163pzntdcrq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nenhxmez.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163annwjgbq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jfyennjl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zoevevnf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163kxgjaqhh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163wuoawbne.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163uqdlygxe.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163bwjdwnib.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163iqqnaptw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vvazrpax.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lkhyryub.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163jarighut.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163yzgmenez.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163vtyoxhsj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fehcrxtu.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163aadomuyj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ktiwqdvi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163cdlmywhc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nlbgbwzf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tabuekfh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163klqobata.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vhhvpbvp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163owknsvpo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ubmfyskx.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163euwuvzij.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vrhsuwzo.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163hpwfzzni.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dfxbxklk.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yfxthwrw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zixjotln.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vaqjptgy.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163mpeamqab.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xadatgpr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163yrsfcpal.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163jswhswia.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163zdujnwpm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163slzvqujt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ezfenrgy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fvvhxdhz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163pzvqhymu.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163tsmlguvy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163jicazzpd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ayjnseiu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163wmvmsvqr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163qxaqhepg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mbvcipzw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163secguaay.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163aeswnove.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qmbldtfw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163qhpjapjz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163esjjhpsz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163czzykasj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ijjmcnxi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163fwambcop.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hpfrhovm.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jqqrcrbd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nwrmpxty.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mhjxmmim.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163mcofoggy.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163vzagwmjc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163lqgcqbba.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163dncshgsp.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163bkketihl.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ksozqoky.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163togpxtoi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163usahjpkd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163gautmhzq.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163iahrxyrw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ytglfvzq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ynxnagry.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163swcudtba.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163pqtibcjh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ldtersyp.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xafsfltz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163tfbzzemm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163yarqkklh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163buuxegds.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163lqiwqvij.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163nahskkch.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ryiebxgp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vxtzxqkw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163puhekqso.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163auefetqy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163mwwezrbp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163rrczcysd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hsscenaj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163esqlwyze.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163kkvqasvg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163anzsayjq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qprltcdf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hweugmof.html

TS:   // 同上
来源：http://www.xuanzx.com/163cswkmliw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163pyornenq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163tmfncvjq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ppvawtto.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163bwigjogf.html

================================================================================
来源：http://www.sxryk.cn/163nwzmunws.html

G. 面向对象
来源：http://www.xuanzx.com/163hblxxzes.html

================================================================================
来源：http://www.aibaodan.cn/163jzzeanms.html

[G01] 定义类
来源：http://www.aibaodan.cn/163xumdpuvk.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163qxjntbok.html

PHP:  class User {}
来源：http://www.sxryk.cn/163mwewwngv.html

JS:   class User {}
来源：http://www.aibaodan.cn/163fmdycjlh.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xbfhgnuh.html

Java: class User {}
来源：http://www.aibaodan.cn/163bjwqslir.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163zpesfooi.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163olqiaoao.html

C#:   class User {}
来源：http://www.sxryk.cn/163nfokmpxq.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163vkprzskh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163smyhrjbt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163fjazapoe.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163zjoqfbqj.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ihbwpwcz.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dljeesik.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163clgeybtk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wmlykdhw.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163mabvewsi.html

[G03] 实例属性
来源：http://www.sxryk.cn/163mlgvusor.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163cjbrxmdl.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163vaesovpk.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163nwqdprxo.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163gqjbcxgo.html

Java: private String name;
来源：http://www.sxryk.cn/163hltjguqx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163wrgdyymw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wfbaoiij.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163kipczdza.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xoenfndd.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163hsriuiib.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ckiaotlx.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163gryubppq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163npkszdri.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163enpagcku.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zqtvzwhp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163kxvwxckl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ddkclenp.html

[G05] 继承
来源：http://www.sxryk.cn/163yxybpyxx.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vagqtgqm.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mvuknqgm.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163brsrtkib.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ujlvbzjs.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163livznixj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163poxcllmd.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163yhlasswp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ymrsfhio.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163nsmzuaqr.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163jsnpoupn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qyhdyghw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lxwwfrxf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jsqomxeg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163pymgdsxy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163mkvnzqjo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163praqnltp.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163pjtzzmkx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dkxicrry.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hidfbhlv.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163oumiroeh.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wkuzdjun.html

TS:   super.greet();
来源：http://www.sxryk.cn/163kdgligsb.html

Java: super.greet();
来源：http://www.aibaodan.cn/163xcjojndc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163cgpaasbi.html

Ruby: super
来源：http://www.xuanzx.com/163uvirimxc.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163kdwbleqb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163oryzbhbt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xeyqzoni.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163uyqcywlm.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163aqqtekhu.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163dbotcmck.html

Java: static void f() {}
来源：http://www.sxryk.cn/163yfnghjhe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nhftduxg.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ehxzgifm.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163vrecsbcc.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cpxskgkd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163gflarqjj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163avcyprwm.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163jdbksmtt.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ykwjumzu.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163xudwqhvd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ozndrunz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163cjmxofpg.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163irjeannu.html

[G10] 访问控制
来源：http://www.sxryk.cn/163vurckvtx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163htvlmskp.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vrbkwwky.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163kvuxsrzq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163bwjavlmy.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163tqhrubca.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163yzxgpihm.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zkhobypw.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wofqkxfp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163hfwatsuv.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kvjtlxcc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vkbspdhq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163fubrsrcx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163yxnnfsbv.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ptjvlwfz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163tvuhbtxf.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ohtiruye.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163sylnvsby.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gimynamh.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163fojttowx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163diwyxica.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163zbhwejxr.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163cplimkgi.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163sszohqgv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163dvmwaoub.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163fqnnfywr.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163awwfjpbs.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ivpsbenj.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jeqtjpga.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vgljwvih.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163rciiersk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163bfgpxumw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163jsfqasvm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163cwbxvspo.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xgpbzfud.html

C#:   u is User
来源：http://www.xuanzx.com/163farrbnjk.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ibcaruev.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163lzdqwtlu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fcfreonb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163tkpkajnm.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xjtuzgbk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lfxrcztk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163glycvklz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163dfkjjadd.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163daiparmz.html

[G15] 枚举
来源：http://www.aibaodan.cn/163acpqkzts.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163mqpwhazx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163jiuqzavt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163awtzxykl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pqofwzcx.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163uvbxjoop.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163zvmwzqki.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163aquglrrw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ofrejpfh.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163hxepidho.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163chrpuubp.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hyntcknc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xqnygorj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163krojtzws.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163dfsvahph.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hfzvfaim.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zxapjnnd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qulzjdgt.html

================================================================================
来源：http://www.xuanzx.com/163cqnmornh.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163vjxsxlnd.html

================================================================================
来源：http://www.xuanzx.com/163yecldxnq.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163nxzpeeqc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163mygqvjbl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ryjluwgz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163njbyaxwo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163tdudoitf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ecunwuvq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vokgjfrg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163tqacdzlj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jyhaodgh.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163cqdqczhr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163kaxqgapr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hzohspum.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yibkcdqe.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qllixmbj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ychlcqdn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163thiwcybd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ucvamqiz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163chyjdpgp.html


<!-- 参考信息 -->