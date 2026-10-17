外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ivlgdoqw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163zfuoogur.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ddphigjw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163spvyqcua.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163phlrgjhb.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163yncdxwzc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163agsiyrtt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163hguqgvtg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xvbvszmj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163nczsklqc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ikjrjzup.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163lpjfayju.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163prrmukwh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ueqnzshx.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163tauhkufq.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163gmtypbzd.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163idzzrhnj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163nyhvwjqz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ggsndnus.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163cckluvhd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ticdykrd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ljrigxio.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163emnrywth.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zncbygeg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163cxcagiqs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ftnutzuu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163soqftmto.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163atffnujs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163vfxmodvq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nsbvatwu.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163bsvhcflo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163iklirrxj.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163pvccthrg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wbtpwgsq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tkbslqbp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163boqkuuyo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xvsbdtiz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163hxplqmco.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163rqgpdtgg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163psxzwjcw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ztgandtb.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163cdpbaxbb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163djidipxb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qwwbvvgd.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rnugpbnf.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fpzknoju.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gzeofedk.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163thtxwwgv.html

Ruby: s.lines
来源：http://www.sxryk.cn/163jhevnyge.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wvrvdfxy.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ycgpuvym.html

Py:   if not s:
来源：http://www.sxryk.cn/163znysdcnp.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ssbocgpz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kputvkes.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wajgniah.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163kdrjyuqr.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163qsspdhdq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163rivlboee.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163fsqeqlcb.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hxugnbpg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163pmqiyttw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kgbrhfwa.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nkkuwkie.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mfiylueb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163efypytyw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ghlacfke.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xndaymoi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163umvxbjdt.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ovskwbyx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163yimdedaj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tbpzkvpy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jrxxjcap.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163zbcmmrfp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163wmjtfjsy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163wfewttdm.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163yxsbvtis.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ssnnupme.html

================================================================================
来源：http://www.aibaodan.cn/163fcxyocct.html

F. 文件与目录
来源：http://www.sxryk.cn/163ctpjxlkn.html

================================================================================
来源：http://www.xuanzx.com/163xpwjvwqk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163sgdoaymy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163qdqiamgm.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ljglhpze.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vlwgrbms.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163lcwlypny.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163babyvlqo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163nupntxki.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hgwhkcqd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ttdksxtd.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ewvsxubd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fkrpmcib.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163firrsnyy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163unweapyn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vuwakkbn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163srfwsaco.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163yiieatfi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163xnoretgv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xwfqcpys.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wqltpqok.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rpotcqkc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163fmjvmfyy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ryiienqe.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cxrimzlp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163sgkjqsbb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163udmslcxb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ygdzfvse.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163gxaumxlm.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163qfylfhye.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163letjispi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163bzuxmazc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wxgqjnig.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wgdmvdet.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163rdbevofb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163kkvxhkbp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163bothlowt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dwtmyntx.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163nvfxjuug.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ocohzwwk.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163skfpzgso.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ujjhuhbj.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163adgjwzye.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163znrxmlqt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163yghpavvv.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163vtfowfte.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163liyqveok.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163uxpkjrip.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163bpcufjmn.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163lkjfzgqh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bizwudsb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vnclvgyk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163arhfhasx.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163gjyxpjtw.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163fsderfda.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ppuxkiju.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163fubptknr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bzognhcb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163oigwswuh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fpevpbpe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163svgyzolq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163evazzjjy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fttgjlzc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ckaedmlm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ceesptxw.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163urqcjvpj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163kkidjrxz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163xxqtthkg.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cqhnowrv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jheaczzs.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ssnbwnml.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163mxjgnzbg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ftddwmkp.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163eeunpvil.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163dkqhyome.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ovsyuxzi.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163edqxhrqd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qzvzwnfr.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163iynqlubh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dzhfmfvx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163bzfzmfip.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163crenpfqx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163brtgegpf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163fhiezxfz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fvaholih.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tjnwrqvm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zarulndc.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163chmaevro.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163bmwqdica.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163woivqumy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rqjvghex.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163sfqkinxe.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163tarujrtl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xszmlawf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163aupokwlc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ofctvvtf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oesyjgct.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ydfrrpel.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163syoimdpo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ekadxkzv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163chsaxkyu.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163khypfolk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163gfvfqlyy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163vowuldvg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163yliqatxo.html

