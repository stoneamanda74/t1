外链999!wailian999！

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163sgrnhiuv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163pgfurhxo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163kfscseww.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163sxcjpzys.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163rnslxuai.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163bfaqabox.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163uydohrzg.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yrsmpluk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163eslaiuto.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163dfjbmlge.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163vdikxase.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163natocthr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163dpsdpoeo.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163rdzfcqia.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163rlxmknym.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163akcjfvjy.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ahyksccn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163shfxngdq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jzopleqn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163mwhebgnf.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ssginkcj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kiqqnztc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163pjdwicey.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163gqeaoksj.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163tpgkjsjh.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nmxyyhqq.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163czxpvgeb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163rgvmbvot.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163cmoxivan.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163uxdhnkji.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163yhurspwe.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xtlfznpq.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163jlkmbhrq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163nqyiormb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ufobuzzd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qeueobnc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163prerqdoq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163jqpegomw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163zzuvfhjd.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163hhanmjgq.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163inbquvwz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163abbrgcmp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163vxjsztfr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163kwtoagjm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lsipdqae.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163rfrtdbbm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163oazrucki.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163rkqdijuj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tgvsqgzv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163deomcclt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rackeasv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ssrhmyha.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163cpzwcpnx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163huaenflh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ydlmldxp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163obwyeezj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163uwdlfmxk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163wklztchj.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163mzviqkkw.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ujuhwdpp.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163iwddytqo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aygvpwls.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163staagqhj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163vrrlbzum.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163dlsorske.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163fpwafdfo.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163xlpqfgfh.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zwitbfcv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163pluyaafe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163opcitxio.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rosdfkwd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163iutyfttj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163qeefwdfu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163akyrojfv.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163sisdyzms.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163qklorhlo.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163cuymrihz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163nynghyxv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163dutdpwzd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ssmznmqz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sploxrst.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163zszjxxsp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163cksloxrz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163cwhtwngo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163nvrsvkwp.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xrugiqss.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163rhqadvge.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163rnanfvce.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nqjvixca.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qqokoahb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163bcdiifka.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ultkewcj.html

Ruby: s.lines
来源：http://www.sxryk.cn/163cbibsggc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163bmgfbyvy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ftravfdc.html

Py:   if not s:
来源：http://www.xuanzx.com/163tondhnzj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163fxrjvfkr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163oivfnbkw.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163zvqskmib.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163jsyfdxac.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163harkrytb.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163nfcukwfp.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163beswwjmt.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hstboiex.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ypfkyodn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163zlrupbsm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iufhccrp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xtrvtfty.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mlmxdysk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163qcapizkz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163susierpx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163rhwquipz.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163tcuwcatk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163bqzqbygm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gspabpgr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rgawmadh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163uneddetu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163mniznxgy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ascmgibk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163srtcvizx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163vcyaofhj.html

================================================================================
来源：http://www.sxryk.cn/163lswzdfqn.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qwaembxs.html

