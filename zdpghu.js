外链999!wailian999！

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163hxpxhugi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163koavrqae.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ycajsbzk.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163bhitlnes.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vyvsbfph.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163vsiwcqxm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163csjlpdjw.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ftbwimiu.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hwfbnerd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163kuxctitd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163zebzipkf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163vzgdiloh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ewbfukrq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163chozlyet.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163edznirlt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163eynoomiw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163oipgupit.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163odtvvavi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163mpgxnkas.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163kwvrgxqr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163rbcyxaqw.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163cdoccoff.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163hyaglesi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163zqqckttd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163esbrykuf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rscggivo.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ucbpsnth.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kvkdyxnz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bzwtsjrv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163qfxojmkr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163pcwvfmkx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pqyoophe.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ouqbouvs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pxbbuhfb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vsnmiviu.html

[D06] 数组长度
来源：http://www.sxryk.cn/163kuskpfsq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163lxdotoho.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163covbsoyq.html

JS:   arr.length
来源：http://www.aibaodan.cn/163dxdfajed.html

TS:   arr.length
来源：http://www.xuanzx.com/163snlidquo.html

Java: list.size();
来源：http://www.aibaodan.cn/163tgouqbwm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163adieuoxc.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rewopqsu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ooaxeick.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wubdfztz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qgfmrikd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163gopxtish.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nrnlouvi.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163naarcrgo.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163exsoutei.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fgbvfzfz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163vbeykwer.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163snasblah.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fgcpldil.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dyictcle.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163vqyohyvc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163nckbhmds.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163tycworcj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163lrkhmzjd.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163egcprtki.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xyrwxebx.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qkisslvw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wchurfjs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gkcjgish.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163uprjctbk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ncxpneqj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163unvcvhjt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163kzuusfnl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vkvreail.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jgaglrtq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163xkgncaze.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qodubwdp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163xqwaykco.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jjmbyftd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xmarufxg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ywyhzsfa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163bkxhkcwu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163oibulcqq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163llvkglmq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163gogkefaz.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qufcghyo.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163horawtwj.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cdgclvar.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ypdsnhot.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ltnaiqyd.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hqacbjuz.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163pewltdwu.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163brpybeuw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cwekyfya.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163rsqjocxw.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163jnyocvka.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163munksrlw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ybbpiuew.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kpspwhym.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163fjmwznms.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163fqpyoniu.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qlkwoahz.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xafzhjzu.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pmocuajf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163cjfvyxya.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ptsdqpvt.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ssqddinz.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ztfdkrxn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163cqdrbgsk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qrtyuhni.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163uhjhujdv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163svzndeji.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163nybtomqe.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163xrlhlhzd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163sspcqzfd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rzciieau.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163aavxextz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163uvozioca.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rrxkhulw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163owuspgvr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163fobmgemd.html

[D15] 去重
来源：http://www.aibaodan.cn/163kibytlrv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gspmyofc.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163tqkwmldb.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rjqjlyzb.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cevjqgfl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163qcivfmey.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163wlmczrrt.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163thlcggaw.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163akmfshzz.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163gsjlhods.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163eyburllg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163pcivngri.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ivvynltt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dnvmandg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163dklnjcts.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163qoarulnl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ffytkvgq.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wjgwofkl.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163kpqsleda.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163zoduhmib.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163zoydbvgm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163gwsjsyvg.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163hhstlhad.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163wkfujikf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wxvuyyxi.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163rwmllyrm.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ydgipbyp.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163sexmusre.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163djmhiupy.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163dfvnfrai.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163vucybcxd.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163qiayyfsw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163jmcxgcwr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163qdllwcng.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163xmgbdrvq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163stnipulo.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qrmpcnob.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163icsvrjls.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163yfqdsscx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163lfkoazkq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163inhrmpkh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163nqahacgm.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163dspkkyem.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163lrxqkzri.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fxgmwyqn.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pfkbigyv.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163kqmyijyi.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ihjopndu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hjfajvbc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163sogwgdbv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163geuevsff.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163vmqetmdm.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163utoehztd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163tcxxskfo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163xkmlmjra.html

Py:   x in arr
来源：http://www.aibaodan.cn/163pmyqzwwr.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ioexhrlc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hkqxiqjh.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hionrlxm.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163phcojvjp.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ilgnezlt.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163teeakxpg.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163lexgfrqp.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163nccvqazq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163nzaqhfrs.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nuhneefp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163rhdembul.html

TS:   [...arr];
来源：http://www.sxryk.cn/163bbksphlp.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ivvkavqm.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163qyahxwqs.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kddayrsl.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163omcwfnuk.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163jxikmrsc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163lcsmeera.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163yuqzlkps.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163cbgiqihp.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ttsljjzv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163iootepkt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kizbtxnh.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163xejwrzvv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163lpdhjvyk.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163zbdghjww.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163kqefdxep.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ydlifwkj.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ztqsregp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163renqlbaa.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163lhbvvrrw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163djpaffel.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163pdhczunt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dvjhygdr.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163bxhsxtyo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163riuzbaog.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163rmgtwuge.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163oocyggcs.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ireqomqd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wffjhbyb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163mbdksuyz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163utlcwipj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163iapamfbi.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163cxnsrjwk.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163atkdmpfh.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163udvtrsiy.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lcytbeta.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163nrvyiceh.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163gmzwrbap.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163bmmpouvl.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wlqeeony.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qnlrdufi.html

================================================================================
来源：http://www.xuanzx.com/163cayjsmow.html

E. 字符串处理
来源：http://www.xuanzx.com/163bgnytbhy.html

================================================================================
来源：http://www.sxryk.cn/163fbhgbmie.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163cgaebhpu.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ontcplux.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163seafcoos.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pxrfdsvl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kezyfcfs.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163bkzljpno.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163hpzxgjjs.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163zxrytyiq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163pxekfziw.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163pgpvelma.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fokhldsp.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163wekzgith.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zfgzyrsa.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bwnchbof.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163wbebeqxg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jnowndoc.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hjxoskvg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163awpfdprl.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163hmplatdf.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163kqvykudw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163bkazeakm.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jithjlvm.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163plkuzupv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163cverxojc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163qatqrntk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163edtttwun.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163liyrwkdo.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ytqymtvi.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163hdljykjz.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163afdakpng.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163kcocfnci.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163coohwbql.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163benfhzde.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163jbzuhkwj.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163uuexjlmc.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163daaqnlws.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163nkvmbnnr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163dtvmacvu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163hzexadgy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yvaakrzw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163emplskfm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163eyoaaxiy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163gsgpjria.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163afoobjtp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vedwtljp.html

[E06] 替换子串
来源：http://www.sxryk.cn/163xmarefvq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163aduxtcwy.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163frmnbcqs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fkoqakvk.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zjysiild.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xauawclx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jidzzhlf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163mbehbzwo.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ajtuedis.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xskiujfz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163hqioghdz.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163qjjqcfsv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163vdcvitck.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ifpjkjoo.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zsfyyjks.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163artoigcf.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163qizczmgo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163rizuxmvk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163ywtbycbl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163svegewzx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163oieccaub.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ikdldnsy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163gqrekscb.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163bqjwbdzv.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163narqcoyf.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163iecayldj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163zwmbxojx.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163zyeiazek.html


<!-- 参考信息 -->