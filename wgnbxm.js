外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163igwzcjub.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jkvfvlgw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163zferqyph.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qjjfutdi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sgnmgttz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163nrlwrzrd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ayscyowo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163noiqdilb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163fvnyswcu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163yltdeqvr.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163yhrouuet.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163gzxpxtfv.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wglqxkur.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lcyteyft.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163iudjagmc.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163odmbarqc.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xvgypdao.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163gdwgnaqo.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163nrjkitoi.html

Py:   if not s:
来源：http://www.sxryk.cn/163tbsaynvj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kkxknzmi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hrrvafkr.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163zwcqwrym.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163unjzjyva.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163jpkiudzo.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163svbcbepd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163chavhncn.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163puekjifw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ilrsrcfm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kxilegrb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rlpferij.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ltuhnioo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163isjvdtxa.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163vdodvtwk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163colgfzhu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163newuwfjl.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163maslgfva.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163sdnrlakd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163draulhuk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fhugyksp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cagizibu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163gmooebph.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ireijwnb.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fynubejf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163cnszdljb.html

================================================================================
来源：http://www.sxryk.cn/163zrzoiffc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163widrqrac.html

================================================================================
来源：http://www.aibaodan.cn/163oyxrikft.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wposlibf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163sbhtscdq.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163rxhryncs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ugdhsmtk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xebyvvhh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163idyhhzxf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163keeclbuf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163xvaqselk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163wnvdhico.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163smjgeyqn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vrkiwyru.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ztcledmb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kfbkcrcx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zrmrnzoz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vxzkgyig.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163litdnyyc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163sjjfstqo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zznyovpi.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163gogsjumw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163qozcxlzt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163czxfkggt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163whfbtaxm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mtzhymhh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163jzsqqjph.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163gyfqokvk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163esyvftdg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163qkokmwgq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163yqqyndfb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163hetwaefl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xpsjmazb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163varihgtk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163lupnyxmr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163cxewibjp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163awkgyqfu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163reitwehj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163qwqhiyiy.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163axhhyvta.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163dpiescog.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163clhejntp.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ikboqwsf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163logacyvl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lnylsezn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163apfofapz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ghoxkgcn.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ivhbdkhe.html

[F06] 删除文件
来源：http://www.sxryk.cn/163sopnpffo.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163kzicvmmf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163oapmmaoh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zvbwvebt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gvrfhguv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163slrisskq.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vxdzxhgb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bfkwywsl.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163uyelhpii.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163joiktafl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163muqeasmb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163brzxgwiz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gnyberyu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fjsicfik.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163pmmsswik.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ehrnqpfb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163plmxfcqh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ttwdubek.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163sefpfwgr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ghtikpwm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163cutdrkpy.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163iaxciggd.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xuwojiay.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ivnprhfw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zaduovbf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ifzkoqyf.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163zjqouxci.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163requqvkv.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163sthzwpff.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ynpyxxzk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ngtpqrkj.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ccvjjlqn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pzpwinvp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qtawbiyt.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tmvprjmd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163viwwyfte.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163qlgeqqui.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sppqrbir.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163tndursco.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yudwfxfj.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163pnhcyvan.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163iewexgaf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163lfkmczvl.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hvgyjyjp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163usnpzslg.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163tmbdcupu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oecdlvxc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163thiipdlb.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tjazgqoo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ofamumey.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qlangykq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hxlswmqk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bdmzlbtt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163lmxivpdx.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163enhhkblv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163mwxzulgl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163tqcpkyed.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163uiakcucv.html

TS:   // 同上
来源：http://www.aibaodan.cn/163nsgqyzgi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163vejjgexf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163svesgzho.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163nmnrkugi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163sqydqryu.html

================================================================================
来源：http://www.aibaodan.cn/163dyndwfcl.html

G. 面向对象
来源：http://www.aibaodan.cn/163fxwcegoc.html

================================================================================
来源：http://www.aibaodan.cn/163gkwxxkdi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qszswbng.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zjivkian.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163dzpzlfpt.html

