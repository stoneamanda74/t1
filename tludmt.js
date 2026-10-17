外链999!wailian999！

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163qefprwma.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163uegxzzkr.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163xujworbe.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163gsevbjcx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163yeiozpld.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ixvhvjlo.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163pyhqgyvh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ehrnbwqr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163mclpdodo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163tsfutdrq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fqflfuuw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xzisodej.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qezdmhkx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163omkazhot.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qvymxbom.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163harjdmpp.html

[E06] 替换子串
来源：http://www.sxryk.cn/163eijifnuc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163flmuhsnj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163njtlchhn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lrmlblku.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yqlmnbto.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bofwvbht.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163urwpwvkm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163hxouxsuq.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163byyxldwg.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163socgdpim.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163fgmjzkuq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xcbappah.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163kodxebah.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163edzyhaxt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mgafnspv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163zicjazyo.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163eaxbxcwm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163bmdcrkkh.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lozvkesy.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163nvlgcsmo.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163gvtqtose.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163qaqasviy.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163wgbnvweg.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163laoxyoqz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ufdmsvpb.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163nlegxvtm.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qrwizsmz.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jixrqdta.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163hafydolh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rmtrcqar.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163queplykh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163fqegkkzk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163dbwvmeeb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163pryjyris.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163cvmkncmo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163mdbqnmsj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163drmvflaf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pjoyjqqz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163dqswusjx.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hrvxwvhx.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mshxsfjl.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ufnkxnkd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163mlsorslb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163nljryklg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163jnrakois.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tormsxjj.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163bxtpewzw.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163noiqmagh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vpthzuzw.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vozgbusx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163cfxkcosk.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ofwgashq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kmpnhbdl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163crrplhwk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163eiqnhtxn.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ahygzljg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163vouoftwl.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kmsnjodg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wbjnomio.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163tvfrvqcd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163wbqxyvik.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ecgxreow.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163zkxamhxs.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163xpqovsqz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163oorqbdkl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163xuwkjzfz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nosxtmpe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jwxfiilg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163fgdrmaqh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163oekhmumm.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163psemozpo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ggxdxyyx.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163eepswnkm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ufuknjex.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163hbetovnq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163rmtcuvvk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163rrwqtcae.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ylsgjjrf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163kvehcsya.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163xrvmkmob.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ljplwfah.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ptisqhvd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163nmhanbww.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163flwamabx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163vgacairm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163reizsyol.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hwbfghsd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163smjhvixo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163okqxrvtq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xhwxgfdp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163kgnjqzkd.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163howhesss.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163santgemp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xrdegbxu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tmlbawdl.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163tmxpfmfz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163lkvgddaf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163zqdantyi.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fvtrmmzv.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163uciqjvkd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163gerjtzlq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163wjyrixhk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nenlasuv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fwoynmxr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163jtyxoonv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ocwheftj.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163qfmmmlmo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wqqpxlrj.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163zndoiqza.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163bndblgqe.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163lkneagcz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ygkshmpa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tgxquapd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ptsbugxn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163eanxmzmj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163rbewarly.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gjdtjqow.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163szbpszjj.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bevamlln.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163loqddxvj.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zafpqsou.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hvdamwbg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163lhdkmjwp.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163vjxrifct.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ghivksgb.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163pkpxqnvp.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163hsikuusc.html

Py:   if not s:
来源：http://www.sxryk.cn/163vynxtrda.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163vyyfjqjl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ovkwjglw.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163hsxyyljz.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mlaefttq.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163lcjtugwo.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tqdtdrlz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jgsfktrl.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163xjbdsbni.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163yfditvuu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163lgokiqwf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163urflshjv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ubvjyprb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nbhvzisf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163wybieglj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163tlifznco.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163krtpqmcv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163yqqjnpeg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163suzkiyep.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ausflwof.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nyaknjoh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163euqgjazo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163gqpgxbvg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163afkjrtpo.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163nuqxvlkn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163seikzouq.html

================================================================================
来源：http://www.xuanzx.com/163uxrsbvid.html

F. 文件与目录
来源：http://www.aibaodan.cn/163qgvedikm.html

================================================================================
来源：http://www.xuanzx.com/163atxaspzb.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163bjsscwrg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163euouqhtj.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163hcasndjz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163grrfpyox.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163pliscugv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wvhvlehc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163goaqbgkr.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wlsnlewr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163icbfurti.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zpixfmyi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163omvdknxj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qorudwlk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lzujahay.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kgxevesd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gxxasgot.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tjixfhuk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ndgvznbp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163dqbdnzpb.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163smqbbawy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163cjqcxhyx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163cgrdhdvn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163uuoqirwb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ovckxjzm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163sqiigkya.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163txjvqgyr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163iymnctao.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ttndodin.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hsksafxq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163aaqrzfol.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163hohixvch.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qyjizabf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ergtwpye.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163abpcerki.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163mxchnbcj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163odbkyurc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163misxaaxa.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163aaakdgzf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163otqfpzcv.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qusoiebs.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163eaihajbp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lzmouonc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163atanrsua.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rertoqcf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wxntnden.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163jvwepnlq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163xmkgiozv.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163jeahwmrh.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163emajvxgu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uumbbsez.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xmsvcnhm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lbtpqiqg.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163arkioaju.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bfeoqark.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163aylnfqoc.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163mibtbcad.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163dnjixxsf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163gzqprkfu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163audbwqqx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163xlkzfggi.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163flodaezj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163xqtwrchs.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tscshdos.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163jinvrsru.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163slifkfsj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163elxaeeqq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ntdoxqru.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163pkrvzxen.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163iocbqokd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gmcimapg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163dfmqgyuh.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ynmnrdra.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163isvzvndh.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gjquuxup.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163lhscubnq.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163matgcifi.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bwcxylqi.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fffkntkl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kcumaour.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nxwasbei.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163htmcuzvd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163uvtodhpg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163rkptxbtz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xogdopks.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163fvxpmfbo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mabhtakc.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163mykyjtcs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163enqdmlzi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163tnnwwslk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nnnmsxzd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163hylwqnnp.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dguwuugb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gljkicej.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163pmdtwmke.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bxrjsqlt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163axsvqkcd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163slfmodoh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163yxmikiju.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dfjkapus.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163slbigjid.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163jwoutzsz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163fawcjcyn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163xznnbexv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163zghasmkf.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ypyrllbx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wkpjlama.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163bfolxqut.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163qazjpist.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163sorgbpvn.html

================================================================================
来源：http://www.xuanzx.com/163ovawxnfo.html

G. 面向对象
来源：http://www.xuanzx.com/163poaquxyg.html

================================================================================
来源：http://www.aibaodan.cn/163biijndiw.html

[G01] 定义类
来源：http://www.sxryk.cn/163crtnwfhn.html

Py:   class User: pass
来源：http://www.sxryk.cn/163thnssoyg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163owsqmjda.html

JS:   class User {}
来源：http://www.aibaodan.cn/163bizqcdwp.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163dmghftjv.html

Java: class User {}
来源：http://www.aibaodan.cn/163jqtsrccl.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bqedukgm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mzvntepu.html

C#:   class User {}
来源：http://www.sxryk.cn/163afhoomld.html

[G02] 构造函数
来源：http://www.sxryk.cn/163bafckmhf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163hucwhkys.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zzlbjipg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ilbgskla.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163msfwdkzd.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163mogalmah.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163abjtehwn.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163xpvzddvr.html


<!-- 参考信息 -->