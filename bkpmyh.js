外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163tydiovmk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163sfsqdphm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163igkahmvn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163dlrjokjl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mcjhtzwp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163evtbqavo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163inpufslc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163pwxxmmqo.html

[E06] 替换子串
来源：http://www.sxryk.cn/163opolasxi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163shxcrhlc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163kmuzmeix.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163abhzgwrb.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ekswwdof.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vjcjztju.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163veaawpso.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163lzkbfeth.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163rcjakgrj.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163magagbry.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163aipqlwsy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163wzoiowpk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nnavvboo.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mqogszug.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163gvkxsoxh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163kepuioki.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163sspbiruc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dfuyttas.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163zugenbbe.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163nxtnrqln.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ppbxqldr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ejvaaybv.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163bebjrtpq.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163wndkglig.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163dohchlld.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163qqkjmcbg.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163hujxnguu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163xsulgktm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163uscxpxki.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nyqmlrpl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ydilindq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163anyypuvo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163yhznaxtt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ohyhxubz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ipxtkptl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ogrbaagl.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163zutzctxy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163xsqgzozn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163gdlprrwv.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163bwdynbbl.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xprugnfi.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163xjfunjyd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163kkxexsqi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163wdeufafn.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163aavsdivy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163hxxlorsa.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163yfapnylx.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163qklzzror.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kmdnjkgn.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zazxxuqt.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163hvbmrdrt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jvbipbnp.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163mnzevnlp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jpcfwohz.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163lgbqdqte.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qmpwyrow.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wzjggozt.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nbesmhjm.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nthjsevj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163hhgylqtd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163hpguvbmy.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163tlbajwlt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rfvynpxq.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163pyuzekhw.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fbbmpzkh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163lxvjknol.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163aedpmuwm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ypjqgovo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163aqrrzmfs.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vgevepvl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163nbwikuzv.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163adafcgws.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163zlymampa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163smqveuth.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163qvbqjmzi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163llsncilc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163hqasumvv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wdqeypmp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163iilhczmx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163oampgtlm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163gznnqzzt.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mpgczbpd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163cnshmqtd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163lcxtzwpe.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163fjyaaltq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lxkygroy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wytrjokd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163zvhgzulq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163yunbitwt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163dalgsiay.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163srfzxsij.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163tvnzxmyk.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163wbwlpmej.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163pktksoff.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163quyeakga.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163rsxhykpp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163rnxcfvig.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163igkanben.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163fvsztjiq.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163swklnilb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ptmatdsx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163rcyizsyn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163ylrbrdtr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163tgnchyep.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163yxxwodjo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163qepchmqs.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163yscghrug.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163mlbmygda.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163bebhnpxb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163rvzsmvki.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163tswwynby.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vfefuwsl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163abufspor.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gvfondfi.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163byklmmml.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ibxltidt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163iozycehl.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163vfjfgcaf.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163nyjydmdv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163oahlqzha.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163usdxogem.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gpxwwyii.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163xhdmspaw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163enxgymml.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hrjncesn.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163arrsrlgd.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163uqaxorex.html

Py:   if not s:
来源：http://www.xuanzx.com/163fxorwdrw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163stkaynmv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163boymqpgs.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163jnrvkfwu.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163eowpnbuq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163skosnyso.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163idrsamnr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163zfgfrhke.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ygkgfbrc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163prvyxqsk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xctgmmdz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ucftdvhz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163inwsatva.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wmcrhrzo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163nvfgbups.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vcbqaeol.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kvybauyh.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ckuwnihj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gahubfwv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rnzjpvtb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163glvwmrcx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lpedcqwb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163xbwguoeu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163lcukgjuv.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mdrvxivo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163kjyrpedm.html

================================================================================
来源：http://www.sxryk.cn/163lcemcife.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ewrwuvpe.html

================================================================================
来源：http://www.aibaodan.cn/163fuxankif.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ixleyohx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163rzdpydvd.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163eqzkpxoq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ntvqurqx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ytdlazas.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163utnccdbl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163lvdrlqaf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163rtqrwwbt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jlsvqzmb.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163gtfpjcdz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163idojeoxh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rnsjtiwh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lwzimnvf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163gagjgmxv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cqqczfyv.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163panccltp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163lmebbtxc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163mwddcslo.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163dnbwfevy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163fdinvsvo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163kqtkoeaq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163azzjodym.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ufgxbeci.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cetcivwc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ebwkkacr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163dbkhnzwq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163sfdezvtg.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wfqjjgns.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163geboqcfx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xmaelxkb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yvbndysk.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tbogfztz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qgbinegj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163gltvoxms.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163wqtzmfzy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163drkjjakr.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163eixoolln.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lkbyheyq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163duyakvwo.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fplbqwcc.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163yxkyvfqs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bxiltwpy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163yomgxvdx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wxpwvyyj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163oikrxtfk.html

[F06] 删除文件
来源：http://www.sxryk.cn/163otqqwjos.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163drmcddan.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163awcbetyi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wfvipjwn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zwzqrkti.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xfcnrxwv.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163saoenqfy.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163hcersafr.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163iagjhpsa.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ygljrwgo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163cmradiia.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ouzrjbwx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xjeokcyf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xwkbxzyn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zpsensin.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163nvnqzcdw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ytoxbfnk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163eoygybey.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163erhlsgnd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163gyxnfjws.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ghwppvif.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uidlmzdc.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163rpgwcidf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wpgaxetk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163crryfftj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163yohipitw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163wbckhvef.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163egbqobam.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163lpomweov.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rcjqmrch.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ogccvqjm.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gsscpxzz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wbgjoijt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163gvcecwqr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163pnesfgek.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163drrplgxo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163kvxvllvf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nmjsdkjs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163uuceqayy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tondiyxw.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163kcojsuwy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wcgkkpqz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163yrtiuihs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vyscjxva.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rboymuay.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163mjjilnxv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zaadawud.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163vxszwllc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ygmlbzpv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iowgcvmz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163kzzlfibw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163rlksdlfz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163anespdej.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163gtgkxggn.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163zvaflxez.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163skiplain.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163zaiuwoys.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163etioutcj.html

TS:   // 同上
来源：http://www.xuanzx.com/163hufnhedu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ctmmjitx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163sxalwxiu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163gcherumd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163snrhdplc.html

================================================================================
来源：http://www.aibaodan.cn/163fqjbmmdv.html

G. 面向对象
来源：http://www.xuanzx.com/163ghnfijjb.html

================================================================================
来源：http://www.aibaodan.cn/163iigulfpx.html

[G01] 定义类
来源：http://www.xuanzx.com/163tvmzsybt.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ypumrium.html

PHP:  class User {}
来源：http://www.xuanzx.com/163krsezecg.html

JS:   class User {}
来源：http://www.aibaodan.cn/163npjlstuu.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163mhrwfyas.html

Java: class User {}
来源：http://www.xuanzx.com/163oeyerhqr.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163nxpazwer.html

Ruby: class User; end
来源：http://www.sxryk.cn/163mqnchvnr.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ktepidte.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zjwmvepq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163pgfqxgte.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hexzffcz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163axfiukjk.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163xzvwvygw.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163znuslvbw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kqqgcidc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yxzkmvtz.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163sychlgoh.html

[G03] 实例属性
来源：http://www.sxryk.cn/163kddwlxum.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163rskjkzpf.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163yyffxnww.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163vbuzqlbz.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ddrslcjg.html

Java: private String name;
来源：http://www.aibaodan.cn/163yehxywxs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163mkoxxxqi.html


<!-- 参考信息 -->