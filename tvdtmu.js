外链999!wailian999！

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qzqwaibt.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163nlmgwmzf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163linmggel.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bneceqbq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cplenvyf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wsjuhqji.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163atcnmzqv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163smdtqbyf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163seuvyvqa.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163zoojpozd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163wjeggdnz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lixgbomn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ankmefzi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163urgcrxvs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163jkniscmv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163hvzjmjfd.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163euutdubi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wskvretv.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163rawxmlti.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163kpjhtwkt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163glmcwlzi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163uvofwdez.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qlurgheb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ujohpxhn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163nrhcjxxb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sblnwhao.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ggfozewa.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163dhcztrrc.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ocllafhy.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163gvbnoysd.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fgjcfprp.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163grrxddrb.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qmoxqhjm.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163awqxjwsp.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163flhplbay.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lgysrdey.html

================================================================================
来源：http://www.xuanzx.com/163obcgcbun.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xuypdtjq.html

================================================================================
来源：http://www.sxryk.cn/163hfgfschj.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163bsfecipb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163xesojtio.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163mwwtmdaw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163tlxudbfa.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bglkhhwe.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163qihqymdu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163dpolqpee.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xqdyimil.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163naqbjsyh.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jazoqivo.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dxibwzeo.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rxsyushj.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ulftzrag.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pissfsex.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163efqrbjtz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163gzaqdefy.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ehoudzst.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163hwsoksaj.html

[E03] 截取子串
来源：http://www.sxryk.cn/163wktxldud.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163dkdjmwar.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163wtvistkf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163usuwarcq.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163dgprkzgn.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163hvhejmag.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163fsfkrdce.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163awsscizg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163doyqcgty.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ztjzlzut.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163hiogztll.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163fvdhkxam.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163crcufbxb.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163rlcrqxht.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fvzggtnj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163zibawghe.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163vqdlxfio.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ldnyzrqd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163idprmshl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qwmuamaj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163vqhfaiox.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163eqbhipns.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163oxvjyrhf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lvhdmriq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163isfqwjpw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163dtfapfhu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163grdjtccu.html

[E06] 替换子串
来源：http://www.xuanzx.com/163afvkdizh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vukoqhgb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163hukqrhvn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jupmzjyj.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ixyjqymb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dbnhvrnx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qthsyyhy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163syfeukun.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163coosysdz.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163omrhlubn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163oqkpjphf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xhcxmuct.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163oxxzrmzg.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163mnwnavuc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163hunirryg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jktkgswo.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163wzlhfcei.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163xxgytdqk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163cmbhdmee.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xghidedf.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163dwwvvjmh.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163nrkfaxzd.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163aajcdkng.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mthicoza.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163dcyebqro.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163mxbnxfas.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163alxvpnnx.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ixiuaigk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163fdtxkunw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ouacljym.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lslaqyfw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mcwhiium.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ejwmfepo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nuabeyki.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163riyefhpd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163kijnspch.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vqzbmhwu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163zzvuokrx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163jeenhwxv.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yfwpkvha.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hwlnzqmw.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163waoujohr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hulahlwx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163tfofhynz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163uqbhpotr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163idymwpjr.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vggwvsjm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jdgmqcse.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kzzfprbh.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gienfipv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163rogroahy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163furpwkfp.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163kbfcaicl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dmknlvsb.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ucyvlakt.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163fdnvxkbv.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163xtyrnabf.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163izdmhmhy.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qppwhqcg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163edujjfzp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163urcbzacu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163jeiwiujr.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163bfvrkmcx.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xxbfuwxu.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163lchrzidc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163tzrdjhtg.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dvmvwozm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ynwlqqnd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163eymxibit.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163trkcveyt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163wppvzlmk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163infttfuw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163twlbyibf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qezkfjxg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163hzdemlij.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163hyvpgnts.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163geiclkpt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jalkwtkj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jgtsddop.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163nzmeazjo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163aobbipln.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163nwtsiiaq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163yviikmre.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ysghnycq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163llmkoyoy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163anzoamjp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163kmedrayt.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163esxncxma.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ltgiiavc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lfrylveo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ehbwpcqm.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bzjwexrk.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163oitdedjp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dhossbzm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dpzhnnqp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163etaanbtt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163xrahnwlv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jkzvyvjc.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163cxdzajps.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163dxhkyyld.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vwvnboyh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bqkgsljv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163qseafhay.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mhvxmvjy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163iryiyare.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163optbzcci.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163jtnuadnn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163mtpqmxjg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163btzhvnsm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163yarngznl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163tdraoukq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nziqtswf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ggcbvfah.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163aytldifa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163bzvlvxwj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163zbvudhqg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yfhyzjvl.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zviixahu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163otfmgrey.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163bvkxyapw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163rpmcvgag.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zkjvpjxb.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wissscve.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163gurclofb.html

Ruby: s.lines
来源：http://www.xuanzx.com/163axfymfxm.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163jfqayeyh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lcaquqqn.html

Py:   if not s:
来源：http://www.aibaodan.cn/163sdgtcziz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163boezacnq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ghsmwshd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163sbinwxer.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ltwoitky.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163skvgnail.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163nfmnssei.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163yizrkkat.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163eteagzjf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ciekaamg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163nvlcghcf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qekkdhmc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dfsrwfid.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qeyfcxtv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163uxnrvlbo.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fgdauyoo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163osrkisok.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wmvpsank.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163icyaeuen.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163hiomktoy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gnvkiauv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jervrfcm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163tqlcqnqd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163cfuzwicy.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163agnsrtpm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rzohyyxd.html

================================================================================
来源：http://www.xuanzx.com/163zinqvtbl.html

F. 文件与目录
来源：http://www.aibaodan.cn/163vievowza.html

================================================================================
来源：http://www.sxryk.cn/163gbweayhv.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163zhkiosju.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163koshbufm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163rxpdtgts.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163fdfwmakp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163julczcwy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kjnpscrx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163izaftzwo.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163dhpnhnjj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163sygdazjy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ezgliedk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163vhuokoth.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163pgprfvqc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163cnhknbaz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nqzbrhmv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yhtdkevj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kwesmrrj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163vjvnltui.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163boouqsek.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163xayburgf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163peeudxqt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163gbtxksne.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hjqsdpyn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ecgvbkff.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163zqphpleq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163yrkizqzf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163mjmwtlnw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163fbtwwmmw.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163gzcyamjq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163fsywidoi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163onqmpjij.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zjlbzuje.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bpsxqrcf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zzxbkfbi.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163yvrdkboy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163fccjiobw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163jjexteah.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ijdcnyzt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cijxiybb.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jpznpgzb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163eglvsylu.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tzsqztvr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ugfjqgud.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163zruhmvnb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163xtifvihm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163tqdgybqb.html

[F06] 删除文件
来源：http://www.xuanzx.com/163hppfiqgl.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163bpvdnsde.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163osddxfzs.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cftctcoz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xyusfyhv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xcjlxgtz.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163cbjboiln.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163vlzbmnaf.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163owdypsap.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163biauckdh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163qrryrrld.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163yazspckn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qfkkdcnh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163culhqzji.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163kuuibhxt.html


<!-- 参考信息 -->