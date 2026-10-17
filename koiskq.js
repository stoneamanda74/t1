外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163zqjkflup.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163qliweids.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ploqajsl.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ebhslfmn.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ojbiihur.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ypblgmrv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ngpqtlpe.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163gqxoqbtv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163etefvuqq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163cmoemwyr.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kfujukyh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163pirwrxxb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163tjdvjrwk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163nujhewto.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mvasmbzo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nydtgwox.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163lvaoxgfe.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163bjmkmhjw.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163thhrdiwi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163eizceguq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163vvswdkhi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163qpjylocc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163vfhnzwiy.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163afmgffjr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ygooeibq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163hcsfdeip.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163mndsdaux.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tghwxgpr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163cvcdqfxm.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jyjotnzd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zykfmhta.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rvgabmma.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zbvrqomx.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zijseqth.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163sqwklnwm.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163acdxztkf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163pkphhejb.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163nmppzayn.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ygllavei.html

Py:   if not s:
来源：http://www.aibaodan.cn/163vzlazefo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163jernxcba.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ojyzqfyi.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163evycqjus.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163lfmoshie.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163shjclrzh.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ckwxplne.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163pbpfxujy.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163epiawmni.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163lbzagfuz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163rijpabxf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hknxgvql.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nloyzxsl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iglekint.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163wmbynfsg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163datszita.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vgdfmsar.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ckyjkecj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jkizbdur.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fgtabzga.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ledpzeml.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163gtpcfchl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163hnlsxfyv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ahujftwy.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163aglymyif.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163dhwhznhp.html

================================================================================
来源：http://www.aibaodan.cn/163rnrpmqvv.html

F. 文件与目录
来源：http://www.xuanzx.com/163wmdoeeov.html

================================================================================
来源：http://www.xuanzx.com/163bowhrhjy.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163osndeitv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163uhfhmqae.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163dkknisne.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163skwhumbm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163lhplnxwr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iusljhif.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163sqgxicqo.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163yzcfibpf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163sfoziwrf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163dabjsdtk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163bmbniryf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vksfszqr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lpblsnbw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mcmsmrye.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ysrggspn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163iblroamt.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163glgjjrco.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163hfvgxbis.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163uiuekuyl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163exckjlsd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163usfrihkx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gnghdxff.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mrytallr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ftmughbi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163bpnelwzw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163matpxjdv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163mrvqwyxc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ylgykwvs.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163gwxsahpl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163smeyojwq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163aluvprxg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kybnzlwa.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163rqtpefkd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vnjqdouj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163pjgaaxms.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163agidpdsl.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163eebeuwok.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ugjheliq.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163trbebcad.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sxpeqsbg.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nkrwyeem.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wsaiywbu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kjvxqago.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163cfnhqzho.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163kbomvbnb.html

[F06] 删除文件
来源：http://www.sxryk.cn/163bjdmdmpe.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163jttvsrbn.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163vuiysskx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163aqqdqjat.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dqkrldxa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163auskpimu.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163agdezuzj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163gyzkvfsg.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tdjaakpu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163tzuiheon.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dhonjbsb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163bhycjhuh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vifsbpud.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ybqhjwga.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ephzloqg.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163orodnxfg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163wiiluwno.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163anynztfn.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163wbdkuhqd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163njuuubai.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163sgffttlr.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163daeuipdd.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rfwzemdk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hqhndvhe.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163fcpfzedd.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163knmmytzd.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163evssfyac.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gnmoxykj.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163rbjybpmd.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163vxunqtge.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163iiffhtft.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163invwixwu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wzqrzvuw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rhkxqtaz.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163tuhjhihm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jhariaku.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163dxrnytaw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iywdngjt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tsknjpan.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163elaitpzm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ijotqprz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163rpapapni.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163yxypitzk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zkvuroij.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ehptlrza.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163vgvridnz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aqcwrgal.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163yauagsgr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lhvpmtlb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ufpquamp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ctefdsqp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163teaigsaw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xzdsoovr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163emtkiztc.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ajydziap.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163hygnuksi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163pkefmjqb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163fchfduqm.html

