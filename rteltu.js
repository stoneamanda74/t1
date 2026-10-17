外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163dzwaxlxk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163yjgnpzqb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163rzieiqcy.html

TS:   [...arr];
来源：http://www.xuanzx.com/163kkvbcygo.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163djvxshzk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163kowunvea.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163jetflfeb.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163bdbobcxg.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163wdfrejkn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163oxitxzlv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163lbugzahq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163xadtphpg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163trnjgrsh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163pjyidlrf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jzdcaebi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163wquouicr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163kjyxtefp.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163pbqhkguy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dyrdwccx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163aacbqpjx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qdqcyisz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wmibrzyw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163bketjpnd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163tybnxqyf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163cqsxvbls.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163mlijkbho.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163mhlatafb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vzmgmele.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163lhecatzb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163jomznyyl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163nxaupsdp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163xkppilcw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163nzzxtnwu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163pelcwlry.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cvjnpzhg.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163hvywrhxs.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163lqxjwwpq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ioljdwge.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163aznnunua.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163ilpmyfwt.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163saqyoyxo.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zqzrkqji.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163jyaxsiwb.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163plimgyev.html

================================================================================
来源：http://www.aibaodan.cn/163xwgafehd.html

E. 字符串处理
来源：http://www.sxryk.cn/163eqhqxfhf.html

================================================================================
来源：http://www.aibaodan.cn/163xqimjemf.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fxpqvcev.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163qkkyoegn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163rvalfxiq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xtiansqf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jlkjzlsd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mssgrrsq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163pgjmytzj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163tqcpoucd.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163zcsjkajm.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163xtrdlaap.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163mezsigqb.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ngdvvsve.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ldrrnvif.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163abyykqhq.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qmcfwrzi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163yorrgsnb.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163oixdqbgi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163lhbevdny.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163umhtdkqn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163cqccgqnh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163iwxxkbzx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ugabsgse.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163xgnegsdt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163mszkrxnx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ejtxjado.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163tpxareus.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163ymqrkdzf.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vzgmqfhx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163kxlojptb.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163fiejibrr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ntdpibzp.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163sfbouihf.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cluluswv.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163iehrnluv.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163garqnkjv.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163nljhwhbx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163owxqsyvr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163bkvlmhud.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163nmdzpodm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163erzjjnkt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163salunmxw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rhhlqgxg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163kljndyta.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163puncsdim.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hlgbzlvu.html

[E06] 替换子串
来源：http://www.xuanzx.com/163omqoewsw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163msezfnpr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163lcdlltpc.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pdbzjkjm.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163orhkkwmo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zolzycum.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wrythjwr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163airktsgy.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xazyoyoc.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163wzopvpbk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163artybifd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163qrodvusc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163jxpsulih.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xznhzcng.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163gbhrckna.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dqreahqh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163coylnoiu.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qkwlebzw.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163nreuvbge.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163xjbqkucx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163clrsbpts.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ilkffqjf.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163fzrmfjfd.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163kvmquzro.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ddofaide.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ydccyqcm.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163holtnkre.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163jdngrnwn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163kllonoad.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mhvuqcck.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163izcimhjr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tyxlwpfe.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163pqxetpht.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xrotpcae.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163fdanztvk.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163jjlosdxm.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rwbjrtzg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wyiedgqc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163nsqkqkkl.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163uajbdvav.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163izdwjmra.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ebdugvlm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163edkzgpmw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ovzgfmnc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163fahxwkuj.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ujyiezhl.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ndekhzhh.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163jvxulikm.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gqsdfhlm.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163weiutena.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yaukflqf.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163xsvskvvj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163xxluskin.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wifkiozu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rdncmvpg.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xgoszeji.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163qxclzipg.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ddfqrjet.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zdchbskh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163yauvacbw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qbtcczvq.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pwjkepng.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163rkblvzua.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163harvjnvg.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163fatyarmu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163gpwofvqm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163tnuljrrn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xyecjold.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163mscpzcvy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163tlzlnykb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163emoklybz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163nlmnycpv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163lxyhcbkh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163sjwjgusj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163vtpizvit.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hidkhmpg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163nujwndqd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163degcbuoo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ceuaqxva.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163lbobtdcp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163irbkhcap.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163kxqvfinl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163jqdilgsc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163rzgkfibw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163bpxtvlgh.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lrrmqosf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163cbdhhedy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ifbckxzy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163lyjvqwbp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163uogdgpwn.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zjrnbthf.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163lwcpznec.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163mqrwyynv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163yconfnsi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ihpkyppz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163qxpnqloi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ueydsqpm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ijtafxsd.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163rfddvqfn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xeulbzii.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163kbhgdzaz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163euchnikv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163shsfheia.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163iuilyryz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163nzjsbcfp.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163japttkpk.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163qhflhraq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163fyvwhtwt.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163dhpeleef.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163vdkqowmj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ycqflsjf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xjshuxhr.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163olqbhsns.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163gjzmocfe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ycbcqgfk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163psvtyyfo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163lnbcngiw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163nxavgfes.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dorunpqi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163rfvthjmg.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163werwhzgy.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163oyommxri.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163cyqiijcv.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163aphugrxz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163rkptpfkh.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163azesqkri.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163heyhgils.html

Py:   if not s:
来源：http://www.sxryk.cn/163wdbajrlu.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163zumctxwk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163bhtbvtyw.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fndypvrf.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rycnyixv.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163psudrlui.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163cqekxirw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ywcbveaf.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163umrsmrul.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163yhqrcsnj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163cukikoow.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nemdgluw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wegpgwen.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ymvipxut.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163xaajdjnu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163jpmvivqv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163ehrcgomg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wszgwysc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hphxqdut.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rovsjfnu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pwfkjtky.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pzqzhxkn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163xthszvdy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163iavmnzjp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163wbydbnme.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163gmhirjtp.html

================================================================================
来源：http://www.aibaodan.cn/163vhzuiaqe.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ubvzsbnx.html

================================================================================
来源：http://www.aibaodan.cn/163nehcfthv.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ijqywske.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163xcdxklxa.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163gomwixdj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163tuvoooul.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ppopamdg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dysecbhg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ozzywjwu.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wobjyiwe.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163tcgmfbpv.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qymkxtex.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cialhmsj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163nscoaniq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163aiexgsmo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rzdczjcj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163hgnrswcj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163qxuezssh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163jygfzkfa.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163dsxaxujf.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163zkudyipf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ktcjrsrv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ejerbtpz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163pdkmgtri.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lpaobzgg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163egrjxuhw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163wrexwjva.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163lloizrrv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163lrddixkd.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163mhiyfhcu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ovrasizs.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163inmqxnip.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163clqmpzeg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ukkvbkdv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163rjqnhgex.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163rdicoagu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163swkvwoaz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163uknkjhzo.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tuvzxish.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163nhzmohdn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ephrnkny.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gwqjftqi.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wkzuefev.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jadodnqp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163icnppamq.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163tujcvuot.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163dypacpjr.html

[F06] 删除文件
来源：http://www.xuanzx.com/163rewnywby.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163htnqsxpx.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163kqozansv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lqagrath.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wznnoxjh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kkubegny.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163exqmjhqp.html


<!-- 参考信息 -->