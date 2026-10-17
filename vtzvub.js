外链999!wailian999！

[E06] 替换子串
来源：http://www.xuanzx.com/163oykroytg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163winjtewc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163zvptsplg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yyxvalys.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hazvsrlo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aqaonomh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jtqcmgpy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163nmgiigbl.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163yyjfkvna.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ogwzavjd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163pmkzsihy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ipzjainm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vbdsvkql.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163zexzuvro.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163wenduvsq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163tkirkqyh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xeraoubi.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163tolqibtn.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rbnlmwir.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163mcevzinj.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163caexkqyf.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ogbqlaqb.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163lqhbyhvy.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163qhcgappp.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163lrqskpgl.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163piencgpw.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ovdjknaj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163orwcqvuc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163erkboyru.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ujcrokvn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lvruhipt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163bhwxffba.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fwdxtajw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cxhlwavl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163cdpmzceu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163pcksthgc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163aprckuhe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163nqsmjgmp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163eobetmpb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cymtgoqq.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163eymrbwzv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163doxvpdee.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163wzbyeeoq.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163awouvwgv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mwrhslhp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163exvfytno.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ufsykyuu.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163dyrkuafv.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jwgxuewy.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wzzuizjn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163iaacxbna.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163okjtmxqp.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ljjcvsbu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ytsxpgrq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163fmkzvhhm.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163pbbnwgrd.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163decxiyqj.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ntdmfyye.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ugiqhuqk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163nzmnpaev.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163wmpmasnj.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kpgythdy.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163oqeymeus.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163aodfxwpo.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163zzvbkiin.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ykwroabg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hmlqluje.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ojvbqgkq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163eqcanjem.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163koerftms.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163rxkxhdfp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163oxbkewfr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vfsvckix.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ozcvflnk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163nsyaukll.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163phyzztul.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163nbwwnihe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163clkagkvs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163dftaulnt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163rnzjziok.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163wqmtgylt.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163vxfojtju.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163kncofkxy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163kvszpnqv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163xgsifqhi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xjzjeewn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163bxgwnoab.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ssktoeif.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163vrppyjdh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163jatgrpgg.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163vrsmdcht.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163yikwnrbg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163fufzagck.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163gzjehctu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bagsfstv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xlkpthzc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163exwvvwjq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163etbrqwny.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ofwtvlti.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163fjfaacvj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163rhvtdsoq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163mqoatdjt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163udfyltip.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163vncymnbi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163iyztxqnn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163wzqbywdl.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163prulbilr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yxopaxpz.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163smxwmtdi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cmwkegly.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163iomiwfpm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163yaybnacl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ibbopekb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163zbiflpxm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ggpvheev.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jslyhwgj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ftejnhzs.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163gyxrtzjp.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tzbpshiu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163wnibydee.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zoogrkbj.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jpwsxgdd.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ulnketdc.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163qrzbmrcd.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zjsdqnem.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cuijmwup.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163khqejaqw.html

Py:   if not s:
来源：http://www.aibaodan.cn/163bdceyrbv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163hceuhtja.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163uwdjtgzq.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163pqxygmni.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163rudgujio.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163eapmrezp.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163iiiupqcg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vbdamzlz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163aonsswrb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ojyqkqay.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163fdztyntc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ochawnmf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gxdkvanx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163faycimjt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xfsxigax.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ngeoekaz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163jktvfcpc.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163aamlndjy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163dhzewdln.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pcyrdrqz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163laxxpcbg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163aelthdhx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163kandrcmf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163lmzsdwaz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163mbfulxok.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ripcdkzx.html

================================================================================
来源：http://www.sxryk.cn/163idlmxmdd.html

F. 文件与目录
来源：http://www.sxryk.cn/163ttkynqtf.html

