外链999!wailian999！

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163hkbinbdj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163fglvzjvv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nmlsibbc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ncnhvunm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163iawuutut.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163fmsibxjv.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163rbdsovpe.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163aoyhuvvj.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fdxtqedp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163egqkardd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163xnbfpivx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163juoilbbk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fqqnqjxr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lcavtxrv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ubsldton.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ccsinftm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163jpbeqsrd.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163rwyawmhf.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163zwvydwhn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163oefihvvs.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vxykdgir.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fxwoomel.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163utbjbmor.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163cunglkfn.html

Ruby: s.lines
来源：http://www.xuanzx.com/163xlnrvrik.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163wqiholhi.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163fpdjomgb.html

Py:   if not s:
来源：http://www.xuanzx.com/163frqqqmtg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163hstfekbr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163lehwbnmt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163sutqffpk.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163huocamjv.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ojxejctx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163oaltbtbx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163dbmbljsq.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163wxvvvgeg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163trqgysfl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bpswwcfd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163phuaueov.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163sybgcpgf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ymrtrzhb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163zvqvakux.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163nbmggmsl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nrymyvrx.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163uulouxjl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163uoeybgtp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nuqwoske.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yldqjvug.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vxiusafp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163hvvqmanv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163iozlwfwk.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163cjfchmfg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163xoyeohpt.html

================================================================================
来源：http://www.aibaodan.cn/163cadosxvc.html

F. 文件与目录
来源：http://www.xuanzx.com/163iojspdso.html

================================================================================
来源：http://www.aibaodan.cn/163trzrdipb.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vftdqkgi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163mriyaddu.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pvgsuyqs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163bjxlogyn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163egtsibiw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vfgzxzpd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163dvtrxbrv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163authhzcb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163jljesqot.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163lqnerscm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163dgirxoys.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163nkyqwtdv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163thaczbxy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163efsxbjgn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hwevocjt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ovsippzq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rmnlbmle.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163uaikiojb.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163gexyfwcq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163aemlglog.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163hzcepfjf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163smmdpxys.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163dyljfbkr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163mrkquena.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163oubaazlf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163heqwpvld.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ivblmyep.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163rfkjhgqw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163momregjn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163iaaklkwe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163anzjuntf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hjrcpspm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163udjlacub.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163rgkabepu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163hjsbaaxw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dbeuopxt.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163upfgyqqh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163keiiarng.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163rumuznbd.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qfbneiiv.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yfhxeqac.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lgaruzzc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ggrksuok.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163uelntplk.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163klbywbfw.html

[F06] 删除文件
来源：http://www.xuanzx.com/163jncaylho.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163dwfbcwvn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163afhlgpgm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uyljdynz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xegisrwu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ofxzirkm.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163adapvafq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163dpqtuxgf.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163rijjwcds.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163thodilgi.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cukjnkms.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163pugmztjv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nlxsvnew.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vawklmyy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163yrhuijjn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vlpnncad.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163akenyerg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gaujfiyc.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163acuikqba.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163omuyquji.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vrhpopzi.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163haplbhnx.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zmijndda.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vpkhhvwe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163rpovkzsj.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ozjgrtxt.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163rmlfopnr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163velvaczo.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163etfbxdow.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ytgigwam.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jvjnrnsv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bychssjx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rbcthxmk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163zctlkrmj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163yhplxffi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xcvvvjjo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163bwpvvpfu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nvtumubj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163peqrkygp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bguamcwl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163kausxqfk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163oipvrtbi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zalymuht.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163khximtsw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163pyxokpjb.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163fxoiavqs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tguvfbtn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163masvjirw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zfhcpjoo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kuindwjt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163lhbcgxfg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163sngkwjyg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ltgqzepv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163onqzywpm.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163nkjbozot.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vneezfzm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163uinnmdwd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163xgzqzdjf.html

TS:   // 同上
来源：http://www.sxryk.cn/163jfegjuil.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163moewdkeb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163sztmuvmv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163wevfiqxy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163untpxxju.html

================================================================================
来源：http://www.aibaodan.cn/163xxronhjl.html

