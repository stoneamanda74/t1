外链999!wailian999！

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wxjbgxoy.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qbqdfmxq.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cvoojxzx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163yjcdyxch.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xotbiily.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163quqkbene.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kmxlltfh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163kcdiylcn.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163tiglfwxj.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163eurkqggu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163womjhzkk.html

================================================================================
来源：http://www.xuanzx.com/163pzqazrji.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hewoorza.html

================================================================================
来源：http://www.xuanzx.com/163aeieciza.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163zkwfjytl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163lqngdpsa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163elvljulj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ycqaagxx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163feqxctvw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163eubzoorc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ziplgpeo.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163yvknqipy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163fzetnnvs.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ndiuhmko.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163lytrhkse.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163toaftqlc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163jwwfirss.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163qazutbpl.html

Java: list.add(4);
来源：http://www.xuanzx.com/163eotivarj.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163idebesaq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163dpymxcgb.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163seoejocg.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163akxlosxc.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ngnlijog.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163pmaqmfli.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163szpkzoad.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163gfdqjwsz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163febjxvrd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163wkjnooam.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163axlqaxly.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163fsuajvct.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ehlqmghk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163euwdsanq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163kleyvuel.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163wcpoylhf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163kqfposke.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163iljualrl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163aorjrdbn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163atzfvpas.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163mmwlzjcz.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163tpdrvdsd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yscdnqoe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163abchmoyu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163golyrscw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163kochlhab.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163itbpjncv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163wpojwbnu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qbwmlrxm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163itpraxcr.html

[D06] 数组长度
来源：http://www.xuanzx.com/163dxdigfuu.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163rjxhveom.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zkbzlmir.html

JS:   arr.length
来源：http://www.aibaodan.cn/163izgxrnac.html

TS:   arr.length
来源：http://www.xuanzx.com/163wbyviojk.html

Java: list.size();
来源：http://www.xuanzx.com/163eshvufxh.html

Go:   len(arr)
来源：http://www.xuanzx.com/163bdlcktpl.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163kgvzrhjz.html

C#:   list.Count;
来源：http://www.sxryk.cn/163axtnqnma.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163fbpknogl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mwnatdtz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wlpearkn.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hvgrvzfn.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pbcddzzm.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163cclyzowa.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163cifkqbas.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163cwsbrhnj.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163rdsfplce.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163aupykttn.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163emszcqoe.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163nohcnalt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gpvjjmnq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163gchkrvxa.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163gzllionp.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163hknvlybd.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jdklcfry.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163zrkqcabn.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163oahswvkc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wpjhdcme.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163wtjxdabx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163wpkgpptq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rzsxcdee.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wwsjsnjd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163iyxbjmxn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zaxfegmv.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163nbaumadf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163fbzdyiqf.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qbsmowib.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rbnlscjg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163sfmaulra.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bifvakjf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163iwjueolz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163oszwzxvk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163txepearn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163txbrwncv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163cztfnibw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gikwaaeh.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163hjtzqjch.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cqpoxpjc.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wjkqdhlc.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163jzesloiq.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163urecrbnl.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bahdievk.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ulvulfbr.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163gxjtpozs.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163kfvxsogn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rwiefqpn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ddvzvgrv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fhiqppih.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163eeilqsyy.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163zvcrppwp.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163edumdfyz.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163paamllku.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pmltnrnh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163xijskdtq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ffesxxbo.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vokjubkz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163aboqdvgn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ddeehyan.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qxbtejin.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163iklmzdkf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163loonceju.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xsdzhrbr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163oysulrap.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vmtjsjrm.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fajzhpjq.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wkijvzgt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163xoznywfa.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ecdwtreo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163wcjgnuyj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cdungsbh.html

[D15] 去重
来源：http://www.sxryk.cn/163wxftyegx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uvhyfwog.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ezipwzfg.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163gbhtbjof.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zcgjrezf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163mgzbyamc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163afhpnvmc.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163cbjyfdll.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163sjrcnezg.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163hapgfwfd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163thycwiau.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ysfktxup.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vyslqfsd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163saxpllgc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163rxrgkuwc.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ewnobaul.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163jjrbfxuk.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163emwrtsae.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163vtkvusna.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kuodtluo.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wfrjrcuu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ktyhdjps.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163otryrszh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163qmizjlje.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163zgbwqfrg.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tdgqnjuf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163mauautcb.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163paxrbuun.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163kzgnoixu.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163fpnucbcv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gbavttdz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163dmismumv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163zrvqmqbj.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163idyuaamu.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163wsbqexle.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ndldvhic.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163aqkwquza.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163wymlgwng.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163jsurwkpm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163gumvvlnn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163gqnoctti.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163bdrmngjj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163fssgfoxl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163safoyhzl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163vshyoymw.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163hylsiggh.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163mnsqpgzp.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xfatovub.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bfnpytno.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rpmpqdbx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163zomyklsm.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163jxudbqtw.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163bfqxvhvi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tysvptzc.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ctnqxehq.html

Py:   x in arr
来源：http://www.xuanzx.com/163znylmyvs.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163xvtkubio.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163hwdmaafj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qwneyoov.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163vylavnld.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163qfslkfcm.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yqnhnntp.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163obsdqmww.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163wjcvpmso.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163pybojvri.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163lfxuymvz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163nfgojuau.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kskszmil.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163mtrcbzcc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163wcnmuvzh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wygpjgll.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163mothojpq.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ktacociv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163svcybaql.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163xhwjacjz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163otksxwkq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163uzmwuigm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163zwspypwa.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ihblpres.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ufxncbxa.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163xilfycch.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163cpinxkit.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163dyufptoy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163pbihiyge.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163bqpxqtmr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163zkgrnbko.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ejcmvzyo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163pskzuwsg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163uhbrfosc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163kfjvnzit.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163mzvsfyvt.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ovnpfkrk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163bmrfbapj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163utlnlyjr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163brdydkmn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163tqstaovc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163krflhigu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163aswlxzlh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163tqjzwbtn.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ptyzpwbr.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163roiwkare.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163bcgfnzuc.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jqllvsvd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163klzupqcv.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163rodpkaxr.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163gbjcngfc.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163rbropfhf.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jbwprknw.html

================================================================================
来源：http://www.xuanzx.com/163rhsaidkv.html

E. 字符串处理
来源：http://www.xuanzx.com/163pqfnkomo.html

================================================================================
来源：http://www.aibaodan.cn/163dxwsepwd.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163rszfprct.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163blvjzryv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163bgunkcmn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163otdazrre.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pfgcubmk.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163srohncef.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163yvbteyjk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163gkwctgfm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163pcmprbob.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163axkcfido.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fkbclubl.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163umgamblo.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163afvswuuc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163riayptap.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ayblsgnm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ccekxjna.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163eiszmaxl.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163jpmkicbk.html

[E03] 截取子串
来源：http://www.sxryk.cn/163rdmgwlev.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ytuysrlu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163afagzjut.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163smqpcpoj.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hgajrodg.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163mgzpgejj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163hwqzveps.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163lclmhnyt.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ydueurbc.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163qpwwuaxx.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163cshmafrk.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163gmvpgufh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163albutoye.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xopnnnyb.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ivjdfhad.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vqlmdaoo.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163tlagheof.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163tkofqjjr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163laauqvvz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163elcodtea.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163dnupdore.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163bggcrstv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163hnrdnsai.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lbckgzym.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163svmwkhsn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163kqhzskzc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ogkjhvuj.html

[E06] 替换子串
来源：http://www.sxryk.cn/163amxmfrhq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163bsufglyg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163lwvnrznn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eulyyrsh.html


<!-- 参考信息 -->