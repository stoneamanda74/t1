外链999!wailian999！

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163woqyirpf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163huissyqt.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163kaywzmmp.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163xxutssob.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163wbuffeph.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nceycxzl.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163hdlmcfhg.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ckcueaek.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163jitkpgyf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163rthlqpjb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163pnhuoyzr.html

TS:   [...arr];
来源：http://www.xuanzx.com/163bczvjdda.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qpstpjtn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163nliynivk.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ujrcaqhj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163nocieteh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ufmhlsom.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163zujrflqp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ivnvwgrv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lpemgkua.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nkjlxpwo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pragkfnt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jkgpkdoz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163crmjgair.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163kfivsoua.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163bxtbgzvy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dxweppso.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163lmpqeyvd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163zinpahef.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163atqitejq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163dgcbnxpi.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163mutulcue.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163uzxbejzd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tnemxkpo.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163nmwytnrb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163lawseifz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163prvyxdkg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163cqfoxvym.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vmluebii.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163raizdekd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163uarkvlhc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163hvtxoahs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163oyzvczrv.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163zazjmfdu.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163odvaomge.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163cortruxr.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163qamduoqz.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vumrjcdb.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hknsqzbn.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163shgwpbdd.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163fycokvui.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163frjqncsd.html

================================================================================
来源：http://www.xuanzx.com/163izjwfrtv.html

E. 字符串处理
来源：http://www.aibaodan.cn/163rtfflecb.html

================================================================================
来源：http://www.aibaodan.cn/163qsrhpixe.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zilcoeuv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163sklttxdb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163jcjbmobg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163fejtqxcd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cfxnarlo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ynzsvgya.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163gogpswpp.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cftdypuk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163jyjgqojb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gbrnudfq.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ikvxhuhk.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163mlorcpuq.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hnmflqdh.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xbhttyyd.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163desuihte.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163geovscdn.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163rjcnjhlx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xxwfpzqu.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163yhqjbtsi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ahjywczf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163dzuuoqsr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163csgseive.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163lhrkzsfz.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ckvdohvg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163kiffhbqn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163hgvvarpi.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163euabjxnp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163utijfmfu.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163hwchszby.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163duzxfawr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mnxntcsl.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163nwqxbwtk.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qtkbbpvp.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163supteltz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163rqdftaxn.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ufupftan.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163nqygzmtc.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163juckjmnz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163xyeoyvvd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yikefrkn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163rpgkierw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163eiwnkzmm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163enerjrus.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163rpgwzxlq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tzbxwmxr.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lybqzjdo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zmptjxir.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163dojalwap.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ehkmygnq.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ygloillw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fhcgrlze.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163faighmxu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163cmiljaya.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vikoccya.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163nmaiqbcm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163irahjycx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163cbsjxhjg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ervyfvgq.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163pozmhkko.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163rrzghvzv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163bfzcjsgf.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163eekfpmaz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163dsxzhami.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163yusvdakb.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163diyfcmam.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163rkaceznp.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163lmtrzxaf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ajyiimgk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wzypaboc.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163urwvldcn.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163uiziyuqk.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163jqocxhny.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163kztingpd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gjabyelh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163zcuvfeho.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vlziqulb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163medmvhzh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vzukiqvt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163dulvhjpw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ehrelrqs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163cqwqflxf.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163gcjhjeng.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vquounwo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163llfamxvt.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uxkdbgsc.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fkhlcgzi.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163gwbwkrev.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163osgdbmbu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163khjkdbyj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163exabyuwe.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163uonhkdqw.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163wfwtdtql.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163zzjjrxug.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ukthlegp.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nteoxqlo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163qsbofhtl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163exbvutiz.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ndpmcxeh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kxvjqfww.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163mlmtrksk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pjuxqrvq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163quucroba.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163vhaoyjia.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ggfcaciv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163pwksawut.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163qgyhhsln.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ilmnujmi.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163mzgzwbph.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163hkhpmajy.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163hyowohro.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ibhllplh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163lphdfwku.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cgxynzhc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163sskvnnlp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163onptbutt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ubmqfktr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ysmoizxd.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163tviymhhi.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163sqieqtkf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163wgrwsbjo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163cdrsgclp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qunidveq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163tccnvrvq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163aumtwkjm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163atwyvffp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163poxoysjj.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163pjzpntzk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163viyqnwzf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163hrukifev.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ipufvqaq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163uzcolxxt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163iymfvtme.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163zuselilw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163haelytjl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163tuanavdf.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ktltfzph.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ocpbkgxa.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163whqvfoik.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163vnldtvxs.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jffzscxj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163rsofvoha.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163vavpfcgx.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163lzjedhhj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163abkevkdk.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163mqwwervg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163xcxpwrnb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163dtmgapbw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163sdhxuntm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163iednyqjy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163gjqnmxny.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xyccuzvo.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163bvhhwqiz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163sippksgy.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ggawboaf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163zmlnkwjd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163vfxsugmq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163kxjlqjyv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tdzayjks.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163upcodgrm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163daqjvenp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163gsbitipt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163yqjxjljr.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163voszcbrp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zzfqsgvs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163aiprdmqz.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xeujjhoy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ffsoqjdh.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zrgjfmmc.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jrknkoii.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qdkjgcve.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163bpnotrut.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qyqwnnke.html

Py:   if not s:
来源：http://www.xuanzx.com/163yegczuym.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163kjrmjjwl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163qxenmnul.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163eqpqtkuo.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xzqnjwxk.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ktckcyoq.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163dmclzugw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163rphesntx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163xuzbhxor.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rgfiquug.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bfexukiq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163beabfzjx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ppxjpvsi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zcovlhcl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163vcorapzi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163gbflwlwt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163jjdyfwzt.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163sbenugkx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163ljkujros.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ijurrytf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zxcueiqb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jlgymwtx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163dgwmpbud.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163kpobkorg.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vdzjxxzh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163pkwlukkm.html

================================================================================
来源：http://www.aibaodan.cn/163ywzeledj.html

F. 文件与目录
来源：http://www.sxryk.cn/163seycyfsn.html

================================================================================
来源：http://www.xuanzx.com/163vykbrpyj.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163wdsoilrq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163dqwvixel.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163auhrxkli.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163gqmnchpc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163suzqugby.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mhrcgveq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163soikwmrd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163igrmhtir.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163tinplbxi.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163yiyqroqo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163jchfuztf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163lunvfals.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qzybxlzj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ymkfngpc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rnswqehb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163uxmawdhx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163nehyrrup.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163gtieqlmk.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163rimfkies.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163uperxghi.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163udbwuwce.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163sglqgmol.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163bsdprilj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163epegnmnt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163jgvrejry.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zwozxfpo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163bvvyppml.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163yijitbdy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163bgxbalsi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163oqvbjxfw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wmmmoupm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163znaaqiwr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dnxgcwdl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ahusaiqb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163vzhnbzlj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163iipcdygh.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163gruuwofh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163nhzkbcuh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163wctiwept.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lzuqtobn.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hrszsqzf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163awxyfctb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163cbltnfjt.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bhwsnopa.html


<!-- 参考信息 -->