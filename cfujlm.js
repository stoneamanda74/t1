外链999!wailian999！

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163cfasfwaw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163semovwnj.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163prgjejcb.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163bmhaikzr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ilxeztrc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163xujzyzvr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163oawkuwtg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gjgjgcyl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163yhhkrgar.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163umtcahmh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ixgypwqs.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163eljkmypy.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163hyykplme.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ibnlnluy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163aqtsexhv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163trermwyf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jauctafp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163nieetjmw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163yxowsmci.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163ceulvwjw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ffcgxeif.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163bclvwvqc.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163szoiqity.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163uiyajkkw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dsqkplay.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163cbtwuqxb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kfhuwvlh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163iqfniwyi.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163laetsksp.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163bvutqemf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163fyqhrxno.html

Py:   if not s:
来源：http://www.xuanzx.com/163oehlrvji.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163yyuuicin.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163nzgrwbmq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163lzikqsww.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xojdqcrw.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163glahvqij.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163hduolwam.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163neouvujx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163lnbfikla.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163dlvgyzdd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163dwcgiakg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163faqwatll.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lfpvfiwr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163otfyqptr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ppjfbecu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163wtfqbujj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163jyuxoptt.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163tljefvko.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ukmubxov.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ogzzfubf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hgexntgb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ddwmnryd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rjfyrvmq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163jtfjavii.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163hmyaxdzj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163strgsdcg.html

================================================================================
来源：http://www.aibaodan.cn/163ywxztjea.html

F. 文件与目录
来源：http://www.xuanzx.com/163kvrmrxqu.html

================================================================================
来源：http://www.sxryk.cn/163qbpszqfv.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163wwornmci.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163fvjoqssu.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163mbkgcrbg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ihqspefu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163skoqttnw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jgldechz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163imzixura.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wgaembec.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163devrbavg.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163yxzgarca.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163eairklrg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163pjklrxhd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jdbzyocs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jybzgdgw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163foarwzso.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163zgctrpzj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163adfhghbb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163sdfbvlcr.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zeoikkmf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ukvllcob.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nlummmwe.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163msryyhfw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yowwacuv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163egmvxlby.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163upqxzdsn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163pvkciglm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163okdphocz.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163dnywhjti.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163geevkmxv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163sljhdnln.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pymxtoeh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hmofnrnn.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163bgycwawn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163baukterc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163djjcdfmp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ciydsnpl.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163jpgytyky.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163bnmwflyb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jabnlpyw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kmmqwguw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bgmawkwh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163izhfjhay.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163omvfbewt.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dwrtktvf.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163zjzkclpj.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163optybqln.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163dvvfjcwo.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163vmtygrpu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pykqlgde.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gkuzimkw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ltvvsgzb.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tewpqxjk.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ssfaqgio.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163lpnaokti.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163litkipkb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163fsblethn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163arwsrrht.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163meufvrey.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xvrkadkg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ctpoifmp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bljfudrw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163rljzvqdy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ptskkxnj.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163tebhqdia.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163udmyziqc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163noedxsgq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163sckqluzf.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kldqzknz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pyrrauao.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163lubgarsh.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163nacrdrnj.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ghkyujll.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lmbesmrj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kvpxjyfe.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163mnnnkbma.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tifvolbl.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163aqhawoxq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zabelrrm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ibgkqevd.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163opurbley.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163abeojqkd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163twtfoaxh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wzyacesw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163bquupqmf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pclioytm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163lycmeeou.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wwajdfqz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ymjdcbep.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zonozfpg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163piwjzlrt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163denegqbt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gvsdagkr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163oschomxs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qoqprwzq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kbqbjbts.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163hyrkaimp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qhbuljib.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kdqxzwhb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jaidrues.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dhiwclzh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qhrvrrii.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163kygcaynu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163xhzzqqmd.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ygffolto.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163usagbhrf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163pqhyaegu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163tasohqfk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163bcmoqqwh.html

