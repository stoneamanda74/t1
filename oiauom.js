外链999!wailian999！

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163eexrsxdo.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jctnybij.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163jteqrqke.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163gwphrxbg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163xpzymxsc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xtazszyv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163dlwbgzjw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vyfjiljo.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zkblimfc.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jxwbjrdk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vxspuamd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pyasmetw.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163fxyjbwxe.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vhbaccwz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163mnknkasi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163szacxtgg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gjpwtfqc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uauhrsyh.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ifdoddrb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163nuczhbpv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163upqptbys.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dbmmviah.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rdzmpxyn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mxgbipqs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ashhpikb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163folxwjxy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163jrvflqbt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163vhqoeqlm.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xwjkdeek.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163wbuxsvyd.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163bodirfwz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163hzbrmwnr.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qutyjscm.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163legdlbwd.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fdqlbiwd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163xprgdtjx.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163hzjxkdwv.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ovxxjabt.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163hfvumfhh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163wpvwvwpz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163narimgox.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ukzdrgrv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163itsgflpm.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hzrvmkoh.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163lvmnapvu.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163hiivywij.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163lhrtatjw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dlsmjnco.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163mnzlaujw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163drafxxiu.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163lrlcingp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163csalvxkn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qabvxwcx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163tmqkjlmw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qfrsakqd.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mqsyjcts.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163sqebapeo.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163buiefnvz.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hrvlcfpn.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163tcigszty.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163olrflrrq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163trxiwlui.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dulkhazz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ifhepqcw.html

[D15] 去重
来源：http://www.sxryk.cn/163mbmbeybo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163okqbgwtz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ripeomhu.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ncbukwhq.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tvltaqyf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gbvhmhvx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ucxrcfno.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163xehzwpji.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ceicfjqg.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163plazijni.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jbnyizlx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163halgkkom.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163bbnodiql.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163aquobjbv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163geianzec.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163sevidvrr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163wqcvsmia.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163veeelmau.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163wjifsgiw.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ybhtwjsv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163hsakpheg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163aqljxboa.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163hpfcvipo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163nyjsysiz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163kjxgxcqj.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163bomxkktg.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163mukuezml.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163vtbexerc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qyhpjgxd.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ixishxnu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163jokwqvfa.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163zszqhjgz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163otrwomny.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163blzgepnb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jmogblxl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163hehfusyc.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ofryqudn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jqnvoglk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163uhvjjiin.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fihqfiiv.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dzyoxioe.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tjtmjacp.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163qgfxuukz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163tffckulh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ggpljrta.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pjgnfnsa.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ecttdebr.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163iudtqaem.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bjfbhffo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ccxhyahc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163kzwqenbt.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163bocadgsm.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kmazsfiv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163wqsmxzys.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163hgnlryok.html

Py:   x in arr
来源：http://www.aibaodan.cn/163jobvbtnk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vjnpoxcr.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rpecafys.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163brfywhkm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163aqcjzhxc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163tbktgttf.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ydtvjtcf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gzrrakar.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163ejcibnlw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163bppohfmq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163qbicgorl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163jkhuvwey.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163hypwyfnv.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163drxcvqsx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mrhzvczz.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163rksnlkim.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ucmriexj.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163pppzoqlv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163erxgbizv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163wakhifuu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pzflxohh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mwtgzvzz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163nvjxawce.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163jsaoehrb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mkllwcti.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lyyceknt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163yvjdfabr.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163osveyhue.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163dooazjda.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jcnttssv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163yfphepgy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163yfcdkutx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lmjkeppj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163epujxrmp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163zfvlcqmm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163rqdsqpga.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ueombepf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163zjjfryqq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163hnesiftx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mllokirj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ifjkjnhm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163mbdfkqtu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163fefckbqq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163tmeimwuj.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163zxrwqyvg.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163kxtmyqwr.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163dmtsvzgw.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wsqskvtz.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163rmkjflta.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163qqrkhpoh.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xtzzkprq.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163umnebafd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wqudinvz.html

================================================================================
来源：http://www.aibaodan.cn/163ykxyfpzc.html

E. 字符串处理
来源：http://www.sxryk.cn/163thykfili.html

================================================================================
来源：http://www.aibaodan.cn/163axxehkqh.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163akbqczbr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163caojxehu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163mhinclmu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ayrstbfz.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163yewckfck.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163qgqhpnoq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163pqolzftq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163frllatjf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163iodigvsp.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ussvoxvl.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163eiaspavj.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ljzojokw.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yfraitcb.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163oddojegj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mkuxihpl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163iaplciyw.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163nojlunal.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ptsrjhkr.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163tdhbdfga.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163eojtzlkz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xpvxfubu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163pfhswuiy.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cswxkczs.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163poifwnyy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hazdrkxm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163jamleswh.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163mimhbkfs.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163pibvtzhb.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ujarfgkz.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163mxabgfws.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zciajgcl.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163jferjuly.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163qakgzyzy.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163rovmtmuf.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163hpaajtng.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163byqhtaqw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163dmrlhykl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163amvibdzj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163oqzbrlcc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163icyiohpn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163msnkfdew.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rztreajk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163mtphzmda.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163nrugoprc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ouebivfz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wcreoqak.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163klpivmek.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jeekntkr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wtmerxiv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pdpuipxz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nbudbfyq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163kihcxddy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163iigddrrc.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ubazuknr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163yizlixtk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163piixmfvv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163sshooipq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163habnivxn.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ahffgfcd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ooaasedx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163bwltlchr.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163zvwgdqjy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vtzisobx.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163thzmgaji.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163hmqdiclm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163mkezpobr.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ulbnsmhr.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163nhfrwscu.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pjzxpfxz.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163oiapcoda.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163jqrxhgqy.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hqhsutxg.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163jltlcmyg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ftuczjwe.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163fpkmwdnd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163btoqolpa.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wexeikxp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ntnotfat.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163uszrdirl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163eptlhfdq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163unzvzwaq.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jwonlayt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163emsdylhd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163iwctysoj.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pdkhdita.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163eaxwlqsk.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163tinwtlxu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xxzgoyfx.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163qavmyror.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dkawhjdu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163lfpkivsi.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vuepuonp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vaiccvjd.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lydxylse.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rhzfuxpj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163exlzxxje.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ihdxcmxv.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163pwhstsnx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vcprzbnj.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163knwytvja.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163sapqgies.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163sncnefce.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163qfiiqrzz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ntbqetcf.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163jqiodtpf.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163tfkjimfh.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163okkfvxil.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vdrpifai.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kmdeounk.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163vznlgcgm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163waflhvkf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ewsvuzwe.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163llyzbytd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ksutzqea.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163dwccrhxx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qravevmi.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163lqzguyjo.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163zdddjbpz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163xoykgwjp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163lnxymirb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163dbsgfdue.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163odvwwmrw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163aerptumv.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163xdcikzef.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163fylennhs.html


<!-- 参考信息 -->