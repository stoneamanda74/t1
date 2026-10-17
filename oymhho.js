外链999!wailian999！

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lcpmsmra.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163okxdrthf.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163oqabrsya.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163atwxhztm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163gtgzywyx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163wtgxeszc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jgmuimhj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163fgdnqows.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163lpseelcf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163kgihdqml.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163tkbmqdgc.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hjudetxp.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tswyzlhs.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163kgfltjld.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163lrnjltzl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fdtjjjeb.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163eslhjcqi.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ysiaugcl.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163umxempnh.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ayvsyzsv.html

================================================================================
来源：http://www.xuanzx.com/163qmvqqwdc.html

E. 字符串处理
来源：http://www.aibaodan.cn/163jikpwckm.html

================================================================================
来源：http://www.sxryk.cn/163ubogdoad.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163daasfjkg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163gtulikva.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163yhvkqktv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bvekepxq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dmyrasaq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ukelticx.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163wccjxral.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163eaxqxxyi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163egrmhmyi.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163mcucxjyb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xabsenlg.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163odwsjrbr.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163txvmykea.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uvgwysyz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163eodznmht.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jgysjdop.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xlxrfvxg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163xrchqovp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163tysgvbhw.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163wekzhhvt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163syiqilye.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163sfkvexda.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163nkiegsmk.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163yzwvuzbt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ywalcrnt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163nbziusrs.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163giqpkfvr.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wtzxqpyb.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wmboescs.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163jqwpiwxt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163hlhmvpss.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163tbkyeczv.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ztfflrgv.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163gjzfpckp.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163lmagcdfn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163gnsdemhn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163welbvhbu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163eipbbgfy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163iiuynsqg.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vznybjty.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hwhrxrls.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yiwotwbg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ptiryqka.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163atzoldni.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163pgbjrsll.html

[E06] 替换子串
来源：http://www.xuanzx.com/163vkxkzcgv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163hgjyihee.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163zkwyybvs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kgxjymor.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rxnvofza.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pagfnovd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163rxdzxslj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163htogfhmy.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163wfhhgpxh.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163lrykmerq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ktxlarti.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163rntaxeyk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163vaorlbrp.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163bbngvecb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163nsdodbdc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bvosmcdn.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ceayjuko.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163zublergv.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163uvilhgoj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163okiboahh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163hghwkfio.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163epesakja.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163tbqzciyz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163xlyrrcuf.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163wzxfgkdb.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163whwttrzv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163oaeandqh.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ghzigpon.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jznpwexl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163cnoolrvt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xonwcpgt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ugpepwxk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163nckjfzlk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163szvenakp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163gubxhjfv.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163plmofjsx.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vhrfybkv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wgxangzz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163nhegslit.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kqsdjezf.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ugppvfug.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163othgzllx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163oykbhrhn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ywpywcno.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163cbuvapli.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163lrsgdizh.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163eaxzvgqo.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xsavoobn.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ykjvzwga.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jgkvzdzo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163diotduai.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163aubnnbkj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163cfeylecr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163yrohyznd.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163chnnsbqh.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163vojsqjmu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163zbpzmeov.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ulfepbhw.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mzqlzigo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163pchqpelq.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163rocdqkbd.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163teeorobk.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163uujjnfig.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163qmwrziee.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163paxweeii.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163tknvtpar.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163huaoyjhi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163cpjonyyq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163qunqebxt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163zieijikz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163vppvifag.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163btvvdprt.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163rxcoxcqn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163bxiykcuh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163evmqhjnr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ilfopgei.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163tomsbowt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163allnsdqh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163lbkhabfc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163kkwcfmua.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163rxmzkuae.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ybamabaw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163inzwfeaw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163bkdnpzfm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163qvktmzjy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163yliibloy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gnuwjjts.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rmmlpiqc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163zifgvsgs.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163krheiycj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163gcwnefvw.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ukhyhgha.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ohxrrqyu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163deanmjdw.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163xfzaqzqi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lxeixgyb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163gpzwxncb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163juanqwbq.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163falzgdsa.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ejohrxur.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ayqbblpx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163wtokjrcy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pjagqqgl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163hbowxemf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163hlodoaht.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163gcxvczqt.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163jjgbjrwo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163btwldciz.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163okkeqyzs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mxsgqvaa.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163zqqdzehu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163cloikhof.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gmsfbtrd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163olcgiujv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163whwlqdsk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163obcqcgrf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163uzmjnalw.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163uxlgqbhl.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163bmvwzqwi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163xmmrpzdp.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cygcigus.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163swoxgvar.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163kwkdpbva.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163fhbzkqzt.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163exmgtbsv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163agnqecnp.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vziovkay.html

Py:   if not s:
来源：http://www.xuanzx.com/163tudaxljb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xjltbtno.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rnbjkqwa.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163cnrrspis.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wlxprenk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163btcnzkku.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163roqbiahz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tacstkwl.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163iurgeoph.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163nztqnvmg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kkcsbmra.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rmnkpimq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wfgjqlhs.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163juxpmtdm.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163lyxqiedn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163qksmplno.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163tbatybod.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vgydlckt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163chtzfmvx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rftouovx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zjimzcic.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163eormcsfm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ybwddllf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163izssveli.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163teoutysu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ptikilbd.html

================================================================================
来源：http://www.xuanzx.com/163usiqijbm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163xufavlxz.html

================================================================================
来源：http://www.aibaodan.cn/163fhnwgsri.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163slpbtilj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163lzkpnknv.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wkzinong.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ickhfpur.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163uuecxoet.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wsiimwkn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163dfgcgvds.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xgmcregt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ulfsyial.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163qwwhqjpo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163cftllbbl.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mcjqfonj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fawlycex.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ozrtyqqg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vlvuhnfp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163talqpdls.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163zpbspecp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163toytwbot.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163awgkwnpu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163vlfcfyta.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163bvkejzab.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qbfsfrft.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dgllvtqn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163nemtunup.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163tdafbdcs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163jbqlksbh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163xvfrmzji.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163zwwubdel.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vhbeunwh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ocfbrted.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nowlhulx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gqrvgsrd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pkovgpaq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163wkzheddh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163rmbjoudo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163xwrryidf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163txdbynwd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163hugxhdlf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vziymohq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163jgrofsqo.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lqkyhdtl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dvtwbxvo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jctdjxcf.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163hkemqwel.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163dvikklhl.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ozhwedqg.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dllxbkij.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163nygkjlub.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gjhjavok.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mfzhbypy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163aflpnerq.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163aidfyixy.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163dnfdtirh.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163cemqsqru.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qarmwfoh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163tzcaootv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163lngknysx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wqcgbvfz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wdnyogvo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163caqbvfjb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163przpccen.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163uyknhunp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163guolsskz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163joioxbqc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163pogdqqxa.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ejckhhdb.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pxlyrtnk.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163eptqiukz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qbryyzww.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xoriefif.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163cjwymoaz.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163hacrshuo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163huxhkifd.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163jqivwneu.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163nbdulhgb.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tzogguts.html


<!-- 参考信息 -->