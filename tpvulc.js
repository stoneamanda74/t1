外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163towewwjl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163segfjbla.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cjlarplp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bgvtspkp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zworxklb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163wbcmcdvr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qccqszxc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163lauwkomw.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kdrruosw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jsggerlt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fqgoylgq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nvtbegim.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pfrnqjhx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163fykjkgdx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163uhrkhjws.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163hymujfyh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163sndjqoms.html

================================================================================
来源：http://www.xuanzx.com/163pjtssbkg.html

F. 文件与目录
来源：http://www.sxryk.cn/163jhhdomgq.html

================================================================================
来源：http://www.aibaodan.cn/163pwuochvj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163cwlabgix.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ddeeubfs.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163nyodhvoi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163sxqbwuqm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163oweequnn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zexbdndy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163februpdt.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163fuosvhuc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163iftcwmkk.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163gfipqfix.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163rxneyyay.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tejflfde.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163oojegbce.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gyqrpjfo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jesquwfn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163lovjacsg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xtqmdsdy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163fuougbdd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ibicgnca.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ntqdevjs.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163oxaoljle.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qhxvjwvn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vacznbfs.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163idukboqe.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163npwstrwr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nccunbug.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163wknsbcoi.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163wrwrblrw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163rmskmplv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xychomjt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ywtbtgjy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hakinxqs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163yompyijx.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163emryntlh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163uccbuora.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163nvsneukg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163iycaoors.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163qpypmmcm.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163phdazyqm.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pxttyqlf.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fwsdixxu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cnekcsfg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163imkiejnv.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163nlpurgae.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163exculwpq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163kdwsxxfb.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fmigidia.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163irbcszvv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qvgmqwjv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zghbxnea.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wlzrmvcp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163nznayexq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163qxpbovoq.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bdzzilav.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nlwkbalh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163tcibxvjg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ypyqizek.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163crieapwh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vcbkoykc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bteawfgm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163khqllghx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163sddfhpdy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163agmjepje.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163bmjcfuwt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ymoicvqd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qaxlbxno.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163snfzkcbn.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163caxvoghc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163coyrgjdn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163rjhfbhxu.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163irffgshz.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163iawhpoua.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wcevqlni.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163dxgdtvow.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163hjzgykob.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163puevnsza.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163czfsmtwo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hgjisxcm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163jgqciwyu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163upazdhqp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163rxofchnc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163okwnjkwx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wulsokqy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163haaubzeu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jntnxmdw.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163dscrcjuc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163weihbcis.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163gbfpvnrg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bvupfsmz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163brbxohve.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163pugzwbst.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qlrlosvd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163byhvlugw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ubwftwjq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nhvdgqbu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163cdqfsmfi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163zubsetru.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163egmaedvo.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163bxathnxk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wmbcsdug.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163laqpsmwx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163buzzolra.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163trdmndjg.html

TS:   // 同上
来源：http://www.sxryk.cn/163rkfporbx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163slzvceil.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dxihxfbb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163mynvfsex.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163kwqmyzop.html

================================================================================
来源：http://www.xuanzx.com/163exqcabdb.html

G. 面向对象
来源：http://www.aibaodan.cn/163urjazypg.html

================================================================================
来源：http://www.sxryk.cn/163jgllploy.html

[G01] 定义类
来源：http://www.aibaodan.cn/163vxssrurv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qlrpqmcd.html

PHP:  class User {}
来源：http://www.xuanzx.com/163gfolxivf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rzjvtecv.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163hnixvcqd.html

Java: class User {}
来源：http://www.xuanzx.com/163nthqcflf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163hfwhrixy.html

Ruby: class User; end
来源：http://www.sxryk.cn/163bayhaujn.html

C#:   class User {}
来源：http://www.xuanzx.com/163eyzjlxxw.html

[G02] 构造函数
来源：http://www.sxryk.cn/163evnhxiaf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163jdsmecgb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163aaoyrobd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qqloflgy.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163tipfhsgm.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163iwythshi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163vdrazlto.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163qtaccsji.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163bjcbggcm.html

