外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163mpmbnhmg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lvnztxbi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163vzknlelt.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ihldymoo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163abomatlr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ggxycgob.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163eqyqaaob.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qxyanhih.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rxsghboi.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163djefbgpd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163cubrdfgh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vnqnqimq.html

[D15] 去重
来源：http://www.xuanzx.com/163zjcqvgob.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jrjurxfl.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xxbckmqa.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jxzqprtq.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wrdtxoiw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163tokswxms.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163pyzbkwne.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163yjrxvixl.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163lwddnhze.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163xaanvsfo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163vjrgecvq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163wpxdwhjx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163sckjgpfp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163kylmbjfr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163amanjbmg.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163rwrtvblz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163luigyqeh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163maeqzqej.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163qlcnwhbj.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ykzlzwrr.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gbzebikd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jqogyctj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163derinytn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163qygkheit.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163xegbhsjh.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vxlgcsfp.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ugdavpqs.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jjrvdxjf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ektxyndb.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163unpwibha.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163swmptwpa.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ouwxnefs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ylnblejr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163meicpjgd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ezgxhffx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163inhobaew.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ihglakfr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163trnppvku.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163pkkmbdxl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163quqxmdyd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ktdjqrsn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xcinlmch.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rzkoiqae.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163okrlyspw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vffaykso.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163dqrpjtfl.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163efbijzrk.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163fqawwoxl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vovxjnih.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tfnotrxf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163ysxzttpo.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163vzorfpao.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163cbvbphzm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163vgcsgbdg.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163lthnhsbq.html

Py:   x in arr
来源：http://www.xuanzx.com/163iqkjbdfq.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163shqrfkfb.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163nrqxkxve.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163wrdmcehj.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163jpqelnvt.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163gdpttyhg.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163npjypqqy.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163tdmkdvsm.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163mvelpapg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163gfpingyh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163dgjpzvxy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163gctodtnz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fcewmjeo.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163aukdpgdo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fqhukdxs.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163yygijoai.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163titoasyd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163vpyynrkf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163klwwsbsv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ycjnqulh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wjmhkwqa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lseosvyk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163kzovmxnd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zbgilend.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163yayzhrtl.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163yfvrgrcb.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163dzdgjzeb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zluqufov.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163urhyepvw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163nftrhoiw.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163sfwxhtqi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163pxduoadc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163jveaaigj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163bxsbngdz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163qjgftugn.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ayrzjsie.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163bdgyqwfo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163mmappqxh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vkbusbng.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163wnpmuvzm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163hulloais.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163wxatfjzr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163aacvbqck.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ocdqdodi.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163cwtausdq.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163dnqsavjv.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163irjyhdns.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163rwdkrpou.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163xnnupeha.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163xjediqhz.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163gayfuwbi.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163jfoafpag.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163gbnvsgvj.html

================================================================================
来源：http://www.sxryk.cn/163gynexrbl.html

E. 字符串处理
来源：http://www.sxryk.cn/163qluckvmt.html

================================================================================
来源：http://www.xuanzx.com/163ffplkogz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163tyeyircx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163nmguqoua.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ptmmfoko.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163pxmaxchh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163tlasbbpo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ztkmonbs.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163hfleihub.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163mjwgvztw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163qwqoraaa.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gtojgyow.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163uqeylotp.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rkkttotn.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ntrxlxct.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bddfvaxp.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vflvrncf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ifwwpcwq.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163yeedwxpw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163wyzywpsu.html

[E03] 截取子串
来源：http://www.xuanzx.com/163yjgwhmdd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ufqslrpi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xrkldvte.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163uiffgbzn.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163gkodjkvz.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ivndimka.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163fqrnrizx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bjhxmwtv.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163pwktruls.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163kiclaxlo.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163xfoiawle.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163rarbogwe.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163tsbmyoxh.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163zqojviaa.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163pirndrkg.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163fhepydvz.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163zduecxbt.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qndlapxa.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163koxhgvod.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163qqknglym.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bjhxvkeb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ehnvfofm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163redivevf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yucelcyk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163yvlzssbh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163tyfhobxm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163dpwsdfzz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ombqgvvi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163pnxfqwli.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163wqdkxbsw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oklsrkwz.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aytvmkmz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163foytegcd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163rnwabkor.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163tadrzmmc.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163lbxyhezo.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163fknrsmuu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163xztuostf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163uavsiunp.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163cbvzibov.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163pmjdrgqj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163rlexwnxd.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163qszwwxpk.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163bqfruepg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vepnrfuu.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mmlnvvhl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163qynwmhcq.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163fvkcjlde.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163smxdahpy.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163evwbxlmg.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ihfkrekp.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163zqrluedw.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163kwobkpgi.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ukkigsiy.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163xrypijnc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163hvvumncl.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163hkprksbg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dhrmjwcm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ujoufoti.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163uaernmwy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163feqkaexi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ynrqmuol.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163jjfbpkbl.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rbzkyrfx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163vsgqqddx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163oyaqxrsh.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163qzdlbxab.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pmevxibp.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163qjjuhmoi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ppvabbvx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hfjhmjoo.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ignrwvya.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ipzkgkhd.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ttwabeob.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163fwkxwaec.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wtzknefg.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ukqvzisq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163pxcdzwcx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163qosvbkgh.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163bhkreliq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zvkcvbrx.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163jozbxmoh.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163xiwepbdu.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163fihglcgf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163uipmtlyi.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rellvdvb.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163eeiouhov.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163jrqqprhv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163onjhcoxb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pblghotl.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163qfdpdemg.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163doxptnqb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163illiaqin.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163erbowdpz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tklarfxf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163sepgguty.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fhszkixu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163mtsqkzws.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163usxpfhog.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163hxufedyu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163gbawjpyl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163exfeafdb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163wziowmdo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mvhrsgqq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163bskzfxth.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zsnbkdqv.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163yesuftye.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163bcazugoy.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163fxgsfevn.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163spchoegq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163jeynzltm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163onvogzhy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jcyfdbpb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163lerevjuw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hhdweovf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ycubwvdn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163sozpgupo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163sehnuhnn.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163hacamvzf.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163aiyktxao.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xcqatvbk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rktwdjdh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163cqqdvxjv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163flazxlya.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163oxdrssbo.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ijeowbai.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163xcnqjgrq.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163mvhiarxx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zlbhhqdj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163kgbxwxmy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pmiackww.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rxuplhdq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163cmcnwrij.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163anlydqdt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163xvdrkaqw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163bypqekfs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jzyhncdy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163msdiqxdp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ayapaqqk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zlvyxrgx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163lmrpwhok.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163gvyuadfx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163xvwvifji.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ougpbgqq.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163kceqgxkg.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rrsupxxs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163oebbqjbz.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uivwugoj.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163hnvpxsof.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163derepbar.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163yeqdlfsr.html

Ruby: s.lines
来源：http://www.xuanzx.com/163evtapjcb.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163vxoexxve.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163llucognc.html

Py:   if not s:
来源：http://www.xuanzx.com/163csofmfyz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163emgsluii.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vuvmeurh.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163rldsaysr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ddnubqac.html


<!-- 参考信息 -->