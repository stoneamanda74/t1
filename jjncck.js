外链999!wailian999！

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163eiugfoje.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163atogblnj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163rcsffofs.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wusrefls.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163tpssyjbd.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zmyomaoz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gzoypqpe.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163jhsttsst.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163juugrxwc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lqaleshq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163apuwihnp.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163hlviwcpf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hyfmqwpd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jjileujo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163qunpindl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cpbsyhvb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zklfkfqb.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zbdddrxa.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163qpmrkwvy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xkrskopf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163scrzcbaa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163obbtmpvq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163qrlritse.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163fozulmne.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163phnqynhc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rvuqiswq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163rrvgbxbo.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pdnufwiy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163isinlpmr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jmpzslqx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163zyblnzlc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163nctiohar.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163rpnysyla.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ivmeuldq.html

Java: // 无解构
来源：http://www.aibaodan.cn/163xldpmhgc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fapacvgr.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163yzmutzfl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163jdygminr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163oxgeilyr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163pwnreyfs.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ixhcotsn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163berpayxo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163salyjesf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163sjydtlbm.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163upavzvke.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ttsiadxt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163yblmwiuc.html

================================================================================
来源：http://www.sxryk.cn/163exnuckqq.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163pfurlzbw.html

================================================================================
来源：http://www.aibaodan.cn/163roatuuas.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ykgwbeby.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163iedpvbia.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163gpmynylu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163osnoxzgx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163kecgeqtf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163sidunijo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163kahmnpsb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163uzrwfdao.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163yywxyqxz.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fjxgsfoa.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163cinlruac.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163lwpbijwg.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vlxvvqlg.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163mvncxzqk.html

Java: list.add(4);
来源：http://www.xuanzx.com/163oxqkmumu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163geeepjnd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163aojquwjl.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163nhxgxbqn.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qltkyqci.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163orxrgrdi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163yirlxwoq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ehnwzdbx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163dojcjayq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163urkneryo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163xwjvfvyc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163eisgcorx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163tgvbcltw.html

[D04] 删除元素
来源：http://www.xuanzx.com/163kenkkggi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ulgydejg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163xuyfkczb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mcsrvhoh.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163gqufcqlp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163cfvkwszo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163xumflbkb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xgbauwoq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163qsdggwvk.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163hfcgbmhr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bxycllmw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163tonderxa.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163jqpqdanz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bispjsns.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163obrozbhs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163enowanqx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ipvaqdet.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rrhhzbzx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tlbsbhps.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fyglpvql.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163pjgphoyi.html

JS:   arr.length
来源：http://www.sxryk.cn/163zhjkssau.html

TS:   arr.length
来源：http://www.sxryk.cn/163wpwixlxb.html

Java: list.size();
来源：http://www.sxryk.cn/163qzlcgdya.html

Go:   len(arr)
来源：http://www.xuanzx.com/163abtjxljj.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yceyajuj.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ihkqsegw.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kwaoktii.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ccnlwnwi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163iaycjrcs.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163srguipjw.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163frisbcxa.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163onlqgxdi.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ajipynbr.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163jwajxqhh.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jnmvpepm.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vxxmopux.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163pjzvchnk.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163jqoswcft.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163hzoilnzf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163yecmkqar.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163azfbjrar.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163saayqzsh.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163zgaxdbue.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ackxeyku.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ppcuwbgh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rtqnolgj.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163krqqjzar.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163gzgjrtcy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163jaxwfhbc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163vgcidyas.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163abjrokyw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ihbuwqtn.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163mmjlbole.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163zkiqjxzk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163rtdxxpyx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jbttsjef.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tytskeva.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mfvxgjsf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163qnwesmxs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163lkmvtqbl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163rpqkrpah.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ztuytntt.html

[D11] 反转数组
来源：http://www.xuanzx.com/163rwyzyzez.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kabfiost.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163iusdcaax.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163swkvqwci.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163idalhydf.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163lptocvyn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ujpdcfez.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bulqcbgv.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xkawvktj.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ceeogzio.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163bnazxviz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wcdrdhyh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163aktrwcwb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xmunmcfh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163onuuqjwf.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163buoewwac.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163fzvujjcw.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163lpeumcui.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163wxnnwujp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163yyqblfbl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163wikrwiim.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163eipynjda.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ovyrgdfh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xethphtc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163zndmsqpg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163dxqjqihl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163wfyzrhjf.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163shawjoeq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163bdsvstmp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163odtxbaxe.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163byppmqvn.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bmxtlwfx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163aekflbqy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163zpkouasn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163quznwcil.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163pruikzlo.html

[D15] 去重
来源：http://www.aibaodan.cn/163hajepewu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dbmvpnhg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163encamvvp.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163meazsjhr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wfctqlga.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163vgwobbsa.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163mutuhowk.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163snbogdzf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163sidtclbt.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163brzhpjmn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163otclxiqn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163bixvnceu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vrgppbau.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qhkcchju.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163unwkwqfi.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163siejgacp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ircjgcba.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163bjrsnnnl.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163zruwnqih.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163miaannqj.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163gbwjfwld.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163hviygnky.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163pzxmttnr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163bjauszlz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163lcrgcbdw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163mnfazntu.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163klipllle.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163igfeqftk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163oufyctri.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jlsaiual.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163nvllpvlz.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163mgywpjjc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163eulrtzkp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163okoxvhbd.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163fgmgpggq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163zvotznxl.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ixoqaskw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163cokjubnr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163mxrxslez.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163qkzrtwjo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ridnrkil.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hjvyfblx.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163noqndsby.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hiovpton.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163xhcjlvbi.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163iamawaio.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163qkwylmoc.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qsnzmsel.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163udmbduum.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163loktuhgf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163eemjranb.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ywvigqls.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163voxdpepu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163szqvogsg.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xuwjgjur.html

Py:   x in arr
来源：http://www.sxryk.cn/163qcgduldv.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163pfqaforj.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163mklnywbx.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163uxofdilu.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163tgpcwalr.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163oglaegue.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163cgsuxsey.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163fnhwgjve.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163nwawyiwz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ijobyair.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163serglihz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163lvtlrykq.html

TS:   [...arr];
来源：http://www.xuanzx.com/163nsxqplhy.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163pvhbbttf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163jbldtfsb.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ghvggwff.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163upbnvwjr.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163zjnwvtxm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163yowdqgbf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163qxkchyfw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hspbofxl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mrdyzfaz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163bcvdhmkn.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wkpodkag.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163aeoiohzm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163sahoveie.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163zqhoqicn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pvogvdpo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163pichdffv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163rlotblcq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163rofqgsux.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163gpxmhhld.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163lnhhvojk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163coblnwgl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163hhvylkse.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163htramzhx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163fffbwlls.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163wazfvmmj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163nknjxrkm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163xmbodtfh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jcormndh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163nearhthc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163cjmuekiq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163tkbqikec.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163kmofacog.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163txgpiqxm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163enotfgdr.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wstfsbmg.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163useeeupn.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163snwwvtpi.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163jjqfhtle.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163mhwjuerw.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163yfroxncr.html

================================================================================
来源：http://www.sxryk.cn/163buqawyfb.html

E. 字符串处理
来源：http://www.aibaodan.cn/163vzakymry.html

================================================================================
来源：http://www.sxryk.cn/163xisnjjot.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163xkbxmzil.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163wxwqixqi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163zrdeayko.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163skchwebc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163bgasozmx.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163sieqapgs.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163buhbkama.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163vwnnzuzk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163qrmucxje.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163gbbdfyvu.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163zgrzwfox.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163viooahsn.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163oalwoycd.html


<!-- 参考信息 -->