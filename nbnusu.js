外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163xnndahxa.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kjcgynoj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163qfbqzvjg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163mjlaxwdk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163svktrrhf.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rcmpcqey.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163iyjgtdpa.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163zqelujyu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163lqobepoe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163qbytfxms.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ntdxsgwx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163accvwclf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kqvirump.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163pjynoilq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163spnzbcyk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163jivznpst.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163vrqlwqeg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163yqzkgkns.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163cwcyskpc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163yqtsdkho.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ksegerke.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163dcelexor.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163nergflwv.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163zxfvqfde.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163olqwshuk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163pdusxgyz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fzoikgjj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bczngzsq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163tmpkqwnq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163azhhvnhf.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163chpqaewz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163thmhcgph.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163urusmtsd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163kjyndjfg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163weoqoxvc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163eptxqych.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pzodyvxc.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163thpepvkw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163yogoznrn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163uetklbuq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lgnwusia.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163uuphufxr.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163csczynho.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163qsfkbsng.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qlclbatn.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rekhcfjh.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163oyrcovpy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zfbpqita.html

Ruby: s.lines
来源：http://www.sxryk.cn/163hwxsldfs.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163juzvwacq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163wxjygncf.html

Py:   if not s:
来源：http://www.sxryk.cn/163rgwhgmuu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163zppzzfyn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163nuenpopo.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ysznrutn.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ipewrxlp.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163fafojyty.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163lhrdwsfo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ezkqovik.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163bdypcftb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163mdfafigz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jomgbawq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ukwuqmnh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zyggznuu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fkvvdhyr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163sudgvspu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163spgbbplu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ezmnrfei.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163cxblfhvn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163nveoozmm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gjbkklei.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uniftdlb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fbdutpwp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rykhsiyc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163dplyojeg.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163sjacewyb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163qghskbif.html

================================================================================
来源：http://www.xuanzx.com/163phwcmdvi.html

F. 文件与目录
来源：http://www.xuanzx.com/163lqgnbbui.html

================================================================================
来源：http://www.aibaodan.cn/163rjomadut.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163pommccrr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zemmkijm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163upvnfcet.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163eigejzeo.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163coghffsz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163voomrbns.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163oyvarxmm.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wzgqqwce.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163rjieolye.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wykomajj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163merkpmsu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163wgsaxgtf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gkdkppub.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zpxzijgp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sijhmhdv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163stxcbdik.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163pwwitaqd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163bcqivgek.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jkjprbgc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163uxvcwzrm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163bstwzbei.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wpphbqrv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163offutgwp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vkrooasr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163bkzkyokd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163mptuukds.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163dwzqblip.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163arbnsquc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163okbzrkov.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163kqhdgkkn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qhjtlkom.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qxciisca.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163wnfuvonp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163efvhpvjo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163jkvrnuml.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jifvycpi.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ppufrgox.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163nzowsocp.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163snbebuwi.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qchzihnz.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fjzqeqow.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nwtfafst.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mpwgoyew.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163utbetfsr.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163oqtyawgk.html

[F06] 删除文件
来源：http://www.sxryk.cn/163vyztkvqu.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163cimhrdet.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163owvgoffs.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cqzqcvii.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163durneddj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ymlzgkkg.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hjpyxuwt.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ixojoepz.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163wufpifqd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163fymfgfuo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163bwcovcfs.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163htxdppvt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gqsgzfiv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vwpgwvhb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ddxfnell.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163reeyetpb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ryuzkegp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163hboqcspq.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163fyydsohw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163hqyzossk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vuausdhv.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163favbwwaw.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mwbaaurx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rcfjtlkz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163cisjgvzb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163nhbjwpml.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zjeftvmk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163vwsxzsam.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wwykpsrm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163upfobrzt.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qmqzbtpz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cveulsah.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kwsfvmdp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163lalzzbvc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163tleobagu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163pohtcxnq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163iberkior.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bzppbjbs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163soypmfji.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163grsjfyek.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163jedgybyx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163kurxdxbd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zppxrzyn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ctuzcrdu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163mnqacpua.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163toxyfxdf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ujtrwypp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wznazwca.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dvomdvqq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163asjudvaj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163eghjzakd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163keplfumm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wkvvekpw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163fayfibze.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163yhsuwqsr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163cupxbnlo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163xcybngno.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163iinnwqhc.html

