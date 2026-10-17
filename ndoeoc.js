外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163shhitdty.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163kzulywdp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163enybeayq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163bxiqhjly.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163iibwlkun.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ggclvxzz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163kpvumpak.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163jbckbgjn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163uhawffwg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163jombhhvd.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163bjyqlgsb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163gcenqjwd.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zxkmifkg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ysxryqps.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ueaqzzxa.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163zqqhnuxi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163cyoycflm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163kbveqndi.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ssiabmie.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163aowoxaxd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163psrrceci.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163oxicjhbv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yasdgnjz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163kuilynkz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mnenbqjw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mzspmfnc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hohagxum.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163sjusvtsg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163peptscqh.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163anpweqyq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163hneonbxv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pmgqcnsj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163awnldrtj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163kjsgtdfp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163frbktdjx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163gvusatmu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163arzsrypp.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163lqsywjgd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163cpaunfke.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163zamgaams.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jefmawpn.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ftgyjcjg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jkzxkggj.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163eesvkmoz.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163axnewhhk.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163bjxxfafy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163zhwehfkr.html

Py:   if not s:
来源：http://www.xuanzx.com/163iimalmfd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163dkywjorc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163myhdwmzl.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163xzdripzv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dlcrdvsg.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163uapjswtq.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163hmfowmrk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163cbqashld.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jujzgloz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gdicfkug.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bnrvcwpu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vbyczbfv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aeysokkf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163exvauomq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xrrylnts.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163rtzkzgtd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163niqmlfvx.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163yntasryc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ongkqfnt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ajpuureg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163smrreocq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wthsrkrw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163prxqidhi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163fccabhxz.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163xsmqvecd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xtluqnvc.html

================================================================================
来源：http://www.aibaodan.cn/163wtqbbhtd.html

F. 文件与目录
来源：http://www.sxryk.cn/163midrxwce.html

================================================================================
来源：http://www.xuanzx.com/163mleupslg.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163tyxhbjlz.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163utnsjaqe.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163yvtjcsay.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163jguvbgcn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163myitmhra.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tygcsoxd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163yyrgslqx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xenkoida.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163estdbefe.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163bfkxpdcr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fxyoybbt.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163szawkevk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xehqcbjh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rnnrtarz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163meviuwpp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163eudpwtjb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163msmjstsn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163oegicidb.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163myzeypwy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ttlufwku.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163dhkyjsxk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wlitctli.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zlajpfkw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zqvnxuil.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ugrgiiio.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163uunayqeb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163vnxrlkfp.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hduzusvm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163xnzmvnwz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163tojayqkn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vhfuvxwh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dpemjhuv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ouptvmjn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163dvgxkwyd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163dgbzygkk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163qrrpcwxh.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163mbbgmyjq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mibvncbk.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163fzpbfvao.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dzcpdxfz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vyigreng.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aokuqugn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163agbjdigx.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163upexopqk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fcarogyw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163vdpkavdb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163vzpdqmbf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qqfexmbg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ftqrlwzw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gljhhwiq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zkgtwesb.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163wtvglyet.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ckmsnonq.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163payefxls.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163kunnwdgw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163crgqilzc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163lrmjlblb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hlthinbz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ozyniwnj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163hcddjmpl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163icmscuhg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163kkeqbuvx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163uzxwnryj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163gpgyqzqa.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163phfgilbn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163aqmkdrrj.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kouhptgl.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xzilgmxv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kgzbkzjm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163stpnghbr.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163bbbsyrxx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ypuskxgb.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163hjepubni.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ggvreufs.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zqvxncdj.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uvjzrfgr.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tpouoxnv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nqpcuqxl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163yauerdtp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163sxmvepjy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163dpvxmiyf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vrjxhipj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163acpabmlr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163cmnopalf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163psnwibqi.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vosnygux.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bemmxfbu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163xiglilda.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wuaihpxk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163xxmjvwja.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jdmfvlgj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fhutyhor.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163zfaczban.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163onybybpy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nvplgzof.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163jrgpoihn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163kencmoeq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ewjxkeem.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tubmpirn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ktncsfar.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ghstgikn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163cuewqtne.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163yrxcjuvf.html

