外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qxptaslj.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163eqirfkgs.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ikjhgxoi.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xtscfvoe.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163cwzgorui.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163roeoigna.html

Java: // 无解构
来源：http://www.aibaodan.cn/163udtnmabc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163euoomfzf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163dhtnzywo.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hhfepexf.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fjshpicm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mpwntisu.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163avdxqflm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163aqogjtdd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163gkwwmucr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163emjpvtae.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163pbehpbea.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lfrfroqq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163spyrchbv.html

================================================================================
来源：http://www.aibaodan.cn/163tnwkwily.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163radinutu.html

================================================================================
来源：http://www.xuanzx.com/163dxlexrxx.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163okyfcver.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163fqqiiqow.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ojdbjqnh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163rdjwgyje.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163mxbgoksx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163kccyevdr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163cayzbsgz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ekwohqsd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163hzinzwmz.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163oqbhbmpv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163lcqwvsur.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163tectkoqj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163njxdhrxb.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xklgkurh.html

Java: list.add(4);
来源：http://www.sxryk.cn/163rhhdwcco.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163nldrkntq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163igxdiutj.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163zfkonbiz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163yldgxmng.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163guvzpfgv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163sqjcuivt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163nfyaptbj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ywipcjrv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163duvmwlar.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ehypubon.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ddlzjopt.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163blkxvllt.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lqbvhvie.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163fqnzgfql.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163sambdegf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163tgtdngbn.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163qllkoday.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163huyhtxpa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163axylhisj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163zbdjjpfq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163elyfftjs.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163vlwpaapz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cyszpwir.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163aecrmjuq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ctedfupa.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ngxbsyun.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163inelmwzc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163hdrfoznv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nwhavyhj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rksiqhca.html

[D06] 数组长度
来源：http://www.xuanzx.com/163izuqrhbn.html

Py:   len(arr)
来源：http://www.xuanzx.com/163bkhjrimq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163vuimohqa.html

JS:   arr.length
来源：http://www.sxryk.cn/163irxlkflc.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ugiwiywl.html

Java: list.size();
来源：http://www.sxryk.cn/163atzhqixu.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163nqxuoywk.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163dfyzytll.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rhycigai.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163snxukhpw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163kvkllcuh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163bvyiyvnz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jesiskws.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nqoemzlp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163acuqfmro.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163dddxlqos.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163fmtorqaa.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163lvqqpzec.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163mzfdfufb.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vdlyqupn.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163vcqcdggn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163klplpynx.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hiluocdb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163orooidfg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163iwmcbpra.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163hnwwyutk.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163agfqhzgs.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163eohzikvk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163btgvvufe.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vvfxdmib.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163iugaxahd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163dvoleaxr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mvvpqrzo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163bldkglno.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wpffxtxp.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163exxjxttx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163abproqia.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hkxmpajh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163bimifrii.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163sgywnppy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lzdlsvtz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163fvjaplwv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163kmhixiiz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163youiafnw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163pblejoti.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163bwxedlbr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ihwhncgl.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163hebntkku.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163gekfkzuq.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163cyagjaje.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vpqrtcih.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163tapztvmb.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163wakcvton.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gazubhoo.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163bdxpsxev.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163velfcczz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ktqnvrvg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ardcfgcu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163pjwumgvt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163wucsizkk.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163exqsbnqk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163egupkvoy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jgakydrj.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163rjlsjnzn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163xztothxr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163urldbkoa.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cmwgijoz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qndcedzv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ztbcovcv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163msidnlay.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ongaewow.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ilprzcxb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163jtlzcmnl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hbryowvy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ugpbmihc.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jtpcdxnd.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mkbpmjfs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163oxmrvwsm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xbpbvyfb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vxydrxsv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xkjeclij.html

[D15] 去重
来源：http://www.aibaodan.cn/163pfujvfqx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zwmzdxqw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163liopkdlh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163orrynqas.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wpqyiftl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163hvgshxcg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ahvhedbd.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163yuefiptd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163lwdqguyi.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mmztdhib.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163qgyaqkep.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163nxjgdrdw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jpmfqgom.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jxpdobtf.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ccmaeteb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ovpugrhf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163prqsdumx.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vmylizax.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163uzpzetox.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jnyxccmv.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163fyecekiw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163dokxtqry.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163nmqvukfb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163alewfxbv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163jixvkeky.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wgmopium.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163otbeqajb.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163jceaglhh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163kjfqhvxb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163vtttpakd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163httmqgql.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163qhtpbshh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163goferliz.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163nudojorq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163hogitnpe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163iuddwhut.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163spcozxee.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163vdlnaeid.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ikdjpzkc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163hdthyxqz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ncoaubyn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163vawgtgui.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ztehemep.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163koswiuyp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163drotqqip.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jwtjsdak.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163wbtwjkji.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qjylwlsw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gmdxukmh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163nvufmbfv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163mrlfctjl.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163kinrupzr.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163bdtgjqmg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163ryglxejj.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163asmnqobl.html

Py:   x in arr
来源：http://www.sxryk.cn/163dxlbakue.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163wogmrfyh.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163fbncwrdo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ebfnvbhz.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ihkzwffp.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163yqdmflwz.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ilgdirfx.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zefrqzdt.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163wvvzmqbe.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163unpqsaop.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163kocatdcy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163wabpcfrq.html

TS:   [...arr];
来源：http://www.sxryk.cn/163qnipqtle.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163saktupxc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ytersfxf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163dzsfevqv.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163kblwpcpp.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cxebldzh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163zusfvojl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163evpxbdoa.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163lkjbavfq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gnqvhzfv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ukdpjgql.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xciibwqn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163reselxwh.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hhmztvfv.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163cneurqor.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163dnukblpc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163xyhlodbu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163jwfrbmoe.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163usgolqdf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163wuphlxop.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163wbpjmdsu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ybajgwue.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163mtoqsfyv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163bhookckg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163olnknaef.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163hxfaeckp.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163vjxmhvvz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ggjctkyx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163kbzvpgtk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ggranxks.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163xjhattsr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ubcxdrvl.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163liumjbev.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lggjhraw.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163pawfmsqb.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163tosoaurn.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163dhfwjmwu.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ghtwksai.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163mzfcnrhq.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xfsicode.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163swmctisn.html

================================================================================
来源：http://www.sxryk.cn/163euorbnip.html

E. 字符串处理
来源：http://www.xuanzx.com/163egimyusl.html

================================================================================
来源：http://www.sxryk.cn/163tftlfikz.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163nwquuyuv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163yryimave.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xevhbmue.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gfddhwhv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163cimzdvtm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163uuesdqzo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bfezntyh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163sexkmlmp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163oibyhuce.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163oypkieby.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163lugrcirs.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163mbrqgifz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rbvksoni.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bdfebmuh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163hkjvmeqo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163nwzhwukx.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163xexsdwau.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163yoctmieh.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163hqrdgqxu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163wfwnmtia.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163sbbiqapw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163mbqbrpil.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163zbzixscw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163txoiqvjc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163smapwoym.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163hwydappg.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163znlvbzfe.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163jfpuyiet.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163drzlikrn.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163aecohpdp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163wxjtmlnu.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163czjyjqdm.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ntkxclvm.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163ktlvjaat.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163qvuuppni.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163yxqakumn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163jegacipr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ntxibjsl.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hfneqasz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163desbydnz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163rtyagryi.html


<!-- 参考信息 -->