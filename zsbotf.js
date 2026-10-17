外链999!wailian999！

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163rywkjwbw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ardouxqh.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fazwlpdq.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163blvhkoax.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163nokycuhz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qdnmkgzl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163xsstqtvh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163eycfdrsb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qliejgfl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jlbaberm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163okfvcbym.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dfvlhlxe.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yglxgipz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163fouiroyh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163qhliekdd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163pmybccfe.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163lwxmmqgc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163tjwqtphi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pfjwsehi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163flwokfup.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fxkcrifd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jkeufuxw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dfusleic.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163fyuflgrs.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ghpjgtcj.html

================================================================================
来源：http://www.sxryk.cn/163ielcaomy.html

F. 文件与目录
来源：http://www.xuanzx.com/163krnqqvwd.html

================================================================================
来源：http://www.sxryk.cn/163xfepxolr.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fqbgtosb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163inrbrtuk.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163acwxcoat.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ypccimsy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163mqmkzxtg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163sowcmjfp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163mkqsswpo.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fohixieg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nrdzpgxt.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163aalwunwi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163bsqlorld.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163cvwssyiv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qsazxkee.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163buoudyte.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kwkxxszp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163vkelezkr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163wmqigppw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163hsbmxtdp.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163jpmmlkvz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163nzxzkygy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163xiynqzgo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kzmwrbeq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dtpofjqy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163pereampc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163rmduglnl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163wzsyqjam.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tyulmorf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wawqeffp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163iidjvuxu.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163sxeckdnw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xvaajpdo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sabllxkq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163jrrxnent.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ubyidyea.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163reeykkxo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fgtgducz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163njvunjxv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bwtagmul.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163itaploxv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163crsiouyr.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163aybcimxa.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163alvfjhxy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163pvkmcciz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qbnfqssq.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163znojewkk.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163rnsfseqi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163voccoabb.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163gapjksgz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163tscmhcsk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dnmvfkzv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rniqbuzc.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163xlrnetih.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163fryusuaz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163rgqfblqz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163rfltnpgk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163wxhpyemq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163iodcsyow.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163eztxzqut.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163npwhtfkh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163bikjevpx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jffqoxll.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163hpytwaty.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163vbpteajm.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163pacdxkwv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nuthrkbp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163cvflpjiy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163srbpthqn.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rshdjkxu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kyiuoltz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163lxjkvtov.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vujaftyy.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163waqqyxjx.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163lliylmjf.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163vjegforw.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ejcnstzy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wzzfuhgc.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163wcjrhnmw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163opwimuxa.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ppzolmpg.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163qfbfqzhb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163iwlbksqj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163resfwfvr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sfuwptdo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163brlfmhhn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cpnahytm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163psycjqdf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zfuwieos.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163qwxwqabo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wlbigxru.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163nhgqvmjt.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163pqiwbsbn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tkfgiqji.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163cwzzxngh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pjdznhza.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xurxnauv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163vywekwkq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163mihnjetm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pcfcpmcw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163vopqripz.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163eljyemgz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163jclkuqqo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163arjjcwvx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163zflasrry.html

TS:   // 同上
来源：http://www.sxryk.cn/163tdedpylk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qxovqpnn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vujwymof.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ptlyuwef.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wzemrjit.html

================================================================================
来源：http://www.xuanzx.com/163srnrflri.html

G. 面向对象
来源：http://www.aibaodan.cn/163tcmlevbe.html

================================================================================
来源：http://www.aibaodan.cn/163aobgalbl.html

[G01] 定义类
来源：http://www.xuanzx.com/163jhuylhuf.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vcpmfdvw.html

PHP:  class User {}
来源：http://www.xuanzx.com/163saxurgoq.html

JS:   class User {}
来源：http://www.sxryk.cn/163tglolioa.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163klgggcex.html

Java: class User {}
来源：http://www.xuanzx.com/163uvtanfqj.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163omkbhpky.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zabviufz.html

C#:   class User {}
来源：http://www.xuanzx.com/163mvthtwxx.html

