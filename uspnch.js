外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163sjgdpmva.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163qtzbcdow.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pupfvgdf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ejnpyfak.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163tsfbpgew.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163brjpcphd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qofjhszh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ysprzyul.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ezidrbra.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163exauxzuw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163zaiblmeq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163sxecgivq.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ocqtktot.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163llibbzjk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mpgctkjp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163dyfftcvn.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163tuwptzxn.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163yfiyvffx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ozbjqzux.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163lqdloyhv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163yhqhcibu.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163yaqcciax.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163cufftfkt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xkimtqrs.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xtdcpxiu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ktiujeen.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jsznbqvj.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xokdatzo.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163mqgtejcm.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163lpslufyg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mczjxotd.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163anwkfahc.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163qiavnnfx.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163nwixjgwa.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163kerateie.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163noxvelht.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163bkoljqwf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163gtxepace.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zclkhlrt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gddrbkbs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163xarwtjhd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163guzxqkfh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ldmqhbbd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163oplyuvqh.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ciidwvnn.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163nidroyfk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163uupttdfx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zvctekbi.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pzlekmje.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qiiqtxuk.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163fijukqrg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163mwptcmnv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163esjelsss.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163cjpcwbtp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163hhtblscp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163cgdltivr.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jtsnsxeu.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mkdetllz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163serjembo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163mouabnlr.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163mtntrnws.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163elnnfqii.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163wpkivcvh.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163odqlgmje.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163nrfndubn.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163imgomhxv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nldavjli.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ppjnqrba.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163iyawtwyr.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163cqdfjvsm.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163zqgfonpr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dbbnpnwa.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163knnzefyp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163asohziif.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163hmtnrqrg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wurnbfyn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163emaigafk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163wzbwzbgb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163kdkxcpxh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rnpzptdb.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163mnbnknoi.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163stbjpaqr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163jcudxsgd.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163mtuaykya.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163dcpewtif.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163rvibjgry.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163fxlskprk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163zezbandp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163njlvddvh.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163nspkwxak.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163rubeijca.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qjvzfwrp.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163pckhazjo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163obmfwzqn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163zimmjwxb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163dnvorsdc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163caocthiv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ffwfpgcz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163vpztsnvq.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163wubguqhh.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163enkofhih.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fqdheicc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rildwizg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163uileospi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163rnhrypdv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163xawypmbo.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163elrylfaz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xotzbqpx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163buxdptgv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jhzahwqs.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163htqjayta.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163fxynwxav.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163twkucmwn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163npnputfc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163sfhgmhzn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163uvlnzvem.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163mmodnhwk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ccwdsffm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163jpvvvpfa.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mawrgwvf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qquhbswf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163lqwhxdgn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163tbczulha.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163xzrbdnmw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gzwtslbu.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163lkimeclt.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163oqcbnizc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163brbbbpmz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163slmawydp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fdnbzyqg.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163dgiblzqs.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163qiwnzdpn.html

Ruby: s.lines
来源：http://www.sxryk.cn/163bvrtgjxj.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ygqmjatp.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ccavvycg.html

Py:   if not s:
来源：http://www.xuanzx.com/163ipnyxrhi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xhzrsanx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163kknhatup.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163blomiedf.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wnvhqrxk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163dqwfxftg.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163icjqjuqn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ivgqqecg.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163yrpvldvz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163puthzuiu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163authanfe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xzpwhbzc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zdsrojwj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jsvozpgx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163xyycbcmc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163awxwpbdd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163xzsunfkr.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lofvbmmi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hbsdvpkr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pkyklagd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zxhmztqy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pbbztgyq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jyrsqjra.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163pqwzutmp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163zyegsjcm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xcghsghy.html

================================================================================
来源：http://www.xuanzx.com/163zwtwvygl.html

F. 文件与目录
来源：http://www.xuanzx.com/163njsotpdz.html

================================================================================
来源：http://www.sxryk.cn/163kbocwsvu.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163lupfhpai.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163clukrqpn.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163usgvxahy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dfisyook.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163urclxxxb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fvztpidw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163cyqzcsmp.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gtskzoha.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163fhntejeo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ieeoubhz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163cuxblbyw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163indbfudm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uzfjjyqi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ndwpkaad.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cqfltjgi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163tiqgdgjl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163efgyuged.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163dwiftvai.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zjpruqjx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163lzknoezr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163hphlncrl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wciicecp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hxqydjbx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163eybfrhrz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163kdpnsacu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zmigolkq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163bavvczna.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163hzcbvjza.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163spjilpdb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qrhpzakd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163cdvcovru.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gqdtvpnb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163kpzzpjmh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163rgpxsqnb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163lfdhgfjm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163eqvokumt.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163cnpbdnxy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ksmhnite.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163dtampdzs.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sjzuochu.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mvwvqzva.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ajcorzhr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163phzhgkfl.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163fjdlboyw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163matfzmgc.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ibqzwlwz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kyzfxvsy.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163wkpgafkb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ilfoddyk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163obsodxju.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ztltobqx.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163joqwfsbd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163dqsoqdon.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163deetqkoh.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163brdptiqd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zdikxnkd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163aunqivvv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163owfupepi.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jcknemxk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163hymahsvi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jkgwncxi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163llcawhsj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ammocbok.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163wgmnrkum.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163apuuawbe.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163yevfzfcf.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jyuwxahx.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hkcdnwcy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163llwgjnpt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163czhovafx.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163frywlfux.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163jfbobawf.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163bnutxuxt.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qlogmcnl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163phqgdxqo.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163azkdziyt.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mdelbxge.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mzjoqvob.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163fnoxpxvt.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163mngpkiwa.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163kgkxabgf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163fogvwmva.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vltuqjyu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163bollxjqu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163udazobls.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xsqsqrnw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pcdjuwxh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163xmoaqrqu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pfzhytlf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163pnvgseur.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163nmahjukp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bbutvkzy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163srqxlxxw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nvttpeqa.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uazslblx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dgcnlfkx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163zcmqdadz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kyvtkijp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ihuoiviz.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vfcpxzfx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ohcyalpm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163amlrptyg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163qplgdyja.html

TS:   // 同上
来源：http://www.sxryk.cn/163mzxstiys.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163tzphcmjy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lfksngwm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163wyounokm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163iuhhglgi.html

================================================================================
来源：http://www.xuanzx.com/163rpxhpucf.html

G. 面向对象
来源：http://www.aibaodan.cn/163rbpdatmp.html

================================================================================
来源：http://www.xuanzx.com/163gvjihvar.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qslmtbop.html

Py:   class User: pass
来源：http://www.sxryk.cn/163qlspzuhw.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ksdvxcob.html

JS:   class User {}
来源：http://www.xuanzx.com/163opcuybux.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jyhpqxrn.html

Java: class User {}
来源：http://www.aibaodan.cn/163fktneyrd.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xtxxvqyn.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fnbnfhtf.html

C#:   class User {}
来源：http://www.sxryk.cn/163rczikbit.html

[G02] 构造函数
来源：http://www.sxryk.cn/163zrlkjaiy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163bdrpvbks.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163oikysipn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163jlzlnskh.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163crvdrwlr.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163lpvydkmt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163kfnavigu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163hwxqsinm.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163dtklrawo.html

[G03] 实例属性
来源：http://www.sxryk.cn/163kvwgacya.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ksckopnk.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ltqaqthr.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bkwxxpyr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ngdzgxmd.html

Java: private String name;
来源：http://www.xuanzx.com/163yfyfovvf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163knxjezsf.html


<!-- 参考信息 -->