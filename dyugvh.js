外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qgzzhmwm.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fkuxltog.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163onkahljw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163xhvpnfzi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163rrdlpakx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163mtgzjmjv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163qqqgunve.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163jfyxfnep.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qpntauwv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163whonzirh.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163zwqamaaj.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163aookxvqi.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163bgjdhbxk.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ckvxfdop.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jvjthpmm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163kfmhtlje.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163exlhustm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ghlvirnx.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fxxzxplb.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163kgsfhiaw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163enmfzkul.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jtrjzadz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mhgutxpf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hhxgarkx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163fmxondqg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163yifgexjz.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tffqqsqd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163zncearju.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zsqywhcp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163bxxlvuhr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ehqlfoxz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hrmlfwbp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zkbwcmor.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163tyadihoj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ripveteh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163jmxwioot.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163lzbjhpeb.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163olbbloyd.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163etcbbllg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163uzkyzgks.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163fiorumxb.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163aqoxotdw.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ynqqjjjl.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163hqxsfmxe.html

Ruby: s.lines
来源：http://www.sxryk.cn/163uutmhhaj.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fkwzqtny.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163tlvffsyr.html

Py:   if not s:
来源：http://www.sxryk.cn/163gpkfvrmb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163yncgbaax.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163jsahmnif.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163vqampgbs.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163netguqdk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163lhzljawd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163favqmdgh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163aemurmik.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163qzixntpl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163nqfysoei.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bjwlvqyo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163udnjcvbf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qtouyuvk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xgtqqdsj.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163mbsyaysw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163jtseheqw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xhlfsixf.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163kweoumez.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vqyelpht.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163umoascjg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163klpdldnn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qjmbzibf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sbevkqaa.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163figwlwio.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163irrljxuj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163hxqrryif.html

================================================================================
来源：http://www.xuanzx.com/163tkirqjky.html

F. 文件与目录
来源：http://www.sxryk.cn/163cejkiwcx.html

================================================================================
来源：http://www.sxryk.cn/163wncrgenv.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163kfldkctb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163gqfcspvz.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163oipxkpqw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qghyjvbv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163comdosei.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fairgtxm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163vonmjtrw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163diniygsl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163sejuqbfo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hruazlyx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163lakncigb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163uklberdi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rvcrxtmw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pborbtqk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hpjtynnq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ebadwpdv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163okilfroz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ayszwvmg.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wuqljpor.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163suglzkki.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163lpoviqpn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163djgkfocp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ppgwhbph.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163nguxmbiz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163fiauiqgn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163fqnqofcr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ljyyjnkq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163boyfdbvc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ycebufag.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ayubwbuk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163abhimssh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rrrxtkae.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163phsloyao.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163umhbjonc.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mlwtluqe.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163hqroppsp.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163mqhnajjf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163tvenihvu.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163cijyufby.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163betfgtrp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bdqcbeca.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oscdhpxn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163nylijfzk.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xgszeeri.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163urhlstev.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xrtegylb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163zpqebudy.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163guwenutq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dgrdyoii.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163myjbyssy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uupyarbq.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163iepmntop.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163jdzzcnui.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163jvxzzyrm.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ndizakgy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163awdyqbra.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163emcfzmyj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163pppivadu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163iablmxxh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gwmezdiz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163uxjldllu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163pirjndkp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xznmjyiu.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pzgpzpqa.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fmtuohkl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163czbkjppv.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kcryrrhe.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tczwkxnk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rtttjuch.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xbxwfnyn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hocymdth.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163fymkolwh.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163qvnpmvlr.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rganojog.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zoueyiyr.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jjusyxld.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163iaqgimzx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163axnwcofs.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163vqdyfvhl.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wviugvdf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163gmjqwcir.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mfqngjah.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tmukuusw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163qqmnmtwc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yzuzrkor.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163wrqpttde.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163tomgcrzw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163wfnvhfsy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dhyiunzq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163gejdahyd.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163zwvnoowe.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163caaowyor.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163enjtoyie.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oqavwgzq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vebspnex.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163viokswzs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ramcipcn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pvrombis.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dgjtqlzv.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xtyhhhqs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cphnbzuw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163qkkznrht.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163oqrihcqj.html

