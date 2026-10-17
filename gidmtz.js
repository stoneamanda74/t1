外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163svyhsexi.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163bppjayxm.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hccwtxpw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163evyciozf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vbpzmjjo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163vzzfvdut.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vflmxygg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163chyvbsch.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163hgcjqfjk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ktylznyq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ouradyke.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163gnbvxcqh.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163bbmzridk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gwmqesjz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163segkmkoz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163scighvcc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163qhnmdjel.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163rnfibvrb.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163yiidrznx.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163kyuhaumd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163pivwgchb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163vzfpwoxc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163bhtltqad.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163adlyilcy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163sbghytyx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163yonrxsry.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163aaudrttw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163zseckira.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163eoachydu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163tdcbklcl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163kfucqjcv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163kgphwptv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qnbhekgh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163uvhehztl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ckazvzat.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163mnlfwemu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163uryqgath.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163scxfyyjp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rzuhwinq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163fffvqrks.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bbcmpmzj.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dtlfeipw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163tmyxtjuq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163dmawclql.html

Ruby: s.lines
来源：http://www.sxryk.cn/163oymusumu.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163renkixbg.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ofgeepev.html

Py:   if not s:
来源：http://www.aibaodan.cn/163gmtzcxgu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163bptmsiyt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163nntccewf.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163oiqniqav.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163zffppxmz.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163stphxvby.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tazoqion.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163oaivixbr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163bjjpntww.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xgwcaetp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163endaezbj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mpyrvefz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rebndtjj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lywmxuuf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163zurxwvli.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163piopimsa.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163qzetlnaq.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163nnyxmeog.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ifiyvqrx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lprnybad.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vlznedwe.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163cwjqvrbz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163dhjijjck.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dgrqsxxx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163wbzrjyzh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kmoclita.html

================================================================================
来源：http://www.sxryk.cn/163snxkwlmr.html

F. 文件与目录
来源：http://www.aibaodan.cn/163hjbnzade.html

================================================================================
来源：http://www.sxryk.cn/163jdwwhoww.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163uizgknbe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163yxilamuw.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163onayygzy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zbjyzutk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fxbdlbxu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uvtsxcag.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163cqzdkvon.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163tdzegjgv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qbpaeezb.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163mwgracfd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163vlidtawc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163huqbayyg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xdykhtyd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ywltolxk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163qynojvcq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163zxirlico.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163gjjunvoi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163dshhskzi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xrimqpfc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ggdbubfd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wghrosry.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bylaiyzb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wkkgkkac.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163lfsqoiqm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163nwccuomi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163gfspvtba.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163tcobjisq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163yttemzip.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163cxwhgrsk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163dzdegjqe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163djayqupz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163twuctrza.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163nqjdqegy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163togvinqi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qhlzcpoc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kqfaxgup.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163gtwvftch.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xzrvbjbt.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ksfepdyc.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163awimdhla.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163iffpzamk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cxfqfgcd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163zqszoyux.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163txmalcer.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163adkpvnjy.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163isymxscj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dkdpnykm.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163pppjwdem.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163brojkqiu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kliioicq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wbyncmzm.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163zngfjzcf.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163amowercy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163jiawgdyu.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163qgrbnelp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163gtpzhftc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dkopudcd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qwpkhqgg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dxuaxcdz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qmqogtak.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hnbmsqjo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163osxzwwqr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163crqfmryz.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163izvzuxnt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163qdjgzxck.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pqfhodhj.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ifnaabwy.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jhyfcejq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163xlvyalwm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163pnyrwqnr.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163zkjxvtbs.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ugxlveqp.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163qmsseekd.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rhdxvgpa.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163dverpxcr.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163iitfeeau.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gmqrgatk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dtiyzhtx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rmeynooj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163irbjqvmg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ymkwhvqr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163qknyfaku.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nokcczfv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163zambilyy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kjpnuwnw.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zqfmfqqh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163klmitsmu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zxmefvjc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cbzfwldn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lfzjwgzq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163zlcijxsr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hseunlvx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163uyrbvmbz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163udvxixjy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wgknaebm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163fizgusyt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163oppfegeu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ughoznsm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163kimlioqu.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163njqcnmso.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163bcszzswe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163jxlfurlx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jmzeqaby.html

