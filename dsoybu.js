外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wkwqekpb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163jskdpkrq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rrwfqknq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163foralrnh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163mptogigh.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wobelpok.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zrztozyp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163cthgsnal.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163njceokve.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163hxexaanc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163vannsxjl.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163mfaxrluu.html

Java: list.add(4);
来源：http://www.xuanzx.com/163dxukfzmr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ywdczyps.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163enidwroi.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163aydjjztp.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163pdauiukb.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mzyvgkqv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163iebmhxtm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163suldplfq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163uodmivlx.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qbfhaoxt.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ksrdxwgy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bavxjksm.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163qhfochyh.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vsgynevj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163vndhkhta.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163illcolga.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163kegdzczj.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163kzgscgqt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163unvnhnmr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163spespflp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163nergntfe.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163mttdqyno.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163cnvbydpk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qknsdpcd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ljkocuds.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mnxuhflz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163qxsontly.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163jzlefvxs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163vmjmdiyt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163udajmofj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qmhrktez.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zyjszbkl.html

Py:   len(arr)
来源：http://www.xuanzx.com/163afbtftpq.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163crgpaqzd.html

JS:   arr.length
来源：http://www.aibaodan.cn/163rlgiumgn.html

TS:   arr.length
来源：http://www.sxryk.cn/163evcwxhff.html

Java: list.size();
来源：http://www.aibaodan.cn/163mpwysyoi.html

Go:   len(arr)
来源：http://www.xuanzx.com/163pkyjqgkk.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163gqgisoxw.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163aivcigyb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nyusymuw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163vgognvyz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163xsqhfufo.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163woshmpum.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rjncnntc.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163cwphwtqa.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163grnrxynl.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163bvcyvwuu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163djkwmkog.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163yvknqciu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163lyfbhcln.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xdspaixs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dzdhandv.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163laxhjoav.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163kkzefihb.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163kslbyygl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163hzwozqlr.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jberbnap.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ellnafdp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tlmrqcuk.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ipskiiap.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163dmjfuape.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163bonousvn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163utqcwcpn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163fovvgcek.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163eaetzdlg.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163kvbgsmyz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163cvpjlrmb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163evzcjzus.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jvdcutzg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163osigepux.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bafkdnhd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163wydrxqjt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ekupdpsj.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163tmiqnvey.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163vzbchlno.html

[D11] 反转数组
来源：http://www.sxryk.cn/163wpgeylbk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163aebfxtqz.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163uuwdtzra.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ajlwcjye.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ynckoxgu.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163koszuxtt.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163gwiyztzj.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kjotiobs.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163bddtqwcd.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ysomemla.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163rjctpfsg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163usjgrxtr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dutcoqik.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163blxavesy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mpyugybp.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163dohmhohn.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163uuysugvm.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mkixlsla.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163sxgcjtzl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163haockdot.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rlfarbyw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dizdctyv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pzhojsak.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163woqydayr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bqfwjgkh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vpaapmka.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163fbxgmsaa.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163elzgcyfq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wagczvaa.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ghwkazot.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jzjrdxao.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pwubshco.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mhxnexdv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zisuadsm.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163daltbsrv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ctkcmbpm.html

[D15] 去重
来源：http://www.xuanzx.com/163ssgacfus.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hlstecka.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vugrmbnr.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163psquqavn.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163sdbwnoiv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163mtqfbyei.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163betxscme.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163nqthwwjz.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163jomfrgdz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163fmyzrzhh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163uplczhtv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163zbmsetfe.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cjxokkoy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163tvfvdcwl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163embqxity.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163wyfxxarw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163etmazxcg.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xtdyrwag.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ludkhhmg.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kagtnmho.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163csntogwh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dqxvypnb.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163uzazeqge.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163slbukjob.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jynnhcwc.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163qzyabepj.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lnkvrhrk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163okgzzjrh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wnaygljm.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163vtxpqccq.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gvojhymt.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163qkykibam.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163xrxszbgw.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163zjjknwfd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163gxslmawc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163lcnpvsih.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ysnrcrkc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163sesuwuaj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163terlzlbm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163lfkjiypq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dhvggina.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163doirdevv.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ovtzrmmx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163uflioipr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163iapodckc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163txyghdih.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163teldlqlo.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163lrjiacza.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ytxhwmtz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wxcvfsgu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xjjwipoa.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163tfgptynt.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wltzcnah.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163miuyxoif.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163witkhbed.html

Py:   x in arr
来源：http://www.xuanzx.com/163nliteevi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163bqmbvzho.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163ehxvakkt.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163caxdrjlw.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163yimgeavq.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163henudsyd.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163uhsfvjsi.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163kpcezyvx.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163yiywwrht.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163jqrapsjq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163vwvlvrym.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163qynrhher.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qhbshenp.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163hkzhdwzw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163drmfpngv.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163qgfsiqvp.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163vjwicefc.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163tyllihkz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163xmjiyutp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dvegbxdp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163drixruiv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163urfjzjlp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163bsgmhanc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163eaggdhon.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163smuquoxm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ppsmbxqh.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163wtyjorch.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163kmcmksqa.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163agjemjsi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163nfebymfe.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163cnecnure.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163xpxsbrqa.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163owcqhdej.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163kvuiuhrp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tmcfssih.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163llnjmawe.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ezpksqld.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ibjaudkm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ggijmnra.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163eouuswdp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163thbmofby.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163uesoaszy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163itpwwifi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163feqlesrm.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ebwrfmht.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163kyycmujm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163jsfaibnv.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hgmvqdnb.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gabluwxw.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nstjjnzj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163qxlixgdh.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163qgikefmh.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163xprucgyo.html

================================================================================
来源：http://www.xuanzx.com/163ahpnqknr.html

E. 字符串处理
来源：http://www.xuanzx.com/163gbbqraao.html

================================================================================
来源：http://www.sxryk.cn/163qsfbvfmn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163ivxpfzbf.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163gnoiassr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163egzzcqyk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uoquablq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163sjstemba.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ewuczfsw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163mjyafagz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gcojvqfj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163penypsys.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163vjkcyrlx.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163tnyealya.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pjhtvzoa.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ocyhzqer.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pekafifh.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163vgnaacjv.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ilxzptzq.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ttqpefpl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163lrahnizq.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mksielal.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163zoipmwfw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163nkuanyca.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163eiyjnype.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163gexdbzfu.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163keakneuw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163pphkktqu.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ysnefudl.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163xamwfhqe.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163tbgndiry.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163jfdxlfzs.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163mnpylhic.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163krjxuksv.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ocpjgxfn.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163wzmkxmwi.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163qybkoyko.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163rdfuiyaq.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163wujmkprk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163nehsebqp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163uhijvpls.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163yvyqdwkv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wfhfujzc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163nuvtloej.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fgjpayai.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ulxfwurd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163oqmmrovl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163ufyvgjka.html

[E06] 替换子串
来源：http://www.sxryk.cn/163eamshikq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163attkpvog.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163tdihgfld.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163waoqoava.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163unavdeyr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163afurgvos.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qvjlpoxu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163lzvpocwt.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163imprjwrl.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163byudtflv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163fuxjbyfr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163quxgycvh.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hllkywfm.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163eghivblr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163rqxvgxtr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ewpoimaj.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163jknsqniw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163lzlhhmkw.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163mvpgsqck.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163oadhmxxy.html


<!-- 参考信息 -->