TS:   // 同上
来源：http://www.aibaodan.cn/163aqikktqz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163fmmpclnj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163fnwxkizy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mofkftap.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163znhutpzl.html

================================================================================
来源：http://www.xuanzx.com/163ehtskxvt.html

G. 面向对象
来源：http://www.xuanzx.com/163znzegdrz.html

================================================================================
来源：http://www.xuanzx.com/163vgqmnzaf.html

[G01] 定义类
来源：http://www.xuanzx.com/163aqbrshxb.html

Py:   class User: pass
来源：http://www.sxryk.cn/163eksdgygl.html

PHP:  class User {}
来源：http://www.sxryk.cn/163odxtugbv.html

JS:   class User {}
来源：http://www.sxryk.cn/163jturgeud.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ydmvitco.html

Java: class User {}
来源：http://www.xuanzx.com/163oersukdt.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163yyowilrh.html

Ruby: class User; end
来源：http://www.sxryk.cn/163qmchyldv.html

C#:   class User {}
来源：http://www.sxryk.cn/163owwesrky.html

[G02] 构造函数
来源：http://www.xuanzx.com/163mbhvccss.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zwbzaadt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163cftvqagq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163hlzhhjwg.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ppgwumsp.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163qaqujtey.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163lnnmnemb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ycrweayr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163grwmruwq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163myolrooo.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163bgxxzwvy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163yxkvhwir.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lixzxxec.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163etlqhqxz.html

Java: private String name;
来源：http://www.xuanzx.com/163avmomwkx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163tukgommx.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163bamfstfr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jjabpixt.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ddvngymp.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163cayyotnq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163alfudgnf.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163yivhzlpp.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xowtdwtw.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163itquoiab.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ccrgktzb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xklzigpe.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cmkxkpiw.html

[G05] 继承
来源：http://www.xuanzx.com/163fqesuepr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ysywgrws.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163eidmrgzy.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tdntizng.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qmdpcxbp.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163erwhfhke.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ywhslzug.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163usuhgeyr.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163whvvaxgn.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ewzypjgo.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163rtkblihm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ggtznfiu.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163guojekhg.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163edmwpfds.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163drwjctzr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wngtmnqy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163sqlatcez.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163gwxudmyq.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163cmqfdcon.html

Py:   super().greet()
来源：http://www.sxryk.cn/163kuegdzsa.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cuttmufo.html

JS:   super.greet();
来源：http://www.sxryk.cn/163urmnlzzo.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dbapwgbe.html

Java: super.greet();
来源：http://www.aibaodan.cn/163bsjmlygo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163xpscjrbu.html

Ruby: super
来源：http://www.sxryk.cn/163bmimghwo.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163iptpfuth.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163yiizbjjs.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163kglrtwhy.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163gazlyckf.html

JS:   static f() {}
来源：http://www.sxryk.cn/163zerhsfpl.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163vhsuvwin.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163nmoxzsjr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163tdzganzu.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163osymvwpl.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163yxpzbdlc.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163gfuvxbfc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ocofzyek.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163einwlzae.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163istsvtyn.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163dpyxgsgc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163vjhtegez.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163vytjsxxd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163llzgbpfp.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163lsjwpzvu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163clclotzx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ejmbsfxr.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163lmmjurbo.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xzjksqwr.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163axrlqflf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163cmklawpk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163fruzbnmv.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vnefguat.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163alnoggwp.html

[G11] getter / setter
来源：http://www.sxryk.cn/163olqhwszv.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ufakqcst.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kiafidab.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fdnaxvgq.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163lnxymhye.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163dlcdiznf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mpjgkxkm.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163hqjwojvd.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ktsnhqqu.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163uimamckh.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163wudmuijx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163gakkagga.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dxvtmjnh.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163dimxoxic.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163sjfhigxj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163hshgqszo.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ozacpalp.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163juguzlqq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163uyvquigy.html


<!-- 参考信息 -->