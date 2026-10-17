外链999!wailian999！

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163idxqwjca.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163knwpaayw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163utdlphrt.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bqzytfcu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163clidrcdp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hwlzoquz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163wgtdsrkf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ddvkxobz.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163vemchzjv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163hwfaqtjt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163omgebfym.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vionsjst.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163givunvew.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163nygucvdp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163dnrtcdsd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163gwtauszz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163rjvwodod.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qwrjtfuv.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163amzzgjlf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163fbrmajnr.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163yvalkszy.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ltdsnnzu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163pewhcmmt.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zlfksogv.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163nacjobma.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163dhxwhjce.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163hlgpjlpd.html

Py:   if not s:
来源：http://www.sxryk.cn/163ofqrykyc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163dcpwiner.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163czensons.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163tffpdssa.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163sjsmenho.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qqgngmxj.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ktrioxil.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bwupqtxd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163yadfkqst.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163jwlzhpyr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163eiidryuj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xowlinyr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163svxhtmbu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yfzkmvar.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163sbqkbhmf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163jjxmyiuw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163psyyzizq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bgzuxkrq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qdmimtnx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163eggepvix.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163suhifbtc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lkyiituc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163dahycodq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163zfenbmpw.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163cfdeadxx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xpxgtklo.html

================================================================================
来源：http://www.xuanzx.com/163hxgcwfez.html

F. 文件与目录
来源：http://www.xuanzx.com/163hoeguvgu.html

================================================================================
来源：http://www.sxryk.cn/163muwqhzhm.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163zmjcodyb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163kwujhdyb.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163odyxchda.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163bpikednf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163imozqcdr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iryjgstt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163cudqdino.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163iyexkzrf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163gyfhuhat.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jteccmqq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rtpcgmfp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163sssnmwzt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163iqiidzbw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163thflhygq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163itwxbszz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163apeeumdb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163jpneoxtm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163optgnmii.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163buijsifm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163bwnxpawj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jnxusuja.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163agymwiji.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bsufbgwa.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163urlroagy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163kzdgtnxw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163vnwrylil.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hnbgaewc.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163uadeddmf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vfijuqur.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163szzlozxf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xvzdvoff.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wxymzcsx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163hvttnoit.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vdrvvwca.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163whyjjezg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rradlejh.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ahnutevz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wymqrswj.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163nazbedxz.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hqktmajn.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fbnfkvfo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163surootau.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ibxkaolo.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163uciwjqxz.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163wwgksftp.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zrpydugk.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fihcwqjs.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xtebikdo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ieahlazp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jjsuaohg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ikypvydb.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163pvxbyzyi.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163lzxatbaq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163cdinvnxk.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163kkawkoah.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163pohpjeqy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jkrikdom.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lzconmsq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163aujplidg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163dhjnbfti.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163eumwmzex.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163esqgsgez.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163mstjifsm.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hcxnbilz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fbzziwfd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163cjkpumel.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nurdgffe.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kydgsdnn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kwdojgre.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mbxohowv.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163osmisyib.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163qsqmpzuo.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163aesfjdgn.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163btkcycog.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ejupbvhq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cialoeqv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163npinlhwr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ygiqbkyg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163dtndwual.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163cekthvid.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163aegmtjlt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163khrancwz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sgwyobkg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bvvzcliv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wdfplaaj.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zauipwls.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163znacrlgt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163yxdteuqe.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xaplhjtt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163jqaqslgf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163hvsglfee.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cylwusaw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163upomrslc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vzavmfsw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nxintzff.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xarfsjzl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163zryksbwz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hfnkjbpi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hxyzhgqz.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163lkgvkpsa.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163anmnwvxw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ynqptchh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163juwwjxtb.html

TS:   // 同上
来源：http://www.aibaodan.cn/163rkmxtbxa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163dzpegptm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163kzvwwbto.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163vdafcsvb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163nokrmpmm.html

================================================================================
来源：http://www.xuanzx.com/163mnmgqair.html

