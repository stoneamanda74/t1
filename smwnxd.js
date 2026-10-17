外链999!wailian999！

[C14] 泛型函数
来源：http://www.sxryk.cn/163sapcudyg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163llvxgghw.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163rcshlahk.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163kbijrwyu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ytyhcllv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xagzmxja.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163iufaegmj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163shxcwbsb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163qrzdapow.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jhpsqrag.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163vxybazuw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163uzwoeuuw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163qrmcfgwi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163qthbeptj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163auvwfopp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163cysmrwwt.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bibehihx.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zecrblwy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163iefjlxpy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163mwqujkrj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163qccewhxw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163muqhnsxa.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163awmeryxz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163vkipganb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163rscrvrrj.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163qiwkgxen.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163pcojnfxx.html

================================================================================
来源：http://www.xuanzx.com/163ddluepaf.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jryakfai.html

================================================================================
来源：http://www.sxryk.cn/163tgapssaa.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163oowosydt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163uspbwtpu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vdvwtwxs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mmajtbnl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xrqngxdt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bvucwjyq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bxavsodh.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163szujgfap.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ipifogfh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mwfxvvuu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zcjzzgyx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xynmvvzd.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ynxbffge.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zdajkicf.html

Java: list.add(4);
来源：http://www.sxryk.cn/163rkqtnzhg.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163lvramqpz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163juxlkpvl.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cacjvyaz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xdskcyie.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ovpcvogc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163oognvpnj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163nmrwlupp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vsyshfly.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163weekpgur.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163gaeczocx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163dyiihlho.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163nawbyqbf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wsfsusvx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jogiqqee.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zjsjdorq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ixiwdaul.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163gyuzgcow.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ltjuebmu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jzzdgqbb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163nnypjdjk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163afgyspit.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163svuieepr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163eejwzekc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ewvqnkql.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163auayuurw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163egjwjmuq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163eaiatypi.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163mjjqdhvg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163zgdoxipd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163nmujfmwd.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163sywoajzo.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163byaijqez.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nyiocvbk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163hbkjuybe.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rzotgpml.html

Java: list.size();
来源：http://www.sxryk.cn/163vymrpemz.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ninggydp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163mvylntxm.html

C#:   list.Count;
来源：http://www.sxryk.cn/163spxkebno.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163wbjujdgx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163fqsalvxr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vqydstkr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dretkrjp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jzsnaclu.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hacqnayu.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163dqihfimj.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vkbdsxss.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163tohacuvp.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163pepvamlz.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163pthgokzc.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163dembgqfp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dxjgiscq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163cawjczbp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163vvxjwhos.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fekwyyov.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163adwkbtpc.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163eoewekjx.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163axxaosph.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ckblsars.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ewclqfnz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yikccyyx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163rskzqbfw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163dtwvwxic.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163yuscgomb.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ozwwahps.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163lmzpbdpp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dyysekar.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163uljjmkus.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gvpjkeqn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bgfwlpox.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bilnnsfo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163evzqhhev.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dpigcseh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163veznrpoc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163xyplgdnq.html

[D11] 反转数组
来源：http://www.sxryk.cn/163hejgnenw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vkrbyrdo.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163qhjalbke.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163yfunqlsg.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163txkcjehh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163wgejiiav.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ksxnrqne.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zeexbfuu.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163belrdmti.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163iepbxinp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163keaccbxd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163xcscmkmz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vrvejwee.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zxngmpqs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nufusvua.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ozfwrtwn.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163gpegwcvf.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163mnzewqms.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wxlxetlg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fixvbwir.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163gwvqmyhq.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jwvutdiy.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163drryacdl.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163rllslhyk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xhzvgkwf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163abprnxst.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tfojatlc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163azholoog.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163tfxrhwnh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ydjmkprb.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163nzcxnpmu.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163brmnwdbm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163kfuwqqzm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kzoyucfh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163cldsuakw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163kjvcthxj.html

[D15] 去重
来源：http://www.xuanzx.com/163thqyolpd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ihnqfghq.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dkzgrbek.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163netoirbh.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fegzzzpg.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163tdvqvpjy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163gmmdwmdu.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163wigtyhda.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163sctybqhr.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163orsuusho.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163wvvctxbo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ynsahxcl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mlewixhq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163luyjrlrt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163qjmegmvr.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163zzsrsqad.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163keqpoqmg.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163itfiwifi.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163rfxcmtjq.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ltlnibcv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163prlkbqbm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163tgdazlvy.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wwqftvdu.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163aboohqka.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wzpnblmu.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163zbvoednl.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ufieoifx.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lmgbxrjt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163pluonpuk.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lucangwj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163lxbvtafo.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163howfsvhb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163cwnjcvan.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163tluwcclo.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ixbetdtq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163tditvzah.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163wooixgqm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163cpexbxgp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163wkualkre.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163wknthzcx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pqguhydw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163yluxtluw.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jwizrobh.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zmijoxto.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163zjdzwgzt.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ondrvthg.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163etnybfek.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163eeshjhyx.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163sdvqikzp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gmxrxgym.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163jlkfziki.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163wcvkfgei.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hxnksjsy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163iybdfokn.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163irohbjar.html

Py:   x in arr
来源：http://www.aibaodan.cn/163qdznebgd.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163wvvwrkmc.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163wojwboad.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163rnaadhqw.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163lgwjhamf.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163viyrgnff.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163hsilhmnv.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163ywfpakyt.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163swxryalh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nykppzwa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163alzzwmwt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163kxdqxykl.html

TS:   [...arr];
来源：http://www.sxryk.cn/163mclpzvtp.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163najovcek.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163wjmtrwgm.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163jlmgcsnc.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163fxpkfiub.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163rvcwknne.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163rarsvsmf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163xrwyxuoi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163buvjcddv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163manfqyfr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163sixuhsgl.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163iqpximnx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163bgrjggak.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163axgnwiwv.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163bmjpbhel.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ttsycyny.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lqtnqnto.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163flueaifv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163pyzcmzdx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qtjhfyvm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163vyecjrmo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163hyrrvmdf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163fpsybjvd.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163aqijllrh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163vnjakkre.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163cjqauwbt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163aiqlvwgc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vuqwznfp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163epvpgiha.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ddjrbrgi.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163bvjpmjou.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163xhbmbqeu.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163hiigsatu.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163okqckzmi.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163abhrcdkt.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jkivfhlj.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163qeurjipv.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163nlijhkuv.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163omwptopg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163pxpcxxnb.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163glieqkeh.html

================================================================================
来源：http://www.sxryk.cn/163mjtuofdj.html

E. 字符串处理
来源：http://www.sxryk.cn/163mtisrlrx.html

================================================================================
来源：http://www.xuanzx.com/163qdpdbqdf.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163aeobfvyh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163htqupuvs.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ioklvxhg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163kliondve.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vgtuztjq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163bukehkku.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163epynnaaw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163aguriafh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163bthpxalj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163nlcvulau.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163vfpsbtoc.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163iqdghrod.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163msmjtezw.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cjjdncyy.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163mkkisgss.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163vkdibypa.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163spfosswv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163qjnqzkop.html

[E03] 截取子串
来源：http://www.sxryk.cn/163nzoftoqv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163stworwgj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163kfyhbtrt.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163sndlrsxh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163xgzjuwsm.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163meskmxhf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163vkhyjdcw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163bcbnpvso.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163varssgmd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163mpifbbua.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mbxdbwur.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163wyultjdk.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163hpgeljsl.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163qsxsuvhe.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163jkzpixnx.html


<!-- 参考信息 -->