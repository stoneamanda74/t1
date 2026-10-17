外链999!wailian999！

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163nmfimrqh.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163clarirpv.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kxkcjvqf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163gqmuqarz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rdgvzmct.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163alchxefs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163bsvojctq.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163twlrlbmw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zuymktgz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tbeobldv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163bafqjrzm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yejpinuo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zbvzevqc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163touwqcdv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163akaknkec.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163qsdjpwsb.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163oqvrxbcn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qzgpmsfz.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163figpshjp.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163qkysxjxg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163fqoatlle.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163akngxgvc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163lhdtzcph.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163lelqtekq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163xmuvhghx.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163etkxybto.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163veguicaq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163kmjnhhga.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yqrnaxsa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163figgosfw.html

Java: // 无解构
来源：http://www.xuanzx.com/163hzmxfnsc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163fephotmp.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163rodzviuz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163hjxakjol.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163wosdmtfa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163wbbjwfyx.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ejcqapnm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163mmvwnnpa.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163klmrbmly.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cficvyuf.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163llyjigfk.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163kiuolrur.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163blyerddj.html

================================================================================
来源：http://www.aibaodan.cn/163vlotsmdu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qqyrbqnc.html

================================================================================
来源：http://www.sxryk.cn/163bcozywkg.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163leliblrm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kyhumivb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163atauxhmq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163lirwvinv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163qzcedjzg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163lqcycydy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163atsnkosh.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163bwppxwlu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163cqwybrdu.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bexkpwxc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163tacxpswj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163jkomovba.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ckirbojh.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163cexukqca.html

Java: list.add(4);
来源：http://www.sxryk.cn/163epcpqlgn.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163dykdhzuk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163pldiwhze.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163qhrrlipa.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dtbtdbah.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163csvjlwkl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163uataojvh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163yjynzuwl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163syetjpxy.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qxxbvxez.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wwmsolnb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163qqtbnhiw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163crbntqvf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163idgeqltu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ppbarsqx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xjyptocl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ezafeoki.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163koloqdsf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163skcpvqku.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163sheteoof.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163wxxsxzjq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nkzjohgq.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ibapnzjt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163eymlildp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yqtjhnqs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163nmrvipbq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dwhcnndg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163vmfccnhq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163oqgnekmt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gcukrcsw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vzzehqrm.html

[D06] 数组长度
来源：http://www.xuanzx.com/163jjpswmkh.html

Py:   len(arr)
来源：http://www.xuanzx.com/163mittpcvl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vvqxdfax.html

JS:   arr.length
来源：http://www.aibaodan.cn/163vysyjkhk.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ocanifev.html

Java: list.size();
来源：http://www.xuanzx.com/163qmwyqfzx.html

Go:   len(arr)
来源：http://www.sxryk.cn/163yaitbpaf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163dyfkfznx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163yhzpnajr.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163mmxfpbny.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163vavvxodt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gzrbvgrr.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uamzepin.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fmisnuga.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163lknzpuzh.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163icqjuths.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zwhhoswp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163fbdxnknh.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163oqavgppa.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gcnrmokq.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163iwjgssgo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163lhlgfwqu.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xxgxpzus.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163qcxzwyvk.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163lcenfuso.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ytqxiusj.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mrtgudgh.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163hvjarsvf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mnzcudwd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163tudeafja.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163aksxbkzo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hhdvatst.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ugarqdyk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163swaujnpj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uvamofxy.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163uoothxtq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163psoirxzu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163tsiwuegc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fnklsypm.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zgkgqedv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163naqnwmon.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163yyuoytol.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163fccluxpr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xjdsapci.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163kdkwxaqu.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163dscypkpm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163fvwvcfop.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163zctnsdwk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163kxkfdylf.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163wxwxarbn.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163lryipgys.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lchoqggh.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163nanglsfv.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163udsnqtzs.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163mjdrojap.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163rkamhekv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163umvhnrtu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mdoxvxhz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gsuqvzfd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wgvqbipd.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163gcgixzuy.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ddsmkvem.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ephkvbyt.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163exorkthm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ywihezgp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rmuecxuh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163nemqxkfb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qngmkhen.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ylapoaqx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163lyjiafaj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163mzfvwzgk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163jabisjym.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163smyhcibm.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163utnltuyy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163mifuasnw.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zoswxxis.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qhcxqhqi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163vylblcmn.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zjdjruto.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163oxocfvds.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163rlsiargf.html

[D15] 去重
来源：http://www.xuanzx.com/163ivckhigv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163irtbxaph.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zglkrpzm.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xyrcnfkv.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163oqsnqgdz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gwkzwuud.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163huhwvkte.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ruyvpxqj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163inawetne.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163zrqwykcj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ugmdnwzs.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ygyqjkrx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dsnxbhdc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163diilylds.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163oodgpjlk.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qlnellvi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ovmfbkkl.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163pxedmjvf.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163geodwfpw.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163dgwpiroj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163vkotzxen.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163yuhlsghq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163nrltgzns.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ctddusuf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gcvazvan.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163rnciyzxm.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163yyzybgbn.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lzvwnxlg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163pjccdokf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163lanzdazh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163rogbajmf.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163szfgnfoe.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163jdehousw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163uvphazxj.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163sxoowmjr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163hdljkqup.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163pfsqpugu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ijbkkphc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163klkgmhhh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ugrbkgev.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hqqsfnff.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163gflzlgpd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163hirvjjuo.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163cuztwurk.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dsnoizbg.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163pegwlowh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pjncqvnu.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tlmuscvj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kudhbmpc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wihrkbot.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ojdgkgem.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163baojxrwl.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163eotrckfj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163yqjjniqw.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163qpvtcjgf.html

Py:   x in arr
来源：http://www.xuanzx.com/163nveusmmq.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163sqjziyyr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163siwfoywc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163narbuwcz.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163qhdudsgu.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163asmnrgzw.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163vrlotrjl.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163pxausdji.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wifozdup.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163dvcnuayx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163znplmony.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163fpbyqzdb.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ipinyptk.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163nxaviicl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ebcusxjd.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163kbbkkoki.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163mqivzxdw.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ootikphc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163gulphpkw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163tqhdpwkh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vxjdpfvc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qgjtypsi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zbdriqgk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gkvcsqcn.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163qsedblge.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163cpvpcjbh.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ebpescsj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xnpllxgp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lmlildka.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163siqndpvr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gnbdgmff.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163vxlyomhd.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163fbeeftzm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163czzkbmcy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163hfgnugrv.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163zvnyffjw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rlrwksiu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ynsjhkky.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ztusgfew.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163wzgttvqi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ppbjqltw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163byezoecv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163xgbtzfmz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hbsvyyal.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vuspdotm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163rpznupsb.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ominynds.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163adglywye.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vmyvuhwo.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163dbjihkbm.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163olbojbbo.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163zgbdbcef.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ltzvopzz.html

================================================================================
来源：http://www.aibaodan.cn/163wepemhmh.html

E. 字符串处理
来源：http://www.xuanzx.com/163zueknmzb.html

================================================================================
来源：http://www.aibaodan.cn/163nvjhupdl.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163rxpbahfb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163bdfpzxtq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163trbzapun.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163shxohacy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163omufwfnj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rmieqhwf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163mejvibxa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163heovwqpi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163yniccdik.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163tiwmjzjd.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163yreckniw.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163aluynwes.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hoyujhdc.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vtjcaptt.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163vlzjrrnu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163fjixlcvo.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vechnjuh.html


<!-- 参考信息 -->