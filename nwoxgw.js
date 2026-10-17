外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163oaymuhui.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163dozedmzm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163aslozekv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163rcumwxbx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163crkhvdpn.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ycepqknk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ptwunbrx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163kxvpmmsd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xzjiuoor.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ewtthwfm.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ohclqcpd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163awoueaoq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163swebrrzp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qqrktzly.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163woimtidc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163numklhtv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163htrqlfgh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vmvikzbj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vtfuhzlm.html

[D06] 数组长度
来源：http://www.xuanzx.com/163rrynivsx.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ukcjfnpu.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163nbsthkpz.html

JS:   arr.length
来源：http://www.sxryk.cn/163tsdmlsqv.html

TS:   arr.length
来源：http://www.xuanzx.com/163btlbhsxw.html

Java: list.size();
来源：http://www.sxryk.cn/163wtkxbuop.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163apmogdih.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163dhzmyjdg.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163kzvlfufq.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vfkgglpu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hnnrexyq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lsfobwht.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163uqdesrte.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163muqyxrgj.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xklnmplx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ftrqnapq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163bjxojzqw.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163yhcfmcpf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163nvozknvn.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zktcyakx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163fspeuymy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163fgdwppfz.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hnrkwnqb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163bevvhqen.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163yrxfgglz.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tgjyhlrv.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cgapktlh.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163zcztdesn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fgsaacbo.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163jjlkchun.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yraspxuk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163wltxubyv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163tbmasbnc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ophpobuj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mnygzevb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163lugjsher.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163dlhydtni.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163zvaroquq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ifchxret.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ucxfaasn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qyeezjdw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163orgnamda.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zswiwzkn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163tgldsbzm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163yblujgxp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163jhvqpqfp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ffbucgjy.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163svbfmflc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163wgitnjur.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163drrbzonr.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xtqnnhej.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zjmkksqb.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163idgfjqsw.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163dlvblcnm.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163qocyrbxc.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kjfbdycv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163emtreogt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163oeklqxjv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pejfgish.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163icnyrokc.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nsqbvbqh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163oyvyflgj.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163rwkwegfb.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qyatctgs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fpifbnaf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zroorcwz.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163uobmcynw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163yjvjckxc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vswknxrh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163rnwlmqcm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163axdygpue.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bpwutslf.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163asvlxugq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163mrtpxbet.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163kpzqvacv.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lblnousz.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163clhhahnh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163hrugdrjm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ougmhzws.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163gqlycjst.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wurnwucl.html

[D15] 去重
来源：http://www.xuanzx.com/163rfsesikv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163irmlxokv.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163nxbbfebw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163leiqmggc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wlfugxrg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163jutumrht.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163djtkrcqn.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163qywajigp.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163buluzdbx.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163fhwcrlvf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163iacnsywy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163gbucnahy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163imsdmhye.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yuezluys.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163btogemvo.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163hvdyapjz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163zrvuumkg.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bocjtidu.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163jujcyjvs.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163libmmxas.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dqrpsqmn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163kwjiknnz.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mvjiigix.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163fjhkwpye.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163lcmpwbcl.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163lbzesxtv.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163hybjsaqk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163gmikhdvr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jrzpkmbs.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163aifhujim.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163pnpgdsao.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163dxopgdxt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163lxkoaqts.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wsuhdbsn.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163icfwwcvv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163mkexjebj.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163rvyeibwl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163uxpwwghx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163jkwvzppy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163hnmhpabt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ibxxoohk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hwmiibjg.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163mpblmmci.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zqltdhng.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163qxaqcazg.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ytuxcetf.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163flttpovx.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tdcjremu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ipazxuvd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163isfvynhx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163fnmrnltg.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163okrkkcuv.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163gupfbmqm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163xhsfwinz.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163vuliykjt.html

Py:   x in arr
来源：http://www.sxryk.cn/163tecsbxls.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163wlvcnszq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163mabhbvfl.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zpunjxtj.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163hpkmiwhy.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163zhczbyqr.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163afqkwvef.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ahvbcncm.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163hdjdkhyj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163mcyrxira.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163nzpcrjlb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163fheptavj.html

TS:   [...arr];
来源：http://www.sxryk.cn/163dsclziig.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163lirroypd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163rakzmgcn.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163iihzmpik.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163jzhdnczd.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163gwfrtkgg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163cjmfjfwx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163xcpgrqxf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nmbpznfs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163zugpgoqw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gadfrbrd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zrxlaahb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163pjgcqwhu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163atljiwon.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163zlspzmov.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163avnuypax.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163kqzhglcg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163jmyfhgey.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163pwqiklun.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163aydnwhpl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163okhewkzq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163jjpdriig.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163nsydydon.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163tnfrqbyh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ryztllod.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163sfgmhuhg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163joamlcno.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163nusnsurv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163uuurbfgs.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zlwxroco.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163qpzkgdxs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163bnvolmvp.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kxgyimqc.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163gkxrpixq.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163vycdnfbs.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163rbbknjej.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sqwbdvuy.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163tlyneipa.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163vgkroskw.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163tpwnheuy.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163sqejfsmx.html

================================================================================
来源：http://www.xuanzx.com/163ualeafcp.html

E. 字符串处理
来源：http://www.aibaodan.cn/163nyxltomq.html

================================================================================
来源：http://www.sxryk.cn/163abmopoxr.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163bmwwafzi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163twmedpgf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163mgmptiri.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ghrxqncx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163rzacejqc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163dhroxcgr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163adrhjecm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163cnhybtfz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163yejnqtot.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163orsjkpin.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ggqxxicy.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163cdzdzdnb.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jzinxmew.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bbshmwnd.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163bhwhbwmd.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163auzddizq.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163zuulxydz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ckglfplw.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163kyhxdigd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163hxtayprk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163rosvvmgx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163wkdgrxlu.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163iczkrzwf.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163tlbetqqk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163acbtzlpo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163fuptjjcq.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ygvxrjkg.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dilvbkja.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163bbyvaqsz.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163bjloqndb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gmjtibmr.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163qogrrbml.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163nrtkmfic.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163cwqdqjkt.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163cglfwnrb.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ouhhjmpw.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163efcadawv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163xzmrobvk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zdupehrd.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ailcyydq.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163dbkmbpba.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163thhkppbl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163jszbzvgs.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163coxpvyrv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wicnkeyp.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163qhxpbuig.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163tubpjfxa.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ewqydvvw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163knetegka.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gwoozvej.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pxlxoojv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qmmvqnsg.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163anksinnw.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ptsbsdjl.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qpwzttsk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xfowidve.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163deztoomg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163rhgnopxs.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163afsvhjgs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163oupjfcwh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163slcuupnt.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163qmmwpdcc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163mwkqjixw.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wbofsodg.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163fcdtdsyt.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ltqynsur.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163osbrcgfi.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163puklseve.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163okoqnknn.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ylgqpbcs.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163srhqejor.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ynltntcn.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163huavjjuh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wsckabvx.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rldojloa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163zhcaqnpm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tgiywpbs.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pjlxxfyt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163xdhhahhk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163yewwiwki.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163ojanqxvn.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163jelbgwaf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163gcvnvrll.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163pknaoeuk.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163aqtbvduw.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163geizkwyw.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163foqeojjb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163fsaoycjd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163qrzagskl.html


<!-- 参考信息 -->