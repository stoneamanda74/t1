外链999!wailian999！

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163amuvvubs.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163kyxnwjiz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qhtxjqcn.html

================================================================================
来源：http://www.xuanzx.com/163pcjxargd.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163onfweiks.html

================================================================================
来源：http://www.aibaodan.cn/163jhcyxiqc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163rkvcklga.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163tghfokzv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163utjmzjwm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163vqicgyde.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163wymlzmui.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163uwxrmmih.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163mjiuqmat.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163lbiotzps.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163coenlzni.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163lopwzirk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163muywqnbe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mlalzkto.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163swrbrdej.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163oahogiew.html

Java: list.add(4);
来源：http://www.sxryk.cn/163zxfcfgfh.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163gyecrrfw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ptuuaflz.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163eimskdna.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163jjtgcote.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163prmmirkw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163eaivdkba.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163wihpthem.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163xwxosfih.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hdkrmfdp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163pzanqamv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jwrxifvi.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ognzjqbw.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163pjirkqsv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163qofkowdw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163iuehzelj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ekezwwin.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163avvorbmu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163brcdxjxf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163tkqmfwpx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163epsxlywk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163tuynjdcp.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163wsmqouhf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tvwfnuic.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163kpldxzok.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qzttswtr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163dzoybzvx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163kerhmfhb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163rdxaurgb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qzinwjje.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163mezjelmi.html

[D06] 数组长度
来源：http://www.xuanzx.com/163xpyhlsjw.html

Py:   len(arr)
来源：http://www.sxryk.cn/163xyhbilby.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wafymude.html

JS:   arr.length
来源：http://www.xuanzx.com/163pwpslpuq.html

TS:   arr.length
来源：http://www.xuanzx.com/163nreoqxkq.html

Java: list.size();
来源：http://www.aibaodan.cn/163tcuyfgeb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bakscwuu.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wnbvaexi.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163twtfwjlz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163esivoxrw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qsjuefvk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163upwobblv.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lrulkihz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ksxfsxzb.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xrufxgga.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rlxmdndg.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163docftwan.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163uccjgono.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ahqmhnkz.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163htjdfypx.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ttgknujj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163iqsqexlz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163eyzjawlk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pjweulav.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163iczhzcjt.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163eqfimefq.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tlmoedze.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ewudojrk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163slktavdx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163zloqbivx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163dlasfvfr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163deocgcga.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163jfolvhzq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163krvfvcap.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163pjwmmtkq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163tpelubtg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163lmbhrqfd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ipsdfigj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wuyjcwxp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ivzxswcc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163sxsuunwf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163umolgqqb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163iflaqwon.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vjpecjmi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163dmnlczka.html

[D11] 反转数组
来源：http://www.sxryk.cn/163zlhwqrrn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163lgzmbefb.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163sfblasyo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163agnxpadm.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wujtcbon.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163nhpbydef.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163kythjqtj.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163jdfnbydu.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163odhdyhsi.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vkrepezq.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163aanixoub.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163otdyrmpq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zmybkqqm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tgxeuirg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ipgesgvm.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163fesleckw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gwlouxwh.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ysmmphaw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163bkvmdzpa.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163lpyjalik.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163dnqekxhl.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gggmyroz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163oytzuebs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163rgyobyqw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163ytocwdwq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ktpzlqaf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163pwuceuus.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163jdtgjwjb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qqsckfuz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163xgprdlil.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nynqshbo.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tkybcluq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163udqfmzqc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jvkbqooh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dmeetgvv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163swdbkhhu.html

