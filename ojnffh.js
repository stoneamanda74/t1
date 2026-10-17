外链999!wailian999！

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163aippgboi.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163sgxflujv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tftrbthk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ppiswbey.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163alficabp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qcfqlaek.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163lxsofssu.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163nqixbhjc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163cixvubyo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163utsgmkfd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ojcajqcm.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163nsmqhtcw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163xvfzuzbd.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qzpqsupp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zjytkovv.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163znjygipk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163esnxrwbd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163aowbhjnk.html

Java: // 无解构
来源：http://www.xuanzx.com/163vyscnrfk.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163cyjargru.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ivkvpfff.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163eddvwevn.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gzcaecjm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163bfrcxgxb.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ljxflspk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ijlnrmro.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xflaacvr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163yqwcldtt.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ocybjcru.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163pkrnojns.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163sqjnlkdl.html

================================================================================
来源：http://www.aibaodan.cn/163ufaiedcx.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qqnywwsg.html

================================================================================
来源：http://www.xuanzx.com/163fmthebqc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163mocojtii.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163xignxewr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163uwcifihk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jbrzdspr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ezbczpwv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163tycjyjsf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163khvkmtuh.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163abyhobxn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163algoopwp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163oeiehjla.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163iswwiyfa.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gbkpzghn.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163qovdrbps.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163iobhfdsi.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jhzmvhcy.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163setiohnn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163miorogxe.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163madchflk.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163olkqmnka.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163rnebzobb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163pnoysgja.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163iusqlrli.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163wjwilocr.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163qtthdiix.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yxzhdcho.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163pgkwkzhn.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163luscrxzb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163smvzglsz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163zpqwyizg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163cuvmeuew.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163prrknzca.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163hytnbhpj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163gykljrog.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ukzpqiwc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ymcczxdo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ytmnmdms.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163wjievlns.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gqelldej.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ylvyufiu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pqvyyyri.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163yjdvddao.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163rgegypgq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163gyukblfq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kkfackbt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163xecvghgp.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163pdricdff.html

Py:   len(arr)
来源：http://www.sxryk.cn/163snvuhfar.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tetuyvja.html

JS:   arr.length
来源：http://www.sxryk.cn/163mbsegtlw.html

TS:   arr.length
来源：http://www.sxryk.cn/163curqupxu.html

Java: list.size();
来源：http://www.xuanzx.com/163ilsifexp.html

Go:   len(arr)
来源：http://www.sxryk.cn/163tqmktpvd.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163qiulubja.html

C#:   list.Count;
来源：http://www.sxryk.cn/163puuhqyoz.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nubfmpua.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hgwrikot.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gkausuzu.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ohuvexnz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rtdjodfg.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163gevgognt.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163okvivtmp.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163nkllqwll.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163fatrxqji.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163cfrzejfv.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vtvneetu.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163uyhwxgkz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wdbbwwsm.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163pckkhvlo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ffremxoz.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163esrnewaw.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wazbtjyp.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163enkuiorq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ililehus.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163riscwnml.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mghaprgs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ovphxkhc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163qxcdrqhj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163aoyvuxvx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163smbfvkyd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163knibnqcb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nfrwlbfu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163onkcxcvr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ufklajfu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hyfjadhx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lhutalnw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163esiexjsx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vbuxjfdw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ifrahhkm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163hipbvuxy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163elhluaji.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ioetuamp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163uuerssle.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163yotojdae.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163salsbftg.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ucbarxan.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163hkthiyqr.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ioypgmha.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rohyideg.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163enskdyzk.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163uoxbldrv.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163jhxqnjae.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ycwzhbxb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dzxfytrj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tzfjdveg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163cygsszgz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163yilyqahy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163nrganipu.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163psoryoni.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163foaolrgl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163vlhkhdeh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jhyxzgqc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gscvudqd.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fdzwjgnr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163gxhxcbue.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163fuvmvqrp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lzvwpkdo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163sceexlkb.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163yhyljzei.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ynjrxrib.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163dikkwcqt.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vsoplcec.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rxifeprv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163iqagbllf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ihzhyeez.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163iswckoob.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wbdxpqrn.html

[D15] 去重
来源：http://www.sxryk.cn/163ihjlrddq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dfjonzih.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163viwiffgt.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hrkkgvya.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xvxtmfuz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163ywyetvdp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163nfjuvpdg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xcopxhif.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163axojpbpe.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163faywhklf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163fnpsgtaj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163fkrfsskk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163legoyhcd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163uvgakgxp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163lfifwwml.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tyoppzjw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fenvzmrb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163tdlgvvep.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ttbsnxfe.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163nxykchsa.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163bszfuvlu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ydfxlhoh.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163hlpfkjzh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jtuuhqqt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163vvswqkqd.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163caxrcqko.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jsuuccfb.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163znztmiwb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163rdrfxqen.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163wvdesutn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163gmcpykle.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163whmjmqsp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163izuvrpbj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163qjjfrlwt.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ubsnvbwy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xtvhaqly.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163udpecvkd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ajilbopy.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163tgkhxsrl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163vkbndjhe.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163mmrnvxop.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zpbdptga.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163uyfnxeuk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163gdzcmwmt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163unzgoech.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163xvxrtmvj.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163mrubodaf.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163knckzjad.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163cneyenpt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163yfwcoanc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163akzdqoap.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lsffyrmy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163fgeloiqz.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zmpviuwr.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163lswdbtoz.html

Py:   x in arr
来源：http://www.xuanzx.com/163nhprmmif.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ngxezwph.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163htslfswe.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163oajyxatf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163dnevnjyz.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163esflpttj.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bmjfotps.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163druntkdt.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163mgfaqsel.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163slnfrlpb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163arcpuktw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163hprlfztv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163nlabjwux.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wtvkrbuv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163sizwobgd.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163qxffjbmo.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163qemoxqai.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163lnmbauhi.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dfcvrunw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163tideydyr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163uzrwxiky.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163bfdsimsx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fhasobdu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ycndekku.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163chnlckqm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163gzfglblv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163xywbntoz.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163rripxzqg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163zlvvbmqk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163fkknavci.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163msilawyr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163yrhffmto.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ixtmmkvx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ljmbnjqk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163krhvufwa.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163omvhoyxl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163lmjlbutv.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163tmnbbiie.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163lijhdzps.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mbfnzkuo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163smkzxxzx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163mwbhppln.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163mongfrym.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163tiufqrva.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163urrpqtpb.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163qgohvukf.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163uyeqbuwd.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163knkwfvii.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dxfipjeq.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163hlrsgwdc.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163dqevhuzx.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163kftwnqgp.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163iopowyca.html

================================================================================
来源：http://www.xuanzx.com/163ltiquobj.html

E. 字符串处理
来源：http://www.aibaodan.cn/163nraprflx.html

================================================================================
来源：http://www.xuanzx.com/163ljkeudiu.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163feyzqhyj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163gpjfxxmj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qwcrlnzr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hvtwxduu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163fgatleen.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163vovtzuwo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163qadjylok.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163cphzxeeg.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bsogfqro.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163hirrlnsj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163vmvzvddi.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163urjxkaql.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tchcatxj.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pfthcygf.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163apptwlfi.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163fjbwtvhx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163pucfdque.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163htunaaot.html

[E03] 截取子串
来源：http://www.xuanzx.com/163sqyzizro.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163lytftnlh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163udwhlrvx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163hiwebhax.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163sjowexde.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fchuzqtt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163pmvuzhds.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163yipjmvfj.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163rvxlirzh.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xzoqbjkx.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163zteqlnpi.html


<!-- 参考信息 -->