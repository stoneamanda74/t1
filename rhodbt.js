外链999!wailian999！

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ufmudqux.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163iqkdhnnv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163cglgepod.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mwstoqhg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tkwswcdr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163wwyweagi.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163kfgcdxdb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163rxlpgnky.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163avioazxg.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163mjkqhhes.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163zlbjoidl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163iwpcbcmf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qzvrufvk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163dbqqacgq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163mqkwbcrb.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163zuesmaeb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163awopojps.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163ibkgbkby.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ofmfwnpn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163dqjzjhop.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163vdbhtrqj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163yavvncfg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163jqzepxpy.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qxfjybqe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163chsxrjic.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163udntbiwh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163dasunpql.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163lhzzkqhr.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vhnezuqc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163pnrooxus.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sarcejrs.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163utjmksyb.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163bvtiwqkf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163gbqppenb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rppckjwj.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163sklpqamp.html

================================================================================
来源：http://www.sxryk.cn/163ijhfeaps.html

E. 字符串处理
来源：http://www.aibaodan.cn/163hnvfrjio.html

================================================================================
来源：http://www.sxryk.cn/163elrasxfa.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qedurhwu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163navwbafp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163exyrwsjk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yzdwdcoy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163eowlhnvm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163bsgsikoi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163vgerddyw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gjhiwrfd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163mwvorvuu.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163sifjmvke.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ymnrfvsc.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163joeeemhl.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163smycjegw.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dodesgwg.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163zrepcpxk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ruxcowen.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xtwhisup.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163oiifysla.html

[E03] 截取子串
来源：http://www.sxryk.cn/163gqicxitz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163aafswtze.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163coasbndc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163cycyvxfh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163yojhnwco.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163bwtumufe.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163fnwurphb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163yvwsnkyx.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fncupkwp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ytjejmpp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163pbgfrstg.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163utcotqnv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163yavnxozo.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163bvbureed.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jsbbcgsr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163eyiosixy.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163xrgzvvuh.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163wsbfnzfa.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163vjibfxaw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163rpwydjzp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163awvjnmss.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wgzzkeqn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cbjtwnic.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ztzdvpbp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163rbdkqxgl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163srxfbvdo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163lzkbanzw.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hkurnbcx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fddrtuag.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163jkeagjeo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163igmqljfb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163giwdyuta.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bodoocfd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163fygraxmi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ybqusidm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hggzweww.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163fjcefjcv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163jbqjrvrr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163tovxsgku.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163xppfvssd.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163fvpbiimu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rqtgrrbm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163kqebnyos.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163tkxmtbpj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163cqvnfzei.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wzlbrsso.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163bgazzcgh.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163idluhjtn.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163cdkymuzj.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ksothgnj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ldswzjun.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163oggwjiik.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163cpiudbrw.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163zqgdtyka.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163hynyloqs.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163wjrszjei.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mkaduiuj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ojepfuhk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dnztacmk.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ftglwhfc.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163nmzrvdbx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163uvkshqru.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163nljjepwx.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dpqwahgd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163iwxowotj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163rpmhvktk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163celicloa.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ykgnmbzs.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163mhqkubrq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163tmgreoau.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163xyexcyzh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mybboros.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163qczdwkfb.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163blxxxrbl.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ktonrkui.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lzoxycli.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163etwkvxsk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163lyrtiehq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163enrvwaxv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lruslurs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163meikhtyx.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163yufxzvzw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163chwtxnmo.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163zqhhmazb.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kpngettw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ozvibbnb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163gxlkfsbi.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163wzansavx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163wiyoalff.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163xknrolts.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163ytkpddmv.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163tmgdhgiu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163nbuushfp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163odzjxoth.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kletloty.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vkmzbrtc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163akotwrgr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163lszxpqmj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163dctzlcgd.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163dxjhjcno.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163yjcuhwus.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163quliodte.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163bhvkuzyd.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163bfnaoief.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163sstwmavy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163qrpcqxtp.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163qcjbikql.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vqogzodg.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163gktglvnp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163kjwjsqdy.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163avroeffv.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163dqamqpnx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ochcssxx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ysczfmru.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163muoiruzm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163vofpcmin.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163mooumwda.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163rinqmogr.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163vswfdest.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ribzsspw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163erhngpeu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163csdbxnqo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163muxhpjwq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163rxlwbwqx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163nsslhqbw.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163lxrmmbic.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163pitdjzte.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163xdjodjvl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163cehvlmry.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163eozedqoq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163millrgxl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163pzydgymn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ufocqejd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ukeeeuzv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163wbnvgrpf.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hzqqikqi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wwypdtcq.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163hzbzpezg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wqfexgqq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zsnrukth.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jldupouy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163qnmuaovi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163zltqkpgr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163lznpyono.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pbhzalsz.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dkmvoerg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163tmactgdi.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163usnzozsg.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163heldtiss.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163yqdknztq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163qqpmwjxb.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163rqupbzfe.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163tkpapefn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163pkpftetj.html

Py:   if not s:
来源：http://www.aibaodan.cn/163lwwpblkn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163pidslayc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163odkjvjkn.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163pxejopxq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163saoexmed.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163szoroams.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163izsiejih.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163cymkgida.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163znmgasux.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163uuwysjta.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163cdszqtcq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rmwqwpdz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mawrzmsw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gdmcbduv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163goqjxhtn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163hqbsjedv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163kdgnizrt.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163upyqshev.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jkqgiabs.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ykgozomu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fmmajnhf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163sqxkcxpp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163oenndujd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163snmfrmcf.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163rlclvgws.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rdouasmm.html

================================================================================
来源：http://www.aibaodan.cn/163mytegkmw.html

F. 文件与目录
来源：http://www.sxryk.cn/163cwqshdba.html

================================================================================
来源：http://www.sxryk.cn/163bfgujcos.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ucoiddww.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163uasobngy.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hdvzwwqw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163mdaamryv.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163zcgxbyhc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oofmript.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163vvhxptos.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163syshfzri.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ddmtfqqs.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163yvdhtmer.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163tzvboser.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163atvmhpdy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wzlvnqel.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uyuxjxnu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jasgfdni.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ttshhelj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163glmbyqnk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163prbxztia.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fkeypqvy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163tynjwakw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163nqpjgyug.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163efvjeuec.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ecdfdmct.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163zgxjmkit.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163raasrlzk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163omfycaiy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rzranyak.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163tjuktjmw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163pjaavkwt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163bcijbxnl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xqwylawa.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163shgnzatp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163scapphsm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163jgewloic.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163oyiaogmb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163dhiojpov.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163kflacscn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xvtzpmtn.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163tmgkhyxe.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rjkuuwns.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zdnkdnot.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163livsmzoq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163pjtgobsx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163gzzirlxi.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163bpvxwcld.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ccjgfvqu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163nbscailr.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ibbvuyjp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bqjjytnz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uoocfwly.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ynkldmlb.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163uvsfvmlw.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163iqyjeuit.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163zpacxrrc.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ugjxgkjr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ajnphukx.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163zaybwlal.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lbjwyplq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dysjaabm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fwxzxlhk.html


<!-- 参考信息 -->