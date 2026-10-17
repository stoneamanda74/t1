外链999!wailian999！

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ycpqully.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163emejjdly.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163bxufbxjg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163icpjaszo.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163aqrnpbrp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ypmgwyzq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ggirznob.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163fllzuufn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163icfcfszs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wssfpyvb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163hnkccolj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dynajyfb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163fexifxxq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ailbbejs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163abeagwrl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fzppcmdc.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gvulmrjo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163iykwmoln.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163oukaqown.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163cuvdlqqg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yfywqmwg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163hpmxsabz.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163eeugiaqb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163rshxikjh.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163uzfqslqb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163sickymlu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163kdrfnrfz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163xaqttyeq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163fpanauth.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163xbrrlofe.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ascixmhs.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163kofcwujt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163xuhhjmsn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163hljntvfz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163luydoylw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yfdpadra.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ukxaouhl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163kdmpmynf.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163pgqnyqrg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163eoqdsmfw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163mrbvglio.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ujscyzbv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163lpgsmdse.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yfwjpuqq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mgsniaxn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163etibjfgc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163xwlffxxa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163njszjyvi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163arzemmvq.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163kwsphtsh.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163mxonowbp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ksvphzdc.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bngxtdpm.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163msahnogu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ojlspxii.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163wpgabnzk.html

Ruby: s.lines
来源：http://www.sxryk.cn/163pxzowcar.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163njgsfcpj.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163kirfzkfe.html

Py:   if not s:
来源：http://www.xuanzx.com/163gmhaiuwb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163pfxsajkn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163yyxejzcq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163seejndji.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nbzshjne.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163uaketpzq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163eepbdoky.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163wbjpepwz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163dnapgvpe.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163nlmpxtwr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163zaqjmlty.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xsijgbea.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163jplggeah.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nyjrgauo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163jnhiyxzs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163tlgjpojh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163pkqrulyi.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hcxsnuvk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163egbcvzzj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pbalztyr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163twagnvyq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163axqgblbj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163yfrnixuu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163iiabjxbi.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163fpwomvwl.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rvmeidux.html

================================================================================
来源：http://www.aibaodan.cn/163fxzpczhq.html

F. 文件与目录
来源：http://www.xuanzx.com/163umvwicup.html

================================================================================
来源：http://www.xuanzx.com/163yenqluxq.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163uwwsmklr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163bsnkzdyb.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163vanppdue.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ypswazng.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163tagvqzrc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163itejvtrk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163lajhxxpm.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163qpgtddpx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ollyfnxr.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163uaubstkw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163mkdbnyxd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163xhxinkqd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lppqglbx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163flpagtpe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163tsrdcfct.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163uxxqxqmc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wklgysxl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163tsxplezg.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163eyifmsow.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163jjihdmgv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163yydfttor.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bifsvsbs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ffmxbvgj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163iovjpyne.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163muaugatm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163iapbormf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163exhpultz.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163xcjqwech.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163woiaxfkk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163sznxgkum.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xxfalbcx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jltcmxpz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qikzmbhh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163oaovdltt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tocubeqb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ooxtdyjf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163rqkelouf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163eeyuuxoq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163zzeqywcs.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xlypyywm.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fgugdjkm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jwubkgbn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163oucyhfxb.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163lrybaghm.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163tvcimvvz.html

[F06] 删除文件
来源：http://www.xuanzx.com/163aqmzhmqt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163zumgpkvx.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163armzjtkn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163cdnvmeba.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gjnhlhux.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pqpfrucw.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163iswaruhs.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163pbjgwtzk.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163dbjvrjpm.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163pgnpprtx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163stwxtaxi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163kkdkdowv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tfmyithe.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163viovauau.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163kthlvvgz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qcxuupgj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tdsmdbkc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ruuztkux.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vxmavzsm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163yhxizndi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163yoekynum.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fwdqzueg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mwzkplyt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fyjlznyq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163nqmvfrae.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163nabducxq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dzuqostp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163jdevrobq.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163vtmrjspv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163llxicudh.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tidihdgb.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vqdelrjl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ossgogsq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163mcakqnon.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163eobajath.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163txdfzbug.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vhyregfn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nesnytbf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163chbmgfeg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hfhpihvy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163uuvvruai.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163isybkwkn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hirbtfey.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zeqkvfie.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lsxiazqi.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163vrxemosi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wbqgybok.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163cywhrinh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163younqiob.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hahrsvwe.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163afzumrsj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163avmmkevw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bnofqgfs.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163cveurwuo.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163kcbddsum.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163mltgkzsz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163uuqvsdpz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163wylfosud.html

