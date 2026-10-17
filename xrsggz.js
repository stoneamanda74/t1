外链999!wailian999！

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163koiaovfj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163fqxojoyy.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163recfsqmd.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163zlelbjyo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163jwfpfaif.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163edskftfc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cojlzfqo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163uschfdbw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163epbudoem.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163udnmbdlc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163imxmljoq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163suutkpqx.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163rkpgzgdb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163niyiiudw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ynzonfhu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fzsyfltm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qtupcotw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163pncilxui.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163svhsbwlm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163vdbzoxel.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163xgdcmnmh.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qaebzpvv.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ynjjiydk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xidzmqff.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bfgjxkrv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ebkehoxy.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kkwpmzag.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163jcexzeuk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ibhjifrv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163cibhfnua.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163pqhrxruy.html

Py:   if not s:
来源：http://www.sxryk.cn/163phcwdpma.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163cjjzhvwg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163cprfafnd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163eywtmeie.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wnfxglkk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163mvunylfw.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qmcojypq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vidpwakn.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163zwrmxyoh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163knspwzat.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163yxbcmowz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163taqmddwz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qlabopco.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pktmrilr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ujnagrct.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163hktqzbco.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163emmprigf.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163yufunpav.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jcgsxajd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rkishtwn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163toglirrp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163juzzvfus.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ktlwbfqa.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ipzpiaxl.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kmlxkomz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zlcgloza.html

================================================================================
来源：http://www.sxryk.cn/163jfktpjid.html

F. 文件与目录
来源：http://www.sxryk.cn/163jfbcfvkv.html

================================================================================
来源：http://www.xuanzx.com/163dsmsafsz.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163zghmypik.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163qygqyklx.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ynejrtjo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163iqyjstlp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xbokotqo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tnuyzxuz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dglqxtgy.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163sjayirrp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163agtdufbi.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163whxverwm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163qiwsydtb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163czmuckcx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zpwgbqsc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cckltzml.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163bzacllqc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163raqiqfbq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ghdvicwl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163alpkhfrb.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163dzusyqol.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163mdojbyel.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163tsabulfp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vptrjsuj.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gullqbde.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fjricamr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mhxbfncx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163pqioohfn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163kjuqazux.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163xhjeknsx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163oqqeoeqs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163nyxobjpn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163iasobtvx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sfyalzrw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163tjeyooib.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ppwpbhop.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hcabwbux.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163birnbhic.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ajpomysb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163nklewkpr.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163illhbnkj.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nuattmxr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ismobfip.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163guqbsvqq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163nljpvscj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qwcctkva.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163cthxemee.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163gvvvvwps.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163olkwuvqb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163grhdvhyt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ekarcsfj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hpvptugb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nqdbregn.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ebdwmasd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ajscpjnw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163smsbfjlt.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163chmczczc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ymxggecf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163jjwywhrm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jknpxbxn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cmtlshtp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qzyxqjrz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bikoahvn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163rdmgkpcw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163kkqqipyl.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163leierkwz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163yghtzari.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163wfownajp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hzqllmqc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163punxfszv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ralktifg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163etwtuonn.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qwitknzt.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mjisoemw.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ksffmtzd.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zjenryyi.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163wurmncwp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163akecsqnp.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163egurqynx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vyefcyvq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163kgwocacr.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163akjogsou.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163uyfrlgus.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163yrsaoufj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nzsbuzie.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vvtxoigl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nwydehwb.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163voekwvmn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163iqcjfitf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163rezwjqur.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cllkmnsr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163jhmjmkqp.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163alesaazo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qaynkevp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163xycsspnt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xzeirtmy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sqgsplss.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163xniqtvte.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163elqizrjb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163npkbltay.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ezseaxoc.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163bpfrrakh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163hpxsmfch.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163gtvltmqw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ohllwcxw.html

TS:   // 同上
来源：http://www.sxryk.cn/163ushspphu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163eyapjtbh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163qjamnkhr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163tcvzdgrv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163istpohsj.html

