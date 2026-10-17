外链999!wailian999！

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ymgtkqby.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163cmgnhxgn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163aduopohb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vbgklxmx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xhnjalcz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163gbnsqhky.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163cmvpfkwm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163dcwvziad.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163alxkhrxs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163yndlwhou.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163wukubhwr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163nrotjfih.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163dxxlyohg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163oionbimq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163gaigqmmv.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163qgbwqjjg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163zbcbnlff.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163qadbvlhu.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163rgnfqvne.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163qygfxmmx.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163kdxxgaxt.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163krzzigpu.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163vetjlspj.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163wvxtvcvw.html

================================================================================
来源：http://www.aibaodan.cn/163cvduqjud.html

E. 字符串处理
来源：http://www.sxryk.cn/163vvxvdlsw.html

================================================================================
来源：http://www.xuanzx.com/163rfzgwopq.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163cnbmkffa.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163tqnfvibp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ytqidkzt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jhzivpdo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ildcfifg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163jqeswxip.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163mxveixyt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vdhjiwwh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xwcuhemi.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qiklvfbk.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163iuxjpsat.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163tsqgdssi.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lyshdaqt.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qcuelvoq.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ovpruwce.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163syczwikw.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xkoxgccl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163hetzhivz.html

[E03] 截取子串
来源：http://www.sxryk.cn/163iijqwvwh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qqtylxiq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163macyfotm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163xmynfhyu.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163rbeyqmay.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163zdbjysal.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163guomhkxj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163qsxxpmcl.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163aawtfkfx.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gdklcysm.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163aoqspmza.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163axqgbsvx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fupwcite.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163ynebbbbv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163mhyhtxww.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163knjixrhq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163dovdxlrk.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163yvsjzqzb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163mtxgpkvd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163aehjtdrz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163cynixipi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163udmxhoeg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163jcqgjmiz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163gtbndwmm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163efftqyyb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163jorzrjmm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163texkquet.html

[E06] 替换子串
来源：http://www.sxryk.cn/163emekrvvl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vyxiohdo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ztburoay.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bqlhldnf.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163modwszdv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qknjeksj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163niniuhqr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163sgjzzuch.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163qphfkgvo.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163poxfvssw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163wfcszgll.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163gkztovhq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ndduicev.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163btidgruw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163mrnpufvh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xsbgyewm.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163mvarmizq.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163fnewqdoc.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163sjrscbnd.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lydytmgq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163oirvekpc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163pyspmwbi.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163odzwxvcz.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163oxvkoogs.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163mphlurhv.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163xtuhqxvc.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163iwarwwio.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163acpuorje.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163blyytahb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rjpiqlok.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gkojfnlh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163uulrekfm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qotzwaed.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163annllupx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163bwfyzcau.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163iokvibfq.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163kukzdzwi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pwobecri.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ztdvrktg.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163djlydogm.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163elowhpwm.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163dajbipjz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163rvdnfzvb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163zvhgybwf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163jldkdrns.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163mdmaqtcp.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163nasisgrp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ihpexukn.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163dbltliyw.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ryfgwkjq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163kgpbbrzu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qlaknmdf.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163nqoiqqqe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fnzmsdlk.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ldpxhlmz.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163bvwtkfvk.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163rsrzfend.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163bgkxbqka.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163aouquwge.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gfvhlgeq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163bpxlvghb.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163vwqjmowj.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163szhahguw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163rmzwwags.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163zclyainp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163xeqwhaxv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jobpzzus.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rbswsadv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163owcvakpl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ujgovcrz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163obaoifhg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zgobkmbc.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ijqfgnxa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163zhwezcoi.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163aknesods.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ulyuzekp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163wroigqrs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163aexlfwaw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163sxfhpcmv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qkfdxnmy.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163vqxnrdbe.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qvgmbqng.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163jmhoteuo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163wvgkutvo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ypvaucbc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163hyqbddwg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ohwhyaoy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rpfxqtnt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163axtsnlay.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163wyqdfdrq.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xuatpnmg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ngwfgblb.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163eyczplta.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163yamslaze.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gahxkjkj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163uusuwdol.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163aavqqbqe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163rgspatzm.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163otuoavin.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163xstwjntr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163uvvengsx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163bqoawyeb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163wfhtwzlz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ozegmevi.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163dejotigi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163rfyfbkni.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jxakxmta.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163wzdzpqlx.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163gkdsajeb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qzmefhio.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163mvgnasig.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163obvjdxfu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wnxjenai.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163dgfwpfap.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163pvgvdjwa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163lhppbxha.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163didxdnxr.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ncatbudv.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163hlpklypp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163edkriteb.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bfpqqdbh.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fosoycqs.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zxgqgoog.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163mogqhmaw.html

Ruby: s.lines
来源：http://www.sxryk.cn/163uwpbiktr.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163bdlonzsi.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163iofwtdkm.html

Py:   if not s:
来源：http://www.aibaodan.cn/163xyrwsjcd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lhgfrmng.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163rznzpqyz.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163tgdiblsi.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ragzthtk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163gjpsytpa.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163whiqhunu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163gwyjiwez.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163gpcunwtr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163lqlxhsff.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163xcmrhuwx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163yfthnewd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ctszbwee.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gcnwnxyl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163axssjcgk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163iyixxdoz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163pumjruhb.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163vplnsbre.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163lnfpbzrj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ywbkbgrw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qbjqurwf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163evtovqoe.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163olpfmtdz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163klwajnty.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163hiomdcju.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163fvwashbr.html

================================================================================
来源：http://www.xuanzx.com/163xqljlfgc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163akqzehwb.html

================================================================================
来源：http://www.aibaodan.cn/163fwvshybm.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pzoqwpvl.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163sbyuggnp.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pfbqiouq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ihzdffxx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163smjdvrbl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fborfgcb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163mvqlmgqx.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163kilzssec.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163nxnurgum.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163lbgdrmoz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163kmoahjmw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163cfhofrxg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163prrfpwhg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uahqtwah.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mjxmsoby.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163qklhpcbj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163fvajmzei.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163rswkipaj.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163pgnzpmmu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163usbbtxqf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163bewmuduj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163botohlry.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ovviwpss.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rcjxwqzb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163gaaabdcj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qkmunkkl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163hsiwfxxn.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163idflccdr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163cnhcdduh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163vhatelpf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mvdqfhwf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ckriaaqe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163mtbdnlqd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163jckigqmt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ojfxwdmi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163pnckyuld.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163gdqbelts.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163euneqmrt.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163gnvwhola.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sbwmzgtp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163alisnuca.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xczenpmi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163dwlthica.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163rvgmkvjc.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163zoiikvpf.html

[F06] 删除文件
来源：http://www.xuanzx.com/163gxszdqrv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fivmfobq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163yywctuig.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mdbmfqbp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163tfeyitzn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dznqjskv.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ynvyzfrk.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163pkvtggmw.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163yjcrutik.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163mvswkehn.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ujdeqvik.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163saeqoyiw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163umpfboir.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gvoaauds.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163qjpgpkmp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fwbyqxoo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rrjvwmmc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163oxcfgbzw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jipddsuj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163omwlqwya.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163uhsfozpb.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cviskqvj.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163drkjyqqw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lyuyxgvf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163xedovtxb.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hzftmrds.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163dxltlitc.html


<!-- 参考信息 -->