TS:   // 同上
来源：http://www.sxryk.cn/163igyskqrn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kwvitgow.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zwrduizo.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163effdnphq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163fckzzwnk.html

================================================================================
来源：http://www.xuanzx.com/163jeolnrfb.html

G. 面向对象
来源：http://www.aibaodan.cn/163kkadkxxk.html

================================================================================
来源：http://www.xuanzx.com/163scjimfsb.html

[G01] 定义类
来源：http://www.xuanzx.com/163zvouqqxx.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vmtupmiq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cpqhfile.html

JS:   class User {}
来源：http://www.sxryk.cn/163eutckinl.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163oztfcdli.html

Java: class User {}
来源：http://www.xuanzx.com/163ugczzqcl.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163bqnqjkqc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rsgmtgzv.html

C#:   class User {}
来源：http://www.aibaodan.cn/163mneoyclk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163csbfkfaz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163dhwmwbqe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163wuqimejx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163kpujyzgn.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163janacear.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kyaxgnbf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163rkcemlpf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bcttufsn.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163fovjhmhj.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163vncrkwrh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qfxdomam.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163kwnwbtuz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163lsqujrvl.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163vxlvxftk.html

Java: private String name;
来源：http://www.xuanzx.com/163earsnigx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163znhrkuik.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163cntpgobx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163jigdylvp.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163cupsrvws.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163dpttsluj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163fvjrdzfl.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ipcybdqk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163fsebpbce.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xauylarz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163pbztfkol.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163rvqoafhn.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163fvuddbkd.html

[G05] 继承
来源：http://www.sxryk.cn/163tfefeknw.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163sgpplizm.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163hxjwxolh.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zpovbbui.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ikrcadss.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163mnihvkvu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jgricbfv.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ibesrwtv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jsddmhlu.html

[G06] 重写方法
来源：http://www.xuanzx.com/163aaaedfxa.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kvxmpdfy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wqtthbxb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jbfujcga.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163asjbktti.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163cirqyidv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163kxogxyse.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hptnasmx.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163dsfqcntw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163sadvoapo.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ayifioou.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163inyxacht.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cewfpgwq.html

TS:   super.greet();
来源：http://www.sxryk.cn/163kqprhsju.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jqqdxdfs.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jbhhdazy.html

Ruby: super
来源：http://www.aibaodan.cn/163jrpozvhs.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163fsaobhhb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wcfwxdiw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jvgtucbh.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ylyrljne.html

JS:   static f() {}
来源：http://www.xuanzx.com/163udvpeznu.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163rewwmqlg.html

Java: static void f() {}
来源：http://www.xuanzx.com/163eovkamdc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163tqulngxw.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vspnjyqu.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163uswzhoex.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163qlnrrmbq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jexirsfv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fxjlbljq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ecahewce.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163iusrjczx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tzvaxlce.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qwaigemi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163iabejrix.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163mpdojmat.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wewsyvev.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163lpdlfkzz.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163bkeowwcd.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163hpetazdp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kqnzwreg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163rnwjisau.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163bgdlhpqb.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ncouokyg.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163rsjkygif.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ycqzwpzc.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163fnezzqum.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163kvbvegxf.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163jgjybaox.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hdlqaqto.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163auwmjpub.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163fokwogir.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163unpirfdr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163svfdbxua.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163tzyydhwo.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ihwksugg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ycikzthw.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163topqpown.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163pzxsybmv.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163oagivgtw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jhwneqjn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163sofsnhhj.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gbjtukrn.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zztnvrwi.html


<!-- 参考信息 -->