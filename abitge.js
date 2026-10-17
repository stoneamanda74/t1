外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163mjbrxsap.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163plgxaiwa.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wkcjsirw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ydxwbmis.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hmmdtbzo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lbklnbdn.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163tawhbxri.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163powwtghz.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163elwphkit.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163earbqgmr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163esfazihe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bxpexndd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163mfezaelv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163jruzufpt.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xyktcohd.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163wuzkikli.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pxaytxcm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163cchirmrt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ihyscwmn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dfaptdxo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163sqyxfvgo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163hmzazqlt.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163kpxhxekb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163zmlzajrb.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163uocgxekg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163scxopkvl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163kxcdcboz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163glhdseqq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163bfioqozs.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163kqnmbgte.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163jutdjsta.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163rjktdwiu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ndwzonek.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163lwaooimv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xbltseny.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163vmyagsuu.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vmbuscia.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163eslfbvrh.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163epoznafc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ybbspxtz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hncctrfe.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163bbsjhbut.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163bkkrpisd.html

Py:   if not s:
来源：http://www.aibaodan.cn/163alacaado.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163tkulbqab.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ckrhzfuo.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163msyyuylk.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ixjsnacm.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ekpdlxcc.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163pjadszap.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163aeeikeos.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163aptycuqg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ksziapap.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163asabfuwc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zgukrbzz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ymshvpxt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wrntdesj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163ehudbfye.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163kknejetk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163pvwhuzus.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163xjacmwed.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ucasxxtz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jtnbxept.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163orwudmve.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wptibmbb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jqxtihiv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vweumpar.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163psgjmirx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163wygkyvwc.html

================================================================================
来源：http://www.aibaodan.cn/163cbmcphme.html

F. 文件与目录
来源：http://www.sxryk.cn/163ykdhnqir.html

================================================================================
来源：http://www.aibaodan.cn/163cjmazzdb.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163tcndbhsl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163drjkkzdw.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163wmfsbias.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163yftpursi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163guoroqwr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lhkrcbai.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163uxqbtzgu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163oyhtbrky.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lyzfaykh.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163adjnglnf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163knjuwqsg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163beplxnjv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163dcsqxbsf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dzgrjyjo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163icjccfhb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163awrpqnaq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163dwygbreh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163crsikusu.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163pumjivsr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163qqcgpufd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163vgohgrye.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163glndmjui.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jwztwsxk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163svjvjhoi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163havadjvk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163zksdmthy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163adzznact.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163zggmshts.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163szhfmgpl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bbdavbbe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wigsmpru.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oakwifmv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pradglie.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ipdhgyln.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jdovuoro.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163tkborhsk.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xkwvgtdu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163utnzmvvy.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163mkiuevfa.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tejvsgdr.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cpuoufbh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163taglmvwa.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163nccwsmqq.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163gaxmkikn.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163qxgeklqq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163iornasor.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163gcifzhkg.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163sunoowdo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bbjmbbea.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ghzuvgmq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bytqncqr.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kmfsjmqw.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163cfqrcbhq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163vewjlxcq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lktttnkh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163teygbffg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163pybalnvl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163attnbtdg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qydohcxk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163usgrovtb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163rlwgemrt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163exssyynn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wmeibvey.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163yfnayfrc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163emdjlcjp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wbwhplxi.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tkpzxlrw.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xdttxwib.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dpmopfvd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163jmbwkzou.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ftuvsuya.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ogjikstz.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163hwgciwbq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163zyzufzgn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mqyunsfd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163kelngzcz.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wedhouhk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rfjalxso.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fqjrufub.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163fhwdobbr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163plorghap.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163jiwycwkd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163osazhuur.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163rabhemvl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pqjeuvvq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163aitjocep.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163kiabomtu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dalnsxwe.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163aqnrcxlh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qyerqzty.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163lpvwmjvi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gjrqtywz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163szisgypx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pqiulqfp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ejjtcrba.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ryuggeom.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163gduovzrm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163akpmausq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163dminwoga.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wcpkscgx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163yrtefogk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zddwrcen.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163rofrpngi.html

