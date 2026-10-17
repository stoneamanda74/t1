外链999!wailian999！

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lurmneis.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wfefqwun.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163oiprybyt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163goikcvku.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163gtrwskxd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163gzrlwmtz.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163cmcuwron.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163kddyfdsm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163lklcnzjs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163dlklksau.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rtpdgzup.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nynbdcdt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163sgrscnxb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163mcjynbdz.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ccfbrnnn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163oatdzksr.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163thzomgor.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ktndsgqj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163aarcrhgn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xnsihzfu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jzrmchll.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163vzwwqfau.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163apjtrwoy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163pigyamep.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vjpyyrca.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ndtwjklx.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163vuuwptul.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163virfzksd.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bfumsmzb.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qnkyxkmz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163sebbprql.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vkiqfbqg.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163brcsjlcc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163pomeveqk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163vcbktgei.html

Py:   if not s:
来源：http://www.sxryk.cn/163omtkyivr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wgduwjdf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163mdpsllvu.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tqwhozwg.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163denjpvba.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163yyvyknst.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163yqslicln.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163cdusmhie.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163kugaozgy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163wbdwzegu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gsfbzykx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ebqpjhjq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163magmvmjf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kajifcus.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163yndbiobu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kqdxuqkx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163anwmadfs.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163gsbwkacy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163qlgnkqdt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cpsbugsb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qwuclzok.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163hehbbxvl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163kgihjsoq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xsqixvao.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163tfokhzha.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163soxveybq.html

================================================================================
来源：http://www.aibaodan.cn/163ucuzbmxz.html

F. 文件与目录
来源：http://www.xuanzx.com/163qlwbibwr.html

================================================================================
来源：http://www.sxryk.cn/163qxbqluuz.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gzbtiozq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163xacxlwtr.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163grjzkrdl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vvsvabgs.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163wlfnjseu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wpkabwot.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163frcjwlgj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163kwbpuwrp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163cndascko.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wdudzxpq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bnlooclv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ezwqoouv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163froqudwt.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kwyfshwl.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kiypjqtx.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163fjkstpjh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163llvxupjr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163vumsnywf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zyzfjkfk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163iutqafek.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wdzcbbwi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xlbcndsj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163anjuhcif.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163nemffakc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ozycpfpb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163vcsuacto.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ziddwtos.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163gtohukch.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163zwwwxlwf.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163nyvyvdqj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163drxzwdyo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oejjlyer.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163tsajredy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163guuczufe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163dnwbspek.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163mrummmnm.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163erueoxhq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163kkdvgdhq.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163fnczrevh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bqxnyknt.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dxxcetiw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uwgnutnz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163gyhfzviu.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163dhwctsrp.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xoliqszq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fzilfwll.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163bxxmzovy.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163mdjdxbcy.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gmrbhcxb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zepwgciz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ffrbgntb.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163yonwrxkg.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163gcdfqvip.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163eyfskxbv.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163magqplkw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163gburvgjf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163bqllhlpu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gdfjfmwu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lcwbqcmn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vxljljfq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163dgmstkos.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163lvkosgle.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163yolyxpwm.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hrnzazar.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jufswucw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wwjdolpb.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nkneabvc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163abonfrlc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ttecfmuo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163pfubdbwk.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163cxibnmlh.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163nljrxbev.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163yqpqruwh.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pzvpeguo.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163hwzubyty.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ccjkffyw.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jpyuiwcl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163abhnvyqm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163uxdksdqz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163tcmtxqhk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ddhphmpx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163bjdtruhu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fdvfgmub.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163kusdfbxi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zmvjyubk.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163kbsfxxfm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zqtzdnfc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163wcbntmvt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lswhoacg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163itiyruag.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163hlmyumrd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ookcmosv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163glxfhbap.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tdjpayia.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hjizdnni.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163yrogvwbu.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163awswhedx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mqcqiaqj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163hrbpekfn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163jmepblsh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163orkjjoyw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vmjrztlj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163luqujkrx.html

TS:   // 同上
来源：http://www.xuanzx.com/163trijhwnn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163dtfyabsy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163emlskvtm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163gzhtiqdb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163xjwmlliq.html

