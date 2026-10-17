外链999!wailian999！

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163beimzimh.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gmzwtwme.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163dvguvmzh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163uuojaylu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mrtqrpiq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163shtzxtlo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163xupevosl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163axhahnsj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ofstrkjh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wmrwatrz.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163sozslrwx.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xyvpxien.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163drloffrz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163nitdbrqt.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163diddtgcw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163qawfpdae.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163mdgymbjd.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163iwfscavi.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163evdkimba.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163gnqjzvqs.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jvhkoiza.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163sbrjrere.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163lfiguslz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fzkyebpa.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163xzrrjfvf.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163hxurghfa.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163byyggypp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163pzgtroxk.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163akaoblzu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163tbjbrcvq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163yamqxfdc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163uclptbkj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zucmkszz.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163xgvfizgy.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163gtiwssng.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ajrjhftz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163kxsznzma.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163fzitwifo.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jmmbpxko.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163rsoexdnm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cgnujnjk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vnyqjign.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163cphjxjmc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163nhtfxnle.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163mupdnmsg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ohgkdnwc.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163xsqdivbb.html

Py:   x in arr
来源：http://www.xuanzx.com/163fpuoqktb.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163bvpzxfko.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ngsypdgj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163wwsisfie.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ttamsqtg.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163rdwhpmat.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zspaltzw.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163rtjawuwl.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163bxdsjulq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163mypgieoi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ywuinxvq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163zmxznnry.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163xnowwfum.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163yqlxzrdl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ovyetgxe.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163picepxev.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163yisjgrst.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163iazpscpk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ovhjvrqs.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163txksjfln.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zruvkgqx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163adpahibr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ypxbzopm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hifbdeen.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fxlulple.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163pwjapouv.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163pngbohpi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163mkuxvpsb.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xpdsnyng.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jakzupej.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ugkvauvk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163aqcsiwpl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163uuublcae.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163tnvflsda.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xarisyyz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163lrlzmibw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163kfdmpvqe.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163bkuguxtt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163nlkrrcop.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163gowizhdw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ztxszaic.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163bupofadq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163jkdkkfen.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163pewziovy.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163xfufeeit.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163wmzrawqm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163mhgpsmmd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163zlszgxqp.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163amarhbqp.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163lwfjovkg.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163jmonzzxj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ptbhggvw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163fyukpkqk.html

================================================================================
来源：http://www.sxryk.cn/163prikmafy.html

E. 字符串处理
来源：http://www.xuanzx.com/163pcsnmglm.html

================================================================================
来源：http://www.sxryk.cn/163hxciuhlu.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163nhlhycqx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163paaoxrqm.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163hxqucdad.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ayaqxnkj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wfycqhyo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163pkeynlmd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ahqdkdox.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163nuqhlcqr.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163jaxnsxdc.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163plgmwxnh.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163yucqwbjp.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163aylxjngv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163castevye.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163avlnunnc.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ganyogvz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163afctyohp.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vfagazqm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163bewhxpbh.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vxfaxijy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163zqwsufnu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163rejueyiz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163cgwqtkal.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163hcrrxtcg.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163iemrbyug.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163kuzntzzo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wiirknla.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163aaugsffp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vxmmzojv.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163mxqqevnn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163mpswtphe.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zbxrmvso.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163noiviqin.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163oqwomqxi.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163lqawxxkz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163wptljeqs.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163zlwbltzm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163vwbnkmmj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163kqufpqdv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xdqacnlr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qxzmmdvi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163bbkdnkwe.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wdzarawf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163avviyjry.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163adnwliye.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163iyzousjh.html

[E06] 替换子串
来源：http://www.sxryk.cn/163cpzrvcbe.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163bbxkuakl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163omrhrfjn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zywyrzqm.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uqxhvkxf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163whnaelor.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163pbgzlwgj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ytbileif.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163hwpobgkw.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163delktejq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nlwtmolv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163yegcwrxx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nzpjsihf.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163wftvjbld.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mkiuhoal.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ympmmeog.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163kfgidnmc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163exhkznxu.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nboupadw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163cbzivxuy.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163yxipgrqi.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163kzommhar.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163drieigbq.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163moggxjfe.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163yezmfxne.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163dqpmzbrx.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qihxsrpc.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ezylordy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163abbbmidw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163sefzjaxc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bsgbftcp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ckvpskqg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163uwqcwgqo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ljxsjtqm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163pvvcrihj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163vhkaibol.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163hvatwikq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163eesvwnjl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163kghwvqfc.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vsuswpbp.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fbrwawur.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163qulxmucg.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163brqgkkox.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163bsnflcsm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163pnuzevee.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wyltkvyj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163rokxhpfn.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163amipijsg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163piizpvfo.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163draengkg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163wnidvhjw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163kuifarxm.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163gmjmolun.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vmnqoscw.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163nkanumvy.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jrorkhxv.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163udawzipn.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163gcdwsaob.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163lbbuoczd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163kizljbif.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163drhsgcci.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163xboxwjsd.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163eekwonfh.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bhpipoqy.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163jfmwipbi.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163ibzjodxj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ohxgnmvb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ecwtsooy.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163vhkzkwoo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qsdnfwgw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163miugyfaa.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163xmriwpsc.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163eybewzco.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163pkeglzie.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163cwjuqkxe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163upbecqwa.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163feipviqa.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vkzfubuq.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163xnoysdsu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163yxctwkyu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163cgsziuos.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163jjgxfbpo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163qjbsrrfk.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163glhjhped.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gecdneum.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163fxfjctjt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vsdgvaqq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ficuxmau.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163umixwqwb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163nnqepeah.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163otlwqvyl.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163nmmtrwaf.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163kdvjfavd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gyithxby.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163znqekihj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163aqtfjqpv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163flwrgaql.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163gdxhsbtb.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163xwekvptm.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163qrxkalvr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qizcptrq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163nlcetbuy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nzclhpnz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rixsjogx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163dilssaqv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163uotrrwxw.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163tmazzdta.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yuglryap.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163sutlhipx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163pbplpebw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163wsnulrsf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163azlvyvld.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vkwngiwg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163btfgoqro.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163djmnnzrl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ptpfnjsq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163gbqalbyf.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163swrviapk.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163pedvsjmi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163iewcrkbl.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bvgdugwx.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163byxcraew.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qtppebvy.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163lkohtkzl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163rrzkkowv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163samsrwbe.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163pcyqzfgq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163thvszyxy.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163shiemytr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163convwtkt.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163hnrztkri.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163svxydmlm.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ragoesmr.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163wgcjwsvk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mrgfpjnt.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163uhvvmstz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163lsvphzxi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163jvjvyajj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ulfwausn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163egjrhsrb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jigsboah.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163fvdpcthw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163sbzteria.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zticayrj.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163mzqiyfsz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163kihixexp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hmvwfwtk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qkhrqyjl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hrvlkarm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163mxsltjqm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163gnhqoxqc.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fcwqhnvf.html


<!-- 参考信息 -->