TS:   // 同上
来源：http://www.xuanzx.com/163nlsllewi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163oqlhuxos.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ekeppmnw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hehuucgd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163msmsqqfi.html

================================================================================
来源：http://www.xuanzx.com/163pghkkwyj.html

G. 面向对象
来源：http://www.aibaodan.cn/163qrnlapwb.html

================================================================================
来源：http://www.aibaodan.cn/163gpmbqlus.html

[G01] 定义类
来源：http://www.sxryk.cn/163bpxeszdv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ejbkadme.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zfvjeoid.html

JS:   class User {}
来源：http://www.sxryk.cn/163luachsey.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jenyfbmg.html

Java: class User {}
来源：http://www.xuanzx.com/163gfxvnida.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163xwbaoiqv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163aermuaud.html

C#:   class User {}
来源：http://www.sxryk.cn/163ofwkeenb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ckhzykfk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163xodigqay.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163prbntfab.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163oqulnmuh.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zzjizpfa.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ofvtqlog.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163bvikqpia.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163sltohbik.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163vltwespb.html

[G03] 实例属性
来源：http://www.xuanzx.com/163qbfvfnzn.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163kmcyreun.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163uqnentep.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163jffpvgsp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163fdtzmwgv.html

Java: private String name;
来源：http://www.sxryk.cn/163cxdssgkc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163pelmuvof.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ncahgrph.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jcuovzan.html

[G04] 定义方法
来源：http://www.xuanzx.com/163lautoqnv.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ctqldkoj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163kwgrnpaa.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163daxqnagl.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163dopflftk.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vcfzybme.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163utobcwan.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163rzpbceyo.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163rlgvdyni.html

[G05] 继承
来源：http://www.sxryk.cn/163idzuysvo.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163qolmrtvv.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163wqrckojx.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mvycfdmu.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bxradgje.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163onyuyopq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163kdgxxhsi.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163pvgthjyh.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zpmwpncn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163axxzgbnq.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163bxzgeuqa.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nnewcuob.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wcsorkok.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163kqpqbusn.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163sbfyriap.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jwwktoyc.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163zkrmsfwv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163kiqmbijl.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163mpzqnhaz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163obuohlgw.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ysqqutlt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163smmmamyy.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163vfuzzefe.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nyvdwcxl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163sxwggbnz.html

Ruby: super
来源：http://www.sxryk.cn/163vlsogmbs.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qsxvfqij.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163gfjcylaf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jbzcwutf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163oebkptoj.html

JS:   static f() {}
来源：http://www.xuanzx.com/163gdiykjwl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163mdpnzymr.html

Java: static void f() {}
来源：http://www.xuanzx.com/163bhmttyni.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163wkkljcrn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163hjqbappy.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qljqgiwp.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163qmkjqhhu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163bzjndexm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163cxrhafny.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163devkrntf.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163opdgzzjs.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163bqgcbvuh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xcnllhpm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163amhhgmud.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163srkytirg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163fapiluxe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163fjcmhhey.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163vlxlwtoo.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163utgavupu.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hfsdltuh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163evzweztp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163qzuaxzjh.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163lkmasuxa.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163mtfdmthp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163smvrccsk.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163iklqohjg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163fdcepznp.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163vyoitqjx.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163inrambfl.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163mderheho.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zxflvanp.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ehrogyly.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163ysavvbtj.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163eczhivxm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ygirjyzf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qphbabvf.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163iucwjxri.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163etqqyrwv.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163tcuphpgu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163idobyxix.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zooxdmei.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163niutlubv.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163xtgrzqxe.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ubraadel.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163drtzhlab.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163veghhkkw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163putcoiqp.html

Java: u instanceof User
来源：http://www.xuanzx.com/163dqdxiqmq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fusedyiu.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rkaryfas.html

C#:   u is User
来源：http://www.xuanzx.com/163mmkqgfum.html


<!-- 参考信息 -->