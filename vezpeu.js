外链999!wailian999！

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ronugdgn.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163bcyprhxv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163qgincszt.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ndfqoins.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163oaonjaet.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163uxnlyrda.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163dvjefykr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163bfkccqle.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jkxkdich.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zxeoavmy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163bjbwokak.html

================================================================================
来源：http://www.aibaodan.cn/163guwnjire.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163cxkfwpes.html

================================================================================
来源：http://www.aibaodan.cn/163spzbjacm.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163tljybwpf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163adtrppax.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163duixwupi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ksrmowgb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rnbcvfiy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fpdaeksg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163brihzjvd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163vcycvowo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163oefqigsn.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163tsjpnpkz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jceqllvj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163wkzxweqg.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wlkuvhyh.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163xhxgvubq.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163cvazjwbm.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zstehwwo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163uysueqpv.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163iycuhafx.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kxzneehd.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mmrlwcdd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163tnbyfgnf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163aedhneve.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163fkhowxwv.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163eetsdysm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163qqlmhgvr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wyazyyuw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163vjelklnh.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163dywiciwv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163bjtjnxzr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163aadjahbj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163nxbjhkti.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163mvezsvax.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163rnofywyu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ydtkrpeb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163bsueguhb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163khjvtoxc.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163obnnzmqx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163invjrdjj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ldrkcgev.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163raindyec.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163oqfucmyg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ockliuxu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ozctzzth.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vvpsprun.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163bbnkidyw.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163sccasbgv.html

Py:   len(arr)
来源：http://www.xuanzx.com/163tkmkwjha.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163axhgfmdf.html

JS:   arr.length
来源：http://www.sxryk.cn/163vvatltyb.html

TS:   arr.length
来源：http://www.sxryk.cn/163swwhubct.html

Java: list.size();
来源：http://www.sxryk.cn/163ewrbmbsk.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vekhlfkm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163qrlighlx.html

C#:   list.Count;
来源：http://www.xuanzx.com/163linfgafd.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163rayhddvw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163djzlyhbm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vhnuhufm.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ycgvqysa.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163buhzayxh.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163yrbdatcm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163upjooepf.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ekhknkti.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163nnfjksbm.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163hilcrgtr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163pkqpxiho.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163qkzobopm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163vrcwteev.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wlchcqdh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ymbqdnys.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163jsjxdigz.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163fxvxtkgc.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jastumha.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163pufmckka.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mmgkkpgx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163durcxvfm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163cwrgjbji.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163necbsgxb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qfnintig.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163fjfkfase.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wrlfmnfz.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163pxkpryst.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163pfrpdrep.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ikndxhcq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xrgcrskg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163loflknux.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xgqmlmem.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ntqruoml.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163gkahyssu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ybrhvdip.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163tvaxawbj.html

[D11] 反转数组
来源：http://www.sxryk.cn/163zdzozrin.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163lhtybqtj.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jlirtxnh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163uodpgnbz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163czhbwbul.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163esuwhhqm.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163zrtdpexe.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163yhxksbfy.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163lxpxxczv.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163urjhwizk.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mbjgppon.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163sghiamma.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fzudnvja.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kaqwbwze.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163mbxkkjoh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163vrwxtsbj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163tktgiznt.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163dsyuzzzl.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163jtykxbdo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ejugfqxu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163zwgzpswu.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163buexbvfm.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163fslswlnu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163zjrajhjw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163imjcwfug.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163pdpnpzsv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163bdutqroh.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gukjjlvz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ghwtngfy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163qqfkbjmq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vfbbesim.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163earqppff.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ozzewbdz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jcxmlpcn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163cqbrxlvu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dfesjdkm.html

[D15] 去重
来源：http://www.aibaodan.cn/163disbqywq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qbzfcbau.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ctrqppnq.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lwveptzx.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163udgyunnh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163pcheucbe.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163wmxekwnz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qfdserlk.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ubesftrj.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163dkkmqpev.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163lokswmlt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163fiojfgpg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lsalchmo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xzilgbpj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163tzqmabpv.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163zpobpevf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163tvpxophz.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wdxsqbyb.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163jdbbwipo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ycikivnz.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163nhwtyrsy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163sgfrsyyj.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hmzicfzp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163tjnjowor.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163atiqlimc.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163eihuasfq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163sawstqby.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lpailjdy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hxspbjhu.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163zpjbdcsg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hoyhzznm.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ucnbuwue.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163doifigqo.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163amrwsftt.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ujwumxbb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163dkgamxuo.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163xepyygyj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jhakowor.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163elypujft.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163fvqtwwsq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qkkvkdfa.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163cafqfoia.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163krmxzoxk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163quodhqtq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163agikzkke.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163zmzyxrqy.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rlcgcusn.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163udgmtlfx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rhamqvgw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ygbnlreb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qjekucjr.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163svjpmyuu.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163itfptieq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163rovqdssp.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163zscnhjqr.html

Py:   x in arr
来源：http://www.xuanzx.com/163cpwslcpp.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163gvrcqwil.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163gwbqmrqi.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ycmhqczr.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163tqeckien.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ssxhaubl.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163fhmdekps.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163dmbtqvvl.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163cpbvearh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163rwebvyqk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jxaytbck.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163eehgspug.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163pfebmdab.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tiapshgo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163vcsbhtiu.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163uhdsgwhz.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163wdhrgbgk.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163nbhlcikn.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163vuqkrupl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163sgxipgxe.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ybfpfwhn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wavqcdio.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wiunktcf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hyrjskue.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163gscuyfyj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hrpiuqfr.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ucdbepsz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163zieellsn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163cfxghkny.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jojgnpcz.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163bbulgegs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163xqyzumjv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xewyqjwk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163myljynht.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163wrqxclsd.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163njdflgon.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163cdeipasm.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163tuairhju.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163dyhqbrij.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163kiwambwd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163pdlipzel.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163tuveatoo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ouapxuen.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163prajkqgv.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163zvpllrpt.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163gxmlciad.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163gzyrutnx.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163lqybmymt.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163lcrhjoan.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ttqoprky.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163iakgrjpb.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163bkunbdan.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163pepmwjmn.html

================================================================================
来源：http://www.aibaodan.cn/163rafzuddu.html

E. 字符串处理
来源：http://www.xuanzx.com/163vqstwkeu.html

================================================================================
来源：http://www.sxryk.cn/163tnnvznau.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163pefkrmhk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zssiachz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163rjcnjfhx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163aslazbed.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163nfjozyfu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cbecnnmo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163mnewfqqt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163wcmqhrwu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163jcpazwhy.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163elnxoymp.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163sknzyxob.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163zojnmygr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ezkxxyqw.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ezjtallg.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163plewzmno.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163kjeucmfy.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163souoftal.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163lhptwagr.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163rjwarquv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163zuzipzmn.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163hztaivtf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163oodyovwn.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xaljilum.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163uebspfxj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vdjqxuwr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163wpslrlxq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163qghmvymi.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163umjmmckr.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163gseihxrt.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163gzjaznuk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ikusvvvu.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jdkqtckx.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163rcogpads.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163nihbcpsw.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jhympxgk.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xhauhxql.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bupbbkso.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163tlyewzyt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163wejpvwhf.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zigwlvje.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163ioqldhgf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ubdeasdf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xvblmhsw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163mdtigwjc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163tafrxpsz.html

[E06] 替换子串
来源：http://www.sxryk.cn/163aahnxemz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163xydogbpr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163yivhitjx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bwavsuyf.html


<!-- 参考信息 -->