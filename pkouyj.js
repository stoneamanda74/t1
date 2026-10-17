外链999!wailian999！

[C14] 泛型函数
来源：http://www.sxryk.cn/163fngutoab.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fogotwxw.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163nfvvffgq.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163spdgykvk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163lfonycqu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163cxutndwd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163gzqrvsgi.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163hmiuycfc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163oeyizydd.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163gdjuzxxm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163kavokixl.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163bkvruaoa.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163hthqrmfx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rjxftpji.html

Java: // 无解构
来源：http://www.xuanzx.com/163iwgasqet.html

Go:   // 无解构
来源：http://www.sxryk.cn/163wrvhwuvt.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163beywqdlb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163uezktkci.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163yfzrglyv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mczguuag.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163hzksuhxo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163czzkpnug.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163cbtdvlow.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nnlwlmvs.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163awlzkkuq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163klkimldc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gamjuygt.html

================================================================================
来源：http://www.xuanzx.com/163ukxlvwvp.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xjliuzhu.html

================================================================================
来源：http://www.aibaodan.cn/163wlgpegox.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gfooepuh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163khjzonjq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163bngvcdgl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163jnyqnwrn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163nrkbuyam.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163pimbrmsb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ktwovaet.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163idlmqdjy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163tymrpdvt.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163eopedofk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163slxzgbuj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163jfnvxxhp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163uqxmhibb.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163obzjdfoh.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ibmhurbv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ozvmvzzk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163pkuqnyll.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xksgskyp.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163gyvglbdz.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ilryperv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163dbnyxluu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163elylgytk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163zmyjodbw.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jjiriswu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163cyzftpbq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163aevfijcb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kkzmqppb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qxzeindr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pyktoecf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163lfixsppc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ctflfqvk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163gdzesgtw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163hbsmpshw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gyhfyudi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163brwoufje.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163oejxsnnl.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163qyfnkwkz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gkvuymcs.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ugllcgsy.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163enbqplum.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ghhpssos.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163zuvcjoph.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163svrofbps.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163culnlfey.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163eyuzzsdk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ynyswkkn.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ftgsiado.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163fkuskksp.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qbutajzq.html

TS:   arr.length
来源：http://www.xuanzx.com/163rfuyzgng.html

Java: list.size();
来源：http://www.aibaodan.cn/163szdonyff.html

Go:   len(arr)
来源：http://www.sxryk.cn/163dvhivwge.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163dapuojpu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163lddxdpht.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163sgzgrfte.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163buvipnhm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163omxkynef.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mtulxtnk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163maswyzgv.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163bmbtxeef.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163drljufmj.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163jtbtismd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163kgtocaxf.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163okdmytpn.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163tpmqprvj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ygdjtcop.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163zpoocwfe.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163rawhdvru.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163qinvatyt.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163srkvvphw.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163gcnczegn.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tvhzuxxw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mivygwrc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gjryychj.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163krmfdmbb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lnerdghy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163tsopymeu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163avyrcgcn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163migjumkt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rmygtruy.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hbgovbcg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163vejrfpqx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163pfalhgvr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dhlkgssu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yzsumzvl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qczksvhg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163eeregznx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qzvvqwcq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163tiezgfvn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163grnogaro.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ziovijua.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163nfkfnklv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163xrjfkeog.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163kbrjsfhe.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fhespuad.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163eyuiaqok.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iisbodyz.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163jaslroxe.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hbsiiblh.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kkglarbq.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163szokuara.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ggqbqhpl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wzzutgyy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163svfqcnns.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uqzzmzhq.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nntxbbxm.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163phwhieis.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163rrzchlhn.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163mnazuvlk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163odxzrlrq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bifvfkfa.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bxecfwbe.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xmkutexv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163toritryz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rghhbxyn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163yufummsy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xrabjxke.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163milubsit.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mjmjnznd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163wtymjwsp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xfwotkcl.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hkqqsyju.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hyoqydzl.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dbjkbsle.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163anvfjrzo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vdpbxrkq.html

[D15] 去重
来源：http://www.xuanzx.com/163abehenqb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ymtpwvxc.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vzuyhuog.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163owftbxnq.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163gdwepyiw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163pmhlmxsr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163djmumtjz.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zhprzpkj.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kvonvanw.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jpdkmtfh.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163aztrnqny.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163pyugkjgq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163bugfgsfv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hbceyrcw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163wtdusiyg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ygnrigxd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163scygdttl.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xcsfhjzv.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163utmxqqry.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163withcyac.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163pqrgmklr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ghjkminj.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163ijpjgxfr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163nitrazkv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rfsxfqcr.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163duartsbt.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163zvhjnqeu.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163cfzcuwzd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ciezavzc.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163aidfvmac.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163shnmrzsu.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163eitrhogw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163dqpbppri.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ydmsxgvw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163emryursz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dwlyvavw.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163tbwgsqpx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163hyzwvtha.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163mkzsinpu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yjsgjpqs.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163acnscnpj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rgrdmkne.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163yqdokumm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163nhvqmtyk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163uhsklxut.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163efdpowmr.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jhvvagqa.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163slwtwsph.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qlpcppjs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zcydnacu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163okutmgaz.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163bluoxyih.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163crbykmea.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163aablsfml.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163wbkvfexd.html

Py:   x in arr
来源：http://www.sxryk.cn/163cqjniuuo.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163zgjouaju.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163bwnrkeyi.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163lvprtzmj.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163sdknnhls.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163rmmzbqvw.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163lgaodfum.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163qbwlyynu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163bjgkckba.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qkmaydkb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163kfxrzigl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163pbjehrfs.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wtafsmuh.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qvhubpvx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163rnjephrk.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kubdymor.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163bfaiumrh.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163scrhdfjs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163nzdihrge.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163zoheleck.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fumzugma.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163oiljleon.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163vrqejubq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163onoyhotx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163tpagrqjt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163wycurrtz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163urdyolkq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163eyynkavr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ngniymfu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wxsdwdsh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163nbgrubne.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163anhyaiuv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163eyvzwild.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vuowfmgn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163aocsmbjn.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163yahpejgz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163bbbfmoww.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163jyvzocua.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163sugrhzqz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163qxnbaofi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163uzkympaf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ccrbylvo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wzfjxygv.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163pocnydab.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163cautqdlz.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163prwsgweu.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163mkmmkexb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163uhjddveh.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zaoezejv.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163gstcxrsi.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163kafowkxy.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ebjvgprc.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163ilsijlgl.html

================================================================================
来源：http://www.aibaodan.cn/163jcfgtshw.html

E. 字符串处理
来源：http://www.xuanzx.com/163bbscfonl.html

================================================================================
来源：http://www.sxryk.cn/163uymbkwnt.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163lwquwqip.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163wegwvled.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163twbywwjp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wmfooomh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ybgxmhcs.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wgcyvrhb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163scbjvnxr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163maiqwzgh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163gszoseur.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163usazrcgk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ukjqmmqo.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163riehuvol.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bauvvpcc.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163rovltjlh.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163rszfoqfx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163wqbinwen.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163zbsbibka.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163jylwrnnw.html

[E03] 截取子串
来源：http://www.xuanzx.com/163qtyknwmd.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163lnrjwuax.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rxaclowe.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163zqnjucqy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163doolzblp.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163lyoxhnil.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163nbawljrz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163pgsxmerv.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163mqnolkes.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fjejtnjl.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163dyetbgus.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163wccbhjxv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zzmfswmb.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163rrgygqjb.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163wtfetdge.html


<!-- 参考信息 -->