TS:   // 同上
来源：http://www.xuanzx.com/163ptitgpvv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163jbknyigo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ammbuwcd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163pznhggqo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ldcnlnof.html

================================================================================
来源：http://www.sxryk.cn/163dyfiozgw.html

G. 面向对象
来源：http://www.xuanzx.com/163aqcrkvts.html

================================================================================
来源：http://www.aibaodan.cn/163oohkqphq.html

[G01] 定义类
来源：http://www.xuanzx.com/163htctoebd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bgomhdaj.html

PHP:  class User {}
来源：http://www.xuanzx.com/163qsnepkwl.html

JS:   class User {}
来源：http://www.xuanzx.com/163djlzubqd.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xnfbuxhy.html

Java: class User {}
来源：http://www.aibaodan.cn/163jvtxbprc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163rctdcyxb.html

Ruby: class User; end
来源：http://www.sxryk.cn/163cllaexjx.html

C#:   class User {}
来源：http://www.xuanzx.com/163yapuskxj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163wzxqheos.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gwphfokq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163pkjkdkdn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163tghmbyzd.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163yyhplxjp.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163cefziwve.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jerbgnjc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163sayhnofg.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fsfiyjce.html

[G03] 实例属性
来源：http://www.xuanzx.com/163onvpaenl.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163xwjsovch.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rnubhhjv.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ppdfujjk.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ohwrjkqw.html

Java: private String name;
来源：http://www.xuanzx.com/163smnsjfuo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163dwgeaxfc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163nyyjzrjw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163isucvbir.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ubblwcgh.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163srhdalpx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163tbaygtxs.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vpfjrvvo.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163eqacogjb.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hfclzpal.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163knqjvlbs.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163dgstgekw.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ouoibhsn.html

[G05] 继承
来源：http://www.aibaodan.cn/163imlnntiz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hsbwwgim.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163xybgssdr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rmzrtfue.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fmlqlnuc.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163cfmguzte.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163cfwevgml.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163pzduszey.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163uiloulen.html

[G06] 重写方法
来源：http://www.xuanzx.com/163bjnyuhvh.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163bnsmffyi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xrjjooef.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163mvdrywdw.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163aqkzxzxk.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163siqvfifv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jfpptfqw.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163ygjmzzlm.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163zhhlutjy.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163hwbiamtr.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163vxszjxzq.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163mpakbiiq.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163awfclstq.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163aytijlek.html

Java: super.greet();
来源：http://www.aibaodan.cn/163huhqfefh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163wtrvfxrz.html

Ruby: super
来源：http://www.sxryk.cn/163ehnumucs.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qijimhyj.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163alhtibmb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163dcdhfyib.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tnxoejmx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kqhhzxyv.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163pabhjaem.html

Java: static void f() {}
来源：http://www.xuanzx.com/163djuclahy.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163qxodowxr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163miaidbfb.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163tmcwmanj.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163lqndxcic.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163icggdkyd.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163pxhejour.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163cvwhbnoo.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163lngitdja.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163mlrrcltp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163wlqoddvm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ivtjvtfd.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cnyxyudl.html

[G10] 访问控制
来源：http://www.sxryk.cn/163qljknikj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jmuvuszk.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163shgmjcfq.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ddhkrvkk.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163akarpgwy.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163jazdemjh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lfriauov.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163votraxlh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163vowystgb.html

[G11] getter / setter
来源：http://www.xuanzx.com/163gbjusrzh.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163pjayhyat.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163glhhinix.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163baaisotm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163mmivsezv.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163dadyeptw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ciefdvvq.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163spzkznem.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163cjfajxun.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163wxyczwax.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ckiudxzp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gpzrgibj.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163nowsvrcy.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ctkhgpbv.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ordpaaal.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163rsoyqdpv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163wubhhocv.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163sqpjejjg.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163wpgtreyx.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ubsvfpsw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163fcowqurt.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163vnodkugb.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163wlwhtmzj.html


<!-- 参考信息 -->