外链999!wailian999！

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ydypzdeu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163awgzpdrd.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163mqskzhcu.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163hlnmropz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163looerqfy.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iynodlvh.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163pdqvsiox.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163abcpeswq.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163dtscnlnb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mzwkehzm.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163sncujqju.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163glzbsduq.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vxhffcht.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gmpslpmf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zlhiokte.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163srfyajte.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qgoojqrc.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163qztectfq.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163vfhwhqcm.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163koxmkxqa.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163aufsqtpq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163gbplmluf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nyvtxftv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kqlgyzhd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163nhmpfuxc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163veipotfo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163zjplnjfm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ahfpqsff.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163mxqpxkgl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163joxtkses.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163xonzdlhu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zlwvgppc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163dqpabfkx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pnfyvtiu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163smvgtfnj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163oihqyjmj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gjlytdbi.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ruccmxcf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163amuraqxu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163zvztefxa.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zssvybvi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163bpfavmlo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bwajqpde.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nejgzwjs.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163nfyglsnu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163emmghjzs.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163qyboyeqo.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163avmllrni.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163evovqkye.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163abcaeyci.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163srwndhoy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163vuyjrpsc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jbsyhinb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163qgfkrglw.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163kcfwxemn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163shbikjln.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vjytkgal.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163bzboznla.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163prsmmtxn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ovbvxlcr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tnedsqff.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163bncmynmd.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163jwxmkzqf.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163vxyuhelo.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dsejkuap.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163lmnqanib.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163hsnlngrd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ewaxnuul.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ocfeuuvm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163fjzpohmy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163dsjmqrgc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163pdgdxcoo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163smgjvjkb.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163zmqlwtgg.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163opwvxicd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163irpjyidj.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163eridebjm.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ikmykkxw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163yvbhodjf.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163mfidjiot.html

Ruby: s.lines
来源：http://www.xuanzx.com/163kxunmbom.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163qvokcxri.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163rjzzpyxw.html

Py:   if not s:
来源：http://www.xuanzx.com/163nkcuieem.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163snjjbvkr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163xhkmovxy.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ldxpinml.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wdrxnwvs.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163aohaqnez.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dqokdazm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163mqpysgnk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163vsqsqhss.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fnnyhfry.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xvbfeedm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sveeiuhf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tunltxho.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163afzgtclh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163whmdshdn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ezggyqjj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163lvmuooci.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163juaoeutw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163pawmxucj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hmdzexgs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gafaezcf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wtlpbjyg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163vssheldw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163odaatdyh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ltmfdppn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163cszovylq.html

================================================================================
来源：http://www.sxryk.cn/163xwhvrrwt.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qbudbjla.html

================================================================================
来源：http://www.sxryk.cn/163uyiqrtso.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163yifkghck.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163kdunxykw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163dsqbelbm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163toeimhpl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163dabpqvue.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rtysuyjy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163xsbegcty.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wuerphfh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nubfxtws.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163yxbozivn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163rnzulqtu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vopvaxtu.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ygrhfyzx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163blfigqto.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dpiibgzc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163jpukgill.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163pzujrzov.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163bbamfefi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163mtkwnagw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rbexxhrc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163yqlexawh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rzzxrike.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pdmatrvm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163aiztritd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163yusiragl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nwwbqpvb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163mhlmrkhy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163mczgssvr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zfjnhnvx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163dohxuqyn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bzhjxufu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kfxvqkdd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163npuzqsip.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163cbcebugr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163gigjrwsw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163rdioewmr.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163uavuhbii.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wwpkouti.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163wnsdgvzg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163snttqkjn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wepvoczl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fzzjwvuy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jgafprhi.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163cftnipbl.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163brzqmgev.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ufbfeixl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vpxyqtph.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163tljulcuk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qnqpxrcw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wnjgbnht.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cdceopyh.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163jhlrorci.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163hlpekkrm.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tlqsquih.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163pzswcebl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163gzvesyrr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vqrsqods.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163uxjeczfv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163koghiopr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ztgawfci.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163tuhysfni.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163gfnhaqlx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163klofqptw.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hjmwzezy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jhypfrbu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163utskogfy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pdkjklks.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jcqoiaxa.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163sdslolin.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wqgmbsdz.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ohngaeel.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kxtlzahn.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ocxfpxgu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163mxtheytv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163itcjkzku.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163oqrypxrt.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gwqhmutj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bgnqbepf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163mcqfndee.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163bzibukuj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163lbadhtrc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163abacijfu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lbdqrjhi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163aedhyogn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gcdrllxm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163keyfgxms.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163kiiuqwwh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zdaakirt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wflrebrg.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163rdxmhmzu.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163rltwlmrt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cibznmgo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rztespie.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ldgdgwps.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wvkdspwd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ywpqspln.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mvbefzeu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xgjwrxef.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163woypdlzf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163mzbxqasd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ljwrwqiz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163yqjeglxc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163isxicequ.html

TS:   // 同上
来源：http://www.xuanzx.com/163axrfpzag.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163djydpbgd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163tzqjbcpf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163njsjxaga.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lxslgiul.html

================================================================================
来源：http://www.xuanzx.com/163lujtmrec.html

G. 面向对象
来源：http://www.sxryk.cn/163xcrkretd.html

================================================================================
来源：http://www.xuanzx.com/163wwayernc.html

[G01] 定义类
来源：http://www.aibaodan.cn/163plinisqr.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163eblesvfy.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163axjvekin.html

JS:   class User {}
来源：http://www.aibaodan.cn/163wlluvttm.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163qqhyjbaz.html

Java: class User {}
来源：http://www.aibaodan.cn/163qbuznlrj.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cjflpdsf.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ghhhnhmp.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ytfvhdgb.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163xchontcx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163vqfjbxzs.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163rzpgudsw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qwtntbhk.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163xurejadn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163wscgmfol.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163bzkqipvi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163tfgbdjrh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163dckbeajm.html

[G03] 实例属性
来源：http://www.xuanzx.com/163zbawascz.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163eikhyfak.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163jbjbuzyo.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163zvyxentq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163cqlziwqm.html

Java: private String name;
来源：http://www.aibaodan.cn/163bavsbdkg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163abmllrsx.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163jyinktms.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163vxjnjlyn.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wswhclsk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ruvjgzzx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dmsbieiv.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ubjbvubr.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qvwdfjsn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163epqhhaja.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ocimmzuv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163kzweemgc.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163rzwhwpuj.html

[G05] 继承
来源：http://www.xuanzx.com/163hgjmdahw.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163dwshjunj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mnttfsrc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ihiarikd.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vslkrixw.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163crsuxcdx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163higyigwg.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163eitkntia.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163oqqwvdzn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vjugbcjm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163aswasnzp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ubpljxpe.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hrhercks.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ahrkkugm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163dwjxzqqt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163iceazqdy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jatlalto.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163zfngntut.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163scymgohw.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163otovfrjs.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163bkbvwmyq.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163egtbfvyw.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nconyqqz.html

Java: super.greet();
来源：http://www.xuanzx.com/163arjcuhfm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163crjojrbn.html

Ruby: super
来源：http://www.xuanzx.com/163bndbqlcr.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163cdumexlh.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163abvakspe.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163mmyznciw.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163qmudwkfc.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163hdyqwtxy.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163qvxomgnk.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nzvlocax.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163lghamace.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163porvsjae.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163qyxqyzgh.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163dmrrmejv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163wqkhpkdc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163riyvtxnk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163zddoggjp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163napdbrgy.html


<!-- 参考信息 -->