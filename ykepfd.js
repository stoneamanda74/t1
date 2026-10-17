外链999!wailian999！

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163vnpagquo.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163vazfznst.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163htpcbblf.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163inxykxdn.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ikpykkww.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163epwvhsty.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163wwyolrqx.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163vryvlbxc.html

================================================================================
来源：http://www.xuanzx.com/163dvgpggva.html

E. 字符串处理
来源：http://www.aibaodan.cn/163aiavqexx.html

================================================================================
来源：http://www.sxryk.cn/163pdecxshe.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163tzwgvgpu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kivlckue.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163iucegqnl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mdvpbdkg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163aboaffur.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163fzlovmac.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163fqkdygwy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163hbgoxjgc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163zrgiffza.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fhjuwbky.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163rlymppny.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163itphufik.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163imkpucth.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163gwkdzrxe.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eriffzna.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163oujdfjxz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qoabhdgr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bntlrxug.html

[E03] 截取子串
来源：http://www.xuanzx.com/163odweaxmo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163pzuewmsn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163kwhxpppt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163yeuogjxg.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163enbdjujw.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wvgzrmdc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163vwucojwm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bnoogndb.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qdcvblay.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163lrzcivpk.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163bxgrbwze.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163dbexcqcu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163sbsdxunx.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163vbzlnbkr.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163hjptxjgb.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163epgyyqep.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163cyggmxif.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163vrohwdju.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163glysngxo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ebutgocd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ensqmvka.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163frqtkdso.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163hqnqjjis.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mffdlbxf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163trdvamot.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163iitmxcyy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163izozybmk.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ktnraair.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vpkpfxhp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163bvdudhsc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xfbuffyi.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yydsxken.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163edqqubqz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jyxrustg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163vvhshhjp.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163gmqwiwjl.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163sodymzfz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163csyrxreu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fxkrbwpz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163auykqamn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163wgpvgvks.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163cpktzgkc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163owpoqrsw.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163thkvnloc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163fenwrcfj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163wdbrtqwk.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163jsrmkfpq.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ptblkthe.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163nmvwbxnt.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kdtwancm.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163jacbizrx.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163bolmajwe.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163uvcppbnv.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163izgtfkoy.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163wohrrzaj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163olosdtom.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163qnntaqql.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vuplbpbx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163oorjcxgn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pazruagn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163natyrtfj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163efonxoyz.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163coejgwgn.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163hutamozl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ffsrkmqb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rfwlcoab.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sfkyfkqv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163bflkcjud.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163kegrqzns.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hbslkqpj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163xogfqiqv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163pctxhstl.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163nkkguxeo.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163qxbiaxee.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163skcspgkn.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ibueuwdz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163elxpufxi.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163ythtobqd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163vhjfwmxk.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163aibfpixh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yrrmgrne.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163odnamrwo.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ojsmatsr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ngyjqtwa.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cghcytnc.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163uwqupjmn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ferlxkgm.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163onhyywza.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163grnqrhdz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pjdusrgg.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163cbiheaxn.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163txrjrbds.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163mivwfjnm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xjmrtyrt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jpqbvnxl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163fdnkqizg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163mcnmwvar.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ytxfleix.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lhvnmwqa.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163pnqbzpzu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163baxtcevq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163vyoveomt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163xtzxvcmg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ofeyeept.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163riddngue.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163yocqrpbr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163mqbpxcfl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ejitqgfw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163afrlhyif.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163nzptkfbm.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163cqwfdhve.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163hiqnvcjn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163imvxbdat.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163vninljil.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163jxuirxtk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ugnyghoe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163bndhsevt.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bygqpdla.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163cwxxlchn.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wsctxsli.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nwciqkuo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ldfzpaxc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163dfqxvuie.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163meqcsbzm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163fswurrek.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163qomklnjc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163uvevthtx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163hmvgqhwv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163vdkxoxfo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dpxwgpue.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lrtigxkg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163uvwjngww.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163pcajxulu.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163eghpeziq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163xjblexqh.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163zlusummz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163xnlvxufq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ukqojkoi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vrydcxqs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ilqxsfem.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163agonwqdp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163awtpytbu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163evijieix.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163agtnxcqu.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163qwptbpuo.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163naalbjak.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163oigbynev.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fxyfaqln.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bktlxjeb.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163xrpwwpcu.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ondmwurr.html

Ruby: s.lines
来源：http://www.xuanzx.com/163tisqorzb.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vvkensnz.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163insnrcqu.html

Py:   if not s:
来源：http://www.aibaodan.cn/163rzaoahed.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163rkjsrqzf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tesnbhsi.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163msomkxem.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163cnpqglzj.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ipteavml.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163qxwvavbr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163edfblfbd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163sqnkfidt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ydihfljh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163guyvdsns.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hhjwvydj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fsowepeq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fdvourwg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163iyripalt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xgzjxtyq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lrzicmbk.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163fitqnjgo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163xmidnhva.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mvjkzdlz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lmmyekpu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cgaemqje.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163endjxino.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vciwuqrx.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163zkadmdld.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163tjznfedz.html

================================================================================
来源：http://www.xuanzx.com/163sivyfdez.html

F. 文件与目录
来源：http://www.sxryk.cn/163kdlqrril.html

================================================================================
来源：http://www.aibaodan.cn/163zyshggnq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163txidmlzr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163xvshnaet.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qmxrzgle.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163jhfpvpzn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163fccyolyf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pwqdzeet.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163qnyzgepi.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163bbarimhi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163xuhxrhbm.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163aumhghqj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163mjmryila.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vxyzhihp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163zfulpqdn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qmpnihuk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163eqjegybb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163fknfipeb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wushsuzs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163qfhehzsh.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bfxoihac.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163lnxyncpw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163xtjrmtnb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163erblpnhm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fckqrufl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163jwcddaip.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163tcazehgb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vokmfgjg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163dkmxiwlh.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163enislwpo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ewxoljkx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bdcohwat.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qdjarsfw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xrbuqhat.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163rxiniwoe.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163xpzkpquf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163hgigajwg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163athrtnzu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rxjamyxd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163zabrpcxc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163fptfqfbn.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163kfszgalb.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ympasxcq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xsezbjge.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163mwazvozt.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163fulgpzgk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163tagabzwd.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163smmhogrb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163volvrjqw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163gnjcdahl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wzdyklyn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163abpfcxjj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bzhtjfvt.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163expakfiq.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163foisinzv.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163boxscdam.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bmiiscli.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163uzltjoai.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163zgdbtnjr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163awwsmrax.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nufpbizg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fpeizgws.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163xxygelkg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163hhesyavc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163cxkdckkn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163mxteosdw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163exyhfcqj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163caghzkch.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kndqdwxr.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bjbgdehr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cpkxswzz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163okhcuuoi.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163wotcwhhn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163zbalyjwn.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163jfmddmgt.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163rdjxxirk.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jkxplbpd.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163opubsqde.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kfiajzwg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lyxdqxlo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163zzhpvlej.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163eqgvevjp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163edfyalzx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163yscafxeo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163whtxeahd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163utqdtpat.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sndbtgqh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163oclrhlwl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fegdgsxv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vojvyixr.html


<!-- 参考信息 -->