================================================================================
来源：http://www.xuanzx.com/163pftwxaga.html

G. 面向对象
来源：http://www.aibaodan.cn/163wkkwvpna.html

================================================================================
来源：http://www.aibaodan.cn/163czbwsrkm.html

[G01] 定义类
来源：http://www.sxryk.cn/163fqldbbox.html

Py:   class User: pass
来源：http://www.sxryk.cn/163fulxgzkz.html

PHP:  class User {}
来源：http://www.xuanzx.com/163vhbkudkg.html

JS:   class User {}
来源：http://www.xuanzx.com/163mqxiacyb.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fjrkulyc.html

Java: class User {}
来源：http://www.aibaodan.cn/163vjsxdstc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163njnkmfaz.html

Ruby: class User; end
来源：http://www.sxryk.cn/163pecywuqe.html

C#:   class User {}
来源：http://www.sxryk.cn/163greqcriu.html

[G02] 构造函数
来源：http://www.sxryk.cn/163nrdxlwqo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163uqqdyjef.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zsljnayp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mpfwzzfx.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163lwxjbsqk.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hxfvovjz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163nzbbyyre.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163adbcqxsu.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163pcactmjl.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ocmdlcyj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ohnmibqm.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163qdbxhcfk.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163glyysztd.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163pkrnqxgm.html

Java: private String name;
来源：http://www.xuanzx.com/163uixaojdp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jgreveiy.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163mxgwfawc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163uwunsbwm.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163punpfndf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ltpycdmv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ijbijvas.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163nvfpjmke.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163oqlrdegp.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163omscyjna.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163aoqxoxvx.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163gfequyxy.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xiygyphv.html

[G05] 继承
来源：http://www.sxryk.cn/163lnbivbsi.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163bvallolt.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mhectmkt.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163vxramhxn.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hsrwhxsz.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wvxqqzxa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xuczgpga.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163udahujmu.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tjbkxghs.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163unnhycrt.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163dexhplha.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tbhxkzfa.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163afbtxvsv.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mkrwqvxe.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163rkhnwzdi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163okfpwseo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163nnivyyxd.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ouigargj.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pdbinslj.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163msscemhy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163yhitteli.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163habyiddt.html

TS:   super.greet();
来源：http://www.xuanzx.com/163odpdgywz.html

Java: super.greet();
来源：http://www.sxryk.cn/163goyqvyrj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vawskyak.html

Ruby: super
来源：http://www.xuanzx.com/163vzfamewk.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kphrggcd.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163pnfweexo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163efmavvcm.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163phfnppjp.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ilmkdamm.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163xysthxdv.html

Java: static void f() {}
来源：http://www.sxryk.cn/163locbkhlz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163djpaxnmf.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163xzbszyzz.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163glepdify.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163xpdbckcz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rchndyqn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163aeqocaas.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163nppykvxy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gsnytnum.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163iqpzezda.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163omprifhz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ylezbvct.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163zcrhnkfo.html

[G10] 访问控制
来源：http://www.sxryk.cn/163sceuxkso.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vgvthgdh.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163nqzvrkio.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163iykahcnz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163cyatmeeo.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163nerslamb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163mhwhnoph.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vxthjcfi.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bxudckqt.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tvmtyaxu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163dgkcyqup.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vuwwxiij.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ogntpnhc.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163mxwcylca.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163duqtdukr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qflmkkzk.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xxjojxrc.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163nogxzwti.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163npsdbeoa.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rtjkdirh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163deersreo.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kzpybkrr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163demxjsug.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xwffxwvh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163euvcbipd.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163skxbymim.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163gsuqfqts.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163avitpcvq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lmcmspgc.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ksyaadbb.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qwuqwjif.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163dtnslzrn.html

Java: u instanceof User
来源：http://www.xuanzx.com/163orhoryyw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163zubuptvr.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163uurzrdqs.html

C#:   u is User
来源：http://www.sxryk.cn/163jxdwvwrc.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mddilouo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163xdmlmbjs.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163pxeuyoyu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mtkrbtyn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vdqkihdw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qxpscqfk.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163xmjrgwkg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163hhnxbjhk.html


<!-- 参考信息 -->