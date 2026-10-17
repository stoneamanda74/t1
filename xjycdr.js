外链999!wailian999！

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163nrrllgrz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163uawrocfr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163awlykaou.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163vdycsvtw.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163zioibgxf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hvxqjbdq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163zjpzthem.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163rnlzidhv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ushtejvi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163zvuuapls.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163goflpefe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163isvhozcj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163funjpeje.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163yxetypno.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163zhsawpww.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163esqapwtj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163yucrmiim.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163fsjmfbqd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163sxsnrlux.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163vyrzalyp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163puwrejix.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lyikajmw.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163oyjxrojl.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fgytaamj.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163sryvswrq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vsnktlqs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163obhmpcmt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bzixlmuy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163iycxhepc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163tmvxhrtt.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163uhnptbqc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163hialgxcx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163fweswjwo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163edioqcri.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163skaufrpy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kzwawnej.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ujgtvycj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163yeambyse.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163oywvckky.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163nqkssgzc.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163czeoliol.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163kdvtctin.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163opnelcrr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pdgsiamh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163knsrqkqn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vspocwqc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163fdlflzuc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163cpzbklwd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163rjnswyel.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wvldzvta.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163hhmmsdps.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163votuwmcc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163eycxteij.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163yikpwsqq.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163wpvsiesw.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163yxvocgtj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163psimamwr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vxjxyrrq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ymjxujzk.html

Py:   if not s:
来源：http://www.sxryk.cn/163ndwiuwwk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lpdqdhax.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163pmaykjoa.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163orehnwjb.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ddystsev.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163wbbiuola.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163rkiztlbp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163nfzrlibh.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qtkxfqro.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163cadflgog.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163nrsvqsjj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dmoqkzau.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lpodsjne.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pghbsjyt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163lkvnivtr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163maxwxgry.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163edshjvtm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wyxlgxgb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163tnryyivt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163grgcrnfr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bnqdtgcr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vbthgjlw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163iidcsgck.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ojshptea.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163pldorcsp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163djliyrlb.html

================================================================================
来源：http://www.aibaodan.cn/163plqrrgyv.html

F. 文件与目录
来源：http://www.xuanzx.com/163mufndxos.html

================================================================================
来源：http://www.sxryk.cn/163gpmoszvl.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163bbzpkbfg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163nyzjdqzh.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163nsagiubi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vpmzzdav.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163iqpnkjby.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vmsznqju.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163okkohvff.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ectwfpdf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163bzchlyke.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163fnwsavoa.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163jdlfpyoa.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163najpgmew.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hivylcbw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yohdesam.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wbyptahd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163woamqbhg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163byfzyavp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xpftfses.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163dzuwwqhe.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163grndjlpw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163irpyifxq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lstlrojc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fvylsnqu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163wagykzkq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163lcvkvmjc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163elowgyhl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163pfsrljqh.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163bqlsfsjg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163tqdqoely.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rsjlhjhk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hdsogeqa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ltdncvvj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163hffwzvic.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163knofaplr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163llqeqjdh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163wrxssgbf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wcfqtltw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163opblbhik.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163cwfuxika.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ueeyqhxy.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163jmudodwa.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vvwocbyp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163lucxvatu.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bfzvxqyo.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163pwtbwffi.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ttencbut.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163oxxgiqff.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163pnhaobwl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qcioebdo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163imhnkdlf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gbemonfs.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163nxjsqtfd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163drvhfgbw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163grnqsvkq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ybvxouzt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163sfqpmibp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163yvpnrnsj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zeovhlol.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jsspclcu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ukleleuz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163eybctvuz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163aadycspc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163tmcnsgjy.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163nylydlbc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jztcnztv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vhbfrioh.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tdrcuovc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hgadomaz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vcxbvsfa.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hiuxgrvd.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ueznfvxd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163dryoldxp.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163qbinutuj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163xcuasazl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163foljribk.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jcgenqeb.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bmsxybfq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mdkqslbi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163fyywlclc.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xwkgpayz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dmqxhzzt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163movmldtd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uimvgkwe.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163jklcinut.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zeuxbhef.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ptcjzarl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bmdarcvq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163soidizyo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iacgmmeo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163jnbpphkv.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163dwbnilhd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bgbzsimc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163hmcqmhhd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gsufnjie.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dsiflzye.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163qgcdrzqb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qkpuoexv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163omrgorlv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ycqiuaop.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163zwtvchdo.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163exbumsnt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163fdxijexm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163owizvkvd.html