G. 面向对象
来源：http://www.sxryk.cn/163imecwrjz.html

================================================================================
来源：http://www.xuanzx.com/163tspwxrtq.html

[G01] 定义类
来源：http://www.xuanzx.com/163drlwgnkn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163tsbvigoh.html

PHP:  class User {}
来源：http://www.xuanzx.com/163gebdwcsg.html

JS:   class User {}
来源：http://www.aibaodan.cn/163yfteoysa.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zfrejhmg.html

Java: class User {}
来源：http://www.aibaodan.cn/163vacqbzcc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163gkrvijyk.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fxyewpmt.html

C#:   class User {}
来源：http://www.aibaodan.cn/163eykezwrl.html

[G02] 构造函数
来源：http://www.xuanzx.com/163gpguctkz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163njalxyxo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163zumowntv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163gaqyqpgr.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tojrocac.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163wwimucnj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qmiwkmyn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163tffnvwdh.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hdfqudyj.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163divmnvcl.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163nixvbumr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163wwfoibgj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163tvlgamur.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163hxkxtmak.html

Java: private String name;
来源：http://www.sxryk.cn/163noxtiegu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163nqfiibts.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163xcsihzqb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163omgfquwy.html

[G04] 定义方法
来源：http://www.sxryk.cn/163nclppfam.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163rhywuarw.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gqzawzae.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163icmyrzii.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jieeqrds.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163zaqwpjvv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163iqjoxiyw.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163pnrssgva.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163xwkkjqwk.html

[G05] 继承
来源：http://www.aibaodan.cn/163qulpcqqu.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163juklmdhb.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163vbjzxkbs.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wlrxydpz.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rofhhafl.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ulenzxqp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163bppnyagm.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163eufieewr.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ctbdglsu.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163wdcsufzc.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163vtfcncww.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163yxzgprnt.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163sbhreryl.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163octrztma.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ubkdpxpm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163pfbakmdu.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163uetcvzdi.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163qvgkmwnk.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163voozsbix.html

Py:   super().greet()
来源：http://www.sxryk.cn/163svkroabw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163aorhnqft.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mkbyogng.html

TS:   super.greet();
来源：http://www.xuanzx.com/163tafawhiv.html

Java: super.greet();
来源：http://www.xuanzx.com/163aybyshjr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ojjynutj.html

Ruby: super
来源：http://www.aibaodan.cn/163tbbdbipf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163blznhmdx.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ygchfmxq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kdedakec.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nnzbehbm.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163fzotruab.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163okkftmai.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163gjrinehr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rnbpavpx.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163xbemczzd.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163tfppuifg.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ysvrjcjg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ihicljse.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ehoddbaf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163uqwsegjz.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163vnagkbzh.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163dxtrkdyx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163uxrwjqeq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163xaigtzyo.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163zyeigaec.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hxophvrq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ehikscdq.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ghihwipn.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ssxxrzry.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163vvotjtnl.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163tpdigxdb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163polrsxbh.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163zqkheylh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163tmyznnof.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163pafmxptl.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163vbcsquad.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163urpweyfw.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jlbamumy.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163gfdpxjsp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163twuttjba.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163vhjkmamo.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163nmulhcah.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163npkzosbp.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163iadatcqb.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163pvjetazm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jwyubldn.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163gtwmwpny.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163yspofyeb.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163nobtwner.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163tuarkerf.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163hohoscun.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ltzvzets.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hykgzgif.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163nccuetev.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ymndlqrt.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ogylibfz.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163omiqwyjq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hajydayc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dmfhlgye.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163fritzfuk.html

C#:   u is User
来源：http://www.aibaodan.cn/163yykcegqg.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163qilvobcb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ucpmgpuv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163bgorpqdo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163athiioej.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163xzqajzna.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163evcuyalg.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163xcrvfgwa.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163fktdwhzf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163oaywydoc.html

[G15] 枚举
来源：http://www.xuanzx.com/163nsqlpglp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163tuahnzks.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qgcmhtkh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zkdpbmqf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fhryhwhl.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163yihstixv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163otbselhf.html


<!-- 参考信息 -->