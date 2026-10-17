外链999!wailian999！

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xgtilaqp.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163hkxnwzkr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tzqvmctd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cneonwdo.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163kordjnyc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163oykbvsdl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hngcbajg.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163txbghvjc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cdwpotvt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jexacdca.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163mdckvjln.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163bevdkzyv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ghyvkzmg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163kvnhvfpl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hcupsjux.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ollzrtvl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lcvpjore.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163eokzmpsc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163geuiwqwn.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ehwduvot.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163hisobxgp.html

================================================================================
来源：http://www.sxryk.cn/163qpadxcsl.html

F. 文件与目录
来源：http://www.sxryk.cn/163xdcpvuuu.html

================================================================================
来源：http://www.xuanzx.com/163zoucwalx.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163ticxlggj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163uqzhevli.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163xoazofkz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163pacspuje.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163krwrhxwc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aklkshrp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ccgzejbd.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163wvrhgiea.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163marldfak.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ytmgshrn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163eyebddxg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163dyiercte.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cjvzjydz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zmjjdgjw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tjtpcsyx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163scxknuni.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163qtyoyrmn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163rguhxzcy.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163yuvjvahn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163iaoxgnns.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163meedlavo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gvdipgrj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hefrqvxu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163imppfthr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163dymgsuoa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ozslyzmy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ybncihwo.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kxswqriz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163wzgfgbfd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163kxetappg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nfjgotkq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nipfeave.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xhyuenww.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163gxrqyjqf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163rigwsuad.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163demkltrp.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163baxmuoyd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163foofrsgf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163fzmeychy.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nenjeqpj.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gccokugx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vrcxodon.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kapghcuu.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163yagjqrxd.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rojxilzw.html

[F06] 删除文件
来源：http://www.xuanzx.com/163asozupbm.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163vdxpupzw.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163cxsloppb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163egmhxhiz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163sfyqwfed.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jlfmnoze.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163nosujgxd.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163geilmfkg.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wgixlomi.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163rgsaolus.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163iuzbwzqz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163fwtgxbkj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tvdfglol.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tryokzda.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163qkdmqehp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163iaumgdgr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163aydogrvh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163phufgreo.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fhrfpeyn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163dksoxkon.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163eyfkczup.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xstdwiuq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mltpakiy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sbtkgqrl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zwqsdxyf.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163xocibcrp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163wyevcocv.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xgautpew.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zmxahesx.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163iozajjhh.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163prnfcbni.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nlkhyjgl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rrvqkfqp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163bwdcpbvg.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vpxxghji.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ldpavmir.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vdtkshga.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rpylzyvz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163qjusvpus.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mixbejho.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163iixzptis.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163etyebntt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163icbcngps.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163rjynrsii.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163loiosdcq.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163mxiosapi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bzwwnkcz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ehsjagpj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bwuppegv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163isbvbojv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jgbafpwf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ugyqnzmg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gewieagx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163bethsmlc.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163sjrjpgot.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163byataltn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ldjiajnf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rmslitxh.html

TS:   // 同上
来源：http://www.xuanzx.com/163qnupkmud.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163gxpmjcfs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163gqouqpnc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163eibvvuae.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ilildsvr.html

================================================================================
来源：http://www.sxryk.cn/163uevosjrm.html

G. 面向对象
来源：http://www.aibaodan.cn/163ylcwpoah.html

================================================================================
来源：http://www.sxryk.cn/163ctwjpgwt.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lnnsfryt.html

Py:   class User: pass
来源：http://www.sxryk.cn/163bxykclao.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163nscujvpz.html

JS:   class User {}
来源：http://www.xuanzx.com/163sjpajvuv.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163sweilibz.html

Java: class User {}
来源：http://www.sxryk.cn/163bkdesgpl.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163uqgolqlp.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ebophjnf.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kfifjjlj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163vsgfalki.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163lrgcujlc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zhxsphin.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163cngnlgfu.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163gnmshypn.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163pygofqbt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xqonumew.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163twmkhcxm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163qjcjdgkw.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zhgdxnzc.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163nwgmxeub.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163svbpjqze.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ydtlfmmk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mhyspgzc.html

