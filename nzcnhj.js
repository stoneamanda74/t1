外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ymvlnaxb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163mzolpvmb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vasikeda.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163svxpblvi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qhpkkivb.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163yuemodus.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ewdhleop.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163kictceqo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163jjebscfd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163odwsgyfy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163brwoolhs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163atbureot.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163jpxcnvkj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163sdjfgtsv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rlrdyglr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163gjzgbdpn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ysywdamp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163yecdltgf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163kukydrfd.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163eyogltie.html

Py:   len(arr)
来源：http://www.xuanzx.com/163yewoolmd.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163kmzvgqcv.html

JS:   arr.length
来源：http://www.sxryk.cn/163mdeslflq.html

TS:   arr.length
来源：http://www.xuanzx.com/163dgwyfkvy.html

Java: list.size();
来源：http://www.aibaodan.cn/163zwdjwfkc.html

Go:   len(arr)
来源：http://www.sxryk.cn/163kkzvpqcz.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163apsbytid.html

C#:   list.Count;
来源：http://www.sxryk.cn/163lzkumewn.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163bdtojfkk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163xbxiyemn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163pswelfhb.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pbeimnxo.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163opxiepkl.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jsvzrbtl.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163yzeumlav.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163izjrexke.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163buyfjwmx.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163uqsdixzx.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vrcchvvj.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163kutawkls.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163errmfkkw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163phsxenvx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163kffohrfy.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163adnizwzh.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163cqjamxzq.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163htxqugka.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163bqtjgotp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mxilzwfb.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163munbykbz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163djdpdofh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163wksrtofk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163fnpcrkwv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dhgbzeum.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lazpbaqz.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ghqbqaax.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mgsvbmhe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163brvttpii.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zeuajfcy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163iiipbelo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163alubfago.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dntvbsez.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163qjiszbro.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ntibfzve.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ohmaubtb.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vktrqqdg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163brgomron.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163bevrunim.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163lzermpvc.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163gldfwter.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163egmrdeiu.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163qblxlays.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163rmfcrwfc.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163spksojoc.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163mitchmoh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163edkelimb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rwebrehj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zspjksjg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163uapqgncp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163iivtthhy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163bltboinu.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163azzbnvko.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163pnpshjjs.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163gsxexoec.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163myccmxxm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vtvfdnwg.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nhthoonf.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yfqyjhzo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ueyibulb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jcjqbcmd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lvionhor.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tlytmbsz.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163avgplpsn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163esqzbueh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163egyfnfij.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163apaolyiz.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wtopwpqd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163iexyyqdw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dhoyemwb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bbrubdsi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163flvjqkkr.html

[D15] 去重
来源：http://www.sxryk.cn/163tktrivoj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lkukqhll.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163hpwcobfh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163aoqudypg.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163faicnthl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163kqdzkhzt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163cdwopcmj.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ygbrcrba.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163zncuojaa.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163xxdylshm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163spwawiom.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163edhqtwwr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fxnaqrcg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vwkzmhwk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163vaahzesn.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163fhwvdfui.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163yonbagai.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jcqdrciu.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163paasgpdg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kbskuioc.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163nrxcrjwk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163seacelhx.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163iuzduqmw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163oiouoiia.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rvttrqys.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ymgiezjf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163mqqkpywk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163uonitmwp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qvhqxtar.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mphpszit.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hkmihcih.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163rmssworj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163erswmggd.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163tasnajvv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163dulaxxjj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ibhpgjmu.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163usiqnery.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163juawayir.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163lglskacm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ogqdqbsy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163shkigqmw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163kzdosgfh.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163aswzxfxh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163vjubtdey.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163lwbhssjb.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163xlslwxqh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163nmyuudnr.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163kozvdkts.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tqgyxwon.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163hfrvyvdz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163raswiwyi.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163yqcxpfns.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163lnrlcute.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163gdbxokfz.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wnhdvshd.html

Py:   x in arr
来源：http://www.xuanzx.com/163ukjygtru.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163grvnnvnk.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ywjcrkte.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163xxqvucrr.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163degmetkc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ryxszvhw.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163rnypvvry.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163qzbtcpyd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163zxnbgqda.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hdqyyhvo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vcqhtjzj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163juftpglf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163umdexnhy.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163txrxvidt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163lbbmxnqj.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163qodcuoru.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163vxpjjjcv.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ytjhmfjq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163ahqorezx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163kcknpszd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wtubatrn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jatcsmrn.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163favqbyoj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163duxgfqxn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mcszxmvq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163hmdtxldb.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163egcjfhwn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163baaygjrd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pzjrxxny.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163caajnnuh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163vtpgtrsb.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163nrwhauch.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163kmzgreod.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163qopuwprq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163eucxvloo.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vbbzibzl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163slzfapiz.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163iqzenyay.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163nbwramwq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163bvvbgzpk.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163lszicnkp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163kzissvxl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163rywkahso.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163akdqmkdp.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fsttgwpf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163gfedbgbl.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163omiuewyl.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163hgztrrvu.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163phzovvay.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163owposplo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163xsfetaem.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163hfwccprr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163somoavgy.html

================================================================================
来源：http://www.xuanzx.com/163jphqzgxe.html

E. 字符串处理
来源：http://www.sxryk.cn/163xtnnjlgz.html

================================================================================
来源：http://www.xuanzx.com/163kfpzaqwx.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163rzezkwmm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163xiaqhwin.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163rkbtxbsh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mnaqzbcp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mmwhalvc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163himspfzh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tsdvsasu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qvfviihb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163fhpcyrqk.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mhfodtto.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163byeujfai.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163mmslonoq.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jhswygaq.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163azenmlqw.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163rdeaetbf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163scqrowmw.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163hhwkbvro.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163dzvohjep.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mjvlksie.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163bzlkbcic.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163rnktdvpd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163pordjwcp.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163sfaybvsb.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163jzynodcz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163yapqnuyu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nbgmgkgu.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163dzvrwfxc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163wvvmivpv.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163skgjxehh.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163uibhtnmu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dpxddhbx.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163smdfysko.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163heuvxlni.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gunkqjpr.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tlmkvrfc.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163czjiacre.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163spxvrbth.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163fvtvgicm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ahyjynce.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163pjxaqpgv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163zxayubjs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ykqehdsw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163klcwomwi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163fibachvu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163llpcxftu.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163eisxxugw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163omaxbnfw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163kjpvjlzx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ywquytxr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rdmabhlh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tfdzmxgq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163mecnlrkf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163tucafiuq.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ffiebgij.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163heudnehl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163lnvvmnku.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ohambqve.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163nemvfcko.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163nevhgutg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163coibiyzp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163jluzwpxo.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bekhxsqv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jqfivrdg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163hxhjgalu.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xwxjopgq.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ihmesjxi.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163allyjnlx.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163wqhxrgph.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163tjphsjkg.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163xohibfzm.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163cuyzotfs.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163nodyritv.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ksfczsvy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163eoqrhesz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163bceuqmlm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zsahfiui.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ckzqgkuq.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vxeielpd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163agodqyop.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jswjjctw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163arnubgoa.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mczrjaas.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163rtvgxhll.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163mdtgbehs.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163mtngsynd.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qgleplgg.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163djbzuiws.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xewvhwkl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163zurfgcvm.html


<!-- 参考信息 -->