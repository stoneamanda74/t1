外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163xgkxbudl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kriklgzs.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ifflblyq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163pddzmgfy.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163klcgeavu.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163wmavouey.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163nqntfajr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ripfvxbz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163cxzxsuez.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xnpclrmj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lweleacq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qlgunzoo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jktzxjqy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ovrtxhft.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163rrssuade.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163elxsenqh.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163nzwizkvt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163yxwpfqiy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zlfckuim.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163duptugpf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jqrtheph.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163rjgtiukv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ovcibqyy.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ymrbykho.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163nhdzahox.html

================================================================================
来源：http://www.sxryk.cn/163tdeeolce.html

F. 文件与目录
来源：http://www.sxryk.cn/163uqiucmng.html

================================================================================
来源：http://www.xuanzx.com/163woyrwuvg.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163fuelhctt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vgwersdi.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163yxevzxye.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163tcpgrcmb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163asxuphsg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kizvkerq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163nhmuzbif.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163qslqpkxp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163bdksnbde.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163hbqfshrq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qsvebhum.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163eukdzbtn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ozntcdsr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wdxatpdb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bauenefr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163qirkxioy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vkeauexd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163evmokzxk.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163zfimmohe.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163evwjmcty.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ccxjyxva.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nddcnmwr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kcpfnhny.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163lquhysjg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zosooijz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163gedgbzyj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163wurpxdys.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163nkcvcqul.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163gedejwtg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163gqyfqxjf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gzkocpex.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zkpbduvf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163jountjqn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163yltfkjup.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163sjqhhzsd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163cvjmsnvp.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163udgoictn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163edbwfowm.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163wqxdpzal.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wthuyzab.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hqhflahw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gzjapfmt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163zlgchiqa.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163cffscgjf.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qmulmmua.html

[F06] 删除文件
来源：http://www.sxryk.cn/163oawamboa.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163aypnprdg.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163iklaliji.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163boplgsha.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bnzplyyt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ohkaijly.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163suvitdgm.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hqoirkqt.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163zpsmlemn.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nbdugctv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163anrcrplw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ypoxjwyy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163skjwfggt.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iexlydis.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xipkbngk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ivvgzxdi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ktwkwrgz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163llbehrmg.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163lczvqvwp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163geknafqi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163lrhgkkob.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rmjetjsy.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lpsqlsoe.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cxzehvkg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163grardcye.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163xgszckbi.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nzosszxm.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163hstbwcaq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163fgqgkllj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163imcdlqtr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pavkonrq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nyiucryu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163isuzzvrl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dpcohjjw.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163mpxsaxwy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163oudpwdxf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163qbicxzrj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kshdmlit.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163pnbqtixy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163aqudnjmq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163vogiqcsl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163bpztovhq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dvsodjgb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qsvsmqnf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163yfeajrox.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163qjspxyvt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ikbbvfze.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163wbwelbyz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qviltoze.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aceikvjm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163sgjjhyou.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ackktcmo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gssqpsoo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jrfetpkw.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163eazusuvm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163bsdgujwp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163dqljzfjj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ruxbtnrr.html

TS:   // 同上
来源：http://www.aibaodan.cn/163wedqhtib.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163mipskzuz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xqiugaws.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163pzxbhosm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163atsnmleu.html

================================================================================
来源：http://www.aibaodan.cn/163zhayvryh.html

G. 面向对象
来源：http://www.sxryk.cn/163ogcorrfr.html

================================================================================
来源：http://www.xuanzx.com/163zhxfmgmo.html

[G01] 定义类
来源：http://www.xuanzx.com/163avwmvhlh.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ftyoenkx.html

PHP:  class User {}
来源：http://www.xuanzx.com/163lvimojkf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163igvuvfem.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163osnfkltm.html

Java: class User {}
来源：http://www.sxryk.cn/163wuydgihk.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xxzxmibt.html

Ruby: class User; end
来源：http://www.xuanzx.com/163kovpjtzo.html