TS:   // 同上
来源：http://www.xuanzx.com/163thxprelh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ekalumvy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163wzcmbjuk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163tjjoxbie.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ipfjtftq.html

================================================================================
来源：http://www.xuanzx.com/163yjphdkle.html

G. 面向对象
来源：http://www.xuanzx.com/163qhpgufzr.html

================================================================================
来源：http://www.aibaodan.cn/163oxkhlaep.html

[G01] 定义类
来源：http://www.xuanzx.com/163yzododpe.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wrxxxbct.html

PHP:  class User {}
来源：http://www.xuanzx.com/163sybbnvjw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163lvottfje.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xoghmeoy.html

Java: class User {}
来源：http://www.sxryk.cn/163hwgjqmgm.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wepzphba.html

Ruby: class User; end
来源：http://www.sxryk.cn/163fwcaiabo.html

C#:   class User {}
来源：http://www.aibaodan.cn/163jqjkrpwo.html

[G02] 构造函数
来源：http://www.sxryk.cn/163vrvgjujf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163pgmtngsg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163rkdxkbna.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163sqmljcoa.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163qaxdluru.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163gjmxduyc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163cmuhwiqt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163vrperihw.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163mhdiygmg.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ibgukayp.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163kbyksqnr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rkppnfwh.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163seqnnixo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163nqfxdzso.html

Java: private String name;
来源：http://www.aibaodan.cn/163eaafgsig.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163dpuwgaiq.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163fjyzuojl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163sylhvvnb.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rumbensk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bjxjwvle.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163cldsuarq.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163onpzsbyt.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163cuclhevw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vdddiven.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ccetonen.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163onjlmcpn.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163oikxenkc.html

[G05] 继承
来源：http://www.sxryk.cn/163mdhanwkd.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163kmvqvgbo.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163omuakvfb.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vwztupha.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jrmydjix.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163hxowflde.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qmqineqa.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ypbafrit.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163torwizbw.html

[G06] 重写方法
来源：http://www.xuanzx.com/163zdfzezzk.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163fmmaepeb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ppbofhrn.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163rkpncjvo.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163swetmzmg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ndbnepxu.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ybulofzs.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163wrnczrnz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163gyncpllm.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163jzpkncgm.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163bvhhmjkg.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163tzsgesdj.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163sdlroluk.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163dpeophoz.html

Java: super.greet();
来源：http://www.sxryk.cn/163ivbrtxdm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xzngtail.html

Ruby: super
来源：http://www.xuanzx.com/163corjhclr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jvxisyhd.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163rsgxmtkh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ayqrimpd.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163jbgzapex.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163pauojlgz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163oqwojodj.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163pydmzdco.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163cmbvfcwz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ypfevbyr.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163olvfnchn.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ndckikdd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163ryaedtyy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163inefdtyk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mzzvyepl.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xkcvwogt.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163gnyckivp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fvbooldy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163odrrxzbx.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163khoynkof.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163dpjtvcwd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163mdqrstya.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163uzkwroat.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163nqlenzgn.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vrihrbtd.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163iwfplfya.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wmtsfrzj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jzkxwaqs.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163xluuywhq.html

[G11] getter / setter
来源：http://www.xuanzx.com/163yalqisij.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ormqhurs.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ekfuxoyb.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163qbwgkoht.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163veamtnfz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163acbswtfm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163geuhasqh.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163vjernwgl.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163forfmukq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163hgodarse.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ffcdotap.html


<!-- 参考信息 -->