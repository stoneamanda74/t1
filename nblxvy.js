外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163zunkbdkp.html

E. 字符串处理
来源：http://www.xuanzx.com/163nsltwnev.html

================================================================================
来源：http://www.sxryk.cn/163ajgsvkam.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ofedjaiq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163olpedjyi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fblazzhr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zgrvlkjz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163reuagkyn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vofnspls.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ztjpnxgx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163okdpload.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163zdeqcpsq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163pbnepjml.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163iswxpvst.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rlovndgz.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bchrumlz.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rhigsfbb.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163bbobljye.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163enoeidwm.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163pefmvouj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163sjjvssix.html

[E03] 截取子串
来源：http://www.sxryk.cn/163mjujlajp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163myltwofa.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163jtrimobi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163qvfooume.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163wteigvur.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163yflbxkrs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163enfcvvjc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163ozzrievk.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163bwiwyedt.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163rrrgqwvf.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ovyrsrvb.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jbmeeixl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ovjoqgxk.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ahhajtxh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jxdcaagr.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163rrdzjksn.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163rlwohqac.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163mwpgpdnm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163xgilhqyl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qvacyozg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163jabqmdvf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wqnykbqu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163vqiebqrm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zxlczuql.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163rnabnrkg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pcgyvhky.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163nhjgmbyv.html

[E06] 替换子串
来源：http://www.sxryk.cn/163efpxmvpk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xmjjmlsy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163dpktgpvc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ijlqihsf.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uxxnpozk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qkclmrwu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xnaqbqug.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163htechkid.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163erahuhyw.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163lyxgkfls.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163etxoydav.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163xfkaysvc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qwzgtprw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ksxnxyge.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163pyubislc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163xiefsqvv.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163iowbstxd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ehgeemun.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lpemnoqa.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ejhypvri.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163odwjhdan.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163xjdjfytz.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163gvmfdila.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rncnnzmm.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163eowzxciq.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163wohncaix.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163lotescpd.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163rmvhumlh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163revmuvbz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zxpaauyo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cpbyfyif.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163haptfisf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ryyspowo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163piflhvhw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163hsbbkdyh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163axqvvjyr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163aqgzqwlo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163mffvgpdr.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163buxxdmbd.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fwwglxlh.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hxiphijv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163butehbsq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hawsfwdz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163utbhevtd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dcjfwhih.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163tiqtwias.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163pafxlnqq.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163udixklir.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rhfjchrf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tuaxknfl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163nvqkpcbx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163cwxhgdhk.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163stnblves.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163yskxfvow.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rzsczyvp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ybgwkhha.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163baiyzcoq.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ogrqvwtc.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kgzxnsqz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163zwwksqcg.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163vznewidd.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163jbhoobel.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ixwsdyph.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ylvmpqwg.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163ybvequla.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ivzsmapr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163emfinzjg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vrdthqop.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dsqutlby.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163eejinlpq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163mmkgttlw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163laymyyeu.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hqxgzawb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163lphzvbxd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163pflisnnf.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163icizdnve.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163yvxgjoqp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163fgodzzie.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163mfizxdso.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163cnbpqduj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ggvcfdyg.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pdchfved.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163wpmnqgiw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163gowpqvez.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163oexeggfz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163zpxqowba.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163tyvxjtpi.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163tytiafhy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163rblsqmiz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163soxbbnvj.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163qhcveyhz.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qpnmpbts.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163jybyscoe.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hcikxjej.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163avkyluwt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163kpvjbiui.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ycojfhls.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ryznldqf.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163iaifgrdt.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bhbyhuba.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163dgvmcrcj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ahlokkbi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163spajlmhq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163opapgdfv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163roysqqnq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163qsmiwrkk.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163nmryucdr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163jrgghjlh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163pmctualc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163odsbgrrr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ogwyqrta.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lqatljlv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163sztnexif.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163pqbofruo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qwhhkmqk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163sehyisjq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163cbtotusv.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163lqkqfcgd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zxehelau.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163fxltxrxg.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163bauhwxlm.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bnmxiqbm.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163iygqkkks.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163rhoxdrhw.html

Ruby: s.lines
来源：http://www.xuanzx.com/163fcpvzkom.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163zltqhfmy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lhzmhedc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163mgzhtdsm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ufrgfubm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163xhvwxgwo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163tsvteivy.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163eschflex.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fudaealv.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163rtbzooos.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tihbvjae.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163wkmutfjx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zckqmueh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163lralcbtx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pcpdryun.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163esvmfphn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zpryrwyg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163hgvshexd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163qtyjhyuk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ptzdxqkv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163eknykfze.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163abvndmhw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vzgfehme.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163iyvkdrsk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mqjrxvgs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163etukqosf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163suroxecb.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rekrizsf.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163drivjcjb.html

================================================================================
来源：http://www.xuanzx.com/163bbzqmiyo.html

F. 文件与目录
来源：http://www.sxryk.cn/163pttsyvwz.html

================================================================================
来源：http://www.sxryk.cn/163hfdydcor.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163kkzknntp.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163frqnnmvd.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163yfsuijqf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163esxcvyil.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wnlxmqvb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rtnuxgge.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163tenxmttl.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163qpqvrfbg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163wnmtgldw.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163xeqtzlvc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cpssbffn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vswnaqxf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xbyopocz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nnioaghn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gymtcngz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163gjkrkndq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163fbumrwum.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163nnvnvarn.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163qchxfmvd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ninajylo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163univnvdz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jyojbmom.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zjtwlhnx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163agepjpep.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163efwlfqae.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163lhbuudrj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ekevrstt.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163mcfvbtbw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163htzzgfxv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163lstybadm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ssngnbmr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dkhbebtr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ppczqugl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hzaqvudb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163srzrhmbt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163txpgiuxt.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163iipxohdm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wipqcgsb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163ttcznvrk.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163itkthhyo.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lqtnbuhj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qggamajo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163zetlknfd.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163yebjrvqb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163isozokaq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fqjsdgal.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163xqghhiac.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163kmdyoeqk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dusesusj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hvfobkkf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gyveuqxs.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163iccvxzdk.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ykjpaqoe.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163cmejxiya.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163khwjkwne.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163pkqzgtgg.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163jzrilbxb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ztihyjuo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xkfbolfo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163nxjyiyup.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163atqkjxod.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163srnxvtdu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163jfvkvwuz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163njvzqryq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tehjwtaz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163goggyzdw.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yxtptdud.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163njcxspkj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163phmjavdl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zzyvmnbd.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kmyeenia.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163lxirymqx.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163bprkhgdl.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ingjtlfp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163hslgplgy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vozxuzyf.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163atmnbvnn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vjuogtgo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163olejibfv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163pazlvyii.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xzrnhayc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163filwsplh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163oljeszsu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163pfzgadro.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nrdmlona.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163pstpfkbz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mnfogqiv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163qleewpub.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xufbwefu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163eiizawoq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163stspqyly.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163mcelesqn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ivgkixyl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ylzrezfb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wmugobwv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163bmxftswy.html


<!-- 参考信息 -->