C#:   class User {}
来源：http://www.xuanzx.com/163pkhbkzzs.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ohgpvojn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163iynhpdyz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163fvojgnlm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163szofljep.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163jtvrnzxx.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ydeidqsn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163hsdjvjmt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163dkqmjzwv.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163psvwzsah.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ofxcetjh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ulhacyvr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163imwgcqnt.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vzsheayk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jemjihgn.html

Java: private String name;
来源：http://www.xuanzx.com/163odcstbjo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163qwzqpeie.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163eisxppof.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wfyqfede.html

[G04] 定义方法
来源：http://www.xuanzx.com/163davtgkyr.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163rxwooisb.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uwetyjss.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xwgbqsen.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163orgcybst.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vhyuzgfr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163novvrcwp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163zoxudawe.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163yoapdvhc.html

[G05] 继承
来源：http://www.sxryk.cn/163atikovsf.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163cnwtpuzs.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163yvfciodg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vflsozlz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vvoumqgd.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163iqpdufvl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163lapssbfd.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163mhgxbjxl.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163dmcczpbr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jroqpylb.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163cvkxsoja.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163msmftnry.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163kvlwaclr.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bshtspxc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163peuqmfgy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163harjejyc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ycfiworj.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163toftjpbx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ibroftrl.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nkfcfcic.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163dslzdhaz.html

JS:   super.greet();
来源：http://www.xuanzx.com/163grfgnucs.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jnldebgk.html

Java: super.greet();
来源：http://www.aibaodan.cn/163wnmmfsru.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163gprgkepm.html

Ruby: super
来源：http://www.aibaodan.cn/163bfyisplp.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163wklubrwf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pvsldtfm.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gqatmfuh.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163rzrrdwxu.html

JS:   static f() {}
来源：http://www.sxryk.cn/163kmexggoa.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163bplxiicv.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ycgpaewa.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xrlykprs.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ifiemfsn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163kqtsrnbv.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ehebpjyz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163sokqhdyt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163qrtjjkcb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163hxqjlicw.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163oegfplif.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163kvihbmpe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163hyoxivvh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xsawjosj.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163nftoiaxn.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163yoztrlhm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163fcpgjsae.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163sygoepth.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163szkiisdq.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163agkdxqbu.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163zrowwcza.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163hmxstfyb.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163yepwwiay.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163dplhjwxc.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tbwzvfau.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163alhzclbo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fjrjsmcd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163izxivtgg.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163luthulyr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zbrzwcdw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163tjqzklor.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ztirsebi.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163pymeccvd.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163srtsfsys.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163kmqnisnk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mqixjwld.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163wzrwgtug.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163jsdcutxf.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dvzvlitj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hadkyemn.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163qjalprdf.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163awcxpacc.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163tivpxfmm.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163whdtikkk.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163bgvsgfah.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163yinzzcnq.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163pcqgseee.html

Java: u instanceof User
来源：http://www.xuanzx.com/163bfbnwtrq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163mjnpobqf.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ecdrqaes.html

C#:   u is User
来源：http://www.aibaodan.cn/163nylymjwj.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163gekcymmv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163khqoqfcq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163yekrrmap.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163fcupgtga.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163dngchmrv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163vwxkyloi.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163hznbwozm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ohjounqc.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163chrwleeh.html

[G15] 枚举
来源：http://www.sxryk.cn/163vbtoexyz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fovfrplp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163usqoywtc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vjyywvwa.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tyduqgbq.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163udluggns.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163cgbpmgli.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163pxcrsnhh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dlduwfky.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163sugiohro.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cyihiwey.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163wttmlcaq.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163oearrecy.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163srejenql.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163dsuwapoo.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163wpfhhpey.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163scbsqcqt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163cehkjdns.html

================================================================================
来源：http://www.aibaodan.cn/163zdylrfnl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163jcxftbmy.html

================================================================================
来源：http://www.aibaodan.cn/163dzphnnad.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163pfeigalq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xjwbrrwj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163pvsujapd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xegyncmj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163gjxjnicd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163yertwqpp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163fckpkzqg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163saoltxiq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163bxbnmqsh.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163wukpenyn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163offgeeaz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uoprmqiu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kulphcol.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cwcbplax.html


<!-- 参考信息 -->