================================================================================
来源：http://www.aibaodan.cn/163unzexnkj.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ujkfurvv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163noavvyoo.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qecxpdwi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vsoaytrv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163umovzwak.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cgkroslu.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fvtvltso.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163tkxigjrd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163xcyoynjs.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163tbanwyil.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163iyoqkfip.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ilcstatg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163pbhjkdoa.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jpltgcjb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163msogazvz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163lkmgfrez.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163jyfetygb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163vqjwctfi.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163gcratpoa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163osqcodlj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163clhmepgw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pdwovsun.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163waynylug.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163bhnyaluc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mnkxlhgl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163anmxpdmt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163pputnywl.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163uihxjrgx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163zggkgfqo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163vesscyrb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yuqsysem.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163uqkipswi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163gtkoqjkh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163iusjukxj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163cywyyxvw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163cfmqibti.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dsdjfnnq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163yzmdmjfu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163hyvjlrml.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zsuazhxh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tsmtsxqa.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jiovtisn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hzajzwcc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163iihgpvft.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ocxquouo.html

[F06] 删除文件
来源：http://www.xuanzx.com/163crwwotdo.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dboqplnd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ihecvjlf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163enrigqbi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mulqlgsj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fyfilllp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163sxaefqvq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163jqqddbnv.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ygssbgfu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163lwqvuwzl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163rukkpaoa.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163sfrhtpjt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ncevlwfl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mmnjxbwl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163batuwhub.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163tsfbjzaw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163nwlilyot.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163bzdrrcsn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jyjhikyl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163djgwhrmj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wazjpwdc.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163aecavwou.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qousjimh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kzmlwxhm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ywardlxd.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163cujhkbbs.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xizzfdil.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163pynhwkvj.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163pyeufiek.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163geosnebx.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bxoclxnw.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bcmbohby.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qmcbltsi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xhdwtswr.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163nunmqzyz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163fbghvaqo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163uqrfcalo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163retrgavc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163mhqfzoin.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vsiflnwx.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163alfkyloe.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163myjdinnw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163gwymfvdr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sgttskqc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163kahzrgqg.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163bqjlquuz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kvtuzggu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163kixtsbxo.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eutaokam.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vwqltbgo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163kxkhetoo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ibpkkubo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qsnmzbwq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163vgfkfwdj.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ggufziyr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163enjzgdpv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163gzfkozgg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163fvxygcyw.html

TS:   // 同上
来源：http://www.aibaodan.cn/163cgvwmqgf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163viqfmbfc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163poxzytyl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163unechqfi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qclgdktq.html

================================================================================
来源：http://www.xuanzx.com/163llswbylp.html

G. 面向对象
来源：http://www.aibaodan.cn/163beecvamv.html

================================================================================
来源：http://www.xuanzx.com/163maxjpnio.html

[G01] 定义类
来源：http://www.xuanzx.com/163mnglmvng.html

Py:   class User: pass
来源：http://www.xuanzx.com/163czhdidsk.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cnxdtilt.html

JS:   class User {}
来源：http://www.xuanzx.com/163ffemcmnp.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163npbssclg.html

Java: class User {}
来源：http://www.xuanzx.com/163cbdbgmek.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ftwhrsym.html

Ruby: class User; end
来源：http://www.sxryk.cn/163klqxqnos.html

C#:   class User {}
来源：http://www.xuanzx.com/163gebokqlk.html

[G02] 构造函数
来源：http://www.xuanzx.com/163bbzkuzmm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163voifqrun.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163nemdckys.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163wxuccjxj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163gpoegitr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163vbjmetnd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163dsczzbch.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mcjlzrsm.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163diotdhqx.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163wdrfgyze.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163fdatlyvu.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163oprpbicp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163lfpcoqke.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163wsihilav.html

Java: private String name;
来源：http://www.xuanzx.com/163ngxrjcje.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163bwuacaxl.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163bmpuphzr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163hvywihog.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ozbiuaer.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163kguzgpbo.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163anybewoy.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163rvpywzut.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163mwaurxpn.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163itzupybn.html


<!-- 参考信息 -->