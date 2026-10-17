外链999!wailian999！

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163mjatgvcb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sgddzqyo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rbndazua.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ehmhomkc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163tojhhoil.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163djxiniry.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163jttoesei.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xeapkwht.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163kvqtxilw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163sbsbhrns.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mtpiznht.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iaiqfdtq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163swtutxgx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163thqhydlb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163qcfwrywb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ggfcfenm.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xbfhitvr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cqtzxikt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163behihtcq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ktvehivl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ogaakbkd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163flejjlgi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163wlrtebjc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vefubstl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vooithlp.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163kykzqdxb.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163izcvahlb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163zwvhichq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hjqravda.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163elupexpc.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163jdvdakbg.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163sngknbby.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vgylaual.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163sukoancp.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163cxgnpmhp.html

Py:   if not s:
来源：http://www.sxryk.cn/163lwrjqczx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163xlpihzzf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163fcrmmmzo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163gxushlhr.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163feirkkcx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xqxakimr.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163pnbakhow.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163kajdnjcx.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163tnysbbua.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163gudxkmsq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163yayaukab.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gvvjakxz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wppkocbw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lysynoqa.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163asyoixau.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163xznrzeos.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163zxspgzfa.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163gonkclpb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ksgtfdmm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yssbqdoa.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zrpasbop.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rqeyappt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ymwowkae.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163rfltuwvi.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163preposbt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gauzzapp.html

================================================================================
来源：http://www.aibaodan.cn/163wrbcksqm.html

F. 文件与目录
来源：http://www.sxryk.cn/163iyjqmhqx.html

================================================================================
来源：http://www.sxryk.cn/163hhbrdgxg.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163acntjpek.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jzqwrgcd.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xlsnosxe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163qsgnsmfb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163zqpxvyio.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pcpjfyrs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163qovuvyzk.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ythxtitb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163wmmkbqev.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ppscccge.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163hzmxermc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163mgabqmus.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163dpbxnqyc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163iccjssja.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qifoexho.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163gzuivvak.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163jfhxuatb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163yhwoixtl.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163blsoucuv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ulzjmzns.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xcolgnnj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163btwzxzpb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163llkmgxdp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163kfhzbdsw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163cmepoecc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ubdtxxym.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163eoxnguom.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163noaaadcq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163rrpcesau.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163udkgnrcn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163htjfiwig.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gkegpbkf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qmmqzvpm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163pelslldm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163iujakpot.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ufhwalnq.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tkujefvh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163jctmwdwu.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163myjazapg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zsirjgbt.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ksludcot.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lemhngfu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163aazqysxw.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ajrbosyd.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163gwonyuee.html

[F06] 删除文件
来源：http://www.sxryk.cn/163qrswtefl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qjvurhyp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xvqaxlrm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163kxpnmpxd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163thvlelry.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nwanyken.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163aksezpjn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163uipsrjfb.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163izdevkib.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163odwyopch.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163kpjnzkgp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163hkryyxef.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163oiuftzsb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163omdcsiph.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qloweodo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163dmmhzofz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163auvvlpfz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163adiroivh.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163dfnotlbn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163pxcpjdsc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163mlnkngkr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dziadsim.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ultxwogl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163eujrjsin.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163hkutwsfl.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qelogneo.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163mdlomjma.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ewraglmn.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163vuvcgslp.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163hqfsfotp.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bswrnipu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yduxranp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wojymzev.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163egvdegyq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xeasyieb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163sutzcgaa.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gidjaufr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dwmpgehn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163yucwtvxm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jmzxdppo.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jduqsdsf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163brhtcari.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163gsfdwgft.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qkoctdea.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ykjshcjm.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163otvxkzfp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tiimpcmp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ctbluirf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163olbtbaer.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dpwmftvq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163kudlcxed.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ujlazyvy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163buvibqcv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163cxykrlwa.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163iehpugou.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163iyrjpilk.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163tvkufcnd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163vzqmcpku.html

TS:   // 同上
来源：http://www.sxryk.cn/163cxpgalfu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wnyjsnmz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163kuskhmbn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163fplpqguv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163rudmycik.html

