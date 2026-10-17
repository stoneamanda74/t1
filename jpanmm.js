外链999!wailian999！

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163wcxvzadq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163vlnhkbky.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163zmlarevb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163otbkhcal.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163mljlscez.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163acldrgnp.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163fwywihxo.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163razfqvui.html

================================================================================
来源：http://www.sxryk.cn/163gykgpicy.html

E. 字符串处理
来源：http://www.sxryk.cn/163eglirqgp.html

================================================================================
来源：http://www.aibaodan.cn/163vwmwerju.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xkjjtnmj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163hjosikgj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163tbuwmlqk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ereqhnrw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ukcbkqvj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163mgtzsavc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rihwzhmz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pjrttfqx.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163miamzqay.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163evzkymco.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bvdryhnt.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ezbtbqvd.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dpdzhkdi.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cdkobgll.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163rljloqyf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163sfyzcqnu.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163hjfgdlxi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163hqrlkcdz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163eojlmhwk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163rxdolegq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163qavnsjwf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163rahyomcz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163cfiqtjde.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163aitfthiq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163gimsyqxm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163hwwdjzrf.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163iqlhbrni.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hhyrgqzd.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163xiuafpwy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ukubjwyu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163aktghygx.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163xqrqhnwb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163lohlyelr.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163fpnlewzi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163giizgqid.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163bukprwwh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ofrvdyci.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ezkcyrxn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163sepifsad.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163owixfajo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qpovcmoa.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ecuybnky.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163cavqqrxh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mozhrzal.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jurbljir.html

[E06] 替换子串
来源：http://www.xuanzx.com/163zxhgvgtt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dzwdrlpc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163eqakscey.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fnnrugdu.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pwsukkyd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kryfmhwa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163suwkaygq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wvjhnamy.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163oxksyfup.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qgohhoud.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163kvshmfjb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lplfiiqs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163imyxkjyt.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163sqcqiwsr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163vkhirfej.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ztenrsqn.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xdkexiqk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rldfbmai.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163xlnodrck.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ihpjcbxn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163hqexorrf.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ttitmurb.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163aihwxpbj.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qnijduqx.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163pikdufxj.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163nbdomyjv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163oipbshnj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xywzzzxf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ywrjuqin.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ukdcbhzw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gfpaoeor.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163tngafsls.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163isozrwol.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163oapaboqq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zonqwoll.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163cnhyglbo.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qlkmvdxt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zirxlivx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163uaolwxfk.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vnpignso.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163colfxrkv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163cxctawsv.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163glvaelnk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163pkutupqx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163eptqrnah.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163aklmbpyb.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163eqxorjhy.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163mfgtmstw.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ymsnyonf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wfuuaycg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163xubdwfaj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163idrsudmq.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163zjmlcizl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163braevewq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163aurvzgoj.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163swvhuqzk.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163iokqtkrx.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163urykpqez.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rhzovpzz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ebavgjqh.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163pfdbzmtl.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163vztunnjf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163jyzuvqgp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163wdhsmbmx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rouragiu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wbxcltez.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163bylbrhyi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tqmdmdlv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163qkccoixk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163eycwrxab.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163casscpuy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163fxyeibvi.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wrhmxeid.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gtzmurdf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163xjgrvhal.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163woqttcxa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163nhwyokxe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163yicqgqgm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163htqzfmrt.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163iluzdlgu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163lotmbwlw.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163oxulxtnx.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163gptgzapl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163nfdapata.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163rhkbgofl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163xlmgspzi.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163gbaifzyf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zjrzggmc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bcpgfccu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163zamgnjkj.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ohreldgk.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163efukxfbb.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163yxdwiwhz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qczbbdft.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dsjonocd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163mqdyvuib.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hlybeihl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163tcpoteba.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163vftxahjb.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163kihuczay.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163lghswdkg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163jmqdnyks.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qraiogoc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163prspxcja.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vgdgqmzt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nsgfkyoe.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163vctvnbrv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163itakqwlh.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jjvvxgmu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163nbdhmyop.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bynsafwi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tulrotnu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163sgtdfkla.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vpceznno.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163reeenulw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163yjlpqtun.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163yfoubyik.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163bhvegknp.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163dddlscpz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bafyzvhr.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pcbydrok.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163tnudpgds.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gzbasxwg.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163hcqegydx.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163imdclrmi.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163llvscnzr.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163uxdkhfzm.html

Py:   if not s:
来源：http://www.aibaodan.cn/163tiqiipko.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163eweodgfi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163lrnufyhl.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163rrztqzxl.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xoqwhelk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163cgndgytz.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ffqafdey.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163wglhlpzm.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163maegihxz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rhvhzeqm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163pfsegngl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uscwovsz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vmlgyqpy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zcqterir.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xibgrzoh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ydpodvcj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163gjrmnbsc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163tvttzppb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fbpldtwf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163uhxqeklx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163xcxqxjbq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163kbppyzho.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163cltecmlk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xewgjajq.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fsbcmjwt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163bngdwsju.html

================================================================================
来源：http://www.aibaodan.cn/163ovcptxeb.html

F. 文件与目录
来源：http://www.xuanzx.com/163otmdxrix.html

================================================================================
来源：http://www.aibaodan.cn/163gypuhvii.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163vdcxkrme.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zueuiyex.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163mmswqwkd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163dmyeefvm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163kmwckkyb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163grlahmma.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163hcfdlfqr.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163sydoujwf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163phdzbiyn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163wvsghljq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163jnkfcfmu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163xyyysnlz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mbyligdi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163sdwqkxuh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ldzipsgi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163lpldvqif.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163bcyohpfa.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163sfbazwgx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163otmjcfcj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163kapiufyd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ahmfxyvh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xapsswcw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hsztyocq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163nnxcmdrq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163gcnrehhb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163opmlhpdo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163oddrqybg.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163slexzkwt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163qwfilibh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bdxhsowj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rqxkatge.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zelqicjs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163hjcncwak.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163zbimgrkf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163wsomlmwx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163cghqfbbw.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163mrhdcpir.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vbnivdoa.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163kgzmeqwb.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ojidvudm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nynmapzi.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pmavunxp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163sjiwdyof.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163hedzfmsh.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163xfbqqjwr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163txyheibr.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163fodxwknr.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163mdcsmdhu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yhzszdri.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yoxnxnlb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pgfwhijy.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163rdnshzho.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163eaegjgfp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163cxxnizny.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163uxhitglz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xcsenlrq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163dodtinnh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ozwejzvv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163frdjnnjr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163dwkywbgn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163rznortzz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163pahtuisl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163zbpfgeqy.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ndhfwsvq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163iuikiqra.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163golzaxad.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ejpyomks.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cdsbfise.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hkmxkria.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ulyxxtyk.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qscshqzv.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xurzqqma.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163hcfidcru.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wqjttisf.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163yiwjselp.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ftpeihuq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163pnjfuacd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ekfpzxok.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163qygwhlmp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163qqupxbgb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jhxinedw.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163wkfwuhnm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bvxbrkhr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163dwobatcz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pdquqejl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163icrodnzp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163svgxdqly.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163lywsnebq.html


<!-- 参考信息 -->