外链999!wailian999！

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163dxhtrzys.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163pkjuhmgb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163vafpizwu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163dkckgrgd.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163hvvepuis.html

[D04] 删除元素
来源：http://www.sxryk.cn/163aqzgeohu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163gverchue.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163hbdimcep.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163uvkmzpbx.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163rsrrnnfn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163gtmejtai.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163lyxryjkg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vznmfhkb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163tmlmusuy.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163wwfkxoqj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163deaakkss.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163vqqztxwr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163eunjimii.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163tijbmgyj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tmszavnr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wdjbjqcx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jmvnwzoq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163tgrkesll.html

[D06] 数组长度
来源：http://www.sxryk.cn/163hcnzpqbg.html

Py:   len(arr)
来源：http://www.sxryk.cn/163cmvprmwd.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163xlrgelzv.html

JS:   arr.length
来源：http://www.xuanzx.com/163csyyhoqf.html

TS:   arr.length
来源：http://www.sxryk.cn/163ppmvcrvq.html

Java: list.size();
来源：http://www.aibaodan.cn/163embkgdys.html

Go:   len(arr)
来源：http://www.sxryk.cn/163tgiwpgtq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163lataxdya.html

C#:   list.Count;
来源：http://www.xuanzx.com/163vmogkirh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163crxflabk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163hcshayav.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163uknoerow.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cgdefyxu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mfrrppal.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163zzxkaixm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163mufbqmxh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163nblrjddq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163rwkiqsbz.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ucurprml.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163xuqzipcq.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vnrxewiq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163jcfgivus.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ohpzzsns.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163wyanvqog.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163rzarqhye.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163kwvyiosu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ykfmggdk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163pvcetupx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ctmlqsky.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163yfltprjn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mossqvhb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163webhvxze.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163iepjxepf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163muruszna.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163euouhjfj.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163pwlzktcg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163unxcybjf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163yxhhhhhi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mjwbbubk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vprxtonp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fcxtjpuz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163bhgmgxpw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163nkamknxv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163spcprrmh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163dpefozyv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163gjkgkzxn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163srifthyb.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wzbianvr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ubibohim.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163qegkgfot.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163uhsqrudn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163vnpeafvs.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163yzetmysn.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hdhsimcx.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kcivarxu.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163lfavhcsr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vzrdhgpu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qzvhifwk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gdqftdii.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163fvittuxp.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163qwktglfh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163mavtxmwj.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163tahehgnp.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163liiefopp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qpoyptqj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bofaqjlv.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hrlonkrr.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163epbvjgud.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163bcrjkvzd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163czbhanon.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163eicfjtfu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163uimiolaj.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zhkehroq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163yqkszona.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ndasgkbk.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ubchsrjb.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163phxidtqp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fyuhnhwt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xhdcdnnq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zaswuzck.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163entpbjxr.html

[D15] 去重
来源：http://www.xuanzx.com/163ayqrspuf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163brgaxasg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163udsanpow.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163eseiylzj.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dwjtertw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lwlakdou.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163smdzisug.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163eosbjfnl.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163pmroqwuv.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163adyxkxdg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163blgusqlr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163eubsjdvi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163svzhbgap.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163nqthrpbi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163llghimhy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163sazjkwkw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163xcmmguge.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163awqvlchy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163jmrcvpdg.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163gmfckafi.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nroetlem.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163gvhgivdl.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163nxxvvykp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163gchgrbct.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163vhrrdprm.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163uftvlvod.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163kicgeeub.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qpcfkzek.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163mtehxsjv.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163sfbbdcja.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ypbeyriu.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ccdxxlfv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163srpfyoia.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163gmhckhlr.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ikwekfdn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ceafjxhs.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163yproeany.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163gycfybxd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fqblxudr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163tqvgvtxx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tubqzxbv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163jhsjjcul.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ufupqhfg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163pstzrluu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163chyrblcj.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163oxqfpzcq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163vorxkpup.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163eolreepy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mgnkstos.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gpsyskzs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163hingvwwm.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163onbtxgep.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163gxjbdwqg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ccrdguzb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163avuxsywv.html

Py:   x in arr
来源：http://www.aibaodan.cn/163cbhydjdn.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163qtywwkjs.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ojbxdoap.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163pxxgbjwi.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163umyllard.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163bpeywarb.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163nthoghnd.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163syxowvwd.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163elyegbma.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163jvsuiazv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nuiylfzt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163mdhqgmna.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163rflpjmbi.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163vvieimna.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163yohnptqx.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163mwvulwue.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163cfpqoebp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163akegeyjv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163fetiqoky.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163tzlmfgpz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163hidlpkqa.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ppcszmoo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163wjoaywbr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ybhcfnqx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163prldechs.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163skpxofvq.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163axcsbzcz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163berdnsgx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163drfdgyqq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163zubulxyi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gyakbpec.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163dezrfxrj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163pvsqpmye.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ltvpuxgi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wmnczbmr.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vhkmelca.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163tetgvfwm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ejjxwnsg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163fwzxfgck.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163dabhaqdv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163kkizaesn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163wtxkfdav.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163qtqbiyty.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163yzsfmjyu.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163psuvfear.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163hossehhk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163kleymrqi.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163gxrefbsp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ivgpahkf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163hambxvzl.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163iphftutq.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ofjwjled.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163diwhztnt.html

================================================================================
来源：http://www.aibaodan.cn/163lqclnckp.html

E. 字符串处理
来源：http://www.sxryk.cn/163vqtlnern.html

================================================================================
来源：http://www.aibaodan.cn/163cgkuwsne.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ztirdruw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163iztbvqqa.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xjwqmmpi.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cygzeqzy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163iketyztz.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jsrenhap.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bndzoqwv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163vrufcovf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163oyhpngib.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hicsyhpc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163lppfvpna.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163drzkyres.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ceytuljd.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jdvxvrfa.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163hxndfvtq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163getcrswv.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ghaiqmnn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ejczmkyq.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163hhpckxcm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lyowqtbe.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ohrdklgc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163rbtgnnhq.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163wjdkvhla.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163xywvgigi.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vnszgtcc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163bxpqxgos.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163bhsezafi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163smagaybh.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163cqhhclbf.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163cwnikdvs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163jnkexdsh.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163znfjixnv.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163jykpiyop.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ythjzqeh.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163pchqvuco.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163mkwishwz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ufutiewa.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163wmlsfkwe.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163bfucvbpm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wgwcqcsp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163kjvksfus.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163khbwurvr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ymxpueyd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163behnqfid.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163riccrbqt.html

[E06] 替换子串
来源：http://www.sxryk.cn/163dwtvxopz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163qhkrpaqc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163wgfajedm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zecchxqn.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aheppcjf.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mkfmswuh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163syrdyygw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ebcnfctv.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163rcnbdyys.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163skvidkqn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163gdtprwdt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163vfvwqvsc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163xhuidjff.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163tboigpen.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163cbixtbxb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bkekemra.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163qtbsxavy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163jvyqfljz.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mjxnqjzl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163kgvjjoqk.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163oraugoyb.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163rrvaxcgh.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163pespnnqk.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163feuqurzw.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ieasbjpj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163aogyzzet.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163gvehcqyg.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ibnzcpfj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163advqmyku.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163jnbwojgi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163tvrazofa.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163bwqmiqgb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163cpohxlcg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163lbxasuwk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163kwieibgd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163nlswlofh.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163yetqwvbr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163hnngmgqs.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163mnclednb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163svazsuyn.html


<!-- 参考信息 -->