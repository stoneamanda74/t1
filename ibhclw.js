外链999!wailian999！

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gmwjtnfs.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163krbmguim.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zywdgufe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wpygpivn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163hyvninjc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tcecxyui.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zqtengle.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163gqxaxgrh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163qceleauy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163kohkbfmh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163cvokhzlz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163kotqjgyj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163rjfgbylq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163txueqeno.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rrateema.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nuszjyaf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ruytclng.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yhftkwwy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163voqcuqzm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163qxzbwuaq.html

[D15] 去重
来源：http://www.sxryk.cn/163lrpofyry.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163oedcybhh.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163fndagfvg.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163spmyoxzd.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ufxheovy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bhoyjibw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163pwbjpfhc.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163grauqimd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bsfnbpxf.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rsdlzxxd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163eybxgscw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163hdcrgvei.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lyeitrag.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163izlgqwxh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163bvwnuskh.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163xbmdlrbb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163tpqmdram.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163lfslptso.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tgijqgzx.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163iudaqngq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163prnrdoie.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163avtuwkmi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163iqijivrc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163decrndjp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jbxaufux.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ayupmogy.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163hzjawlal.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163pflppzbd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163krbglrxt.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kwvmzqgn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163aggzweqh.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163vspxwvgb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163taycshux.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163uopvscfx.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163rarxxcsx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bwkqzvia.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gbgqpayz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163mqejgpth.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hdnsozae.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163oighkeva.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ldklnyws.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163kiufvejg.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163jabktksp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163wclaripm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163hvmrqoye.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163lbdacdau.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rhqamufg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tuyredhk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qcaqudww.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tlgyzyfp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163pgpkvirp.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uujcbsje.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163yxhkjsvy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163mxzephaz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163nejefhcl.html

Py:   x in arr
来源：http://www.sxryk.cn/163fyjukfqi.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ysnqsvnb.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163rbqtjdoh.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163gxbmvgmd.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ewupyurr.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163tbieyfnt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163hmwjbquc.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163xsxedabb.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163krkcvpjf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163smdfojeq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163cnrgmjwe.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163nylngwor.html

TS:   [...arr];
来源：http://www.xuanzx.com/163clawaedm.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wriuroct.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163odoyrehf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rxavjlii.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163zdajzitb.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163rqwcqocx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lzbedwpx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163tmiocpfs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nxgzyqht.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163nygudauy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163sbfrawlw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163guwxkmwb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ctifgpeu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163goreoqgu.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163qrafmvas.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163nqlyyjxg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163bvfkiafw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163dkuvmvhm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163uqviznoi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163cwmgcthq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163ugghomev.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163jhaqtkga.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163qviazmfp.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163tpllbiqn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163lqgglluh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163cjffaktj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163dphlefmc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ocabvwyp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163qyocrhrg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163fdxsfdtg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163fvmivhue.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163iwkrqtzx.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163pzogjxjc.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163srnrhwjg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ushyztsc.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163eadzhzll.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ubavynkj.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163lcmnsvqz.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163amkwyxup.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163fqkqwdop.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163sxxaaunf.html

================================================================================
来源：http://www.xuanzx.com/163tfyqkytz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163fxfkyybx.html

================================================================================
来源：http://www.aibaodan.cn/163ebppryll.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163gjjrqijz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kggxbcfs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163pfmhbydb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163jnntnowx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qypxhhsa.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163mrvltaau.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163imenrmfz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163lxtebmym.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ieytrzqt.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163qfbsrspk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163lauuhsdj.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163iuatcpoj.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163twmihbol.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dpmkgpoq.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163rxzrlgsa.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163lgzziyrx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163vjqmtvtn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163kypqvakz.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163sndvupgm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163eaozhhhz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ilzxexeu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nmplcdjy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ssfnglvu.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163bmcshyiq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163zfyfuzdn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nikjehpu.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163nsrsoifo.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163gjxrlsqb.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163wmzlntbm.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xgabcmij.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163aeaetyok.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163oqrcufqi.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163wzdpaajh.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163kqjojrhm.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jqqoklps.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ncadzbjo.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163dmemtylm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ksxrpopo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163pwgfqezk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163naskycbx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163lrxjfqey.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nsflpkak.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163hzzkkivl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163okmbgpzj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gpdapdvy.html

[E06] 替换子串
来源：http://www.xuanzx.com/163tnaeqnfm.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163hyxqxnox.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wsmqwtil.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lvupjmkc.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163clkkbzgp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zxcbbsaq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163iqgldrgp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163kpmvpswh.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163vmmmsbvh.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163tfnvkvgx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163mmfavqlf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163zdavkiib.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163cicirjmx.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163svdfmfgd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163sqywnwsn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163dmpjvroi.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xddlodbh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163lxsktnoj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163htwcgndz.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163eohoglvd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163yecigren.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163zeblsjes.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163guwshqyp.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163isfdjzjy.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163rnjkyeun.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ljazeqwp.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163iqnfrceq.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163wivqhsft.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163afjdkrmx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163zduaghbs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vyaojbwf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163chvzwyzd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163fqnndfbn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fnewtrzo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ucitfsxa.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ziskacik.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ddfijvxk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163djsuxifq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ieqojeob.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hdrzoiac.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uqzjjaie.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gcfjhkig.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163teejoonw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163tugvrxbq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163jmgjgwvw.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163wfipxbjl.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163qhldhqvy.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163xdnpfvgi.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163teugmzau.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qmrjiyag.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163thtsjrvs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163nkxwkzqo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ewohxvus.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163trpqmqmm.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rcavpykc.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163wtvnqsdi.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163bgmxdtoy.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163prcfgvbv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ydzabcna.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163vhykyjdn.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163bwcekkau.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163felxbonb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qdxoetuv.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ltpyhscl.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rvfzrpdb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163szpkllof.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xqewynfl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163tafouzum.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163fvhcmhqe.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163eixdwcjj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163cqxtyrmr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163flmuaosf.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163oceuskkr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163pgcykitj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163mcyayelx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163vngnsnxn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ozgitoem.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163pumbfqfy.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163qtlkqfec.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163qdivmrga.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163shytdcjs.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ynvhxmzh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163udzcahlz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163puvqatzw.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163larkmrvb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163stoikbfh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163rkznhgbs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fphonufu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163wgeigwuj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163wbqgytuv.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ramijmjp.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163daidwizx.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bpcjwrki.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163pnawneml.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163juncvnky.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163qysgodxm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163heyllbku.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163msdqpsdj.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kdtnaxms.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163dvxmklrt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163tfnjamqg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163jvhnhgkn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kfvvoidb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163iwjufgyy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163cjgfldvd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163kbadzoiy.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dsueyfmh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163qfgxyxco.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163amdajlrv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jfwwdfzd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163tvgvuitl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163knagdxkl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cvjzlsrr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163qafdltdo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163tbblzkrm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163eirpwtop.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163yfhnxvyi.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163pilpfkqv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wlswjale.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163qaphqmgq.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ybzyuwlu.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163geywatyu.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wsuefhjl.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163eehozvie.html


<!-- 参考信息 -->