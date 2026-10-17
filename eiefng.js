外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163kaflfiuk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163hqwzfxbe.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ohdxkbce.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163igamnyvy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qvdhwejm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163dhrgvcmx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rbydjiyd.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163uzttabml.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163veeqcvfb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xhxdtmwr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163fzynrrzo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xduhqely.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uoocejns.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wubfkdsh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163wpspvbly.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ksdseqwa.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xfmbmqst.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163tubyjyjc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163lmpnzrpt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163euvrdnck.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163uclhjmsf.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163xehbmqpb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163jzunmrts.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163fbonzkkn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jfcylupl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163gecosvsg.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xqxjqdwm.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kziicesh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ddnrqiis.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163jorlfcua.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163nwokxmdy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163gwgkgnqi.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163umfyyzpd.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163aysuendc.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163rstearxh.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163rpjogcas.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rpzlwpiz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163zjjupgry.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oraqlvkf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163sqotwbpv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163twibdkfb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cqrivbhv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163icjevvlm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163uzrtzenu.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163tlmuwcay.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163fmeerizw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163qcfxkjbm.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jknganuw.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163wobgxdfh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163foonbstg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163iyahjgfm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ygiecyxx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163fyxhrrmg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163drymnlip.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163scahcgjr.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163kxfojhpz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jnxbajbh.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163tpyqirqe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163qrxwzehq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163zglzskkb.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163vmkiyjjk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ivcrxypm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163yotrxtqu.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163grgrxlwr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163nbmddnzj.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kdhxsdvr.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mpijnqky.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163qhrrscbf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163elvgnard.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163qtzdubqt.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163njmrifne.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163vamjqezs.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163bttfdqko.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ptrmsugx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ebvunxul.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163geivijpw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tsfygudh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163adfbiyqg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163pheecmkm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163vmpyrgre.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wfsphxqg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ezbscssf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163kcgabvxs.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163lmcydisq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ehfzfuyx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163iedacvcu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163duteqfng.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ahirntju.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163flqrmpka.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163mupdhmez.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163pczqvlse.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163hveebzae.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163pmxrukki.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163wrhbzpkh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163tueqalmp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163bferruah.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163eipenhlu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163waomhgjs.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wfpaakdb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163bjcxsgvr.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163gnnvhjgw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163syzqgrwr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rnhinhju.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163krjjfhgb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163delzqrdn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163bcqbwifk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ydtzxrsy.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163bzjkqdbv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163bdcxscpi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wfustjub.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163eknwiclg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yrjrdjwj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163qolktzvd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ulvjwrjd.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163twjoakqd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163gmxbccqd.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zhueefei.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163frfyorvu.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bpmajqpk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ztkugncs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mcnfynva.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163zdatnjyd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163claiswpg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163vzatloaq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163cjrehssg.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163qruogiff.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163tlgatgve.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163mioiavyd.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kwbzhhao.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163irzfxnhr.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163qgudskcd.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163sfwfncoi.html

Ruby: s.lines
来源：http://www.xuanzx.com/163dwticohq.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163abbddlgc.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163cuakfdjx.html

Py:   if not s:
来源：http://www.sxryk.cn/163zfsnnawo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qatpsbtw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lngtbpdn.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163nhzvhrsq.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163pbbuqadl.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ieshizyq.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163lurklmza.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163wpcycane.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163zctstmzd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163iiarjlsc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163omricans.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dfrtoqzc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jmkhbtvf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163njwoxtuv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163jnqpzpea.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pduotqru.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163wrvmizvm.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163tzzbgjae.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163rbiwrbbj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163majkgjoo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xjstnmwz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xnpbjrgf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163kpsdpyzx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163azzgjhbg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jqrttxbh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163pdftqgqw.html

================================================================================
来源：http://www.xuanzx.com/163rpmuuodg.html

F. 文件与目录
来源：http://www.sxryk.cn/163ozcmxgfg.html

================================================================================
来源：http://www.sxryk.cn/163aprppqxo.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163wxlasozg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163oepxvyzh.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163feyzlvys.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163kklvrhsg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163rsjjgfti.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163inrfplar.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ejbbnriq.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163gipgfodv.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163djywlyuj.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163roafdslc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163howegrlv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ieqfawvk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ylyogwah.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bnziwwex.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xjgyscrl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ahtpfxmp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163cabxqnfq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163lkntfviu.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mheakmle.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163nhgibbye.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163uyimlmjq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163whcvkuql.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zovcdyyy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163lpydsrrx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163krunocat.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163iurteadx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163eipfewxr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163dbrxwuhg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163socrdvlv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163meqlrnpy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hhvakikm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wwurbfqm.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ugyslavs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zguvlbjm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163txaecjjs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163jkknqior.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163njgrjpgw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163yafwugrw.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163bpgnelul.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163eimbcath.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163knocpogf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iuxdxgfv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163uhgscfmi.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163vpcgpunk.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ajtmfutd.html

[F06] 删除文件
来源：http://www.sxryk.cn/163rdahkckb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163zmobvaoi.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ogarcltz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163iyfdtvyd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vhzpbzmj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nbtdyhgf.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163guulmzcc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163dugrqtkk.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163faswckwb.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163qgwpbxkq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ennqubdz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163sggkpbda.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zxeaasjv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ocmqmgbd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gchefdcz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163ojshtbch.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163syfmehfc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ajnzsfwv.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163itantpbz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163zqfclnna.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163xmzhnlgr.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163szuvxhln.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dkydksbd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qwqerzqa.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163pwyotixg.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163dwhkantn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163mlrghexs.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163olwkmxtu.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163oievdfud.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zoofhhjg.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qylycrhv.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hwrmiszj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uxuffkpk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163snhrpdzn.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163asvnigjt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xiexnzhy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wplxhzvo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lsridpzi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163pwgyaqeq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fukktobt.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163cakhtddk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163mjwusnna.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163oqfwbfee.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lnqdaood.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zhakzxzi.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163pvenyeta.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mxqaecqt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163lfzzpvwh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163szstppom.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163crahgrpy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163sjukpllj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163cgobcbbd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ipnrztmt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rsgmqgpc.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ljldryin.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163wqtlrsrd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163digjpcun.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163yvsnmjyc.html

TS:   // 同上
来源：http://www.sxryk.cn/163slueocsk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vnnqvxar.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163xyjxmtwq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163inxdqczl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163mqssilnr.html

================================================================================
来源：http://www.sxryk.cn/163ravhudap.html

G. 面向对象
来源：http://www.xuanzx.com/163ylonnqsr.html

================================================================================
来源：http://www.xuanzx.com/163qekxazcm.html

[G01] 定义类
来源：http://www.aibaodan.cn/163fkqzkkxt.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163pkfmqaqt.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163zqqwszeq.html

JS:   class User {}
来源：http://www.sxryk.cn/163lngutauc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163skqdtwyl.html

Java: class User {}
来源：http://www.sxryk.cn/163irannnuy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ljejvaed.html

Ruby: class User; end
来源：http://www.xuanzx.com/163osbxnwvu.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pxsahxmt.html

[G02] 构造函数
来源：http://www.sxryk.cn/163djjsukof.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qhanvyti.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163tntuemlh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163aoapvexl.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163jpguuaxr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163tklebgsc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163dtipvwnp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163lpknozwr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163pmksuwrk.html

[G03] 实例属性
来源：http://www.xuanzx.com/163chnpkmvj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163xwoazpww.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163selcoagj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163axsqhvzn.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vlxoahkw.html

Java: private String name;
来源：http://www.aibaodan.cn/163hzgvjvux.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hiwzamod.html


<!-- 参考信息 -->