[D15] 去重
来源：http://www.xuanzx.com/163wxtpmmmo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163llbtjkjg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163qezlsfuz.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uqzlbped.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163prbefgho.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163wsdxkgjb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163aridkpcv.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vkxqvrma.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163gnrqpgus.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bzhdkmcl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163gvmyfpjj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163djhnukpk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163gxxgsbnh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163oaqmuidg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163auhiltya.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163xrakfwsi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163mrysqmlb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ekcqstpw.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163qzcaufvu.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163fdzhgtlt.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163lagfpgit.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163eifmfqub.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163gwrcbtsi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163cauhwbtr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163kodgeypa.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163glwudcex.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163eqgvddif.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dwytvmyo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163uttdvysc.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163rijmoazw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163buhhzhji.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163yopzvjto.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xckitinp.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163nayrelbm.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ldkspnqi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163worcoovm.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ulamcfky.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163wprfxutl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rmjimvsu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163zqugsruy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163afqdozez.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ubfkvuia.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163tmpwnckl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163lbtuiquq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163bczajxnq.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163mrerdoai.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163xyewbcpb.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163cfekszbr.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cuojipnn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163uqxowfuc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163xfvzgxsa.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163reuywnml.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163pfrjdigu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163mmunvlmk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163yqwwyncg.html

Py:   x in arr
来源：http://www.xuanzx.com/163goaksrxc.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163njovzkrn.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163jrrpkoae.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163owhmpquc.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163gbzpydlv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163qdqppcep.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ymgwjfvl.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163iphkmlif.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163kuwwapbn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ohwymjui.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ocuestod.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163onigsuih.html

TS:   [...arr];
来源：http://www.sxryk.cn/163rcryhkov.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163cfyjfeug.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163amadxyzc.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ualmcqgg.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163uiyrxmzy.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163pbjocthy.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163axspwfvf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163vsqucvta.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ftalnpvk.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163rtccidir.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163mzcgunhw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gzwvupqt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163qrmirbeu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163wvcocczd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163byiidceb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163kspmvoir.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163sgklxdhy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163lemqsfkb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163yogvndnt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tbklnzdy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163hviumpop.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163fvjvhybk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163onaclujb.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163jggjzcfq.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163jrejktee.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163lvtmpaxh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163twxjaqep.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163uxzxdtcw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163yjkymunq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ovhypiud.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163yeekbivi.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163xdxulmsw.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163elkxxatp.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163ykokbyir.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163tasyrspx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jnptnity.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vgdefxyt.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163whppghlr.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163fddrywlx.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163qxruiajd.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163xoktshds.html

================================================================================
来源：http://www.xuanzx.com/163pfelwufy.html

E. 字符串处理
来源：http://www.aibaodan.cn/163gihtkrpj.html

================================================================================
来源：http://www.sxryk.cn/163dpodkjmt.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kuergmpc.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163oydacyya.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163inwhnwdz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163uwcrtjun.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163divoklpn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ywcxciim.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163mfdupfya.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163letbzvcz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qwuqasat.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163kkexbqzi.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163cabcocvc.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163glyhssvg.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gwzaaueg.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zqcfejdg.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163aadyqdcq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163kokjezak.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163lomqgtmz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163qxnimgmb.html

[E03] 截取子串
来源：http://www.sxryk.cn/163xlgjucoy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lgxdkwiq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163uazowyal.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ideyirni.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163gqykkmox.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163pwsrshnb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163grskialj.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ihuddcpt.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163wqdrovfs.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163czvevrly.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163kssfwzka.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163rcrfbmkl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mvlkiueq.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163sijbcdht.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lfknkwmj.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163wngltpwj.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163pmtthpyt.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163dufardsx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163kqebvnsl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163olxibnns.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163rqifwmkk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163kdmnzouz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hmezirkt.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163zaagicso.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163gtflpidk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163teoyhenl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163scnzcerf.html

[E06] 替换子串
来源：http://www.xuanzx.com/163yzbubexl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163hsrawcct.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fbnyskgs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xutbluiv.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xwosrywp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163eoddzxwd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wseghlvr.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163gdplcici.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163iwrzlnju.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163fwfbaiqy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163oesccltf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dsqnyngx.html


<!-- 参考信息 -->