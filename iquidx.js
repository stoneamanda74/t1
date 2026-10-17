外链999!wailian999！

Java: list.add(4);
来源：http://www.aibaodan.cn/163jleondir.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163wreuydhw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163psewsyrq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163uxtewnol.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hwmjzkex.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163pzqwdbmc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xgmwhcoa.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163wnfypskw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163obkqtnpz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163xqjcngbj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163hcsmhlmx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nmmfyirn.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163tjhkobjk.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163yawdynqi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pvbvemsg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163dqlssxum.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gnspougn.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pbzuvgfn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163zghvwsch.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163driqvkbr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wcubarza.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163qtxkqhng.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ogfqnyfa.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163idfzmygh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163osrmndnb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vqikndso.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dzfzqngt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163chjjabdj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hvrzjakp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uvmdmggu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163mhomieou.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163qvxdhksw.html

Py:   len(arr)
来源：http://www.sxryk.cn/163oemphtla.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163gcdunatw.html

JS:   arr.length
来源：http://www.sxryk.cn/163zulrdoeh.html

TS:   arr.length
来源：http://www.sxryk.cn/163vrpfsote.html

Java: list.size();
来源：http://www.xuanzx.com/163simaqgvd.html

Go:   len(arr)
来源：http://www.sxryk.cn/163krufdadg.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ckuohssx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mofltwxt.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163gdsrykmf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163faubfqqn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163xvcaktfp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163geofgzgg.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tcggfjyj.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163fgtfyuhg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ozfdyyhc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163vysvohis.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163cuvymewl.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163yzwxnvuv.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163cythmwkl.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ziqncfcc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163yufqksyn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hhwdahcc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163tvewmiys.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163bdpsxrcj.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163xtwombdm.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ejkwzsjl.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163bkujrnin.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bozgohgf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163qiwctngd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163eskaoztz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163grytxyfn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163irkifxiz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163cjtfmmzb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163grijhnht.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163eeftoxar.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163uzeormrv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163djmhscha.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zdhpvkpf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163atkdkshf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xyeprbov.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163applslio.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163cudjqyel.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163hpthbczp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163xvbbfncx.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163dcswmdno.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kvfjnlua.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163mzzyjzme.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163lkbmjgao.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lzqcbdmk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163tsdyyxur.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163jiolxiin.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163bcjuunnh.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gjfloeui.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163hwiuaufs.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wshugmkt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163dwjooryq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wepqtarr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ikzfjkfk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ceyyzsvh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163yxzhhgou.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163rjtlawab.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ygejstws.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163bcvfkjid.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163yvjqqviu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163clizdvbo.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ugtfvvnl.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163exftdqwx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ycbrgghv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163msdbdltn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163cjftpeyh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ilqukegr.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163exmhowsz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163dwyutkfc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ccmvpbfb.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163webrlndo.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163uopvlewo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163loafupdv.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zdqiooid.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163khprjgen.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163lpbjlshp.html

[D15] 去重
来源：http://www.xuanzx.com/163siaofssu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163icuklceg.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163qhzhfcdv.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dtsqewuq.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nszvqrsa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163qahtkpei.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163zcgztgrk.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163bkzikdyj.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kkyuknmh.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163csrxkvfq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qhtgaccb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163mcwvsxyl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163srlcyslt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zrszqthw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163btneasol.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163djkjgool.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ieivdkui.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jtoqzuus.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163tbkrjelc.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163cxeanbbl.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ggqxwneu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163giqnzibg.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hpxetlpp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163zoqaxjaz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163pfkgqowa.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163avxlgect.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gjtzpond.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163repjexiv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qslvfwaw.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163itazstxk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163buokqvee.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163cvaivajh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163vzqdsdit.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163nowdmxvi.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163osixnbiv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163sqwatygc.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163nvyalbty.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163qoukdmsh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163mxhxdbyf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cvrbmnbh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163cklkkzza.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163nsdvikan.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163woqtvfww.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163kmxqngaw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ghqzcumv.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163odbczbso.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163slldtjjd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163bhsmtqff.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eojethyx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ekcwthmu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163juvagbhs.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163vgxtrkap.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163xffdzpfx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163tnujoowv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163xigqygxv.html

Py:   x in arr
来源：http://www.xuanzx.com/163ueqoyhkp.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xuwxxfdc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vfeiflrm.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163gfiqzhsv.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ijarpcaw.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ygetapgi.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163njuhaqcy.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ymasvwwv.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163fcoiqmou.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ngfrcsyq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163otxamdmu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163dvcxaazw.html

TS:   [...arr];
来源：http://www.xuanzx.com/163liscmquq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163aoqkaorn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163odzfxixt.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163wkzkbtiu.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nyepller.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163gqgwlqho.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163zxnaarju.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163qjuizvni.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ocvmdnau.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vlqggabc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163gqkairou.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163icmashmu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163gyfgenno.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163gsavwcct.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ubdjlwyv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163nneikzrq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163eagwhewl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163yuzdxbcu.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163tlzsfizw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163sidejwoc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fjxgeezz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163wqefyial.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wjagyskr.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mxjsezdm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163lsvrmqeq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163xuuhgyrd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163mmulhgrj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163vkdqpsjz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163kelkoqcs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163subfxyjq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163evansbmp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163eyefmust.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163rwtkxrmg.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163dmrepkme.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163gqlyhwdp.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163fknrdyqq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vbwplzzx.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163xxuxtvhb.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163fbapwrbc.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163sepxdprp.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163qzkqnggk.html

================================================================================
来源：http://www.xuanzx.com/163rswgmjuk.html

E. 字符串处理
来源：http://www.aibaodan.cn/163kxjizvqg.html

================================================================================
来源：http://www.sxryk.cn/163mqsayldf.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163iszjaydh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163ncmpyrex.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163xgnjvebm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163nhhlljvb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163dpfmltrc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ricsomnv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163imeiktat.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163gcbzdodc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163yetqdvpn.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ssvpksjv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163vewzmcah.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163gymqubou.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ylrbfryv.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163nhqhlhbx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ooorhler.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163srvhgtkn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163anywzyyz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163elnelqni.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mqabqpho.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163fegzamof.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163yibyjujo.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163bodrdjib.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163uccwdrnv.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163kodigxmz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zazstxjh.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163bslpggwm.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zzgvbero.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163skkyspyb.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163zhhetsth.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jbttmznf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163kubrnugr.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163hbuyhafj.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ewnrzdcx.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kdkgsmgw.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163gzfdcjcu.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xjvvrdwj.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163asgbzemq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163bwziubiy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163nxxnjbiq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tvzlbhiv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163auezwvex.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zcswnafm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163tahmesgy.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qojifjac.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tqffpmzy.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gakifegp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163erwiamtf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163vfmzwbpf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rbcvszjd.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dbnfxpbn.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163setmibax.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163jvajabnm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163yynergwy.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163yxvtfaee.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163prdxmdhd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rdzbvcrk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163pbllllos.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dodrzhwy.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ajpyspke.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163isebpywf.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rjvjrmpu.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163oelbenvr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163cbmgptwc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ziobcbhr.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163geynbhhd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163oxkqvznd.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163bytcaeba.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163jklgwabk.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163xnrabkgp.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163hcjmiugy.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qsplzbbk.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jrizusla.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163biwremew.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163nfvvwxck.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163nitvryxn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vqzsfouy.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163kmrpbtto.html


<!-- 参考信息 -->