================================================================================
来源：http://www.sxryk.cn/163wunblrbb.html

G. 面向对象
来源：http://www.sxryk.cn/163xdcenyvk.html

================================================================================
来源：http://www.xuanzx.com/163anwrhvli.html

[G01] 定义类
来源：http://www.xuanzx.com/163hoaqjerx.html

Py:   class User: pass
来源：http://www.sxryk.cn/163xetrbzzj.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163armgzdig.html

JS:   class User {}
来源：http://www.xuanzx.com/163ucmckdtc.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163tofrosbn.html

Java: class User {}
来源：http://www.xuanzx.com/163xalropba.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163mknzslgv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fpxenolg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jjjpufkz.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ryppphks.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163synudvst.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163blijizcz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xmhgxrzr.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163gujkbyhr.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163wfbybdal.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pascnyzb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rfpvbyci.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163wbdguabi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163svaxcjxj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163lxyaznmc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163qlbshite.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ousawiiq.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163zubxdike.html

Java: private String name;
来源：http://www.aibaodan.cn/163yutmubsy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163kddraump.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163drzjncsf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163qvgfqqkc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wjbzjhdz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163kefyftmf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163dwcmfqqy.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163jlasblem.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163pubdqrxt.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163aptaxdhb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163keytisvu.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163pgwcuqww.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ggrhddlb.html

[G05] 继承
来源：http://www.aibaodan.cn/163ntzmhxkr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163bibqmhnq.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163odwxdcbx.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163lbqzsrex.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163oypwgcrc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163walzvbjv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ivllmkkq.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163czroxota.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ilkowkmv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163auhjulhm.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wxujnuou.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jwjoxthf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163aarswvqn.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163erotyguv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mqosgjol.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wwlvatxk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163loviweog.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163kdorfhsk.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163iobkchmc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163idcljhrc.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163dlqiknsj.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163qzintkjt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163fnaakkrw.html

Java: super.greet();
来源：http://www.sxryk.cn/163ikviqzin.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163rpgcjfch.html

Ruby: super
来源：http://www.sxryk.cn/163affxfjgf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pcxysvvf.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163fczzfvnq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163znjajiec.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163udeoyebg.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lvmcudha.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163sasgohdu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163wifqsgtx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163cngexama.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163kcrwlfze.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zcencxxs.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163paxvchvc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jutmgsds.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163vtttmprk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xcdhncki.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163hqkanlwm.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ealdnukx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163akzdborl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163mqmxsdoi.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163zshdifkw.html

[G10] 访问控制
来源：http://www.xuanzx.com/163weeekqvs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163fkeeymkn.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163faxkcavv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163cpglarex.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163idpkowtg.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163jjixddou.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163guabhssl.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163txrbginq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163uszouvdx.html

[G11] getter / setter
来源：http://www.xuanzx.com/163yeuaoxuq.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ijfsutbd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tyscvogk.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zheepybb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fjfbdoni.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163rkergdha.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163yqnydohi.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163bydolgbs.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163oflllmhu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163tlqlvzxp.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163bxgcmuss.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163twqdvvfu.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163cpkcfzuw.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163dwfzffhf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ijqhkplp.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163npkynwwv.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163htwhgfvd.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163hnqkagyd.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163velykdhh.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163gdmhxsgo.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163jvqzvrmx.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163pefvmxgq.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163dlniyjnp.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tmkrpcie.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163boajkzyv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163musnjohs.html

C#:   u is User
来源：http://www.sxryk.cn/163yzbljpub.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163jbrsldws.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163wbgsrowr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163izflialu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163bziijlaq.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163epndwkzb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163bxbkmvak.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163htaarnac.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163gzrngalr.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163bexdioft.html

[G15] 枚举
来源：http://www.sxryk.cn/163tcmzscxv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163jtzsssem.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163mlorfqmz.html


<!-- 参考信息 -->