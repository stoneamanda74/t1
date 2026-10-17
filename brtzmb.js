外链999!wailian999！

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163tatkbmnz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163vqimathd.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mhcesiyg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163hrenruye.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163gcxcfjgm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163demllirq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163boqsenjq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163fgqexcgs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ffncepjk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163diotsyux.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163tgtfgtwd.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163guypdhtf.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163edylhynd.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163uylqbykf.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163iwbwjoza.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kywdcksc.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163xoasfyns.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ryhbewzk.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ypdbpcaj.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qvlgwaam.html

================================================================================
来源：http://www.sxryk.cn/163mymndwts.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vlfaaije.html

================================================================================
来源：http://www.sxryk.cn/163pfwurwqq.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163wphaffnq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163tqbsyflq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ffaezpai.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ctkvjbpc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ajvcumul.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ugzqghsz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ynyacpzy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fwxomweb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rjczrege.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163usaixauw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163afyscekl.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163zhejglol.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rstocqoi.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tysncnuy.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163odpgzbbr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163twjpekfu.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hsncxcpd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163gohyaocn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jjqiuvgp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163cuhpgglt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163vzbjwxzc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163paztrffr.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163xnxmxheh.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163khzbdxjr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163tbxdanpt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jpcvdfyn.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163nxxqtxah.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ricofcgz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163kdrvhtje.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163iiakhklz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163didqcvmz.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163jbvxqktk.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163rfaneiby.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163sqlrdexu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163mgunlknt.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163jznxjpwc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163yslsjbxh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xangaqxu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163mfaimirh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dglpnytu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163hbkkcwfr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vckahlre.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163txfenhju.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163wfyltjxt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163stceeusd.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xrhonclo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ruvmogxm.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163bewuardy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163djtoblle.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zucbdccn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hcxpulzy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163sbugpexv.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163trkzpfkz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163zpnwippk.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ffzsyvys.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163qmvzkwwg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163izpiayhz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rkussdmo.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163wmocofhu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163xsxpsauw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163xoyfkqcb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163vfxcxzxf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163lubghhnr.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jqtstcxc.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163isirkegz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163avrqxycf.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163hesdfyvv.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163oovnmyoi.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mdhbukot.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163apxhndwx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163asrgjgeg.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ueghhuqv.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163oihwdgux.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163xjixxeav.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163cpvpdvqk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163apnudbqo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163svysowec.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163njgbbtzn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163eogbgxfg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163lhvsiqsl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lielunkm.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mzjiscrs.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163azelaufb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163guuszvke.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dccthnhk.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163oephkeut.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gxzlxpqg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163zqjeatql.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163twayqwfz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163topkbafn.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163fzecmqbn.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163feqnwgcb.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163aorvbzpx.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163oddxiumc.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163utpzanax.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163obtaxpnx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ifgaeloh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jzmzlmbx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xxhhovrq.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163koqslmqm.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163evslmgnf.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ompvyfnv.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163obyecmrg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zyyysvdo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163zqtqclcf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xjlsflxa.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wlxjooja.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163yfeqecvb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qrxvjnhm.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pqoyndga.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ynsjgodo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163vhrfvqya.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vcicbpis.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163blylqzrj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163olgopict.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163kjcwwbcz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163qtitrqiv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163itmwnoby.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163glbvebte.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163grlzeltq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163aokiqydm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xqcgqikz.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163mbcociws.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163yssvmchu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163srbfjxvl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hhnahcpv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163xhplkgfv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163tgxugtgj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163egjtvzte.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163bfxvpjqq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163eauxmnfy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163tmrgwajm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163cdgtvaih.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ydgrdcre.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163mszjxwmq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163jqpjrypn.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163hreppfwt.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163qrcgrkgu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163touafktl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163icthwxun.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163tiarcsfc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163sswnswbh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163kaxpcqtv.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163mnujnxuf.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ilgngmcc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163sjkuaaxd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163brhibmgz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163obqxhgbc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jppwqskp.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163cyqsgaxp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163gzzxscso.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163bzeeltrz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163ghlyzibo.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ziqvnbcx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163lxsxqzxp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163wvswqjsr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mfebeiqd.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163juvmjdwa.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163nxhhnixx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163lqlqbvcy.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163rvimiavu.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163adcgtqux.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163pnukpekd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163irxzbgla.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163gsuhckbs.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tmbqtjbc.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gcvttcka.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163svcgwizc.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163rclanfac.html

Ruby: s.lines
来源：http://www.sxryk.cn/163bvpjxaku.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163cxvfftct.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163fwttfouq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163cdxmjdns.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163dxteibiz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163tbdwpkmm.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wfwghows.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163uhvikvkg.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163vxgaunmm.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xrdthzru.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163cnzavwun.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ujzyioqs.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163cbtbkbav.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xkdomfwa.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uyckyolc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mxzfhwbl.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ndaqflsx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ahimniyb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163csbnurbk.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163pagkkatq.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163fuecqqqn.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163uspumrln.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163qmegbntt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163cuucnasu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163rjcbdpkt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163emqxndjg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fooinjgn.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163yryfquxc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163qqndtyml.html

================================================================================
来源：http://www.xuanzx.com/163zjhojpet.html

F. 文件与目录
来源：http://www.sxryk.cn/163bjsbfhyv.html

================================================================================
来源：http://www.xuanzx.com/163ellrukan.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qfgtitum.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163jeruhvfl.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163tbcxsjpl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nbneatck.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ncgyceuq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163abotphlh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163hkraykhg.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ghxtnhto.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163vzzpbsev.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163qtjdsumf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jgpqycui.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ssvlbuuz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zbdlbqqp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163flzfwojk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lkifypgh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163utrnbdjx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zdtkgcuc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163dlwadnfr.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ftjnozpq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163hktxhkss.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ooivzvwo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cvsiazwb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mpwkjtti.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ctfdueta.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163sqngpyll.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163lmrlqler.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163mwfmmnrx.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163hqjpfoay.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163loqnbiaz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163whctgvwa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mkexqgbd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163klmwekjj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ymqrhzrc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ouhnldwk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163zavktuov.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163qirzarvo.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163fgiyijca.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xszgxpab.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yykxbvwl.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tlimwcrd.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vmojgcro.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163osfikyxi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ucmyvibd.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163vlsspjxz.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wsyztfeq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fkrpgmns.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dztazdba.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163xodwzrkp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163epujoogy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gzfgtqzd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hztdkbrl.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163fngqaipj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163nxcmplwe.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ymhnczlw.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163egqpuszj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163pogffgsf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ktnakrjy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qejlzytb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163xltpnyjc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kzciwrnl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163rrmdlyyu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163foghafuh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jhuxoxgl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ltzxlihg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163mzlkfekj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pybsyhwd.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zygippqm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vqeuzsjg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163frlnseue.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mkflohzr.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163khlsrwwk.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ehxgwhdy.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ndgevbea.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163oegznyqo.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163lqnbikfi.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zewbipar.html


<!-- 参考信息 -->