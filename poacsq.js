外链999!wailian999！

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cyzabzuj.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163evvgvqsg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163zvqmaghc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163oxxvrrvw.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163qatnylht.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163sxktlypo.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163yvxfiyfg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163mefbwtep.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163frgvnjtm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163anrnebtn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ystcfycg.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163pllwmblb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ltjieehx.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kutkiajr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ppktmrro.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163fjwfdwki.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hxdgipkp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163dfqkihmi.html

Java: // 无解构
来源：http://www.xuanzx.com/163pynjcwsu.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ntfeuzxf.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163buadpbab.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163lidaqktj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163szhyhiyg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ryalnmpf.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163awemckhe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qtdrtbux.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163gcnxpddu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163qrloabhr.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ljxyjppp.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163hmpmpchm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163biwovirf.html

================================================================================
来源：http://www.sxryk.cn/163xhcdwznw.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wioluxwm.html

================================================================================
来源：http://www.aibaodan.cn/163nrzbzuor.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163svzuikjh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163bbwmxejs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163iuqrizfn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wmsmpbzx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163iihkypdh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163uoxvxyea.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163quckgqsi.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163byxhfhnn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163xilnpahn.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163skfiryys.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163kdyykvpm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163wkmounrb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163rlnaznmn.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163udimngbu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163abgzptbx.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163aodrnrad.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163bynjpvoi.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163sgrigshl.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lwwnydjg.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163mfrpxgek.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163mqtqueqp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163wokuciae.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163oyhbwfmu.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163uytaajrr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163voagfejp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163adanzbsj.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163qbyfxbap.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vviiipzy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hqjghlgk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163upguyvnm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mexkozmb.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dvfqmyjb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163sdhjuyph.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163yfuuhdkw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163pgfjmwxn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163iitlecru.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163eqgjcllm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hyuioalh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bwiqsayp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163otbdqrsu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163bjfuvdtl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163gdfmiggb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163qbuznjyc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lhtnfkei.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163lkbbwrgq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ouiajqoe.html

Py:   len(arr)
来源：http://www.sxryk.cn/163tjtdbtya.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tqweelcz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xtnrdool.html

TS:   arr.length
来源：http://www.sxryk.cn/163dheutlye.html

Java: list.size();
来源：http://www.aibaodan.cn/163vcitlqbj.html

Go:   len(arr)
来源：http://www.sxryk.cn/163qnivkeek.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nqtmallv.html

C#:   list.Count;
来源：http://www.sxryk.cn/163fazetoda.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vsjielwr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mrqtaihz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163jjwrswgr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wfxoeqeh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163kdjrslsc.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hpvuvikp.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163zrspwuoi.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163osbroisu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163dauhzjgo.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163pafytvgl.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163qgwswrjn.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163suulxyue.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163cpzykcwm.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163efeqrfav.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163qwrlstpn.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163diezqeaw.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163xopfkssh.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jxsggnic.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163adfogvxl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wevybrdw.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163vnnbqorp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wefeidsx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xkbfbhye.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bifhbkot.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hnmcgwvj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hksygkcr.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qhwesqmb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163mjbejwtw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163itjzznwm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mniwwlax.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vcrnvfyt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xpnwprpp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ahxplvmg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163thdspnea.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163zeptfmzk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163gtikpxjw.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163xdfcxjni.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163uqugpwkv.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hcgbxpzn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163eqxiihij.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163gkpuwaoi.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ydhpsdpw.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163dcpxsuij.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163lmcxfknb.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xpzhjuzi.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163hbdqaphu.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163fzaxijig.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163whmbpter.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nqktnmyx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rlvodryc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163vlhlmcoe.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163hknqnznl.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163witjibys.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163grvnelqg.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vtppdhnw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163gtaqckvd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163pglmxdju.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qagicdos.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hjvgkbwt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163zhnafnwy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qrreflio.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163itwzdxvh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163npjlmrhe.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163iyynpkvv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163cdhswqkt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rdzfnrdf.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kbbhxxie.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163iylnucnb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163lgzkkpqr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yredwuad.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163cpudolop.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163hujbcnqw.html

[D15] 去重
来源：http://www.aibaodan.cn/163ywfcvebn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163venkewvl.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163jplqcrpu.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yvspfrov.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kfklczay.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ydejowqm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163kdwjppjg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163biumpfqe.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163aveiqxyf.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jcbrhyht.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163cwystxqd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163hcahnlai.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tcngibyd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dzohvhko.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163qkfcerhe.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163epdfbwmm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163pjdyinbg.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xvhkhdng.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mjqnshwp.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163bihultqq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163mzywpixm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163xysshxwq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zkrwhmuy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163nzcosdnj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163fasunjpv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wgaawlde.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163xjdhakzg.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fborguny.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163htdpzqsy.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163amkzbksr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163dgoivhrv.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163axxzallg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163nffcqhso.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163izaqhrhj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163mudoopax.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ayolbzuj.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163raqnnkhj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163mbbdvfyv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163jubsypaz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jlgmvyvy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dqadaebd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163eswcklax.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lszfcqqj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163itqjdmdx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fmhiqbdp.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jpqxooyb.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163yeimfrks.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vuwkulpf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vuagkxus.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dxnkvmdi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163sjypoyio.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uodghpfi.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163whjestfq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ebahitkm.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163amruapqi.html

Py:   x in arr
来源：http://www.aibaodan.cn/163nciotsqj.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163fwpxkdge.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163dktrmmix.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163hvokibgs.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163hsxqpjdn.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ehukvvqm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163tycyqant.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ixrwvbiu.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rfqridkr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ekqlgpsg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163kvpnrzsv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163nnpgbacn.html

TS:   [...arr];
来源：http://www.sxryk.cn/163rxrenbyy.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163hpzoduzd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163foflnvly.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gkocwhfp.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163tdypqzct.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163gtmqapun.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163icsznbfp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163hhmnooou.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163arfvaxpg.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mjopwskm.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ybrqgoyp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dfvhptqi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163vfleubso.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163awhfxjdv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163zyxkctyn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163uckxmmbh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xioakyhz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163trqiquqn.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163lxgzxkgf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jnxzgmwo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163jarmjeyr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163dldpudzl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ksuqsmxp.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163gxemqnfl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ofewefij.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163otgpqhcq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163cchqogzu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163gfnyzsct.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163amzzgnum.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163wdhshvhl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163vsbwxtsg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163jkslmkcc.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163qvvrxfmc.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163eqnljlcf.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163lcquogdw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lvvzlwmu.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163squftvqt.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163zhulbjzq.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xgzhrvin.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zrffwkwt.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163iqztvlxe.html

================================================================================
来源：http://www.aibaodan.cn/163gzoordjo.html

E. 字符串处理
来源：http://www.sxryk.cn/163mulvxrrs.html

================================================================================
来源：http://www.sxryk.cn/163cwponbzk.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163vyhdnvzv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163trnamncr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163pcsfoqrw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wykquldn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mkrozkqi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163rrgorjfc.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ftavhdnw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163wyptmenz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163mgywyndt.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163doqubvsg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163dmlasqqv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163xraqgnqv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hkvosahx.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163yhqxdepo.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163aesllpeo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163etuaczdz.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163ncaxaqno.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163cpgogjmv.html

[E03] 截取子串
来源：http://www.sxryk.cn/163zykducfo.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163gkjinits.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ultkwmtn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163sfzpsepv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ofxtwhhe.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163knpfmtcq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163synglbbo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163vrjxpise.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fkcrgreg.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163dhezxbmz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163chgdhewl.html


<!-- 参考信息 -->