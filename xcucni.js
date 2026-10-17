外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163geabuegg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163epxocwif.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163zphxepaw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yzomwfme.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xxgilpkp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lekmumvn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163cocwaomn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xxwcumke.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wgurqnei.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zrbvqjnw.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ogcttyyw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163gftaxpch.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vxijssff.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tywavcpp.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163asdpekel.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163kycowbpk.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163kfxhyhsv.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163sftuvzdq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163rcysghfg.html

Py:   if not s:
来源：http://www.sxryk.cn/163atncrudn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vmolrzii.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kjwdofsd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163kmtacomm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163bblgeoic.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163brkyuukl.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163bcsntlos.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163rpsadmel.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ixbgkbpv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163kfusdebn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zuclvfwz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ybdgofho.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163owekichf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163omehmsuc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163kqvtxbrf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163vatfbivs.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163bszklwtd.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ethgwxjs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163tendqflf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163aklenqoz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163tnhztofn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nartbyvo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163opmliqag.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163usojzaud.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163gteofllx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163euoyhlxt.html

================================================================================
来源：http://www.sxryk.cn/163snqwalfq.html

F. 文件与目录
来源：http://www.sxryk.cn/163fflpcnsw.html

================================================================================
来源：http://www.aibaodan.cn/163pejnngtu.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ooiagnxb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163rybtophk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qfeymmvm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163sxwhfgxd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163nvoneqfr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uqfteipp.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163xifggtvv.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163syngxhqp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163yshjvblx.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qjujavav.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ekigpbjw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163toznktes.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gjckkgki.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gsolsqwz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ncdgjbwf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163wyoduazy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163kcphjqat.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163nngphcnr.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163pondxnzu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163tgjxlmev.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163gpntgxvz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jmeyuhyx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wwnskvgg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cccuzgse.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163qffavffd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163lefjuvnk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fvdrksul.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163slorotpk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dozzkeux.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163fifimnrv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163thnlbhmc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xbvcnzne.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ghvntdeg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163iycacuxn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163njtediok.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163rsehfske.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163jlsgiybe.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xknhoumo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163bggshega.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kvombrnf.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kelckeqa.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nxufxkpe.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vbhlldre.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163tybwpvcq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163adhohjbw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163jjajwwun.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163otwgdqjy.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163lhpydves.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zcjrmvdw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lforayno.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fvwdbnri.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163jrlfxnoz.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163vruovbzz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163bqbhejoc.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163islfvsjx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163dednymbh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vghdesqb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rzlcldyb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kqqstfht.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163nrdnziws.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lgrfrbey.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fifdgflb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jhgbipoy.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163akxyzvfo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vvbfwcss.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163zqzspcvw.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jaxwjmyr.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163follesme.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zgkredcz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vefiscfj.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xwyecqvt.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tditpybk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163wxpslxtu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qmsnmbzp.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mifuezhi.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cnrmhefq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hatkaryr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kckdcqjp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163iftulwoo.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163uguwakce.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163gwktxasu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163jteqyxbz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mgiordvp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163rprspwvu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hihyynds.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tujjeemn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163nautbpnx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sdzmxyuj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ipuelfgs.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163hfxgwruf.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163mcljjrxi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163idwbzzje.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163udwpvcma.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qybwxmcs.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ylzzflyu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163hsbgivbk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kqrpkgxr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wkhsppje.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163uwhaqkov.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163zztwkulr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163xtbhlkau.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163dzicorkn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163wzgzkdms.html

TS:   // 同上
来源：http://www.xuanzx.com/163ukcjzniw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163zxjqutsc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kwkgidxh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hlcufitw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163zqxdprbd.html

================================================================================
来源：http://www.aibaodan.cn/163ytlmkvjr.html

G. 面向对象
来源：http://www.xuanzx.com/163frcatnbb.html

================================================================================
来源：http://www.xuanzx.com/163sckzeujq.html

[G01] 定义类
来源：http://www.sxryk.cn/163yozqwmon.html

Py:   class User: pass
来源：http://www.xuanzx.com/163yvnauate.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fshmrnlf.html