Java: private String name;
来源：http://www.aibaodan.cn/163szfolguk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163raxrgqhm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163uhqtxlmv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163utcgzczq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rbdzcumz.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163jtyykjhn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163xzwnzbit.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163nhcrcqoq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163gotgfvnr.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163viscqetb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vnwougty.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ibypqqog.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163uazjiryg.html

[G05] 继承
来源：http://www.xuanzx.com/163uenervcv.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163dyyxsjns.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jspwqnyx.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ucurhvte.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nsizumyh.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163oosnsgok.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163zlagwxvx.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163szhsmvxk.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163lebfbczt.html

[G06] 重写方法
来源：http://www.sxryk.cn/163kxfouzzi.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163unzfcndb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163kevnqaet.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ndovhqpv.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zzbzbytp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ipppihse.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163fwikttbb.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163nitcfpmi.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jgkkqadm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163npnjgskc.html

Py:   super().greet()
来源：http://www.xuanzx.com/163cxwdbqvv.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ggunyyhh.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nlyhnyjp.html

TS:   super.greet();
来源：http://www.sxryk.cn/163cbtsegag.html

Java: super.greet();
来源：http://www.xuanzx.com/163tsbpzotq.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163myqzhghc.html

Ruby: super
来源：http://www.sxryk.cn/163lopvcacd.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163sownovtq.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vubbuzsh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163bhngyymn.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zucovdne.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163dvvfbxwr.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163gmaoqruo.html

Java: static void f() {}
来源：http://www.xuanzx.com/163otdilxma.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ehwdwlqm.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ykgflcra.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163khcerpby.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163tmtfjhhi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wueldvvj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bsbvqbdb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ckcauuks.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163uyoxllvo.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163edlblbvm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163xmnizfnx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163lbifqupz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163wwlxcmch.html

[G10] 访问控制
来源：http://www.xuanzx.com/163wfnoorqc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163zokqloff.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163bicpvbcb.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163txauvbwp.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163hqzllbtp.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163rwjksvqo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zfxzpjxi.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163mkxghgug.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163wmctwlqo.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bajxccqf.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163sjxnqdvk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qvzgmhtf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163dmpshujb.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163zjrsnpyc.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163tqknlsqg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ezxtczfi.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xcwvxcbt.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163eopibpxt.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163jwkiarfu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163hgplfmfa.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163uqmngufv.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jttljizq.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ytluyrlr.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163fqorqvwy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gzofffpp.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ibgpdyqe.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163rlmelmnp.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163wzfbzwhu.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163zqzsnxms.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163hxbwepbf.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163crvieuil.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163rnqmrqcp.html

Java: u instanceof User
来源：http://www.sxryk.cn/163xdneyqxc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lviumcdj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ejocehda.html

C#:   u is User
来源：http://www.aibaodan.cn/163oywotesr.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ophnkuxd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163appldigt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dkrwhpnv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qfhogldd.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163adxngokl.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163tqmebyvf.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163nvotnijy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163jurcdimc.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163mmuwzlwc.html

[G15] 枚举
来源：http://www.sxryk.cn/163qgfsorrw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hjipmcyc.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ctvlvxdd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ysowgzvt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qdwdwmjo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163hhtizutm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163xwumllcn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163kcfheujb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pfhrbzcp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qxvlygjl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163nwtvgtoo.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163swihjxat.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ymjxqhaa.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tcgxxthr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wwzezaln.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163awxvvtwd.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jecpxwzk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ylfkoudg.html

================================================================================
来源：http://www.xuanzx.com/163czdlgfql.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163hcfzwspx.html

================================================================================
来源：http://www.sxryk.cn/163vmjizphb.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ujxfgpvz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163mddpmcla.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ewmwftbl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qqmmutcs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wastdxfh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163asgqsibq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163kxmlueyy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163wonfuovh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163rgfhayzj.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163szvauweo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163txqkchgu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qdccnvha.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rttfklic.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wowxwxbc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163njdoetww.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fdzvnlcq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163apwkglzl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163xesikkxo.html


<!-- 参考信息 -->