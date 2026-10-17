外链999!wailian999！

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zxxkvneh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163rrillmat.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163cgazwhqj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163dxtnjigr.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163abaikgpz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163xsiahimc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fqznjexo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ljplwjnx.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zdyqcknw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ipjcgcff.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hhpnucmw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163qnxdkqjo.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ziefdkot.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163xxfammzn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163rekjpvbq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163robfmaht.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163pehynqcd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163dqrsmjfz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163avebrpek.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hrglmaah.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163yxauuuef.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163llzywebr.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163gkczxmrv.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163btwwuqzy.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163wuyvxugr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lyrkuzjk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163rznlnyor.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163rtxikewo.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163tynoropu.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mrjvyvvs.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qoykpmlv.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163praetsuc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163uwetsfgk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163sauxozkf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163egiqjtws.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dojsfged.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wxthgxrz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163bagtkqcb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163fhhcmhtr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163nnspofcx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163adikfgdw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163izejvfwd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163urctddfu.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kweaswzk.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rrkrxvda.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163sfjwzgfd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ohdifeil.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163elhwxdnj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vfscssfs.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163egrmxdfx.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ftxqtass.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163etknrtvx.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tqneevss.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ahptlgrd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163sgvupevw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163emhotlzg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163uojdjxer.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hnklcyqi.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ohqfykzt.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163yqgrxgxi.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163cfyksboy.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qonubacg.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nlspvuuu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163hrerbscl.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vjaotgrq.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kkjpbmkv.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163glrghsqa.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vkxbyaja.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163picmtwsf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163eonnebbm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163owmrnrtd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ikqdcowb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163svuqemzk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163mmqdvild.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163tfpvdzlg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163crrfgkeh.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rngrfmch.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163rgbdchoe.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163mmpqizhh.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163naoxsxnd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fbfrgwvr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163tpwoxidh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gqijmafb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163xybbgkfq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163gtmtjakh.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163huzpdfqc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163xzhwwrhh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163wtygxhzv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163utkivkno.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163mtkdikkr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vzhothcr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163sqhsvwxh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vgufyuup.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163icmncogq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163qxomjerm.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163xaqeblit.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zawhcpyw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ouryqrvg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163efwpduii.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lnfnxisa.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163zovzhqgz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hndvpxbj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163xtthfnov.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jkfmefpk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163oyeylzoe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163mahwwmyi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163hxguaesq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163retixxtf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163wkwzzhxx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163xlubwrti.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163vvcdjymu.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163qeqlnxbe.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qivfzgmo.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163qhaqjkns.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163rkdopeel.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wfzadsfl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ezfwwatu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163dibtmygw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163mwukqxjr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vplyvbww.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163fusylsut.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163bmxwyrnb.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163fepsjgbr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163fhqlnvph.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163oupdflvv.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163qknkkfqi.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163twxgwctx.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163jjkpchtx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163qfxcyxlw.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163jqxtsqhz.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163dtzlpbls.html

Py:   if not s:
来源：http://www.sxryk.cn/163twtmumtr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163flmiyzfe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163oemfwfed.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fqwuyixs.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ogxpyxcn.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zjlhwyrd.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mkevchnx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bmoyvllx.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163lamhsaxr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qijlrjct.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hmsdhaxe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163soijiyvw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vujmohqj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lumkykjg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163nfihjrvi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163nqtyqixm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163lcrqxtwm.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qkolylfc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ymedbvro.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wimncvzz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163eabjbhrz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fofjvctm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163tlmivddh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163rjzovabn.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163cqjgytms.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jvqkvivw.html

================================================================================
来源：http://www.xuanzx.com/163ysrfijrx.html

F. 文件与目录
来源：http://www.sxryk.cn/163ifhnylmh.html

================================================================================
来源：http://www.xuanzx.com/163wnsdtfug.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xjcgwoxh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163tvtdblkj.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ozdudlsz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163imgrppen.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163gkklxkfp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163khjhjiad.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163kmqvtdxf.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163abkbnqat.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163grcipjrf.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163rgllpoiq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qrghvytd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163fntvfmsv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163dgxqypvg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lepokhrf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bpaufjne.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ivznvqiq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163rvrcmrec.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163mbbwrani.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163yqvradyi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163urrteuna.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zqlpqmnj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163graztwwg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163abspmpyv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ygpeqeyd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rxnorwfu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zwpqjgaa.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ldadlpbq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163erstxmyy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zjwyobet.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xoecorzf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163anijxmql.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ngwwqita.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163nqlrhdwe.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163rpfisdpd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163tumvsjel.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163gomwnnmw.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qildseyf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163jtyoycuz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tzrgvudb.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xkyvyvkb.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163scuypabz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ikqqemxf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163inotrvuw.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wgrbsaiu.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qkxpvymm.html

[F06] 删除文件
来源：http://www.sxryk.cn/163uftwcojy.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nqbspvau.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163xiilaaoq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163biartkrh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wpwnzxnv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uqcsmcea.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163goqciqbb.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163kqmuxdvx.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163mbcchjze.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163efbgyidy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163yiplxtqp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jsvvqwzl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163knsiuwfc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163relgkttv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163elbytnjd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163diacanfu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ztyunzrt.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163mguowktn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163houffjvf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163uzqxfqgv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163aymqpybo.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rfqsfqcw.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163couwkjvs.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163kqfifemz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163yjxipzjs.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xriztgop.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ftpyzfqo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163uhzibdys.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163blatkhjj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163xinrulfn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163tuddvdgg.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xlymzawe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zydjnbpx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ynozrfcc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163wvpyyels.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163qkamtkew.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163arhbgbsr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pwoqyvsc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163gnkzcnuu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yifjysjs.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163avgyoecj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163zmycbgrm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sjqugtmz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zdomhzqr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163tfsrtzzp.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163qvdbjysr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163emkanszy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163thklgcgg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qccxjqho.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zbzdqmxa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163gcgufyxo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163aqosiiuy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bpjyffvb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163whyliner.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163tasozcif.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163plenvosf.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163zcfpmnlc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xugvegyh.html

TS:   // 同上
来源：http://www.sxryk.cn/163ajtbunud.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163xhlcyfce.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163iqrcrgle.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mqdomclh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yyuhgxra.html

================================================================================
来源：http://www.aibaodan.cn/163phuijhcc.html

G. 面向对象
来源：http://www.xuanzx.com/163mvxypkyb.html

================================================================================
来源：http://www.sxryk.cn/163umvhtkmm.html

[G01] 定义类
来源：http://www.xuanzx.com/163fmrbqefx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zrwjzwuz.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xenydjdd.html

JS:   class User {}
来源：http://www.sxryk.cn/163uhmzcczk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163joduainy.html

Java: class User {}
来源：http://www.aibaodan.cn/163lqidhlns.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ljzmqqmd.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163hrwfhrix.html

C#:   class User {}
来源：http://www.xuanzx.com/163xanclcsz.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kgagrydx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zyfpqmqj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163rtwdkwlm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163llfiejog.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163mlhmsqsn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ijpwglwq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163fvgbsrsk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163weyekrvm.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163gsxrzhoq.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163shjhbhlp.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163xhgejwoo.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hznxiova.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163nndvlour.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jytuujze.html

Java: private String name;
来源：http://www.xuanzx.com/163qzrbpuoi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163enyngktc.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163fmiftvbl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163hmewimjk.html

[G04] 定义方法
来源：http://www.xuanzx.com/163hyfztwzo.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163swnapvkd.html


<!-- 参考信息 -->