================================================================================
来源：http://www.xuanzx.com/163nqjkeiya.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163iymfjibo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163hkhjzdvs.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163tziudsfw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163yrmjcqgx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163yotyqikp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dpgtvvwe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ykonkmcx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ykicnayr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163gfxsdjqr.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163brqvcsqv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163tmbebqxx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163pjldmxxd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rpwcusrh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vvsqdwxt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163neqrhuir.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tszzwcnu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vervxbzi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163oboqmzkv.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163belwcibc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163nnuosnbg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163synbypdc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qxpyuvho.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vkhxibqi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163smeccyho.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qpwscssd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163qipyqtuc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163telccxav.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ypptxmzq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163xfkferoa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163uwqucxqs.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bhrpxeqm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fccycdqf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163jnybpbzo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163urztbsog.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163uuqyosot.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163sfgxaocu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163vesozidl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qtwkndku.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163kspsamqo.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tdvmwcdz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uqdqlwwr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rtgwegkt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163khhbhrdn.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163pnzmbeeu.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163leqppgpd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ylfhzqfs.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163rgrdcqer.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163azgmmswi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163iybumhfw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163iyxfpssz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jhkbmihz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163yhfwkhcf.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163hpfigfup.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163duourssh.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163eqgnkyjd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163glrgfeud.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163fuhrnmmy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zgghqoex.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lwhbnxmb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163aiawjrqt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163lwikmrrn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yclclxrh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163vpwmadco.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163kczczrof.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163rpmmahjy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qwhqhrjg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163iwrjcbif.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163arsjiynt.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tnuyovep.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163rdvaapar.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ixrwcqml.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163aigdhivn.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163fpdliqkb.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kgctgeji.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163sdwwnmkc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kiehgjzk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kskdcyef.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bejxovru.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163meyniejj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ecceijyc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163msbmjkfi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163bebcnhvr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163udebvqyq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163xmzbvkgk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ezbdcsgl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163saflhxki.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zzyphlpg.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163crtrzxai.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163buoaeqiq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163oejaajfm.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163uxhslvur.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tazdjflh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163teneuwez.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kysmtmkr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ppkpqjrg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qtdxhkoe.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wzazlmdj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ujnnrzad.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zpaqdhdo.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fohxuynh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163epsmjsoq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163cuzfkjhp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163wtsgeewj.html

TS:   // 同上
来源：http://www.xuanzx.com/163woidlcdg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ecijjagy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163jqrspsqq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163tavukbyp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qzfybtje.html

================================================================================
来源：http://www.aibaodan.cn/163tqgsxngb.html

G. 面向对象
来源：http://www.xuanzx.com/163pozplvcj.html

================================================================================
来源：http://www.sxryk.cn/163nmzkyejs.html

[G01] 定义类
来源：http://www.sxryk.cn/163hchcwhhy.html

Py:   class User: pass
来源：http://www.xuanzx.com/163xrcjlylt.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163gsqdkhet.html

JS:   class User {}
来源：http://www.xuanzx.com/163gwkvovqb.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163gwwephdu.html

Java: class User {}
来源：http://www.xuanzx.com/163wobmvkhy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163prhntcbk.html

Ruby: class User; end
来源：http://www.sxryk.cn/163crbtggsj.html

C#:   class User {}
来源：http://www.sxryk.cn/163zhjzokqf.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163maomwkyt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qdtzgwfq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gtkitvlu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163doyowurt.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163wbrmcfce.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163bfidbqxj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163dwwskttq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mrohujiz.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ndehjnot.html

[G03] 实例属性
来源：http://www.sxryk.cn/163vnkaudgu.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163onzcfqml.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163fgzflafo.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163gyvkkorm.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163qzteyssz.html

Java: private String name;
来源：http://www.aibaodan.cn/163flpyiddd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163cnyzsdtj.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163jujcrtlf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163gwrhxngj.html

[G04] 定义方法
来源：http://www.xuanzx.com/163tuaoivhw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163klaifzks.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163wckzrpzm.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dqqcpreh.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163eytxlmzm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xgfjhxqi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163sjadtale.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163axtmloqs.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163eikoodwa.html

[G05] 继承
来源：http://www.aibaodan.cn/163dlktxhue.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vtsdnxuc.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jasxoxwx.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163tkyutqbt.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163lbhopsry.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163etqpbrlm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ybjypqoe.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vwuugoix.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163dzohgsjp.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xynicnfm.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163aldambhm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gbrpglka.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yltopltt.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uewfsjof.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rmuowwmi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163broutvtf.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163wyvdchrt.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163vdvsbbrt.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163tzoimbdd.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163bmpkqtyw.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vlhekrpr.html

JS:   super.greet();
来源：http://www.sxryk.cn/163thchtijx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163tcixnjpu.html

Java: super.greet();
来源：http://www.sxryk.cn/163cmijbvww.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163imxtuegc.html

Ruby: super
来源：http://www.xuanzx.com/163ysoucvre.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163jjovtwzh.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wshvwzez.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163iqbmnrar.html


<!-- 参考信息 -->