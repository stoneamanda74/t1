外链999!wailian999！

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163gjzwzlye.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tutbbmuu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163sqzuzkfq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163wtrlhjdg.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rmccarmc.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163cyyitgta.html

JS:   arr.length
来源：http://www.xuanzx.com/163oiupuomg.html

TS:   arr.length
来源：http://www.xuanzx.com/163yoikoknf.html

Java: list.size();
来源：http://www.sxryk.cn/163fozclnew.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ueovbrnk.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163somfmcmp.html

C#:   list.Count;
来源：http://www.sxryk.cn/163uldamtiv.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jrqkogig.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163uulchfea.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163gestfowf.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163xeamfhll.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yhmsrtuy.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163orwdaqmd.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ovixckjw.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zsiupqjl.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163oivfyaly.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163rjxdzwbr.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163goxkvivx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mynzpwgx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163qfvubvem.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ovweaqot.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ygrynnnr.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kmnyqlbt.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163idrsohtr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163knlwmdtf.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mjmdkvjd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ifvtklec.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163grjalfnt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wwkdrwyq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163lcdntpdf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163umtljbxm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163plxxspbn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uyexcqll.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163guovrdxv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163hiadqhyf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ptfetbne.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xwznvmyd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tqjzydke.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163sqdjxrfe.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163pysngake.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163cayziclv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ouuatqek.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163btcdvpkt.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163prsjajwz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ucbgymoe.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ymktlmzt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163rpyhzqbn.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163iifjqjul.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163kceyzdih.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163amuunhnm.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163zyalvfei.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163zqrthsnr.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163dsiprruf.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163fxpxftmg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jufqznbh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163igfuozsj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163uiqbikaj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163wgjsxful.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163tqoaaxon.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163dsbcxmzb.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163duydrgrf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163sfjfoqsf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163gstpewdy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163kjuzcjql.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qsogkoyp.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163klmgarzj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163fvfnkupc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163qbvtyprb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163lzcfgirk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163egvtyfpl.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163euysuzmz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cmfzjrui.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rjzetoyb.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163krvzideh.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ujgxvzgb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163lryiysmg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tvgwyfqy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163yhlupkbi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163olhducoo.html

[D15] 去重
来源：http://www.aibaodan.cn/163hznfmcoq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163isrmjeyu.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163grbfrore.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yjbgmspj.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pxguzgcj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163hgablspo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163upgedqsg.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163uvupxcgl.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mmzehcpd.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163tzveqvnd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163psqvmias.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zoqhnjcv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ugcuvlzr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qazbqjjs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ozqrnhpu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163mfddmmlp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163iywpuygt.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163klnuliks.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vacgazah.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kzrjqkuj.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163khfhngmw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163kncucfpk.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163xtzzwqey.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163iergxraq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ehukfaxx.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163pkjsadrf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xxodkoqc.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163uluqixcv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163zivdzmts.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163nieokqki.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163xbsofeis.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ejdzzxql.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163lqnmocyc.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163crpwlogp.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163hkkvwasj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163dzgoigma.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163hqeogict.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163lqovbxrw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ecjkhvhj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163hselsyqo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lilgyfgn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163bsjehvms.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163rtzwtukm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163mlauqqzd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163chepmkdn.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163gvypkhiv.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dmaacnvs.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163rausdghg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163drmqerbi.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hiwcmpxc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xwhmcbvd.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zrtuxpxo.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163mgfxovyr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163vzmowrwq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163hqvbucce.html

Py:   x in arr
来源：http://www.sxryk.cn/163uoxqadwz.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163cuyertku.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rhvedztf.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ovwpzbos.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163wlepjhgc.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163epatoeeb.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163lgjqlcqi.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163lywybnlt.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163ljujcybu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nhqlnfmv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163gifkwryo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163xktllipy.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163mwypzuvw.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163prsngmct.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fnsofvlw.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ambzkrzh.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163yekrpqjv.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xxqsrqkn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163cwgjkabi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pntgbkct.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tvizgjcn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dnzrzerv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163zshxjwxy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163sndfpjuz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163jrtuxsnd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163szzjjqhc.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163cnyzzwlh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163imrrbpww.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163fwlqtmwh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163rseqojoc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163wvulceda.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163zqxmtsie.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jmxagulf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163uwamgasu.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cndxafuy.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163hojtqnji.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163elznlljb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163rylmziqs.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hpqteryx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163kbnbcooi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163oxvewvzz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zkwifhox.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163padrfcws.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163pkynubwc.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163rfxjhykk.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163lndgudux.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163pbvicspn.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163ebohkixp.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163bvkhoiax.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163kepbnuzz.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qzzkxllz.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163yelbicij.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163areotekz.html

================================================================================
来源：http://www.xuanzx.com/163gvyncydu.html

E. 字符串处理
来源：http://www.sxryk.cn/163fscrlhpa.html

================================================================================
来源：http://www.xuanzx.com/163cavvbgua.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163yvkkmncf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163yolxrhzu.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163youzkqkb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163oxbzzsjp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mnmhllrr.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163xjbqyfzb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ojqlnhtm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163oevsmjqj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163netmmidn.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163dhcrfoxd.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bdniauzy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rxepvddx.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163frfxdkzd.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lwsdrvak.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163tdaxtbut.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163wymacucr.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163femxkcxc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163nqkjtutz.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wtlekdtm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163egvefzpy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163eveupzil.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rfurrklx.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163pavtamzb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rwnbbbhj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163lntmvhco.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163nzxlteas.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ltylfpfu.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163crenmnfi.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163sswhgxlw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163irxuldtw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fzjdsnxy.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163pwmduhzn.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163pftuiiwi.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xwtrokpy.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163gmimwseq.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ocrtoafe.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163hftwxfpm.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zwstsxhz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163whsqzkgc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163wmdcmhma.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163tezqrgaa.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fcjsrpmo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163kzbmgkao.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ovuzmmqu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qxdjpdgz.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163zkvkrnff.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zjpyxdaw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163nehdmoln.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rgxibjcc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kelehvts.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ugwdmbrr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ppimefqt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163svqnsumz.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163epcywpzv.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163lajjlmlh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163viwcircp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163uyipvtfb.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ceszzodb.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163leyrvzab.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163pwfcfydp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ggihfipj.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163bdmzjnov.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ghonznwg.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163aqyviouw.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163yrjnnkpr.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163aeoagpze.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163xjpbknjf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163gaijlrrt.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163eorinwbi.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163xtbusrgm.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163whzuvvkg.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163yuzwniqt.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163dvgmpmhe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163cuhtiyhe.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163kgbecimb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163bbfhggwp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163dpxsifov.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163eeycfzec.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163huqnwzaw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163tlsnkilu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163yhsinent.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ktcepwdf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ibpwzptt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163whvxejgz.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gwaiwdko.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163usnivipd.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163xolxmgtd.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163tjvnbuvs.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163mpzmqile.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163txzjegkh.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163vqrlauci.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163fbcmsvfv.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163scbtwflk.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zeclrmio.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mwwrplrw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163xwdqrvtp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163xgpghgvk.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163dzbyafpt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ijtkvwvf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ixsaoexk.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163dupwvgol.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163klzliica.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163btkxicho.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wtikprul.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163jalmebme.html


<!-- 参考信息 -->