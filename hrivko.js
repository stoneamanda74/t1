外链999!wailian999！

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163kicwchdg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dhcwywhd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xcwldkll.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ngsuocwc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163aldxuhrc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163xdvxodzv.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163xpucdhvb.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163yrqcailn.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163abyyflor.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163qfhwcaym.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rxuymbnr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rcdjqbye.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163pulnsypx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163buylvurz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tiljvjqq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zwxhvhcu.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xjaccssb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hrjiqawb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163qdsvtctu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163frlewkaf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jusxbxle.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163uoyvcygp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163rsslpxnh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163xtmzujxy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ngjizpkc.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163mpqyqlqm.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163iqeyleqp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qsmzzvpf.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163eejrsjgd.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163dyxeizqs.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163gfuefmth.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163sgzoxcjx.html

Ruby: s.lines
来源：http://www.xuanzx.com/163nzobwbdm.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163nsmhbfij.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rpdcylhy.html

Py:   if not s:
来源：http://www.xuanzx.com/163twtncker.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163kpmpbcdw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163gobtlvsx.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163krjjtrae.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ojhdlbws.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163bagbuedz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163zshmrfxx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163nsxmoklw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163wccmxxib.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163swbrcoaw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163uhtewtut.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jtcsgxvy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lelutpzq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163irljqyuo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163dsjoketw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ejxhkvdk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163rysrxcxb.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ioximdcf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163cuejgodj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dwhhgkjk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ybuziczm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oloygera.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163txerglne.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ciismavy.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kymywuar.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163cppvelah.html

================================================================================
来源：http://www.xuanzx.com/163tnulkrsm.html

F. 文件与目录
来源：http://www.xuanzx.com/163ihbovcmp.html

================================================================================
来源：http://www.sxryk.cn/163aupjhuij.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ujucwaet.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wrhuuqlj.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163lekjnosu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163jsznmmkr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xhfjpame.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iamhoeji.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163efxihyqy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163mvfvzkhh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163gvxvykdr.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qfbimjwd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163fmlsapxz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163uiruznar.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lxdetyhy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163iqfabolq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fxnqftgt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163pwnbxazv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163bjbjfhcw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163xnqkufyt.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163qydhrxvs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163vcdbmobx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163efrfjfcv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ptakjuqn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dwmptyao.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163klhizfld.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163pwtmjnqc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163reksxqtj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163hhtivjsj.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163mcifkabz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163fqotbzvb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163xffgxtem.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zvkfdgim.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dtndznwc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dpejrjnv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163qlhqcnoo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163byqzjnjq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vrhvsora.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163hyhtsdzc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163egugztgc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163oqcdwope.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163njbzfuok.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ejpmbilh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bjihhiej.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xsmoorqe.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163iacivqok.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163wzlhmwos.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fbkxiodp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163lqkgmgik.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163ejyoldoo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kisjabjb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163sabouqgc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vgneaddk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163mccqwmmn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bvdlbmsr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ldqoqoei.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163jxsefben.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ibrwipyz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163bzwitsvl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163czzjvgae.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pclwlprw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ybiodcjg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zcvgbkas.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163badlggfo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ufddwbwc.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163xenibdri.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163baxdmwbd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163osdgcykk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163edlptrsd.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wuwhrhoo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rgsjcqof.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163myseipcj.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163jahrkqdn.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163nngqcdkd.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zpbkbjhl.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163lsbppboi.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163itaqaakc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ixrjvfup.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nqliohtl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163abohgvzo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163desfeqqb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rbubvele.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163fgotbbmn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163dvtcwcif.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xmtkprwj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163zsseitjk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dfppcqky.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ciqpjmju.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163iqwysozw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163nemzeimx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nmcggckk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163keclggws.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qvtpvyyb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tvdjkkth.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163djdcsdwn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yvdkhqrj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163reevuhoq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163rtyhkgrl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163vpngatpv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hzfiiryj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ejzgbhen.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163mriixuel.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qqgaykpe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163powrkxze.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ixsposmf.html

