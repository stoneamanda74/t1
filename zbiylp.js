外链999!wailian999！

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163vfebxnmm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163fnduovre.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ohlkkksb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163vcipqagc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vfpzmxlh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163soiizdme.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163dmwjhcee.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ctkbizqm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ntammjdx.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lharlkap.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bmkhosda.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rqejfkmm.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163cqbbekkx.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ubgemelh.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163tdnjzjez.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ankpmrow.html

================================================================================
来源：http://www.xuanzx.com/163pteiwzcq.html

E. 字符串处理
来源：http://www.sxryk.cn/163unrozvhf.html

================================================================================
来源：http://www.sxryk.cn/163blqtmjif.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163wbbslajl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163czdchghb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163bozdnmkk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ezscwgie.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xnccnfby.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ounysjvw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163xffjutlv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163jusnoehf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163egkohefd.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ueawfvpg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ixxsydiw.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163exlbwcpp.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vqtalarp.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mgahmpld.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163uxwhyapg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163wyoprdov.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163yayrpkra.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163notlzxur.html

[E03] 截取子串
来源：http://www.sxryk.cn/163yjiqtjfq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hvurhoub.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163idhuqpsd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163bduowwms.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163pxsavzho.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163izvcbbmw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ogeqknkx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163gowocnos.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163otappgih.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163sdtdbyvo.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jlvpnaxj.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rfohxhey.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163tbepwbvf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163hvkzzxvv.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163grlbicgk.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163vmyqxdfs.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163zktjolpn.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163tmcjqyqb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163pfnqshet.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ipsjpzrc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kumobyrr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hhgzgigu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163dckbsses.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163imsbhmgj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163fekdtrol.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163opfgjswk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163kxxicixl.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163msdvjvgk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zlrdnpbu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zrwrxnqa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hxripbri.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mukwwoof.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rijwpbqp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163yxtvqpke.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163rzqupayx.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163uneixggl.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163jffextnw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nryxugoq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163uzqhoyzn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163pbnhuavo.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163feajrpdc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163tpjoqjsb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163nkjozhwg.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163vtvseejl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ukybrzak.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ljcrxzjp.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163tochmcbl.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163koqgqzcy.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hwcqhzwf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163phfykujn.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163sbotpmnr.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163klyhbfwl.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163kolrcwvn.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163owlexwlb.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163hxgkskbi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163qcrmvqoa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163kcqweurp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163geoetrer.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163splovcnt.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163iaobkazy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163uicspuht.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163sbbukeas.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tdwowsbk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163gignwdbg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163gewyqbac.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163wxrmgeng.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163emmkfavv.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ebwdycsj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163xqmybqps.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ghohsssd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163tdqzianw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163nqbaqngz.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163lakptyim.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163xhfipnox.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ibwgvjlo.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jqeqbnkx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163iciomacb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dxypfsfy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163xjrncyfb.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163uwvocsug.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jfqgmvfk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163urdxzwvk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163nshfyvmv.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ygeqivag.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gwgakuap.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tetuyjat.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163pzysulbl.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163btprwrxm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163haodiyvx.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163rtitpxaq.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163gafjewwp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163xjvkpgpv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163lrsrixgs.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163wtrannwb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vijxknao.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163dglwjlvw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163zhzbfvmc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ahpnvoix.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ofcccjoj.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163oitivzcr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163wcypkiqy.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rfgvcthk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ddajgmpo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163cpmfyqym.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163eoszsemh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163oaziqtnw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163quxrwqnl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163dkineasv.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ykaefqey.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163wqkupfcv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163yajsfran.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bwztutmj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163jkhhydto.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163tvupqtiy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163lqqigshu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bmnkmxqc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163pbuaaecl.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ocrgexdt.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163gvozbhdm.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163sjsjhwiy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hmbokjgg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tzcoolzm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ktihgzep.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163dtkmqdej.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163fpmicrxz.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kkpkvtfz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dzjmgika.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163akhfmyun.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163qtheopbm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163thctsdom.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dupkdnao.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163tbestqoz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163sjfwsjwp.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163tzwecirl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163hdcksczu.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163hlurwdzm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163anaghnyl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163eftebpgk.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163iznaqtao.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mzarfmds.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ztcyohqu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xpjztjrt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163oauqdufm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163eeuvihdx.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163xpdryyuf.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ugdfxjgb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163iaqnzjfk.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163njtylfgo.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zkbbpeyc.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gozshpvm.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yohfvekc.html

Ruby: s.lines
来源：http://www.xuanzx.com/163wvvfpcei.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163dzrbbtxl.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ebxsitto.html

Py:   if not s:
来源：http://www.xuanzx.com/163ksinrczy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163coclgvbp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163xuyazuvl.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163dppdeijs.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163kkaytlki.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163lkpxdszn.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163nmwcmduy.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163znadxssi.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163rxkgzjxy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163bmozkfmg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163rddwzknw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xfgmrvem.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lnqkfvuh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eoqsqcwy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163argncoyz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ynomnyph.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zqdeifmm.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qhwqmsaq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gidcfxyp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pjynzkgr.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163myxthwdj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lwzmctya.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163adhybwjw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xxqmgxat.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163bggkjboj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163afhpeebg.html

================================================================================
来源：http://www.xuanzx.com/163igdoteek.html

F. 文件与目录
来源：http://www.sxryk.cn/163ckugzwpd.html

================================================================================
来源：http://www.aibaodan.cn/163sqyxucfe.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163lauhjlen.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163xueedsey.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163lagolony.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nxgawrto.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163marhboll.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163otduesqy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163euibjdgg.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163jwlbgpcj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163yqmvjyrv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163qynpbzle.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163whntrghu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163koadjpxq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jvdkgmdd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rukpivky.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tsqgbdti.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163orcgonfu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163airxfrya.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ajrpfbbm.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163lgmkznnr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ixxhsaok.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163zolctydm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163dqnjaiwt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163abyxfqnr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ulghsvpz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163inmiqnme.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163phqrbxgg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163touvffgb.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163loflhkxf.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zvtmqjmh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xuoplkop.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ioizvcat.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zthdqxyc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163pgvnmyla.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163uuafmqxf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163itbvcftu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163lzhnhbfk.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163hliuojnc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163kqjrxcmu.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163bsvghjhz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yunyxtre.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nuhfptzz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163poyowmyw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163wmfqshkx.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163zacyqjgq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163zwpfukhg.html

[F06] 删除文件
来源：http://www.xuanzx.com/163nayqwhol.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qboyqhjf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ikcxuzui.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163whowfrbr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163flxopxdw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163srendwmj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163bwthafve.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163zeusumfz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163irjvginx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163jikszyiz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163cqdkomop.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163kbmjycvx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qlwaoklg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163cxslnutm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163sdczhgcm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zjqlzbuo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163dcyticiq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163jkygbzar.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mdtmmzmx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vizpjubc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163jtlmxikr.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mnhlnwnf.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nsnkmaid.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cykkxzzv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163lnflblbt.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hkteruag.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163fnprbzxp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ngabkobb.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163mjosjxlb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zoqmfrho.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kvxrwkbe.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hlhjnsbe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vfnfgyeu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163kuyyvphx.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163yicobnlo.html


<!-- 参考信息 -->