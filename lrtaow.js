外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163jygrqweb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163rrpvtazb.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163szluzxso.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163chnoizio.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163febtgsfn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jmvdwqpj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vkhjeuss.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163wmpdjkag.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ytbbtrgi.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ijwxdgsv.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xletwvcx.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163rvtwvuli.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ulymqbep.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163nnlmamwq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ftpcuyyz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zeohmeqo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163pckhjvnv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163gbvztoag.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163dpnfuqos.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163cglknplv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163wnwgpvsv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163jssxfftj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163flnwtzmw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163wnwcguhz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163prfmqcgj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163bwoahkgy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163sxqkrjeq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ugfbdigs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163bsdmqwgq.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qrlnahrp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jddbjpvv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163wucbrpsv.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ysuqskmn.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163sqzfxlgt.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163mipbbgmf.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163fnfjcucr.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zyubshfl.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163dyltrpgp.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zcektoor.html

Py:   if not s:
来源：http://www.sxryk.cn/163anxknoea.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163phrlyago.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163qrsbhuwd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163zwnzczbo.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163fituauab.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hmsuermk.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163jjwrqlew.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vzcbctgd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163tcsxerlg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163bpwjxopj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163cmufhdjc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uzkphmrv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hszrszab.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kgvtjwne.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163moiaatkp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163rzqqnbbg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163pphdxtiw.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163liuybkjo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163dubzrdxg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rxhxmcbw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163yxodjsey.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gezqrgwr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163fcdshcvi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163pkmdmtcm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jsbvvauz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ioshznpe.html

================================================================================
来源：http://www.sxryk.cn/163efkhadgc.html

F. 文件与目录
来源：http://www.sxryk.cn/163ygublsem.html

================================================================================
来源：http://www.sxryk.cn/163ipeesipq.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163npmkaegn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rywzdkjf.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163mpoamfoj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163fgiuoijq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163uvyegtzi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163eurxfack.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ggnapyds.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ozbxcqqi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163vwdycwnl.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163xmenzvav.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163dlyyzrup.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bgtpedcv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163dtxtimpn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vpcpfnfd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163brznakgg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163cirnoapn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163laqrlpqy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163sfieosaj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163lntbyrmr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163mkmhkldt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163jdafdtrp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pzweyhww.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tcpextqf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ugjptquc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163yxtrzrvx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163npfgdses.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163gongzaai.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163outvdunm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163rsgwyekh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163kivspetm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gsurrult.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163efzvxhjy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163izcviidl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163oxuhezws.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163vnuvnxcd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ozlhfgly.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qwrbkzvl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wtsxmpgo.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163cjhvbvrw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tqoudfxe.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zploimpz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iqfnnwjt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163flljjrsm.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163xrrvhzmb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163saczfdab.html

[F06] 删除文件
来源：http://www.sxryk.cn/163wvpwndnm.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163zdtlhyrb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163krwraiya.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ajrfsfvl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163utvktspe.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yaejbsww.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163flrgjstm.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163advvetjl.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ttfwxuww.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163boypbrlr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163kmeksepx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163etkenlqs.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lwhuuiam.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163leojvhgj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163niqjvdxy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vmtagxif.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ehpzpiby.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163gahlaplv.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163qgzezchm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163esxtbgiy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pasyzmlf.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163isojrfiy.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ubwtkuos.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qddutifr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163nklxmtfa.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bpatbmbx.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163oohhikyg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xxkmfkfe.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163mkcwmjgh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163eojrrbjq.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hghvzxfm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ejgsnlao.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163fpkgmwcu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163sjjpnpqz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163soesoljh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163fwkbucqu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163hplbwgeb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qvmczzxz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163pwmvcroi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163larqtkbn.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163lifcmldj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163sxftnlvf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163gkamjvia.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zrwzucmp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163jgazlcxe.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163spqmzqtg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cypaacmo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163mkwtghst.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zoadwhrd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163utcwvikv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vcmuortm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163pnezyncu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zvzvyfma.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163kehlajve.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163muskkrcl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163auliyqjx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ituyepwt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163liluhrkh.html

