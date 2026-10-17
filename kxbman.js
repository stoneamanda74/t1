外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163bkyifwpe.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163fpujwnwg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163qfidbjne.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163fohbyobi.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163pavgfmvw.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163imcfdzdv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163qzfqbvxb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nvqudlbq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vfjofrjd.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163hkwhxpai.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163xwvtuhuc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ixtqzhal.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fssbvzds.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163gpaptscl.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mehkcdfl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tcrjqtmr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163bicaxlgd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163zgwffels.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163knbuvxmg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163sboucnwq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163pmqgfaqp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vsdkjnvy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ghujcsws.html

[D06] 数组长度
来源：http://www.xuanzx.com/163qfbwqivt.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xzhuexfx.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ewzojodd.html

JS:   arr.length
来源：http://www.xuanzx.com/163qvzatmvt.html

TS:   arr.length
来源：http://www.sxryk.cn/163mqvgzpyb.html

Java: list.size();
来源：http://www.xuanzx.com/163kfxdkkgv.html

Go:   len(arr)
来源：http://www.xuanzx.com/163qtetvfxh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163eyydimkq.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xaipjluq.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kqrvxsyi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xlvzmguz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ruhucnsx.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lokzwdsi.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qaqrxurt.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163lbiajzhu.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tdbyheft.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mcnlnqcx.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jqtijnnt.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163hrlcgggj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ssarynpo.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163lflhscno.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gktjvetr.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163plgacluk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wkfzhwcm.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163elyiqalm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163xjrqfhmn.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163tlkoruas.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wpufzslz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nslrfpdx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ttgpzlko.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163drfogutu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163vyrbejiv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163yraopvrc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ebszojby.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zivaigeq.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163mjwtayar.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163lnjsevyl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163rwhwrupl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163teasanvo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163iulzazwf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hgigugny.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163oiycxdtn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163mrloqkhr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163qzimzbzn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163joevrpfq.html

[D11] 反转数组
来源：http://www.xuanzx.com/163hmfmgtyc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163qlwqtphr.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gijgjpks.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163iqboddyr.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163tsifftab.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163sexwchok.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163yyvpubyy.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163bhlbzezi.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163odgocipj.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163fztdxauy.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163sgafmoyg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163oojknmak.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mawqrwta.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vidhbbip.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163luoerrvl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163plxfepuy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163addjsfwm.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163mszhtyxc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163xqfrabun.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ijqjjnxg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163azbsxioa.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tziardzh.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rtpbkqzk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163gvtdopmh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163slarclib.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163pcysqeuk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ydknrazx.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gageoqcm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163vpfrpcmn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163hqffwcph.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ajyniuow.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163fymvfbsr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ukzgakut.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xkitkvgb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ttpovrrc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ptmnxdho.html

[D15] 去重
来源：http://www.sxryk.cn/163edjbxwil.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xhpwcgyl.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mhyhtkbi.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163nbgoyvlc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163agufyuye.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zizhefrj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ugfmnltt.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163nluhauod.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163xxblxqni.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ejgkihvn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ycqvbiva.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163cvsxfebp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mxjvbcgp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mrarqszu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163uoeceltl.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ppnwemgt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163bvgpnjmv.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163dzpvaorj.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ncccepfq.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163chnlqdmx.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zlfeqpnj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163rbnlphqa.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163akyscdqy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163psqtchoh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163nfuypxtb.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163uguiqwup.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lgvngyua.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163wdyfoapc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163fyvzuqou.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163rubbdini.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163skdnoqtz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163sjquxyye.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163ignewmlg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163gxhherwv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163elzrleqw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rgjeozug.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163yeoesfdc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ygqylxlc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163onoxqnfg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163qfreizwc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uizxskhw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163efgpjlvy.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163virpmxzq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163qfknsxzr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ngybmfnh.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pelimzfa.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163tlyyjvuo.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163astrhwns.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163friechsv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vumanjfl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163pqjesdlm.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163rigywwst.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163sabrnxfj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163lfjlkjlt.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wzevsidv.html

Py:   x in arr
来源：http://www.xuanzx.com/163pogvwlxm.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163dadjtfmr.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163pcnkkryi.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wzsprlaz.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163duitbtzl.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163vzlsvzqs.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163zannwfiq.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163xltvobqu.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163sulbijxa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163sjxsmjpq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163xrdxwogn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163cvcigpct.html

TS:   [...arr];
来源：http://www.sxryk.cn/163hxwcnvxa.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163yaveqlbe.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jmkpuyki.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163iyeyqtvb.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163rnstosbt.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163gmjoszlm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163qakjgykw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163kdlnzljx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163medqtcqd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jzdejddb.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ebmlrlen.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dgfpmdfy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163oweyqzqg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163wbxnizcl.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tzvalpiy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163fzzjhpur.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163pjxviptx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dminlags.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163apgeeizb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163aekmukbv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qtwafjan.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ndmlubgi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163uuaohzil.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163hoznthsu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163akqrwzxc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163nqqwkaci.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163hyeyjvfv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163sxtlnxey.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ewnhsfod.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163whgqfkto.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163bwlybfff.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163qltniqla.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163wtojcwbh.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163sddjaonc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163jdoufuds.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163olerabwc.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163qxoejonx.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163gcwdnxla.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163jhgobxqq.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163gyumpytx.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163lqudinel.html

================================================================================
来源：http://www.sxryk.cn/163vawysxkb.html

E. 字符串处理
来源：http://www.sxryk.cn/163quifgscw.html

================================================================================
来源：http://www.aibaodan.cn/163nvyqnwux.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163vmtlgpsu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jasbyoov.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163oapshzqi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qpgrlajo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zbwifoux.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ssssjdiw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rtnzftnv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dlcwqspe.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163xsozbvpc.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rivadzts.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163hdblxvur.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163jbdrcorq.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163xmagqsun.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vpiabuut.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163tgsufhlc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163rgffxyta.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163dibtpdzx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163fndhixhx.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163qproysdg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ecfxrcbc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163trcfazcz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ihgzsgjl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163neonmpty.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163tmjenogv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163abbglret.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wsivbdyx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163lnazghbn.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163rxtfyfmi.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163hymjshwm.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163qnlhbruf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mjvnkjax.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163piobulwt.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163mrqhcpnr.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163rftkqnhr.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163pgrleyoi.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xxbhduyv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163nedodlqi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ghtehrbb.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163xtxzhdgj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nojwdefv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dmrjnyqh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163sjahkbkz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163kfqoufxe.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163koblhsgw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163whjnfzeg.html

[E06] 替换子串
来源：http://www.sxryk.cn/163unwnuijl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163egqhlfez.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163qaamhrnu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sjnhpplc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qeqqzzuu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vxvkeygo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163tniygzoj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163flopeswe.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163sbjtfzyh.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xrknpgck.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ycwhupgy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163fpprgrcj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163njpzvexa.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163nwlublcf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163fatccgks.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ozzmxuhw.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hurdoryt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163qkwiweop.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nyrsshvr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163uqklcshh.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163qxpmhjfl.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163zjgjpfbc.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163pyxwfsgc.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163mlpizsil.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163dazcpxwr.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jvvgjdae.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163urissycb.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163soljfdsb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163xuvfpumh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163xulmcqdq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tvaaaisd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qrvrljls.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ukzpouau.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163hmlyumuy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163udeazqos.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163rrikabuv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gixyewuy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163pqraslax.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163omsqcsvg.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ejmbsmyf.html


<!-- 参考信息 -->