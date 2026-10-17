外链999!wailian999！

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ikwfgtmr.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163obagzflo.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163kkjnfgni.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163dzgkrykm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jqbyupki.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qauskguu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163zhoajcaj.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163sletguir.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163ybecqlgt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ebevwphu.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ktixekvc.html

Py:   x in arr
来源：http://www.sxryk.cn/163jjwodpla.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ijkfapkt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163qhbxecqa.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163txqhgtjq.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bvuzxyij.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ycuuwjsl.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zehyhyzb.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163orvnqjll.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163iqyxismf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ybjzxccp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163fvkvxdmz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163txhxuqor.html

TS:   [...arr];
来源：http://www.xuanzx.com/163mkkhcqqv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163exxnuubk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163zgqiuqdr.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163cqtagibp.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163iwsgtarw.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163tcrksdmk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163ohghfczo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163mvlpddce.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163bsfgjxzo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lsubzqhn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163xjghquii.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163omtirurs.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ystvtmwp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163eagzgzdb.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163vbojoymp.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163fsxtnalq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163hendnsrc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163hzkarafc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163fkjhysyd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163psohyvms.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163xobprllv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163iuovwkrl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163iogfghjx.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163pnbtztea.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163nhmhbluk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dxcqvpfh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163wlhnwtkx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163zirivutn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jgtyfgyz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163lpvkrfhr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163fzxechzs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ocrqqqmm.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hgiiyize.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163xfxatayk.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163fcczhdoy.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163vhjbjmei.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163xcgrcxdj.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163xqxzryad.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163hzydjalf.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xawfgcri.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lemxqdgo.html

================================================================================
来源：http://www.xuanzx.com/163tjhziapx.html

E. 字符串处理
来源：http://www.xuanzx.com/163svciizza.html

================================================================================
来源：http://www.sxryk.cn/163lxalxhqs.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163wgzqmzla.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163nachxtzv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163czutxphk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163gdqgxnox.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163chplnmmh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163encqnoql.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163mkpqqfae.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163kwpemtzk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rjnohmrc.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ficvddvx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163utzpjsdt.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163fzgismih.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163byihfucg.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163agvklavq.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163waftyqkg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ekoqwqmj.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qwwngxqi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163plhsucga.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ixrcxzco.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qlfdpgwn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163zpshwxhp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163gvfxxhjj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163uqqgvfmm.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rsaouhmw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zkirqnur.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163shonjtfb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163txzbcnnv.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xlbazxoh.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163eyuhhexj.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ysrwlkjr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ikentabo.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163kpscqmgm.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163mvdfzqfr.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ygikjtrj.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163aesonvlc.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163qkupndth.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163yazbtlis.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ovhuorna.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163umwnsvzy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qoiynemc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163tyhyyzdp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163drogtfnb.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xfscvlrm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ohlzsnhn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163bwtjgnea.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kiyhjkpe.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163mhhrwkut.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163pgumginz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oflvkiee.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bluubdxe.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xvfvjspr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163igpkaion.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163rllvttws.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163uxiymhnr.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163fvgrlefh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ynxtyymo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163oqvsahqf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163umzywsvb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163xngckmwy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zurqjolr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163mwoahbnj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163okatauob.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163kpxwcwgj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163gimxgbkf.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163wklgfmpf.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xoztwuie.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163dbmdhmby.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163qfpzhocq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163esdkfbjm.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cdcqtgde.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163pqgvfvzu.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163riumadxk.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dmfdousj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dnkoozle.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163toljnvya.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mvwjbgqr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jxmqlxva.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163urzfvgxq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163zcfldawr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163hfvauawa.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163hmynidbj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pgwavguf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163wrwbidle.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tdaejjpl.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jbtsuzua.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kmaittuw.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163qwwcpack.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jgochuea.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163vbhltidv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163zojzgqzk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163yqcgrsbi.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ciykftgg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xxzmsyng.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jwftzaad.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vbehdqst.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163wcxcfmas.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163qzzeasfu.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163yuspkgjk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ihetqhqa.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ssrtaouw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zckzdlsb.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163ubqpetea.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163altyzjdd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163nietwexa.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163nkxgloof.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163onxiispd.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pqmjujwt.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163zmyxnqgp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163tswblgta.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163tsfmvavv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163tpslquhn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rbjjjzbh.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kfxjnpxj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163qwffjxzx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163xyyjgdqh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163eosiszku.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163gnekhove.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163pmlrdnhh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yyrvcbgx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163gfimgqfr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163igbauljx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163qnuvoirv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163jrmaimxu.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wbgethya.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163cnazovxk.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163svtrvqgz.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163jioeqjtk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xuncmxnq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163looxwcqd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163myfbgixe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163gbyprksy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163rvvfjmvx.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163rsfnzinx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ymifawda.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163rlgkncec.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163dzrvsmwf.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163dxeskwxz.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163lfvgrvzv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163uzrjyxiz.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163hhmecvju.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163rzcttaco.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163lesrhbrh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163qrtbpkij.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163iwmknasj.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bnufwbga.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163zypqemfn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jskehvnt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xreoryvr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163movvqjbg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163nmeacoat.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163zulouzwk.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hgugernr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163axgkqrla.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163aviolkuv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163nxywrnym.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163nvzmikxr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qsmjqncp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163utdefrox.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163hnlgesrf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163jbkxkoeh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163qpljnhvi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163dxjpupbl.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163kijqigqq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dicqucoz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xlqygzyl.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vkvpyovx.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gderxspm.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163krzidqfp.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163udtddjun.html

Ruby: s.lines
来源：http://www.sxryk.cn/163oifceulu.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163jarlsprz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163tpiuwnum.html

Py:   if not s:
来源：http://www.aibaodan.cn/163eqvjycrw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ziizyjwj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163lrvnusxt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163wtkszhth.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dttpzszl.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dbvpjhzc.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163yvawxgzw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163cufpsqfc.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163tvctvhik.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gnckgulu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163txrfmktk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fjwqnwsr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nggpjenq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kahooffp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163fhakpsft.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163iofgqjto.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ppjvdwys.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163jrukszav.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163eupptfxn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zdiealtf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163sbthrvsv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mtqkxpzg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163najxdclb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163fvyiggzw.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jfmunumk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rkxzqgsb.html

================================================================================
来源：http://www.sxryk.cn/163ymhzcsnm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163wschzrwr.html

================================================================================
来源：http://www.sxryk.cn/163avrriyxx.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163rovtjdur.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163leazplkj.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163laddeqbx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qtluvprh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vifhlkqg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gwscavjg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163gdzgkkkf.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163nzjwijll.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163fmyaepct.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jsleydnv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163kjipahmh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rgvtlsgv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gqrvthcj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zxvmxwlh.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zdzcrvte.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163gwbbrsiq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163yjwqovfo.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163omyqzlfo.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163idmgxstt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163yoaejlfj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163udmpeokt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rkuufqez.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163jmuuznnl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jovezevg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163xgnciees.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163sifwbavj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163egsrjkmz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163mcvyxnrl.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mullmgkl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163obmdowbf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pdpabgva.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ntigxbem.html


<!-- 参考信息 -->