================================================================================
来源：http://www.aibaodan.cn/163kjfkhcxw.html

G. 面向对象
来源：http://www.aibaodan.cn/163gmfznvcd.html

================================================================================
来源：http://www.sxryk.cn/163kkuwzynl.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wlmaqgky.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163nqaslsfu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fikfkljt.html

JS:   class User {}
来源：http://www.xuanzx.com/163jwxcafcd.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163orvqejtj.html

Java: class User {}
来源：http://www.aibaodan.cn/163mmfhgtsu.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gghtfqcc.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163dowczhma.html

C#:   class User {}
来源：http://www.xuanzx.com/163qmwsieit.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163xqblzqbj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163gghylqkc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163rjuaipck.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163yebcndrv.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163xyggfggq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fpbeycvi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wmxhfbcn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163unywqgca.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ojzzgbqf.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ouiuarjx.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ocuthkyo.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163iinncfwe.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163mabcfisz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ivibvkbi.html

Java: private String name;
来源：http://www.sxryk.cn/163sbxudbzm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163fblnxgyr.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163atobslhl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163mgszjnem.html

[G04] 定义方法
来源：http://www.xuanzx.com/163vndaatao.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hehwlvxq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163veydmfjt.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xgvsjzfk.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163pnmhhcvt.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qydhnnyd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163pvlmxbfe.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163xwcdgrpy.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163uevelynu.html

[G05] 继承
来源：http://www.xuanzx.com/163bmwcfrut.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163eugvjdvh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xdlmveee.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pyralbrk.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qfihxjhw.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gpgtjxva.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163mawckawe.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mocgopkz.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163urkzbrgc.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163jmulxzey.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vndlwvqf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163btanguql.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163swddhpzl.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pvutdgeo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163bjkvbtxa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163hcitzwyx.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kxxtbfxj.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163krrriezq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163fqkwsfki.html

Py:   super().greet()
来源：http://www.sxryk.cn/163azivaqek.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163chyhojlj.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163prezwlfd.html

TS:   super.greet();
来源：http://www.sxryk.cn/163vuhadmsp.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nnwinjny.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163yqyacdts.html

Ruby: super
来源：http://www.sxryk.cn/163zuorckji.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163wewsyvfz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163jwezfifg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163anfgzgtl.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nnxruzzu.html

JS:   static f() {}
来源：http://www.sxryk.cn/163vslbahuw.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163wvmppulh.html

Java: static void f() {}
来源：http://www.sxryk.cn/163okxyluqv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163kiyqbuzl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163sczcqoem.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163cqmnaswf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163enyvxgvk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163csjccsuk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163arbwjfvu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163fgdxivog.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163pqufzyjl.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163gngnqwjs.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qyfqnqcx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ttadkjnu.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163bdmbwisj.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163xwuwrzdu.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vobvvzsx.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ujcymlgj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163scaufvrd.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vizmauum.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163awatnsxi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ruayitdr.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zjijnult.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163mjijyzfo.html

[G11] getter / setter
来源：http://www.sxryk.cn/163weyicqan.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163pmrdlnbc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sdrqlgrt.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163owjneuta.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lpunfaod.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163xksqusbx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163tellznsa.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163mczrgnha.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163hhtfuxyz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gmolamdz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163hjjpkpmc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gppiidax.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163btozirrb.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163dhydxzqd.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163cmhqswxm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jygnjdfw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163zxlmccty.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163oostkeah.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163awnlytlz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163kyhtnxjj.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163wxvavyru.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163owmszinc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163uysymusl.html

Java: u instanceof User
来源：http://www.xuanzx.com/163qleyqcbr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163htajwgdk.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jwemicnu.html

C#:   u is User
来源：http://www.aibaodan.cn/163wsdbicrp.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163agrjveeu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163sfqdftfa.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163mpszumze.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163emcfihfr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163emuurufg.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dueslsnd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163elhxgxzt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163mqsgorwx.html


<!-- 参考信息 -->