TS:   // 同上
来源：http://www.aibaodan.cn/163guosiktt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163lougwzgj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jiimyhnx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163xozogccx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ticqckli.html

================================================================================
来源：http://www.xuanzx.com/163fhkczyyf.html

G. 面向对象
来源：http://www.xuanzx.com/163ckuhzuic.html

================================================================================
来源：http://www.sxryk.cn/163nvtqvame.html

[G01] 定义类
来源：http://www.aibaodan.cn/163mdnwucos.html

Py:   class User: pass
来源：http://www.sxryk.cn/163joohhtqb.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ijgipsie.html

JS:   class User {}
来源：http://www.aibaodan.cn/163cgzeywgy.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163tuheehdt.html

Java: class User {}
来源：http://www.xuanzx.com/163ocnrdwyl.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ghkmcvtz.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163tttieimn.html

C#:   class User {}
来源：http://www.sxryk.cn/163yenpogil.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163lxjvkbkj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dfseemsd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ouvkusdx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163phkauugv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163dswcthxq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163mgfkvvri.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163vanvjxwe.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163swfhomvb.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163cgncdbok.html

[G03] 实例属性
来源：http://www.xuanzx.com/163onmaqhkc.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163fcmaespv.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xhmvkmpi.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163gimxbinm.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163mnjvmptu.html

Java: private String name;
来源：http://www.aibaodan.cn/163lembncfb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163kmvtldso.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163sxyxbfxs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163bgugmrrz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163bxjvgclg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fjsvzdqn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163tdbwbaqi.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kqnlvgfk.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163umbzlrmu.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163rgigohbk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163uryxvakp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163hdwjbrom.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163sfznlndj.html

[G05] 继承
来源：http://www.xuanzx.com/163ymuswtmq.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hzcgipgk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163bxghhubx.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lrbawqgq.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tkbbimtf.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gugtcwuo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163etjqhgls.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163oawmgsxr.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mobireol.html

[G06] 重写方法
来源：http://www.xuanzx.com/163rhlnkebr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163bxowgwsy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cbnyflmi.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163izwqovbw.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gsqakzzf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163shehvkfz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163lvonbodj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163dwzlozmf.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163romkcdcb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163xojwzdna.html

Py:   super().greet()
来源：http://www.sxryk.cn/163vawlszzm.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rvqllagu.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ejmkhcds.html

TS:   super.greet();
来源：http://www.xuanzx.com/163uttdytee.html

Java: super.greet();
来源：http://www.sxryk.cn/163knpsvdfb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163fmmudnev.html

Ruby: super
来源：http://www.aibaodan.cn/163frpfpzny.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163cfosaksq.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163xtvmcgot.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163bvqsnezs.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163fhyzfzjs.html

JS:   static f() {}
来源：http://www.sxryk.cn/163clsxptrv.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ennxgqjw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163asxjkmba.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163dvikldiy.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163pjhcpxuj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163yfjrspww.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163doctkssq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hocfkiyg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163iwyawcfr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163uvnqsmlv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163yofskmfi.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wmimrxdc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qilfkryf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163egxevfkj.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163abmdbygt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163qpjwftpr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163qbizlfjd.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163mposrygm.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ouymheaw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163jbtwvcmx.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163mthofzof.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163xzqegijs.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163lnwvgyen.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163iroqwgqn.html

[G11] getter / setter
来源：http://www.xuanzx.com/163gaoqxmca.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163uxsuxexg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nlxfbxqq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bbqbukma.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163drbyjyai.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zrxaoctj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hxoezich.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dxqzvcgt.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163xkwgnobp.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hfwaszqa.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163qiehqczc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163tkiluxym.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163pubgtyzr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163yvsuooxh.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ygalxqkq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rggutgdg.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163cbeuyliz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163vtesnquq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163gonqukzo.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ngepdhft.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163iujydksx.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163rwfomgae.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lgitpuoh.html

Java: u instanceof User
来源：http://www.sxryk.cn/163nmcbisen.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163dyuapdne.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163utowrhvx.html

C#:   u is User
来源：http://www.aibaodan.cn/163aybwlcaf.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ehppminw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163fmpjgpog.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163vputviyg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163fexnodiw.html


<!-- 参考信息 -->