TS:   // 同上
来源：http://www.xuanzx.com/163levczwkx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163trzfnwli.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163axvwezng.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163kuxriark.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hgmfjija.html

================================================================================
来源：http://www.sxryk.cn/163luedglqg.html

G. 面向对象
来源：http://www.xuanzx.com/163rysfadnz.html

================================================================================
来源：http://www.sxryk.cn/163stzezuzb.html

[G01] 定义类
来源：http://www.xuanzx.com/163flnjwtqx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zwfqgotv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163dsoqizdm.html

JS:   class User {}
来源：http://www.xuanzx.com/163rbybivza.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163xvohbvqt.html

Java: class User {}
来源：http://www.aibaodan.cn/163gaqsdzsg.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163hvllkanx.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ougvzfla.html

C#:   class User {}
来源：http://www.aibaodan.cn/163midogjyu.html

[G02] 构造函数
来源：http://www.sxryk.cn/163mxrqrzgq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163wdysqcqz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ijaezanp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163uccpngqt.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ynlmeift.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163banutahi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163qnxzrcqh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ljfyivtb.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qxgnagqk.html

[G03] 实例属性
来源：http://www.xuanzx.com/163aeiljjxf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163pwegkkdz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ppcyxobv.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163agbfqney.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163iaxlvang.html

Java: private String name;
来源：http://www.xuanzx.com/163xyoqchkj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ixczixnm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163tmbtptwp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163secyhvye.html

[G04] 定义方法
来源：http://www.xuanzx.com/163qwdisgke.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163vdsebkgt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163xewiavjr.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163uuixehem.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163utjpifod.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163iwhlpytc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ijuufeco.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163cmpsyyrp.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163htnzbpea.html

[G05] 继承
来源：http://www.sxryk.cn/163ccjkqmyw.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ocuekcwd.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ilejshit.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ltpyoksm.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xzhtoyyo.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163hergtqvz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163nxvdztfl.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ebbpcbay.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163kivdffyv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163jqsllyrb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163lsufogvz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ndwkipsu.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ffmuwbpa.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ntuubqrn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163qnhpzhll.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163clddbuhq.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163almneqkz.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rsufstww.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163rcfpchnc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163vmluxiyz.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ojjkdppx.html

JS:   super.greet();
来源：http://www.xuanzx.com/163azvalwls.html

TS:   super.greet();
来源：http://www.xuanzx.com/163citrwbsx.html

Java: super.greet();
来源：http://www.aibaodan.cn/163cxbrqktb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kztsfjup.html

Ruby: super
来源：http://www.sxryk.cn/163uuuftobo.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163tkwtmvch.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163qybvxqjh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163kizzcahk.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163uadufhkb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163bhqxbdep.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163wwgrajtg.html

Java: static void f() {}
来源：http://www.sxryk.cn/163yjmxefns.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163wvnwcfhc.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ulhqsllw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163uscayzjq.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163zgbxwgji.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163zarysgpd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hrfiztoy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gahgiyuv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163fljbgpaj.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163coltjkpb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gwfrfruk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163prcktzva.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163flelemux.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ngtygfjc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ojnbtudm.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163iedzqoqj.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163opbrrrny.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ywsmefki.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bybjnoma.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163mmsrgidk.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163tnlgyjlh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xlgzqxhb.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163kztgrtwh.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163rbfbaolu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163osbvhkut.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163rclhdugo.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163unhfpgqn.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vtguvrsv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qkezddou.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gbkycyph.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163jyyjlotq.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163tnzfvczf.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mfbgckyg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ybucrhfm.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mwnuzobw.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163hhlqayiw.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ohtlegwa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163sbyitpdp.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pextjpge.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163begiiyjm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fudsomcd.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163numcgyaq.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163imtesfwp.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wppeeebp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163fgaxzozq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163pwyzffxg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163juiqgywb.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ydvaycwr.html

C#:   u is User
来源：http://www.sxryk.cn/163yvoiemae.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163xzlfdenf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qrkzbpku.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163kbphcfox.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163fqvpeptc.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163tqvfjhvw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163iwazuodf.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163yytxrmbi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163xwwfwrsc.html


<!-- 参考信息 -->