TS:   // 同上
来源：http://www.sxryk.cn/163mxzwdedg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xgseywmd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rtlorozi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163mhpvsysq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163khjfhwca.html

================================================================================
来源：http://www.xuanzx.com/163ytrdpois.html

G. 面向对象
来源：http://www.sxryk.cn/163jbzwsvkm.html

================================================================================
来源：http://www.aibaodan.cn/163pbbwmrlt.html

[G01] 定义类
来源：http://www.aibaodan.cn/163yhyuhfnb.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rdtkqssg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163gugddajd.html

JS:   class User {}
来源：http://www.xuanzx.com/163ypotctbb.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jsgkbjwx.html

Java: class User {}
来源：http://www.xuanzx.com/163fjfmghkn.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163mzugpmko.html

Ruby: class User; end
来源：http://www.xuanzx.com/163nazejolk.html

C#:   class User {}
来源：http://www.aibaodan.cn/163lcpbbnnb.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ltxveadx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qzkjwtis.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ocpzpsws.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163hcbsqheg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163lufipkka.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163pdrgvzef.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ekyduhbc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wesqgalg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163lcaijykr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163zigetzfn.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fyoaazet.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163jnslmosa.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qnjdveef.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163oybuafuu.html

Java: private String name;
来源：http://www.aibaodan.cn/163spmiexrt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163eeeflssk.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163rtrmjfho.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tgicrspr.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ropgcsaz.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163xfnbyrox.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xzkoxlkl.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163sdbnllyo.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163pmwjtvtl.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ejscntgi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163datzyivm.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163krodxvdq.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163cbhqezgx.html

[G05] 继承
来源：http://www.sxryk.cn/163uipgymwu.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163hseugpvm.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163gbadnnwu.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qlxwhwyy.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pfanqfwb.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163jjtpjjxw.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163fxxxqmrx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163gsbhmzjt.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163rknoywuz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jadwykwj.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163enhgcwyq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163huzpyvtx.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wtpijdej.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nbvclpxu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jrwctoxk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ohkognpn.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163mdhfbyrp.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163kwvnmjce.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ppejxbwk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ncvrhlzu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163udnfotzk.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jiumfecw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ojxmumfg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vqcvetnt.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163prjxjkma.html

Ruby: super
来源：http://www.aibaodan.cn/163zlrhrxji.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163adhtawxi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163kozauths.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163hkoftnpy.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wlgiikol.html

JS:   static f() {}
来源：http://www.xuanzx.com/163uscbsvgb.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nnxjauyy.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ybbbanlj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163kjnbnrap.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163agsrvkim.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163artdapxf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163qekauomv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163cgmiuhjc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163lmcryyik.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mgtpwlhz.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163geutrxak.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163zrvpltwa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163xtlyxevb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163dswmaxuh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163npymjvpz.html

[G10] 访问控制
来源：http://www.xuanzx.com/163nlwuqxeg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yeqaflso.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xvnvwpvn.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qnkrjrpl.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163zefbkbwy.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163dtaappoo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gnxppukv.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163umjmuyny.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163jsmuwkjb.html

[G11] getter / setter
来源：http://www.sxryk.cn/163lmpbpqft.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ijsvxaou.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lixqexuz.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163irouiilg.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163taryunlm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163vejirham.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163cnhhvaon.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163cpsjrool.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163zqoxmovk.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163dxidajmi.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ktlxhili.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mvnpejpc.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163yazpkxns.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163mjrjywry.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163pjubkoil.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163kfjsbkhq.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xakvklgo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163xipivzqm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163igcmmqlm.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rhgyddbi.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163mazewrgv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vuzkykkt.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163anojuspj.html

Java: u instanceof User
来源：http://www.sxryk.cn/163kwvjvkss.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163kvdrsbwg.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xpisoqeo.html

C#:   u is User
来源：http://www.sxryk.cn/163lcewlxzw.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163hbpxqwif.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hnxbqqrx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163liyzylom.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ljkwkljk.html


<!-- 参考信息 -->