TS:   // 同上
来源：http://www.xuanzx.com/163wnurdoxz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163poplfgrc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163ikzjndgp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163uhckzgiv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163zswcvpas.html

================================================================================
来源：http://www.sxryk.cn/163xfrrazxh.html

G. 面向对象
来源：http://www.aibaodan.cn/163medjfbyu.html

================================================================================
来源：http://www.aibaodan.cn/163utllybdt.html

[G01] 定义类
来源：http://www.sxryk.cn/163fpqyvfcx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vrngftex.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ajlreupg.html

JS:   class User {}
来源：http://www.xuanzx.com/163edmuifme.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163dsawfwzb.html

Java: class User {}
来源：http://www.xuanzx.com/163yzjpujdv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ijvyfrew.html

Ruby: class User; end
来源：http://www.xuanzx.com/163lzjxzktz.html

C#:   class User {}
来源：http://www.xuanzx.com/163mabdywtk.html

[G02] 构造函数
来源：http://www.sxryk.cn/163okawkkxj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163obveqixu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ickrvlbq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163rdmhzunh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163cserhpjz.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163uvujjwwp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163miefajuc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163osfuckrl.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163pkxfnnfe.html

[G03] 实例属性
来源：http://www.xuanzx.com/163inzrsies.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163safkkvnk.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163tzrbpsma.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163aqynbskr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163yurfjcza.html

Java: private String name;
来源：http://www.xuanzx.com/163vojfqsvz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163fkmvmxlf.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163lcwgwrvg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163sorbmkrq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163pyemzigb.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163einqqmcz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hvyxotso.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163qqmjijap.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xdixqigz.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163blzpiicg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zxjdcoee.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ezmvctir.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163azxfptwm.html

[G05] 继承
来源：http://www.sxryk.cn/163cmfurikd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163sceybvdr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163olssfryc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mnesmnzu.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pmtyrwdd.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vxbirqle.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gijlfuey.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163rlswvssn.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163fweuoacl.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ooetrvfx.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163pprvlaau.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163iplxxems.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jaqprrfh.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dqymnjbo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163uqntikph.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ksbnofyo.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hqczpkxk.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163yklbkvbe.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163abecjtwt.html

Py:   super().greet()
来源：http://www.sxryk.cn/163dcaqgkpe.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cvmcohtm.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163fahmxlzt.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jodpguvs.html

Java: super.greet();
来源：http://www.sxryk.cn/163latygcbj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163gcxeilvf.html

Ruby: super
来源：http://www.sxryk.cn/163golujcax.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163mytcrttr.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163vmaxfujp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163wiknibva.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dttqlmqi.html

JS:   static f() {}
来源：http://www.xuanzx.com/163vhieomxj.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163rgaihsxp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163oufrrmnz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163fpexmoup.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163jiartgfy.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163mohdsvgv.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rixgehfg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163uoqjmdyb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hhidlzxh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163rwgqzdvp.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163emjrtgzs.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163uuwalpxs.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163iqqudxvo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ochqdngn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pzgrwkxv.html

[G10] 访问控制
来源：http://www.xuanzx.com/163niniotlm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ojjktvjk.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163rgruvamp.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163uxqesmpr.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163wyhecqgt.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ivhpttfe.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163cglvwhvq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163hdoxyzpb.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163baeeuhpn.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163kpacfmrd.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ijytpeap.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163cfibzxtr.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163gvtmuolf.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163snesqwls.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dfmdquqx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163enfbarym.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163woiklvfm.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163vcmkqmux.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163yfyaffpw.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163nwauythp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jgxlmbaf.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163bxysowsq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163lzalqtaw.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163iwcraycq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163cujclups.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163emzawimz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163rzvsgfor.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163dufkasms.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163zndjdtne.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163xgaqpkit.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163bculmgny.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163oxgqxbiz.html


<!-- 参考信息 -->