外链999!wailian999！

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163drvkllcb.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mbceuwwl.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163wmopezzo.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163qxtzfnij.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163mlotvugs.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163skeprmig.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163yflyewkv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yuyjdjrf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qhywboem.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163vrezvvqs.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163hzainbpi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163eoyhjpol.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bzfnzwdw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ihnkurgh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cdcepknn.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xvrqlkyh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tymszswg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xphuajzg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163zxpjvrsi.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dgnortge.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163mcmcwuxo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163bwhtlquj.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163mbtzocaz.html

Py:   x in arr
来源：http://www.aibaodan.cn/163gpagvuny.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ogkstfzn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xgsspacr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gshnkbtl.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ytziyhzt.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163cgcdyxvs.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ntmgwnyj.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163knwttvqk.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qvngosnm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163mjosfiwi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163koslfrzr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163mtflrxkh.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163pdvwwjcu.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163woehedzp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163uydvpdpl.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ngkpvior.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163afeofjum.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163demsttuj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163vkpghyum.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bxxznliw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rkxildme.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qzstoyli.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wkmaeepk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sihmlccg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163gveojnar.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163wytxovac.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163avqhcgbc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163dgatgtft.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163lslwzmak.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wuiqutnh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qcsximba.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163tfpiibxz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163vviuzahz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163itvynobi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163snhdllwq.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163aqcthjhh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163srvanvis.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ppwudrvb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163mlkuxuvr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163yaelayzx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163hzeypzlq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163fftycvlr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163xottcfga.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163pbtpaojy.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ezaxwcdm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163eormmfbo.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163yfkqiplb.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jcpxqhlh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163efvbenui.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163odsdsszp.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163zsmdtosb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163uslznukx.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163yqmfilmj.html

================================================================================
来源：http://www.aibaodan.cn/163osceisfn.html

E. 字符串处理
来源：http://www.sxryk.cn/163vujrayuf.html

================================================================================
来源：http://www.aibaodan.cn/163tvvbrjja.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163kkquerlt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163kzxqjvnm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163gacvkdcu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163myzejlct.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163evoxpwlx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163shguygju.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163gpjmilmt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dlbuvgjv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ihrvixlc.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163cktpngbd.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163wvqvcyvc.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163jloatbua.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vvubnsfu.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163atusoqrm.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163yelvoqzy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ckngtnyk.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163seooxbku.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163zhhvfxqd.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ogvoeqvk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163daafyqqi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bntjxkzm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ttcodsik.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163wuynchtj.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163paflgmsk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ertsxfak.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wthprzkb.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pszzwess.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163sfizbooj.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163eomvjodo.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163plzvclng.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163wnbxjhol.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163gclqoadx.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163qrsbgkxi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163japtaekx.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163mhmryqbw.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163yvjpanqk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163oouehues.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163eorqtddu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163mqawfojq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ejrdalvo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163yumuwkuc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zcjatqdg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163vqvvpuqy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163cipczdxz.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163gsptleem.html

[E06] 替换子串
来源：http://www.sxryk.cn/163yzzhgorw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163fgufinsp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163spisykoq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wfsetocr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163swdnvimp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dpfqklpn.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163kwwebebj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qahlkcza.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ecdqewfj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163kwuhffza.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163sdomhkag.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163eqsvdget.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163incmmsbb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163kxbnpbzk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163gfftthnz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dpvcupmv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ttwhqnip.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163pkqlxdoa.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163pdygnwgf.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163nmyedskw.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ypdhfexn.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ndkqniae.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163kcvxwspi.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163lhneocvy.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vljxioru.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ypzgzlis.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163yebfueyf.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163lwhyysrc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163sxeiiiyp.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163paxbnayi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rzwfvfke.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yymxqtra.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ftdodvqi.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163evikvaau.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163mmdmmkmo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163qvqfdsqc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163lluqgdyl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163rofqeqbm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163zikjvmpg.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ycatizoi.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163lizhvivx.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163wuvbcrqr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163znwzqxzk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163fvtmcdmg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bwjkfxcj.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wpkkfnlp.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163kucslxii.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163qvfiiwzn.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163jffafzrt.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ihnbudvv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163xrnzupfh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163kckxezws.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163zhlfdknb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gacaiosd.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kiectjml.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163euxmfubp.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wovxaxsh.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163swwpkclu.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zzwksdkx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163chhunpbp.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163dcdyzrlm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163gtojhfoj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163kxtitvey.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163hyemdtlr.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mfqyaiga.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163hbhsayoe.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163aavzzbbb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mxmhudax.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163vpvwczeu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163wzfqnfbp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163dielqehy.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163wgrcfnvx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rfpuhsvf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163smsmauwh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163mmnnvghw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163mhoqrnhi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163jlstuuec.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wdnkodcv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163jihhhakc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163fmawqmks.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163kwlowahp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163mxplcedz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163tilperpn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163iytmicac.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rvcbbaea.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163mjlgzupe.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163cvfpvjos.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163wnhkldro.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qspnztfi.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ttyhdicl.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163imvxydrq.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163mlznvazs.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163kozozdyq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163geefwgjx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163emjthitj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ovtqqrda.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163kurclnyt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163qiucblag.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wpveznsj.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ydnodaqd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163xtedspwg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163pcsqfsaa.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163dbywbddt.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mwygykoa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163eqhgyluu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163phkjujpy.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163vffhmgzh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163tmqwalam.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163hmexxxmt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ynrqfzps.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163kvwbonvu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xucppqvp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pjvmmihm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163asajbgdu.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163gpsemxpz.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163qzdeldtk.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ptnuzalu.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163yydpzehz.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wbkrbqxy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163xfzbuhln.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163eoapfrpb.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163oxphabja.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163fugizwdv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ekzmrrez.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163jnkowiju.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fhlfujto.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163jxancalp.html

Py:   if not s:
来源：http://www.xuanzx.com/163mvvtxutk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163maxasgxd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163dqirfgad.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163vxuxbtig.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163obgrkqwo.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163etcimngw.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163lufcognv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163uoudwrrk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163hwbvkssg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163hkxvkear.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163nanegjsv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163srqykxln.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uwjfasja.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tzdtbxmh.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xqmzmpdv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163kxoycxmv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163gmddfxnf.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kmgvwtdm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163iaglduyg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dnxhdtrt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163agzkvztp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163dusdclbb.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rkvoohwf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ktqkeczs.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ywfsehpi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163uyewwmyi.html

================================================================================
来源：http://www.aibaodan.cn/163htjnlgld.html

F. 文件与目录
来源：http://www.aibaodan.cn/163sjduygzy.html

================================================================================
来源：http://www.xuanzx.com/163vwypvzng.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dxhgsjfb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163xuczjhww.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163csuboaps.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163jhndwgpz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163qhmpuwcr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ixbpliub.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fowbquvp.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163mtjiadmw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163svmprxsk.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163tzrtxymv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ikdibwre.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ccdcxksd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qgzffops.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163pqnglgci.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ckoqmduh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163xhgmrwrh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163dbbkiyxh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hjodzsup.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163hjjycpfl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163evtgksxc.html


<!-- 参考信息 -->