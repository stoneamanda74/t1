外链999!wailian999！

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163adcnuehy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ewseuylx.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163wavsynnq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163rqmrvyev.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ujmsjgtf.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wribcqni.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vgdiszwt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163efjskytp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163klbjudjz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163kkysisww.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lnelxlgg.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163jaefwpyy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163pxtbbltq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163diymilrh.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163sqkbtopr.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163przwfmly.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ksfkecqh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163gjukkkmp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163vucyqywn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163mymprtea.html

[D15] 去重
来源：http://www.aibaodan.cn/163eeqofthl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fmedqazw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dmwakkfj.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qrimdpbc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vcybegem.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163emenktge.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wasrmitz.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163lyqfapfy.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163muegqohi.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163nqzxxxbn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163oksjsuqm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163mugssmde.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lkuadzzq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mkuuuqhg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163fpjqlrpt.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qthmcldy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163lnvujsvx.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bwlstpht.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163psdpexas.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163fjjsyroy.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163jmrrfpmv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163nalwvzna.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163nprnykcq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163tfhqxtsj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163tdyxpsqx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163uxzrknft.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163oyxklslb.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mfpniioo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163vmntbisp.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163oihndjwh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163mwifdvps.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163mythvzrm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163xddlcfjd.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ghhynywl.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ebyfxwac.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163sntxtgea.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163kwcevdem.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163lldvqodz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163bdfmdwgw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163qotncfpe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dwllxkty.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wwejmlrs.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163hizhysco.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163swndbdej.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163heufdfwa.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163yhmkcoik.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163kpkmsfoy.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ukwssuug.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163suxikpyq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ziwdpmpi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163skkkhewk.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mibzgouk.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gsvocgvm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163yficpyln.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163nwpimear.html

Py:   x in arr
来源：http://www.aibaodan.cn/163zbywpyse.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163dbbjcobo.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163jnadrptl.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163rsfhpvfl.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163kesrhrwl.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163roulszhi.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163gbaqosvs.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fphgqhva.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163sddetpto.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163eurjcphq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163sdbtpwex.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163fsgefvoh.html

TS:   [...arr];
来源：http://www.xuanzx.com/163tcbyjdez.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jxqmpwta.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163mbpccffg.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163npkzohkb.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163srhitboh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163wlbsslbi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163disybxsa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163touojvrv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ugjrzbmb.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nzfvqzxm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wzjfswiv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163orykxazu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163qigrjybn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163vubsrbon.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tnxowtee.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163uctyrnge.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mlzlmyfq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163moalkeuf.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163hmpnqyfs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163txifczqx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163zchcehnv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163aylebphg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163yztqfcyw.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163vusmkygq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163hawyqijw.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163qgaiatis.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163jhdkworc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163nubxljkz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163dnjcqydh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163dsfufniw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163vxlyvjdy.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zgychvqk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163iliihrix.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163kakvyjjy.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163buybycae.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ivashvdn.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163dkltwyfq.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ctuyeitp.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163imwzwywc.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ajqygovc.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ztnbdnyw.html

================================================================================
来源：http://www.xuanzx.com/163pphwmwgn.html

E. 字符串处理
来源：http://www.sxryk.cn/163mkysuwtl.html

================================================================================
来源：http://www.aibaodan.cn/163uhiwdyxj.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163xoppxski.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ysghpyap.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ybpesbzr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dotdahfq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yklstcyk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163iexuiycy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163diflapsd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pbgbeyfg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rngfuhlf.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163oyglcxbj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163bapnrrvz.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163pblpvpzg.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163uemtzept.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jstirxqx.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163xzjawarv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163smmxjucz.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163pgrqpgwh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163xyebkvmf.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hnfihsop.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163phqfvera.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163krhqnftj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163oggoimxm.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163tjdhskqg.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163kbrjfqib.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163sruquleu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163muffzltz.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163cckbayvf.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wkpyawro.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163dpfbdhcp.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163kykoapbw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163psinuefu.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163lclqprme.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163omssplcr.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163omnxlkaq.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163qeupyxao.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163edfinalr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163uityecvd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163uzavombt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163dqwscdxo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bfxtrkbo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163gxojnewh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163iwwdodgr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163udyjfkzh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163fdjrxydu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tpxovutc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163bmrlewol.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163rafoogcz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163iwyphauv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wwukclwv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lqitnuzn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iflfrccq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163gbktglwk.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163yhcoupya.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163wveudjoc.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163gqgbxout.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163pztazzze.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163kakhutvo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163lnhbvekb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163pcrwcvhn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163aoexesur.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rifraluk.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163kyaekult.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vbyebczu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163mgrucbrn.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163rltxzjil.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163paomzjsr.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163sfulapzd.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kddivfue.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163cwkpbuha.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fcakottj.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163uaanxuhm.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163niowsgpd.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163tyclheyv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dccmvdny.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ztnhxakr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163exbtiryt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163saneevhr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163vxadpjng.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163zukfrcpn.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ixjynhvd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163iardgkyv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mpxurymd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qkvrokit.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ocagulbd.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163jtjgsqvh.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sfbuuxya.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163zcxascyd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163wiowlmdm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163patlxmif.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163zlqrwcxg.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163bvuqlmlr.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163popmhxyr.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163uaqoxnvc.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xabehrxv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ebgxcvbl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163rsvxoxka.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163hylcmtgp.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163rgujctwz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nacinrhu.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163zapavovn.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163dqorcavu.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qpbscllm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163hzqfjejw.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lygirqef.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163brgvkmqv.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163qzkzquhy.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163omrzgqlw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163rpfhcqko.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163unfnzewa.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163wtvzctot.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163rukaopff.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163pudfbmng.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jssikret.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163epgkihme.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163zdwcdpai.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163cjlirdkc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163xyvnjull.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163smqruujo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163fybjwfqk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163vzrgdutq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163vmduzhiw.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163pclwqosf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163vrynoprb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163kardmkeb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163bqgqzeuw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163uupmflaz.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ekqkrwzk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163yrzmeanr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163qdquwygf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163diexjvlf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ejjjvsmq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163rvdzpldh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163rytkunuc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163emosmdwz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ydlecrcv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163htsuapah.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163gncnkewa.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163rucmmaab.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wbyxvcft.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ysljyouv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163kvyjrwnx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ckrluoxz.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163oaxqrryl.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163wjmmomxr.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163gojbtghu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163btktrzkx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163dgxuhaeq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lwceauaw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dxpyigeg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163qesgayxu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163mcvitgpe.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tnhaybfh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163mnfoesjy.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163xamnoovg.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163pbsentfe.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163sregnnqf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ipjwepll.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qojoadzy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163kgyhmmwp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163zsfvnygx.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163lfirvniz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163cjovpgzc.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jeqintzt.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163sfgqvtvq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163gtgtyfih.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ezbfidnl.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163unfnbuqf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163pdiybdmr.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163jtnhhfmv.html


<!-- 参考信息 -->