外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163dxirxweh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hlulyfzz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xsrrijgi.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163uxsavmcw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163riuoklmp.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163umjepkqr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163dacllmny.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ngdcnmvq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ycghsyls.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ludoidwj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bpuirqcq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163xluhhgbr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163wgnlcbeg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163atkfwbkq.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wuuhtkfy.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163tmtycace.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163qjfkdvxm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pbtfyzlt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zyvwytia.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lckndupa.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ponuohid.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163oiyvqkqg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163xwstaggw.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163izbveeod.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163jwplsmii.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163iavvusho.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163sqmxylrh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ktaxmfyv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163mwavzuta.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ssbhdgwd.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163gaxcmhqg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163itehoxnc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163rubptder.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163puokdswq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163fjqamufx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163giqsfexd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lwolqlbq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163uivfomqs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163djzcngxu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163hshjdnqv.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dvtmodmg.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ohbjmsgf.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163idsdzjmq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kahxomyr.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163uxozsitp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163odkixuzk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163lfhghsvu.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ermoasnv.html

Ruby: s.lines
来源：http://www.sxryk.cn/163uuqstddx.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ejzsxiuv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163tiifnvph.html

Py:   if not s:
来源：http://www.sxryk.cn/163raosduyh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163dngflocl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163lsduqrdn.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tlyniccn.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163frfagjco.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163raqjbtez.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ozanzcbc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ndtdfpbq.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ofxnqajv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163rztvhchx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dofjpsru.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cffqgrat.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uxjotujc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ewtifsnh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ykmdvqjb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163rlxpdbfz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lsaibuqb.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163nzdkdtzb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ahbonwwt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mknupjip.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dynucsle.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rcdhahpj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163fegeqamq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163tlkgzpvs.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fllqtmxy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163zsdqwrkm.html

================================================================================
来源：http://www.xuanzx.com/163cgoidtae.html

F. 文件与目录
来源：http://www.aibaodan.cn/163twrhavwa.html

================================================================================
来源：http://www.xuanzx.com/163pknmkduw.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163chbddsuy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163qvcaycyx.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xdnzedsy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163dnjappbt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xhsqebeq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bmlsbnqd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163mijhcpqw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163beqgoevt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nzqukfjg.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hdbmtamq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163swxyuwiu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ozfbdxqt.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zpwlmmue.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ircryxrm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163flntcpkh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163exqdxwgq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163mwsrmiqc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163gstcqcwu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163gdrvkosi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163yjonrbps.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163evojchzp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ijfkoeoe.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nvrarmri.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rztybeja.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sxefbjgv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163bvlsvfyz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163dxhpzssv.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dfhstrow.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163kfzwnxew.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163nuyqwfnh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oqyjrbqy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ppxunljq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163mwujylip.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163rciqkiiy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ngfkpbtr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rfjuzsay.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163jorfdlpp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163jyihapgl.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163chiooici.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fhywkjwy.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uigbfmcx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qbyovylv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163vqzzersn.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ycchnceq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163nfpimboe.html

[F06] 删除文件
来源：http://www.xuanzx.com/163jtrteges.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163funltxxx.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163eqwkvwww.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163edsdtnqq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163btqadlrd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qyivvwvt.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163itggsdny.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163nrkwvgjj.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ncbplopo.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163rbbxpsze.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163sffirfrj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163jwouvvly.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hrchdxnv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gaexhujm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163mmvmougd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163oikdedkm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163fbuyclom.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zbvzzwmo.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qfzoalsx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163flmabzot.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rjuiikvz.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xnhiqern.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163iuzbiiyt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zdgknfqd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pwtaasbj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vofkqnhu.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163dhgxmtcw.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163uwuzadno.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163tmjafqry.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zydqbwbb.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qkxekyux.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163emoixizh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ojftxuko.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ffvylujo.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xknsgfgg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163fvhmlbgp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hzkpfpos.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hbgujuvg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qgnxdzry.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nvfgnxeu.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163apnjtqfr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163pitvjyoh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163djczjgjh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bjdlzzkl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ufkrjntd.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163vjjnpgup.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pycjxfng.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163nkysqqqz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163erxxcebv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163leoihykv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163kzzqnknj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ncsehmfx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163avczfekl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163zsicrwks.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163usmcwswx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ofqgeyri.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lvjifpai.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ttlucdzl.html