JS:   class User {}
来源：http://www.sxryk.cn/163fcwooamr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163cvigjoca.html

Java: class User {}
来源：http://www.aibaodan.cn/163fgubwdtg.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lklrdgeb.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ebuxilvg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163eyynbrli.html

[G02] 构造函数
来源：http://www.xuanzx.com/163uejflkto.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163rtgubxbr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163vhgpafjv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wenvqtko.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163oiaxzcdk.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163cegepsxy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163hhgtmick.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163klknzuvn.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163wkwlpbal.html

[G03] 实例属性
来源：http://www.sxryk.cn/163riszfxsg.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163wbnocrpk.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163eoiadyzu.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163epbkefdi.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163snymwojm.html

Java: private String name;
来源：http://www.aibaodan.cn/163ejklkgky.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vyxpyexm.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ipzcmluk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gyksjdkg.html

[G04] 定义方法
来源：http://www.xuanzx.com/163nxnoslfb.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163lktrwzjt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163edijgozp.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hgxvquhq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xhkbbrrq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163femerkzs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ftvbvslr.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163mdzaghvx.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163tqevcpuh.html

[G05] 继承
来源：http://www.aibaodan.cn/163dxiugops.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wzafebss.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163bapzfjle.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jzxahril.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qiycjeat.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vmlsexao.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163vcqavonj.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163pvoqsyov.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163evvjlifa.html

[G06] 重写方法
来源：http://www.sxryk.cn/163dtzartdk.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163oqhpsaeu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163nmlundzk.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163klkyvyws.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zomujxor.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wulxqujh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163yflfsxaf.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163htrxqwnn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163lwjpgevj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163gaqsyagj.html

Py:   super().greet()
来源：http://www.sxryk.cn/163nfnewgpt.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163qjbvzjiv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163dzviqlmz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163lxtorgoi.html

Java: super.greet();
来源：http://www.aibaodan.cn/163rsqugktv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163whstnecm.html

Ruby: super
来源：http://www.sxryk.cn/163gerruqou.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ruttpwcs.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163bmsbvcro.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163wfbvyvgm.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163yjpcdzhe.html

JS:   static f() {}
来源：http://www.sxryk.cn/163luanvdoe.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nntrhszj.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ridxajya.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163kvxbpzqq.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163thqyencc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163dzmlslgn.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ligndduf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163mgtscfkj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163maadifig.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163zlputlwc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163wcojpnfr.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163voprssgt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fhgalmjn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163emstedwl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163sveneykz.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mvpfqccl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163faamlmci.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163kjypgspn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163kvpwlvhf.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163wmolepgp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hwfnfgtf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163usgfndsc.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163biyfxmfv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rwyojgeb.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bjotzdqy.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163tkdsnsxo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dphmtiey.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163otpockai.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163qovvnynp.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163mxtvvazs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163whmdaxex.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wmadfiak.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163keyrijim.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163xodgdceu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163qeagxzot.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jxmhhmud.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163lqeunjjx.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tpxxyayj.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ghlyjgqe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163kpyhhrmb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163jvocwgps.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ygfnnknu.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163apzubpix.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163zsgikrwr.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jegzhtwg.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qqrscmil.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kncokkws.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zjgievyt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163krztxiwq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163fspiwecq.html

C#:   u is User
来源：http://www.xuanzx.com/163bvkwohsh.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163pbjeawwn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163yabgzsjw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163bmeyffdu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163loanwbft.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163pkoyxxjo.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163nsywgzra.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163bpftyflb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hsnyokil.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163gokbygrb.html

[G15] 枚举
来源：http://www.sxryk.cn/163czeaxpsc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163rviselge.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163knicfbkm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163nozrruyg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163apntamxq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163cprpppno.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163kxkenckn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163fflfdein.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163recqtrri.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163srzdolyd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163gzzwdzpp.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163xeksyjcc.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bijnkrwe.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lzymucno.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163eoskuovh.html


<!-- 参考信息 -->