外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163kmkvvecl.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163asbzfuyu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ncuxxgpq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ncpgxnfc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qlmophyq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163gejgnavw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163nxylench.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163hdmbrfrh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163hosbhxyg.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163dtxvyonf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163dwgdgcmv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tquaqpez.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ychqzgww.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163dpamwjlq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ucufbenc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163omgbaxjt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163pdplhxmn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163folijxhr.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163whpdgfze.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qewyydcp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163thvkhuyy.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163yzauegit.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163xixfjvhn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163olxikvno.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163rsabkwri.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nlpduscl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163holmmoiq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163prkuwvsi.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163rbalgwnv.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163wclidtvu.html

JS:   arr.length
来源：http://www.xuanzx.com/163dxdxmctl.html

TS:   arr.length
来源：http://www.aibaodan.cn/163lcpmbdih.html

Java: list.size();
来源：http://www.xuanzx.com/163veclsimz.html

Go:   len(arr)
来源：http://www.xuanzx.com/163banuwvao.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163imxykizn.html

C#:   list.Count;
来源：http://www.sxryk.cn/163keqbylze.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163lkuwfrwh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163hpcqwabw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163osztiusr.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163quiawqfq.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163qdnkixcz.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163tlswnwmt.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163rkrcivqt.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fjkcyvro.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163rwhjgohj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163olowykgw.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163uozzyghc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163xkpiagut.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163bicjqbrs.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163reoloqxm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zfvitdmd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163wjkqtrjv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163uwfqbjvn.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163dhxadqzo.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lymmfxzr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jurkzqjb.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163romfkvay.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163lbunxwzx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ndknwsst.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ieqhmrth.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163glouxpxo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dlcbiqjm.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163uzqpvsud.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163lydvhwhw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qrfkzjoq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jegryftz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163durpqgvf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163doxnbwru.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163jtxcmkdr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xmrxxknn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163nzmnosom.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ssncxqzj.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163abgpwbim.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163jhevmrgt.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163kawwgrtn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163wmizjuky.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163tnliwxna.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163elwjirao.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163whslqmue.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163gmutjito.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163yyxnohsx.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163cigscirw.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163jzehtbez.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163kmckbbfu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163bzumlmay.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bccadgni.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wivnvwvn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163eifcyjio.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ygmoocsq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163nrnklzvk.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163nxapxtok.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ztnoyvzi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163pxmoqnvt.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163evvkurbs.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mmfkubqr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163dsacutvm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163wmdurdmg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163faymrmak.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lhlcxlqh.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gglchrxl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163evydgopa.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163yfrarwaz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pbfhmzsm.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lzfrltxx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qwuqetoh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163pyruswoz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163rkoorfnb.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163zmhqnelb.html

[D15] 去重
来源：http://www.aibaodan.cn/163kwfsxrwx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163hjzooezw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163atevaqvs.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ghphjjba.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tfsciyht.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163cxexlerx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163mhigxbuf.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163fgmwsanm.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163tuycbpib.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163psjnquqi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ulkjscvh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wytglfjs.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ppihxtnh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163oehwsrau.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cqdwildj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163nlrkmeaf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163xdjitdyl.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163gmuwapsi.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lstdhizl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163wcqfovgu.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163kpplqbar.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ipdfujgp.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ovrbeqio.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163mhkldcfi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163daihgwqv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163hslivnmr.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163vbkclcff.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163xxjaecvz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163xxmvrqdz.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163fqxggmya.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163tgmdsizd.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163rcolxbqo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163sbjstulr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pjwresmw.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mqaarzux.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163xhbfjntf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163hihkfqdu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163pamhgpjx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ezophhpb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jbxekpvc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wdgiwfqq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163zuxvqqmn.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163nzyyjusu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163nzdppytx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163zvouycoa.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163toajucyq.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163udzbzpix.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163snyugytr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163arnwzxjz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fvmtovdd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163zkkdpwrj.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163qyqqbfcu.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163imuaqisb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ilswrman.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163azxuijgx.html

Py:   x in arr
来源：http://www.aibaodan.cn/163gsyzlckh.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163msjhailn.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163oyicsern.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163hmbkvrzx.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163bdplxtpm.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163xsjusxdr.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163wbpwlwvy.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163eyluagut.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163pkupcjap.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163cnuaphqx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163oetlldgn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163wvdsqnha.html

TS:   [...arr];
来源：http://www.xuanzx.com/163tfbwiiop.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ynisgnlu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ksugfgug.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163vralnrtl.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ydvcxtwh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163wcuqolyf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163csxqrqxb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163orlcmvfd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163loolivif.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kekjqoew.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fujlmugf.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ezrzqeos.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163kpypuxlx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ohgthgxj.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163kjnyfkns.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hvmtkrmg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163kbkzgyhw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163yhbfwgrp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ljyfyyiz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163irnbkxym.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163vcwiegqe.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163dmksbixv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163dcuvtjos.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163wovxzoyf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163owaucvso.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163lapkopbd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163clvixzcg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zxsibsea.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163soestbau.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163cigvubzo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163pecqpafh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rfbuuciz.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hemnyivs.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163uhnrdyhs.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zcvoavhw.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163unyhtcki.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163uvjnegpf.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163fuamxbro.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163oafqlflj.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163hikxndkz.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163bsofsvrg.html

================================================================================
来源：http://www.sxryk.cn/163iheyznsa.html

E. 字符串处理
来源：http://www.xuanzx.com/163grfwphcm.html

================================================================================
来源：http://www.xuanzx.com/163zydvbfqg.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163vapqaqvc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163sfzjbhyr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163pxczpbil.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163rtkplcoj.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ikprcreh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163zarlxsir.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163pjjxasmu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ynewbwne.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163gpgupsvu.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163liawbfdu.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163hjgzhykp.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163zywqwycc.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qewucrvp.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163teaxwyqx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163gwwktjmm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163gemllgdi.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163xyqupree.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163botnacoa.html

[E03] 截取子串
来源：http://www.xuanzx.com/163laygotzy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163mrswjetk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163brbxhnsc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hwskmhte.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163byhorcpm.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163qvoyeqll.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163aryhjwlt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163mnhmgetx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163zgawvolb.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vbblvzkn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gzmdjasp.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ypixswsl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163nsytmybc.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163uomjpdrg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zkayyalo.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gtdonqzu.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163efrgrlxr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163vyrnqttc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163jhrpidzu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163cnvfgkja.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163avsfzndl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163nocsggff.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163hqsblilo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ympdomfs.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163hvigtfey.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pagfjseu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163obgpdnbv.html

[E06] 替换子串
来源：http://www.sxryk.cn/163fmeuccmb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dlwmlsen.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163nsoboofj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ojlupodq.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wdihzmmt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pewjvsoo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163pdeeanpo.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163qrbhgozy.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163swyfneec.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163hlqicqxz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nbmfknuy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ifaeqmub.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163awigongo.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163qspygvuk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163lrmdpzro.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163eplfoqwh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163rknpolqa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jtjzdizw.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163vdovmsii.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lwnqltdk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163droqmdtc.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ehpvxyhe.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163vefsqqyp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pzttgpbw.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163tiaoqgzf.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163fxdccsmy.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163owoyeeia.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163bchvhisx.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wzgpvuuc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163bixlaoxk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163dwnolflr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163nkmgtikx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163atdxjwbb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qkfdybsd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163bengvpii.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163lnzagkih.html


<!-- 参考信息 -->