外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qvbmywri.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rrufrqim.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gkxhcibm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tjfkewxd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zykmjinw.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163avmfxipf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xblxdykg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163fotqjfcb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lpowiviu.html

[D04] 删除元素
来源：http://www.sxryk.cn/163twhmduvr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hgdagwht.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nievwlmi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dkzqnjdy.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163fevjdnvj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nmluqhdx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163uzbuyyye.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163bbiwtiyu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163iuyjzxyf.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163lednqzmh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hpksezlx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xcturfmh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163udjacexp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ikvztgil.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ylwiyhsl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163wdazoena.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ktbdxpru.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qrngzphh.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163eyxrwzex.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fsyqumpg.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163xoijzlkh.html

JS:   arr.length
来源：http://www.xuanzx.com/163mnvgcdfg.html

TS:   arr.length
来源：http://www.sxryk.cn/163wnyaybbv.html

Java: list.size();
来源：http://www.xuanzx.com/163gpqtkypb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163sldzaais.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163pucdtcmt.html

C#:   list.Count;
来源：http://www.xuanzx.com/163hsljgcfz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ajsuqzti.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163mayyqblu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163oyfcjfea.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163abgmxhtc.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ufsrsgbu.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163fhxqhypm.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163joukzxbl.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163yasaybjv.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163mdedjhnn.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163paczkltn.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163wwrcmrdg.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163kvatdkto.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163clzyorrc.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wllskjvb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bzbjpcgb.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163adiqyedc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163cbotczwv.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nfowgsdl.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163zepbgoku.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rjtdeptf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163qjpkoaam.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163plwjtnps.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vvalvehy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163zsofqujj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163njqlunar.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163sgxonwcr.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bbrikyea.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163rkzoerld.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163yiitxcyq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hrhcyito.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ocbgmtho.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qscmawyo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ayhitlxn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163uifrtxof.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163igdfsapf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163xockpjke.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163boqhdebf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163uzaxfaav.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163agsshgoj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163oeitcvez.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ngjwaxyi.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163bvxogvxm.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163spromuhg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163fxouvbqn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163zowqubzi.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163mbjenghm.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ymktullu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163quzvtffw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163laxcyrzq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nfzpnjcn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163hxfantdv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163yqgvdqbd.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ypuszgbq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163szugzgmu.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163arylnzst.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ciqclonf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163piqohixr.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163osjfirlk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pkgcuytd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163quyeoqrc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xansftdf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163kqhzxlnq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163hdjkjucf.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hxkmkavj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mlhgnnxl.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ptbkwqvi.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ohpxixmm.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pfpwppxu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163fegllnkv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163llyxxwtf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163epcofyuw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163nziezlyx.html

[D15] 去重
来源：http://www.xuanzx.com/163jndkraqe.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lroerifw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163qjiuhuby.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163reeocuif.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yetuojhi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ojhlavfb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163buohpagr.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163byjkebna.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163cypffncj.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gzbkicxi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163apnvqofg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163lshckcka.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163enmzkuei.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163irnjprah.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163isslvhyf.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163dnnmwewc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163akkvibpa.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163mttslgkm.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163hpfryvue.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ljeueoou.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wlzgqnzu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ypnxmjrw.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ucveyped.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hcccymjh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163omxkidmw.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163pigkeyvt.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ymcopkud.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163aujddgbi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ntqslkkm.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163yjwkqrsq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163xvoewbhg.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xyacyxjf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163herxzzph.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163ijpddfxl.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dwbcsqto.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163kihhcgys.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ruzwqnjz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163tuozsgpi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163lgimzdhi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163pohwcoyz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xjhjlrye.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163zmwtdfen.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163fvamwqzp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163gaozogth.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163whkrrxcn.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163oadxjemn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163krwxazta.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163hdodrgxf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163twxdzfcl.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rzyjeafl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wszufxho.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163eajgmllp.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163rgykjukx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163llxecgkd.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zgfafyrb.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qewulnso.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ovygwwpt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163qsiipxtq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163kwzlqhvr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163uvrrirjb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163rctiqwle.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163htzwfwjy.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163wwifqqda.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163yiwsqsoi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163rylevpgt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163uixuizus.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163nbfznvee.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163odysgngh.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163jygoratg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163bwvphrpn.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kyscisst.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163wlmpaext.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163zepuncin.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wydzsdov.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kuuegfxl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163laalwqbj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cyjeubdf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163dxyzzjut.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jyvqwlwx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163flxqbqgs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163lnmangqq.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163bujnphyy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163ggtitzvr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vpaifkol.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163dgtxnmxj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163hqrwpoyz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163wlckckuj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163bavpaspb.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163fjvuxpnl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ixsbxwas.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ksykdnka.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163xfjqxupn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ojjmbtiz.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163glkjclqe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163bzqylifg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163toduhjvj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163jegcnnmz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xfedtomj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163lzzycpza.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163dxctrrql.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163cjeniiyv.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163sdvvudiy.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163cbdaedwx.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vmtxvjvc.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163jpvdrmmu.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163knqhdxfb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163phqlmntt.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163piwmyefc.html

================================================================================
来源：http://www.sxryk.cn/163srgwpnvy.html

E. 字符串处理
来源：http://www.xuanzx.com/163cjcaietq.html

================================================================================
来源：http://www.xuanzx.com/163wnpjwfll.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163pepsgxkc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163yorjrspd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163tgzmwejt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163oykolstc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gdspkucz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163gfvlfjpl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163uzvwvymj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163sceqazeu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163necbdpic.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163qfceibkq.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163pdxwropo.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163gbdvzwse.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mzgswvno.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hahgrnkl.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vzbdxudj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jafprmpb.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163kaijkbpi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163tyvsdwkv.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ebecdgjo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rannjcjn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ktfqtzau.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163evspriqh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163gyibbqih.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163sgqpzpyi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vgxgetko.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163vhptlpvx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163nwllsaug.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163euplhdps.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163kdtvxgli.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163mkyprfux.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qibmnkrc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163gdobdmfl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ggiuafke.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163qkasuqdb.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163oitqrdeu.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163pxfrgcnu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163xmebkwvg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mcgomqzo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163svztrkcj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163jmvostxw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ablletfy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ctzpmfox.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ysyagond.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163zvgnomyb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163ixcmicvf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163lnhfigbj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163tjusiwlg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163pffcjkfh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wqyprbka.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163eohoykxv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zyzfelxk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163xluipedt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cxvpqtdi.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163qngzvjom.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163nfwtigsb.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163gucsavem.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163zsbhugzl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163iecaseam.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163kwzesyji.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163npluihkk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163rpnbsalc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163qjhxkies.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vmlgmgqe.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163dbdvuwde.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163fjkyfhrf.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163brvgcuvq.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163xutqeebv.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163swbbzwuo.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163iaeojiwl.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163hmznynrc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ottxudmt.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163dwtrqmib.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vsagjmyz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163dhmzonun.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163okjqwgeu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rubfhndr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wiymeppc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wmlbbppn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163nzzyxlxw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ooekwxij.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163mapzjjwm.html


<!-- 参考信息 -->