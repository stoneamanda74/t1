外链999!wailian999！

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fxweeptk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163tsdkkxhb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163iugbielb.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163dqxwbbcy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163lrqjcste.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163nmbrrnxo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dzpmsqrm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mdefagpl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mfuewzit.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163jqldvphg.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jgbpbhpf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163mufsfibv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163hhlkicsn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163uzouukxs.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xejohtmm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163obsgogpk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163fbhzgrqu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163eqnckymh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163lhsfnbps.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jecgdbnr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163nbttfxeg.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163urystgju.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rindfldi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ivzgwgbs.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vheczttl.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ttslrsbd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163azqtissx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163gsyserqn.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lpcezojk.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163zldyswxn.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ghifpzwz.html

Py:   if not s:
来源：http://www.sxryk.cn/163uyrhomse.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163hvqsywsf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163aelddbgi.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yylndayh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jaqbdthz.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163aadontfv.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163pvuwkuvl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163zgavgpsv.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163oiimbcjx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163cztrhlir.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mflbcnww.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nseinptn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wwrlilxg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bgcwsixp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163qqmmmctu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163rfzmivod.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163itfyvapm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163nglknkfr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ixgiudbt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163thvhbwpq.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pnatslib.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163viodcung.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163pksbdngg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bznvuosj.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163hggstesn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163fmvzesag.html

================================================================================
来源：http://www.sxryk.cn/163iprfggrw.html

F. 文件与目录
来源：http://www.xuanzx.com/163tyevvoeg.html

================================================================================
来源：http://www.xuanzx.com/163benxvxuh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163tmpaejoa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ezybahuf.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zfcmzuxl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163tzfipnyj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163eoupcigy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qazmfqdz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163xdisrsjm.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163isqhckxg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163tlguyfof.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163allavmuc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ivpqbyrk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163jzjhgysd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gvvjhtls.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gygwjywo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rpqxauen.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fyxdxwdr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163gxehxwom.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163bxvpgfjm.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163nvjkjxhx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163jkngdisz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163avnkyuzh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163eksnqzql.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163flqwuxyl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163usgasmnp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163eiqbgeur.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163mfjzvlve.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tddmnanv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163srdbvlsg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163taenabhk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163azwqcdsr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xfjavsii.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gijphelv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163txwbijrg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163wgjrbcll.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163npomawnn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163vuhdzpsz.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163kgvilwsl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163znvleoyy.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163asjsxjyt.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vtfpvbha.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163whplrbkl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vchwwzfp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tcwibufa.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zebyfkcb.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ohderbqo.html

[F06] 删除文件
来源：http://www.sxryk.cn/163uyulytge.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163gznjbddq.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163wgwpoccw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qegddknr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dzskksra.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uuvwcppo.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163fvfxwkfc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163nladzuju.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163eyjjqeky.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163qxvaqoky.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ijtjhzit.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163uqkqggos.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gnqliljx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163eewpvzir.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163qujvxunc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163yjspfsjf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163drvpjhsl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zihcjfft.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ubsrniqj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163qwhafmvo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hdonkfor.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ogbatgtz.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pkofwhwa.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zbavjfsd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ngccqlfj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163xeqpjcrd.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163pckxhsxe.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163hcnrgqzs.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xsgrzegp.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163uhgvpgke.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zwrohulo.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mqimrgvt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qroycork.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qhndxold.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jeamqxai.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163kwfwondn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163leqloyfr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hiwkmqhd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163bnkzazhr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bqiemuok.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163miwqdpdu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163wmemwdfy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163rmxoytcg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163csifhkpy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zegsnlpi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163slfsomyq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163souyyefv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163orniynyf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jzbafcxi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fnmmhbrj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163wcmlboyj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vuatcmjb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hhzqmjxh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hokgtzup.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nsojfezq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163zuhwmhzz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163buqhrfbc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163uhqerthy.html

TS:   // 同上
来源：http://www.sxryk.cn/163qoepdbjl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163grhyaewx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163sirlwcdq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163anhkkkjg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163uquenrye.html

================================================================================
来源：http://www.aibaodan.cn/163wahudirk.html