TS:   // 同上
来源：http://www.aibaodan.cn/163lloprrrt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163spedytzm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vhufsctt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qjodxsbz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163mjhfkkds.html

================================================================================
来源：http://www.xuanzx.com/163ysvnngtw.html

G. 面向对象
来源：http://www.xuanzx.com/163mvdmazqd.html

================================================================================
来源：http://www.sxryk.cn/163mxfyvpfk.html

[G01] 定义类
来源：http://www.sxryk.cn/163dfuvvrhr.html

Py:   class User: pass
来源：http://www.sxryk.cn/163gvcpaper.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163nejbypox.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zmjeymno.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163qmyjihae.html

Java: class User {}
来源：http://www.xuanzx.com/163xunqhcnt.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163hwxlxdvp.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163veexhmgt.html

C#:   class User {}
来源：http://www.aibaodan.cn/163izxwipcs.html

[G02] 构造函数
来源：http://www.sxryk.cn/163fkstsfyy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163bjkwfgds.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163eubzxeom.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lmniojet.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163fyaihdgt.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163abefvbes.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ibafliuk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yzgzzklo.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163zoxxztks.html

[G03] 实例属性
来源：http://www.xuanzx.com/163cjymtwbp.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163vmhdyhpc.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jfmdlwiw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163bzrpqpyq.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163kfxvjcbt.html

Java: private String name;
来源：http://www.aibaodan.cn/163kldyvhwa.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163rghvtgmu.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gxlrvjaw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cohijjhy.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zdwqpzug.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163xhleegmj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qdutufzw.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163hmgwyswa.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163nwhrgmlp.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163waslkovy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163kgofieyy.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ilajribn.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163vwfdvouv.html

[G05] 继承
来源：http://www.sxryk.cn/163qgxqaiff.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fimrslla.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163yrmtlkzn.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163iktcvqyj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ojvmwkyt.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163mzcmiblk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zvcqwwom.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ddqjqacv.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163qzfdvqfg.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xhvpppwe.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163trskucox.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163lukaombz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163bildpuwy.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mgscwivl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163jeoothpm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ymexpbuy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163dokrsxhu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163oppsdjhy.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163jsdjqugj.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hiopcbdw.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vjltjgfc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163nbyrzyxb.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163iethjnna.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ljebaqpj.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163vvckgwuv.html

Ruby: super
来源：http://www.sxryk.cn/163mwwyiyby.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163awgphzod.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kbtjwfec.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163hrcdyhuj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163xirtdcbc.html

JS:   static f() {}
来源：http://www.sxryk.cn/163ovocxlfq.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163kudnxhuu.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163llahrbup.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163lkndgxfa.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163buwvsfou.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163gyntwxym.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163umkpxlrl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163yuhmsneu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163cfufrdjl.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163hobdoqdj.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163grdgfpoi.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163krlawqgt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mhpvzzmj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xpvgkeio.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163coevjpmt.html

[G10] 访问控制
来源：http://www.sxryk.cn/163xpgugcdp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163fbfiewzn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163rjtcndpx.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163pavpkgbo.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kwhwsnkv.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163guyvxqev.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ricfrjzm.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163anxxalve.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zywrrdrj.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163dygagrnq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xjdsrzde.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163teuaryny.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163srrmgqbo.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163yrrmlcsz.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xhikpfqr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jntzprkp.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qpuvemgg.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163nceatsft.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163lbgmunrc.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163brrfhhtq.html


<!-- 参考信息 -->