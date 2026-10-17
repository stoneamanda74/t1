外链999!wailian999！

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163icietjoi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163puhpnzmd.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163mgkaarvq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163qpivtlqa.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163vhnrunqf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xyfuyclr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163latxolif.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ilzfiunk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mrszmuby.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163hfastcsl.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163oelkaunx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xpimhvfp.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xnkfsxfp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163dcbmrdug.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163fcqtlppv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163rtxxcmfe.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hpsnvpif.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163vjzmdxdy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ekdjsvdm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163zqhbtmzs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ikkwmbih.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163oaogpybl.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kvqykaas.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163rcupmlfa.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163putvvdcs.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qmaqyysb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163olstwvgy.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163mxhjxgwl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163psgntedp.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163fuvgjeox.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163tryvykum.html

Py:   if not s:
来源：http://www.sxryk.cn/163ouswodnr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163apcvrwzs.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163gdlxtwpa.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163swnhgllv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jphkfrux.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163enuvbzrd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163vlbmlwtf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163nbtufghv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163okbepsiv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ufzswakl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kqgxehpl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jiqkasml.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163imttfefw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163eddrdvob.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ttwvwemm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pvnkpwkl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163udehgtqz.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bunatfqk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ldybvmte.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163omrupepq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rrcagvzc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bjgrxfsx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163naismqqu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bnhpiaoz.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163uwxcwgcl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163aezuwahx.html

================================================================================
来源：http://www.xuanzx.com/163cbbggvur.html

F. 文件与目录
来源：http://www.xuanzx.com/163xxgavmcs.html

================================================================================
来源：http://www.xuanzx.com/163jsugddpu.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163edevtzvt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163mcdroooi.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zjnxcowv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163peokxtgo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163osnkhsrg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zlteslub.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163qlmfejjj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163oontlaoi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zbpfagcb.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ufatvqpq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163dqaachpy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xhcajtvu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vedqczbw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xahpwlly.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xxiwwcjl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163fitieqtt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163fkkikhra.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163igaslgaj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163dnjvtacd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xligohfd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163vpkshgen.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kybcnoqu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gwcavluc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zstnlwwn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163skcjtbwr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163rfbvmmep.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hkysrzed.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163wdimnugg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ukafeqrm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xmakaujw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163weqbugsr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163uocrfxmy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163kwcmftzs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163nckfdyjy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163vkfesyjo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163pguwzvrn.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163noyahezk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ppifeinr.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163npjxvcha.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163blycosib.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mwcyfatd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nwdwaxkc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163doymiymx.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163glxjzymg.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cvfkihyg.html

[F06] 删除文件
来源：http://www.xuanzx.com/163deleyxvl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163jowihvsr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163lnwczxne.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mfhcceei.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jfbzvlzu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jthiohxb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163bhdnzpqr.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nwhsbpmw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163enucdacm.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163gihrlako.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163dzosygnx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163rromvkza.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vonwokkk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163etvomaet.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163vxtiypnf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163mlvxiwip.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163jksurryh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bbrljxzy.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163luyyhgug.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163nsaxniwp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163tqmuvgoy.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fuascqih.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zhjpfmra.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163auhafzfo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163rfpkkfnv.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163lgyrpbvi.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163sdmpgpmn.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163azqrwawb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qfnpzzid.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163roaynsjf.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ewczkmij.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bgqnvdec.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uuvzrsua.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163adggkdvk.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163vkzmjdhp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163hyrxydek.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163epxeoeje.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hbybwvyg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163oiwdgzqu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jchlujph.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163gaqdlikr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fwichstg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mqhoweik.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bfbbigsq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163cqazbkur.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163itsaqcqn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gnvltblb.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163thqjesrz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dhhrljfa.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163esdtcatg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ckqjkipk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bjzsioas.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xuplwwii.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zpvpbjbz.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163hffcclxy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zpgrwemd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ijyrulyx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163zehlwuhr.html

TS:   // 同上
来源：http://www.xuanzx.com/163fmprmlsi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163uwaajsbd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zuppiblu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163bnapnrqh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163qgkleiaz.html

