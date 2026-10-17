外链999!wailian999！

Java: list.add(4);
来源：http://www.aibaodan.cn/163aymmkpnd.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163dsovgjuj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163dezoqeau.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163sheekeig.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163gsyvqjvj.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163axgbecon.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lueyesue.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163unkszhqq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163anwymrrh.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jwagqymc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163atjitnvs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163abcvoquf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163uneohxrj.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163kmyvjgov.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163zozhqqmx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163fphysnsw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163eaeapcvs.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163bporldea.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163uuhiudos.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163dmojcwmr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163evquyqgf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ayeaifiq.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gzxwacnj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163paausvoh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163idgowgwo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wqrthrkn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163lcxboxjj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163yjyicgpz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163citbzxui.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xtriupvi.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163cvkntqwv.html

[D06] 数组长度
来源：http://www.xuanzx.com/163towaarkv.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ghdlcnfy.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tvgutsir.html

JS:   arr.length
来源：http://www.xuanzx.com/163ynfavbwl.html

TS:   arr.length
来源：http://www.xuanzx.com/163qxireowd.html

Java: list.size();
来源：http://www.sxryk.cn/163tzcjrbzk.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mgvunhdg.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163tpcebgwx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rwzaavez.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vwggwyvm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163mvkgevgt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ltmrmctr.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163iyuoozua.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qpegtfvv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163doilytid.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163djqpsnfy.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163eelmrekg.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zpgjdywx.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163clfypmww.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gfibezgn.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163cinkqedy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163wwsdpara.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hebfvdlc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163rqizcyjk.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163iduwgvkl.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ilqlbqtv.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ejyjwsvz.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vihuzope.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mimosywq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uhivpphl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163cizfqhfw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vqnqbfnl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163stxlvwmc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163oqmmqgzz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163oomsteog.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hjkcrnzt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163cvhvrdhc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163kblorbgt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wvgojidi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hmxnpnfp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rzmurexz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163yzisdpfo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163gimodsin.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163jqjxatjq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ucyfvndw.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163jtamkhba.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gdqntagv.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163aairuvgk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163atqdmvcq.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ykkgzuou.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jedxtgau.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163kdeljufu.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163hasabttd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163znwyerem.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163joasajkh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mlzgzbrg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163pqnwwcax.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ekicttqz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yctvfgxe.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163vrydrmzv.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163akigjzne.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163soddrwbb.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163yivsyxak.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163jksmwimi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qkignxga.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163iqjqteex.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nmgtbuku.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kkgodwnl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163rkchrvom.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jacpkmzk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zpqukkoz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163wyltpmun.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163nulvyymc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zofjwyzt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163jcnntjhv.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163uektglln.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mimbsbyo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163pnjmxrch.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163glfzgwvn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vtxcjofa.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163fgutcijx.html

[D15] 去重
来源：http://www.xuanzx.com/163isdkodbh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ahgxhcgb.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vnvpltkd.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bmslgzqg.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163syebkzqn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163iozoomfd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163uytqytjg.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163ymgovxwu.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mwqmlzci.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uctjttat.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163qzypeueb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163shnvglzl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rmdjktvv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gfosrbyb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163zdtnzshd.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qbmctmxm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163twpuudkb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wmxnbkbz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vsmyqmyw.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163clpvojwk.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163nckrbwzt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vmplapwx.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163afpodxhf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163yitfqsdo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vykdvxlp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163vdwrdnfq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163kiubdblz.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hfcgmqkl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163holmtwok.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163tiguexnj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lmogjvfb.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163polfgwjx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163mgmclbpg.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ggmxhrjf.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163pfzwcnoy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163bondhxwy.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163cuwnciwf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ghomohtw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xconccsb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163optxmtrt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wrhptwul.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163bcbidxzp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ycembobh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163fxrlxwnu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ahlbphgu.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163cdevjjkf.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163unzyzqbb.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163nrvvtstn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mcbemtin.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ivbtrxii.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163mckofxei.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163wrkybnrj.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ktebnmwk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163eqwabksu.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zvmnvsgy.html

Py:   x in arr
来源：http://www.xuanzx.com/163yowflhox.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163cryqnlyu.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163prkatlfv.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163suwubpmb.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kvwtpdkp.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jqanwxvt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163wszoaofp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163tuaqlnqi.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163tahfrlys.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163euikdujg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tpiyuchu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163uugzjxri.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qfmofntg.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163dgfxgdep.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163obqemofg.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163bvbirmun.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163pgyjuhjt.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163aecfbwdg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163japysolc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163swqyagif.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bdxdzrme.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xubyfbnx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163zvlmysfo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163radgbcsb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bokyiafk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163atkjfajf.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163mdutvwtn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163odiqntoq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163tbahrmfk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ixypxxrj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163vjazlume.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ivezdgyk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163cqzkapwt.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163bihkrppd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163qaewwiow.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ewvdehcn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163avyxnbmc.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hwfpfoaj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163siewdpmv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vmlgfqfb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163delkwojk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163vydqnfyv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163xrcoyjrb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163wzloodbh.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163sygpgxme.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163skswyqhm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163sxtkkfol.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xzvlylvi.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ezkbgmwu.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163kbkzfmlz.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163houdwfev.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163qyyiafud.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163lhkaywid.html

================================================================================
来源：http://www.xuanzx.com/163zdbhuajs.html

E. 字符串处理
来源：http://www.sxryk.cn/163relhvuhl.html

================================================================================
来源：http://www.sxryk.cn/163zuajejbx.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163lvykcals.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163modqtzju.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163mhyhsqmo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kgcvhqru.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163nbiepszq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163heskkdsm.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163jonadlvy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xycclfxt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163uxcmuurn.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hzrzdggp.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163xmyqpery.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163pxqshmpi.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163njblittu.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fsovkkxv.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163uoxamuki.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163uiktfaux.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ofigsvqt.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163aauzxxil.html

[E03] 截取子串
来源：http://www.xuanzx.com/163gezjcfiy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163qaqslqgp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163qlqrcsij.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163iyaudipl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163podbplgx.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163boaspkmx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163meippdzl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163eqsgceny.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xhcrbzba.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163apjfurjp.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163leihvyih.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163dgvsasxf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163nfqwptuv.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163eyojyzqc.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163mpcyuknf.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163memtwxpx.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163samefsuv.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163nfatuffz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163uofeuarp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163cgwrcvkd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163oyhmhdlh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kvnfpnoe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163gpdlhsck.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ycfjwnfs.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163wzwtivld.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163krbxhxqy.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163jbfsoknk.html

[E06] 替换子串
来源：http://www.sxryk.cn/163uejkvmbe.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163noiaokhn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fhblgocw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vfwonllu.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uvropbuu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163irflshvi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jpdyljnf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163gklmvyoh.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jszufjst.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163bvspzsac.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cfvpfntk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163qtipjpys.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163skeajlrq.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163okrugeca.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163faqmipvr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163qhrxaejr.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163mhajqzvr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163zxyflrnk.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163urhufawf.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163uwdoxgnu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163thjpveay.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163wtrdsshf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163btccdzvf.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163qpwnpybc.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163flkdutck.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163yyoguhaa.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163nwrqzkbw.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163nzhrtvmq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163pzinsbhr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dmnzjnjr.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163lztwztev.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vwvqezlp.html


<!-- 参考信息 -->