G. 面向对象
来源：http://www.sxryk.cn/163ygozlmts.html

================================================================================
来源：http://www.sxryk.cn/163fcxcqfhb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tzpxdicl.html

Py:   class User: pass
来源：http://www.sxryk.cn/163bgfguyde.html

PHP:  class User {}
来源：http://www.sxryk.cn/163tmywlkmn.html

JS:   class User {}
来源：http://www.xuanzx.com/163zavpyrxb.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163swkjango.html

Java: class User {}
来源：http://www.aibaodan.cn/163rtbvunmy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163cbsulvel.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mspmziie.html

C#:   class User {}
来源：http://www.sxryk.cn/163bvhvidhj.html

[G02] 构造函数
来源：http://www.xuanzx.com/163nxmixrgb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jljoktos.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163trpmydrn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163hxnhcmfq.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163qnozmsxr.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163bqzqxgcc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163pbblyqbr.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163txhiohjr.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163qpjfjynw.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163yfghuqiz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163bxglmdge.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hvobsxdc.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163uashdbti.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163oypchokf.html

Java: private String name;
来源：http://www.aibaodan.cn/163owokardx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163tgtvanpo.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163dkermajv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ysueraet.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163nwewfbxh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ffdntsns.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163wtvrisuk.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163oezvaiar.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163hibmomru.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163riskibok.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163bryorfid.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163otuhwicl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163bciygkzv.html

[G05] 继承
来源：http://www.aibaodan.cn/163mgeaveeo.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163otbddluk.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163fpemnozy.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163egtspukn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nzxnmxwg.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163gnmbbgpy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163kaeoasgc.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163uwbakkfz.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ltqkimdc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163cgzditqv.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163yhhiksdl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uzzqsgws.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163flffhdme.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wmeqkraa.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163incyipys.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hiucjffe.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163zyvrlgnw.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ceoualob.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xabcfauc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163thgtjdrj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ncputdmd.html

JS:   super.greet();
来源：http://www.sxryk.cn/163itojnitc.html

TS:   super.greet();
来源：http://www.sxryk.cn/163anifswof.html

Java: super.greet();
来源：http://www.sxryk.cn/163zeekmpnf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163uhpzonrp.html

Ruby: super
来源：http://www.xuanzx.com/163dpkkbqjl.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163asptgkis.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163atnhnsxs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163rxxengub.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163gpfckxzk.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163wfmerhsb.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163imcsqydm.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163wnmsjkgw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163rweeenmp.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xkjpaytx.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zpuaqqkq.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163symrzyhr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wkwxpnbf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163eomnkzep.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163hwgzycqo.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ijgdynkm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vthlnwth.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fwukfxik.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163onujvoff.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163yyumynsx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163nsfuzlva.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163illpyttw.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163imqwjmip.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163owpqedfy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hudpthbe.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163vxecyjzs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ylpcacwm.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rlgawzko.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163dszlyxuj.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163bydycgab.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ibrnqjbr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163pxpvretv.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wxpucbey.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163mwrxhfiw.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163stucxqes.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163szhhxqgj.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163nhsrnxtn.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163hgpqdqzo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163qbutwhcz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dhypsqzn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ukprsegc.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jnwgyrtr.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mzxtrorp.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163eeutqkip.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163totjslxi.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163pevmadsa.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163zjekyzaf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163dbpikpmp.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mirahjpl.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163nfmlyzbp.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163fztmrqym.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163rngituqj.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163rrlwyoqf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163bechvjkg.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163bimfzyfl.html

C#:   u is User
来源：http://www.sxryk.cn/163jqjtabud.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163msyajsee.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hmcvdvxz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163sygmxrag.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163iadudpkg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163olnwwtoh.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163svfoprbh.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163brkuzbdf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163lcnhkqrr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163llrdbgvy.html

[G15] 枚举
来源：http://www.xuanzx.com/163cdslfpnz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hlyennqn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163loqjffqc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163vrquiuxz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163nohiubpi.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ttrcvkqo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163pqzeqayp.html


<!-- 参考信息 -->