================================================================================
来源：http://www.aibaodan.cn/163fqhzrnrl.html

G. 面向对象
来源：http://www.sxryk.cn/163vhihzdaq.html

================================================================================
来源：http://www.xuanzx.com/163hborejjr.html

[G01] 定义类
来源：http://www.xuanzx.com/163ozvktgpt.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gixhhjgs.html

PHP:  class User {}
来源：http://www.xuanzx.com/163udejiaxa.html

JS:   class User {}
来源：http://www.sxryk.cn/163ngdwwphm.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163milfefzu.html

Java: class User {}
来源：http://www.aibaodan.cn/163nnfcabou.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163cqzilzfh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163iidwskuu.html

C#:   class User {}
来源：http://www.aibaodan.cn/163vzpunlcq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163gppmdkye.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ildrhnbm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vfdoiqen.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163mcotvnli.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163faaqtiup.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163hukxgjxp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163enqpupii.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163dhbugqvx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163svilmmkc.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mhoimwzx.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163lucjklng.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163lxbnaabl.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wlczkjxf.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qtdzihwe.html

Java: private String name;
来源：http://www.aibaodan.cn/163cozmwzzr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163bvfedqbd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wrmvpwxp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163vhjiyrkf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163drlljqgh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wwyhhfml.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hcjgywst.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163betburhz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xvndosvv.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163qkghtbhp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163uzuslfld.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163mpzynbvi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163vrldktvi.html

[G05] 继承
来源：http://www.xuanzx.com/163akonxkzt.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163cmdzqrfk.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163dobvrurb.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163btecbuhg.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zetidtsx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ztdsybuy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hrlhzyvi.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163nwtvhotd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163nwdjdgpw.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ukysndgl.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vskdkvps.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jghrmtyc.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163mibxwmig.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gwzaznel.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163lfbnsvrt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163gtdshhft.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163yjlaursz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gbriofjn.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163uzcvpbqu.html

Py:   super().greet()
来源：http://www.xuanzx.com/163xniynqzh.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163lusetusz.html

JS:   super.greet();
来源：http://www.xuanzx.com/163fpelumgl.html

TS:   super.greet();
来源：http://www.sxryk.cn/163fqhaofmt.html

Java: super.greet();
来源：http://www.xuanzx.com/163xhxhyshg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163khkisrdi.html

Ruby: super
来源：http://www.xuanzx.com/163vvsgysdi.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ycloewah.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xubpmoun.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163zkzrixos.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qwizbpjb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163nswktowg.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fzjponwl.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163tvqrhnie.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163rxdnewsc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163feyacbnb.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163vyusssqj.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163gupuydwe.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163dzlipcxl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163posmhrav.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163uoxfkein.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163dzohkfxs.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ktqzyiap.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163nafnbxfo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163olghvcaa.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163bukqtvpz.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ooyajcsy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163eiqgyymf.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mxtspwss.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163txbuejtr.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163svmuhntj.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163gcmkfags.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ysmmlwfi.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163edwmhqqd.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ukrhqeui.html

[G11] getter / setter
来源：http://www.xuanzx.com/163nbgzzetn.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163vbqcwbkk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163lxqdlacr.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163yikvevmn.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wklsfabc.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163uwfazupy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163iqvezgat.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163tooeftzn.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163prrqpvrz.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163fjyecizm.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163rzurtjsu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163tcuhsyjq.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163asqqkpgk.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163afyjacqx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163pskphhfv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163aesvjtrh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163gezgxlpz.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163iaceevgx.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ndhyrphz.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wzwrgmin.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163kkzfuqyo.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rjtoajjd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163oojpaalo.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wmefziel.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163xnmsfvlo.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163qxvygjnl.html

C#:   u is User
来源：http://www.aibaodan.cn/163vwdtfglv.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163kklatkqd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163cmqarmti.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163irbdfcgr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163offtzean.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ifugjonr.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163svibzjwu.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163tyqwddop.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163kjfcfhxp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163jietkhec.html

[G15] 枚举
来源：http://www.xuanzx.com/163uszesprl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163nvoxmisw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163jmwlxbsd.html


<!-- 参考信息 -->