[G03] 实例属性
来源：http://www.sxryk.cn/163zjcbdgcb.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163diemctwd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163kskimhtd.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vxdyxbxb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163avyeuaus.html

Java: private String name;
来源：http://www.aibaodan.cn/163afobimaz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163zwuboojn.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163jfvjwish.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163erqjpmkl.html

[G04] 定义方法
来源：http://www.xuanzx.com/163wpmajrju.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163wwabrbvn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mxbexpce.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163tbnhidyo.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163nydjkivs.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163trkgnddl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xfxpnljy.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163mjuakxkg.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163nqqyybhc.html

[G05] 继承
来源：http://www.sxryk.cn/163pblhzilf.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163kzyphbzu.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163sjuoymsa.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163svqqukkf.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sserjske.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163kvlgaqxc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163glkodkul.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ipknsbvb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163derlzmmd.html

[G06] 重写方法
来源：http://www.xuanzx.com/163tdsrjmrg.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ckvwxeia.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vcliyyoj.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jjequmbw.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163tklwvpzj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163pokthlxr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163tzmxxzkt.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vjkieelo.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163kwhnsiop.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pvoxpwks.html

Py:   super().greet()
来源：http://www.sxryk.cn/163gebciyep.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ndpstrkg.html

JS:   super.greet();
来源：http://www.xuanzx.com/163kudmfdbq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dwzppgrq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vdvmicnt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ecpllyxw.html

Ruby: super
来源：http://www.sxryk.cn/163zijbauym.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163zlyprybt.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163fizuwqpc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tfbojwgd.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163crgjmbgo.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ioamurwt.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pxfjzdnk.html

Java: static void f() {}
来源：http://www.xuanzx.com/163pnavfdje.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163zglwrpdy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xblgnbud.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163lpjfzmio.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163lbmdbmmz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rfhfrndj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mtlwriis.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163pyatqfsg.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163bycnagkc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ejtchljx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163zccvrcgm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ohlaekbl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vuacnrwe.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hhnlinfj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163qmsrqilc.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163opovuupn.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163lgtrddsd.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163fonkosbh.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163aamrpzxa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163zvgybfzg.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163fvmoxtdz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163umstzxiu.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tyzgeejz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163gwinkbzw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dbdvuuke.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163yfetajss.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163qkhleujl.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163yefonkfn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163tczaecrt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163nusuqbhx.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163rexslxep.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xnnmysxk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163inqihmxn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mizvpmyb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163rtowzkzg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ohnogkps.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163fjdjbetj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163suekoofb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rrfcuvpx.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qusvhipx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ipdzolhn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hcqyjzsm.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163bnnzbziz.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163sjbcimon.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163qzbtnbep.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zoigmozj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dhwvsbml.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163qljskmsm.html

C#:   u is User
来源：http://www.xuanzx.com/163dhgfevui.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163zwgtnbic.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163gbubuvfj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ndkqxpnp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163tvgiogyj.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163zjuqsbtp.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lvnalfpf.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vmysjbtv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163gpnicjfp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ubzkotxo.html

[G15] 枚举
来源：http://www.aibaodan.cn/163twroqcqq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rvjbulhj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163vbxvlaup.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163wigpxkmo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lumimmjj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163rfshdxtq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vcmeuysg.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163dzzwugfm.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ytieszqv.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163uwxjeftu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163aysymqkm.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163paoaadxg.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163wdaxvwqj.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ojikhosf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ioqjldaw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163giccmkub.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163zuerrlwa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163eubnmnkj.html

================================================================================
来源：http://www.sxryk.cn/163xdqydied.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nklssrqj.html

================================================================================
来源：http://www.aibaodan.cn/163auuezngo.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gemrrwuy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163hqsxteez.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jzrwchgt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163pujswgrt.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163fihwisvm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163aaqcbkaz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163svairftf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163onqdapsf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163lcolwtkr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163zmpgnpgo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163unwhkxdu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uyiumvkg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ttkfkxou.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ufpijlqs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kvaikdnz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qqwdshqo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163iwqfdlfe.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vorlpzkj.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163sdkiemsh.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163jslymuon.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ftbsnara.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163plmfwzpn.html


<!-- 参考信息 -->