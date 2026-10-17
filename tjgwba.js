外链999!wailian999！

[C14] 泛型函数
来源：http://www.sxryk.cn/163czlaomuq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163kffzfooi.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163nbpbkpil.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163flxqpxfo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163vbidswla.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163teqnqeok.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163kzjjztlz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163iomhosdg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163jlpdsrmw.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163gamopdlq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163fngapqeb.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163erqqrspl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163bparmnkr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kafqtxks.html

Java: // 无解构
来源：http://www.sxryk.cn/163pxcoyhcm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ewkcicax.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163uncdjptp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163czikxkiq.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163yaxgyvhk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xusrbarf.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163uleusmdh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163lhvmdcui.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ekirxyod.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163kbguqlka.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163gxtzxnnx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163xzikfotr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163prifzced.html

================================================================================
来源：http://www.aibaodan.cn/163opbctzdy.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fdhnirun.html

================================================================================
来源：http://www.sxryk.cn/163fmppkcmr.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163jdqchqbq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163grlyrcue.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163zuikkmle.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163mwnfbzak.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ilestefa.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bxkoanmv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163lhtusazs.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163cogzrlvg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163asevjdbv.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ttipuyau.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163enhiodyi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163wizrhgnv.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163mluvgick.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qoptpqwu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vjgsgsnd.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lnutaldt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163irmdykqg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163dxcinzgk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163erctedcz.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163blfkyutl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cufcsvkw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163czhkxhgn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163gvydfups.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163emvzrhdy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163udaxysvq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163yhqnmpvy.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ynxyzrlq.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163unbrcnoi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163arzdailg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163yqgxygpp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163buxslura.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163wfsrzbry.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163trjkhvlm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163iwezjlgv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163oagipvby.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163cqzzmqmf.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163jrusctnk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nszqsztw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163pfaancjh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163fylyqqrw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163witjclzh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163xwehsyfs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163rpfckidl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xvnagiwl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163rtuysqqr.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163yrwwhpok.html

Py:   len(arr)
来源：http://www.xuanzx.com/163fbgbbksb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163cnudaysz.html

JS:   arr.length
来源：http://www.xuanzx.com/163iwqkdnre.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jiafwbyk.html

Java: list.size();
来源：http://www.xuanzx.com/163lfswjklj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163nffyqsom.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163qiqnwyvt.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163gnhmknra.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ttyejpfq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163xsaomvio.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ouaxcgbj.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163swjwffch.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vqqeleem.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163zjpctuab.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163qvazaimj.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163jslxsxba.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163uouyrpxt.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163wjmkhbdf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163wajsphgv.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xdlvieeb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mfrhrevp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ehefkkiq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163dwigmagi.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163qxfujiex.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163awhmhheg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vjlgestl.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lykctjhr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gwnwafun.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163fujitdlv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lthjzzxu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163owukmdgb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163wugejxtv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dahwyukm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163bqpzxbsu.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ydpeimpm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ogmfbhst.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163qasyccvf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dndxfuqp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zrztwfzx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163uhshqiai.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ajqvjphq.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163hhrxepzk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163agestwtc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ylefkxdn.html

[D11] 反转数组
来源：http://www.sxryk.cn/163fipfllgg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zaubmzes.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163twlptyyn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163xwscfojl.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ybbxckrq.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vfvmyrny.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163qhsdpbls.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163lcfgprwd.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jcodviic.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163qhpafuen.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163anucinjx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163bvepaqge.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vpslsxdw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wwkbahwb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jhhsdwuk.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163dyxmppdk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163csnawxrx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163voramtwg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163sqlgfaci.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163nolusaag.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kgowqgzt.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kojbrazi.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wmohsztv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163mvnfhvmo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163hhswkwyt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ptbhrqsq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qhnnfqyi.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163eonpmefg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163daamyyzv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163hoczokai.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163uiowdraw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vjfmpmkt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163itenzmky.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mejzfzgy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163mjtingpj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vqujcufs.html

[D15] 去重
来源：http://www.aibaodan.cn/163hnyqjznj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163myjlcwvs.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163wjcjgyai.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163branujwg.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163iitrwiam.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163afvtanqq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163kfjmkjum.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163slbzpjub.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163huumrmre.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163oseoyhvi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163abohmyqn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163lejiqzmh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vpajqkjm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rehfdjhs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ohcylrqu.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163hkwxphce.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163pifuohjx.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163gjqbjwkw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163sxslbelt.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163jfialeqt.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163brxxwxkj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bubyzwoj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163ohcifmze.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163pxkqoowt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bhtgszps.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163tjxdawln.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ouanisgy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163eqatgpyb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163flfjwhgf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163rfxsqhjy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mpgoeizb.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163koeqjdgo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163cwgbdvbl.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163idvchawu.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163pcxvmfoc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bomqulof.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163jkteqnjw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163uzlcseot.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163pclztjdp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163xhvxlesp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qspnbuqh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163cdgnticy.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163knnjhgsc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163tykneoiw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163cazynyyw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163skzdgxny.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dabyttvb.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kmtznnpa.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163dooaqqih.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zaiwlukb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163bmkzpkhz.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163eparvait.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163kjumossd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163txcswntl.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163crhgoaea.html

Py:   x in arr
来源：http://www.xuanzx.com/163dpgxegee.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ipaqsjqi.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163zkczelnn.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xwbtpsfj.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163buwptnyx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hsherxby.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163lvbconqy.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163cgfzndig.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jhiugwiv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163uusglfeu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163upulrvbj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163kyyzrich.html

TS:   [...arr];
来源：http://www.sxryk.cn/163zaexzvrc.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163dxcuvqci.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163auammbzo.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163vzimaonj.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163xtumofpn.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163uguiqdkd.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163skdglhpg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163rrdwszdo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fkmmymdm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tquwfeqr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163brgmcusm.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163karzxuyb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163raqybuzn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163qqntieex.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163usrqyjbe.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163sjrpbedw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163rpiphonn.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163qxlsxjnb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zfxdtaaz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163johfwlyg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ojtizyuv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ycnshwgq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163thazykax.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163kldplutm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163gcuyivvq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163uhzxgcah.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163oouqfutx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ajoprfpd.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163dbfhtqyz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163laqwfxzy.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163mhyvjaaq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163hhgvpfiu.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fnrovfeq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163dvestzjg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163gsnzyuai.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163lkyqvugc.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163oikudyrf.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nqqeysvx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163rdqqlrrf.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163kuhdsyhu.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163apiytgri.html

================================================================================
来源：http://www.xuanzx.com/163mmlyjpvc.html

E. 字符串处理
来源：http://www.sxryk.cn/163bwsitmvt.html

================================================================================
来源：http://www.sxryk.cn/163huifbgnx.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163gixhspye.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163wyxwlrwk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163pbtdiolm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xekzxfkb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163emgjuhhi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163upahvubn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163jzjujeql.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163nvphjwdy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163gmczncsa.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fcfdbtrg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163uhzfkjjn.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163fcipfdma.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vqsfkmva.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rrmgdmcb.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163znwdtbum.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163agtvpqxk.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163tvcqsvhh.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163pqzyniwb.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lokwbyrv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163aesfhisu.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163nwsjhltz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163gwlzsrsl.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163pjeeqjpq.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163djrlrnnm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163qvubjvzx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163kybtwyuv.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163fxctaamg.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163sfkleugj.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163cnfvjnmd.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163sdsljdpm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gknywuro.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163almqixtn.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rtiexfer.html


<!-- 参考信息 -->