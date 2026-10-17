外链999!wailian999！

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163uypblljd.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163knxslchh.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163eagtgbpd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163rporptob.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163uqaeavkq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163lpplltjy.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163hfmulwfp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163klxmtjue.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163hofuppqz.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gloyixjn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163yksqyfdq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ycinkobh.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163kgbflrga.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jewbldrl.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ayhuumle.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dkflzvon.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163udcfwygr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163binegxbk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163gnwywmit.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163fzfipptl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ipndireq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bsstegqm.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163lzxzgbzm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163hlhztmjr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163bhejasbc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163srbyhjqv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163obbfkvaq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fwcysmcp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163hsuwiwgd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fuzscbbt.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163oaqpqvap.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163fglssvai.html

[D11] 反转数组
来源：http://www.xuanzx.com/163djjwipqe.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163qafztjle.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gxmpfutp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163hzjlantz.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kiagqlbz.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163wmxtzwwa.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163uepyhwpe.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163elcqrddk.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163uvkrhczm.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163uiyobyqu.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163qetvzchj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wmemuxgc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163scrgdzda.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163flsvbeyh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163jnyiwpnc.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163jelvrgip.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pzwruuxl.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163xfafryjj.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163phpnfvxh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wxvtwxzk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kuxrvkgo.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163vlikawud.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yzolfmuk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163fgtqexst.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163izbmmkva.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163oeynfvtb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xercupnu.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163kxpnajah.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163bdrhxvgw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163czoprysd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jlewfjnj.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163msoeromu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ffiadkgw.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163shyimqpc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163uioeniry.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163gpushbge.html

[D15] 去重
来源：http://www.sxryk.cn/163wjgjixso.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vxnzablw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nlheodha.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pegcjrze.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mscwyibe.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ljztljub.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qjlooglj.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163kvwygwwz.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163vuujxdav.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163hlxshggj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163mbxmvqyu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fatblrsg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hrlnnjdu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163eeeyhiaf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163hatkhopj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tthatozr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ggazbdrw.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163hhljvsdi.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163yglwzzlh.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163gjfvpgvk.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163yjeaucln.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ceirhuxm.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163dsjhvuhh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163biawbira.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163jmsbbvub.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163mgvtmprc.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163nmktdyvp.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163pclsbhci.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163efslmkcy.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163cdclxybu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qtvrbkcr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163thgbnpda.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vurrphsw.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ctcyhygb.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163xescjmpa.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163tgpyptxc.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163kpsfefoj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ermcxgtt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163pjvyvpto.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163hthfcdlj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jkywmxqf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hsxpgkqq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163onpnsjwl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163wityessk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mwcyymth.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163neknahrt.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dmrdkvym.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163erjnxjxt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163kfeglvcf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jmjjghlw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163jttwsnyc.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xmlvotte.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163maqjhnxg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163wavhukfw.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163vwmshgjr.html

Py:   x in arr
来源：http://www.aibaodan.cn/163fznzvudb.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ukmtwjzb.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163tzdgdjcr.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xagwaude.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163bnjqenoe.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163wweisvax.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163jzsauaqt.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163grawtyqv.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163egihmagf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jkhnrkxl.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163iczwxyyk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163nhmwhisg.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ekwghihj.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163umayhvmp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ixkfifxe.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163vexcwcbn.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163wmsvvmkx.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163foxqosqo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yaaapjdj.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bzardggk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cnjvporx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ibwhudja.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163niqdktzs.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163sjnbspwn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163needaoki.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163tptejesi.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163etkzxjuh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163vqypdjje.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163cgfpmrzd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163oprbiztl.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qrsuocai.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163ggmjcumv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163miyfggum.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163wxirqtsh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163afxanbwp.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163laexnhrf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ryrdmygv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163kzfrqqly.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ffamjnml.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163bfpctqsq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163avotifro.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163drwogjjd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ijpxawqt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jvtcpvtb.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163opewhgke.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zvthwgaa.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163krkciwoe.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jeuetuak.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163dvntwggr.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163bsbhvcxl.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163udmgodqc.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163eruethfn.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163fchsxcta.html

================================================================================
来源：http://www.xuanzx.com/163tmoqeyrx.html

E. 字符串处理
来源：http://www.sxryk.cn/163rpvcebxe.html

================================================================================
来源：http://www.xuanzx.com/163ftudqeug.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163srngdizj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ogoggcsi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163zlnxwyeq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pdsuahcx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ysjuxfap.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163uijyrfxh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bbqdnssm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163kyznoyvc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xbycebqt.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163dtblivzd.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163zgfebsut.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qawfyeuz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163znjdgipd.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hbysksjo.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163xdofmhxb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ivlzckcu.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163svkmynii.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163asgfnlkp.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163bjtjfskj.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163buvfwrrm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163sezmkqhu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163tvsmrbpc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163kfwbiiri.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163trvqzmrm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163gzdrbfpq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163rpblyqju.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163rxfoduey.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hmkzalqc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ldzuegkj.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163ejfbgqkg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163fbddcuot.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163tlghabge.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163pszddwmu.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163bmwalkwt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163asgwqhbv.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xnilywzm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ebwhqokj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163lwvcpfou.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163gulbkrzd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163esotnlrc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163tpsisxdt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dcdlngtl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163mbmwesvr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163imvzcnif.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163fkuilnkc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hrqrxfdp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163nosnfdua.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ewdsrlef.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163accerixz.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qcgrmjvz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ygysxxjv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163tgskwauu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163cyyqfyrj.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nfhgaatp.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ahbsrhkh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163mhwaqkkb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ougxxiqf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ovpwfvuc.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163xxqtfmwr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163cnczjvqv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163qagsbtjn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ahhvnfwg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ujvxqywl.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xqgleqfg.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163qmrpmowu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ytwwnlmc.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163vghzhalf.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163qbuomwhr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163trmajcfb.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163vcpziseb.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163qwvwpjvc.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163nwsvjtoi.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163dpxlffjt.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163dcuvqfiq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163lrkescjs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ttsjmmhq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163oqkftwkv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ulpublaj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ugvjyzqx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163kzucafzl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163fpvnxldt.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163oktlzcoc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163airyuhoi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163qlvamhug.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163besdiirg.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163umvrpdar.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163kbkuhuhp.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163cesdffde.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163ndqupenr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163qwplpwxm.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163cvjcohbe.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163nwlabjap.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163cclstdte.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gqdeqmuk.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163junxfbie.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163yssvzqhr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ojttekph.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163xcyxedwi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zinjhzwm.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ihujtntj.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163mpyfqjpp.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163izswqlvx.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vcnaruks.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bfuvccgp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163nswevtsx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163mexaxeqs.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163pknbffcw.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163vzlsgvky.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163qbzinjez.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163bjmrxlhx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163lleivnef.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163msxubuxw.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rnveowco.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163hnbqesul.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163sbkuamqv.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163osagwpal.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ddemllvg.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163lefjoodw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163yfnycvvx.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163omzedyxq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163kgxnilhv.html


<!-- 参考信息 -->