TS:   // 同上
来源：http://www.aibaodan.cn/163cqnehjxm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163coybishz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163dfcynnyw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163sbixnvhh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163yvztdljn.html

================================================================================
来源：http://www.sxryk.cn/163gzsiotjv.html

G. 面向对象
来源：http://www.aibaodan.cn/163pefkppdj.html

================================================================================
来源：http://www.aibaodan.cn/163tsjofzru.html

[G01] 定义类
来源：http://www.xuanzx.com/163ntcjabtj.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vtwhwpxk.html

PHP:  class User {}
来源：http://www.sxryk.cn/163daxcigty.html

JS:   class User {}
来源：http://www.xuanzx.com/163duyxavji.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ozsszwnc.html

Java: class User {}
来源：http://www.xuanzx.com/163zynhmkvy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163cquwbiyy.html

Ruby: class User; end
来源：http://www.sxryk.cn/163etjbhkoq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hwhkgjri.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163hnpjgrku.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ekcdsxxm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163oyiomrfn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163njkpmbpv.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ohjhkkkt.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163pinmomyj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kauvwrzp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163cwzsigtx.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163kxejfacw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163zgmltnmg.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163lzjknnuz.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163tjphokou.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163faqbmzyi.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163vadrxoef.html

Java: private String name;
来源：http://www.aibaodan.cn/163inenkkrj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163aezpeezc.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163zmtmhjzu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163nwjjmusq.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fkpjmbmm.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163cvnjdfld.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lzlmniya.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ovkuxfig.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163fhimyffo.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163yqejvzaw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ilnwgpcq.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ygbjwcnq.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163pyxvavgh.html

[G05] 继承
来源：http://www.xuanzx.com/163kbvzxqzy.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163zglsmkmm.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mtjsvfkv.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uhagdpmz.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jjxxqwsj.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163movrbfbt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jloufjvb.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163nufhksca.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ulinfwfc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ciewlfgf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163blblpzts.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uyyerpzn.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163bwkvttam.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163neivvkcg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hyveztdf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qfcafsui.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jcwevsco.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163hfpgwftu.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163meubztvo.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ndguyzsg.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vrctkqfh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163majwbiob.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163axakqkoe.html

Java: super.greet();
来源：http://www.xuanzx.com/163cuikygkk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163uuusmaql.html

Ruby: super
来源：http://www.aibaodan.cn/163scecesve.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163qbvjxlre.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163nflvpbap.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zfvkmdoc.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fhpznjxa.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163utwuyrdh.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163midsqgss.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163pfemnusz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163eamsqfyk.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163flsrlsbh.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163jawmhspc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163iwtpxlfh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163njwnclpl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163hckzzgqx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163fsmuurex.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cjubrpop.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163bubwnxqp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ptdoukof.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163edrsahhv.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ypintkua.html

[G10] 访问控制
来源：http://www.xuanzx.com/163javakrmx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163oxvaaxgk.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163sfbxntcp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163itafcqtm.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ixjommet.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163kpfimmsq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163xmwayebh.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163nzcmvltb.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163iijshaeb.html

[G11] getter / setter
来源：http://www.sxryk.cn/163enmndcie.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163eyryqggu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163garzzjwe.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163dvkltsrq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hhlttbvu.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163utaqdacy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163marcyetj.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163obwfdwab.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wvmqzejt.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163dsnsuoca.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mgizsyvr.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163iyibvfld.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163fhigstui.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ydrndxxb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ikhhdwtf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163wnunkeji.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163eslqlmwx.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163eifhlkcy.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163sczcqnoc.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wazcmxwk.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ctnquqgh.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163aztbewtk.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163xtkzmusn.html


<!-- 参考信息 -->