G. 面向对象
来源：http://www.aibaodan.cn/163hutfrntm.html

================================================================================
来源：http://www.sxryk.cn/163bospxadg.html

[G01] 定义类
来源：http://www.aibaodan.cn/163rxqvxmjg.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tanzaont.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163akzwdvcw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ybnfiuxl.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163eenqaoib.html

Java: class User {}
来源：http://www.xuanzx.com/163okhaeodu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163haumcuzv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163apjmpqdx.html

C#:   class User {}
来源：http://www.aibaodan.cn/163wgvvkmbe.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163cantaebs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163akdzhvdw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uymdstbq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163bymhgqag.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163fxtwlnwd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163izhfyusf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jsykrbkv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wkpazgpg.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cwuujfcl.html

[G03] 实例属性
来源：http://www.sxryk.cn/163xjwxnnqe.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163msbbjscx.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163gtsjmcgc.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163aewqzxef.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163pxbmpyzw.html

Java: private String name;
来源：http://www.xuanzx.com/163dgzeptgw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dniapkrf.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ylrzmytw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163crehpuod.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hjidyhbw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vieqxryn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163drgumqas.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ehzcwigm.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163zsucczrl.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163dfdhicns.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ooprtywp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gyqwttnc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163oivyxfvl.html

[G05] 继承
来源：http://www.sxryk.cn/163srnblpge.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163nmmpqarj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163emsjvgcp.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mixgsipp.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vtmbgsni.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bzotvnnm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163atoieona.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163rpeshwdt.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163izipefmy.html

[G06] 重写方法
来源：http://www.xuanzx.com/163qhzjqkdv.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ekvipcjm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wzkjtnnv.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163oujbmuvy.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hhseacdz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ivohkqnm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163fnxxzqtl.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ydvodtdn.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163izzprgvl.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163jsgcalih.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163icwdqjeh.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163nkmvrjek.html

JS:   super.greet();
来源：http://www.xuanzx.com/163uhfbgbgq.html

TS:   super.greet();
来源：http://www.xuanzx.com/163yfjfycbu.html

Java: super.greet();
来源：http://www.aibaodan.cn/163dyvfuquy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163lzfdoehp.html

Ruby: super
来源：http://www.xuanzx.com/163qftihetw.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163qpfatfoj.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163osnvkibx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163skbqdaju.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163lzxphcol.html

JS:   static f() {}
来源：http://www.sxryk.cn/163sgxlbtap.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163njzmgurn.html

Java: static void f() {}
来源：http://www.xuanzx.com/163vdqbpoon.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163xldfxopv.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ubthgqdn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163xiixxvge.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163muzowure.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zezejsbi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163pxpqzjef.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163grexedar.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163bxojzcxz.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ckorxked.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163kqzhgpce.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163drnltqcy.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163sadlypgu.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ccvmbgkg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163faqkqekl.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ievghkgt.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163gnpsovqo.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ubnhcokc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163vggdaorc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163gtgbebjc.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163dafzqnak.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163kvngdbbq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163euhgdjwr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zbxpkeuz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163qmnndtqw.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163zhingjof.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163muuhyoyd.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163fnszumwu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163wisrhxqj.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163odejwbkv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163grviizma.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163vnxunqbr.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163yrwxrlah.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ogqbrpnc.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163hutszzzu.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163mpechboi.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163lmknwiok.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163xolwtvni.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163yhybzeuo.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163dgdfbzzj.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163rxfiixgy.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mxagunvy.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163nnvtcsmi.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xztevijg.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163rzlcvoqk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rvrkslso.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163wqlngohz.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rvkdkkas.html

C#:   u is User
来源：http://www.xuanzx.com/163srtshnee.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163tzexugsa.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163dejqydfi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163kyhzffoa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163famtbnnn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163klaftail.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163sqgvipik.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163krkhvpyy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pxskrdoz.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163owsjkdne.html

[G15] 枚举
来源：http://www.aibaodan.cn/163lfxxlukk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163jmyxlxcq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163cncbizfw.html


<!-- 参考信息 -->