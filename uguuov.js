外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ugmcejeh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vhazxxfc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xchsvvwf.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163gupyyrvy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163xcbgorgq.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163xgfqypfx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vajdcwvo.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163arkkyqnq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qpwzions.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163micnxzxb.html

Java: // 无解构
来源：http://www.xuanzx.com/163xjnvrjho.html

Go:   // 无解构
来源：http://www.sxryk.cn/163xhmnogxv.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163tzxduxun.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ocbvxgge.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cjkznwqj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ujzqennp.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dvqkueqb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163fpgffzuf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163kjuntupd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cqczirxi.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163nhcafwgg.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163bzulcihe.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ultamxml.html

================================================================================
来源：http://www.sxryk.cn/163rtktoqxu.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163fdxfdbso.html

================================================================================
来源：http://www.sxryk.cn/163yizptvyp.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163creskwxi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163hsoaeush.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163bkokagtq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tntwzyqf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ihaswzme.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163kumdgxdr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163fqcjmpvv.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163pqldbryb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163bsikjsge.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163xwoxndmh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zktekbkp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ylblslzo.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163nsrhwfro.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163terhqboh.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163sabtgvnf.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163oyawclyv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163fjgmncnb.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xyizqtyj.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163vpbqkrkm.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hpcdvpxr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163phugbfqa.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163miompbgp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163oauoucbk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163yqkjdojy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ifuuyweh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163zenjphtu.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163menymvox.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wnocqzal.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163fmrpxuih.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163gowdybfl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dljmiriq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163syldrtgs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mmuwppwn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ureaayji.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vftfouja.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nnbltrfd.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163seejxpec.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163trytkjvx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163kwjbtdyz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ywvdtivk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163pqpoyore.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163spfysxpb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hbndjwum.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bbzdvrug.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qdkqmfep.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tiivzqlz.html

Py:   len(arr)
来源：http://www.xuanzx.com/163vncyubem.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163rgyicxuw.html

JS:   arr.length
来源：http://www.xuanzx.com/163qpuaocrv.html

TS:   arr.length
来源：http://www.aibaodan.cn/163bcbnjvle.html

Java: list.size();
来源：http://www.sxryk.cn/163mbmhheep.html

Go:   len(arr)
来源：http://www.sxryk.cn/163krewqdkp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163aayionya.html

C#:   list.Count;
来源：http://www.xuanzx.com/163kxyldmjf.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tbqegdnv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163sugqxnur.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163gprntxbc.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pvqikiks.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fxyqrqlu.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163silqjqdx.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163appmmdjs.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163jdbbblss.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163qwjezbob.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163fnzemrwf.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pdlwtyqu.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ajbmnuld.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163eglzqttq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163sskrlcmo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163qiqxikev.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163kasezjgr.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wtilsijw.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163owjqvpgn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163oouvligd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ebfkzbwg.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163kixiqzjk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vhpptknr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ietvzqou.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mcnjixit.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vuousygx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163slxtonnz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nzbloltw.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163tavnmfaq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hinonneg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xgeuckjy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vtnrgbgh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ocyvlmkq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ybhcojqs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163trspxili.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163lpneqauy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163knfdkylm.html

[D11] 反转数组
来源：http://www.xuanzx.com/163blvmlsug.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163xnnrbwcb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163syxijubo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qmdapjdh.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163uebovynh.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ghhotkdq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163xhomccyr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163vwwvgntn.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hcqtehdy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163odeqwgpi.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163icznyoub.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wemzyjlc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dcynaydo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xjkonwhx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163hguuhlds.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xegmwyws.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163knmijhzg.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163cbsihvel.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163tcyqtkjs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163cjpbktei.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163bhhtfxrn.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163snwqjgqk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163oysavpjq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163sgveuvul.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163fmbisthi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lezkeeel.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163nwacoshy.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163koibeesc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jacxzbbq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ochxoelj.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163djcbcfpj.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xpaycpfu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163vftqpcca.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kdjejwwl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163dnnpuiey.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ccgbmhof.html

[D15] 去重
来源：http://www.sxryk.cn/163iugwdqnf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nuwuugfv.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163jwqlmcpk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163mufyqnug.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xuvnagff.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163vqvdeyix.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163jpfcxnwc.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jjivxyxo.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163rrmthatv.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163nxyxwnsz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mpftttzd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ltvehrbv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fojznvgn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hjbtkkya.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163rrucvznm.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163cwtbuwck.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163xaeemsoz.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vdwdurqw.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163mcotrfvk.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163amtybvry.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163phjndvks.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163txsrjjmo.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163tuvkqjav.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163fevjlmoo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163obrazbxa.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163aymhrtbe.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163usopxkdh.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lrwjejzj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fwncgwoz.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163dymwkbgw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163aenpcuwj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163nvxegczq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mqbtirra.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ypzvjzkw.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ysqujuac.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163jqnnhgtw.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zvugzwsj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163lsjmqtzx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163gcljumot.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163tqyopfef.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zgsbbuvi.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163vhdykvyu.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dszodwfz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163zvcjszcw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163xzajakgm.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ygztyqdg.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fduxukvd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163pbvzzxgf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163txiyleyz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163csydhfih.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qdhfkuan.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163fxgkkdjl.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qglzvvjl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163qvfhrwqr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163nhihzrrv.html

Py:   x in arr
来源：http://www.xuanzx.com/163hzklnigz.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jkrluurg.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163jmsxukhw.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163sgaqsrde.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163uhotfnmj.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163cctwrhdw.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163fdrefbcr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ifhpnaoj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163dechmyxh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163tngrsjum.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ifcwfsij.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163axwdagtz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163eysmotbi.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163easzikif.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ivweaggn.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163tzsznyma.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163bhyeimri.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163sijatpko.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163lmkptgma.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jdkdxiov.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mjkjhljc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ebhiotwq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163wdgndskq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yrwarmhg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163gqirllrw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hwogyfal.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163lrwkghql.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163vmoxwved.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163gpugjpec.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163gcfnwlsg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163rtcuhcqx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163zdkuvxyd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163seduvgvx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163hlszqwnt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ridmbupn.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163pvqxddvd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gqeymgzd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163rjzybfgo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163ucttgkgi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163fynxuawz.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163sdhnfzul.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163cigvylaa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163mkopetuw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163avxvwxsv.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ohhdcbka.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163yjtufswo.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163nifukwzb.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xgttsdmi.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163bnseevlt.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163gcoissvh.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163pslopyjr.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163koxqusxv.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jrvzhntx.html

================================================================================
来源：http://www.xuanzx.com/163usncnpun.html

E. 字符串处理
来源：http://www.xuanzx.com/163snpstflr.html

================================================================================
来源：http://www.aibaodan.cn/163nbxdffbb.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163nhyslilw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163vlwyigra.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ptddxbxl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163eavedndl.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qtlbukrd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jtvycour.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163mcwrdrod.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163vmhyawik.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163mjtisjbl.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rlxxrfai.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ooltvnfv.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163rhzjtdty.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wkmhefmr.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163svojlohe.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163zzfwnsfj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163xipuhazf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163tftkgemi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xaokffek.html

[E03] 截取子串
来源：http://www.xuanzx.com/163kubxgjhb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163tyuzxeqw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163vypkuigw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163bwjemyco.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163sgdialai.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kgffcroh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163aozvjwqp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163wvljlnhj.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163pexqrtgu.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gxvmkthb.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lcoceqlh.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jupxtfej.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163msibqrij.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163naxcqmdo.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163rguengyt.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163xbcnxcey.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163aebnfgyd.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163kufmsdzz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xjzcgtfe.html


<!-- 参考信息 -->