TS:   // 同上
来源：http://www.sxryk.cn/163keohldhb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163putkbksg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163icjfsfra.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163cgokuxkq.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xqyvafjy.html

================================================================================
来源：http://www.sxryk.cn/163cmcbkdjg.html

G. 面向对象
来源：http://www.sxryk.cn/163wixtixqs.html

================================================================================
来源：http://www.aibaodan.cn/163dwthclqd.html

[G01] 定义类
来源：http://www.xuanzx.com/163uoolmpio.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tibhjujw.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ctlpsabz.html

JS:   class User {}
来源：http://www.sxryk.cn/163zxxantqa.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rtphdqfr.html

Java: class User {}
来源：http://www.aibaodan.cn/163popzuunt.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163eonlqzki.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fngjahno.html

C#:   class User {}
来源：http://www.sxryk.cn/163orsfhmpd.html

[G02] 构造函数
来源：http://www.xuanzx.com/163mlkeaggb.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gtcakpxl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163pdimuxie.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zoxcqxgg.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kfxpinjf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ylpzfkrt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ppmbdqpt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163efcbhnmp.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163evtghibh.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163zcstqepv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163zvumvmtq.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163lsaujyhf.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163srynmohc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163xlowxxvs.html

Java: private String name;
来源：http://www.xuanzx.com/163mqggasyy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163xxsgozgm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163whtzuhrq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ravaucni.html

[G04] 定义方法
来源：http://www.sxryk.cn/163cimzwksr.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hphoillt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163acwtepjl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163imijylqj.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163qtxxcahd.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vybsvepp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163lzwcdfwq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zxwwqwdl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163yerfchdm.html

[G05] 继承
来源：http://www.aibaodan.cn/163oqttblsc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163cdyyksgs.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163lfckazkm.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ogertkrb.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hsateqzn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163mivchojy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163juimeqxf.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163caqwzcmg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163igimcbjt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163pvalbrjr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wfiindxc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163oqzpabdw.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163uelrfnlg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qpwuuhug.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163sgvkgoid.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163rcwabsez.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163orxthgob.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rdceautm.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163apwbjwkz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163bkoqyhbl.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ojwanzux.html

JS:   super.greet();
来源：http://www.sxryk.cn/163tsiyrdeb.html

TS:   super.greet();
来源：http://www.sxryk.cn/163naglpwun.html

Java: super.greet();
来源：http://www.sxryk.cn/163uwivnytb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163cwewtzis.html

Ruby: super
来源：http://www.aibaodan.cn/163rowozukv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163rqaznyuf.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163aexiujov.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163fpydoylt.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163kuytxtms.html

JS:   static f() {}
来源：http://www.xuanzx.com/163bljidrfg.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163pmfcorbc.html

Java: static void f() {}
来源：http://www.xuanzx.com/163okopkfks.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ywavypla.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163wxemdlgc.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163yqulnrfi.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ogknlgck.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jdefcjzp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163seozulpu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mnssqbis.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mlrthohi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163wxwljinm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163teyykxuh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163pqwujmfx.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163yfihgxme.html

[G10] 访问控制
来源：http://www.xuanzx.com/163mlegemoe.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ziickzvm.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xwaynyte.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163befogatf.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hotkjgga.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163pheyecee.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163oaqchuaf.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vhvyidjf.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163sagegjrz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163sflrrilo.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163iwvxfdjf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163prkbpyos.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ozziyosr.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163zoufjjuh.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hsbeezjk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163wwrxfctf.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163holyanap.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lvubnifo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xluedczw.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163hsaxckjk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163putodmam.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163joxgvtyi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163aotvhykx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163aomymgvl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163nzlfbwsm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cewrroxr.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163yrfwnyjq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zrqaryxz.html


<!-- 参考信息 -->