JS:   class User {}
来源：http://www.sxryk.cn/163xwjcwrld.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ghkcrtbn.html

Java: class User {}
来源：http://www.aibaodan.cn/163pgsqugpy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163wscuubqx.html

Ruby: class User; end
来源：http://www.xuanzx.com/163sqglnsjb.html

C#:   class User {}
来源：http://www.xuanzx.com/163xkwnsqux.html

[G02] 构造函数
来源：http://www.sxryk.cn/163tshentna.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jjxalgyz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163cefnbixf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163dsrifdha.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ddqebzoi.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ragqxhcu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163tgrzwwej.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163fqxigvyk.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163iygjhopw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163akhsiksh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163tmzwgiwv.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163gwtnrcdq.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163sigguczi.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vqqdabgb.html

Java: private String name;
来源：http://www.aibaodan.cn/163fyfftlxe.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163qayvrkwh.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163pysblicl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163spetvakm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163bruulilr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ukolbmyz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ifhumqqb.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163stitxsee.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fnonlyrb.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163sjeauycs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163boqewgbi.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163feuonmyd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wckspnrl.html

[G05] 继承
来源：http://www.sxryk.cn/163dgfsoijo.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163gobwhtwx.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163bflzuemc.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rokbfied.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163okhyfabw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ttkikpyg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163guhalgmx.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ddhujbow.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163eurtaeji.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wmbcwjbi.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163zcoppjay.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ibclxwbw.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pzpipozp.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163koqqbefn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163thbabmah.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dqrgpgbe.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163mhsvyvnf.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163befshuyd.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163yuzvefff.html

Py:   super().greet()
来源：http://www.sxryk.cn/163enkagkja.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ruxluhnq.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mfnwigey.html

TS:   super.greet();
来源：http://www.xuanzx.com/163xytoqqct.html

Java: super.greet();
来源：http://www.sxryk.cn/163sgyerycy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163qcuzgcar.html

Ruby: super
来源：http://www.sxryk.cn/163dygaisdu.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163tfjvpyro.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163krgjpuym.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ulbjltdk.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rbmeccdv.html

JS:   static f() {}
来源：http://www.sxryk.cn/163hyniyggv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163lghugsue.html

Java: static void f() {}
来源：http://www.xuanzx.com/163zlsktmrn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nefjmgqz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163dbczscvo.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163jijplrve.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rqjucktm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ouysoxir.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zotmbfny.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163juosejhp.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163undpmqtq.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hektsxzl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163edmmginq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xgigfzdc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163fypsfeod.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163koimhhja.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163mgfjxacm.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163zrxbvclx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ultciubj.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nlduljsz.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163bawiqpos.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163bdbsqzxa.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yoltnqep.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ypjciefd.html

[G11] getter / setter
来源：http://www.xuanzx.com/163aycroybv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163faphjrct.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163roomaapp.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163tsetyavi.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163glpwatwo.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163isqenfev.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ezdpwfby.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163udbvudbh.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163mywgzsqy.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163vvsspfjh.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163viqxdtkk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bgfllsij.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163nxmzjqrz.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hsxvzidl.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163mgcrnjiq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163eupuykgu.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163meiqxztu.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163miwpnslp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163nsarxlvb.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hykhomvk.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ezwvfzcv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163pbiiinjl.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163tgcefxpt.html

Java: u instanceof User
来源：http://www.sxryk.cn/163yqphmrgw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163erkdgbvm.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163iikwjead.html

C#:   u is User
来源：http://www.sxryk.cn/163sxqebbsu.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163pyfcpvns.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163fkdnzqqg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163hazondpj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ejcyiwon.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163coulcoyn.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ikkjslnu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163tdmgeifu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163vcjfhluu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dttufbjh.html

[G15] 枚举
来源：http://www.xuanzx.com/163jkaekilm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163lshxwpwv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xenrhatf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163kvtduntu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163naltsheo.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163nbuwjdys.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163rogtnknz.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163rryvhqac.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zbinyayo.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163vonguksh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163tyaoundo.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163sxzvyeko.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dkvtczzf.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qgdenwnc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163oxtqnywq.html


<!-- 参考信息 -->