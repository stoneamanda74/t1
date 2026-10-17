外链999!wailian999！

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jpvktyhj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163trdtbpju.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163ofhachjs.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163utcprzcn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163xssxkmuu.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vrtgyafd.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163rwdsozgq.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163wcpdvgjx.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rgtxswwf.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ibcgbhcp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163wqgulszr.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163ygolfyaw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163pnohtwio.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ceuakrxy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163yuuxguxr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zqtipntg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163lzhpvbhp.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163inefuttm.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163bizjxazt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ybiaymnn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163iaxzkern.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ejftdeop.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jlinndyc.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ehztjwqx.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163bdanmvqp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163qvrkhoxh.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163qushpvkd.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163bkdpmqhk.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163albjpfus.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163shukjdbv.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163bqccfuge.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zgeehtel.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163bxmepgco.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163pdomdxxy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163uhycwjas.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163jrrbkgqi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163jzmqwtur.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dgjjzxdu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163utnftpzs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163zvfmzqpo.html

[E06] 替换子串
来源：http://www.sxryk.cn/163jxlurdjl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163oomkghdx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163wawwiawf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vglbxuze.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lsvzpcxr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pirpehfs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163pwxavkmf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163vfeecwoh.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163kuklrycb.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163iscpjkgn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163yhmklnpp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163asqrxpwl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zebawama.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163gnuslxdh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163miraeztr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163rfdkumwq.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163kzumrxau.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163hymsjibh.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163elsapjoq.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163okqebviu.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163qinurphs.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163tfiahwaa.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163twddqxhd.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163valeqdig.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qiqfsbfn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163pkcvyely.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163joxzauuj.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ivkvkmol.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jtijwudg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163flcssobw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163qzgoamtp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163opdwhzlb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163jpoowcpw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163efpbfjba.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163odikahhj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163hqtoasdj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163khouxdkb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163gjtctvpi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163vzdsmvus.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xkatjaxn.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163edsvumto.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163swkqcawm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vcucgavt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163mfwjeywl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163yhoreypt.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163yiafnjcw.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163fkuxpehv.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163igdzjpju.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pdikybty.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tnulbyri.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163akvxqjge.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163exlfqvdr.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163pqznvmlc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cyjqdztu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163dzpkqabg.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vgqgglce.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ionuroww.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163oxgtygss.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zbkzbexu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163mgqxyqtq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163cmnvroks.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163dfwgeyyj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163kebfuzzb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163nlubtezf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hoczspgn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163kjetdubh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kxhylmyi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jtxetdwk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163kmgltjnj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163fhrfeuay.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163gekwgxwf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163opuzvdtq.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163hwmfipwm.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163xlpyhdlk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163lfuifzsq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163yietafba.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ofqqgvjs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163cobqlhyz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163levowcjh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163npvuuwkd.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ivmjzujd.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163szixpaqf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ujbblfab.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163oschredu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163mtewuhle.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163qnnbbusc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163olhtxbfs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163bxgrhlju.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163jpmksuwi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163hlafaqkp.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163feoswelz.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163eooelbql.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163peathlqz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xvlyccap.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163avbxbzqz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163nhxwmurl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163gydhgvwn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163wznoejnf.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rgtbaseo.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dcdxwrzg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ydxxcnxm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163pllpxqcf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hyuesvyg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163bjteatph.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163kfrolhby.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163szonblmh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163wapjzrbp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163irxcvuww.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163wppwepxr.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ulansuar.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163tbjtvufz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bffkloca.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ifkndbij.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gbrgjrkg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163sxhbhkba.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163rriiwjrx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163hjezveae.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163orubdsir.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163dhvmjvpa.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ozjohalt.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163nfvasizu.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pxugslif.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163yjtrrytc.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zvbdsbvj.html

Ruby: s.lines
来源：http://www.xuanzx.com/163iglerqsq.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ooelauav.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xqjukluo.html

Py:   if not s:
来源：http://www.xuanzx.com/163utpzchzb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163yhyowrya.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163lwwjfmxy.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163yphordnu.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163tnbugbkc.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163oerunmdm.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163jftdphib.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hcsklatj.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163rqjaeeya.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163jpzfuetg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163rrfkhrjn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163czognodx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cjmrocmo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tkhvstcp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163smgcytia.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163gzovkeqm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163rrjxwwqg.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163fiiihwlb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163zitvghcl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jmsqoynl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wbtumfmx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xeuazuye.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163erzdilnh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163xpqfafit.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163cmzbvdkj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163edplgvap.html

================================================================================
来源：http://www.xuanzx.com/163oiumzopt.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tnnkfqsf.html

================================================================================
来源：http://www.aibaodan.cn/163oujhkhin.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163fyximdot.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163njlvufix.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ndcqmluw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163gststuhz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163nhoxyhsk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cyqtivja.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163pzbmnhxo.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163lykeicrj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163duieopfu.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163xjnloeaa.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163nkrwdfmq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rikzimpj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163axlcdnwo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cbloptxw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163wojfabsn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163vmzpviou.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163cfifhhda.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163iwdklmpy.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cgtjxrrj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xedprqrg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163uizljrlg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vquhnrwk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cdcmsxbd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dqdefhew.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163vjizlhtr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163jhrciqey.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163hqmdqolq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rqvjpuft.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163djpfypai.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163otpovhee.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163uslshryo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163hjvenoyb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163uhcaqlqr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163spcjscub.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hstqrxpo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163bcfgfxtl.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163fktikikm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dszjpbqo.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163cvbzajsg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dbnwemlt.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nluozitw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rfpxsmjg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jfyskjxx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163usxrazhq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163pmugvtpr.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163rmlcxnfx.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xqsiiqjh.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163epfsjqyu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163myzkwmwm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ybmrciqv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bswwbbie.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163jtypyspl.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163fdjsfhhx.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163axsuwbog.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163vfobzozf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163cgnjfpdi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163npmbyaud.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wjtdkram.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163idkrybsz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ewsqamef.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163nokkmpcc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ifcgfokl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xkwvelpa.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mifgbvsb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ipfeecbl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vjsodvjx.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163zxnestnt.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dbcxpbuw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kwxaxivj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163qrovjwxz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163jcetxwuu.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163rslyzpxn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163tlxaofrh.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163gplgmdql.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ulwbzhfh.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163snixhhqq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163usceljfk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ygflzjsy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rtwwrzyd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163rgxoafhj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163abhwhfdt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163nmqsovrh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kwmxymcu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163quoshmxt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mbpkcbfb.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fxpouibl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jsxpkwul.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163dxtjexns.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sssiehuj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163fonabaqy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163mbhjmoyc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jcijqvza.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rkraowxj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jnjinaen.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lmqbqqjg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163joboommd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163mhvbmmww.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mgsasoyr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163lujwrbjb.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163aemnzpdl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163epsqogjo.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163fzhzhhsu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163kexhdbax.html

TS:   // 同上
来源：http://www.xuanzx.com/163vjwhdyoo.html


<!-- 参考信息 -->