[G02] 构造函数
来源：http://www.sxryk.cn/163bcpadgnw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163umkqjcfc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163atdtjvgs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qrujqifv.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163jnceefcf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qlrxxuiu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163maxrvdvl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163scesocld.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cidawdek.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163jjrfodbh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163zrputmjv.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ezdqbzes.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163joafikam.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mjcacgfw.html

Java: private String name;
来源：http://www.aibaodan.cn/163vljaplnw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hoeioahk.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163nycpsmob.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163czujbeyz.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ggbeekzd.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163tpnokdvn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bzxbpvgm.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163qijdmkfj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fffpnbil.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163obdmyray.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fkbkbwsx.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163rhnnukdm.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163yltmhfgl.html

[G05] 继承
来源：http://www.xuanzx.com/163fklhkhrg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163howhyutj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163betbxsfz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163gvmhlehb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163sqvdkegf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163irlfhglz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jnaktjki.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163txydkikw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163dcjvfrjc.html

[G06] 重写方法
来源：http://www.xuanzx.com/163kiqlgpqq.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ritxwjhz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mxrhnxsf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hebloqpf.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ephehaia.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rmmqjboo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rlnmxnhe.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hmoypgyc.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zavxqlrk.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ncrrwdjb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xfedtvpa.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163atufncve.html

JS:   super.greet();
来源：http://www.xuanzx.com/163keijkssx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qhzuosxr.html

Java: super.greet();
来源：http://www.sxryk.cn/163ecapqioc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163bgftrsyt.html

Ruby: super
来源：http://www.sxryk.cn/163tesjnkou.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163bfrrpylc.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vsjqfbmq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163uatkwzed.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163otpaelih.html

JS:   static f() {}
来源：http://www.xuanzx.com/163wugfloql.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163jzrtzjlz.html

Java: static void f() {}
来源：http://www.sxryk.cn/163toqcxbni.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163vzxjdcbm.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163jrezbfwj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163efogujfy.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ulqzkaye.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zdvqjkni.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ognvjmwk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163eafjbefk.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vjraavbg.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163rgvycwuw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163vguzhlti.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163bhgebqxu.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163tbrjiiok.html

[G10] 访问控制
来源：http://www.sxryk.cn/163afnnqeml.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163iejfalln.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163nujwqesw.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163muzlyzhz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163texqdobj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163apvcxasi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163cfjtwnwk.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gnqhstgn.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163imerhfcv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zskitwle.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163mjbqfnch.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qpcqzabu.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163lzspretx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163mguwdvac.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163nxajooms.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163mmgghjqn.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163adpxgtqi.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wnqtpvns.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163juugygvw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163mikxdfio.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163kenopmgn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163gkitvlaq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163imwinzis.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lkzbktmi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163opiaxspu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ldjbpggl.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163xtfzbdcd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163lxdfqsgo.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163tagqdxoq.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163pqvsczgu.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163svncdhvd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163fohkahal.html

Java: u instanceof User
来源：http://www.xuanzx.com/163xucnzwgt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ydikvmog.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wehfzbwh.html

C#:   u is User
来源：http://www.xuanzx.com/163kmccnpgf.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163tenvkdhh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hvkxjeld.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163tixylruc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163azngnpid.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163aeapmcny.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163djuxfspc.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zcldpado.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dhnmgahp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163voqtvysn.html

[G15] 枚举
来源：http://www.xuanzx.com/163sgclmssz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ppcgzgvn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xhglosvw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163dwnmjbps.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163iuyqkwih.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163qbgfzfld.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qughbtlp.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hqmrlncp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ifotijxb.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xlemwhdn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163whelqlom.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xkdvuvgf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163frfadusw.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vsostija.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jwsqwnco.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163kwnjjgml.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163umialfba.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163dhulogru.html

================================================================================
来源：http://www.sxryk.cn/163batexddd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163rfazuzxb.html

================================================================================
来源：http://www.sxryk.cn/163ckhnmkfi.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163wixrgrvy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lkvineyh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163tvfhxjjh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163iggnttsb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163akndxequ.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163kegippuu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ptlyfftt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163kilfnmjd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163hcqogmju.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163spaixkmm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163yzsjzcij.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xrinnzsj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163imzhruiy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hkxpwyvu.html


<!-- 参考信息 -->