================================================================================
来源：http://www.aibaodan.cn/163zmdexyus.html

G. 面向对象
来源：http://www.xuanzx.com/163ucyuheqx.html

================================================================================
来源：http://www.aibaodan.cn/163yemqlbal.html

[G01] 定义类
来源：http://www.sxryk.cn/163tmvqcgul.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hdndymuc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163bmvvkppm.html

JS:   class User {}
来源：http://www.xuanzx.com/163ykteimlm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163yrtfldkc.html

Java: class User {}
来源：http://www.xuanzx.com/163maeecfcn.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jroookat.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163umuxqrap.html

C#:   class User {}
来源：http://www.xuanzx.com/163gjgktyji.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ymoqngec.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fhgwbprc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vdgbbvgk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163voarvjsk.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163guwkhdea.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hucxvvdq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163kcbybngz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bxkgzszq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163kensqhki.html

[G03] 实例属性
来源：http://www.sxryk.cn/163kfwdoslk.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163rkvwbtuc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163shwriwgs.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163srftsqtr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163htwyhsut.html

Java: private String name;
来源：http://www.aibaodan.cn/163nziwolcm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163iycwoiur.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163cmdmjbar.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pgnyswla.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163gqwhqwkq.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163galpahuo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ozuwqore.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163otbqknih.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163pcbcvnsg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qukflple.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163azxmeblx.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163dhmxvgod.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163nybqtemt.html

[G05] 继承
来源：http://www.sxryk.cn/163iuhjciuy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163wozetfbb.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jsbviliq.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ijwfuutd.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jxbbhmzf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ltvwpirk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163yzzbphyl.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bwgfwjqn.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ptodkfma.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ccpppkoq.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163isprktxb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163linillhn.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163vgpnxeyj.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dckspgfq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163bcdcrnqw.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163kppeghwk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163pyokrmfu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163suprcsek.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tdxqagbn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ujcunywm.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xfodcwuy.html

JS:   super.greet();
来源：http://www.sxryk.cn/163pkjkcalc.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163flhtoprh.html

Java: super.greet();
来源：http://www.xuanzx.com/163vrlfhvka.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163szfhzffg.html

Ruby: super
来源：http://www.xuanzx.com/163ljuyqsaf.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163koeqloin.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163nrmjzuln.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tueymrwj.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163mpxtdwff.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163czobnovo.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163hpewmijm.html

Java: static void f() {}
来源：http://www.sxryk.cn/163rzndzexr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163sbytijoa.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163xbxwbqkj.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rjuulypn.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163iliujowp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xpmeqshq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ktobhlkd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163zjunfwma.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fyzqzmek.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163mddpktks.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163dsraewak.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163uptpelcv.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xephufep.html

[G10] 访问控制
来源：http://www.sxryk.cn/163yrclwjol.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yrwrwdrr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ziojnsus.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163iwjyidpx.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163scctunuv.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163mrgbsita.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163flgtvqrk.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163bdnrxiiu.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163tyqavrbx.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163zlsodunk.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tzszjxtj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xxzflpxm.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bxvvuzne.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163oyuzengh.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163upskkctx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hrmpphaz.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ievacadt.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163pehnvdro.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163yazjosqj.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163xqwbpzax.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163psnromdz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163dxhenawm.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163snmspbwk.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163dlbujunf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163jjefcsme.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163bugodyia.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163nlxzzras.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ykaezfdc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ydbtzonn.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163heropygz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mbmoaimt.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163fukcafmq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163omtlgofd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163cirqhbhi.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163iurpiyoe.html

C#:   u is User
来源：http://www.xuanzx.com/163vqhlxwjf.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163dcdaoxlh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mlsejjap.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163jqjntkaz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163tzkehosa.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163xfaaqekg.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163gddyiham.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163dynmdcbk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jztzbuzp.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163jhmigqcj.html

[G15] 枚举
来源：http://www.sxryk.cn/163mzvvikon.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163jskwcmun.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163egdrpugu.html


<!-- 参考信息 -->